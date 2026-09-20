'use client'

import React, { useState, useRef } from 'react'
import { submitContactInquiry } from '@/app/actions/contact'
import { ColorfulCursorAura } from '@/components/block/colorful-cursor-aura'

// Exporting contactLinks so it can be shared with Footer if needed
export const contactLinks = {
  email: 'abhishiv208@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhishek-m-s-5441ab322',
  github: 'https://github.com/abhishiv17',
  resume: '/cv',
}

const InputField = ({ label, id, type = 'text', value, onChange, required = false, placeholder = '', autoComplete = 'off' }: any) => {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <label 
        htmlFor={id}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: focused ? 'var(--accent)' : '#888',
          marginBottom: 'var(--space-2)',
          transition: 'color 0.3s ease, transform 0.3s ease',
          transform: focused ? 'translateY(-2px)' : 'none'
        }}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoComplete={autoComplete}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          borderBottom: `1px solid ${focused ? 'var(--accent)' : '#333'}`,
          borderRadius: 0,
          color: '#f3f1ed',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
          padding: 'var(--space-4) 0',
          outline: 'none',
          transition: 'border-color 0.3s ease',
          width: '100%',
        }}
      />
    </div>
  )
}

const TextareaField = ({ label, id, value, onChange, required = false, placeholder = '' }: any) => {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <label 
        htmlFor={id}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: focused ? 'var(--accent)' : '#888',
          marginBottom: 'var(--space-2)',
          transition: 'color 0.3s ease, transform 0.3s ease',
          transform: focused ? 'translateY(-2px)' : 'none'
        }}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          borderBottom: `1px solid ${focused ? 'var(--accent)' : '#333'}`,
          borderRadius: 0,
          color: '#f3f1ed',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
          padding: 'var(--space-4) 0',
          outline: 'none',
          resize: 'vertical',
          transition: 'border-color 0.3s ease',
          width: '100%',
          lineHeight: 1.4,
        }}
      />
    </div>
  )
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    setStatus('submitting')
    
    try {
      const formData = new FormData(formRef.current!)
      const result = await submitContactInquiry(formData)
      
      if (result.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMessage(result.error || "Couldn't send that. Try again or email me directly.")
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage("An unexpected error occurred. Please try again.")
    }
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      style={{
        backgroundColor: '#0a0a0a',
        color: '#f3f1ed',
        padding: 'clamp(6rem, 12vw, 12rem) 0',
        width: '100%',
      }}
    >
      <div 
        style={{
          maxWidth: 'var(--max-w-wide)',
          margin: '0 auto',
          padding: '0 var(--px-page)',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-meta)',
            letterSpacing: 'var(--tracking-widest)',
            textTransform: 'uppercase',
            color: '#888',
            marginBottom: 'var(--space-12)',
          }}
        >
          04 // CONTACT
        </div>

        {/* Big Statement */}
        <ColorfulCursorAura 
          enableEntryAnimation={false} 
          colors={{ color1: '#ea580c', color2: '#f5dd94', color3: '#7f7de4' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
              fontWeight: 800,
              lineHeight: 0.85,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: 'clamp(4rem, 8vw, 8rem)',
              maxWidth: '1200px',
            }}
          >
            LOOKING TO<br />
            COLLABORATE?<br />
            <span style={{ color: 'var(--accent)' }}>LET&apos;S CONNECT.</span>
          </h2>
        </ColorfulCursorAura>

        {/* Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(4rem, 8vw, 8rem)',
            alignItems: 'start',
          }}
        >
          {/* Left: Form */}
          <div style={{ flex: 1, maxWidth: '800px' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#aaa',
              marginBottom: 'var(--space-12)',
              maxWidth: '500px'
            }}>
              Have an opportunity, inquiry, or engineering project in mind? Send a direct note below or reach out via email.
            </p>

            {status === 'success' ? (
              <div style={{ padding: 'var(--space-8) 0' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontWeight: 800,
                  lineHeight: 1,
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-6)',
                  color: '#f3f1ed'
                }}>
                  Message sent.
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                  color: '#aaa'
                }}>
                  I&apos;ll take it from here. <span style={{ color: 'var(--accent)' }}>↗</span>
                </p>
              </div>
            ) : (
              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 'var(--space-10)',
                  position: 'relative'
                }}
              >
                {/* Honeypot Field */}
                <input
                  type="text"
                  name="website_url"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  onChange={() => {}}
                />
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: 'var(--space-12)',
                }}>
                  <InputField 
                    label="Your Name" 
                    id="name" 
                    required 
                    autoComplete="name"
                    value={formState.name}
                    onChange={(e: any) => setFormState({ ...formState, name: e.target.value })}
                  />
                  <InputField 
                    label="Your Email" 
                    id="email" 
                    type="email" 
                    required 
                    autoComplete="email"
                    value={formState.email}
                    onChange={(e: any) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <TextareaField 
                  label="Tell me about it" 
                  id="message" 
                  required 
                  placeholder="A little context goes a long way..."
                  value={formState.message}
                  onChange={(e: any) => setFormState({ ...formState, message: e.target.value })}
                />

                {status === 'error' && (
                  <div style={{ 
                    color: 'var(--accent)', 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {errorMessage || "Couldn't send that. Try again or email me directly →"}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  data-cursor="SEND ↗"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: status === 'submitting' ? '#555' : '#f3f1ed',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 'var(--space-4) 0',
                    cursor: status === 'submitting' ? 'wait' : 'pointer',
                    alignSelf: 'flex-start',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-4)',
                    transition: 'color 0.3s ease',
                  }}
                  className="contact-submit-btn"
                >
                  {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                  {status !== 'submitting' && <span style={{ color: 'var(--accent)', transition: 'transform 0.3s ease' }} className="arrow-icon">↗</span>}
                </button>
              </form>
            )}
          </div>
          
          {/* Right: Metadata */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-16)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#888',
            marginTop: 'var(--space-4)' // minor optical alignment
          }}>
            
            {/* Email Block */}
            <div>
              <div style={{ marginBottom: 'var(--space-2)' }}>Email</div>
              <a 
                href={`mailto:${contactLinks.email}`}
                data-cursor="MAIL ↗"
                style={{ 
                  color: '#f3f1ed', 
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-body)',
                  transition: 'color 0.2s ease',
                }}
                className="metadata-link"
              >
                {contactLinks.email} ↗
              </a>
            </div>

            {/* Location Block */}
            <div>
              <div style={{ marginBottom: 'var(--space-2)' }}>Location</div>
              <div style={{ color: '#f3f1ed', fontFamily: 'var(--font-body)', fontSize: '1rem', textTransform: 'none' }}>
                Bangalore / India
              </div>
            </div>

            {/* Status Block */}
            <div>
              <div style={{ marginBottom: 'var(--space-2)' }}>Status</div>
              <div style={{ color: '#f3f1ed', fontFamily: 'var(--font-body)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'none' }}>
                <span style={{ color: '#2ECC71', fontSize: '1.2rem' }}>●</span> Open to SWE internships &amp; tech roles
              </div>
            </div>

            {/* Social Block */}
            <div>
              <div style={{ marginBottom: 'var(--space-2)' }}>Social</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <a 
                  href={contactLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-cursor="VISIT ↗"
                  style={{ 
                    color: '#f3f1ed', 
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    transition: 'color 0.2s ease',
                    width: 'fit-content',
                    textTransform: 'none'
                  }}
                  className="metadata-link"
                >
                  GitHub ↗
                </a>
                <a 
                  href={contactLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-cursor="VISIT ↗"
                  style={{ 
                    color: '#f3f1ed', 
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    transition: 'color 0.2s ease',
                    width: 'fit-content',
                    textTransform: 'none'
                  }}
                  className="metadata-link"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <style jsx>{`
        .metadata-link:hover {
          color: var(--accent) !important;
        }
        .contact-submit-btn:hover:not(:disabled) {
          color: var(--accent) !important;
        }
        .contact-submit-btn:hover:not(:disabled) .arrow-icon {
          transform: translate(4px, -4px);
        }

        /* Screen Reader Only (Accessible Hiding) */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

      `}</style>
    </section>
  )
}
