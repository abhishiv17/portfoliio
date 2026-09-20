import type { Metadata, Viewport } from 'next'
import { Inter, Sora, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ButterflyTrailCursor } from "@/components/block/butterfly-trail-cursor"

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
})

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL 
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` 
  : process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Abhishek MS | Computer Science Undergrad & Software Engineer',
  description:
    'Computer Science student at Dr. Ambedkar Institute of Technology, Bangalore (9.0 CGPA). Building full-stack systems, real-time web applications, and seeking software engineering internships.',
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'Abhishek MS | Computer Science Undergrad & Software Engineer',
    description: 'CS student at Dr. AIT Bangalore (9.0 CGPA) & Software Engineer. Building fast, reliable web systems and open to SWE internships.',
    url: baseUrl,
    siteName: 'Abhishek MS',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abhishek MS | Computer Science Undergrad & Software Engineer',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek MS | CS Undergrad & Software Engineer',
    description: 'CS student at Dr. AIT Bangalore (9.0 CGPA). Open to SWE internships.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ButterflyTrailCursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
