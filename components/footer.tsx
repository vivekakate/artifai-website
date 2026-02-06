'use client'

import Link from 'next/link'
import { Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'

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
              <li><Link href="/ai-services" className="hover:text-black transition-fast underline-accent">AI Services</Link></li>
              <li><Link href="/web-app" className="hover:text-black transition-fast underline-accent">Web & App</Link></li>
              <li><Link href="/automation" className="hover:text-black transition-fast underline-accent">Automation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-black uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-black transition-fast underline-accent">About</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-fast underline-accent">Contact</Link></li>
              <li><a href="#" className="hover:text-black transition-fast underline-accent">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-fast underline-accent">Privacy</a></li>
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
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-end">
            <Link href="https://calendly.com/artifaiofficial/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium text-sm hover:bg-black/80 transition-fast group">
              Book a Call
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-fast" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/8 pt-8 text-center text-xs text-gray-500 space-y-2">
          <p>&copy; 2026 ArtifAI. All rights reserved.</p>
          <p>Crafted for creative teams who think differently.</p>
        </div>
      </div>
    </footer>
  )
}
