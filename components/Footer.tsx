'use client'

import React from 'react'
import { contactLinks } from './Contact'

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer
      style={{
        backgroundColor: '#0a0a0a',
        color: '#f3f1ed',
        padding: 'var(--space-12) 0 var(--space-6) 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: '0 var(--px-page)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(4rem, 8vw, 8rem)',
        }}
      >
        {/* Top Info Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 'var(--space-12)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#888',
          }}
        >
          {/* Identity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <div style={{ color: '#f3f1ed' }}>Abhishek MS</div>
            <div>Web Developer</div>
            <div>Bangalore / India</div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <a 
              href={contactLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              data-cursor="VISIT ↗"
              className="footer-link"
            >
              GitHub ↗
            </a>
            <a 
              href={contactLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              data-cursor="VISIT ↗"
              className="footer-link"
            >
              LinkedIn ↗
            </a>
            <a 
              href={contactLinks.resume}
              data-cursor="VISIT ↗"
              className="footer-link"
            >
              Resume ↗
            </a>
          </div>

          {/* Back to top */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'flex-end', flex: '1 1 auto' }}>
            <a 
              href="#top" 
              onClick={scrollToTop}
              className="footer-link"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              Back to Top <span className="arrow-up">↑</span>
            </a>
          </div>
        </div>

        {/* Huge Wordmark */}
        <div 
          style={{ 
            width: '100%', 
            textAlign: 'center', 
            userSelect: 'none',
            borderBottom: '1px solid #222',
            paddingBottom: 'var(--space-8)'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 15vw, 15rem)',
              fontWeight: 800,
              lineHeight: 0.8,
              letterSpacing: '-0.02em',
              color: '#f3f1ed',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'clip'
            }}
          >
            ABHISHEK MS
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#666',
          }}
        >
          <div>
            © {new Date().getFullYear()} Abhishek MS
          </div>
          <div>
            Designed + Built by Abhishek MS
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          color: #f3f1ed;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: var(--accent);
        }
        .footer-link:hover .arrow-up {
          transform: translateY(-4px);
        }
        .arrow-up {
          display: inline-block;
          transition: transform 0.2s ease;
        }
      `}</style>
    </footer>
  )
}
