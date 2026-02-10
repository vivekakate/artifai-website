'use client'

import Link from 'next/link'
import { Mail, Linkedin, Twitter, ArrowUpRight, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/8 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold serif text-black">ArtifAI</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Smart AI solutions for modern businesses.</p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-black uppercase tracking-widest">Services</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/ai-services" className="hover:text-black transition-fast underline-accent">AI Services & Voice Agents</Link></li>
              <li><Link href="/web-app" className="hover:text-black transition-fast underline-accent">Website & Apps</Link></li>
              <li><Link href="/automation" className="hover:text-black transition-fast underline-accent">AI Automation & Chatbot</Link></li>
              <li><Link href="/ai-video" className="hover:text-black transition-fast underline-accent">AI Video & Creatives</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-black uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-black transition-fast underline-accent">About</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-fast underline-accent">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-black transition-fast underline-accent">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black transition-fast underline-accent">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-black uppercase tracking-widest">Connect</h4>
            <div className="flex gap-4">
              <a href="mailto:artifaiofficial@gmail.com" className="text-gray-600 hover:text-black transition-fast" title="Email" target="_blank" rel="noopener noreferrer">
                <Mail size={18} />
              </a>
              <a href="https://www.linkedin.com/company/artifai" className="text-gray-600 hover:text-black transition-fast" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/artifai.in?utm_source=qr&igsh=MWZlNnR5cnpjbmZpZQ==" className="text-gray-600 hover:text-black transition-fast" title="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-end">
            <Link href="https://calendly.com/artifai/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium text-sm hover:bg-black/80 transition-fast group">
              Book a Call
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-fast" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/8 pt-8 text-center text-xs text-gray-500 space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>&copy; 2026 ArtifAI. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-black transition-fast underline-accent">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-fast underline-accent">Terms of Use</Link>
          </div>
          <p>Crafted for creative teams who think differently.</p>
        </div>
      </div>
    </footer>
  )
}
