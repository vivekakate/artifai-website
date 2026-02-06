import React from "react"
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ArtifAI -  The AI Agency',
  description: 'We combine traditional tech services with AI power. AI with purpose. Automation with impact. Tech that actually helps business.',
  keywords: ['AI', 'Automation', 'Web Development', 'AI Services', 'Tech Agency'],
  generator: 'v0.app',
  openGraph: {
    title: 'ArtifAI - The AI Agency',
    description: 'We combine traditional tech services with AI power.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
          html { color-scheme: dark; }
        `}</style>
      </head>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
