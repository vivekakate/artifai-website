'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const services = [
  { 
    title: 'AI & Custom Agents', 
    desc: 'ChatGPT ranking, AI automation, custom agents, lead qualification, document intelligence, predictive analytics.',
    href: '/ai-services' 
  },
  { 
    title: 'Automation & Workflows', 
    desc: 'Lead automation, CRM sync, email sequences, customer support automation, reporting dashboards, data synchronization.',
    href: '/automation' 
  },
  { 
    title: 'Web & Apps + SEO', 
    desc: 'Landing pages, web applications, SaaS platforms, e-commerce, dashboards, internal tools—all SEO-optimized.',
    href: '/web-app' 
  },
]

export default function AllServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-6xl md:text-7xl leading-tight text-black">
            Everything you need.
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl leading-relaxed font-light">
            Complete solutions for modern business. From AI to apps to automation.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl mb-20">Services.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group cursor-pointer"
              >
                <div className="p-8 border border-black/8 hover:border-black/20 transition-smooth hover:bg-black/2 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium text-black group-hover:text-black/60 transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-gray-700">{service.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-black/40 group-hover:text-black transition-smooth mt-6">
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl mb-12">Why one partner.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Everything works together', desc: 'No integration headaches. AI powers automation powers apps.' },
              { title: 'No vendor juggling', desc: 'One team. One commitment. Complete solutions.' },
              { title: 'Business outcomes', desc: 'We measure success by your results, not our project hours.' },
              { title: 'Always improving', desc: 'We optimize continuously based on real-world performance.' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl leading-tight">
            Let's build your future.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-medium text-sm hover:bg-black/80 transition-fast group"
          >
            Get Started
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
