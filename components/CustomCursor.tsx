'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only enable on fine pointer (mouse) devices and when reduced motion is not requested
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return

    if (cursorRef.current) {
      cursorRef.current.style.display = 'block'
    }

    let mouseX = -100
    let mouseY = -100
    let cursorX = -100
    let cursorY = -100
    let isVisible = false

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isVisible && cursorRef.current) {
        isVisible = true
        cursorRef.current.style.opacity = '1'
      }
    }

    const onLeave = () => {
      isVisible = false
      if (cursorRef.current) cursorRef.current.style.opacity = '0'
    }
    const onEnter = () => {
      isVisible = true
      if (cursorRef.current) cursorRef.current.style.opacity = '1'
    }

    // Direct DOM styling for interactive hover states without React re-renders
    const onOverInteractive = () => {
      if (innerRef.current) {
        innerRef.current.style.width = '36px'
        innerRef.current.style.height = '36px'
        innerRef.current.style.backgroundColor = 'transparent'
        innerRef.current.style.border = '1.5px solid rgba(255, 255, 255, 0.8)'
      }
    }

    const onOutInteractive = () => {
      if (innerRef.current) {
        innerRef.current.style.width = '10px'
        innerRef.current.style.height = '10px'
        innerRef.current.style.backgroundColor = 'var(--text-primary)'
        innerRef.current.style.border = 'none'
      }
    }

    const addInteractiveListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
      )
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onOverInteractive)
        el.addEventListener('mouseleave', onOutInteractive)
      })
      return interactives
    }

    // High performance animation loop
    let raf: number
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.18
      cursorY += (mouseY - cursorY) * 0.18
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`
      }
      raf = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    const interactives = addInteractiveListeners()
    raf = requestAnimationFrame(animate)

    const observer = new MutationObserver(() => {
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onOverInteractive)
        el.removeEventListener('mouseleave', onOutInteractive)
      })
      addInteractiveListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onOverInteractive)
        el.removeEventListener('mouseleave', onOutInteractive)
      })
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 'var(--z-cursor)' as any,
        pointerEvents: 'none',
        willChange: 'transform',
        mixBlendMode: 'difference',
        display: 'none',
        opacity: 0,
        transition: 'opacity 0.2s ease',
      }}
    >
      <div
        ref={innerRef}
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'var(--text-primary)',
          transform: 'translate(-50%, -50%)',
          transition: `width 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                       height 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                       background-color 0.15s ease,
                       border 0.15s ease`,
        }}
      />
    </div>
  )
}
