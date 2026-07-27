'use client'

import React from 'react'

export default function SelectedWork() {
  return (
    <section
      id="work"
      aria-label="Selected Work"
      style={{
        width: '100%',
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        paddingTop: 'var(--space-20)',
      }}
    >
      {/* ── 01. ASYMMETRIC EDITORIAL INTRO ── */}
      <div
        className="work-intro-grid"
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
            01 / SELECTED WORK
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7.5vw, 7rem)',
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: '-0.035em',
              textTransform: 'uppercase' as const,
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            THINGS I&apos;VE<br />
            PUT ON THE<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>INTERNET.</span>
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
            Selected builds, products and experiments I&apos;ve designed and developed.
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
            <span>04 Featured Projects</span>
            <span>2025—2026</span>
          </div>
        </div>
      </div>

      {/* ── 02. PROJECT 01: SKILLSWAP (MONUMENTAL FULL-WIDTH COMPOSITION) ── */}
      <article
        className="project-showcase-item animate-hero-backwards"
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: 'var(--space-20) var(--px-page)',
          borderBottom: '1px solid var(--border-primary)',
          '--delay': '0.1s',
        } as React.CSSProperties}
      >
        {/* Top Header & Description */}
        <div style={{ marginBottom: 'var(--space-10)' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline', marginBottom: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-small)',
                color: 'var(--accent)',
                fontWeight: 600,
                letterSpacing: 'var(--tracking-widest)',
              }}
            >
              01
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-meta)',
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase' as const,
                letterSpacing: 'var(--tracking-wider)',
              }}
            >
              / FEATURED PROJECT
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 0.95,
              margin: '12px 0 var(--space-6) 0',
              textTransform: 'uppercase' as const,
            }}
          >
            SkillSwap
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
              lineHeight: 1.35,
              color: 'var(--text-primary)',
              maxWidth: '800px',
              margin: 0,
            }}
          >
            A peer-to-peer platform for finding people who can teach the skills you want to learn.
          </p>
        </div>

        {/* Middle: LARGE PROJECT MEDIA SURFACE (High-Fidelity Browser UI Mockup) */}
        <div
          className="project-media-surface"
          style={{
            width: '100%',
            aspectRatio: '16/9',
            minHeight: '380px',
            backgroundColor: '#F3F1ED',
            border: '1px solid var(--border-primary)',
            borderRadius: '6px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 'var(--space-10)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.05)',
          }}
        >
          {/* Browser Header Bar */}
          <div
            style={{
              backgroundColor: '#EAE6DF',
              padding: '12px 20px',
              borderBottom: '1px solid var(--border-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#E8503A' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#D6D2CC' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#D6D2CC' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', marginLeft: '12px' }}>
                https://code-carnage.vercel.app/explore
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', fontWeight: 600 }}>
              ● AI SEMANTIC MATCHING ACTIVE
            </div>
          </div>

          {/* Browser Content Area: Real App UI Representation */}
          <div
            className="skillswap-ui-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '24px',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              flex: 1,
            }}
          >
            {/* Left Sidebar Mockup */}
            <div
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-primary)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '4px',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-tertiary)', marginBottom: '12px' }}>
                  SYS://SEARCH_PARAMETERS
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Target Skill: System Architecture
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  Offering: React / TypeScript / UI Design
                </div>
                <div style={{ height: '1px', backgroundColor: 'var(--border-primary)', margin: '16px 0' }} />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)' }}>
                  Distance Metric: Cosine Sim &lt; 0.18<br />
                  Vector Dimension: 1536-d
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', padding: '8px 12px', backgroundColor: 'rgba(232, 80, 58, 0.08)', borderRadius: '2px', textAlign: 'center' }}>
                ESCROW CREDIT: 4.5 HOURS AVAILABLE
              </div>
            </div>

            {/* Right Feed Mockup */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-primary)',
                  borderLeft: '4px solid var(--accent)',
                  padding: '16px 20px',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '15px' }}>Alex Chen</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#10B981', backgroundColor: 'rgba(16,185,129,0.1)', padding: '2px 6px', borderRadius: '10px' }}>
                      98% MATCH
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    Teaching: Next.js &amp; Distributed Systems • Seeking: Advanced Rust
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--text-primary)', padding: '8px 14px', border: '1px solid var(--border-secondary)', borderRadius: '100px' }}>
                  Request Session
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-primary)',
                  borderLeft: '4px solid var(--text-primary)',
                  padding: '16px 20px',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '15px' }}>Elena Rostova</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#3B82F6', backgroundColor: 'rgba(59,130,246,0.1)', padding: '2px 6px', borderRadius: '10px' }}>
                      94% MATCH
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    Teaching: AI Agents &amp; Supabase • Seeking: UI/UX Prototyping
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--text-primary)', padding: '8px 14px', border: '1px solid var(--border-secondary)', borderRadius: '100px' }}>
                  Request Session
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Role, Stack, and Interactive Links */}
        <div
          className="project-p1-footer"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.4fr 0.6fr',
            gap: 'var(--space-8)',
            alignItems: 'baseline',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, marginBottom: '4px' }}>
              ROLE &amp; YEAR
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-h3)', fontWeight: 700, color: 'var(--text-primary)' }}>
              Lead Architect · 2026
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
                STACK
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body)', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
                NEXT.JS / TYPESCRIPT / SUPABASE / POSTGRESQL / AI
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
              <a
                href="https://code-carnage.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
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
                  padding: 'var(--space-4) var(--space-8)',
                  borderRadius: '100px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  transition: 'all 0.2s ease',
                  border: '1px solid var(--text-primary)',
                }}
              >
                <span>Live Site</span>
                <span className="btn-arrow">↗</span>
              </a>

              <a
                href="https://github.com/abhishiv17/SkillSwap"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn-secondary"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-small)',
                  fontWeight: 600,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 'var(--tracking-wide)',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  backgroundColor: 'transparent',
                  padding: 'var(--space-4) var(--space-8)',
                  borderRadius: '100px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  transition: 'all 0.2s ease',
                  border: '1px solid var(--border-secondary)',
                }}
              >
                <span>GitHub</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* ── 03. PROJECT 02: CONTROL-GRID (THE ONE DARK CHAPTER) ── */}
      <article
        className="project-showcase-dark"
        style={{
          width: '100%',
          backgroundColor: '#1A1A1A',
          color: '#FAF9F7',
          padding: 'var(--space-20) 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="project-dark-grid"
          style={{
            maxWidth: 'var(--max-w-wide)',
            margin: '0 auto',
            padding: '0 var(--px-page)',
            display: 'grid',
            gridTemplateColumns: '0.45fr 0.55fr',
            gap: 'clamp(2rem, 5vw, 6rem)',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline', marginBottom: '12px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-small)',
                  color: '#E8503A',
                  fontWeight: 600,
                  letterSpacing: 'var(--tracking-widest)',
                }}
              >
                02
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-meta)',
                  color: '#9A9A9A',
                  textTransform: 'uppercase' as const,
                  letterSpacing: 'var(--tracking-wider)',
                }}
              >
                / FEATURED PROJECT
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                margin: '0 0 var(--space-6) 0',
                textTransform: 'uppercase' as const,
                color: '#FAF9F7',
              }}
            >
              Control-Grid
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-h3)',
                lineHeight: 1.35,
                color: '#FAF9F7',
                margin: '0 0 var(--space-6) 0',
              }}
            >
              A real-time industrial monitoring dashboard built under tight hackathon deadlines.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)',
                color: '#9A9A9A',
                margin: '0 0 var(--space-8) 0',
              }}
            >
              Developed the entire live monitoring dashboard under strict time constraints. Implemented real-time WebSocket data streaming pipelines, engineered responsive grid-based layouts for mission-critical system oversight, and delivered a high-performance product.
            </p>

            <div style={{ marginBottom: 'var(--space-8)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#9A9A9A', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
                STACK • Hackathon Project · 2025
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: '#E8503A', letterSpacing: '0.05em' }}>
                TYPESCRIPT / REACT / WEBSOCKET / SASS
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
              <a
                href="https://code-ninjas-hackzion.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn-dark-primary"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-small)',
                  fontWeight: 600,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 'var(--tracking-wide)',
                  textDecoration: 'none',
                  color: '#1A1A1A',
                  backgroundColor: '#FAF9F7',
                  padding: 'var(--space-3) var(--space-6)',
                  borderRadius: '100px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  transition: 'all 0.2s ease',
                  border: '1px solid #FAF9F7',
                }}
              >
                <span>Live Site</span>
                <span className="btn-arrow">↗</span>
              </a>

              <a
                href="https://github.com/abhishiv17/Control-Grid"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn-dark-secondary"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-small)',
                  fontWeight: 600,
                  textTransform: 'uppercase' as const,
                  letterSpacing: 'var(--tracking-wide)',
                  textDecoration: 'none',
                  color: '#FAF9F7',
                  backgroundColor: 'transparent',
                  padding: 'var(--space-3) var(--space-6)',
                  borderRadius: '100px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  transition: 'all 0.2s ease',
                  border: '1px solid rgba(255,255,255,0.25)',
                }}
              >
                <span>GitHub</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* Dark Industrial Dashboard UI Mockup */}
          <div
            className="project-media-surface-dark"
            style={{
              width: '100%',
              aspectRatio: '4/3',
              backgroundColor: '#121212',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '6px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#E8503A', fontWeight: 600 }}>
                SYS://CONTROL-GRID v2.4 — TELEMETRY
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#2ECC71', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#2ECC71', display: 'inline-block' }} /> STREAMING
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: 'auto 0' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '16px', borderLeft: '2px solid #E8503A' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#9A9A9A' }}>GRID FREQUENCY</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', color: '#FAF9F7', fontWeight: 700, marginTop: '4px' }}>50.02 Hz</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#2ECC71', marginTop: '6px' }}>▲ STABLE SYNCHRONIZATION</div>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '16px', borderLeft: '2px solid #FAF9F7' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#9A9A9A' }}>LOAD DISTRIBUTION</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', color: '#FAF9F7', fontWeight: 700, marginTop: '4px' }}>94.8%</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#E8503A', marginTop: '6px' }}>■ PEAK CAPACITY THRESHOLD</div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '12px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#9A9A9A', marginBottom: '4px' }}>
                [17:34:22] WebSocket handshake verified (12ms latency)
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#E8503A' }}>
                [17:34:02] Substation 4 telemetry grid overload warning resolved
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ── 04. PROJECT 03: TRIPNEST (CROSS-TYPOGRAPHY & BOOKING UI SHOWCASE) ── */}
      <article
        className="project-showcase-item"
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: 'var(--space-20) var(--px-page) var(--space-16)',
          borderBottom: '1px solid var(--border-primary)',
        }}
      >
        <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline', marginBottom: '12px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--accent)', fontWeight: 600 }}>
            03
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-meta)', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const }}>
            / FEATURED PROJECT
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 0.95,
            margin: '0 0 var(--space-8) 0',
            textTransform: 'uppercase' as const,
          }}
        >
          TripNest
        </h3>

        {/* Near-full-width media canvas with cross-typography & booking UI */}
        <div
          className="project-media-surface"
          style={{
            width: '100%',
            aspectRatio: '21/9',
            minHeight: '320px',
            backgroundColor: '#EBE8E3',
            border: '1px solid var(--border-primary)',
            borderRadius: '6px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1.5rem, 4vw, 3.5rem)',
            marginBottom: 'var(--space-8)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 9.5vw, 9rem)',
              fontWeight: 800,
              color: 'rgba(0,0,0,0.04)',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              letterSpacing: '-0.04em',
            }}
          >
            REST API // MONGODB // REDUX
          </div>

          <div
            className="tripnest-ui-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gap: '24px',
              width: '100%',
              zIndex: 1,
              maxWidth: '900px',
            }}
          >
            {/* Hotel Listing Mockup */}
            <div style={{ backgroundColor: 'var(--surface-elevated)', padding: '24px', borderRadius: '4px', borderTop: '3px solid var(--text-primary)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-tertiary)' }}>LOCATION: KYOTO, JAPAN</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: '#10B981' }}>⭐ 4.96 (128 reviews)</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                Kyoto Imperial Ryokan &amp; Gardens
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', backgroundColor: 'var(--bg-primary)', padding: '4px 8px', borderRadius: '2px', border: '1px solid var(--border-primary)' }}>🌊 Private Hot Spring</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', backgroundColor: 'var(--bg-primary)', padding: '4px 8px', borderRadius: '2px', border: '1px solid var(--border-primary)' }}>🍵 Tea Ceremony</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', backgroundColor: 'var(--bg-primary)', padding: '4px 8px', borderRadius: '2px', border: '1px solid var(--border-primary)' }}>📶 High-Speed WiFi</span>
              </div>
            </div>

            {/* Reservation Widget Mockup */}
            <div style={{ backgroundColor: 'var(--surface-elevated)', padding: '24px', borderRadius: '4px', borderTop: '3px solid var(--accent)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700 }}>$250</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>/ night</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-secondary)', padding: '8px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-primary)', borderRadius: '2px', textAlign: 'center' }}>
                  OCT 14 → OCT 19 • 2 GUESTS
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, backgroundColor: 'var(--text-primary)', color: 'var(--text-inverse)', textAlign: 'center', padding: '10px', borderRadius: '100px', marginTop: '16px' }}>
                Instant Book (JWT Escrow)
              </div>
            </div>
          </div>
        </div>

        <div
          className="project-p3-footer"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.65fr 0.35fr',
            gap: 'var(--space-8)',
            alignItems: 'baseline',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-h3)',
                lineHeight: 1.35,
                color: 'var(--text-primary)',
                margin: '0 0 var(--space-4) 0',
              }}
            >
              A full-service hospitality and travel booking platform with secure authentication.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--text-secondary)',
                margin: 0,
              }}
            >
              Independently owned the full development lifecycle — engineered RESTful APIs with Express, implemented secure user authentication, built a responsive booking flow with Redux state management, and optimized MongoDB queries for high-availability performance.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
                STACK • Full-Stack Developer · 2025
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
                NODE.JS / EXPRESS / MONGODB / REDUX
              </div>
            </div>

            <a
              href="https://github.com/abhishiv17/TripNest"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-secondary"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: 'var(--tracking-wide)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                backgroundColor: 'transparent',
                padding: 'var(--space-3) var(--space-6)',
                borderRadius: '100px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                transition: 'all 0.2s ease',
                border: '1px solid var(--border-secondary)',
              }}
            >
              <span>GitHub</span>
              <span className="btn-arrow">↗</span>
            </a>
          </div>
        </div>
      </article>

      {/* ── 05. PROJECT 04: SIMON-SAYS (MINIMAL CLOSING TREATMENT) ── */}
      <article
        className="project-showcase-item"
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: 'var(--space-16) var(--px-page) var(--space-20)',
          borderBottom: '1px solid var(--border-primary)',
        }}
      >
        <div
          className="project-p4-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.55fr 0.45fr',
            gap: 'clamp(2rem, 5vw, 6rem)',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline', marginBottom: '8px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--accent)', fontWeight: 600 }}>
                04
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-meta)', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const }}>
                / FEATURED PROJECT
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                margin: '0 0 var(--space-6) 0',
                textTransform: 'uppercase' as const,
              }}
            >
              Simon-Says
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-h3)',
                lineHeight: 1.35,
                color: 'var(--text-primary)',
                margin: '0 0 var(--space-4) 0',
              }}
            >
              A modernized classic memory game with high-fidelity CSS animations and low-latency DOM handling.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--text-secondary)',
                margin: '0 0 var(--space-6) 0',
              }}
            >
              Solely designed and developed a modernized memory game — crafted high-fidelity CSS animations from scratch, implemented low-latency DOM event handling for smooth interactions, and ensured a fully responsive layout across all device viewports.
            </p>

            <div style={{ marginBottom: 'var(--space-8)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
                STACK • Frontend Specialist · 2025
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
                JAVASCRIPT / HTML5 / CSS3 / DOM API
              </div>
            </div>

            <a
              href="https://github.com/abhishiv17/Simon-Says"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-secondary"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: 'var(--tracking-wide)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                backgroundColor: 'transparent',
                padding: 'var(--space-3) var(--space-6)',
                borderRadius: '100px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                transition: 'all 0.2s ease',
                border: '1px solid var(--border-secondary)',
              }}
            >
              <span>GitHub</span>
              <span className="btn-arrow">↗</span>
            </a>
          </div>

          {/* Simon Says Game Canvas Mockup */}
          <div
            className="project-media-surface"
            style={{
              width: '100%',
              aspectRatio: '1/1',
              maxWidth: '360px',
              margin: '0 auto',
              backgroundColor: '#F3F1ED',
              border: '1px solid var(--border-primary)',
              borderRadius: '50%',
              padding: '24px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ backgroundColor: '#E8503A', borderRadius: '100% 0 0 0', opacity: 0.85 }} />
            <div style={{ backgroundColor: '#3B82F6', borderRadius: '0 100% 0 0', opacity: 0.85 }} />
            <div style={{ backgroundColor: '#F59E0B', borderRadius: '0 0 0 100%', opacity: 0.85 }} />
            <div style={{ backgroundColor: '#10B981', borderRadius: '0 0 100% 0', opacity: 0.85 }} />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120px',
                height: '120px',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: '50%',
                border: '2px solid var(--border-primary)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '0.08em',
              }}
            >
              <span>ROUND // 08</span>
              <span style={{ fontSize: '9px', color: 'var(--accent)', marginTop: '4px' }}>● ACTIVE</span>
            </div>
          </div>
        </div>
      </article>

      {/* ── 06. SECTION CONCLUSION & TRANSITION INTO SERVICES ── */}
      <div
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: 'var(--space-20) var(--px-page) var(--space-12)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: 'var(--space-6)',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 0.88,
            letterSpacing: '-0.035em',
            textTransform: 'uppercase' as const,
            color: 'var(--text-primary)',
            margin: 0,
          }}
        >
          MORE THAN<br />
          <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-secondary)' }}>JUST PROJECTS.</span>
        </h2>

        <div>
          <a
            href="/cv"
            className="project-btn-secondary"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: 'var(--tracking-wide)',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              padding: 'var(--space-4) var(--space-8)',
              borderRadius: '100px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              transition: 'all 0.2s ease',
              border: '1px solid var(--text-primary)',
            }}
          >
            <span>View All Work &amp; CV</span>
            <span className="btn-arrow">↗</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .project-btn-primary:hover {
          background-color: var(--accent) !important;
          border-color: var(--accent) !important;
        }
        .project-btn-primary:hover .btn-arrow {
          transform: translate(3px, -3px);
        }

        .project-btn-secondary:hover {
          background-color: var(--text-primary) !important;
          color: var(--text-inverse) !important;
        }
        .project-btn-secondary:hover .btn-arrow {
          transform: translate(3px, -3px);
        }

        .project-btn-dark-primary:hover {
          background-color: #E8503A !important;
          border-color: #E8503A !important;
          color: #FAF9F7 !important;
        }
        .project-btn-dark-primary:hover .btn-arrow {
          transform: translate(3px, -3px);
        }

        .project-btn-dark-secondary:hover {
          background-color: #FAF9F7 !important;
          color: #1A1A1A !important;
          border-color: #FAF9F7 !important;
        }
        .project-btn-dark-secondary:hover .btn-arrow {
          transform: translate(3px, -3px);
        }

        .project-media-surface,
        .project-media-surface-dark {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          max-width: 100% !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }

        .project-media-surface:hover {
          transform: scale(1.015);
          box-shadow: 0 25px 50px rgba(0,0,0,0.06);
        }

        .project-media-surface-dark:hover {
          transform: scale(1.015);
          box-shadow: 0 35px 70px rgba(0,0,0,0.7);
        }

        @media (max-width: 1024px) {
          .work-intro-grid,
          .project-dark-grid,
          .project-p1-footer,
          .project-p3-footer,
          .project-p4-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-8) !important;
          }
          .intro-meta-box {
            border-left: none !important;
            border-top: 1px solid var(--border-primary) !important;
            padding-left: 0 !important;
            padding-top: var(--space-6) !important;
          }
          .skillswap-ui-grid,
          .tripnest-ui-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .project-media-surface,
          .project-media-surface-dark {
            aspect-ratio: auto !important;
            min-height: 240px !important;
            padding: 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          .project-media-surface,
          .project-media-surface-dark {
            min-height: auto !important;
            padding: 1rem !important;
          }
          .project-media-surface-dark > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-media-surface:hover,
          .project-media-surface-dark:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
