'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'motion/react';
import { Menu, X } from 'lucide-react';

const CONSTANTS = {
  itemSize: 42,
  containerSize: 220,
  openStagger: 0.03,
  closeStagger: 0.05,
};

const pointOnCircle = (i: number, n: number, r: number, cx = 0, cy = 0) => {
  // Upward semi-circle: spans from 180 deg (left) to 360 deg (right)
  const theta = Math.PI + (i * Math.PI) / Math.max(1, n - 1);
  const x = cx + r * Math.cos(theta);
  const y = cy + r * Math.sin(theta);
  return { x, y };
};

export interface CircleMenuItem {
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

interface MenuItemProps {
  item: CircleMenuItem;
  index: number;
  totalItems: number;
  isOpen: boolean;
  onSelect: () => void;
}

const MenuItem = ({ item, index, totalItems, isOpen, onSelect }: MenuItemProps) => {
  const { x, y } = pointOnCircle(index, totalItems, CONSTANTS.containerSize / 2);
  const [hovering, setHovering] = useState(false);

  const handleClick = () => {
    onSelect();
    if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      if (item.href.startsWith('http') || item.href === '/cv') {
        window.location.href = item.href;
      } else {
        const el = document.querySelector(item.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      type="button"
      aria-label={item.label}
      disabled={!isOpen}
      tabIndex={isOpen ? 0 : -1}
      animate={{
        x: isOpen ? x : 0,
        y: isOpen ? y : 0,
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0.4,
      }}
      whileHover={{
        scale: 1.15,
        backgroundColor: '#ffffff',
        color: '#000000',
        transition: { duration: 0.2 },
      }}
      transition={{
        delay: isOpen ? index * CONSTANTS.openStagger : (totalItems - index) * CONSTANTS.closeStagger,
        type: 'spring',
        stiffness: 400,
        damping: 24,
      }}
      style={{
        position: 'absolute',
        height: CONSTANTS.itemSize,
        width: CONSTANTS.itemSize,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        cursor: 'pointer',
        zIndex: 50,
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <span style={{ fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {item.icon}
      </span>
      {hovering && (
        <span
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#000000',
            backgroundColor: '#ffffff',
            padding: '4px 10px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          }}
        >
          {item.label}
        </span>
      )}
    </motion.button>
  );
};

export interface CircleMenuProps {
  items: CircleMenuItem[];
}

export function CircleMenu({ items }: CircleMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const animate = useAnimationControls();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Backdrop overlay when open on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(8px)',
              zIndex: 40,
            }}
          />
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        type="button"
        aria-label={isOpen ? 'Close navigation circle' : 'Open navigation circle'}
        aria-expanded={isOpen}
        onClick={toggleMenu}
        animate={{
          boxShadow: isOpen
            ? '0 8px 32px rgba(255, 255, 255, 0.2)'
            : ['0 8px 32px rgba(255, 255, 255, 0.15), 0 0 0 0 rgba(255, 255, 255, 0.2)', '0 8px 32px rgba(255, 255, 255, 0.15), 0 0 0 16px rgba(255, 255, 255, 0)'],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          color: '#000000',
          border: 'none',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 60,
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <X size={16} strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Menu size={16} strokeWidth={2} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Floating Radial Items Container */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: CONSTANTS.containerSize,
          height: CONSTANTS.containerSize,
          pointerEvents: isOpen ? 'auto' : 'none',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {items.map((item, index) => (
          <MenuItem
            key={item.label}
            item={item}
            index={index}
            totalItems={items.length}
            isOpen={isOpen}
            onSelect={() => setIsOpen(false)}
          />
        ))}
      </div>
    </div>
  );
}

export default CircleMenu;
