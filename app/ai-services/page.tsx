'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { PortfolioSection } from '@/components/portfolio-section'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function AIServices() {
  const services = [
    {
      title: 'Custom AI Agents',
      desc: 'Purpose-built AI that understands your business logic and operates autonomously. Handles complex workflows, makes decisions, takes actions across your systems.',
      whatItDoes: 'Handles complex workflows, makes decisions, takes actions across your systems.',
      howWeHelp: 'We design custom agents trained on your processes, data, and business rules.',
      howWeDiffer: 'Most agencies sell you off-the-shelf solutions. We build AI that knows your business inside out.',
      impact: 'Full process automation'
    },
    {
      title: 'ChatGPT Integration & AI Ranking',
      desc: 'Rank in ChatGPT\'s suggestion engine and leverage AI search for organic discovery. Optimizes your content to appear in ChatGPT, Claude, and other AI assistants\' recommendations.',
      whatItDoes: 'Optimizes your content to appear in ChatGPT, Claude, and other AI assistants\' recommendations.',
      howWeHelp: 'We structure your content, build knowledge bases, and optimize for AI algorithms.',
      howWeDiffer: 'We get you ranking in AI-first search. Early movers get the biggest advantage.',
      impact: '+300% AI-driven traffic'
    },
    {
      title: 'Lead Response AI',
      desc: 'Automatically qualify and respond to inbound leads at scale. Reads form submissions, emails, messages. Qualifies them, responds intelligently.',
      whatItDoes: 'Reads form submissions, emails, messages. Qualifies them, responds intelligently.',
      howWeHelp: 'We train AI on your qualifying criteria and integrate it into your lead flow.',
      howWeDiffer: 'No more missed leads or delayed responses. AI handles it 24/7.',
      impact: '+90% lead response rate'
    },
    // Commented out - not core services people want
    // {
    //   title: 'Document Intelligence',
    //   desc: 'Extract, classify, and analyze documents in seconds.',
    //   whatItDoes: 'Processes contracts, invoices, forms. Extracts data, identifies patterns, flags risks.',
    //   howWeHelp: 'We build custom ML models trained on your document types.',
    //   howWeDiffer: 'Handles your specific document formats, not generic templates.',
    //   impact: '10x faster processing'
    // },
    // {
    //   title: 'Smart Knowledge Base',
    //   desc: 'Self-serve support that actually answers questions.',
    //   whatItDoes: 'AI-powered search that understands intent and provides accurate answers instantly.',
    //   howWeHelp: 'We structure your knowledge, train the AI, and optimize for accuracy.',
    //   howWeDiffer: 'Your knowledge base won\'t be useless anymore—it actually helps people.',
    //   impact: '-70% support tickets'
    // },
    // {
    //   title: 'Predictive Analytics',
    //   desc: 'Forecast trends, detect churn, predict customer behavior.',
    //   whatItDoes: 'Analyzes historical data to predict future outcomes with statistical accuracy.',
    //   howWeHelp: 'We build predictive models, integrate them with your data, and create dashboards.',
    //   howWeDiffer: 'Actionable predictions, not just pretty charts.',
    //   impact: '+45% forecast accuracy'
    // },
    {
      title: 'AI Voice Agent',
      desc: 'Intelligent voice assistants that handle customer calls, support, and sales conversations naturally. Answers calls, understands context, handles complex queries, schedules appointments, and transfers to humans when needed—all with natural conversation flow.',
      whatItDoes: 'Answers calls, understands context, handles complex queries, schedules appointments, and transfers to humans when needed—all with natural conversation flow.',
      howWeHelp: 'We build custom voice agents trained on your products, services, and customer data. Integrate with your phone systems, CRM, and scheduling tools.',
      howWeDiffer: 'Not a basic chatbot. Real voice AI that sounds human, understands intent, and actually solves problems. Your customers won\'t know they\'re talking to AI.',
      impact: '24/7 customer support, +60% call handling capacity'
    },
  ]

  const implementation = [
    {
      phase: 'Discovery',
      title: 'We Listen, Really',
      details: [
        'Map your current processes and pain points',
        'Identify where AI creates measurable value',
        'Define success metrics and ROI targets',
        'Assess data quality and integration needs'
      ]
    },
    {
      phase: 'Build',
      title: 'We Create',
      details: [
        'Design custom AI workflows',
        'Gather and prepare your training data',
        'Build and test models iteratively',
        'Integrate with your existing systems'
      ]
    },
    {
      phase: 'Deploy',
      title: 'We Launch',
      details: [
        'Monitor performance in real-time',
        'Optimize based on live data',
        'Train your team on the new system',
        'Measure against baseline metrics'
      ]
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-tight text-foreground">
            AI that drives real results.
          </h1>
          <p className="text-2xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed font-light">
            Custom AI agents, ChatGPT ranking optimization, lead automation. We build intelligent systems that work 24/7 and move your business forward.
          </p>
          <p className="text-xl text-gray-600 max-w-2xl">
            Google's dying. ChatGPT and Claude are where people get answers now. We get you ranking in AI assistants and build AI that automates your business.
          </p>
        </div>
      </section>

      {/* ChatGPT Ranking Section - commented out
      <section className="py-32 px-6 lg:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-5xl md:text-6xl mb-6 text-foreground">
              Rank in ChatGPT & AI Assistants.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Search is changing. ChatGPT, Claude, Perplexity—these are the new discovery engines. We get you ranking in AI assistants and build knowledge bases optimized for AI search.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="font-serif text-3xl text-foreground">How AI SEO Works</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Content Strategy',
                    desc: 'We structure your content so AI assistants cite you as an authoritative source.'
                  },
                  {
                    title: 'Knowledge Base',
                    desc: 'Build a searchable knowledge base that AI systems pull from when answering questions.'
                  },
                  {
                    title: 'Link Building',
                    desc: 'Strategic link building ensures AI systems recognize you as an expert.'
                  },
                  {
                    title: 'Citations & Attribution',
                    desc: 'Optimized for AI to cite your work and send traffic back to you.'
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 border-2 border-primary/20 rounded-lg">
                <h3 className="font-serif text-2xl text-foreground mb-6">The Opportunity</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>40% of users</strong> now ask ChatGPT or Claude instead of Googling. In 2 years? That number will be 70%+.
                  </p>
                  <p className="text-gray-700">
                    But ranking in ChatGPT is a completely different game. We know how to play it—and win.
                  </p>
                  <div className="pt-4 border-t border-primary/10">
                    <p className="text-sm text-gray-600">
                      Early movers are getting massive competitive advantages. Get in now.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Expected Results</h4>
                <ul className="space-y-2">
                  {['ChatGPT mentions in conversation starters', '10-50 AI-driven referrals daily', 'Brand mentions in ChatGPT responses', 'Knowledge base citations in AI outputs'].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-gray-700">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Why AI? */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-foreground">
            Why AI automation works.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Speed',
                desc: 'Processes thousands of tasks instantly. Humans sleep. AI doesn\'t. Your operations run 24/7.'
              },
              {
                title: 'Scale',
                desc: 'Works the same at 10 requests or 10 million. No hiring spree needed. Just capability.'
              },
              {
                title: 'Insights',
                desc: 'Finds patterns in data that humans miss. Predicts outcomes. Enables better decisions.'
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0" />
                  <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">What we build.</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Each solution is customized to your business. Here are the common patterns we specialize in.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Link key={idx} href="/contact" className="group">
                <div className="h-full border-2 border-primary/20 hover:border-primary/50 rounded-lg p-8 bg-gradient-to-br from-primary/5 to-transparent hover:bg-primary/10 transition-all">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-700">
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-primary/20">
                      {/* What It Does commented out - merged into description
                      <div>
                        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">What It Does</p>
                        <p className="text-gray-700">{service.whatItDoes}</p>
                      </div>
                      */}

                      <div>
                        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">How We Help</p>
                        <p className="text-gray-700">{service.howWeHelp}</p>
                      </div>

                      {/* How We're Different commented out
                      <div>
                        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">How We're Different</p>
                        <p className="text-gray-700">{service.howWeDiffer}</p>
                      </div>
                      */}

                      <div className="pt-2">
                        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Business Impact</p>
                        <p className="text-xl font-bold text-foreground">{service.impact}</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        Learn more <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection
        excludeIds={['advizy-website', 'trendify-bazaar']}
        subtitle="AI agents, chatbots, and automation work we’ve shipped across brands."
      />

      {/* Implementation Process */}
      <section className="py-32 px-6 lg:px-8 bg-foreground text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-6">Our AI Implementation Process.</h2>
          <p className="text-xl text-gray-300 max-w-3xl mb-16">
            From discovery to deployment, we follow a proven framework that ensures your AI delivers real business value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {implementation.map((item, idx) => (
              <div key={idx} className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-8 -top-8 text-7xl font-serif text-white/10">
                    {String(idx + 1)}
                  </div>
                  <h3 className="font-serif text-3xl text-white relative z-10">{item.title}</h3>
                  <p className="text-sm font-medium text-gray-300 mt-2 uppercase tracking-widest">{item.phase}</p>
                </div>
                <ul className="space-y-3">
                  {item.details.map((detail, didx) => (
                    <li key={didx} className="flex gap-3 items-start text-gray-300">
                      <CheckCircle2 size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-style Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-16 text-foreground">Questions we hear.</h2>

          <div className="space-y-12">
            {[
              {
                q: 'How long does it take to implement AI?',
                a: 'Simple integrations: 2-4 weeks. Custom agents: 6-12 weeks. It depends on complexity and data readiness. We scope it all upfront—no surprises.'
              },
              {
                q: 'What if we don\'t have clean data?',
                a: 'Most companies don\'t. We help you assess, clean, and structure your data. It\'s part of the process. Done right, this actually becomes a competitive advantage.'
              },
              {
                q: 'How do we know if it\'s working?',
                a: 'We define metrics before we build. Time saved. Errors reduced. Revenue increased. Quality improved. We measure what matters to your business.'
              },
              {
                q: 'Can we integrate AI with our existing systems?',
                a: 'Yes. We\'ve integrated with Salesforce, HubSpot, Slack, email systems, databases, and custom APIs. If it has an API, we can connect to it.'
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
            Let's talk about your AI opportunity.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            In a 30-minute conversation, we can identify where AI creates real value for your business. No pitch. No BS.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            Schedule a Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </main>
  )
}
