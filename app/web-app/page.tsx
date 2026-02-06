'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function WebAppPage() {
  const services = [
    {
      title: 'Landing Pages & Marketing Sites',
      desc: 'High-converting pages optimized for Google. Rank + convert + build your brand.',
      whatItDoes: 'SEO-optimized websites designed to rank on Google, capture leads, and tell your story compellingly.',
      howWeHelp: 'We combine technical SEO (structured data, performance, mobile optimization) with conversion design. Every page is built to rank and sell.',
      howWeDiffer: 'Most agencies choose: either good design or good SEO. We give you both. Plus <1s load times and A+ SEO scores.',
      impact: '+150% organic traffic growth'
    },
    {
      title: 'Web Applications',
      desc: 'Complex, real-time apps that are fast, intuitive, and scale infinitely.',
      whatItDoes: 'Real-time data, complex workflows, multi-user collaboration. Built with React and Next.js for maximum performance.',
      howWeHelp: 'We architect for scale from day one. Clean code, proper testing, security built-in. Your app won\'t become a technical nightmare.',
      howWeDiffer: 'We build for maintenance, not just launch. Code that\'s actually readable. Systems that scale without rebuilding.',
      impact: '10-100x faster than traditional stacks'
    },
    {
      title: 'Data Dashboards & Analytics',
      desc: 'Transform raw data into actionable intelligence. Real-time dashboards that tell stories.',
      whatItDoes: 'Real-time dashboards, custom visualizations, predictive analytics. Connect to any data source.',
      howWeHelp: 'We connect your databases, APIs, and data warehouses. Build beautiful charts. Enable real decisions.',
      howWeDiffer: 'Your dashboard won\'t look like a spreadsheet. It will look like a $50k consulting tool. For a fraction of the cost.',
      impact: '+40% faster decision-making'
    },
    {
      title: 'SaaS Platforms',
      desc: 'Multi-tenant systems that scale to millions. Built right from the start.',
      whatItDoes: 'User authentication, subscription management, multi-workspace support, API infrastructure.',
      howWeHelp: 'We handle the infrastructure complexity so you focus on product. Stripe integration, user permissions, scaling—we do it.',
      howWeDiffer: 'We don\'t use templates. Every SaaS is architected for your specific business logic and growth trajectory.',
      impact: 'Ready to scale to 10M+ users'
    },
    {
      title: 'E-Commerce & Storefronts',
      desc: 'Online stores designed to convert. Beautiful, high-performing digital storefronts.',
      whatItDoes: 'Product catalogs, shopping carts, secure payments, inventory management.',
      howWeHelp: 'We integrate Stripe, manage inventory, and build checkout flows that close sales.',
      howWeDiffer: 'Your store will convert like a premium e-commerce platform. Built for performance and user experience.',
      impact: '+200% conversion rate'
    },
    {
      title: 'Internal Tools & Admin Systems',
      desc: 'Your team\'s secret weapon. Beautiful, fast tools that actually get used.',
      whatItDoes: 'Custom workflows, user management, automation engines, real-time data sync.',
      howWeHelp: 'We translate requirements into intuitive software. Your team doesn\'t need training—they use it immediately.',
      howWeDiffer: 'We design for the humans using it, not just the spec. Your team will actually look forward to using it.',
      impact: '+5 hours/week per user'
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-tight text-black">
            Web apps & websites that convert.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed font-light">
            We build digital products that are fast, beautiful, and designed to rank on Google. Your site won't be slow. Your app won't be clunky. Your SEO won't suck.
          </p>
          <p className="text-gray-600 max-w-2xl">
            From landing pages optimized for Google to complex web applications, we combine design, performance, and SEO into products that make money.
          </p>
        </div>
      </section>

      {/* Why Modern Web */}
      <section className="py-20 px-6 lg:px-8 bg-accent/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-foreground">
            What makes great digital products.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Lightning Speed',
                desc: 'Every 100ms delay kills conversions. We optimize mercilessly. Your site should load in under a second.'
              },
              {
                title: 'SEO From Day One',
                desc: 'Built with search in mind. Structured data, performance optimization, mobile-first design. Rank or go home.'
              },
              {
                title: 'Conversion Obsession',
                desc: 'Beautiful isn\'t enough. We design for results. Every button, form, and page optimized for your goal.'
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-accent flex-shrink-0" />
                  <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">What we build.</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              From landing pages to complex SaaS platforms, from e-commerce to internal dashboards. Every project is architected for your specific business goals.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, idx) => (
              <Link key={idx} href="/contact" className="group block">
                <div className="space-y-6 pb-12 border-b border-black/8 last:border-0 hover:bg-black/1 px-4 -mx-4 transition-all">
                  <div className="space-y-2">
                    <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Service {idx + 1}</span>
                    <h3 className="font-serif text-4xl md:text-5xl text-foreground group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">What It Is</p>
                      <p className="text-base text-gray-700 leading-relaxed">{service.whatItDoes}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">How We Build It</p>
                      <p className="text-base text-gray-700 leading-relaxed">{service.howWeHelp}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Why We're Different</p>
                      <p className="text-base text-gray-700 leading-relaxed">{service.howWeDiffer}</p>
                    </div>
                    {service.impact && (
                      <div className="space-y-2 border-l-4 border-black/10 pl-4">
                        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Business Impact</p>
                        <p className="text-xl font-bold text-foreground">{service.impact}</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={20} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-foreground">How we work.</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            From your first idea to launch day and beyond, we follow a proven process that ensures success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                phase: 'Discovery & Design',
                title: 'We Plan Obsessively',
                details: [
                  'Deep dive into your business goals',
                  'Competitive analysis and market research',
                  'Wireframes and interactive prototypes',
                  'Design system & component library',
                  'SEO and performance strategy'
                ]
              },
              {
                phase: 'Development',
                title: 'We Build Carefully',
                details: [
                  'Modern frontend architecture',
                  'Clean, maintainable code',
                  'Automated testing & QA',
                  'Performance optimization from day one',
                  'Security and accessibility standards'
                ]
              },
              {
                phase: 'Launch & Support',
                title: 'We Deliver & Iterate',
                details: [
                  'Smooth deployment process',
                  'Performance monitoring',
                  'Post-launch optimization',
                  'Training & documentation',
                  'Ongoing support & improvements'
                ]
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-8 -top-8 text-7xl font-serif text-foreground/10">
                    {String(idx + 1)}
                  </div>
                  <h3 className="font-serif text-3xl text-foreground relative z-10">{item.title}</h3>
                  <p className="text-sm font-medium text-gray-600 mt-2 uppercase tracking-widest">{item.phase}</p>
                </div>
                <ul className="space-y-3">
                  {item.details.map((detail, didx) => (
                    <li key={didx} className="flex gap-3 items-start text-gray-700">
                      <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-foreground">SEO isn't bolted on. It's built in.</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Every website and app we build is optimized for Google from day one. We don't do SEO as an afterthought. It's part of the architecture.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-3xl text-foreground">Technical SEO</h3>
                <ul className="space-y-3">
                  {['Structured data (Schema.org) for rich snippets', 'Mobile-first responsive design', 'Automatic sitemap generation', 'Fast page loads (Core Web Vitals optimization)', 'Clean URL structure and internal linking', 'XML sitemaps and robots.txt'].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-3xl text-foreground">On-Page Optimization</h3>
                <ul className="space-y-3">
                  {['Keyword research and strategy integration', 'Optimized meta titles and descriptions', 'H1/H2/H3 hierarchy', 'Image optimization and alt text', 'Internal linking strategy', 'Call-to-action optimization'].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Promise */}
      <section className="py-32 px-6 lg:px-8 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight text-foreground">
            Performance matters for conversions and SEO.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every 100ms of delay costs you conversions and SEO rankings. We obsess over performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            {[
              { metric: '<1s', label: 'Page Load Time', sub: 'Industry standard: 3-5s' },
              { metric: '90+', label: 'Performance Score', sub: 'Lighthouse benchmark' },
              { metric: 'A+', label: 'SEO Grade', sub: 'Semrush standard' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded border border-accent/20">
                <div className="text-4xl font-bold text-accent mb-2">{item.metric}</div>
                <p className="text-gray-700 font-medium mb-1">{item.label}</p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight text-foreground">
            Ready to build something beautiful?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Let's create a digital product that converts and scales. Your users will thank you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-black text-white font-medium hover:bg-black/80 transition-all"
          >
            Start Your Web Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </main>
  )
}
