'use client'

import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SelectedWork from '@/components/SelectedWork'
import Services from '@/components/Services'
import CustomCursor from '@/components/CustomCursor'

/* ═══════════════════════════════════════════════
   PROJECT DATA — preserved from original site
   ═══════════════════════════════════════════════ */

const projects = [
  {
    id: 'skillswap',
    title: 'SkillSwap',
    role: 'Lead Architect',
    description:
      'Architected the entire full-stack infrastructure from scratch, designing the database schema and leading all major technical decisions. Engineered AI-powered skill matching using vector-based semantic search, built a secure credit escrow system, and implemented real-time session scheduling with live WebSocket notifications.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'AI/ML'],
    link: 'https://github.com/abhishiv17/SkillSwap',
    mvpLink: 'https://code-carnage.vercel.app/',
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
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setContactForm({ name: '', email: '', message: '' })
    alert('Thank you for reaching out! I have received your message and will respond shortly.')
  }

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main>
        <Hero />

        {/* ── Phase 2: Selected Work ── */}
        <SelectedWork />

        <section
          id="services"
          aria-label="Services"
          style={{
            padding: 'var(--space-12) var(--px-page)',
            maxWidth: 'var(--max-w-wide)',
            margin: '0 auto',
            borderTop: '1px solid var(--border-primary)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-meta)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase' as const,
              color: 'var(--text-tertiary)',
              marginBottom: 'var(--space-6)',
            }}
          >
            02 / Services
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: 'var(--tracking-tight)',
              maxWidth: 'var(--max-w-narrow)',
            }}
          >
            What I can build<br />
            <span style={{ color: 'var(--text-secondary)' }}>for you.</span>
          </h2>
        </section>

        <section
          id="lab"
          aria-label="Lab & Experiments"
          style={{
            padding: 'var(--space-12) var(--px-page)',
            maxWidth: 'var(--max-w-wide)',
            margin: '0 auto',
            borderTop: '1px solid var(--border-primary)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-meta)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase' as const,
              color: 'var(--text-tertiary)',
              marginBottom: 'var(--space-6)',
            }}
          >
            03 / Lab
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: 'var(--tracking-tight)',
              maxWidth: 'var(--max-w-narrow)',
            }}
          >
            Experiments &amp; explorations<br />
            <span style={{ color: 'var(--text-secondary)' }}>in code and design.</span>
          </h2>
        </section>

        <section
          id="about"
          aria-label="About"
          style={{
            padding: 'var(--space-12) var(--px-page)',
            maxWidth: 'var(--max-w-wide)',
            margin: '0 auto',
            borderTop: '1px solid var(--border-primary)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-meta)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase' as const,
              color: 'var(--text-tertiary)',
              marginBottom: 'var(--space-6)',
            }}
          >
            04 / About
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: 'var(--tracking-tight)',
              maxWidth: 'var(--max-w-narrow)',
            }}
          >
            The person behind<br />
            <span style={{ color: 'var(--text-secondary)' }}>the pixels.</span>
          </h2>
        </section>

        <section
          id="contact"
          aria-label="Contact"
          style={{
            padding: 'var(--section-gap) var(--px-page)',
            maxWidth: 'var(--max-w-wide)',
            margin: '0 auto',
            borderTop: '1px solid var(--border-primary)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-meta)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase' as const,
              color: 'var(--text-tertiary)',
              marginBottom: 'var(--space-6)',
            }}
          >
            05 / Contact
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: 'var(--tracking-tight)',
              maxWidth: 'var(--max-w-narrow)',
              marginBottom: 'var(--space-8)',
            }}
          >
            Let&apos;s work together.
          </h2>

          {/* Quick contact links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-12)',
            }}
          >
            <a
              href={`mailto:${contactLinks.email}`}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                transition: `color var(--duration-fast) var(--ease-out)`,
              }}
              className="contact-link"
            >
              <Mail size={16} />
              {contactLinks.email}
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                transition: `color var(--duration-fast) var(--ease-out)`,
              }}
              className="contact-link"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                transition: `color var(--duration-fast) var(--ease-out)`,
              }}
              className="contact-link"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          {/* Contact form — preserved from original */}
          <form
            onSubmit={handleContactSubmit}
            style={{
              maxWidth: 'var(--max-w-narrow)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-6)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-6)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label
                  htmlFor="contact-name"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-meta)',
                    letterSpacing: 'var(--tracking-wider)',
                    textTransform: 'uppercase' as const,
                    color: 'var(--text-tertiary)',
                  }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="Your name"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body)',
                    padding: 'var(--space-3) var(--space-4)',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--border-primary)',
                    borderRadius: '4px',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    transition: `border-color var(--duration-fast) var(--ease-out)`,
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label
                  htmlFor="contact-email"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-meta)',
                    letterSpacing: 'var(--tracking-wider)',
                    textTransform: 'uppercase' as const,
                    color: 'var(--text-tertiary)',
                  }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="your@email.com"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body)',
                    padding: 'var(--space-3) var(--space-4)',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--border-primary)',
                    borderRadius: '4px',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    transition: `border-color var(--duration-fast) var(--ease-out)`,
                  }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label
                htmlFor="contact-message"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-meta)',
                  letterSpacing: 'var(--tracking-wider)',
                  textTransform: 'uppercase' as const,
                  color: 'var(--text-tertiary)',
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                placeholder="Tell me about your project..."
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body)',
                  padding: 'var(--space-3) var(--space-4)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '4px',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  resize: 'vertical',
                  transition: `border-color var(--duration-fast) var(--ease-out)`,
                }}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-small)',
                fontWeight: 600,
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase' as const,
                color: 'var(--text-inverse)',
                backgroundColor: 'var(--text-primary)',
                padding: 'var(--space-4) var(--space-8)',
                border: 'none',
                borderRadius: '4px',
                cursor: isSubmitting ? 'wait' : 'pointer',
                opacity: isSubmitting ? 0.6 : 1,
                transition: `all var(--duration-normal) var(--ease-out)`,
                alignSelf: 'flex-start',
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: '1px solid var(--border-primary)',
          padding: 'var(--space-10) var(--px-page)',
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-6)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-meta)',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase' as const,
              color: 'var(--text-tertiary)',
            }}
          >
            © {new Date().getFullYear()} Abhishek MS
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-6)',
            }}
          >
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer-link"
              style={{
                color: 'var(--text-tertiary)',
                transition: `color var(--duration-fast) var(--ease-out)`,
              }}
            >
              <Github size={16} />
            </a>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-link"
              style={{
                color: 'var(--text-tertiary)',
                transition: `color var(--duration-fast) var(--ease-out)`,
              }}
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${contactLinks.email}`}
              aria-label="Email"
              className="footer-link"
              style={{
                color: 'var(--text-tertiary)',
                transition: `color var(--duration-fast) var(--ease-out)`,
              }}
            >
              <Mail size={16} />
            </a>
            <a
              href={contactLinks.resume}
              className="footer-link"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-meta)',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase' as const,
                color: 'var(--text-tertiary)',
                textDecoration: 'none',
                transition: `color var(--duration-fast) var(--ease-out)`,
              }}
            >
              Résumé
            </a>
          </div>
        </div>
      </footer>

      {/* Page-level interaction styles */}
      <style jsx>{`
        .contact-link:hover {
          color: var(--text-primary) !important;
        }
        .submit-btn:hover:not(:disabled) {
          background-color: var(--accent) !important;
        }
        .footer-link:hover {
          color: var(--text-primary) !important;
        }
        input:focus,
        textarea:focus {
          border-color: var(--accent) !important;
        }
      `}</style>
    </>
  )
}
