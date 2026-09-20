'use client';

import React, { useState } from 'react';
import CinematicPreloader from '@/components/CinematicPreloader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import AudioInteractionManager from '@/components/AudioInteractionManager';

export default function PortfolioPage() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {/* Web Audio API Engine */}
      <AudioInteractionManager />

      {/* Intro sequence loader */}
      <CinematicPreloader onComplete={() => setPreloaderDone(true)} />

      {/* Subtle Project-aware Cursor */}
      <CustomCursor />

      {/* Persistent Navigation & Circle Menu */}
      <Navigation />

      {/* ── THE 4 AUTHORITATIVE CHAPTERS ── */}
      <main id="main-content" role="main">
        {/* 03 // ABOUT: Credentials, Identity & Single Internship CTA */}
        <About />

        {/* Intro / Hero with Editorial Trading Card */}
        <Hero />

        {/* 01 // WORK: Viewport-Stable 3D Flip Project Showcase */}
        <SelectedWork />

        {/* 02 // SYSTEMS: Interactive Capability Index */}
        <Services />

        {/* 04 // CONTACT: Clean Inquiry Form & Direct Channels */}
        <Contact />
      </main>

      {/* Final Identity Scene with Animated Giant Signature */}
      <Footer />
    </>
  );
}
