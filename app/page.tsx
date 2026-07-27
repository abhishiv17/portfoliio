'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SelectedWork from '@/components/SelectedWork'
import Services from '@/components/Services'
import Lab from '@/components/Lab'
import About from '@/components/About'
import CustomCursor from '@/components/CustomCursor'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

/* ═══════════════════════════════════════════════
   PROJECT DATA — preserved from original site
   ═══════════════════════════════════════════════ */

const projects = [
  {
    id: 'freshies',
    title: 'Freshies Ice Creams',
    role: 'Web Design / Development',
    type: 'CLIENT WORK',
    description:
      'Designed and engineered a complete commercial website for an artisanal ice cream brand in Karnataka. Built with Next.js 16 and custom GSAP scroll choreography, featuring an interactive flavour showcase, ingredient transparency breakdown, store locator, and franchise inquiry portal.',
    tech: ['Next.js 16', 'TypeScript', 'React 19', 'GSAP', 'Tailwind CSS'],
    mvpLink: 'https://freshies-flax.vercel.app/',
  },
  {
    id: 'skillswap',
    title: 'SkillSwap',
    role: 'Lead Architect',
    type: 'PRODUCT / FULL-STACK',
    description:
      'Architected the entire full-stack infrastructure from scratch, designing the database schema and leading all major technical decisions. Engineered AI-powered skill matching using vector-based semantic search, built a secure credit escrow system, and implemented real-time session scheduling with live WebSocket notifications.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'AI/ML'],
    link: 'https://github.com/abhishiv17/SkillSwap',
    mvpLink: 'https://skill-swap-p-u9qf.vercel.app/',
  },
  {
    id: 'control-grid',
    title: 'Control-Grid',
    role: 'Hackathon Project',
    description:
      'Developed the entire real-time monitoring dashboard under tight hackathon deadlines. Implemented live WebSocket data streaming pipelines, engineered responsive grid-based layouts for mission-critical system oversight, and coordinated with teammates to deliver a polished product within the time constraint.',
    tech: ['TypeScript', 'React', 'WebSocket', 'SASS'],
    link: 'https://github.com/abhishiv17/Control-Grid',
    mvpLink: 'https://code-ninjas-hackzion.vercel.app/',
  },
  {
    id: 'tripnest',
    title: 'TripNest',
    role: 'Full-Stack Developer',
    description:
      'Independently owned the full development lifecycle — engineered RESTful APIs with Express, implemented secure user authentication, built a responsive booking flow with Redux state management, and optimized MongoDB queries for high-availability performance.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    link: 'https://github.com/abhishiv17/TripNest',
  },
  {
    id: 'simon-says',
    title: 'Simon-Says',
    role: 'Frontend Specialist',
    description:
      'Solely designed and developed a modernized memory game — crafted high-fidelity CSS animations, implemented low-latency DOM event handling for smooth interactions, and ensured a fully responsive layout across all device viewports.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'DOM API'],
    link: 'https://github.com/abhishiv17/Simon-Says',
  },
  {
    id: 'cerebyte',
    title: 'Cerebyte',
    role: 'Working Project',
    description:
      'Leading the design and development of an AI-integrated ed-tech platform. Building a sandboxed code execution engine with Docker, implementing interactive data structure visualizations, and integrating an AI-driven mentor for personalized student feedback.',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
    link: 'https://github.com/abhishiv17/Cerebyte',
  },
]

const skills = [
  { category: 'Programming Languages', items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'C'] },
  {
    category: 'Frontend Engineering',
    items: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Shadcn UI'],
  },
  {
    category: 'Backend & Databases',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'MongoDB', 'Redis'],
  },
  {
    category: 'DevOps & Infrastructure',
    items: ['Docker', 'Git/GitHub', 'Postman', 'Linux', 'CI/CD Pipelines'],
  },
]

const contactLinks = {
  email: 'abhishiv208@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhishek-m-s-5441ab322',
  github: 'https://github.com/abhishiv17',
  resume: '/cv',
}

/* ═══════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════ */

export default function PortfolioPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <main>
        <Hero />

        {/* ── Phase 2: Selected Work ── */}
        <SelectedWork />

        {/* ── Phase 3: Services / Freelance Offering ── */}
        <Services />

        <Lab />

        <About />

        <Contact />
      </main>

      <Footer />
    </>
  )
}
