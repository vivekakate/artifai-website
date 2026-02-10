'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import Link from 'next/link'
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    quote: "They took our chaotic workflow and turned it into a beautiful, intelligent system. We're saving 20 hours a week.",
    author: "Sarah Chen",
    role: "Operations Director, TechFlow",
    stars: 5
  },
  {
    quote: "Most agencies talk about AI like it's magic. These folks explained exactly what it could do for us. Results exceeded expectations.",
    author: "Marcus Williams",
    role: "CTO, DataVision",
    stars: 5
  },
  {
    quote: "The web app they built is intuitive, fast, and our users actually enjoy using it. Rare to find that level of care.",
    author: "Elena Rodriguez",
    role: "Product Manager, CloudScale",
    stars: 5
  },
]

const companies = [
  'TechFlow', 'DataVision', 'CloudScale', 'InnovateLabs', 
  'FutureAI', 'SmartBiz', 'DigitalFirst', 'NextGen',
  'SwiftCode', 'VentureTech', 'ProScale', 'BuildAI'
]

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-8 max-w-5xl">
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-tight text-black" style={{ opacity: 1 - scrollPos * 0.001 }}>
              We make AI work for your business.
            </h1>
            <p className="text-2xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed font-light">
              Not tomorrow. Today. We build intelligent systems, automate workflows, and create digital products that actually make your business more effective.
            </p>
            <p className="text-xl text-gray-500 max-w-2xl">
            AI that understands customers. Automation that kills busywork. Web apps people enjoy using — built right the first time.
            </p>
          </div>

          {/* Services Grid - 3 Main Categories
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {[
              { 
                label: 'AI Solutions', 
                desc: 'Chatbots, lead automation, content generation.',
                href: '/ai-services',
                highlights: ['ChatGPT ranking optimization', 'Lead qualification', 'Smart workflows']
              },
              { 
                label: 'Automation & Workflows', 
                desc: 'Your tools. Your processes. Connected seamlessly.',
                href: '/automation',
                highlights: ['CRM automation', 'Lead routing', 'Email sequences']
              },
              { 
                label: 'Web & Apps + SEO', 
                desc: 'Fast. Beautiful. Built to rank.',
                href: '/web-app',
                highlights: ['SEO-optimized websites', 'Web apps', 'Mobile responsive']
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group p-8 border border-black/8 hover:border-black/20 transition-smooth bg-white hover:bg-black/2"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-black group-hover:text-black/70 transition-smooth">{item.label}</h3>
                    <p className="text-base text-gray-600 mt-2">{item.desc}</p>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-black/5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="text-sm text-gray-500 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-black/40 group-hover:text-black transition-smooth pt-2">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div> */}

          {/* CTA */}
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-medium text-sm hover:bg-black/80 transition-smooth group"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-smooth" />
            </Link>
          </div>
        </div>
      </section>

      {/* Used by leading companies - commented out
      <section className="py-24 px-6 lg:px-8 bg-secondary/20 border-y border-secondary/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-600 text-sm font-medium mb-12 uppercase tracking-widest">Used by leading companies</p>
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {companies.map((company, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center justify-center min-w-max px-8 py-4 bg-white rounded border border-secondary/30 text-sm font-semibold text-foreground/70 hover:border-primary/50 transition-colors cursor-default">
                  {company}
                </div>
              ))}
              {companies.map((company, idx) => (
                <div key={`dup-${idx}`} className="flex-shrink-0 flex items-center justify-center min-w-max px-8 py-4 bg-white rounded border border-secondary/30 text-sm font-semibold text-foreground/70 hover:border-primary/50 transition-colors cursor-default">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Our Superpowers - 4 Services */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-5xl md:text-6xl leading-tight text-foreground mb-6">
              Our Superpowers.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              We specialize in AI services, automation, web applications, and video & creatives. All designed to make your business unstoppable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* AI Services & Voice Agents */}
            <Link href="/ai-services" className="group">
              <div className="relative overflow-hidden rounded-lg bg-white p-12 border-2 border-black/8 hover:border-black/20 transition-all">
                <div className="space-y-6">
                  <h3 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
                    AI Services & Voice Agents
                  </h3>
                  {/* Description commented out
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Custom AI agents, ChatGPT ranking, and intelligent systems. We rank you on AI assistants and build AI that automates your business—lead response automation and AI voice agents that handle customer calls naturally.
                  </p>
                  */}

                  <div className="space-y-4 pt-4">
                    <h4 className="font-serif text-2xl text-foreground">What We Do</h4>
                    <ul className="space-y-3">
                      {['Custom AI agents & ChatGPT integration', 'AI SEO for ChatGPT & AI search rankings', 'Lead response automation', 'AI voice agents for customer calls & support'].map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How We're Different commented out
                  <div className="space-y-4">
                    <h4 className="font-serif text-2xl text-foreground">How We're Different</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We don't just slap AI on everything. We analyze your bottlenecks, find where AI creates actual value, and build solutions that integrate seamlessly. Your ROI isn't theoretical—it's measured in hours saved and revenue gained.
                    </p>
                  </div>
                  */}

                  <div className="pt-6 border-t border-black/8">
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* AI Automation & Chatbot */}
            <Link href="/automation" className="group">
              <div className="relative overflow-hidden rounded-lg bg-white p-12 border-2 border-black/8 hover:border-black/20 transition-all">
                <div className="space-y-6">
                  <h3 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
                    AI Automation & Chatbot
                  </h3>
                  {/* Description commented out
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Your tools. Your processes. Connected seamlessly. We automate lead management, appointment booking, email sequences, and customer support—so your team gets their time back and nothing falls through the cracks.
                  </p>
                  */}

                  <div className="space-y-4 pt-4">
                    <h4 className="font-serif text-2xl text-foreground">What We Automate</h4>
                    <ul className="space-y-3">
                      {['Lead management & qualification', 'Appointment booking automation', 'Email & marketing sequences', 'Customer support ticket routing', 'Operations & admin workflows'].map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why It Matters commented out
                  <div className="space-y-4">
                    <h4 className="font-serif text-2xl text-foreground">Why It Matters</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Your team shouldn't spend 40% of their day on repetitive tasks. We build workflows that work 24/7—without complaining, asking for a raise, or taking vacation. Scale without chaos.
                    </p>
                  </div>
                  */}

                  <div className="pt-6 border-t border-black/8">
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Explore automation <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Website & Apps */}
            <Link href="/web-app" className="group">
              <div className="relative overflow-hidden rounded-lg bg-white p-12 border-2 border-black/8 hover:border-black/20 transition-all">
                <div className="space-y-6">
                  <h3 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
                    Website & Apps
                  </h3>
                  {/* Description commented out
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Beautiful, blazing-fast web apps and websites built with modern tech. Optimized for SEO, performance, and conversion. Whether it's a landing page or complex application, we build digital products that users actually love.
                  </p>
                  */}

                  <div className="space-y-4 pt-4">
                    <h4 className="font-serif text-2xl text-foreground">What We Build</h4>
                    <ul className="space-y-3">
                      {['Next.js applications & React components', 'SEO optimization, websites & landing pages', 'Real-time data dashboards & analytics tools', 'Mobile-responsive progressive web apps', 'E-commerce platforms & custom CMS'].map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why Choose Us commented out
                  <div className="space-y-4">
                    <h4 className="font-serif text-2xl text-foreground">Why Choose Us</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We obsess over performance, accessibility, and user experience. Your site isn't just pretty—it converts, it ranks, and it scales. We use cutting-edge tools like Next.js, TypeScript, and Tailwind to build applications that are maintainable and future-proof.
                    </p>
                  </div>
                  */}

                  <div className="pt-6 border-t border-black/8">
                    <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                      Explore web <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* AI Video & Creatives */}
            <Link href="/ai-video" className="group">
              <div className="relative overflow-hidden rounded-lg bg-white p-12 border-2 border-black/8 hover:border-black/20 transition-all">
                <div className="space-y-6">
                  <h3 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
                    AI Video & Creatives
                  </h3>
                  {/* Description commented out
                  <p className="text-lg text-gray-600 leading-relaxed">
                    No cameras. No studios. AI-powered video and visuals that your audience actually engages with—in hours, not weeks. From product promos and social reels to ad creatives and thumbnails that convert.
                  </p>
                  */}

                  <div className="space-y-4 pt-4">
                    <h4 className="font-serif text-2xl text-foreground">What We Create</h4>
                    <ul className="space-y-3">
                      {['AI video ads & social reels', 'Product promos & explainer videos', 'Ad creatives & thumbnails', 'AI voiceover & talking avatars', 'Script-to-video generation'].map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why It Works commented out
                  <div className="space-y-4">
                    <h4 className="font-serif text-2xl text-foreground">Why It Works</h4>
                    <p className="text-gray-700 leading-relaxed">
                      What took weeks—shoot, edit, revise—now takes hours. No studio rentals. No crew. Test 10 versions instantly. We create content that converts. Faster. Cheaper. Better.
                    </p>
                  </div>
                  */}

                  <div className="pt-6 border-t border-black/8">
                    <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                      Explore video & creatives <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Real results. Real people. (Testimonials) - commented out
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight text-foreground mb-4">
            Real results. Real people.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl leading-relaxed">
            Don't take our word for it. Here's what our clients have to say.
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-slow">
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div key={idx} className="flex-shrink-0 w-96 bg-white rounded-lg p-8 border border-black/8 hover:border-black/20 transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} size={18} className="fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Process Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight text-foreground mb-6">
            How we work.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl leading-relaxed">
            From discovery to delivery, we follow a battle-tested process that keeps projects on track and teams aligned.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'We dig into your business. Not just the technical requirements, but your goals, challenges, and what success looks like. We ask annoying questions and take detailed notes.'
              },
              {
                step: '02',
                title: 'Design',
                desc: 'We map out the solution. Visual designs, technical architecture, timelines. You see exactly what we\'re building before a single line of code gets written.'
              },
              {
                step: '03',
                title: 'Deliver',
                desc: 'We build it. With regular checkpoints, transparent communication, and a commitment to your deadline. When it\'s done, it\'s not just complete—it\'s exceeded your expectations.'
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-8 -top-8 text-8xl font-serif text-primary/10">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground relative z-10">{item.title}</h3>
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 lg:px-8 bg-foreground text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-16">
            We're obsessed with a few things.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Performance',
                desc: 'Slow sites lose customers. We optimize for speed, SEO, and user experience from day one. Your application should be as fast as a formula one car, not a school bus.',
                number: '01'
              },
              {
                title: 'Clarity',
                desc: 'We explain everything in plain English. No jargon, no BS. You know what we\'re building, why, and how much it costs. Transparency isn\'t negotiable.',
                number: '02'
              },
              {
                title: 'Reliability',
                desc: 'Code that breaks in production isn\'t code—it\'s a liability. We write tests, handle edge cases, and build systems that run 24/7 without drama.',
                number: '03'
              },
              {
                title: 'Impact',
                desc: 'Every project should move the needle. We measure success by your metrics: revenue, efficiency, user satisfaction. If it doesn\'t matter to your business, we don\'t build it.',
                number: '04'
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 pb-8 border-b border-white/10 relative">
                <div className="text-7xl font-serif text-white/10 absolute -top-4 -left-4">{item.number}</div>
                <h3 className="font-serif text-3xl text-white relative z-10">{item.title}</h3>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight text-foreground">
            Ready to build something amazing?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Let's talk about your project. No pitch. No BS. Just a conversation about what we can build together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </Link>
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
        </div>
      </section>

      <ContactForm />

      <Footer />
    </main>
  )
}
