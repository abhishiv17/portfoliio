'use client'

import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      style={{
        width: '100%',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        padding: 'var(--space-20) 0 var(--space-20) 0',
        position: 'relative',
        borderTop: '1px solid var(--border-primary)',
      }}
    >
      {/* ── 01. INTRO & ASYMMETRIC IDENTITY ── */}
      <div
        className="about-intro-grid"
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: '0 var(--px-page) var(--space-16)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 'clamp(3rem, 6vw, 6rem)',
        }}
      >
        {/* Left: Large Statements */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-meta)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
              marginBottom: 'var(--space-8)',
            }}
          >
            04 / ABOUT
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7.5vw, 7rem)',
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: '-0.035em',
              margin: 0,
            }}
          >
            ENGINEERING<br />
            STUDENT.
          </h2>
          <div style={{ height: 'clamp(1rem, 3vw, 2rem)' }} />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7.5vw, 7rem)',
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: '-0.035em',
              margin: 0,
            }}
          >
            WEB<br />
            DEVELOPER.
          </h2>
          <div style={{ height: 'clamp(1rem, 3vw, 2rem)' }} />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7.5vw, 7rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 0.88,
              letterSpacing: '-0.035em',
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            STILL<br />
            CURIOUS.
          </h2>
        </div>

        {/* Right: Personal Visual & Story */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)', paddingTop: 'var(--space-12)' }}>
          
          {/* Typographic Placeholder for Personal Visual */}
          <div
            className="personal-visual"
            style={{
              width: '100%',
              aspectRatio: '4/5',
              maxWidth: '380px',
              border: '1px solid var(--border-primary)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/abhishek.jpg"
              alt="Abhishek MS"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 768px) 100vw, 380px"
              priority
            />
          </div>

          {/* Primary Story */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 8px 0' }}>
              ABHISHEK MS
            </h3>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '0.05em' }}>
              Bangalore, India
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
                I study computer science and spend a lot of the time between classes building things for the web.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
                Some become products. Some become freelance work. Some end up in the Lab.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', lineHeight: 1.6, color: 'var(--text-primary)', fontWeight: 500, margin: 0 }}>
                I care about making websites that work well, move well, and don&apos;t look like everyone else&apos;s.
              </p>
            </div>
          </div>

          {/* CURRENTLY & I LIKE */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-8)', borderTop: '1px solid var(--border-primary)', paddingTop: 'var(--space-8)' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', fontWeight: 700, marginBottom: '16px', letterSpacing: '0.1em' }}>
                CURRENTLY //
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)' }}>
                <li><strong style={{ color: 'var(--text-primary)' }}>STUDYING:</strong> Computer Science</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>BUILDING:</strong> Freelance projects</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>EXPLORING:</strong> Interaction design</li>
              </ul>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', fontWeight: 700, marginBottom: '16px', letterSpacing: '0.1em' }}>
                I LIKE //
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
                <li>Fast Websites</li>
                <li>Clear Interfaces</li>
                <li>Small Details</li>
                <li>Weird Ideas</li>
                <li>Shipping Things</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── 02. CAPABILITIES EDITORIAL GRID ── */}
      <div style={{ maxWidth: 'var(--max-w-wide)', margin: '0 auto', padding: 'var(--space-16) var(--px-page) var(--space-12)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.1em', marginBottom: 'var(--space-10)', textTransform: 'uppercase' }}>
          CAPABILITIES &amp; STACK //
        </div>
        
        <div 
          className="capabilities-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: 'var(--space-8)',
            borderTop: '1px solid var(--border-primary)',
            borderBottom: '1px solid var(--border-primary)',
          }}
        >
          {/* 01 FRONTEND */}
          <div style={{ borderRight: '1px solid var(--border-primary)', padding: 'var(--space-8) var(--space-4) var(--space-8) 0', paddingRight: 'var(--space-4)' }} className="cap-col">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', fontWeight: 700, marginBottom: '4px' }}>01</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '24px' }}>FRONTEND</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)' }}>
              <li>React &amp; Next.js</li>
              <li>TypeScript</li>
              <li>Responsive UI</li>
              <li>Tailwind CSS</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* 02 BACKEND */}
          <div style={{ borderRight: '1px solid var(--border-primary)', padding: 'var(--space-8) var(--space-4) var(--space-8) var(--space-4)' }} className="cap-col">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', fontWeight: 700, marginBottom: '4px' }}>02</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '24px' }}>BACKEND</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)' }}>
              <li>Node.js</li>
              <li>REST APIs</li>
              <li>PostgreSQL</li>
              <li>Supabase</li>
              <li>Authentication</li>
            </ul>
          </div>

          {/* 03 INTERACTION */}
          <div style={{ borderRight: '1px solid var(--border-primary)', padding: 'var(--space-8) var(--space-4) var(--space-8) var(--space-4)' }} className="cap-col">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', fontWeight: 700, marginBottom: '4px' }}>03</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '24px' }}>INTERACTION</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)' }}>
              <li>Motion Design</li>
              <li>GSAP</li>
              <li>SVG Animation</li>
              <li>Creative UI</li>
              <li>Scroll Experiences</li>
            </ul>
          </div>

          {/* 04 TOOLS */}
          <div style={{ padding: 'var(--space-8) 0 var(--space-8) var(--space-4)' }} className="cap-col last-cap-col">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', fontWeight: 700, marginBottom: '4px' }}>04</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '24px' }}>TOOLS</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)' }}>
              <li>Git / GitHub</li>
              <li>Vercel</li>
              <li>Figma</li>
              <li>VS Code</li>
              <li>Performance Auditing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── 03. EDUCATION, RESUME & TRANSITION ── */}
      <div
        className="about-footer-grid"
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: '0 var(--px-page)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-8)',
        }}
      >
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.1em', marginBottom: '16px', textTransform: 'uppercase' }}>
            EDUCATION //
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
            Computer Science &amp; Engineering
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Dr. Ambedkar Institute of Technology<br />
            Bangalore
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.1em', marginBottom: '16px', textTransform: 'uppercase' }}>
            PROOF &amp; ACCESS //
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a 
              href="/cv" 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ borderBottom: '1px solid var(--text-primary)' }}>VIEW RESUME</span>
              <span style={{ color: 'var(--accent)' }}>↗</span>
            </a>
            <a 
              href="https://github.com/abhishiv17" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ borderBottom: '1px solid var(--border-primary)' }}>GITHUB</span>
              <span style={{ color: 'var(--text-tertiary)' }}>↗</span>
            </a>
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '16px', textTransform: 'uppercase', fontWeight: 700 }}>
            STATUS //
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '16px' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent)', borderRadius: '50%', marginTop: '6px' }} />
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', lineHeight: 1.2 }}>
              AVAILABLE FOR<br />
              SELECT FREELANCE<br />
              PROJECTS
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .about-intro-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .capabilities-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .cap-col {
            border-bottom: 1px solid var(--border-primary) !important;
            padding-bottom: 2rem !important;
          }
          .cap-col:nth-child(even) {
            border-right: none !important;
            padding-right: 0 !important;
          }
          .cap-col:nth-child(odd) {
            padding-left: 0 !important;
          }
          .last-cap-col {
            border-bottom: none !important;
            padding-bottom: 1rem !important;
          }
        }

        @media (max-width: 768px) {
          .about-footer-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .capabilities-grid {
            grid-template-columns: 1fr !important;
          }
          .cap-col {
            border-right: none !important;
            padding: 2rem 0 !important;
          }
          .cap-col:first-child {
            padding-top: 1rem !important;
          }
          .personal-visual-placeholder {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
