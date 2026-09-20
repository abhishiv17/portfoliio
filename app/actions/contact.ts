'use server'

import { Resend } from 'resend'

export async function submitContactInquiry(formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const projectType = (formData.get('projectType') as string) || 'General Inquiry / Connect'
    const message = formData.get('message') as string
    const honeypot = formData.get('website_url') as string // honeypot

    // 1. Spam check (Honeypot)
    if (honeypot) {
      // If honeypot is filled, silently reject (act like success to fool bots)
      console.warn('Spam detected via honeypot.')
      return { success: true }
    }

    // 2. Server-side validation
    if (!name || !email || !message) {
      return { success: false, error: 'All fields are required.' }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Invalid email address.' }
    }

    if (message.length > 5000) {
      return { success: false, error: 'Message is too long (max 5000 chars).' }
    }

    // 3. Environment Variable checks
    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev' // fallback for testing

    if (!resendApiKey || !toEmail) {
      console.error('Missing email configuration (API key or TO email).')
      // Return a generic error to the client, but we know it's a server config issue
      return { success: false, error: 'Server configuration error. Please email me directly.' }
    }

    // 4. Send email via Resend
    const resend = new Resend(resendApiKey)
    const serverTimestamp = new Date().toISOString()

    const { error: resendError } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New portfolio message [${projectType}] from ${name}`,
      text: `
NEW PORTFOLIO MESSAGE / OPPORTUNITY

NAME
${name}

EMAIL
${email}

OPPORTUNITY TYPE / PURPOSE
${projectType}

MESSAGE
${message}

RECEIVED
${serverTimestamp}

SOURCE
Portfolio Contact Form
      `.trim(),
    })

    if (resendError) {
      console.error('Resend delivery error:', resendError)
      return { success: false, error: 'Failed to send inquiry via email provider.' }
    }

    return { success: true }
  } catch (err) {
    console.error('Unexpected error in submitContactInquiry:', err)
    return { success: false, error: 'An unexpected error occurred.' }
  }
}
