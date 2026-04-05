"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the Aviatech Consulting website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.`,
  },
  {
    title: "2. Services",
    content: `Aviatech Consulting provides aerospace and aviation consulting services, including technical training, regulatory compliance advisory, engineering consultancy, and supply chain optimisation. The scope of each engagement is defined in a separate written agreement or training application.`,
  },
  {
    title: "3. Training Applications",
    content: `Submission of a training application does not constitute confirmation of enrolment. All applications are subject to review and acceptance by Aviatech Consulting. We reserve the right to accept or decline applications at our discretion. Confirmed enrolments will receive written confirmation.`,
  },
  {
    title: "4. Fees and Payment",
    content: `Training and consultancy fees are as agreed in writing prior to commencement. All fees are due in accordance with the payment schedule specified in the service agreement. Late payments may be subject to interest charges. Fees are non-refundable except as provided in our cancellation policy.`,
  },
  {
    title: "5. Cancellation and Refunds",
    content: `Cancellations made more than 14 days before the scheduled training commencement date may be eligible for a refund, less an administrative fee. Cancellations within 14 days of commencement are non-refundable. In the event Aviatech Consulting cancels a session, a full refund or rescheduling will be offered.`,
  },
  {
    title: "6. Intellectual Property",
    content: `All training materials, course content, documentation, and other materials provided by Aviatech Consulting are proprietary and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our materials without prior written consent.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `Aviatech Consulting shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability for any claim arising from our services shall not exceed the fees paid by you for the specific service giving rise to the claim.`,
  },
  {
    title: "8. Regulatory Compliance",
    content: `Training programmes are designed to support compliance with applicable aviation regulations including EASA Part-66, GCAA requirements, and other relevant authorities. Successful completion of training does not guarantee regulatory approval or certification, which remains the responsibility of the relevant competent authority.`,
  },
  {
    title: "9. Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the competent courts.`,
  },
  {
    title: "10. Changes to Terms",
    content: `We reserve the right to modify these terms at any time. Updated terms will be posted on this page with a revised effective date. Continued use of our services following any changes constitutes acceptance of the new terms.`,
  },
  {
    title: "11. Contact",
    content: `For any questions regarding these Terms of Service, please contact us at info@aviatech-consulting.com.`,
  },
];

export default function TermsPage() {
  return (
    <div className="bg-surface font-body text-on-surface overflow-x-hidden">
      <main className="pt-32 pb-24">
        <section className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="uppercase tracking-[0.2em] text-primary font-bold mb-6 block text-sm">
              Legal
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-500 text-sm mb-12">
              Effective Date: 1 January 2025 &nbsp;·&nbsp; Last Updated: 1 April 2025
            </p>
            <p className="text-slate-600 leading-relaxed mb-12">
              Please read these Terms of Service carefully before using our website or engaging our services. These terms constitute a legally binding agreement between you and Aviatech Consulting.
            </p>
          </motion.div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="border-t border-slate-200 pt-8"
              >
                <h2 className="font-headline text-lg font-bold text-slate-900 mb-3">
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
