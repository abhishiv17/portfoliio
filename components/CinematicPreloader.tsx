'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicPreloaderProps {
  onComplete?: () => void;
}

export default function CinematicPreloader({ onComplete }: CinematicPreloaderProps) {
  const [stage, setStage] = useState<'initial' | 'assembling' | 'settling' | 'done'>('initial');

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('cinematic_intro_played');
    if (hasPlayed) {
      setStage('done');
      onComplete?.();
      return;
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      sessionStorage.setItem('cinematic_intro_played', 'true');
      setStage('done');
      onComplete?.();
      return;
    }

    // Mark as played immediately so StrictMode double-mount or hot reloads don't restart it
    sessionStorage.setItem('cinematic_intro_played', 'true');

    // Timeline:
    // 0ms: initial screen (tag appears)
    // 400ms: large statement assembles through clip reveal
    // 1600ms: settling & FLIP transition into navbar/hero
    // 2200ms: done
    const t1 = setTimeout(() => setStage('assembling'), 350);
    const t2 = setTimeout(() => setStage('settling'), 1500);
    const t3 = setTimeout(() => {
      setStage('done');
      onComplete?.();
    }, 2200);

    // Escape key or click skips immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        setStage('done');
        onComplete?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  // Make sure AnimatePresence always renders, and conditionally render the motion.div inside
  return (
    <AnimatePresence>
      {stage !== 'done' && (
      <motion.div
        key="cinematic-preloader"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        }}
        onClick={() => {
          setStage('done');
          onComplete?.();
        }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(2rem, 5vw, 4rem)',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        {/* Top bar: metadata */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>01 // SYSTEM INITIALIZE</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.1em',
              color: 'var(--text-tertiary)',
              textTransform: 'uppercase',
            }}
          >
            [ CLICK OR ESC TO SKIP ]
          </motion.div>
        </div>

        {/* Center: Spatial Wordmark Assembly */}
        <div style={{ maxWidth: 'var(--max-w-wide)', width: '100%', margin: '0 auto' }}>
          <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: stage === 'settling' ? '-10%' : '0%' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
                letterSpacing: '0.2em',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              ABHISHEK MS //
            </motion.div>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '110%', clipPath: 'inset(100% 0 0 0)' }}
              animate={{
                y: stage === 'settling' ? '-20px' : '0%',
                clipPath: 'inset(0% 0 0 0)',
                opacity: stage === 'settling' ? 0.8 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 7.5vw, 6.5rem)',
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: '-0.035em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              BUILDING SYSTEMS<br />
              <span style={{ color: 'var(--accent)' }}>THAT MOVE.</span>
            </motion.h1>
          </div>
        </div>

        {/* Bottom bar: Status and counter */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderTop: '1px solid var(--border-primary)',
            paddingTop: 'var(--space-4)',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-secondary)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            EDITORIAL × INTERACTION DESIGN
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            style={{
              height: '2px',
              width: '120px',
              backgroundColor: 'var(--accent)',
              transformOrigin: 'left',
            }}
          />
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
