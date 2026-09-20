'use client';

import React from 'react';
import Image from 'next/image';
import { MaskCursorEffect } from '@/components/block/mask-cursor-effect';
import { PROFILE } from '@/data/portfolio';
import { FlipText } from '@/components/block/flip-text';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      aria-label="03 / About &amp; Credentials"
      style={{
        width: '100%',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        padding: 'clamp(88px, 12vh, 120px) 0 clamp(5rem, 10vh, 8rem) 0',
        position: 'relative',
      }}
    >
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
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
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
              03 // ABOUT
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
              [ CREDENTIALS &amp; IDENTITY ]
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
            CSE · DR. AIT BANGALORE
          </div>
        </div>

        {/* ── ABOUT GRID: HEADLINE / PORTRAIT / CREDENTIALS ── */}
        <div
          className="about-composite-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'start',
            marginBottom: 'clamp(4rem, 8vw, 7rem)',
          }}
        >
          {/* Left Column: Monumental Identity Statements */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: '-0.035em',
                margin: '0 0 var(--space-6) 0',
                textTransform: 'uppercase',
              }}
            >
              <FlipText duration={2.2} delay={0.1}>ENGINEERING</FlipText><br />
              <FlipText duration={2.2} delay={0.2}>STUDENT.</FlipText><br />
              <FlipText duration={2.2} delay={0.3}>FULL-STACK</FlipText><br />
              <FlipText duration={2.2} delay={0.4}>DEVELOPER.</FlipText><br />
              <span style={{ color: 'var(--accent)' }}>
                <FlipText duration={2.2} delay={0.5}>BUILDING AT SCALE.</FlipText>
              </span>
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginTop: 'var(--space-8)',
                maxWidth: '52ch',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}
              >
                I study Computer Science &amp; Engineering at Dr. Ambedkar Institute of Technology (9.0 CGPA).
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}
              >
                Between classes and mentoring peers in data structures and competitive programming, I build production-grade web applications, real-time dashboards, and exploratory tools.
              </p>
            </div>
          </div>

          {/* Right Column: Portrait Visual & Consolidated Credentials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {/* Portrait with MaskCursorEffect */}
            <div
              style={{
                width: '100%',
                aspectRatio: '4/5',
                maxWidth: '340px',
                border: '1px solid var(--border-primary)',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4px',
              }}
            >
              <MaskCursorEffect
                backgroundColor="var(--accent)"
                compressedMaskSize={50}
                expandedMaskSize={240}
                className="w-full h-full"
                hiddenComponent={
                  <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '340px' }}>
                    <Image
                      src="/abhishek.jpg"
                      alt={PROFILE.name}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center', filter: 'contrast(1.08)' }}
                      sizes="(max-width: 768px) 100vw, 340px"
                    />
                  </div>
                }
              >
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '340px' }}>
                  <Image
                    src="/abhishek.jpg"
                    alt={PROFILE.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(100%) brightness(0.92)' }}
                    sizes="(max-width: 768px) 100vw, 340px"
                    priority
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '4px 8px',
                      backgroundColor: 'rgba(26, 26, 26, 0.75)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      borderRadius: '3px',
                    }}
                  >
                    Hover To Reveal
                  </div>
                </div>
              </MaskCursorEffect>
            </div>

            {/* Credentials Block */}
            <div
              style={{
                borderTop: '1px solid var(--border-primary)',
                paddingTop: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-tertiary)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  EDUCATION //
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 }}>
                  B.E. Computer Science &amp; Engineering
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)' }}>
                  Dr. Ambedkar Institute of Technology, Bangalore (2024-2028) · <strong>CGPA: 9.0 / 10</strong>
                </div>
              </div>


              {/* Profiles Row */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  borderTop: '1px dashed var(--border-secondary)',
                  paddingTop: '16px',
                  alignItems: 'center',
                }}
              >
                <a
                  href={PROFILE.resume}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    borderBottom: '1px solid var(--text-primary)',
                  }}
                >
                  <span>RESUME (PDF)</span>
                  <span style={{ color: 'var(--accent)' }}>↗</span>
                </a>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>GITHUB</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>LINKEDIN</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-composite-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
