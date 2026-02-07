'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl leading-tight text-black mb-6">
            Terms of Use
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: February 2026. These Terms of Use govern your access to and use of the website artifai.in and the services provided by ArtifAI.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 lg:px-8 pb-32">
        <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
          <div className="space-y-12 text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Use (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;you,&quot; &quot;your,&quot; or &quot;User&quot;) and ArtifAI (&quot;ArtifAI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of the website https://artifai.in (the &quot;Site&quot;) and any services, content, or offerings provided by ArtifAI, including but not limited to AI services, automation, web development, and AI video and creative services (collectively, the &quot;Services&quot;). By accessing or using the Site or Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Site or Services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">2. Eligibility</h2>
              <p>
                You must be at least 18 years of age and have the legal capacity to enter into a binding agreement to use the Site or Services. By using the Site or Services, you represent and warrant that you meet these requirements. If you are using the Site or Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">3. Description of Services</h2>
              <p className="mb-4">
                ArtifAI provides consulting and implementation services in the following areas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>AI Services:</strong> Custom AI agents, ChatGPT and AI assistant ranking, lead response automation, document intelligence, knowledge bases, and predictive analytics.</li>
                <li><strong>AI Automation:</strong> Workflow automation, lead management and qualification, data synchronization across tools, email and marketing automation, reporting and dashboards, and customer support automation.</li>
                <li><strong>Web & Apps:</strong> Landing pages, marketing websites, web applications, SaaS platforms, e-commerce, dashboards, and internal tools.</li>
                <li><strong>AI Video & Creatives:</strong> AI-generated video ads, product promos, social reels, explainer videos, ad creatives, thumbnails, voiceovers, and related creative production.</li>
              </ul>
              <p className="mt-4">
                The scope, deliverables, timelines, and fees for any specific project will be set out in a separate agreement, statement of work, or proposal agreed upon by you and ArtifAI. These Terms apply to your use of the Site and to any Services unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">4. Use of the Site and Services</h2>
              <p className="mb-4">
                You agree to use the Site and Services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Site or Services in any way that violates applicable laws, regulations, or third-party rights.</li>
                <li>Transmit any harmful, offensive, defamatory, or unlawful content, or content that infringes intellectual property or privacy rights.</li>
                <li>Attempt to gain unauthorized access to the Site, Services, or any related systems, networks, or data.</li>
                <li>Use automated means (e.g., bots, scrapers) to access the Site or Services without our prior written consent.</li>
                <li>Interfere with or disrupt the integrity or performance of the Site or Services.</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
                <li>Use the Site or Services for any purpose that is fraudulent or that could harm ArtifAI, other users, or third parties.</li>
              </ul>
              <p className="mt-4">
                We reserve the right to suspend or terminate your access to the Site or Services if we believe you have violated these Terms or for any other reason at our discretion.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">5. Intellectual Property</h2>
              <p>
                The Site and Services, including but not limited to text, graphics, logos, designs, software, and other content (excluding content you provide), are owned by ArtifAI or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or create derivative works from any part of the Site or Services without our prior written consent. Any deliverables created for you under a separate project agreement will be governed by the terms of that agreement regarding ownership and license. Nothing in these Terms grants you any right, title, or interest in the Site or Services except as expressly stated.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">6. Your Content and Feedback</h2>
              <p>
                You retain ownership of any content, data, or materials you provide to ArtifAI (&quot;Your Content&quot;). By providing Your Content, you grant ArtifAI a non-exclusive, worldwide, royalty-free license to use, process, and store Your Content as necessary to provide the Services and to improve our offerings. You represent and warrant that you have all rights necessary to provide Your Content and that Your Content does not violate any law or third-party rights. Any feedback, suggestions, or ideas you provide regarding the Site or Services may be used by ArtifAI without obligation to you.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">7. Confidentiality</h2>
              <p>
                Each party may receive confidential information from the other in connection with the Site or Services. Each party agrees to hold such information in confidence and not to disclose it to third parties except as necessary to perform under these Terms or as required by law. Confidential information does not include information that is publicly available, independently developed, or rightfully received from a third party without restriction. These confidentiality obligations survive termination of these Terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">8. Disclaimers</h2>
              <p>
                THE SITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY. WE DO NOT WARRANT THAT THE SITE OR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS. WE DO NOT WARRANT THE ACCURACY, COMPLETENESS, OR USEFULNESS OF ANY CONTENT ON THE SITE OR PROVIDED THROUGH THE SERVICES. YOUR USE OF THE SITE AND SERVICES IS AT YOUR SOLE RISK. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES; IN SUCH JURISDICTIONS, OUR LIABILITY MAY BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">9. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ARTIFAI AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL) ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE OR SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THE SITE OR SERVICES EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED UNITED STATES DOLLARS (USD 100). SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR CERTAIN DAMAGES; IN SUCH JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless ArtifAI and its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to (a) your use of the Site or Services, (b) Your Content or your conduct, (c) your violation of these Terms or any law or third-party right, or (d) any dispute between you and a third party. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, at your expense.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">11. Third-Party Links and Services</h2>
              <p>
                The Site may contain links to third-party websites or services (e.g., Calendly, social media, external resources). We do not endorse and are not responsible for the content, privacy practices, or terms of any third-party sites or services. Your use of third-party sites or services is at your own risk and subject to their respective terms and policies.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">12. Payment and Fees</h2>
              <p>
                Payment terms, fees, and billing for specific projects or Services will be set out in a separate agreement, statement of work, or proposal. Unless otherwise agreed, you agree to pay all fees when due. Late payments may be subject to interest and collection costs. All fees are non-refundable unless otherwise agreed in writing or required by law.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">13. Termination</h2>
              <p>
                We may suspend or terminate your access to the Site or Services at any time, with or without cause or notice, including if we believe you have violated these Terms. You may stop using the Site and Services at any time. Upon termination, your right to use the Site and Services ceases immediately. Sections that by their nature should survive termination (including but not limited to Intellectual Property, Confidentiality, Disclaimers, Limitation of Liability, Indemnification, and Governing Law) shall survive.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">14. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the Site or Services shall first be attempted to be resolved by good-faith negotiation. If the dispute cannot be resolved within thirty (30) days, either party may refer the dispute to the courts of competent jurisdiction in India. You agree to submit to the personal jurisdiction of such courts for the purpose of litigating any such dispute.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">15. General Provisions</h2>
              <p className="mb-4">
                <strong>Entire agreement:</strong> These Terms, together with our Privacy Policy and any separate project agreements, constitute the entire agreement between you and ArtifAI regarding the Site and Services and supersede any prior agreements or understandings.
              </p>
              <p className="mb-4">
                <strong>Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
              <p className="mb-4">
                <strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
              </p>
              <p className="mb-4">
                <strong>Assignment:</strong> You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms or our rights and obligations without restriction.
              </p>
              <p>
                <strong>Contact:</strong> For questions about these Terms, please contact us at <a href="mailto:artifaiofficial@gmail.com" className="text-primary underline hover:no-underline">artifaiofficial@gmail.com</a> or via our Site at <a href="https://artifai.in" className="text-primary underline hover:no-underline">https://artifai.in</a>.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">16. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time to reflect changes in our practices, the Site, the Services, or applicable law. We will post the updated Terms on this page and update the &quot;Last updated&quot; date. For material changes, we may provide additional notice (e.g., by email or a prominent notice on the Site). Your continued use of the Site or Services after the effective date of changes constitutes your acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using the Site and Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
