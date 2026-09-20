'use client';

import React, { useRef } from 'react';
import { motion, useAnimationControls } from 'motion/react';

export interface EditorialTradingCardProps {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  link?: string;
  highlight?: string;
}

export const EditorialTradingCard: React.FC<EditorialTradingCardProps> = ({
  number,
  title,
  category,
  description,
  stack,
  link = '#work',
  highlight = 'FEATURED BUILD',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentControls = useAnimationControls();
  const cardControls = useAnimationControls();

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    if (!rect) return;

    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;

    const xd = ((mx - width / 2) / (width / 2)) * 12;
    const yd = -((my - height / 2) / (height / 2)) * 12;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${yd}deg) rotateY(${xd}deg) translateY(-4px)`;
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    cardControls.start({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' });
  };

  return (
    <div
      style={{
        perspective: 1000,
        width: '100%',
        maxWidth: '380px',
      }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          width: '100%',
          minHeight: '440px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-primary)',
          borderRadius: '4px',
          padding: 'clamp(1.5rem, 3vw, 2rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease',
          boxShadow: '0 12px 36px rgba(0,0,0,0.06)',
          transformStyle: 'preserve-3d',
        }}
        className="editorial-trading-card"
      >
        {/* Subtle decorative grid watermark */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            padding: '16px 20px',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            fontWeight: 800,
            color: 'var(--border-secondary)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
            opacity: 0.6,
          }}
        >
          {number}
        </div>

        {/* Top: Card Header */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              [{number} // {highlight}]
            </span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
              }}
            />
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-tertiary)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}
          >
            {category}
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              margin: '0 0 16px 0',
              color: 'var(--text-primary)',
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              lineHeight: 1.5,
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>

        {/* Bottom: Stack tags & Action */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            marginTop: '28px',
            borderTop: '1px solid var(--border-primary)',
            paddingTop: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '16px',
            }}
          >
            {stack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '3px 8px',
                  borderRadius: '2px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-secondary)',
                  color: 'var(--text-secondary)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={link}
            target={link.startsWith('http') ? '_blank' : undefined}
            rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
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
              gap: '6px',
              transition: 'color 0.2s ease, transform 0.2s ease',
            }}
            className="trading-card-link"
          >
            <span>VIEW PROJECT</span>
            <span style={{ color: 'var(--accent)' }}>↗</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default EditorialTradingCard;
