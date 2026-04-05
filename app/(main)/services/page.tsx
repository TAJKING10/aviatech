"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import NewsletterForm from "@/components/NewsletterForm";

const services = [
  {
    icon: "flight_takeoff",
    title: "Aviation Technology Consulting",
    desc: "Deploying cutting-edge avionics systems and ground control software architectures that meet stringent FAA/EASA standards.",
  },
  {
    icon: "dynamic_form",
    title: "Digital Transformation Advisory",
    desc: "Modernizing legacy airline operations through cloud-native migration and integrated digital ecosystem planning.",
  },
  {
    icon: "settings_suggest",
    title: "Systems & Process Optimization",
    desc: "Refining workflows from maintenance tracking to passenger manifest management for maximum throughput and reliability.",
  },
  {
    icon: "account_tree",
    title: "Technical Project Support",
    desc: "End-to-end technical oversight for complex aerospace engineering initiatives and multi-vendor integrations.",
  },
  {
    icon: "analytics",
    title: "Business Analysis",
    desc: "Data-driven feasibility studies and market gap analysis for emerging aerospace technologies and logistics solutions.",
  },
  {
    icon: "database",
    title: "Software & Data Consulting",
    desc: "Architecting secure, real-time data pipelines for telemetry processing and predictive maintenance analytics.",
  },
  {
    icon: "speed",
    title: "Operational Efficiency",
    desc: "Reducing turnaround times and fuel burn through algorithmic route optimization and ground crew coordination.",
  },
  {
    icon: "groups_3",
    title: "Training & Change Support",
    desc: "Facilitating smooth adoption of new technologies through specialized training programs for pilots, engineers, and staff.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-surface font-body text-on-surface overflow-x-hidden">
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <header className="max-w-7xl mx-auto px-8 mb-24">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">Expertise & Solutions</span>
              <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] text-on-surface mb-8">
                Precision-Engineered <br /><span className="text-gradient-blue">Aviation Intelligence</span>
              </h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">
                Leveraging decades of aerospace experience to navigate the complexities of digital flight decks and operational infrastructure.
              </p>
            </div>
          </motion.div>
        </header>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/20 rounded-xl overflow-hidden shadow-sm border border-outline-variant/20">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface-container-lowest p-10 hover:bg-surface-container transition-colors duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/5 rounded-lg mb-8 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold tracking-tight mb-4">{service.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{service.desc}</p>
                </div>
                <button className="flex items-center text-primary font-headline font-bold text-xs uppercase tracking-widest group/btn">
                  Request Info 
                  <span className="material-symbols-outlined ml-2 text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </button>
              </motion.div>
            ))}
            
            {/* Call to Action Card */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-primary p-10 flex flex-col justify-center items-start text-on-primary"
            >
              <h3 className="text-3xl font-headline font-extrabold mb-6 leading-tight">Tailored Aviation Solutions</h3>
              <p className="text-primary-fixed/80 text-sm mb-10 leading-relaxed">Don&apos;t see exactly what you&apos;re looking for? Our consulting team builds bespoke architectures for unique aerospace challenges.</p>
              <Link href="/contact" className="bg-surface-container-lowest text-primary px-8 py-3 rounded font-headline font-bold text-sm tracking-tight transition-all hover:shadow-xl active:scale-95">
                Inquire Custom Project
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Study / Visual Break */}
        <section className="mt-40 max-w-7xl mx-auto px-8">
          <motion.div 
            className="relative rounded-2xl overflow-hidden min-h-[500px] flex items-center group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCThyflQa2vEjUiwaRJPyeINUhj6n2vXPKB6A-okvrCgedt5qZDK4Sp2KCFPeNMWVX0ZSJvcPX6KY6SK6cu-ynIE39_BKI5I7dBpt8fJ4xsj1K9YmFsV8BFF2OO-xBoHxLayjPhRQaU37Ksxg_hIGF7sFVagzPSr3sf8kQx6dX4PoYApNjU4M50O770WNHI_iImqlBbVXtjUZupGDrJ2BH7MvlCR9BI0jkH9j1k-2BSlUbpK8UJuKhHlZxrexMLHoAK4M5DcQ3WEMtK"
              alt="modern glass hangar"
              fill
              className="object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-on-surface via-on-surface/60 to-transparent"></div>
            <div className="relative z-10 max-w-2xl p-12 lg:p-20">
              <span className="text-primary-fixed text-xs font-bold uppercase tracking-[0.3em] mb-4 block text-primary">Operational Spotlight</span>
              <h2 className="text-white text-5xl font-headline font-extrabold tracking-tighter mb-6">Redefining Maintenance Paradigms</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">How we helped a global carrier reduce unplanned maintenance by 22% using predictive data modeling and sensor integration.</p>
              <Link href="/insights/maintenance" className="text-white border border-white/30 px-6 py-3 rounded-md hover:bg-white hover:text-on-surface transition-all font-headline font-bold text-sm tracking-tighter inline-block">
                Read Case Study
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Start Your Trajectory */}
        <section className="mt-40 max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-headline font-bold tracking-tight mb-4">Start Your Trajectory</h2>
            <p className="text-on-surface-variant mb-10">Connect with an Aviatech specialist today to discuss your technical roadmap.</p>
            <NewsletterForm variant="request" />
          </motion.div>
        </section>
      </main>
    </div>
  );
}
