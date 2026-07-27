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

      {/* ── 02. PROJECT 01: FRESHIES (REAL CLIENT / FREELANCE WORK) ── */}
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
                fontWeight: 700,
                letterSpacing: 'var(--tracking-widest)',
              }}
            >
              01
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-meta)',
                color: 'var(--accent)',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: 'var(--tracking-wider)',
              }}
            >
              / CLIENT WORK • FREELANCE
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
            Freshies
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
            A complete commercial web experience for an artisanal ice cream brand — designed and engineered from concept to deployment.
          </p>
        </div>

        {/* Middle: LARGE PROJECT MEDIA SURFACE (High-Fidelity Artisanal Ice Cream UI Mockup) */}
        <div
          className="project-media-surface"
          data-cursor="view"
          style={{
            width: '100%',
            aspectRatio: '16/9',
            minHeight: '380px',
            backgroundColor: '#FAF9F7',
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
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D97706' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#059669' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E8503A' }} />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-tertiary)',
                  marginLeft: '12px',
                  letterSpacing: '0.05em',
                }}
              >
                https://freshies-flax.vercel.app
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.05em' }}>
              ● LIVE DEPLOYMENT
            </div>
          </div>

          {/* Artisanal Ice Cream Brand UI Canvas */}
          <div
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            {/* Nav Bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid var(--border-primary)',
                paddingBottom: '16px',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                FRESHIES ICE CREAMS
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)', display: 'flex', gap: '20px', letterSpacing: '0.08em' }}>
                <span>FLAVOURS</span>
                <span>INGREDIENTS</span>
                <span>CRAFT</span>
                <span>STORES</span>
              </div>
            </div>

            {/* Banner Statement */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '8px' }}>
                REAL FRUITS • REAL NUTS • NO ARTIFICIAL FLAVOURS
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}>
                SMALL BATCH CRAFTSMANSHIP.
              </div>
            </div>

            {/* Interactive Flavour Showcase Cards */}
            <div
              className="freshies-ui-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}
            >
              <div style={{ backgroundColor: '#F3F1ED', padding: '16px', borderRadius: '4px', border: '1px solid var(--border-primary)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#D97706', fontWeight: 700, marginBottom: '6px' }}>SIGNATURE BATCH</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '4px' }}>Almond Roasted Fig</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>100% real fig preserve paired with slow-roasted almonds.</div>
              </div>

              <div style={{ backgroundColor: '#F3F1ED', padding: '16px', borderRadius: '4px', border: '1px solid var(--border-primary)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#059669', fontWeight: 700, marginBottom: '6px' }}>PURE NATURAL</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '4px' }}>Tender Coconut</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>Fresh Malnad coconut cream churned to velvet texture.</div>
              </div>

              <div style={{ backgroundColor: '#F3F1ED', padding: '16px', borderRadius: '4px', border: '1px solid var(--border-primary)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#E8503A', fontWeight: 700, marginBottom: '6px' }}>SEASONAL RESERVE</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '4px' }}>Mango Rhapsody</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>Pure Alphonso mango pulp without synthetic essences.</div>
              </div>
            </div>

            {/* Store Locator Footer Bar */}
            <div
              style={{
                backgroundColor: 'var(--text-primary)',
                color: 'var(--text-inverse)',
                padding: '12px 20px',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.05em',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <span>LOCATIONS: HOSPET • BELLARY • GANGAVATHI</span>
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>OPEN DAILY 11 AM – 11 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom: Editorial Metadata & Action Links */}
        <div
          className="project-p1-footer"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: 'var(--space-8)',
            alignItems: 'end',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
              ROLE &amp; IMPLEMENTATION
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
              Independently designed and developed the complete digital experience. Built custom GSAP scroll choreography, responsive product showcases, and integrated store locator workflows.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
              TYPE &amp; STACK · 2026
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body)', color: 'var(--text-primary)', letterSpacing: '0.05em', fontWeight: 600 }}>
              FREELANCE / CLIENT WORK
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              NEXT.JS 16 / TYPESCRIPT / GSAP / TAILWIND CSS
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'flex-start' }}>
            <a
              href="/work/freshies"
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
              <span>View Project</span>
              <span className="btn-arrow">→</span>
            </a>

            <a
              href="https://freshies-flax.vercel.app/"
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
              <span>Visit Website</span>
              <span className="btn-arrow">↗</span>
            </a>
          </div>
        </div>
      </article>

      {/* ── 03. PROJECT 02: SKILLSWAP (PRODUCT / FULL-STACK PROOF) ── */}
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
              02
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
          data-cursor="visit"
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
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E8503A' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D97706' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-tertiary)',
                  marginLeft: '12px',
                  letterSpacing: '0.05em',
                }}
              >
                https://skill-swap-p-u9qf.vercel.app/explore
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em' }}>
              ● LIVE SESSION
            </div>
          </div>

          {/* High-Fidelity App Mockup Canvas */}
          <div
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid var(--border-primary)',
                paddingBottom: '16px',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                SKILLSWAP // EXCHANGE NETWORK
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', backgroundColor: 'rgba(232,80,58,0.1)', padding: '4px 10px', borderRadius: '100px' }}>
                4 CREDITS AVAILABLE
              </div>
            </div>

            <div
              className="skillswap-ui-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
              }}
            >
              <div style={{ backgroundColor: '#FAF9F7', padding: '16px', borderRadius: '4px', border: '1px solid var(--border-primary)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>TEACHING • VERIFIED MENTOR</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>Advanced TypeScript &amp; Architecture</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>2 hours/week • 1-on-1 Code Review &amp; System Design</div>
              </div>

              <div style={{ backgroundColor: '#FAF9F7', padding: '16px', borderRadius: '4px', border: '1px solid var(--border-primary)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>LEARNING • TARGET SKILL</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>PostgreSQL Indexing &amp; Supabase RLS</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-secondary)' }}>Looking for practical database query optimization.</div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--text-primary)',
                color: 'var(--text-inverse)',
                padding: '12px 16px',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <span>SEMANTIC VECTOR SEARCH: ACTIVE</span>
              <span style={{ color: 'var(--accent)' }}>ESCROW PROTECTED SESSION →</span>
            </div>
          </div>
        </div>

        {/* Bottom: Editorial Metadata & Action Links */}
        <div
          className="project-p1-footer"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: 'var(--space-8)',
            alignItems: 'end',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
              ROLE &amp; IMPLEMENTATION
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
              Architected the entire full-stack infrastructure from scratch, designing the database schema and leading all major technical decisions. Engineered AI-powered skill matching using vector-based semantic search and secure credit escrow.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
              STACK • Lead Architect · 2026
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body)', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
              NEXT.JS / TYPESCRIPT / SUPABASE / POSTGRESQL / AI
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'flex-start' }}>
            <a
              href="https://skill-swap-p-u9qf.vercel.app/"
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
              <span>Visit Website</span>
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
      </article>

      {/* ── 04. PROJECT 03: CONTROL-GRID (REAL-TIME INDUSTRIAL MONITORING) ── */}
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
        <div style={{ marginBottom: 'var(--space-10)' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline', marginBottom: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--accent)', fontWeight: 600 }}>03</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-meta)', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const }}>
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
            Control-Grid
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
            Real-time industrial monitoring dashboard built under intense hackathon constraints.
          </p>
        </div>

        {/* Industrial Dark Canvas Mockup */}
        <div
          className="project-media-surface-dark"
          data-cursor="visit"
          style={{
            width: '100%',
            aspectRatio: '16/9',
            minHeight: '380px',
            backgroundColor: '#111315',
            border: '1px solid #2A2E33',
            borderRadius: '6px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 'var(--space-10)',
            color: '#E6E8EA',
            boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
          }}
        >
          <div
            style={{
              backgroundColor: '#181B1F',
              padding: '12px 20px',
              borderBottom: '1px solid #2A2E33',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E8503A' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#8C939C', letterSpacing: '0.05em' }}>SYS_MONITOR // HACKZION_NODE_01</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#10B981', fontWeight: 600 }}>● WEBSOCKET CONNECTED</div>
          </div>

          <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #2A2E33', paddingBottom: '12px', flexWrap: 'wrap', gap: '12px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.05em', color: '#FFFFFF' }}>TELEMETRY STREAM</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#E8503A' }}>LATENCY: 12ms</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="tripnest-ui-grid">
              <div style={{ backgroundColor: '#181B1F', padding: '16px', borderRadius: '4px', border: '1px solid #2A2E33' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#8C939C' }}>TURBINE LOAD</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.5rem', color: '#10B981', margin: '8px 0' }}>84.2%</div>
                <div style={{ height: '4px', backgroundColor: '#2A2E33', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '84%', height: '100%', backgroundColor: '#10B981' }} />
                </div>
              </div>

              <div style={{ backgroundColor: '#181B1F', padding: '16px', borderRadius: '4px', border: '1px solid #2A2E33' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#8C939C' }}>EXHAUST TEMP</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.5rem', color: '#E8503A', margin: '8px 0' }}>412°C</div>
                <div style={{ height: '4px', backgroundColor: '#2A2E33', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '70%', height: '100%', backgroundColor: '#E8503A' }} />
                </div>
              </div>

              <div style={{ backgroundColor: '#181B1F', padding: '16px', borderRadius: '4px', border: '1px solid #2A2E33' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#8C939C' }}>FLOW RATE</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.5rem', color: '#3B82F6', margin: '8px 0' }}>1,204 L/s</div>
                <div style={{ height: '4px', backgroundColor: '#2A2E33', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '90%', height: '100%', backgroundColor: '#3B82F6' }} />
                </div>
              </div>
            </div>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#8C939C', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <span>PIPELINE STATUS: NOMINAL</span>
              <span style={{ color: '#E6E8EA' }}>VIEW SYSTEM ARCHITECTURE →</span>
            </div>
          </div>
        </div>

        <div className="project-p3-footer" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 'var(--space-8)', alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
              IMPLEMENTATION DETAILS
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)', margin: 0 }}>
              Developed the entire real-time monitoring dashboard under tight hackathon deadlines. Implemented live WebSocket data streaming pipelines and engineered responsive grid-based layouts.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
              STACK • Hackathon Project · 2025
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body)', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
              TYPESCRIPT / REACT / WEBSOCKET / SASS
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'flex-start' }}>
            <a
              href="https://code-ninjas-hackzion.vercel.app/"
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
              <span>Visit Website</span>
              <span className="btn-arrow">↗</span>
            </a>

            <a
              href="https://github.com/abhishiv17/Control-Grid"
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
      </article>

      {/* ── 05. PROJECT 04: TRIPNEST (FULL-STACK ARCHITECTURE) ── */}
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
        <div style={{ marginBottom: 'var(--space-10)' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline', marginBottom: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--accent)', fontWeight: 600 }}>04</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-meta)', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const }}>
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
            TripNest
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
            Full-stack hospitality and travel management platform with end-to-end booking workflows.
          </p>
        </div>

        {/* Clean Paper UI Mockup */}
        <div
          className="project-media-surface"
          data-cursor="visit"
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
          <div
            style={{
              backgroundColor: '#EAE6DF',
              padding: '12px 20px',
              borderBottom: '1px solid var(--border-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E8503A' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', marginLeft: '8px' }}>
                https://tripnest-app.herokuapp.com/listings
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-tertiary)' }}>MERN STACK ARCHITECTURE</div>
          </div>

          <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-primary)', paddingBottom: '12px', flexWrap: 'wrap', gap: '12px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>TRIPNEST // RESERVATION SYSTEM</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)' }}>MONGODB • REDUX STATE</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="tripnest-ui-grid">
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '20px', borderRadius: '4px', border: '1px solid var(--border-primary)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', marginBottom: '4px' }}>FEATURED STAY • MALNAD RESERVE</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>Heritage Coffee Estate Villa</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>4 Bedrooms • Private Pool • Mountain View</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600 }}>$240 / night</div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '20px', borderRadius: '4px', border: '1px solid var(--border-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>INSTANT RESERVATION FLOW</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-primary)', marginBottom: '12px' }}>
                  Secure JWT authentication, automated availability check, and Redux state synchronization.
                </div>
                <div style={{ padding: '8px 12px', backgroundColor: 'var(--text-primary)', color: 'var(--text-inverse)', fontFamily: 'var(--font-mono)', fontSize: '11px', textAlign: 'center', borderRadius: '100px' }}>
                  CONFIRM RESERVATION →
                </div>
              </div>
            </div>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <span>REST API: EXPRESS &amp; NODE.JS</span>
              <span style={{ color: 'var(--text-primary)' }}>VIEW DATABASE SCHEMA →</span>
            </div>
          </div>
        </div>

        <div className="project-p4-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 'var(--space-8)', alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
              IMPLEMENTATION DETAILS
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)', margin: 0 }}>
              Independently owned the full development lifecycle — engineered RESTful APIs with Express, implemented secure user authentication, built a responsive booking flow with Redux state management.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
              STACK • Full-Stack Developer · 2025
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body)', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
              JAVASCRIPT / NODE.JS / EXPRESS / MONGODB / REDUX
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'flex-start' }}>
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
          .freshies-ui-grid,
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
