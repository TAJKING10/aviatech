"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MaintenanceCaseStudyPage() {
  return (
    <div className="bg-surface font-body text-on-surface">
      <main className="pt-32 pb-24">

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-8 hover:gap-4 transition-all"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Services
            </Link>

            <div className="flex items-center gap-4 mb-6 text-on-surface-variant text-xs uppercase tracking-widest font-bold">
              <span className="text-primary">Case Study</span>
              <span className="w-1 h-1 rounded-full bg-outline" />
              <span>Operational Spotlight</span>
              <span className="w-1 h-1 rounded-full bg-outline" />
              <span>8 Min Read</span>
            </div>

            <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-on-surface leading-tight tracking-tighter mb-6 max-w-4xl">
              Redefining Maintenance Paradigms
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-3xl">
              How Aviatech Consulting helped a global carrier reduce unplanned maintenance events by 22% through predictive data modelling, real-time sensor integration, and a complete overhaul of their maintenance decision architecture.
            </p>
          </motion.div>
        </section>

        {/* Hero Image */}
        <section className="max-w-5xl mx-auto px-8 mb-16">
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[21/9] shadow-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCThyflQa2vEjUiwaRJPyeINUhj6n2vXPKB6A-okvrCgedt5qZDK4Sp2KCFPeNMWVX0ZSJvcPX6KY6SK6cu-ynIE39_BKI5I7dBpt8fJ4xsj1K9YmFsV8BFF2OO-xBoHxLayjPhRQaU37Ksxg_hIGF7sFVagzPSr3sf8kQx6dX4PoYApNjU4M50O770WNHI_iImqlBbVXtjUZupGDrJ2BH7MvlCR9BI0jkH9j1k-2BSlUbpK8UJuKhHlZxrexMLHoAK4M5DcQ3WEMtK"
              alt="Modern aircraft maintenance hangar"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/30 to-transparent" />
          </motion.div>
        </section>

        {/* Stats Banner */}
        <section className="max-w-5xl mx-auto px-8 mb-16">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { value: "22%", label: "Reduction in unplanned maintenance events" },
              { value: "$4.2M", label: "Annual cost savings achieved" },
              { value: "18 mo", label: "Full deployment timeline" },
            ].map((stat, i) => (
              <div key={i} className="bg-surface-container rounded-2xl p-8 border border-outline-variant/10 text-center">
                <p className="font-headline font-extrabold text-5xl text-primary mb-2">{stat.value}</p>
                <p className="text-on-surface-variant text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Article Body */}
        <section className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Content */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="space-y-10 text-on-surface leading-relaxed">

                <div>
                  <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-4">The Challenge</h2>
                  <p className="text-on-surface-variant text-base leading-loose mb-4">
                    Our client — a Tier-1 carrier operating a mixed-fleet of 140 narrow and wide-body aircraft across four continents — was experiencing an escalating rate of unplanned maintenance events. In the 18 months prior to engagement, AOG (Aircraft on Ground) incidents had increased by 17%, driven primarily by late detection of component degradation in hydraulic and environmental control systems.
                  </p>
                  <p className="text-on-surface-variant text-base leading-loose">
                    Legacy time-based maintenance scheduling meant that components were either replaced too early — generating unnecessary cost — or failed before their scheduled inspection window. The carrier's maintenance control centre was reactive by design, responding to failures rather than preventing them.
                  </p>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
                  <p className="text-primary font-bold text-lg leading-relaxed italic">
                    "We were spending enormous resources responding to failures that, in hindsight, were entirely predictable. The data was there — we just didn't have the architecture to act on it in time."
                  </p>
                  <p className="text-on-surface-variant text-sm mt-3 font-bold">— VP of Technical Operations, Client Carrier</p>
                </div>

                <div>
                  <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-4">Our Approach</h2>
                  <p className="text-on-surface-variant text-base leading-loose mb-6">
                    Aviatech deployed a three-phase engagement model designed to move the carrier from reactive maintenance scheduling to a fully condition-based maintenance (CBM) posture, supported by real-time sensor telemetry and predictive analytics.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        phase: "Phase 1",
                        title: "Data Landscape Audit",
                        desc: "We conducted a full inventory of existing sensor outputs, ACARS data streams, and maintenance records across the entire fleet. This revealed that 68% of the data required for predictive modelling was already being collected — but not actioned.",
                      },
                      {
                        phase: "Phase 2",
                        title: "Predictive Model Development",
                        desc: "Our engineering team developed component-specific degradation models for 14 high-risk system categories, including hydraulic actuators, bleed air valves, and cabin pressurisation components. Models were trained on six years of historical fleet data and validated against known failure events.",
                      },
                      {
                        phase: "Phase 3",
                        title: "Integration & Operationalisation",
                        desc: "Predictive outputs were integrated directly into the carrier's existing MRO platform via API, surfacing actionable maintenance recommendations to line maintenance and planning teams with a 14-day advance warning window.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-surface-container rounded-xl border border-outline-variant/10">
                        <div className="shrink-0">
                          <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">{item.phase}</span>
                        </div>
                        <div>
                          <h3 className="font-headline font-bold text-on-surface mb-1">{item.title}</h3>
                          <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-4">Results</h2>
                  <p className="text-on-surface-variant text-base leading-loose mb-4">
                    Within 12 months of full deployment, the carrier recorded a 22% reduction in unplanned maintenance events fleet-wide. AOG incidents attributable to the monitored system categories dropped by 31%. Total annual maintenance cost savings were independently verified at $4.2M, against a total programme investment of $1.1M — a 3.8× return in year one.
                  </p>
                  <p className="text-on-surface-variant text-base leading-loose">
                    Beyond the financial metrics, the carrier's maintenance planning team reported a fundamental shift in operational culture — from firefighting to forward planning. Maintenance windows became predictable, parts procurement more efficient, and crew scheduling significantly less disrupted by unplanned technical delays.
                  </p>
                </div>

                <div>
                  <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-4">Key Outcomes</h2>
                  <div className="space-y-3">
                    {[
                      "22% reduction in unplanned maintenance events across all monitored system categories",
                      "31% decrease in AOG incidents attributable to hydraulic and ECS system failures",
                      "$4.2M verified annual cost saving against a $1.1M programme investment",
                      "14-day average advance warning window for predicted component degradation",
                      "Full integration with existing MRO platform — no legacy system replacement required",
                      "Regulatory compliance maintained throughout: all CBM protocols validated against EASA Part-145",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-on-surface-variant text-sm leading-relaxed">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">check_circle</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-[#001c3a] rounded-2xl p-8 text-white">
                  <h2 className="font-headline font-extrabold text-xl mb-3">Transform Your Maintenance Operations</h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Aviatech Consulting delivers predictive maintenance programmes, sensor integration strategies, and MRO digital transformation roadmaps tailored to your fleet and operational context.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm hover:brightness-110 transition-all active:scale-95"
                  >
                    Contact Our Team <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </Link>
                </div>

              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="lg:col-span-4 space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 sticky top-32">
                <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface mb-5 border-b border-outline-variant/10 pb-3">Case Study Details</h3>
                <div className="space-y-4">
                  {[
                    { label: "Published", value: "Q1 2024" },
                    { label: "Type", value: "Case Study" },
                    { label: "Read Time", value: "8 minutes" },
                    { label: "Industry", value: "Commercial Aviation" },
                    { label: "Fleet Size", value: "140 Aircraft" },
                    { label: "Compliance", value: "EASA Part-145" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-on-surface">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-outline-variant/10 space-y-3">
                  <Link
                    href="/booking"
                    className="w-full bg-[#001c3a] text-white px-5 py-3 rounded-lg font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-primary transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">school</span>
                    Book Training
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full border border-outline-variant/30 text-on-surface px-5 py-3 rounded-lg font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-surface-container transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">mail</span>
                    Enquire Now
                  </Link>
                </div>
              </div>

              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface mb-5 border-b border-outline-variant/10 pb-3">Related Insights</h3>
                <div className="space-y-4">
                  {[
                    { label: "The Future of Autonomous Flight Deck Integration", href: "/insights/report" },
                    { label: "Next-Gen Fleet Management: How AI is Redefining Efficiency", href: "/insights" },
                    { label: "Next-Generation Maintenance Compliance Frameworks", href: "/insights" },
                  ].map((item, i) => (
                    <Link key={i} href={item.href} className="flex items-start gap-3 group">
                      <span className="material-symbols-outlined text-primary text-sm mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors leading-snug">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>

          </div>
        </section>
      </main>
    </div>
  );
}
