'use client'

import React from 'react'
import { RectangularTextReveal } from '@/components/block/rectangular-text-reveal'
import { DottedGrid } from '@/components/block/dotted-grid'
import { EditorialTradingCard } from '@/components/block/trading-card'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero introduction"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        padding: `clamp(5rem, 10vh, 8rem) var(--px-page) var(--space-8)`,
        maxWidth: 'var(--max-w-wide)',
        margin: '0 auto',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-primary)',
      }}
    >
      {/* Interactive ObsidianUI DottedGrid Background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.65,
        }}
      >
        <DottedGrid
          transparent={true}
          dotHue={15}
          className="w-full h-full"
          style={{ height: '100%', width: '100%' }}
        />
      </div>

      {/* Top editorial metadata bar */}
      <div
        className="hero-meta-bar animate-hero-backwards"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-meta)',
          color: 'var(--text-tertiary)',
          textTransform: 'uppercase' as const,
          letterSpacing: 'var(--tracking-wider)',
          paddingBottom: 'var(--space-4)',
          borderBottom: '1px solid var(--border-primary)',
          '--delay': '0.1s',
        } as React.CSSProperties}
      >
        <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
          <span>Bangalore / India</span>
          <span className="meta-hide-mobile">Dr. AIT · CSE &apos;28</span>
        </div>
      </div>

      {/* Main hero grid - 1 desktop viewport composition */}
      <div
        className="hero-main-grid"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'center',
          margin: 'auto 0',
          padding: 'var(--space-6) 0',
        }}
      >
        {/* Left Column: Monumental Headline "THINGS I'VE PUT ON THE INTERNET." */}
        <div className="hero-statement">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 'var(--space-4)' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
              }}
            >
              00 // INTRO
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-tertiary)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              [ OVERVIEW ]
            </span>
          </div>

          {[
            { text: "THINGS I'VE", delay: 0.15, indent: '0' },
            { text: 'PUT ON THE', delay: 0.25, indent: 'clamp(1rem, 3vw, 2.5rem)', italic: true },
            { text: 'INTERNET.', delay: 0.35, indent: '0', accent: true },
          ].map((line, i) => (
            <div
              key={i}
              className="animate-hero-backwards"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 7.5vw, 6.8rem)',
                fontWeight: line.italic ? 300 : 800,
                fontStyle: line.italic ? 'italic' : 'normal',
                lineHeight: 0.88,
                letterSpacing: '-0.035em',
                color: line.accent ? 'var(--accent)' : 'var(--text-primary)',
                textTransform: 'uppercase' as const,
                paddingLeft: line.indent,
                '--delay': `${line.delay}s`,
              } as React.CSSProperties}
            >
              <RectangularTextReveal
                delay={line.delay + 0.1}
                baseColor="var(--accent)"
                overlayColor="var(--bg-primary)"
                triggerStart="top 65%"
                once={false}
              >
                {line.text}
              </RectangularTextReveal>
            </div>
          ))}

          {/* Minimal identity line */}
          <div
            style={{
              marginTop: 'var(--space-8)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--border-primary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
              }}
            >
              ABHISHEK MS · CS · SYSTEMS · SOFTWARE
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--text-secondary)',
              }}
            >
              Dr. Ambedkar Institute of Technology, Bangalore · CGPA 9.0
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <a
              href="#work"
              className="explore-btn"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                border: '1px solid var(--border-primary)',
                borderRadius: '100px',
                backgroundColor: 'var(--bg-secondary)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>EXPLORE SELECTED WORK</span>
              <span style={{ color: 'var(--accent)' }}>↓</span>
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Trading Card */}
        <div
          className="hero-card-col"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <EditorialTradingCard
            number="01"
            title="Blind-Run"
            category="ASYMMETRIC MULTIPLAYER GAME"
            description="Real-time asymmetric multiplayer heist game engineered with React Three Fiber, Rapier physics, and Colyseus."
            stack={['React Three Fiber', 'Rapier', 'Colyseus', 'React']}
            link="https://blindrun.vercel.app/"
            highlight="FEATURED BUILD"
          />
        </div>
      </div>

      {/* Bottom status row */}
      <div
        className="hero-footer-bar animate-hero-backwards"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-meta)',
          letterSpacing: 'var(--tracking-widest)',
          textTransform: 'uppercase' as const,
          color: 'var(--text-tertiary)',
          paddingTop: 'var(--space-4)',
          borderTop: '1px solid var(--border-primary)',
          '--delay': '0.65s',
        } as React.CSSProperties}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <span className="animate-float" style={{ display: 'inline-block' }}>↓</span>
          <span>Seeking Internships &amp; New Grad Roles</span>
        </div>
        <span>Bangalore, IN · Remote OK</span>
      </div>

      {/* Responsive & micro-interaction styles */}
      <style jsx>{`
        .action-start-project:hover {
          background-color: var(--accent) !important;
          border-color: var(--accent) !important;
        }
        .action-start-project:hover .action-arrow-hero {
          transform: translate(3px, -3px);
        }

        .action-resume-hero:hover {
          border-color: var(--text-primary) !important;
          background-color: var(--bg-secondary) !important;
        }
        .action-resume-hero:hover .action-arrow-hero {
          transform: translate(3px, -3px);
        }

        .action-view-work:hover {
          color: var(--text-primary) !important;
          border-bottom-color: var(--text-primary) !important;
        }
        .action-view-work:hover .action-arrow-down {
          transform: translateY(3px);
        }

        @media (max-width: 1024px) {
          .hero-main-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-10) !important;
          }
          .hero-anchor-box {
            border-left: none !important;
            border-top: 1px solid var(--border-primary) !important;
            padding-left: 0 !important;
            padding-top: var(--space-8) !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
        }

        @media (max-width: 768px) {
          .meta-hide-mobile {
            display: none !important;
          }
          .hero-statement div {
            font-size: clamp(2.2rem, 11vw, 4rem) !important;
            padding-left: 0 !important;
          }
        }

        @media (max-width: 480px) {
          .hero-meta-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: var(--space-2) !important;
          }
          .hero-statement div {
            font-size: clamp(1.85rem, 10.5vw, 2.75rem) !important;
            letter-spacing: -0.02em !important;
          }
        }
      `}</style>
    </section>
  )
}
