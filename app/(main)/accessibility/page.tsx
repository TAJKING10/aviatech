"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Our Commitment",
    content:
      "Aviatech Consulting is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.",
  },
  {
    title: "Standards",
    content:
      "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with disabilities.",
  },
  {
    title: "Features",
    content:
      "Our website is designed with keyboard navigability, sufficient colour contrast, descriptive link text, and responsive layouts suitable for a range of assistive technologies including screen readers.",
  },
  {
    title: "Feedback",
    content:
      "We welcome your feedback on the accessibility of our website. If you experience any barriers, please contact us at info@aviatech-consulting.com and we will endeavour to respond within 3 business days.",
  },
];

export default function AccessibilityPage() {
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
              Accessibility
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Accessibility Statement
            </h1>
            <p className="text-slate-500 text-sm mb-12">Last Updated: 1 April 2025</p>
          </motion.div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
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
