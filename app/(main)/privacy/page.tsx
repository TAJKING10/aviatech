"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, including when you submit a training application, contact us, or use our services. This may include your name, email address, phone number, date of birth, nationality, place of birth, company affiliation, and any other information you choose to provide.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to: process and manage your training applications; communicate with you about your application status; respond to your enquiries; send administrative information; improve our services; and comply with legal obligations under aviation regulatory frameworks including EASA, GCAA, and applicable national authorities.`,
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with regulatory authorities as required by law, or with service providers who assist us in operating our business under strict confidentiality agreements.`,
  },
  {
    title: "4. Data Security",
    content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. All data transmissions are encrypted and access to personal data is restricted to authorised personnel only.`,
  },
  {
    title: "5. Data Retention",
    content: `We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, accounting, or reporting requirements. Training records may be retained for periods required by applicable aviation regulations.`,
  },
  {
    title: "6. Your Rights",
    content: `You have the right to access, correct, or delete your personal information held by us. You may also request restriction of processing or object to processing of your data. To exercise any of these rights, please contact us at info@aviatech-consulting.com.`,
  },
  {
    title: "7. Cookies",
    content: `Our website uses essential cookies necessary for the website to function properly. We do not use tracking or advertising cookies. You may disable cookies through your browser settings, though this may affect the functionality of certain features.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated effective date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "9. Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us at: Aviatech Consulting, Email: info@aviatech-consulting.com`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-surface font-body text-on-surface">
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
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm mb-12">
              Effective Date: 1 January 2025 &nbsp;·&nbsp; Last Updated: 1 April 2025
            </p>
            <p className="text-slate-600 leading-relaxed mb-12">
              Aviatech Consulting ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website or services.
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
