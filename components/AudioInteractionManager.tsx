'use client';

import React, { useEffect, useState, useRef } from 'react';

// Global audio store so we can toggle mute from the Navigation menu
type Listener = (muted: boolean) => void;
let isMutedGlobal = false;
const listeners: Listener[] = [];

export const audioStore = {
  subscribe(listener: Listener) {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  },
  getMuted() {
    return isMutedGlobal;
  },
  toggleMuted() {
    isMutedGlobal = !isMutedGlobal;
    listeners.forEach(l => l(isMutedGlobal));
  }
};

export default function AudioInteractionManager() {
  const [isMuted, setIsMuted] = useState(audioStore.getMuted());
  const ctxRef = useRef<AudioContext | null>(null);
  const bgmRef = useRef<HTMLAudioElement | null>(null);
  
  const mutedRef = useRef(isMuted);

  useEffect(() => {
    mutedRef.current = isMuted;
    
    // Sync the BGM audio element with the mute state
    if (bgmRef.current) {
      if (isMuted) {
        bgmRef.current.pause();
      } else if (ctxRef.current && ctxRef.current.state === 'running') {
        // Only play if audio context is unlocked by a user click
        bgmRef.current.play().catch(() => {});
      }
    }
  }, [isMuted]);

  useEffect(() => {
    const unsub = audioStore.subscribe(setIsMuted);
    return unsub;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect user's OS accessibility settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize the background music audio element
    const bgm = new Audio('/lofi.mp3');
    bgm.loop = true;
    bgm.volume = 0.15; // very low, relaxing volume
    bgmRef.current = bgm;

    const initAudioContext = () => {
      if (!ctxRef.current) {
        ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      if (ctxRef.current.state === 'suspended') {
        ctxRef.current.resume();
      }
      // Attempt to start BGM if not muted
      if (!mutedRef.current && bgm.paused) {
        bgm.play().catch(() => {});
      }
    };

    // Magical Chime Generator for Butterfly Motion
    // Plays a random high-pitched twinkling sine wave
    const playChime = (ctx: AudioContext) => {
      if (mutedRef.current) return;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      // Random pentatonic notes for magical fairy dust feel (C6, D6, E6, G6, A6)
      const frequencies = [1046.50, 1174.66, 1318.51, 1567.98, 1760.00];
      const randomFreq = frequencies[Math.floor(Math.random() * frequencies.length)];
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(randomFreq, ctx.currentTime);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 0.05); // soft magical attack
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8); // long sparkly decay
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.0);
    };

    // Plucky tap sound for clicks
    const playClickSound = (ctx: AudioContext) => {
      if (mutedRef.current) return;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    };

    let lastX = 0;
    let lastY = 0;
    let lastTime = performance.now();
    let accumulatedDistance = 0;

    const onPointerDown = () => {
      initAudioContext();
      if (ctxRef.current) {
        playClickSound(ctxRef.current);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!ctxRef.current || ctxRef.current.state !== 'running' || mutedRef.current) return;

      const now = performance.now();
      const dt = now - lastTime;
      
      if (dt > 0) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        accumulatedDistance += dist;
        
        // Sprinkle a magical chime every ~200px of movement
        // We add some randomness so it's not strictly robotic
        if (accumulatedDistance > (150 + Math.random() * 150)) {
           playChime(ctxRef.current);
           accumulatedDistance = 0;
        }
      }
      
      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      if (bgmRef.current) {
        bgmRef.current.pause();
        bgmRef.current.src = '';
      }
      if (ctxRef.current) {
        ctxRef.current.close();
      }
    };
  }, []);

  return null;
}
