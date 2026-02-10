import React from "react"
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'ArtifAI -  The AI Agency',
  description: 'We combine traditional tech services with AI power. AI with purpose. Automation with impact. Tech that actually helps business.',
  keywords: ['AI', 'Automation', 'Web Development', 'AI Services', 'Tech Agency'],
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
  },
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
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Script id="voiceflow-chat-widget" strategy="afterInteractive">
          {`
            (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '698b3df4c5075ea52caf8774' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production',
                  voice: {
                    url: "https://runtime-api.voiceflow.com"
                  }
                });
              }
              v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `}
        </Script>
      </body>
    </html>
  )
}
