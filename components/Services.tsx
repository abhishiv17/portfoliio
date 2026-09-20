'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SYSTEMS_CAPABILITIES, CapabilityCategory } from '@/data/portfolio';

export default function Services() {
  const [activeTabId, setActiveTabId] = useState<string>(SYSTEMS_CAPABILITIES[0].id);

  const activeCategory: CapabilityCategory =
    SYSTEMS_CAPABILITIES.find((c) => c.id === activeTabId) || SYSTEMS_CAPABILITIES[0];

  return (
    <section
      id="systems"
      aria-label="02 / Systems - Technical Capabilities"
      style={{
        width: '100%',
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        padding: 'clamp(5rem, 10vh, 8rem) 0',
        borderTop: '1px solid var(--border-primary)',
      }}
    >
      {/* Anchor alias for backwards compatibility */}
      <span id="competencies" style={{ position: 'absolute', top: 0, left: 0 }} aria-hidden="true" />

      <div
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: '0 var(--px-page)',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderBottom: '1px solid var(--border-primary)',
            paddingBottom: 'var(--space-4)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-meta)',
                color: 'var(--accent)',
                fontWeight: 700,
                letterSpacing: 'var(--tracking-widest)',
                textTransform: 'uppercase',
              }}
            >
              02 // SYSTEMS
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-meta)',
                color: 'var(--text-tertiary)',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
              }}
            >
              [ CAPABILITIES &amp; STACK ]
            </span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-secondary)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            5 ARCHITECTURAL DISCIPLINES
          </div>
        </div>

        {/* Big Editorial Statement */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            margin: '0 0 clamp(2.5rem, 5vw, 4rem) 0',
            maxWidth: '18ch',
          }}
        >
          HOW I ARCHITECT &amp; BUILD.
        </h2>

        {/* Interactive Systems Index Grid */}
        <div
          className="systems-interactive-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start',
            borderTop: '1px solid var(--border-primary)',
            borderBottom: '1px solid var(--border-primary)',
            padding: 'clamp(2rem, 4vw, 3.5rem) 0',
          }}
        >
          {/* Left Column: Category Selector List (Magnet-style selection) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
            role="tablist"
            aria-label="Capabilities categories"
          >
            {SYSTEMS_CAPABILITIES.map((cat) => {
              const isActive = cat.id === activeTabId;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  onClick={() => setActiveTabId(cat.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: '4px',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--accent)' : 'transparent',
                    backgroundColor: isActive ? 'var(--bg-secondary)' : 'transparent',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left',
                    position: 'relative',
                  }}
                  className="system-tab-btn"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: isActive ? 'var(--accent)' : 'var(--text-tertiary)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {cat.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {cat.title}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: isActive ? 'var(--accent)' : 'var(--text-tertiary)',
                      transform: isActive ? 'translateX(4px)' : 'none',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Morphing Details Panel */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-primary)',
              borderRadius: '6px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              minHeight: '380px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                id={`panel-${activeCategory.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeCategory.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {/* Panel Header */}
                <div style={{ marginBottom: '20px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--accent)',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      [{activeCategory.number} // SPECIFICATION]
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-tertiary)',
                      }}
                    >
                      {activeCategory.tagline}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.75rem, 3vw, 2.4rem)',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      margin: '0 0 12px 0',
                    }}
                  >
                    {activeCategory.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      lineHeight: 1.55,
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}
                  >
                    {activeCategory.description}
                  </p>
                </div>

                {/* Structured Capability List */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    borderTop: '1px solid var(--border-primary)',
                    paddingTop: '16px',
                    marginBottom: '24px',
                  }}
                >
                  {activeCategory.skills.map((s, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '120px 1fr',
                        gap: '12px',
                        alignItems: 'baseline',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {s.name}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '13px',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {s.detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies Pill Row */}
                <div
                  style={{
                    borderTop: '1px dashed var(--border-secondary)',
                    paddingTop: '16px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-tertiary)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginRight: '6px',
                    }}
                  >
                    CORE TECH:
                  </span>
                  {activeCategory.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        padding: '3px 8px',
                        borderRadius: '2px',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-secondary)',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .system-tab-btn:hover {
          background-color: var(--bg-secondary) !important;
          color: var(--text-primary) !important;
        }

        @media (max-width: 860px) {
          .systems-interactive-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
