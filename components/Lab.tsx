'use client'

import React, { useState, useEffect, useRef } from 'react'

/* =========================================================================
   EXPERIMENT 01: MAGNETIC TYPE
   Letters repel/attract subtly based on pointer position.
========================================================================= */
const MagneticType = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([])
  
  const text = "PULL"
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      // Only react if within the container (or slightly outside)
      const isInside = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      )
      
      lettersRef.current.forEach((letter, i) => {
        if (!letter) return
        if (!isInside) {
          letter.style.transform = `translate(0px, 0px) rotate(0deg)`
          return
        }
        
        const letterRect = letter.getBoundingClientRect()
        const centerX = letterRect.left + letterRect.width / 2
        const centerY = letterRect.top + letterRect.height / 2
        
        const deltaX = e.clientX - centerX
        const deltaY = e.clientY - centerY
        const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        
        const maxDist = 200
        if (dist < maxDist) {
          // Attract towards cursor
          const pullFactor = (maxDist - dist) / maxDist
          const tx = deltaX * pullFactor * 0.4
          const ty = deltaY * pullFactor * 0.4
          const rot = (deltaX / maxDist) * pullFactor * 15 // slight rotation
          
          letter.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`
        } else {
          letter.style.transform = `translate(0px, 0px) rotate(0deg)`
        }
      })
    }
    
    const handlePointerLeave = () => {
      lettersRef.current.forEach((letter) => {
        if (letter) {
          letter.style.transform = `translate(0px, 0px) rotate(0deg)`
        }
      })
    }
    
    // Use pointermove on window so it smoothly tracks even if moving fast
    window.addEventListener('pointermove', handlePointerMove)
    container.addEventListener('pointerleave', handlePointerLeave)
    
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      container.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])
  
  return (
    <div 
      ref={containerRef}
      data-cursor="move"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#FAF9F7'
      }}
    >
      <div 
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          display: 'flex',
          gap: '4px'
        }}
      >
        {text.split('').map((char, i) => (
          <span 
            key={i} 
            ref={(el) => { lettersRef.current[i] = el }}
            style={{
              display: 'inline-block',
              transition: 'transform 0.2s cubic-bezier(0.1, 0.9, 0.2, 1)', // fast response, smooth decay
              willChange: 'transform'
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: '24px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-tertiary)' }}>
        MOVE POINTER OVER TEXT
      </div>
    </div>
  )
}

/* =========================================================================
   EXPERIMENT 02: BUTTON LAB
   Magnetic button interaction.
========================================================================= */
const ButtonLab = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  useEffect(() => {
    const container = containerRef.current
    const button = buttonRef.current
    if (!container || !button) return
    
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      const btnRect = button.getBoundingClientRect()
      
      const containerCenterX = rect.left + rect.width / 2
      const containerCenterY = rect.top + rect.height / 2
      
      const deltaX = e.clientX - containerCenterX
      const deltaY = e.clientY - containerCenterY
      const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      
      // Magnetic area radius
      const magneticArea = rect.width / 2
      
      if (dist < magneticArea) {
        // Move button slightly towards cursor
        const tx = deltaX * 0.3
        const ty = deltaY * 0.3
        button.style.transform = `translate(${tx}px, ${ty}px)`
      } else {
        button.style.transform = `translate(0px, 0px)`
      }
    }
    
    const handlePointerLeave = () => {
      if (button) button.style.transform = `translate(0px, 0px)`
    }
    
    container.addEventListener('pointermove', handlePointerMove)
    container.addEventListener('pointerleave', handlePointerLeave)
    
    return () => {
      container.removeEventListener('pointermove', handlePointerMove)
      container.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#1A1A1A', // Dark theme for contrast
        overflow: 'hidden'
      }}
    >
      <button
        ref={buttonRef}
        className="lab-magnetic-btn"
        data-cursor="try"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-small)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-wide)',
          color: '#1A1A1A',
          backgroundColor: '#FAF9F7',
          border: 'none',
          padding: '20px 48px',
          borderRadius: '100px',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          transition: 'transform 0.3s cubic-bezier(0.1, 0.9, 0.2, 1), background-color 0.3s, color 0.3s',
          willChange: 'transform'
        }}
      >
        <span style={{ zIndex: 2, position: 'relative' }}>DISCOVER</span>
        <span className="btn-arrow" style={{ zIndex: 2, position: 'relative', transition: 'transform 0.3s' }}>↗</span>
      </button>
      
      <div style={{ position: 'absolute', bottom: '24px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#8C939C' }}>
        MAGNETIC AREA
      </div>

      <style jsx>{`
        .lab-magnetic-btn:hover {
          background-color: var(--accent) !important;
          color: #fff !important;
        }
        .lab-magnetic-btn:hover .btn-arrow {
          transform: translate(3px, -3px) rotate(45deg);
        }
      `}</style>
    </div>
  )
}

/* =========================================================================
   EXPERIMENT 03: KINETIC TYPOGRAPHY
   Text responds to pointer position across the container.
========================================================================= */
const KineticType = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0) // -1 to 1

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      // Normalize X from -1 to 1 relative to container
      const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      setOffset(Math.max(-1, Math.min(1, normalizedX)))
    }

    const handlePointerLeave = () => {
      setOffset(0)
    }

    container.addEventListener('pointermove', handlePointerMove)
    container.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      container.removeEventListener('pointermove', handlePointerMove)
      container.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      data-cursor="move"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'var(--accent)',
        color: '#FAF9F7',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}
    >
      {/* 3 lines of text moving in opposite directions */}
      <div 
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 0.85,
          textTransform: 'uppercase',
          transform: `translateX(${offset * -40}px) skewX(${offset * 10}deg)`,
          transition: 'transform 0.5s cubic-bezier(0.1, 0.9, 0.2, 1)',
          opacity: 0.5
        }}
      >
        INTERACTION
      </div>
      <div 
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 0.85,
          textTransform: 'uppercase',
          transform: `translateX(${offset * 60}px) skewX(${offset * -15}deg)`,
          transition: 'transform 0.5s cubic-bezier(0.1, 0.9, 0.2, 1)',
          zIndex: 2,
          position: 'relative'
        }}
      >
        INTERACTION
      </div>
      <div 
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 0.85,
          textTransform: 'uppercase',
          transform: `translateX(${offset * -40}px) skewX(${offset * 10}deg)`,
          transition: 'transform 0.5s cubic-bezier(0.1, 0.9, 0.2, 1)',
          opacity: 0.5
        }}
      >
        INTERACTION
      </div>
      
      <div style={{ position: 'absolute', bottom: '24px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#FAF9F7', opacity: 0.8 }}>
        SWIPE / MOVE
      </div>
    </div>
  )
}

/* =========================================================================
   EXPERIMENT 04: LINE STUDY (SVG)
   Draws a simple trailing path following the cursor.
========================================================================= */
const LineStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [points, setPoints] = useState<{x: number, y: number}[]>([])
  const requestRef = useRef<number>(0)
  
  // Track mouse position
  const mousePos = useRef<{x: number, y: number} | null>(null)
  const pointsRef = useRef<{x: number, y: number}[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }
    
    const handlePointerLeave = () => {
      mousePos.current = null
    }

    container.addEventListener('pointermove', handlePointerMove)
    container.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      container.removeEventListener('pointermove', handlePointerMove)
      container.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  // Animation Loop for trail
  useEffect(() => {
    const updateTrail = () => {
      const maxPoints = 25
      
      if (mousePos.current) {
        pointsRef.current.push({ ...mousePos.current })
      } else {
        // If mouse left, slowly shrink the trail
        if (pointsRef.current.length > 0) {
          pointsRef.current.shift()
        }
      }

      if (pointsRef.current.length > maxPoints) {
        pointsRef.current.shift()
      }
      
      setPoints([...pointsRef.current])
      requestRef.current = requestAnimationFrame(updateTrail)
    }

    requestRef.current = requestAnimationFrame(updateTrail)
    
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  // Generate SVG path string from points
  const getPath = () => {
    if (points.length < 2) return ""
    let d = `M ${points[0].x} ${points[0].y}`
    for (let i = 1; i < points.length; i++) {
      // Create smooth curve if possible, but simple line is faster/reliable
      d += ` L ${points[i].x} ${points[i].y}`
    }
    return d
  }

  return (
    <div
      ref={containerRef}
      data-cursor="drag"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: '#FAF9F7',
        overflow: 'hidden',
        cursor: 'crosshair',
        backgroundImage: 'radial-gradient(var(--border-primary) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}
    >
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        <path
          d={getPath()}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'stroke-width 0.2s' }}
        />
        {points.length > 0 && (
          <circle 
            cx={points[points.length - 1].x} 
            cy={points[points.length - 1].y} 
            r="6" 
            fill="var(--accent)" 
          />
        )}
      </svg>
      
      <div style={{ position: 'absolute', top: '24px', left: '24px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-tertiary)' }}>
        DRAW TRAIL
      </div>
    </div>
  )
}

/* =========================================================================
   MAIN LAB COMPONENT (Index Architecture)
========================================================================= */
export default function Lab() {
  const [activeExperiment, setActiveExperiment] = useState<number>(0)
  const [easterEggActive, setEasterEggActive] = useState(false)
  
  const experiments = [
    {
      id: 0,
      number: '01',
      title: 'MAGNETIC TYPE',
      category: 'POINTER STUDY',
      year: '2026',
      component: <MagneticType />
    },
    {
      id: 1,
      number: '02',
      title: 'BUTTON LAB',
      category: 'MICRO INTERACTION',
      year: '2026',
      component: <ButtonLab />
    },
    {
      id: 2,
      number: '03',
      title: 'KINETIC TYPOGRAPHY',
      category: 'MOTION STUDY',
      year: '2026',
      component: <KineticType />
    },
    {
      id: 3,
      number: '04',
      title: 'LINE STUDY',
      category: 'SVG PATH INTERACTION',
      year: '2026',
      component: <LineStudy />
    }
  ]

  const handleEasterEgg = () => {
    setEasterEggActive(true)
    setTimeout(() => {
      setEasterEggActive(false)
    }, 1500)
  }

  return (
    <section
      id="lab"
      aria-label="Lab & Experiments"
      style={{
        width: '100%',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-12)',
        position: 'relative',
        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: easterEggActive ? 'rotate(-2deg) scale(0.98)' : 'rotate(0deg) scale(1)',
      }}
    >
      {/* ── 01. LAB INTRO ── */}
      <div
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: '0 var(--px-page) var(--space-16)',
          borderBottom: '1px solid var(--border-primary)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-meta)',
                letterSpacing: 'var(--tracking-widest)',
                textTransform: 'uppercase' as const,
                color: 'var(--text-tertiary)',
                marginBottom: 'var(--space-6)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <span>03 / LAB</span>
              {/* Optional Easter Egg */}
              <button 
                onClick={handleEasterEgg}
                style={{
                  width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)',
                  border: 'none', cursor: 'pointer', padding: 0
                }}
                title="DON'T CLICK."
                aria-label="Secret Interaction"
              />
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: '-0.035em',
                textTransform: 'uppercase' as const,
                color: 'var(--text-primary)',
                margin: '0 0 var(--space-6) 0',
              }}
            >
              THINGS I MAKE<br />
              JUST TO SEE<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-secondary)' }}>IF I CAN.</span>
            </h2>
          </div>
          
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body)',
              lineHeight: 1.5,
              color: 'var(--text-secondary)',
              maxWidth: '30ch',
              margin: '0',
              paddingTop: 'var(--space-12)'
            }}
          >
            Experiments, interactions and small ideas that didn&apos;t need to become full projects.
          </p>
        </div>
      </div>

      {/* ── 02. DESKTOP INTERACTIVE INDEX & MOBILE STACK ── */}
      <div
        className="lab-architecture"
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: 'var(--space-16) var(--px-page)',
        }}
      >
        {/* Left Side: Index List */}
        <div className="lab-index">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '24px', letterSpacing: '0.05em' }}>
            SELECT EXPERIMENT //
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border-primary)' }}>
            {experiments.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperiment(index)}
                onPointerEnter={() => {
                  // Only change on hover for desktop widths
                  if (typeof window !== 'undefined' && window.innerWidth > 1024) {
                    setActiveExperiment(index)
                  }
                }}
                className={`lab-index-item ${activeExperiment === index ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  padding: '24px 0',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid var(--border-primary)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'color 0.2s',
                  color: activeExperiment === index ? 'var(--text-primary)' : 'var(--text-tertiary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: activeExperiment === index ? 'var(--accent)' : 'inherit' }}>
                    {exp.number}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                    {exp.title}
                  </span>
                </div>
                <span className="lab-index-arrow" style={{ fontFamily: 'var(--font-mono)', opacity: activeExperiment === index ? 1 : 0, transition: 'opacity 0.2s' }}>
                  →
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Desktop Interactive Stage (Hidden on Mobile) */}
        <div className="lab-stage-desktop">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)' }}>
            <span>{experiments[activeExperiment].category}</span>
            <span>{experiments[activeExperiment].year}</span>
          </div>
          
          <div 
            style={{ 
              width: '100%', 
              aspectRatio: '1/1', 
              border: '1px solid var(--border-primary)', 
              borderRadius: '6px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            {experiments[activeExperiment].component}
          </div>
        </div>

        {/* Mobile View: Render all experiments sequentially (Hidden on Desktop) */}
        <div className="lab-stage-mobile">
          {experiments.map((exp) => (
            <div key={exp.id} style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{exp.number} // {exp.title}</span>
                <span>{exp.category}</span>
              </div>
              <div 
                style={{ 
                  width: '100%', 
                  aspectRatio: '1/1', 
                  border: '1px solid var(--border-primary)', 
                  borderRadius: '6px',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {exp.component}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 03. EXIT TRANSITION ── */}
      <div
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: 'var(--space-12) var(--px-page) 0',
          textAlign: 'center',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontWeight: 800,
          color: 'var(--text-tertiary)',
          textTransform: 'uppercase' as const,
          letterSpacing: '-0.02em',
        }}
      >
        ENOUGH MESSING AROUND.
      </div>

      <style jsx>{`
        .lab-architecture {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: clamp(4rem, 8vw, 8rem);
        }
        
        .lab-index-item:hover {
          color: var(--text-primary) !important;
        }

        .lab-stage-mobile {
          display: none;
        }

        @media (max-width: 1024px) {
          .lab-architecture {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .lab-index {
            display: none;
          }
          .lab-stage-desktop {
            display: none;
          }
          .lab-stage-mobile {
            display: block;
          }
        }
      `}</style>
    </section>
  )
}
