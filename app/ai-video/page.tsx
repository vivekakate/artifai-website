'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Film, Sparkles, Zap } from 'lucide-react'

export default function AIVideoPage() {
  const services = [
    {
      title: 'AI Video Ads',
      desc: 'High-impact ads in minutes. No cameras, no studios, no waiting.',
    },
    {
      title: 'AI Product Promo Videos',
      desc: 'Show your product in action. Every angle. Every scenario.',
    },
    {
      title: 'AI Social Media Reels',
      desc: 'Native vertical video for TikTok, Instagram, YouTube Shorts.',
    },
    {
      title: 'AI Explainer Videos',
      desc: 'Complex concepts made simple. Your audience gets it instantly.',
    },
    {
      title: 'AI Talking Avatar Videos',
      desc: 'Personalized video at scale. Your face, your voice, zero fatigue.',
    },
    {
      title: 'AI Voiceover Videos',
      desc: 'Professional voiceovers. Any language. Any tone.',
    },
    {
      title: 'AI Product Photoshoots',
      desc: 'Infinite product photos. Every style. Every background.',
    },
    {
      title: 'AI Ad Creatives',
      desc: 'Dozens of ad variations in one session.',
    },
    {
      title: 'AI Visual Mockups',
      desc: 'Your design in context. In every environment.',
    },
    {
      title: 'AI Background Replacement',
      desc: 'Change settings instantly. Keep the subject perfect.',
    },
    {
      title: 'AI Thumbnail & Poster Creation',
      desc: 'Click-worthy thumbnails that actually convert.',
    },
    {
      title: 'AI Script-to-Video Generation',
      desc: 'Write a script. AI handles the rest.',
    },
  ]

  const workflow = [
    {
      step: 'Idea',
      title: 'You Describe It',
      desc: 'Text, reference images, or rough ideas. We take it from there.',
    },
    {
      step: 'Production',
      title: 'AI Creates',
      desc: 'We generate video, tweak details, test variations. All in software.',
    },
    {
      step: 'Refine',
      title: 'You Perfect It',
      desc: 'Real-time adjustments. New angles. Better timing. Your vision.',
    },
    {
      step: 'Deliver',
      title: 'You Launch',
      desc: 'Optimized for any platform. Ready to convert.',
    },
  ]

  const benefits = [
    {
      title: 'Speed',
      desc: 'What took weeks—shoot, edit, revise—now takes hours.',
      icon: Zap,
    },
    {
      title: 'Cost',
      desc: 'No studio rentals. No equipment. No crew. 80% cheaper than traditional.',
      icon: Sparkles,
    },
    {
      title: 'Variation',
      desc: 'Test 10 versions instantly. Keep what works. Dump the rest.',
      icon: Film,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-tight text-foreground">
            Video & creative production for modern brands.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed font-light">
            No cameras harmed. No studios booked. AI-powered video and visuals that your audience actually engages with—in hours, not weeks.
          </p>
          <p className="text-gray-600 max-w-2xl">
            From product videos to social reels to marketing ads. We create content that converts. Faster. Cheaper. Better.
          </p>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-foreground">
            Why AI-powered creative actually wins.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon size={28} className="text-primary flex-shrink-0" />
                    <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">What we create.</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Every content type. Every platform. Every business need. One integrated AI-powered workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link key={idx} href="/contact" className="group">
                <div className="h-full relative overflow-hidden rounded-lg p-8 bg-gradient-to-br from-white to-primary/5 border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative space-y-4">
                    <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="pt-4">
                      <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        Explore <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-foreground">The creative process, reinvented.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mb-16">
            From script to screen. Your workflow just got 10x faster. And your creative output? Unlimited.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workflow.map((item, idx) => (
              <div key={idx} className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-6 -top-6 text-6xl font-serif text-primary/20">
                    {String(idx + 1)}
                  </div>
                  <div className="space-y-2 relative z-10">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">{item.step}</span>
                    <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>

                {idx < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-4 text-gray-300">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Talk Section */}
      <section className="py-32 px-6 lg:px-8 bg-foreground text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="font-serif text-5xl md:text-6xl">The real advantage of AI creative.</h2>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Traditional production is expensive, slow, and doesn't scale. You pick one direction. You shoot once. You're locked in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">The Old Way</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Scout locations + book studios</li>
                  <li>• Hire crew + talent</li>
                  <li>• 3-4 week shoot schedule</li>
                  <li>• 2-3 weeks of editing</li>
                  <li>• One vision locked in</li>
                  <li>• $15K-50K+ per production</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">The AI Way</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Describe your vision</li>
                  <li>• No crew. No logistics.</li>
                  <li>• Hours to first draft</li>
                  <li>• Real-time iteration</li>
                  <li>• Test 10 directions instantly</li>
                  <li>• $1K-5K per production</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-12 space-y-4">
            <p className="text-lg text-gray-300">
              <strong>The catch?</strong> You can't replicate the magic of human creativity <em>and</em> get the speed of AI in the same workflow. Until now.
            </p>
            <p className="text-lg text-gray-300">
              We combine AI production with human direction. You get the speed, the cost savings, <em>and</em> the quality.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Optimization */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-foreground">Optimized for every platform.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mb-16">
            Same creative. Different formats. We deliver video optimized for where your audience actually is.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                platform: 'YouTube & Long-Form',
                specs: '16:9, 1920x1080, subtitles, chapters',
              },
              {
                platform: 'Social Media',
                specs: '9:16 (Reels, TikTok), 1:1 (Instagram Feed)',
              },
              {
                platform: 'Ads & Thumbnails',
                specs: 'Custom dimensions, optimized for click-through',
              },
              {
                platform: 'Email & Web',
                specs: 'Compressed for fast load, auto-play ready',
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-3 p-6 border border-primary/20 rounded-lg bg-gradient-to-br from-primary/5 to-transparent">
                <h3 className="font-semibold text-foreground text-lg">{item.platform}</h3>
                <p className="text-gray-600 text-sm">{item.specs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-16 text-foreground">Common questions.</h2>

          <div className="space-y-12">
            {[
              {
                q: 'Can AI video really compete with human-shot content?',
                a: 'For 80% of use cases? Yes. AI excels at product videos, explainers, ads, and variations. If you need a celebrity cameo or a specific location, we still need humans. But for volume, speed, and testing? AI wins every time.'
              },
              {
                q: 'How does editing work? Can we request changes?',
                a: 'You drive the editing. Real-time adjustments. Change the music, the pacing, the voiceover, the visuals—all in one workflow. No back-and-forth with editors. You see it, you approve it, it\'s done.'
              },
              {
                q: 'What about originality? Will all our videos look the same?',
                a: 'No. We tailor every video to your brand voice, your audience, your goals. AI is just the production engine. The creative direction? That\'s all you.'
              },
              {
                q: 'What formats and lengths can you create?',
                a: 'Anything from 6-second bumpers to 10-minute explainers. Social reels, YouTube videos, email content, ads. We optimize every format for its platform.'
              },
              {
                q: 'How is this different from using AI video tools myself?',
                a: 'You could learn the tools. Or spend 20 hours per video getting decent results. We handle the technical complexity, the creative direction, and the optimization. You get broadcast-quality output in a fraction of the time.'
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 pb-8 border-b border-gray-200 last:border-0 last:pb-0">
                <h3 className="font-serif text-2xl text-foreground">{item.q}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight text-foreground">
            Ready to create at scale?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Let's talk about your creative goals. We'll show you exactly what's possible and what it costs.
          </p>
          <Link
            href="https://calendly.com/artifai/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            Schedule a Creative Session
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </main>
  )
}
