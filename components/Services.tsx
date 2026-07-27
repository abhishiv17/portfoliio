'use client'

import React, { useState } from 'react'

const servicesData = [
  {
    number: '01',
    title: 'WEBSITES & LANDING PAGES',
    preview: 'Responsive development • Landing pages • CMS • Deployment',
    idealFor: 'businesses, startups, creators and products that need a strong online presence.',
    capabilities: [
      'Responsive development',
      'Landing pages',
      'Business websites',
      'Portfolio websites',
      'Marketing sites',
      'CMS integration',
      'Deployment',
    ],
    output: 'Production-ready responsive website with clean code and high performance.',
  },
  {
    number: '02',
    title: 'FULL-STACK WEB APPS',
    preview: 'Frontend • APIs • Databases • Auth • Real-time systems',
    idealFor: 'products and ideas that need functionality beyond a static website.',
    capabilities: [
      'Frontend development',
      'Backend APIs',
      'Authentication',
      'Databases',
      'Dashboards',
      'Real-time functionality',
      'Third-party integrations',
      'Deployment',
    ],
    output: 'Secure, scalable full-stack web application with intuitive responsive UI.',
  },
  {
    number: '03',
    title: 'REDESIGNS & INTERACTIONS',
    preview: 'UI redesign • Responsive rebuilds • GSAP motion • Performance',
    idealFor: 'existing websites that work but feel outdated, generic, or poorly presented.',
    capabilities: [
      'UI redesign',
      'Responsive rebuilds',
      'Interaction design',
      'GSAP animation',
      'Performance improvements',
      'Frontend modernization',
      'Design-system cleanup',
    ],
    output: 'Modernized, high-performance web experience with refined typography and motion.',
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
  const [activeService, setActiveService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setActiveService(activeService === index ? null : index)
  }

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

      {/* ── 02. CORE SERVICES (LARGE HORIZONTAL EDITORIAL ROWS) ── */}
      <div
        className="services-list-container"
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: 'var(--space-8) var(--px-page) var(--space-16)',
        }}
      >
        <div style={{ borderTop: '1px solid var(--border-primary)' }}>
          {servicesData.map((service, idx) => {
            const isExpanded = activeService === idx
            return (
              <div
                key={service.number}
                className="service-row-wrapper"
                style={{
                  borderBottom: '1px solid var(--border-primary)',
                  transition: 'border-color 0.3s ease',
                  borderColor: isExpanded ? 'var(--text-primary)' : 'var(--border-primary)',
                }}
              >
                {/* Row Header Button */}
                <button
                  type="button"
                  onClick={() => toggleService(idx)}
                  aria-expanded={isExpanded}
                  aria-controls={`service-detail-${idx}`}
                  className="service-row-btn"
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 'none',
                    padding: 'clamp(1.5rem, 3.5vw, 2.5rem) 0',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: '0.15fr 0.45fr 0.4fr',
                    gap: 'var(--space-4)',
                    alignItems: 'baseline',
                    color: 'var(--text-primary)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-small)',
                      color: isExpanded ? 'var(--accent)' : 'var(--text-tertiary)',
                      fontWeight: 600,
                      letterSpacing: 'var(--tracking-widest)',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {service.number} //
                  </div>

                  <div
                    className="service-row-title"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.8rem, 3.8vw, 3.2rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.025em',
                      lineHeight: 1.1,
                      textTransform: 'uppercase' as const,
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease',
                      color: isExpanded ? 'var(--accent)' : 'var(--text-primary)',
                    }}
                  >
                    {service.title}
                  </div>

                  <div
                    className="service-row-preview"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'var(--text-small)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.4,
                      }}
                    >
                      {service.preview}
                    </span>
                    <span
                      className="service-row-arrow"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-small)',
                        fontWeight: 600,
                        color: isExpanded ? 'var(--accent)' : 'var(--text-primary)',
                        textTransform: 'uppercase' as const,
                        letterSpacing: 'var(--tracking-wider)',
                        whiteSpace: 'nowrap',
                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        display: 'inline-block',
                      }}
                    >
                      {isExpanded ? 'CLOSE ✕' : 'EXPLORE ↘'}
                    </span>
                  </div>
                </button>

                {/* Expanded Accordion Details */}
                {isExpanded && (
                  <div
                    id={`service-detail-${idx}`}
                    className="service-accordion-body animate-hero-backwards"
                    style={{
                      padding: '0 0 clamp(2rem, 4vw, 3.5rem) 0',
                      '--delay': '0s',
                    } as React.CSSProperties}
                  >
                    <div
                      className="service-detail-grid"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '0.15fr 0.85fr',
                        gap: 'var(--space-4)',
                      }}
                    >
                      <div /> {/* Empty spacer aligning with row number */}
                      <div
                        className="service-detail-columns"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1.2fr 1fr',
                          gap: 'clamp(1.5rem, 4vw, 3.5rem)',
                          backgroundColor: 'var(--surface-elevated)',
                          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                          borderLeft: '3px solid var(--accent)',
                          borderRadius: '4px',
                        }}
                      >
                        {/* Ideal For */}
                        <div>
                          <div
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '11px',
                              color: 'var(--text-tertiary)',
                              textTransform: 'uppercase' as const,
                              letterSpacing: 'var(--tracking-wider)',
                              marginBottom: '12px',
                            }}
                          >
                            IDEAL FOR //
                          </div>
                          <p
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: 'var(--text-body)',
                              lineHeight: 'var(--leading-body)',
                              color: 'var(--text-primary)',
                              margin: 0,
                            }}
                          >
                            {service.idealFor}
                          </p>
                        </div>

                        {/* Capabilities */}
                        <div>
                          <div
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '11px',
                              color: 'var(--text-tertiary)',
                              textTransform: 'uppercase' as const,
                              letterSpacing: 'var(--tracking-wider)',
                              marginBottom: '12px',
                            }}
                          >
                            I CAN HELP WITH //
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '8px',
                            }}
                          >
                            {service.capabilities.map((cap) => (
                              <span
                                key={cap}
                                style={{
                                  fontFamily: 'var(--font-body)',
                                  fontSize: '13px',
                                  color: 'var(--text-primary)',
                                  backgroundColor: 'var(--bg-primary)',
                                  padding: '6px 12px',
                                  borderRadius: '2px',
                                  border: '1px solid var(--border-primary)',
                                }}
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Typical Output & CTA */}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <div
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '11px',
                                color: 'var(--text-tertiary)',
                                textTransform: 'uppercase' as const,
                                letterSpacing: 'var(--tracking-wider)',
                                marginBottom: '12px',
                              }}
                            >
                              TYPICAL OUTPUT //
                            </div>
                            <p
                              style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: 'var(--text-body)',
                                lineHeight: 'var(--leading-body)',
                                color: 'var(--text-secondary)',
                                margin: '0 0 var(--space-6) 0',
                              }}
                            >
                              {service.output}
                            </p>
                          </div>

                          <div>
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
                                padding: '12px 24px',
                                borderRadius: '100px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'all 0.2s ease',
                                border: '1px solid var(--text-primary)',
                              }}
                            >
                              <span>Start a Project</span>
                              <span className="btn-arrow">↗</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
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

      {/* ── 04. HOW I WORK (EDITORIAL HORIZONTAL PROCESS) ── */}
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
        .service-row-btn:hover .service-row-title {
          transform: translateX(12px);
          color: var(--accent) !important;
        }

        .service-row-btn:hover .service-row-arrow {
          transform: translate(3px, 3px);
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
          .service-detail-columns {
            grid-template-columns: 1fr !important;
            gap: var(--space-6) !important;
          }
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: var(--space-8) !important;
          }
        }

        @media (max-width: 768px) {
          .service-row-btn {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .service-row-preview {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .service-detail-grid {
            grid-template-columns: 1fr !important;
          }
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-8) !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-row-btn:hover .service-row-title,
          .service-row-btn:hover .service-row-arrow,
          .project-btn-primary:hover .btn-arrow {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
