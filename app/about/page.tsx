'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-tight text-black">
            We build digital products that matter.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed font-light">
            Since our founding, we've partnered with ambitious companies to transform their ideas into market-leading digital products.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
            We exist to bridge the gap between ambitious vision and flawless execution. Most founders dream bigger than their team can build. We're that team. We combine strategic thinking, technical excellence, and obsessive attention to detail to create digital products that don't just work—they dominate their market.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
            We measure our success by yours. If your product doesn't move the needle for your business, we don't consider it done.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-black mb-16">
            Our Story
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-3xl text-black mb-3">Founded on Frustration</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We started because we kept seeing the same problem: brilliant founders building mediocre products. Agencies prioritized deadlines over quality. Freelancers disappeared mid-project. In-house teams lacked specialized expertise. There had to be a better way.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-black mb-3">Built Different</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We assembled a team that doesn't settle. Full-stack architects, AI specialists, product strategists, and pixel-perfect designers. People who've built multiple 7-figure businesses and sold companies. People who care deeply about getting it right.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-black mb-3">Proven Results</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our clients have raised millions in funding, hit profitable scale, and become market leaders. We've helped startups achieve 10x growth, established companies cut operational costs by 60%, and visionary founders turn blue-sky ideas into revenue-generating platforms.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg border border-black/8">
                <h3 className="font-serif text-2xl text-black mb-6">What Sets Us Apart</h3>
                <ul className="space-y-4">
                  {[
                    'Deep expertise across AI, web, automation, and blockchain',
                    'Strategic advisors who understand business, not just technology',
                    'We optimize for outcomes, not billable hours',
                    'Transparent communication from discovery to delivery',
                    'Long-term partnerships, not transactional relationships',
                    'Proven track record with funded startups and scale-ups'
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 size={20} className="text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-black mb-16">
            How We Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Discovery',
                desc: 'We start by deeply understanding your business, market, and vision. No assumptions. We ask hard questions and document everything.'
              },
              {
                title: 'Collaborative Design',
                desc: 'Your input shapes every decision. We present ideas, gather feedback, and iterate. You see exactly what you\'re getting before code starts.'
              },
              {
                title: 'Obsessive Execution',
                desc: 'We build with precision. Testing, optimization, security, performance. Every line of code is reviewed. Every interaction is considered.'
              },
              {
                title: 'Transparent Communication',
                desc: 'Weekly check-ins, progress updates, honest assessments. No surprises. If scope is shifting, we tell you. If timeline is at risk, we tell you immediately.'
              },
              {
                title: 'Long-term Support',
                desc: 'Launch isn\'t the end. We support your product, iterate based on user feedback, and help you scale as you grow.'
              },
              {
                title: 'Results-Oriented',
                desc: 'We measure success by your KPIs. Revenue growth, user adoption, operational efficiency. That\'s what we optimize for.'
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-6xl font-serif text-black/10">{String(idx + 1).padStart(2, '0')}</div>
                <h3 className="font-serif text-2xl text-black">{item.title}</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-black mb-16">
            Why Companies Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                metric: '99.9%',
                desc: 'Uptime across all projects'
              },
              {
                metric: '150%',
                desc: 'Average ROI within 6 months'
              },
              {
                metric: '12+',
                desc: 'Years of combined industry experience'
              },
              {
                metric: '50+',
                desc: 'Successful projects delivered'
              },
              {
                metric: '48hrs',
                desc: 'Average response time'
              },
              {
                metric: '100%',
                desc: 'Client satisfaction rate'
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white border border-black/8 rounded-lg">
                <div className="text-5xl font-serif text-black mb-2">{item.metric}</div>
                <p className="text-lg text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Expertise */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-black mb-16">
            Our Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Frontend',
                skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js']
              },
              {
                category: 'Backend',
                skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'API Design']
              },
              {
                category: 'AI & ML',
                skills: ['LLMs', 'GPT Integration', 'Custom Agents', 'Data Analytics', 'Predictive ML']
              },
              {
                category: 'DevOps',
                skills: ['Vercel', 'AWS', 'Docker', 'CI/CD', 'Cloud Infrastructure']
              },
              {
                category: 'Mobile',
                skills: ['React Native', 'iOS', 'Android', 'Cross-platform Apps', 'Native Development']
              },
              {
                category: 'Design',
                skills: ['UI/UX', 'Product Design', 'Figma', 'Design Systems', 'Accessibility']
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 p-6 bg-gray-50 rounded-lg border border-black/8">
                <h3 className="font-serif text-2xl text-black">{item.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="px-3 py-1 bg-white border border-black/8 rounded-full text-sm text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-16">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Quality Over Shortcuts',
                desc: 'There are no quick wins in software. We do the work right, even when it takes longer.'
              },
              {
                title: 'Your Success Is Ours',
                desc: 'We succeed when you succeed. Our incentives are aligned. We care about your outcomes, not our revenue.'
              },
              {
                title: 'Radical Honesty',
                desc: 'We tell you what we think, even when it\'s uncomfortable. We give you honest assessments about what\'s possible and what isn\'t.'
              },
              {
                title: 'Continuous Learning',
                desc: 'Technology moves fast. We stay ahead through constant learning, experimentation, and staying current with industry trends.'
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 pb-8 border-b border-white/10 relative last:border-0">
                <div className="text-7xl font-serif text-white/15 absolute -top-4 -left-4">
                  {String(idx + 1).padStart(2, '0')}
                </div>
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
            Ready to partner with us?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Let's talk about your vision, challenges, and what success looks like for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-black text-white font-medium hover:bg-black/80 transition-all"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </Link>
          <p className="text-center text-sm text-gray-400" >
                We'll respond within 24 hours.{' '}
                <Link
                  href="https://calendly.com/artifaiofficial/30min"
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
