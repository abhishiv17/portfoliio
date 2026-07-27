'use client'

import { useState, useEffect, useCallback } from 'react'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Lab', href: '#lab' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body scroll lock
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  // Escape to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <nav
        className="nav-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 'var(--z-nav)' as any,
          transition: `background-color var(--duration-normal) var(--ease-out), 
                       border-color var(--duration-normal) var(--ease-out)`,
          backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border-primary)' : '1px solid transparent',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          style={{
            maxWidth: 'var(--max-w-wide)',
            margin: '0 auto',
            padding: `0 var(--px-page)`,
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Wordmark */}
          <a
            href="/"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--text-small)',
              letterSpacing: 'var(--tracking-wide)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              textTransform: 'uppercase' as const,
            }}
            aria-label="Abhishek MS | Home"
          >
            ABHISHEK MS
          </a>

          {/* Desktop nav links */}
          <div
            className="nav-links-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-10)',
            }}
          >
            <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-micro)',
                    fontWeight: 500,
                    letterSpacing: 'var(--tracking-wide)',
                    textTransform: 'uppercase' as const,
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    position: 'relative',
                    padding: 'var(--space-1) 0',
                    transition: `color var(--duration-fast) var(--ease-out)`,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="nav-cta"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-micro)',
                fontWeight: 600,
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase' as const,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                padding: 'var(--space-2) var(--space-5)',
                border: '1px solid var(--text-primary)',
                borderRadius: '100px',
                transition: `all var(--duration-normal) var(--ease-out)`,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
              }}
            >
              Start a Project
              <span
                className="cta-arrow"
                style={{
                  display: 'inline-block',
                  transition: `transform var(--duration-fast) var(--ease-out)`,
                }}
              >
                ↗
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="nav-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none', // shown via CSS media query
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 'var(--space-2)',
              color: 'var(--text-primary)',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '14px',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '1.5px',
                  backgroundColor: 'currentColor',
                  transition: `all var(--duration-normal) var(--ease-out)`,
                  top: menuOpen ? '6px' : 0,
                  transform: menuOpen ? 'rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: menuOpen ? '6px' : 0,
                  width: menuOpen ? '100%' : '60%',
                  height: '1.5px',
                  backgroundColor: 'currentColor',
                  transition: `all var(--duration-normal) var(--ease-out)`,
                  transform: menuOpen ? 'rotate(-45deg)' : 'none',
                  marginLeft: menuOpen ? 0 : 'auto',
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 'var(--z-mobile-menu)' as any,
          backgroundColor: 'var(--bg-primary)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'var(--space-12) var(--px-page)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: `opacity var(--duration-slow) var(--ease-out)`,
        }}
      >
        {/* Close button inside overlay */}
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: 'var(--space-5)',
            right: 'var(--px-page)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            padding: 'var(--space-2)',
          }}
        >
          <div style={{ width: '24px', height: '24px', position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: '11px',
                width: '100%',
                height: '1.5px',
                backgroundColor: 'currentColor',
                transform: 'rotate(45deg)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: '11px',
                width: '100%',
                height: '1.5px',
                backgroundColor: 'currentColor',
                transform: 'rotate(-45deg)',
              }}
            />
          </div>
        </button>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {[
            { label: 'Work', href: '#work' },
            { label: 'Services', href: '#services' },
            { label: 'About', href: '#about' },
            { label: 'Lab', href: '#lab' },
            { label: 'Contact', href: '#contact' },
          ].map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                fontWeight: 700,
                letterSpacing: 'var(--tracking-tight)',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                textTransform: 'uppercase' as const,
                lineHeight: 1.15,
                padding: 'var(--space-3) 0',
                borderBottom: '1px solid var(--border-primary)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.4s var(--ease-out) ${0.1 + i * 0.05}s, transform 0.4s var(--ease-out) ${0.1 + i * 0.05}s`,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu footer */}
        <div
          style={{
            marginTop: 'var(--space-12)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 0.4s var(--ease-out) 0.4s`,
          }}
        >
          <a
            href="mailto:abhishiv208@gmail.com"
            onClick={closeMenu}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-small)',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              letterSpacing: 'var(--tracking-wide)',
            }}
          >
            abhishiv208@gmail.com
          </a>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-6)',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-meta)',
              color: 'var(--text-tertiary)',
              textTransform: 'uppercase' as const,
              letterSpacing: 'var(--tracking-wider)',
            }}
          >
            <a href="https://github.com/abhishiv17" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/abhishek-m-s-5441ab322" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Navigation responsive styles */}
      <style jsx>{`
        .nav-links-desktop {
          display: flex !important;
        }
        .nav-menu-btn {
          display: none !important;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--text-primary);
          transition: width var(--duration-normal) var(--ease-out);
        }
        .nav-link:hover {
          color: var(--text-primary) !important;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        .nav-cta:hover {
          background-color: var(--text-primary) !important;
          color: var(--text-inverse) !important;
        }
        .nav-cta:hover .cta-arrow {
          transform: translate(2px, -2px);
        }

        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}
