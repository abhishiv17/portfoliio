"use client"

import React, { useState, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
import { createPortal } from 'react-dom'

interface HoverLivePreviewProps {
  children: React.ReactNode
  url: string
  className?: string
  width?: number
  height?: number
}

export function HoverLivePreview({ 
  children, 
  url, 
  className = "",
  width = 500,
  height = 350 
}: HoverLivePreviewProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Spring config for smooth follow
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    // Offset the iframe so it's not directly under the cursor (prevents flicker and blocking clicks)
    mouseX.set(e.clientX + 20)
    mouseY.set(e.clientY + 20)
  }

  return (
    <div
      className={`relative inline-block w-full h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      
      {mounted && typeof document !== 'undefined' && createPortal(
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] overflow-hidden rounded-xl border border-[var(--border-primary)] shadow-2xl bg-[var(--bg-primary)]"
          style={{
            x: mouseX,
            y: mouseY,
            width,
            height,
            transformOrigin: "top left"
          }}
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            scale: isHovered ? 1 : 0.8,
            rotate: isHovered ? 0 : -2
          }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* We scale the inner iframe to act as a mini browser view. 
              Actual iframe is 2x size, scaled down to 50% to fit the container. */}
          <div 
            style={{ 
              width: width * 2, 
              height: height * 2, 
              transform: 'scale(0.5)', 
              transformOrigin: 'top left',
              background: 'var(--bg-primary)'
            }}
          >
            {isHovered && url && (
              <iframe 
                src={url} 
                className="w-full h-full border-none pointer-events-none"
                title="Live Preview"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            )}
          </div>
        </motion.div>,
        document.body
      )}
    </div>
  )
}
