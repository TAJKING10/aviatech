"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary/20 overflow-x-hidden">
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 items-end"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div>
              <motion.span 
                variants={itemVariants}
                className="uppercase tracking-[0.2em] text-primary font-bold mb-6 block text-sm"
              >
                Our Identity
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-extrabold font-headline leading-[1.1] tracking-tighter text-on-surface mb-8"
              >
                Navigating the <br />Stratosphere of <br /><span className="text-primary-container">Complexity.</span>
              </motion.h1>
            </div>
            <motion.div variants={itemVariants} className="pb-4">
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-md">
                In an era of rapid technological acceleration, Aviatech Consulting serves as the steady hand for global aviation leaders navigating intricate digital transformations.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Company Story (Bento Style) */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <motion.div 
                className="md:col-span-8 bg-surface-container-lowest p-12 rounded-xl flex flex-col justify-center"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-headline font-bold mb-6">The Aviatech Story</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6 text-lg">
                  Founded by aerospace engineers and digital architects, Aviatech Consulting was born out of a single realization: the gap between legacy aviation systems and modern computational potential is widening.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  We don't just advise; we engineer the transition. Our mission is to decode technical complexity into operational excellence, ensuring that every organization we touch achieves a higher state of readiness and innovation.
                </p>
              </motion.div>
              <motion.div 
                className="md:col-span-4 h-full min-h-[400px] rounded-xl overflow-hidden relative group"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrKzoUgDs7tkPRYO2zNkQ4IOrB28Sd-B6bCM-cAnu6WMvd9Iron_mhVv_MGr2z176wol2kqdl0SUp4jcQEoNF2Hwtr0YLZLFW6kSXYJeCjnHCoOPeOS7sLmbrPqwOsjqFrhlBRaPC9CgRYHBLAGWnw0efeOlhmOHfEkZ_gRu88J-tDfMHGgRusHYzCOIAvvuSc0nZCEOe2dt6ZtNiGmyWPGvDZWN-ZXwP28EEQit3Uxe6ixYyTxSTMRIydj1eBpnYquRZftFYeO2yR"
                  alt="Technical Engineering"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Principles (Instrument Cluster Grid) */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-start mb-20">
              <div className="max-w-xl">
                <h2 className="text-5xl font-headline font-bold tracking-tight mb-4">Core Principles</h2>
                <div className="h-1 w-24 bg-primary mb-8"></div>
              </div>
              <p className="text-on-surface-variant max-w-sm font-medium italic">
                &quot;Precision is not just a standard; it is the fundamental frequency of our operations.&quot;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
              {[
                { icon: "target", title: "Precision", desc: "Zero margin for error in every technical blueprint we deliver." },
                { icon: "verified_user", title: "Trust", desc: "Building long-term alliances through transparency and integrity." },
                { icon: "rocket_launch", title: "Innovation", desc: "Pushing beyond conventional boundaries to define the future of flight." },
                { icon: "visibility", title: "Clarity", desc: "Distilling vast datasets into actionable intelligence." },
                { icon: "handshake", title: "Partnership", desc: "Your mission becomes our objective. Seamlessly integrated." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface-container p-10 hover:bg-surface-container-highest transition-colors duration-300"
                >
                  <span className="material-symbols-outlined text-primary mb-6 text-4xl">{item.icon}</span>
                  <h3 className="font-headline font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach (Editorial Split) */}
        <section className="bg-on-surface text-surface py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <motion.div 
                  className="aspect-square bg-surface-container-highest/10 p-8 rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden grayscale opacity-80">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3qoZ1BBqjdlaW1sg1a-BpIF1shI3bjUvyCWcUr8y39kVzdwaKNmfR3AmJWPL4NP9rRoiYc-PSRdqrefzhavP00cuIAui-bmMgcZMJbkh2kV4Apmob2CAFhRVhko5-9ukW_MKBQO8PFd9dhzKpY6RWTYHBBeyATYY8r2slV4_M97vA-25ixDvsd9zHgY2XgkBtVkfa723czhwQTqe-kSyTNREYibuQPmskRDUcux8CyMiNhoDC5n1hPo4wfkMLEoxXzE-07uhT1J2n"
                      alt="Technical Analysis"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                {/* Floating Glass Card */}
                <motion.div 
                  className="absolute -bottom-10 -right-10 bg-white/10 backdrop-blur-xl p-8 rounded-lg border border-white/10 max-w-xs shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-white font-headline font-bold text-lg mb-2">Systems Thinking</p>
                  <p className="text-white/60 text-xs leading-relaxed">Our philosophy relies on viewing every organization as an interconnected flight system, where every adjustment impacts the whole trajectory.</p>
                </motion.div>
              </div>
              <div>
                <motion.span 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[0.2em] text-primary-container font-bold mb-6 block text-sm"
                >
                  Our Approach
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl font-headline font-bold mb-10 leading-tight"
                >
                  Engineering <br />the Transition.
                </motion.h2>
                <ul className="space-y-12">
                  {[
                    { num: "01", title: "Diagnosis & Auditing", desc: "A deep-dive analysis into legacy infrastructure to identify bottlenecks and security vulnerabilities within your tech stack." },
                    { num: "02", title: "Strategic Flightpath", desc: "Developing a bespoke digital transformation roadmap that aligns with both operational requirements and future-proof scaling." },
                    { num: "03", title: "Technical Implementation", desc: "Executing complex integrations with surgical precision, ensuring zero downtime and maximum security compliance." },
                  ].map((step, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-6"
                    >
                      <span className="text-primary-container font-headline font-extrabold text-2xl">{step.num}</span>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                        <p className="text-surface/60 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-4xl font-headline font-bold mb-8">Ready to elevate your technical standards?</h2>
            <Link href="/contact" className="bg-primary hover:bg-primary-container text-white px-10 py-5 rounded-md font-headline font-bold transition-all transform hover:-translate-y-1 inline-block">
              Partner With Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
