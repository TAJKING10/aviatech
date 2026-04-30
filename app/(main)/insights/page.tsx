"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import NewsletterForm from "@/components/NewsletterForm";

export default function InsightsPage() {
  return (
    <div className="bg-surface font-body text-on-surface">
      <main className="pt-32 pb-24">
        {/* Hero Section / Featured Article */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-label uppercase tracking-[0.2em] text-xs font-bold">Featured Insight</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mt-4 max-w-4xl text-on-surface">
              The Future of Flight Operations
            </h1>
          </motion.div>
          <motion.div 
            className="relative group overflow-hidden rounded-xl aspect-[21/9] bg-surface-container shadow-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtGZRd-ASAgu22WY0xWke1dVOdcHOHHoPGToYX2NIHviZplAgvDbzETtP6wzNG0-GP6UePPArg2mG91E7Wuvq4R5gH178ssjDS0lTKN14m7J12FYgJEVRKi6aqE9fZQKBzaWdc370CWNQe97140jVhf06dtu_YrB5xkCZvAQQmEkgNl8gzferKbg5ORoG5NwFcfZjXkbZIAVeBW9aqAEHN5ltgWfYX5j8hPTzxIsAfxUA8PKJFAHkcZDP7-5fD7DMtn8bVa98mqDor"
              alt="cockpit view"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex flex-col justify-end p-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4 text-white/80 font-label text-xs uppercase tracking-wider">
                  <span>Strategy</span>
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                  <span>12 Min Read</span>
                </div>
                <h2 className="text-3xl font-headline font-bold text-white mb-6">
                  Next-Gen Fleet Management: How AI is Redefining Efficiency in Commercial Aviation
                </h2>
                <Link href="/insights/fleet-management" className="flex items-center gap-2 text-white font-headline font-bold border-b-2 border-white pb-1 hover:gap-4 transition-all w-fit group">
                  Read Article <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Search and Filters */}
        <section className="max-w-7xl mx-auto px-8 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-outline-variant/10 pb-8">
            <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
              {["All Insights", "Digital Trends", "Operational Efficiency", "Technology Strategy"].map((filter, i) => (
                <button 
                  key={i} 
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-label font-medium whitespace-nowrap transition-colors",
                    i === 0 ? "bg-primary text-on-primary" : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full bg-surface-container border-none rounded-lg pl-12 pr-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none" placeholder="Search articles..." type="text" />
            </div>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Article 1: Digital Trends */}
            <motion.article 
              className="md:col-span-8 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-surface-container rounded-xl overflow-hidden aspect-[16/8] mb-6 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnXm9yGbp9ztCnbBjp5XU6z00PUi6y8DPVDmzi5NIzqHVnC4LA6k5aok6_--t0WEmLd6fm1UDvFBwF-qkvsCaLBlmR_VB897Kv6dzILVpGGNXYHMGsgZl62QGz3atKmTxIcAWdmdJ-fcmt2CpTKciryZfOmmdZHf5HTCXta_vnOK0Hdj2Ue3EjHnscXjEkGF5nDkc55aldkPLxMoect-GrDRsjVLXuEHLRxsF-5b5XWKnUrVO3H8GLd39rvpw56LR2rMyScFGrnR83"
                  alt="airport terminal"
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary font-label text-xs font-bold uppercase tracking-widest">Digital trends in aviation</span>
                <span className="text-outline font-label text-xs">March 14, 2024</span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-on-surface mb-4 group-hover:text-primary transition-colors leading-tight">
                Digital trends in aviation: Beyond the Passenger Experience
              </h3>
              <p className="text-on-surface-variant leading-relaxed max-w-2xl">
                Exploring how data-driven decision making is migrating from customer-facing apps to the deep core of maintenance cycles and fuel logistics.
              </p>
            </motion.article>

            {/* Article 2: Technology Strategy */}
            <motion.article 
              className="md:col-span-4 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-surface-container rounded-xl overflow-hidden aspect-square mb-6 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8A_CCTPmrMEwti-0kNu86jhzrGVypKHK4jZhygDGxql7GA8I_zZoW_VNLfMJNBQ_OUwGFMhAdE6qCy_jl7hJyLMjXEhoUCRlrZAEh5e_l2shJ5TavVlmURebUnHaPNsKpCV56xwm1nsa_AnkLeNaWJgpEVjrkgdVpV3hFoE3OAzB3iSvCquRWJfd4vY32fBCmIOILWkKICfbbmqVB_yWjWZaACw_gZL54rRkMA_kTMoIYs0btOd0mANAO_cB9O7UwmIuXjVeMrtsP"
                  alt="digital network"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="mb-4">
                <span className="text-primary font-label text-xs font-bold uppercase tracking-widest">Technology Strategy</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                Technology strategy for growing firms
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Scaling aviation infrastructure requires a modular approach to legacy system modernization.
              </p>
            </motion.article>

            {/* Article 3: Operational Efficiency */}
            <motion.article 
              className="md:col-span-4 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-surface-container-high rounded-xl p-8 h-full flex flex-col justify-between hover:bg-primary transition-colors duration-500 shadow-sm">
                <div>
                  <span className="text-primary group-hover:text-white/80 font-label text-xs font-bold uppercase tracking-widest mb-6 block transition-colors">Performance</span>
                  <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-white leading-tight transition-colors">
                    Improving operational efficiency in ground handling
                  </h3>
                </div>
                <div className="mt-8">
                  <p className="text-on-surface-variant group-hover:text-white/70 text-sm mb-6 transition-colors">
                    Optimization algorithms are reducing turnaround times by up to 15% in major regional hubs.
                  </p>
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors">trending_up</span>
                </div>
              </div>
            </motion.article>

            {/* Article 4: Case Study */}
            <motion.article 
              className="md:col-span-8 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center h-full bg-surface-container/50 rounded-xl p-6 hover:bg-surface-container transition-colors shadow-sm">
                <div className="w-full md:w-1/2 rounded-xl overflow-hidden aspect-[4/3] shadow-inner">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJc7VmxfZfhSNt2UJK73JQ6q4edAtFDn1y84tvo0nT_Ukqvxv7gBnm9jf1ksC83X6Lfp58WHeeoJhGGOolLawmzV0vGxPB1Uy5hLXvXVZ952aYJqbBK-wzszLkWGow_GYCIzIUgH0_VwExQGx6UXGF-fKvOrBeMta18i0N5tYx8a7T0pgZOTB_t4uIA12v3u7DgpFfdAZJ0p8ZL0dUnfRlb5wqYwNVjoHf1MWRam6k9iWJoE4LtELl7RHNkad4nhlB-FzjcU633C1"
                    alt="consultants"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="text-primary font-label text-xs font-bold uppercase tracking-widest mb-4 block">Case Study</span>
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                    Transforming a Regional Carrier&apos;s Maintenance Architecture
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    How Aviatech implemented a custom predictive maintenance solution that saved over $4.2M in annual unpredicted downtime.
                  </p>
                  <Link href="/insights/regional-carrier" className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 group/btn">
                    View Case Study <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">open_in_new</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-32 py-24 bg-on-surface rounded-3xl mx-8 shadow-2xl">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-headline font-bold text-surface mb-6">Stay Ahead of the Curve</h2>
              <p className="text-surface/70 mb-10">
                Join 5,000+ aerospace leaders receiving our monthly briefing on technology, strategy, and operational excellence.
              </p>
              <NewsletterForm variant="dark" />
              <p className="text-xs text-surface/40 mt-6">No spam. Only high-altitude insights. Unsubscribe at any time.</p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
