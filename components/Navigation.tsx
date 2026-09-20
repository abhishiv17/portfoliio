'use client'

import { useState, useEffect } from 'react'

import { CircleMenu, CircleMenuItem } from '@/components/block/circle-menu'
import { FolderPreview } from '@/components/block/folder-preview'
import { Briefcase, Cpu, User, Mail, FileText, Github, Linkedin, Twitter } from 'lucide-react'
import { PROFILE } from '@/data/portfolio'
import { audioStore } from '@/components/AudioInteractionManager'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Systems', href: '#systems' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/cv' },
]

const CIRCLE_NAV_ITEMS: CircleMenuItem[] = [
  { label: 'Work', icon: <Briefcase size={16} />, href: '#work' },
  { label: 'Systems', icon: <Cpu size={16} />, href: '#systems' },
  { label: 'About', icon: <User size={16} />, href: '#about' },
  { label: 'Contact', icon: <Mail size={16} />, href: '#contact' },
  { label: 'Resume', icon: <FileText size={16} />, href: '/cv' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    setIsMuted(audioStore.getMuted())
    const unsub = audioStore.subscribe(setIsMuted)
    return () => unsub()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

          {/* Desktop Right Actions: Socials & Resume Folder */}
          <div
            className="nav-actions-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-6)',
            }}
          >
            {/* Audio Toggle */}
            <button
              onClick={() => audioStore.toggleMuted()}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                color: 'var(--text-secondary)',
                backgroundColor: 'transparent',
                border: '1px solid var(--border-secondary)',
                padding: '4px 10px',
                borderRadius: '100px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)'
                e.currentTarget.style.borderColor = 'var(--text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.borderColor = 'var(--border-secondary)'
              }}
              aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
            >
              SOUND: {isMuted ? 'OFF' : 'ON'}
            </button>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Github size={20} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={PROFILE.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Twitter size={20} />
              </a>
            </div>

            {/* Vertical Divider */}
            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-primary)' }} />

            {/* Folder Preview for Resume */}
            <div style={{ transform: 'scale(0.7) translateY(8px)', transformOrigin: 'right center' }}>
              <FolderPreview
                variant="nandi"
                label="RESUME"
                files={[{ name: 'resume.pdf', type: 'txt' }]}
                onClick={() => window.open('/cv', '_blank')}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Bottom Center Navigation */}
      <div
        style={{
          position: 'fixed',
          bottom: 'var(--space-6)',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          zIndex: 'var(--z-nav)' as any,
          pointerEvents: 'none',
        }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <CircleMenu items={CIRCLE_NAV_ITEMS} />
        </div>
      </div>

      {/* Navigation responsive styles */}
      <style jsx>{`
        .nav-actions-desktop {
          display: flex !important;
        }
        .nav-menu-btn {
          display: none !important;
        }



        @media (max-width: 768px) {
          .nav-actions-desktop {
            display: none !important;
          }
          .nav-mobile-actions {
            display: flex !important;
          }
          .nav-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}
