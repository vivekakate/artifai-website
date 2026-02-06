'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/ai-services', label: 'AI Services' },
    { href: '/automation', label: 'AI Automation' },
    { href: '/web-app', label: 'Web & Apps' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <Link href="/" className="hover:opacity-70 transition-fast">
  <img src="/logo1.png" alt="ArtifAI" className="h-9 w-auto" />
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-tight transition-fast ${
                  isActive(link.href)
                    ? 'text-primary border-b border-primary'
                    : 'text-gray-600 hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-6 border-t border-primary/10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium transition-fast ${
                  isActive(link.href)
                    ? 'text-primary border-l-2 border-primary pl-3'
                    : 'text-gray-600 hover:text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
