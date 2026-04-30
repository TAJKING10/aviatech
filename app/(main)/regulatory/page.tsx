"use client";

import { motion } from "framer-motion";

const frameworks = [
  {
    code: "EASA Part-66",
    title: "Aircraft Maintenance Licencing",
    description:
      "Our training programmes are structured in accordance with EASA Part-66 requirements, covering all B1 and B2 licence category modules. Aviatech Consulting supports candidates preparing for EASA-approved examinations and licence applications.",
  },
  {
    code: "EASA Part-147",
    title: "Maintenance Training Organisation",
    description:
      "We align our training delivery with EASA Part-147 standards for approved maintenance training organisations, ensuring consistent quality, approved syllabi, and regulatory traceability in all training records.",
  },
  {
    code: "GCAA",
    title: "UAE General Civil Aviation Authority",
    description:
      "Aviatech Consulting provides advisory and training services aligned with GCAA regulatory requirements for operations within the UAE civil aviation framework, including licence conversion and regulatory gap analysis.",
  },
  {
    code: "ICAO",
    title: "International Civil Aviation Organisation",
    description:
      "Our consultancy services draw on ICAO Standards and Recommended Practices (SARPs), ensuring that our clients' operations meet internationally recognised safety and compliance benchmarks.",
  },
  {
    code: "SMS",
    title: "Safety Management Systems",
    description:
      "We assist organisations in developing and implementing Safety Management Systems (SMS) in accordance with ICAO Annex 19 and applicable national authority requirements, from initial gap analysis through to full implementation support.",
  },
];

const faqs = [
  {
    q: "Does completing a training module guarantee a licence?",
    a: "No. Training module completion supports your preparation for regulatory examinations and licence applications. Licences are issued solely by the relevant competent authority (e.g., EASA, GCAA) following successful examination and meeting all regulatory requirements.",
  },
  {
    q: "Are your training programmes approved by EASA?",
    a: "Our training is structured in alignment with EASA Part-66 syllabi and Part-147 standards. Specific approvals depend on the engagement. Please contact us for details on the regulatory status of specific programmes.",
  },
  {
    q: "Can you assist with regulatory submissions?",
    a: "Yes. Our consultancy services include support for regulatory documentation, gap analysis, and submissions to civil aviation authorities. Contact us at info@aviatech-consulting.com to discuss your specific requirements.",
  },
];

export default function RegulatoryPage() {
  return (
    <div className="bg-surface font-body text-on-surface">
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="uppercase tracking-[0.2em] text-primary font-bold mb-6 block text-sm">
              Compliance
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Regulatory Compliance
            </h1>
            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
              Aviatech Consulting operates within the framework of internationally recognised aviation regulatory standards. Our training and consultancy services are designed to support compliance with the requirements of leading civil aviation authorities.
            </p>
          </motion.div>
        </section>

        {/* Frameworks */}
        <section className="max-w-4xl mx-auto px-8 mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-2xl font-bold text-slate-900 mb-10"
          >
            Regulatory Frameworks We Support
          </motion.h2>
          <div className="space-y-6">
            {frameworks.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.07 }}
                className="flex gap-6 border border-slate-200 rounded-2xl p-6 hover:border-primary/40 transition-colors"
              >
                <div className="shrink-0 w-28 h-12 flex items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-primary font-bold text-sm text-center leading-tight">{f.code}</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-headline text-2xl font-bold text-slate-900 mb-10"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.07 }}
                className="border-t border-slate-200 pt-8"
              >
                <h3 className="font-headline font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
