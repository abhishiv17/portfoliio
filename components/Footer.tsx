'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PROFILE } from '@/data/portfolio';
import { ArrowUp } from 'lucide-react';
import { ColorfulCursorAura } from '@/components/block/colorful-cursor-aura';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        backgroundColor: '#111',
        paddingTop: 'var(--space-8)',
        paddingBottom: 'var(--space-4)',
        borderTop: '1px solid #222',
        color: '#f3f1ed',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-w-wide)',
          width: '100%',
          margin: '0 auto',
          padding: '0 var(--px-page)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(3rem, 6vw, 6rem)',
          boxSizing: 'border-box'
        }}
      >
        {/* Top Info Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 'var(--space-8)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#888',
          }}
        >
          {/* Identity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <div style={{ color: '#f3f1ed', fontWeight: 700 }}>{PROFILE.name}</div>
            <div>{PROFILE.title}</div>
            <div>{PROFILE.institution} · {PROFILE.location}</div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub ↗
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn ↗
            </a>
            <a
              href={PROFILE.resume}
              className="footer-link"
            >
              Resume (PDF) ↗
            </a>
          </div>

          {/* Back to top */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flex: '1 1 auto' }}>
            <a
              href="#hero"
              onClick={scrollToTop}
              className="footer-link"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="arrow-up" />
            </a>
          </div>
        </div>

        {/* Huge Animated Wordmark Signature */}
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            userSelect: 'none',
            borderBottom: '1px solid #222',
            paddingBottom: 'clamp(1.5rem, 3vw, 3rem)',
            overflow: 'hidden',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ColorfulCursorAura 
              enableEntryAnimation={false} 
              colors={{ color1: '#ea580c', color2: '#f5dd94', color3: '#7f7de4' }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 13vw, 13rem)',
                  fontWeight: 800,
                  lineHeight: 0.85,
                  color: '#f3f1ed',
                  margin: 0,
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  letterSpacing: 'inherit'
                }}
              >
                ABHISHEK MS
              </h2>
            </ColorfulCursorAura>
          </motion.div>
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
            Designed &amp; Built with ObsidianUI
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
          transform: translateY(-3px);
        }
        .arrow-up {
          transition: transform 0.2s ease;
        }
      `}</style>
    </footer>
  );
}
