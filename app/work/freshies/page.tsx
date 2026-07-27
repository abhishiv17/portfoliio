'use client'

import React from 'react'
import Link from 'next/link'

export default function FreshiesCaseStudy() {
  return (
    <main
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        padding: 'clamp(3rem, 6vw, 6rem) var(--px-page) clamp(5rem, 10vw, 8rem)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 'var(--max-w-wide)', margin: '0 auto' }}>
        {/* Top Back Nav */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--border-primary)', paddingBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-small)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            <span>←</span>
            <span>BACK TO PORTFOLIO</span>
          </Link>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.1em' }}>
            01 // CLIENT WORK • 2026
          </div>
        </div>

        {/* Header Section */}
        <header style={{ marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: '-0.035em',
              textTransform: 'uppercase' as const,
              margin: '0 0 var(--space-6) 0',
            }}
          >
            FRESHIES ICE CREAMS
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
              lineHeight: 1.35,
              color: 'var(--text-secondary)',
              maxWidth: '38ch',
              margin: '0 0 var(--space-10) 0',
            }}
          >
            Artisanal beverage &amp; ice cream commercial web experience built for small batch craftsmanship in Karnataka.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
            <a
              href="https://freshies-flax.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
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
                border: '1px solid var(--text-primary)',
              }}
            >
              <span>Visit Live Website</span>
              <span>↗</span>
            </a>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.05em' }}>
              ROLE: WEB DESIGN / DEVELOPMENT • CLIENT WORK
            </div>
          </div>
        </header>

        {/* Media Preview Box */}
        <section
          style={{
            width: '100%',
            aspectRatio: '16/9',
            minHeight: '360px',
            backgroundColor: '#FAF9F7',
            border: '1px solid var(--border-primary)',
            borderRadius: '6px',
            overflow: 'hidden',
            marginBottom: 'clamp(4rem, 8vw, 7rem)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 50px rgba(0,0,0,0.05)',
          }}
        >
          <div style={{ backgroundColor: '#EAE6DF', padding: '12px 20px', borderBottom: '1px solid var(--border-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D97706' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#059669' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E8503A' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', marginLeft: '12px' }}>
                https://freshies-flax.vercel.app
              </span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', fontWeight: 700 }}>● PRODUCTION DEPLOYMENT</span>
          </div>

          <div style={{ padding: 'clamp(2rem, 5vw, 4rem)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.15em' }}>
              REAL FRUITS • REAL NUTS • NO ARTIFICIAL FLAVOURS
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em' }}>
              SMALL BATCH CRAFTSMANSHIP.
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '12px' }}>
              <div style={{ backgroundColor: '#F3F1ED', padding: '16px', borderRadius: '4px', border: '1px solid var(--border-primary)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#D97706', fontWeight: 700 }}>FLAVOUR SHOWCASE</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', margin: '4px 0' }}>Almond Roasted Fig</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)' }}>100% real fig preserve &amp; slow-roasted almonds.</div>
              </div>

              <div style={{ backgroundColor: '#F3F1ED', padding: '16px', borderRadius: '4px', border: '1px solid var(--border-primary)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#059669', fontWeight: 700 }}>STORE LOCATIONS</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', margin: '4px 0' }}>Hospet &amp; Bellary</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)' }}>Open daily 11 AM to 11 PM with dine-in &amp; takeaway.</div>
              </div>

              <div style={{ backgroundColor: '#F3F1ED', padding: '16px', borderRadius: '4px', border: '1px solid var(--border-primary)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#E8503A', fontWeight: 700 }}>FRANCHISE PORTAL</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', margin: '4px 0' }}>Partner Network</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)' }}>Structured inquiry workflow &amp; brand requirements.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Factual Case Study Sections */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(3rem, 6vw, 5rem)' }}>
          <section style={{ borderTop: '1px solid var(--border-primary)', paddingTop: '32px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 800, margin: '0 0 16px 0', textTransform: 'uppercase' as const }}>
              OVERVIEW //
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: '65ch', margin: 0 }}>
              Freshies Ice Creams is an artisanal beverage and ice cream brand in Karnataka crafting small batches with real fruits, real nuts, and zero artificial flavours. As a freelance web developer and designer, I was tasked with engineering a digital presence that reflects their commitment to natural ingredients and craftsmanship.
            </p>
          </section>

          <section style={{ borderTop: '1px solid var(--border-primary)', paddingTop: '32px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 800, margin: '0 0 16px 0', textTransform: 'uppercase' as const }}>
              THE BUILD //
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: '65ch', margin: 0 }}>
              Architected from the ground up using Next.js 16 and React 19, focusing on high page-load performance, responsive layouts across mobile and desktop viewports, and seamless GSAP scroll choreography that brings their artisanal stories to life.
            </p>
          </section>

          <section style={{ borderTop: '1px solid var(--border-primary)', paddingTop: '32px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 800, margin: '0 0 24px 0', textTransform: 'uppercase' as const }}>
              KEY FEATURES //
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
                  Interactive Flavour Showcase
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>
                  Dynamic presentation of artisanal flavors with rich typography and ingredient transparency badges.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
                  Ingredient Transparency
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>
                  Dedicated visual breakdowns emphasizing real fruit and nut sourcing over synthetic additives and essences.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
                  Store Locator &amp; Franchise Portal
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>
                  Integrated location guides for Hospet, Bellary, and Gangavathi stores alongside a structured franchise inquiry workflow.
                </p>
              </div>
            </div>
          </section>

          <section style={{ borderTop: '1px solid var(--border-primary)', paddingTop: '32px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 800, margin: '0 0 16px 0', textTransform: 'uppercase' as const }}>
              TECHNOLOGY &amp; STACK //
            </h2>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-primary)', letterSpacing: '0.05em', fontWeight: 600 }}>
              NEXT.JS 16 • TYPESCRIPT • REACT 19 • GSAP 3 • TAILWIND CSS
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div style={{ marginTop: 'clamp(4rem, 8vw, 6rem)', borderTop: '1px solid var(--border-primary)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link
            href="/#work"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            ← RETURN TO ALL SELECTED WORK
          </Link>

          <a
            href="https://freshies-flax.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--accent)',
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            VISIT LIVE DEPLOYMENT ↗
          </a>
        </div>
      </div>
    </main>
  )
}
