'use client'

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
        padding: `clamp(88px, 12vh, 120px) var(--px-page) var(--space-8)`,
        maxWidth: 'var(--max-w-wide)',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Top editorial metadata bar */}
      <div
        className="hero-meta-bar animate-hero-backwards"
        style={{
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
          <span className="meta-hide-mobile">12.9716° N, 77.5946° E</span>
        </div>
        <span>Design + Development · Est. 2026</span>
      </div>

      {/* Main hero grid — 1 desktop viewport composition */}
      <div
        className="hero-main-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.25fr 0.75fr',
          gap: 'clamp(2rem, 5vw, 6rem)',
          alignItems: 'center',
          margin: 'auto 0',
          padding: 'var(--space-6) 0',
        }}
      >
        {/* Left Column: Monumental Typeset Headline */}
        <div className="hero-statement">
          {[
            { text: 'I BUILD', delay: '0.15s', indent: '0' },
            { text: 'WEBSITES', delay: '0.22s', indent: 'clamp(1rem, 4vw, 3.5rem)' },
            { text: "THAT DON'T", delay: '0.29s', indent: '0' },
            { text: 'FEEL LIKE', delay: '0.36s', indent: 'clamp(1rem, 4vw, 3.5rem)', italic: true },
            { text: 'TEMPLATES.', delay: '0.43s', indent: '0', accent: true },
          ].map((line, i) => (
            <div
              key={i}
              className="animate-hero-backwards"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-display-xl)',
                fontWeight: line.italic ? 300 : 800,
                fontStyle: line.italic ? 'italic' : 'normal',
                lineHeight: 0.88,
                letterSpacing: '-0.035em',
                color: line.accent ? 'var(--accent)' : 'var(--text-primary)',
                textTransform: 'uppercase' as const,
                paddingLeft: line.indent,
                '--delay': line.delay,
              } as React.CSSProperties}
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Right Column: Deliberate Editorial & Structural Anchor */}
        <div
          className="hero-anchor-box animate-hero-backwards"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: '1px solid var(--border-primary)',
            paddingLeft: 'clamp(1.5rem, 4vw, 3.5rem)',
            gap: 'var(--space-8)',
            '--delay': '0.5s',
          } as React.CSSProperties}
        >
          {/* Minimal architectural specification header */}
          <div
            className="anchor-header"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-meta)',
              color: 'var(--text-tertiary)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase' as const,
            }}
          >
            <span>[ INDEX — 01 ]</span>
            <span
              style={{
                display: 'inline-block',
                width: '24px',
                height: '1px',
                backgroundColor: 'var(--border-secondary)',
              }}
            />
          </div>

          {/* Identity & Supporting Bio */}
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-h2)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: 'var(--tracking-tight)',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Abhishek MS
            </h1>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-small)',
                color: 'var(--accent)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase' as const,
                marginTop: 'var(--space-1)',
                marginBottom: 'var(--space-4)',
                fontWeight: 500,
              }}
            >
              Developer / Designer
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--text-secondary)',
                margin: 0,
              }}
            >
              Engineering student building fast, thoughtful web experiences for startups,
              businesses, and interesting ideas.
            </p>
          </div>

          {/* Availability Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              padding: 'var(--space-2) 0',
              borderTop: '1px solid var(--border-primary)',
              borderBottom: '1px solid var(--border-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-meta)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase' as const,
              color: 'var(--text-primary)',
              fontWeight: 500,
            }}
          >
            <span
              className="animate-pulse-dot"
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#2ECC71',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            Available for Freelance
          </div>

          {/* Integrated Editorial Actions */}
          <div
            className="hero-actions-editorial"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
            }}
          >
            <a
              href="#contact"
              className="action-start-project"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                fontWeight: 600,
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase' as const,
                textDecoration: 'none',
                color: 'var(--text-inverse)',
                backgroundColor: 'var(--text-primary)',
                padding: 'var(--space-4) var(--space-6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: `all var(--duration-normal) var(--ease-out)`,
                border: '1px solid var(--text-primary)',
              }}
            >
              <span>Start a Project</span>
              <span
                className="action-arrow-hero"
                style={{
                  display: 'inline-block',
                  transition: `transform var(--duration-fast) var(--ease-out)`,
                  fontSize: '1.2em',
                }}
              >
                ↗
              </span>
            </a>

            <a
              href="#work"
              className="action-view-work"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                fontWeight: 500,
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase' as const,
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                padding: 'var(--space-2) 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: `color var(--duration-fast) var(--ease-out)`,
                borderBottom: '1px solid transparent',
              }}
            >
              <span>View Selected Work</span>
              <span
                className="action-arrow-down"
                style={{
                  transition: `transform var(--duration-fast) var(--ease-out)`,
                }}
              >
                ↓
              </span>
            </a>
          </div>

          {/* Minimal architectural coordinate ruler */}
          <div
            aria-hidden="true"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              color: 'var(--text-tertiary)',
              letterSpacing: 'var(--tracking-widest)',
              opacity: 0.6,
              paddingTop: 'var(--space-2)',
            }}
          >
            <span>+ 00.0</span>
            <span style={{ flex: 1, borderBottom: '1px dashed var(--border-secondary)', margin: '0 8px' }} />
            <span>REF. 2026</span>
          </div>
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
          <span>Scroll to explore</span>
        </div>
        <span>© {new Date().getFullYear()}</span>
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
