'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

type PortfolioItem = {
  id: string
  title: string
  subtitle?: string
  description: string
  imageSrc?: string
  imageAlt?: string
  href?: string
  hrefLabel?: string
}

const ALL_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'advizy-website',
    title: 'Advizy Marketplace Website',
    subtitle: '1:1 expert calls marketplace',
    description:
      "A marketplace where people can book 1-on-1 paid calls with experts across different domains. We handled the full build—from marketplace architecture and payments to expert on-boarding and the booking experience—over a 6–8 month product partnership.",
    imageSrc: '/advizy.png',
    imageAlt: 'Advizy marketplace website',
    href: 'https://www.advizy.in',
    hrefLabel: 'Visit advizy.in',
  },
  {
    id: 'advizy-chatbot',
    title: 'Advizy Website Chatbot',
    subtitle: 'AI assistant inside the marketplace',
    description:
      'AI chatbot that helps visitors discover the right expert, understand pricing, and move smoothly into a paid 1‑on‑1 call—without needing a human support team online all the time.',
    imageSrc: '/advizy.png',
    imageAlt: 'Advizy website chatbot',
    href: 'https://www.advizy.in/search',
    hrefLabel: 'Open Advizy chatbot',
  },
  {
    id: 'artifai-website',
    title: 'ArtifAI Website',
    subtitle: 'Static site, made with AI',
    description:
      'Our own marketing website for ArtifAI—designed and built with AI-assisted workflows. Lightweight, fast to load, and easy to maintain while still feeling premium.',
    imageSrc: '/logo.png',
    imageAlt: 'ArtifAI website',
    href: 'https://artifai.in',
    hrefLabel: 'Visit artifai.in',
  },
  {
    id: 'lipstick-ad',
    title: 'AI Product Ad – Lipstick',
    subtitle: 'AI-generated product video',
    description:
      'High-impact product ad for a lipstick brand, scripted and produced entirely with AI tools. Optimized for social feeds so it grabs attention in the first second.',
    imageSrc: '/lipstick.png',
    imageAlt: 'AI lipstick product video',
    href: 'https://www.instagram.com/reel/DUfrU_vDEJL/?igsh=a2ZncWVkM2U1MDg3',
    hrefLabel: 'Watch on Instagram',
  },
  {
    id: 'artifai-ig-chatbot',
    title: 'Instagram Chatbot Automation',
    subtitle: 'ArtifAI account automation',
    description:
      'End-to-end DM automation for the ArtifAI Instagram account—qualifying leads, answering common questions, and routing serious inquiries to a human without feeling robotic.',
    imageSrc: '/logo.png',
    imageAlt: 'ArtifAI Instagram automation',
  },
  {
    id: 'trendify-bazaar',
    title: 'Trendify Bazaar E‑commerce',
    subtitle: 'Store, management & website creation',
    description:
      'Full e‑commerce setup for Trendify Bazaar, including storefront, Shopify store management, and day-to-day product operations so the team can focus on sales instead of admin.',
    imageSrc: '/trendify.png',
    imageAlt: 'Trendify Bazaar logo',
  },
]

type PortfolioSectionProps = {
  title?: string
  subtitle?: string
  includeIds?: string[]
  excludeIds?: string[]
}

export function PortfolioSection({
  title = 'Our portfolio.',
  subtitle = 'A few recent projects across AI, automation, web, and video.',
  includeIds,
  excludeIds,
}: PortfolioSectionProps) {
  let items = ALL_PORTFOLIO_ITEMS

  if (includeIds && includeIds.length > 0) {
    const set = new Set(includeIds)
    items = items.filter((item) => set.has(item.id))
  }

  if (excludeIds && excludeIds.length > 0) {
    const set = new Set(excludeIds)
    items = items.filter((item) => !set.has(item.id))
  }

  if (items.length === 0) return null

  const cardClassName =
    'group h-full relative overflow-hidden rounded-lg bg-white p-8 border-2 border-black/8 hover:border-black/20 transition-all hover:shadow-lg'

  return (
    <section className="py-32 px-6 lg:px-8 bg-black/2">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const content = (
              <div className="space-y-5">
                {item.imageSrc && (
                  <div className="relative w-full h-44 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt || item.title}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  {item.subtitle && (
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      {item.subtitle}
                    </p>
                  )}
                  <h3 className="font-serif text-2xl text-foreground">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {item.description}
                </p>

                {item.href && (
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all">
                      {item.hrefLabel || 'View project'}
                      <ArrowRight size={18} />
                    </span>
                  </div>
                )}
              </div>
            )

            if (item.href) {
              const external = item.href.startsWith('http')
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={cardClassName}
                >
                  {content}
                </Link>
              )
            }

            return (
              <div key={item.id} className={cardClassName}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

