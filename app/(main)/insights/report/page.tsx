"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AutonomousFlightDeckReportPage() {
  return (
    <div className="bg-surface font-body text-on-surface overflow-x-hidden">
      <main className="pt-32 pb-24">

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-8 hover:gap-4 transition-all"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Insights
            </Link>

            <div className="flex items-center gap-4 mb-6 text-on-surface-variant text-xs uppercase tracking-widest font-bold">
              <span className="text-primary">Special Report</span>
              <span className="w-1 h-1 rounded-full bg-outline" />
              <span>March 2024</span>
              <span className="w-1 h-1 rounded-full bg-outline" />
              <span>14 Min Read</span>
            </div>

            <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-on-surface leading-tight tracking-tighter mb-6 max-w-4xl">
              The Future of Autonomous Flight Deck Integration
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-3xl">
              How advanced avionics automation, AI co-pilots, and next-generation human-machine interfaces are redefining the architecture of modern flight decks — and what this means for certification, operations, and training.
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMCxyneUccCBl8Mezch1SBJqOOmqIzxPQ-aspUSkQev7aFiqXWAyH_cYBP2Gu6dJx97FPhFPUTru52F4RAm5cyxV1IHlfDm8SY8ULoNTgo8od1hsHoK50suPCoBLnwSPLssuD8lMcBhbAEtT7wgwO_Qs2n-c9JOEOfstVuLq-qSfBXmZ_aglOOEMsiCgHBKufK3fiH-C0V1UB2Fo--ApTqF5K406TAmVAvF8HvX2b1Te2XJ_CxP0r6PqenBMwCgxbTrCgl_ZyXW230"
              alt="Autonomous flight deck cockpit"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/30 to-transparent" />
          </motion.div>
        </section>

        {/* Article Body */}
        <section className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Content */}
            <motion.div
              className="lg:col-span-8 prose-custom"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-8 text-on-surface leading-relaxed">

                <div>
                  <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-4">Executive Summary</h2>
                  <p className="text-on-surface-variant text-base leading-loose">
                    The commercial aviation sector stands at an inflection point. Autonomous systems — once confined to military applications and theoretical research — are now actively being integrated into the flight decks of modern commercial aircraft. This report examines the current state of autonomous flight deck technology, the regulatory landscape governing its adoption, and the strategic implications for airlines, MRO providers, and training organisations worldwide.
                  </p>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
                  <p className="text-primary font-bold text-lg leading-relaxed italic">
                    "By 2030, over 60% of newly certified commercial aircraft will feature level-3 or higher automation on primary flight controls — fundamentally changing the role of the pilot from operator to systems supervisor."
                  </p>
                  <p className="text-on-surface-variant text-sm mt-3 font-bold">— Aviatech Consulting Research Division, 2024</p>
                </div>

                <div>
                  <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-4">1. The Architecture Shift</h2>
                  <p className="text-on-surface-variant text-base leading-loose mb-4">
                    Traditional flight deck design centred on the principle of direct human control — every system state visible, every action intentional. The move towards autonomous integration introduces a fundamentally different paradigm: systems that monitor, predict, and act, with the human crew serving as the supervisory authority rather than the primary operator.
                  </p>
                  <p className="text-on-surface-variant text-base leading-loose">
                    This shift has profound implications for cockpit ergonomics, alert philosophy, crew training syllabi, and ultimately for the regulatory frameworks that govern airworthiness. The challenge is not purely technical — it is one of human factors, trust calibration, and operational culture.
                  </p>
                </div>

                <div>
                  <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-4">2. Key Technologies Driving Integration</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "AI-Assisted Decision Support",
                        desc: "Machine learning models trained on millions of flight hours now provide real-time anomaly detection, weather routing optimisation, and fuel efficiency recommendations — directly surfaced on the primary flight display.",
                      },
                      {
                        title: "Envelope Protection 2.0",
                        desc: "Next-generation envelope protection systems go beyond preventing exceedances. They actively anticipate degraded states and pre-position control surfaces, reducing crew workload during high-density operational phases.",
                      },
                      {
                        title: "Sensor Fusion & Redundancy",
                        desc: "Triple-redundant LIDAR, millimetre-wave radar, and advanced pitot-static synthesis provide situational awareness levels impossible with legacy sensor architectures — critical for autonomous go-around and CAT III operations.",
                      },
                      {
                        title: "Human-Machine Interface Evolution",
                        desc: "Touchscreen primary displays, voice-command integration, and gaze-tracking systems are replacing button-heavy panels, enabling faster mode selections and reducing task saturation during critical phases of flight.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-surface-container rounded-xl border border-outline-variant/10">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-primary font-bold text-sm">{i + 1}</span>
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
                  <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-4">3. Regulatory Landscape</h2>
                  <p className="text-on-surface-variant text-base leading-loose mb-4">
                    EASA and the FAA are both advancing regulatory frameworks to accommodate autonomous flight deck systems. EASA's Special Condition for Level E automation — published in late 2023 — establishes the first formal certification basis for systems capable of unsupervised autonomous actions during normal operations.
                  </p>
                  <p className="text-on-surface-variant text-base leading-loose">
                    The FAA's corresponding AC 25.1309-1B revision introduces updated safety assessment methodologies that explicitly account for AI-driven systems, including requirements for explainability and failure mode transparency. Both authorities are aligned on one principle: the human crew must always retain the capability — and the knowledge — to override any autonomous function.
                  </p>
                </div>

                <div>
                  <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-4">4. Training Implications</h2>
                  <p className="text-on-surface-variant text-base leading-loose mb-4">
                    Perhaps the most significant near-term consequence of autonomous integration is its impact on flight crew training requirements. Type rating syllabi are being restructured to emphasise system monitoring, automation trust calibration, and manual reversion skills — competencies that were previously assumed rather than explicitly trained.
                  </p>
                  <p className="text-on-surface-variant text-base leading-loose">
                    Aviatech Consulting's training division has developed revised competency frameworks aligned with EASA's Evidence-Based Training (EBT) methodology, incorporating autonomous systems awareness modules across all B1 and B2 licence categories. Operators transitioning to next-generation fleets should expect a 30–40% revision of their existing type training content.
                  </p>
                </div>

                <div>
                  <h2 className="font-headline font-extrabold text-2xl text-on-surface mb-4">5. Strategic Recommendations</h2>
                  <div className="space-y-3">
                    {[
                      "Begin autonomous systems familiarisation training for existing crews now — ahead of fleet transitions.",
                      "Engage with EASA and national authority working groups to contribute operational data to certification processes.",
                      "Review MRO capability gaps: autonomous systems require new diagnostic tools and technician competencies.",
                      "Conduct a fleet-level human factors audit to identify cockpit design elements that may conflict with autonomous integration.",
                      "Establish a dedicated cross-functional automation governance team with representation from operations, training, and safety.",
                    ].map((rec, i) => (
                      <div key={i} className="flex items-start gap-3 text-on-surface-variant text-sm leading-relaxed">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">check_circle</span>
                        {rec}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#001c3a] rounded-2xl p-8 text-white">
                  <h2 className="font-headline font-extrabold text-xl mb-3">Ready to Prepare Your Organisation?</h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Aviatech Consulting offers autonomous systems readiness assessments, training curriculum development, and regulatory compliance advisory for operators and MRO organisations planning next-generation fleet transitions.
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
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Report Meta */}
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 sticky top-32">
                <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface mb-5 border-b border-outline-variant/10 pb-3">Report Details</h3>
                <div className="space-y-4">
                  {[
                    { label: "Published", value: "March 2024" },
                    { label: "Category", value: "Special Report" },
                    { label: "Read Time", value: "14 minutes" },
                    { label: "Author", value: "Aviatech Research Division" },
                    { label: "Coverage", value: "EASA · FAA · Global" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-on-surface">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-outline-variant/10">
                  <Link
                    href="/booking"
                    className="w-full bg-[#001c3a] text-white px-5 py-3 rounded-lg font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-primary transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">school</span>
                    Book Training
                  </Link>
                </div>
              </div>

              {/* Related */}
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface mb-5 border-b border-outline-variant/10 pb-3">Related Insights</h3>
                <div className="space-y-4">
                  {[
                    { label: "Next-Gen Fleet Management: How AI is Redefining Efficiency", href: "/insights" },
                    { label: "Digital Trends in Aviation: Beyond the Passenger Experience", href: "/insights" },
                    { label: "Optimizing Fuel Efficiency through AI-Driven Pathfinding", href: "/insights" },
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
