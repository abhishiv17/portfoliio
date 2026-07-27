'use client'

import React from 'react'

const servicesData = [
  {
    number: '01',
    title: 'WEBSITES &\nLANDING PAGES',
    description: 'Fast, responsive websites for businesses, products and people who need a stronger presence online.',
    capabilities: [
      'Business websites',
      'Landing pages',
      'Responsive development',
      'CMS integration',
      'Deployment',
    ],
  },
  {
    number: '02',
    title: 'FULL-STACK\nWEB APPS',
    description: 'Web products where the interface is only the beginning.',
    capabilities: [
      'Authentication',
      'Backend APIs',
      'Databases',
      'Dashboards',
      'Real-time systems',
      'Deployment',
    ],
  },
  {
    number: '03',
    title: 'REDESIGNS &\nINTERACTIONS',
    description: "For websites that work — but don't feel as good as they should.",
    capabilities: [
      'UI redesign',
      'Responsive rebuilds',
      'GSAP interaction',
      'Performance improvements',
      'Frontend modernization',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'TALK',
    description: "Tell me what you're building.",
  },
  {
    number: '02',
    title: 'PLAN',
    description: 'We define the scope and direction.',
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'I design, develop and iterate.',
  },
  {
    number: '04',
    title: 'SHIP',
    description: 'Test, polish and deploy.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      style={{
        width: '100%',
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        paddingTop: 'var(--space-20)',
      }}
    >
      {/* ── 01. SERVICES EDITORIAL INTRO ── */}
      <div
        className="services-intro-grid"
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: '0 var(--px-page) var(--space-16)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 'clamp(2rem, 5vw, 6rem)',
          alignItems: 'end',
          borderBottom: '1px solid var(--border-primary)',
        }}
      >
        <div className="animate-hero-backwards" style={{ '--delay': '0.1s' } as React.CSSProperties}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-meta)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase' as const,
              color: 'var(--text-tertiary)',
              marginBottom: 'var(--space-6)',
            }}
          >
            02 / Services
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 6.5rem)',
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: '-0.035em',
              textTransform: 'uppercase' as const,
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            WHAT I CAN<br />
            BUILD FOR <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>YOU.</span>
          </h2>
        </div>

        <div
          className="intro-meta-box animate-hero-backwards"
          style={{
            borderLeft: '1px solid var(--border-primary)',
            paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-6)',
            '--delay': '0.2s',
          } as React.CSSProperties}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-h3)',
              lineHeight: 1.3,
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            From the first screen to deployment — I design and build web experiences that are fast, responsive and considered.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-meta)',
              color: 'var(--text-tertiary)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase' as const,
              paddingTop: 'var(--space-4)',
              borderTop: '1px solid var(--border-primary)',
            }}
          >
            <span>Project-Based Freelance Work</span>
            <span>2026</span>
          </div>
        </div>
      </div>

      {/* ── 02. THE THREE ACTUAL SERVICES (LARGE EDITORIAL CENTERPIECE ROWS) ── */}
      <div
        className="services-centerpiece-container"
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: 'var(--space-8) var(--px-page) var(--space-16)',
        }}
      >
        <div style={{ borderTop: '1px solid var(--border-primary)' }}>
          {servicesData.map((service) => (
            <a
              key={service.number}
              href="#contact"
              className="service-editorial-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.18fr 0.45fr 0.3fr 0.07fr',
                gap: 'clamp(1.5rem, 3vw, 3.5rem)',
                padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1rem, 2vw, 2rem)',
                borderBottom: '1px solid var(--border-primary)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                alignItems: 'start',
              }}
            >
              {/* Column 1: Number Metadata */}
              <div
                className="service-row-number"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-small)',
                  color: 'var(--accent)',
                  fontWeight: 700,
                  letterSpacing: 'var(--tracking-widest)',
                  textTransform: 'uppercase' as const,
                  transition: 'color 0.3s ease',
                  paddingTop: '6px',
                }}
              >
                {service.number} // SERVICE
              </div>

              {/* Column 2: Dominant Title & 1-Sentence Purpose */}
              <div
                className="service-row-main"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-6)',
                  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <h3
                  className="service-row-title"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.2rem, 4.5vw, 4.8rem)',
                    fontWeight: 800,
                    lineHeight: 0.95,
                    letterSpacing: '-0.035em',
                    textTransform: 'uppercase' as const,
                    margin: 0,
                    whiteSpace: 'pre-line',
                    transition: 'color 0.35s ease',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="service-row-desc"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
                    lineHeight: 1.45,
                    color: 'var(--text-secondary)',
                    margin: 0,
                    maxWidth: '42ch',
                    transition: 'color 0.35s ease',
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Column 3: Concise Capability List */}
              <div
                className="service-row-capabilities"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  paddingTop: '6px',
                }}
              >
                {service.capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="capability-item"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-small)',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.35s ease',
                    }}
                  >
                    <span className="cap-bullet" style={{ color: 'var(--accent)', fontSize: '10px' }}>▪</span>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Column 4: Interactive Arrow */}
              <div
                className="service-row-arrow"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                  fontWeight: 300,
                  color: 'var(--text-tertiary)',
                  textAlign: 'right',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  paddingTop: '4px',
                }}
              >
                ↘
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── 03. "GOOD FIT FOR" EDITORIAL STRIP ── */}
      <div
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: '0 var(--px-page) var(--space-20)',
        }}
      >
        <div
          className="fit-for-box"
          style={{
            backgroundColor: 'var(--surface-elevated)',
            border: '1px solid var(--border-primary)',
            padding: 'clamp(1.25rem, 3vw, 2rem)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--accent)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase' as const,
              whiteSpace: 'nowrap',
            }}
          >
            GOOD FIT FOR //
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '0.05em',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px 24px',
              alignItems: 'center',
            }}
          >
            <span>STARTUPS</span>
            <span style={{ color: 'var(--accent)' }}>•</span>
            <span>LOCAL BUSINESSES</span>
            <span style={{ color: 'var(--accent)' }}>•</span>
            <span>CREATORS</span>
            <span style={{ color: 'var(--accent)' }}>•</span>
            <span>STUDENT FOUNDERS</span>
            <span style={{ color: 'var(--accent)' }}>•</span>
            <span>SMALL TEAMS</span>
            <span style={{ color: 'var(--accent)' }}>•</span>
            <span>EARLY-STAGE PRODUCTS</span>
          </div>
        </div>
      </div>

      {/* ── 04. HOW I WORK (QUIETER PROCESS SEQUENCE) ── */}
      <div
        className="process-section"
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: 'var(--space-12) var(--px-page) var(--space-24)',
          borderTop: '1px solid var(--border-primary)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 'var(--space-12)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              textTransform: 'uppercase' as const,
              margin: 0,
            }}
          >
            HOW I WORK //
          </h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-meta)', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const }}>
            4 Step Straightforward Sequence
          </span>
        </div>

        <div
          className="process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--space-8)',
          }}
        >
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              style={{
                borderTop: '2px solid var(--text-primary)',
                paddingTop: 'var(--space-6)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-small)',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-2)',
                }}
              >
                {step.number} // {idx < processSteps.length - 1 ? '→' : ''}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  marginBottom: 'var(--space-3)',
                }}
              >
                {step.title}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  lineHeight: 1.4,
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 05. SERVICE CONVERSION CTA ── */}
      <div
        className="services-cta-section"
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: 'var(--space-20) var(--px-page) var(--space-20)',
          borderTop: '1px solid var(--border-primary)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 5vw, 6rem)',
          alignItems: 'center',
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 6.5rem)',
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: '-0.035em',
              textTransform: 'uppercase' as const,
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            GOT SOMETHING<br />
            IN MIND?<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>LET&apos;S TALK. ↗</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', alignItems: 'flex-start' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
              lineHeight: 1.35,
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            Tell me what you&apos;re trying to build.<br />
            I&apos;ll tell you how I&apos;d approach it.
          </p>

          <a
            href="#contact"
            className="project-btn-primary"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: 'var(--tracking-wide)',
              textDecoration: 'none',
              color: 'var(--text-inverse)',
              backgroundColor: 'var(--text-primary)',
              padding: '16px 36px',
              borderRadius: '100px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.2s ease',
              border: '1px solid var(--text-primary)',
            }}
          >
            <span>Start a Project</span>
            <span className="btn-arrow">↗</span>
          </a>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-tertiary)',
              textTransform: 'uppercase' as const,
              letterSpacing: 'var(--tracking-wider)',
              paddingTop: 'var(--space-4)',
              borderTop: '1px solid var(--border-primary)',
              width: '100%',
            }}
          >
            PROJECT-BASED FREELANCE WORK • AVAILABLE FOR SELECT BUILD
          </div>
        </div>
      </div>

      {/* ── STYLES & RESPONSIVE RULES ── */}
      <style jsx>{`
        /* Desktop Hover Inversion & Movement for Service Rows */
        .service-editorial-row:hover {
          background-color: var(--text-primary) !important;
          border-color: var(--accent) !important;
          padding-left: clamp(1.5rem, 3vw, 3rem) !important;
          padding-right: clamp(1.5rem, 3vw, 3rem) !important;
        }

        .service-editorial-row:hover .service-row-title {
          transform: translateX(10px);
          color: var(--bg-primary) !important;
        }

        .service-editorial-row:hover .service-row-desc {
          color: #d1d1c7 !important;
        }

        .service-editorial-row:hover .capability-item {
          color: #faf9f7 !important;
        }

        .service-editorial-row:hover .service-row-number {
          color: #ff5e45 !important;
        }

        .service-editorial-row:hover .service-row-arrow {
          transform: translate(6px, 6px) rotate(-45deg);
          color: var(--accent) !important;
        }

        .project-btn-primary:hover {
          background-color: var(--accent) !important;
          border-color: var(--accent) !important;
        }
        .project-btn-primary:hover .btn-arrow {
          transform: translate(3px, -3px);
        }

        @media (max-width: 1024px) {
          .services-intro-grid,
          .services-cta-section {
            grid-template-columns: 1fr !important;
            gap: var(--space-8) !important;
          }
          .intro-meta-box {
            border-left: none !important;
            border-top: 1px solid var(--border-primary) !important;
            padding-left: 0 !important;
            padding-top: var(--space-6) !important;
          }
          .service-editorial-row {
            grid-template-columns: 1fr 1fr !important;
            gap: var(--space-6) !important;
          }
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: var(--space-8) !important;
          }
        }

        @media (max-width: 768px) {
          .service-editorial-row {
            grid-template-columns: 1fr !important;
            gap: var(--space-4) !important;
            padding: var(--space-8) var(--space-4) !important;
          }
          .service-row-arrow {
            text-align: left !important;
            padding-top: var(--space-2) !important;
          }
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-8) !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-editorial-row:hover .service-row-title,
          .service-editorial-row:hover .service-row-arrow,
          .project-btn-primary:hover .btn-arrow {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
