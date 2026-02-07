'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl leading-tight text-black mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: February 2026. This Privacy Policy describes how ArtifAI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your information when you use our website artifai.in and our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 lg:px-8 pb-32">
        <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
          <div className="space-y-12 text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">1. Introduction</h2>
              <p>
                ArtifAI (&quot;ArtifAI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website https://artifai.in (the &quot;Site&quot;) and provides AI services, automation, web development, and AI video and creative services (collectively, the &quot;Services&quot;). We are committed to protecting your privacy and handling your personal data in a transparent and secure manner. This Privacy Policy explains what information we collect, how we use it, with whom we may share it, and the choices you have regarding your information. By accessing or using our Site or Services, you agree to this Privacy Policy. If you do not agree, please do not use our Site or Services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We may collect the following categories of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Information you provide:</strong> When you contact us via our contact form, book a call, or engage with our Services, we may collect your name, email address, company name, phone number, and any message or content you submit. We use this information to respond to your inquiries, deliver our Services, and communicate with you about projects and updates.</li>
                <li><strong>Automatically collected information:</strong> When you visit our Site, we may automatically collect certain information about your device and usage, including your IP address, browser type, operating system, referring URLs, pages viewed, and the date and time of your visit. We use this information to improve our Site, analyze trends, and ensure security.</li>
                <li><strong>Cookies and similar technologies:</strong> We may use cookies, web beacons, and similar technologies to recognize you, remember your preferences, and understand how you use our Site. You can control cookies through your browser settings.</li>
                <li><strong>Information from third-party services:</strong> If you interact with us through third-party platforms (e.g., Calendly for scheduling, social media, or analytics providers), we may receive information that you have made available on those platforms, in accordance with their privacy policies.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our Site and Services, including AI services, automation, web applications, and AI video and creatives.</li>
                <li>Respond to your inquiries, process your requests, and communicate with you about projects, proposals, and support.</li>
                <li>Send you transactional emails (e.g., confirmations, project updates) and, where you have opted in, marketing communications about our Services.</li>
                <li>Analyze usage patterns, conduct research, and improve user experience and our offerings.</li>
                <li>Detect, prevent, and address technical issues, fraud, and abuse.</li>
                <li>Comply with applicable laws, regulations, and legal process, and enforce our terms and policies.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">4. Legal Basis for Processing (Where Applicable)</h2>
              <p>
                Where required by applicable law (such as in the European Economic Area or the United Kingdom), we process your personal data based on: (a) your consent; (b) performance of a contract with you or steps taken at your request; (c) our legitimate interests (e.g., operating our business, improving our Site and Services, security); or (d) compliance with legal obligations. You may have the right to withdraw consent or object to certain processing where applicable.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">5. Sharing and Disclosure of Information</h2>
              <p className="mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service providers:</strong> We may share information with trusted third-party service providers who assist us in operating our Site and Services (e.g., hosting, email delivery, analytics, scheduling tools). These providers are contractually required to protect your information and use it only for the purposes we specify.</li>
                <li><strong>Business transfers:</strong> If we are involved in a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred as part of that transaction, subject to the same privacy commitments.</li>
                <li><strong>Legal and safety:</strong> We may disclose information if required by law, court order, or government request, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others, or to investigate fraud or security issues.</li>
                <li><strong>With your consent:</strong> We may share your information for other purposes with your explicit consent.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law. For example, we may retain contact form submissions and project-related communications for the duration of our business relationship and for a reasonable period thereafter for legal, accounting, or dispute resolution purposes. When we no longer need your information, we will securely delete or anonymize it where feasible.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">7. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include secure hosting, encryption where appropriate, access controls, and regular review of our practices. However, no method of transmission over the Internet or electronic storage is completely secure; we cannot guarantee absolute security of your data.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">8. Your Rights and Choices</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal exceptions.</li>
                <li><strong>Restriction or objection:</strong> Request restriction of processing or object to certain processing (e.g., marketing).</li>
                <li><strong>Data portability:</strong> Request a copy of your data in a structured, machine-readable format where applicable.</li>
                <li><strong>Withdraw consent:</strong> Where processing is based on consent, you may withdraw consent at any time.</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at artifaiofficial@gmail.com. We will respond within a reasonable time and in accordance with applicable law. You may also have the right to lodge a complaint with a supervisory authority in your jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">9. International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer personal information from the European Economic Area, the United Kingdom, or other regions with restrictive data protection laws, we implement appropriate safeguards (such as standard contractual clauses or other approved mechanisms) to ensure your information remains protected in accordance with this Privacy Policy and applicable law.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">10. Children&apos;s Privacy</h2>
              <p>
                Our Site and Services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">11. Third-Party Links and Services</h2>
              <p>
                Our Site may contain links to third-party websites or services (e.g., Calendly, social media, external resources). This Privacy Policy does not apply to those third parties. We encourage you to read the privacy policies of any third-party sites or services you visit. We are not responsible for their privacy practices.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will post the updated policy on this page and update the &quot;Last updated&quot; date. For material changes, we may provide additional notice (e.g., by email or a prominent notice on our Site). Your continued use of our Site or Services after the effective date of changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-black mb-4">13. Contact Us</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our handling of your personal information, please contact us at:
              </p>
              <p className="mt-4">
                <strong>ArtifAI</strong><br />
                Email: <a href="mailto:artifaiofficial@gmail.com" className="text-primary underline hover:no-underline">artifaiofficial@gmail.com</a><br />
                Website: <a href="https://artifai.in" className="text-primary underline hover:no-underline">https://artifai.in</a>
              </p>
              <p className="mt-4">
                We will respond to your request as required by applicable law.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
