'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { PortfolioSection } from '@/components/portfolio-section'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-tight text-black">
            Automate the boring stuff.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed font-light">
            Your team shouldn't spend 40% of their day doing repetitive tasks. We connect your tools, automate your processes, and give your people back their time.
          </p>
          <p className="text-gray-600 max-w-2xl">
            From lead qualification to reporting dashboards, we build workflows that work for you 24/7 without complaining, asking for a raise, or taking vacation.
          </p>
        </div>
      </section>

      {/* Why Automation Matters */}
      <section className="py-32 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-16">Why automation is non-negotiable.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Time Back', 
                desc: '3-5 hours saved per person, per day. That\'s 15-25 hours a week. Over a year? That\'s another full-time employee\'s worth of productivity.' 
              },
              { 
                title: 'Zero Errors',
                desc: 'Humans are great at creativity. Terrible at repetitive tasks. Workflows don\'t get tired, don\'t skip steps, don\'t accidentally delete data.' 
              },
              { 
                title: 'Scale Without Chaos',
                desc: '10x your business without 10x your team. Automation handles growth. Your people focus on strategy, not busywork.' 
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-black mb-6">What we automate.</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Every business is different. These are the patterns we see most often—but we can automate almost anything.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { 
                title: 'Lead Management', 
                desc: 'From first touch to qualified opportunity. AI-powered qualification and routing.',
                details: [
                  'Automatic lead capture from all channels',
                  'AI-powered lead qualification',
                  'Smart routing to the right sales rep',
                  'Triggered follow-ups and reminders',
                  'Real-time CRM updates'
                ]
              },
              // Commented out - not core services people want
              // { 
              //   title: 'Data Synchronization', 
              //   desc: 'Your tools talk to each other automatically.',
              //   details: [
              //     'Real-time sync between CRM, email, and tools',
              //     'Duplicate prevention and deduplication',
              //     'Two-way data flows',
              //     'Historical data preservation',
              //     'Audit trails and error handling'
              //   ]
              // },
              { 
                title: 'Email & Marketing', 
                desc: 'Triggered campaigns that actually convert.',
                details: [
                  'Event-based email sequences',
                  'Personalization at scale',
                  'A/B testing automation',
                  'Unsubscribe and compliance handling',
                  'Performance tracking and optimization'
                ]
              },
              { 
                title: 'Customer Support', 
                desc: 'Ticket routing, escalation, and resolution.',
                details: [
                  'Automatic ticket categorization',
                  'Intelligent routing to specialists',
                  'Response templates and suggestions',
                  'Follow-up reminders',
                  'Knowledge base suggestions'
                ]
              },
              // Commented out - not core services people want
              // { 
              //   title: 'Reporting & Analytics', 
              //   desc: 'Dashboards that update themselves.',
              //   details: [
              //     'Automated data collection and aggregation',
              //     'Custom dashboards and reports',
              //     'Scheduled report delivery',
              //     'Alert thresholds and triggers',
              //     'Historical trend analysis'
              //   ]
              // },
              { 
                title: 'Operations & Admin', 
                desc: 'Backend processes that run seamlessly.',
                details: [
                  'Invoice generation and sending',
                  'Expense report processing',
                  'Contract and document automation',
                  'Team scheduling and calendar management',
                  'Compliance and audit tasks'
                ]
              },
              { 
                title: 'Appointment Booking Automation', 
                desc: 'Automated scheduling that eliminates back-and-forth and reduces no-shows.',
                details: [
                  'Automatic calendar sync and availability management',
                  'Smart scheduling based on service type and duration',
                  'Automated reminders via email, SMS, and push notifications',
                  'Rescheduling and cancellation handling',
                  'Integration with payment processing and confirmation'
                ]
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border-2 border-black/8 hover:border-black/20 transition-smooth hover:bg-black/2">
                <h3 className="font-serif text-2xl md:text-3xl text-black mb-3">{item.title}</h3>
                <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">{item.desc}</p>
                <div className="space-y-3">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex gap-3 items-start text-sm md:text-base text-gray-700">
                      <CheckCircle2 size={18} className="text-black/40 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection
        excludeIds={['advizy-website', 'artifai-website', 'lipstick-ad', 'trendify-bazaar']}
        subtitle="Chatbots, automations, and behind-the-scenes systems we run for clients."
      />

      {/* Tools We Connect */}
      <section className="py-32 px-6 lg:px-8 bg-black/2">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-16 text-black">Tools we integrate with.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Salesforce', 'HubSpot', 'Pipedrive', 'Monday.com', 'Slack', 'Gmail', 'Outlook', 'Zapier', 'Make', 'Airtable', 'Stripe', 'Twilio', 'Google Sheets', 'Calendly', 'Segment', 'Mixpanel'].map((tool, idx) => (
              <div key={idx} className="p-4 bg-white border border-black/8 text-center font-medium text-black/70">
                {tool}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-12 text-sm">
            Don't see your tool? We can integrate with almost anything that has an API. <Link href="/contact" className="underline underline-offset-2 font-medium">Let's talk</Link>.
          </p>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-32 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-6">How we build your automations.</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            Our process is proven. We've done this hundreds of times. You won't have workflow chaos—you'll have systems that just work.
          </p>

          <div className="space-y-12">
            {[
              { 
                num: '01', 
                title: 'Audit & Discovery',
                desc: 'We map your current workflows. Where do humans spend time? Where are errors happening? What\'s costing you money? We find it.',
                details: ['Current process mapping', 'Bottleneck identification', 'Pain point analysis', 'Tool audit', 'Data flow assessment']
              },
              { 
                num: '02', 
                title: 'Design & Planning',
                desc: 'We design the ideal workflow. What should happen automatically? What needs human review? What tools need to talk to each other?',
                details: ['Process redesign', 'Tool integration planning', 'Exception handling', 'Approval workflows', 'Timeline & milestones']
              },
              { 
                num: '03', 
                title: 'Build & Test',
                desc: 'We build it. Test it with real data. Find edge cases. Fix them. Optimize performance. Make sure it\'s bulletproof.',
                details: ['Workflow configuration', 'Integration setup', 'Testing with real data', 'Error handling', 'Performance tuning']
              },
              { 
                num: '04', 
                title: 'Deploy & Monitor',
                desc: 'We go live. Monitor it. Catch issues before they become problems. Train your team. Iterate continuously.',
                details: ['Gradual rollout', 'Real-time monitoring', 'Team training', 'Performance tracking', 'Continuous optimization']
              },
            ].map((item, idx) => (
              <div key={idx} className="pb-12 border-b border-white/10 last:border-0 last:pb-0">
                <div className="flex gap-8 items-start mb-6">
                  <div className="text-5xl font-serif text-white/20 flex-shrink-0 w-20">{item.num}</div>
                  <div>
                    <h3 className="font-serif text-3xl text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="ml-28 grid grid-cols-2 md:grid-cols-5 gap-4">
                  {item.details.map((detail, i) => (
                    <div key={i} className="text-sm text-gray-400">{detail}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-16 text-black">Questions about automation.</h2>

          <div className="space-y-12">
            {[
              {
                q: 'Will automation replace my team?',
                a: 'No. Automation replaces tasks, not people. Your team moves from doing repetitive work to doing strategy, creativity, and problem-solving. You get more productivity with the same headcount.'
              },
              {
                q: 'What if something breaks?',
                a: 'We build error handling into every automation. If something goes wrong, we get notified instantly. We monitor 24/7 and fix issues before you notice them. Plus, we make it easy to stop an automation if needed.'
              },
              {
                q: 'How long does it take to set up?',
                a: 'Simple automations (data sync, basic email): 1-2 weeks. Complex workflows: 4-8 weeks. We scope it all upfront. No surprises.'
              },
              {
                q: 'What about data security and privacy?',
                a: 'We treat your data like it\'s ours. Encrypted connections, secure APIs, compliance with GDPR, CCPA, and industry standards. Your data never leaves your systems unless you tell it to.'
              },
              {
                q: 'Can we modify automations later?',
                a: 'Yes. We document everything clearly. If your process changes, we update the workflows. It\'s not a one-time setup—it\'s an ongoing partnership.'
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 pb-8 border-b border-black/8 last:border-0 last:pb-0">
                <h3 className="font-serif text-2xl md:text-3xl text-black">{item.q}</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight">
            Ready to get your time back?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let's talk about your biggest workflow pain points. In 30 minutes, we can show you exactly what we'd automate and the time/money you'd save.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-all hover:shadow-lg"
          >
            Schedule a Workflow Audit
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </main>
  )
}
