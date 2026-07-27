'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [cursorState, setCursorState] = useState<{
    active: boolean
    type: string | null
    isDown: boolean
  }>({
    active: false,
    type: null,
    isDown: false
  })

  useEffect(() => {
    // Only enable on fine pointer devices and when reduced motion is not requested
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!finePointer || reducedMotion) return

    let mouseX = -100
    let mouseY = -100
    let cursorX = -100
    let cursorY = -100

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Update interactive target detection via event delegation
      const target = e.target as HTMLElement
      const interactiveEl = target.closest('[data-cursor]')
      
      if (interactiveEl) {
        const type = interactiveEl.getAttribute('data-cursor')
        setCursorState(prev => ({ ...prev, active: true, type }))
      } else {
        setCursorState(prev => ({ ...prev, active: false, type: null }))
      }
    }

    const onPointerDown = () => {
      setCursorState(prev => ({ ...prev, isDown: true }))
    }

    const onPointerUp = () => {
      setCursorState(prev => ({ ...prev, isDown: false }))
    }

    const onLeave = () => {
      setCursorState(prev => ({ ...prev, active: false, type: null }))
    }

    // High performance tight interpolation loop
    let raf: number
    const animate = () => {
      // Very tight lerp for responsive feel (0.4)
      cursorX += (mouseX - cursorX) * 0.4
      cursorY += (mouseY - cursorY) * 0.4
      
      if (cursorRef.current) {
        // Apply modest offset (16px, 16px) and handle boundaries
        const offsetX = cursorX > window.innerWidth - 100 ? -24 : 16
        const offsetY = cursorY > window.innerHeight - 50 ? -24 : 16
        
        cursorRef.current.style.transform = `translate3d(${cursorX + offsetX}px, ${cursorY + offsetY}px, 0)`
      }
      raf = requestAnimationFrame(animate)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerdown', onPointerDown, { passive: true })
    document.addEventListener('pointerup', onPointerUp, { passive: true })
    document.addEventListener('pointerleave', onLeave)

    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('pointerup', onPointerUp)
      document.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Minimal asymmetric arrow SVG
  const ArrowSVG = ({ isHorizontal = false, isVisit = false }: { isHorizontal?: boolean, isVisit?: boolean }) => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{
        transform: isHorizontal ? 'rotate(0deg)' : (isVisit ? 'rotate(-45deg) translate(2px, -2px)' : 'rotate(-45deg)'),
        transition: 'transform 0.2s cubic-bezier(0.1, 0.9, 0.2, 1)'
      }}
    >
      {isHorizontal ? (
        // Horizontal double arrow for drag
        <>
          <line x1="2" y1="12" x2="22" y2="12" />
          <polyline points="8 6 2 12 8 18" />
          <polyline points="16 6 22 12 16 18" />
        </>
      ) : (
        // Asymmetric directional arrow
        <>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </>
      )}
    </svg>
  )

  if (!cursorState.active) {
    return (
      <div 
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition: 'opacity 0.2s cubic-bezier(0.1, 0.9, 0.2, 1)'
        }}
      />
    )
  }

  // Derive visual state
  const isVisit = cursorState.type === 'visit'
  const isDrag = cursorState.type === 'drag' || cursorState.type === 'move'
  const isDown = cursorState.isDown
  
  let displayText = ''
  if (isDrag) {
    displayText = isDown ? 'HOLD' : (cursorState.type === 'drag' ? 'DRAG' : 'MOVE')
  } else {
    displayText = cursorState.type ? cursorState.type.toUpperCase() : 'VIEW'
  }

  const color = isVisit ? 'var(--accent)' : 'var(--text-primary)'

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        opacity: cursorState.active ? 1 : 0,
        transition: 'opacity 0.2s cubic-bezier(0.1, 0.9, 0.2, 1)',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: color,
        // Optional dark mode contrast handling could be done via mix-blend-mode if needed, 
        // but explicit data-cursor colors on dark sections can also work. 
        // We'll rely on the design aesthetic: near-black or red marker.
      }}
    >
      <div 
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          transform: cursorState.active ? 'translateX(0)' : 'translateX(-5px)',
          opacity: cursorState.active ? 1 : 0,
          transition: 'transform 0.2s cubic-bezier(0.1, 0.9, 0.2, 1), opacity 0.2s'
        }}
      >
        {displayText}
      </div>
      <ArrowSVG isHorizontal={isDrag} isVisit={isVisit} />
    </div>
  )
}
