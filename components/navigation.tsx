'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const serviceLinks = [
  {
    href: '/ai-services',
    label: 'AI Services & Voice Agents',
    sub: 'Custom AI agents & workflows, ChatGPT ranking, AI voice agents, lead response automation.',
  },
  {
    href: '/automation',
    label: 'AI Automation & Chatbot',
    sub: 'Lead management & qualification, appointment booking automation, email & marketing, customer support.',
  },
  {
    href: '/web-app',
    label: 'Website & Apps',
    sub: 'UI/UX design, landing pages, web apps & SaaS, dashboards, e-commerce & SEO.',
  },
  {
    href: '/ai-video',
    label: 'AI Video & Creatives',
    sub: 'AI video ads & social reels, product promos & explainers, ad creatives & thumbnails.',
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const mainLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => pathname === href
  const isServicesActive = serviceLinks.some((s) => pathname === s.href)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="hover:opacity-70 transition-fast">
            <img src="/logo1.png" alt="ArtifAI" className="h-9 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 items-center">
            <Link
              href="/"
              className={`text-sm font-medium tracking-tight transition-fast ${
                isActive('/')
                  ? 'text-primary border-b border-primary'
                  : 'text-gray-600 hover:text-foreground'
              }`}
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <span
                className={`inline-flex items-center gap-1 text-sm font-medium tracking-tight transition-fast cursor-default ${
                  isServicesActive
                    ? 'text-primary border-b border-primary'
                    : 'text-gray-600 hover:text-foreground'
                }`}
              >
                Services
                <ChevronDown size={14} className="opacity-70" />
              </span>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="w-[420px] rounded-lg border border-black/10 bg-white shadow-xl py-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`group/item flex items-start gap-4 px-5 py-3.5 transition-fast border-l-2 border-transparent hover:border-primary hover:bg-primary/[0.04] ${
                        isActive(link.href)
                          ? 'bg-primary/[0.06] border-l-primary'
                          : ''
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <span className={`block text-[15px] font-medium tracking-tight ${
                          isActive(link.href) ? 'text-primary' : 'text-foreground'
                        }`}>
                          {link.label}
                        </span>
                        <p className="mt-1 text-[13px] text-gray-600 leading-snug">
                          {link.sub}
                        </p>
                      </div>
                      <ArrowRight size={18} className={`flex-shrink-0 mt-0.5 text-gray-400 group-hover/item:text-primary transition-fast translate-x-0 group-hover/item:translate-x-0.5 ${
                        isActive(link.href) ? 'text-primary' : ''
                      }`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {mainLinks.slice(1).map((link) => (
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
          <div className="md:hidden pb-6 space-y-1 border-t border-primary/10 pt-4">
            <Link
              href="/"
              className={`block py-2 text-sm font-medium transition-fast ${
                isActive('/')
                  ? 'text-primary border-l-2 border-primary pl-3'
                  : 'text-gray-600 hover:text-foreground pl-4'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                type="button"
                className={`flex items-center justify-between w-full py-2 text-sm font-medium transition-fast ${
                  isServicesActive
                    ? 'text-primary border-l-2 border-primary pl-3'
                    : 'text-gray-600 hover:text-foreground pl-4'
                }`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-6 pb-2 space-y-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block py-3 pr-4 transition-fast ${
                        isActive(link.href)
                          ? 'text-primary'
                          : 'text-gray-600 hover:text-foreground'
                      }`}
                      onClick={() => {
                        setIsOpen(false)
                        setServicesOpen(false)
                      }}
                    >
                      <span className="font-medium text-[15px]">{link.label}</span>
                      <p className="mt-1 text-[13px] text-gray-600 leading-snug">{link.sub}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {mainLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-sm font-medium transition-fast ${
                  isActive(link.href)
                    ? 'text-primary border-l-2 border-primary pl-3'
                    : 'text-gray-600 hover:text-foreground pl-4'
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
