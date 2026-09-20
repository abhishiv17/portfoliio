'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { PROJECTS, Project } from '@/data/portfolio';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { HoverLivePreview } from '@/components/block/hover-live-preview';

export default function ProjectFlipShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress to activeIndex (4 projects -> 4 segments: 0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const idx = Math.min(
        PROJECTS.length - 1,
        Math.max(0, Math.floor(latest * PROJECTS.length))
      );
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const activeProject: Project = PROJECTS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : PROJECTS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < PROJECTS.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      handlePrev();
    }
  };

  return (
    <section
      id="work"
      ref={containerRef}
      aria-label="01 / Work - Selected Projects"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{
        position: 'relative',
        height: '320vh', // Controlled scroll distance for 4 projects
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        borderTop: '1px solid var(--border-primary)',
        outline: 'none',
      }}
    >
      {/* Sticky Viewport Container */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(80px, 10vh, 96px) var(--px-page) clamp(24px, 4vh, 40px)',
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        {/* Top bar: Chapter metadata & Progress */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid var(--border-primary)',
            paddingBottom: 'var(--space-4)',
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
              01 // WORK
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
              [ 04 SELECTED BUILDS ]
            </span>
          </div>

          {/* Interactive Prev/Next & Counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '0.1em',
              }}
            >
              {String(activeIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
            </span>

            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-primary)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
              >
                <ArrowLeft size={14} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-primary)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Center: 3D Flip Showcase Card */}
        <HoverLivePreview url={activeProject.link || ''} className="w-full flex-1 flex">
          <div
            style={{
              perspective: 1200,
              width: '100%',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto 0',
              padding: 'var(--space-4) 0',
            }}
          >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.number}
              initial={{ rotateX: -25, opacity: 0, y: 40, scale: 0.95 }}
              animate={{ rotateX: 0, opacity: 1, y: 0, scale: 1 }}
              exit={{ rotateX: 25, opacity: 0, y: -40, scale: 0.95 }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                width: '100%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                borderRadius: '6px',
                padding: 'clamp(2rem, 5vw, 4rem)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: 'clamp(2rem, 5vw, 5rem)',
                alignItems: 'center',
                boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                position: 'relative',
                transformStyle: 'preserve-3d',
              }}
              className="showcase-card"
            >
              {/* Left Column: Project details */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '12px',
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
                    [{activeProject.number} // {activeProject.category}]
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-tertiary)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    · {activeProject.year}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
                    fontWeight: 800,
                    lineHeight: 0.95,
                    letterSpacing: '-0.03em',
                    textTransform: 'uppercase',
                    margin: '0 0 16px 0',
                    color: 'var(--text-primary)',
                  }}
                >
                  {activeProject.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
                    lineHeight: 1.55,
                    color: 'var(--text-secondary)',
                    maxWidth: '56ch',
                    margin: '0 0 24px 0',
                  }}
                >
                  {activeProject.description}
                </p>

                {/* Tech Stack Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '28px',
                  }}
                >
                  {activeProject.stack.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: '100px',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-secondary)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions: Live Demo + GitHub */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--text-inverse)',
                        backgroundColor: 'var(--text-primary)',
                        padding: '12px 24px',
                        borderRadius: '100px',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'background-color 0.2s ease',
                      }}
                      className="project-action-btn"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--text-primary)',
                        backgroundColor: 'transparent',
                        padding: '12px 24px',
                        borderRadius: '100px',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        border: '1px solid var(--border-primary)',
                        transition: 'border-color 0.2s ease',
                      }}
                      className="project-github-btn"
                    >
                      <Github size={14} />
                      <span>SOURCE</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Architectural Surface / Visual Panel */}
              <div
                style={{
                  border: '1px solid var(--border-primary)',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-primary)',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-tertiary)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    SPECIFICATION // {activeProject.year}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      fontWeight: 800,
                      color: 'var(--border-secondary)',
                      lineHeight: 1,
                    }}
                  >
                    {activeProject.number}
                  </span>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      marginBottom: '6px',
                    }}
                  >
                    ARCHITECTURE HIGHLIGHT
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                    }}
                  >
                    {activeProject.highlight}
                  </div>
                </div>

                <div
                  style={{
                    borderTop: '1px dashed var(--border-secondary)',
                    paddingTop: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--text-tertiary)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span>ROLE: {activeProject.role}</span>
                  <span>STATUS: SHIPPED</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </HoverLivePreview>

        {/* Bottom bar: Segmented Progress Indicator & Dots */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border-primary)',
            paddingTop: 'var(--space-4)',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {PROJECTS.map((p, idx) => (
              <button
                key={p.number}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to project ${p.number}: ${p.title}`}
                style={{
                  height: '4px',
                  width: activeIndex === idx ? '36px' : '16px',
                  backgroundColor: activeIndex === idx ? 'var(--accent)' : 'var(--border-secondary)',
                  borderRadius: '2px',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            ))}
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-tertiary)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            [ SCROLL OR USE ARROW KEYS ]
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 900px) {
          .showcase-card {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
