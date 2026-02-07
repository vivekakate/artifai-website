'use client'

import React from "react"

import { FormEvent, useState } from 'react'
import Link from 'next/link'

export function ContactForm() {
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
    <section className="py-32 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl mb-6">Let's talk about your project.</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          Share your challenge or idea, and we'll schedule time to discuss how we can help.
        </p>

        {submitted ? (
          <div className="text-center py-16 space-y-4 bg-white/5 border border-white/10 rounded p-8">
            <div className="text-4xl">✓</div>
            <h3 className="text-2xl font-medium text-white">Got it!</h3>
            <p className="text-gray-300">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-base md:text-lg text-white font-medium mb-3">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 px-4 py-4 text-base text-white placeholder-gray-400 focus:outline-none focus:border-white/50 rounded"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-base md:text-lg text-white font-medium mb-3">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 px-4 py-4 text-base text-white placeholder-gray-400 focus:outline-none focus:border-white/50 rounded"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-base md:text-lg text-white font-medium mb-3">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 px-4 py-4 text-base text-white placeholder-gray-400 focus:outline-none focus:border-white/50 rounded"
                placeholder="Your company"
              />
            </div>

            <div>
              <label className="block text-base md:text-lg text-white font-medium mb-3">Tell us about your project</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-white/5 border border-white/20 px-4 py-4 text-base text-white placeholder-gray-400 focus:outline-none focus:border-white/50 rounded resize-none"
                placeholder="What are you trying to build or automate?"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-4 bg-white text-black font-medium text-base hover:bg-gray-100 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>

            <p className="text-center text-sm text-gray-400">
              We'll respond within 24 hours. <Link href="https://calendly.com/artifai/30min" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Or schedule a call</Link>.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
