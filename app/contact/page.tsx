'use client'

import React from "react"
import Script from 'next/script'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FormEvent, useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError('Failed to send email. Please try again or contact us directly.')
      console.error('Error submitting form:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-40 pb-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-tight text-black">
            Let's chat.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed font-light">
            Tell us about your challenge. We'll share ideas on how to solve it.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-10 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="text-5xl">✓</div>
              <h3 className="text-2xl font-medium text-black">Got it!</h3>
              <p className="text-gray-700">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded">
                  {error}
                </div>
              )}
              
              <div>
                <label className="block text-base md:text-lg text-black font-medium mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-black/8 px-4 py-4 text-base text-black placeholder-gray-500 focus:outline-none focus:border-black/30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-base md:text-lg text-black font-medium mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-black/8 px-4 py-4 text-base text-black placeholder-gray-500 focus:outline-none focus:border-black/30"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-base md:text-lg text-black font-medium mb-3">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white border border-black/8 px-4 py-4 text-base text-black placeholder-gray-500 focus:outline-none focus:border-black/30"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-base md:text-lg text-black font-medium mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white border border-black/8 px-4 py-4 text-base text-black placeholder-gray-500 focus:outline-none focus:border-black/30 resize-none"
                  placeholder="Tell us about your project or challenge..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-black text-white font-medium text-base hover:bg-black/80 transition-fast disabled:bg-black/50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
              <p className="text-center text-sm text-gray-400" >
                We'll respond within 24 hours.{' '}
                <Link
                  href="https://calendly.com/artifai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black transition-colors "
                >
                  Or schedule a call
                </Link>
                .
              </p>
            </form>
            
          )}
        </div>
      </section>

      {/* Calendly inline widget */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2">Book a call.</h2>
          <p className="text-lg text-gray-600 mb-8">Pick a time that works for you - 30 min, no pressure.</p>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/artifai/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-12">Other ways to reach us.</h2>

          <div className="space-y-8">
            <div className="pb-8 border-b border-white/10">
              <h3 className="font-medium mb-2">Email</h3>
              <a href="mailto:artifaiofficial@gmail.com" className="text-gray-400 hover:text-white transition-fast">
                artifaiofficial@gmail.com
              </a>
            </div>

            <div className="pb-8 border-b border-white/10">
              <h3 className="font-medium mb-2">Phone</h3>
              <a href="tel:+9307414112" className="text-gray-400 hover:text-white transition-fast">
                +91 9307414112
              </a>
            </div>

            <div>
              <h3 className="font-medium mb-2">Response Time</h3>
              <p className="text-gray-400">
                We respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
