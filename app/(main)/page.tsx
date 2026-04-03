"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [bookingStep, setBookingStep] = useState(1);

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
    <div className="bg-surface font-body text-on-background antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTyhRE_s9wbZKfznDOjXjn3aQvb9ECIrqSpFovOTr820vniKxPjiI_O4pcG56xWA7_GDRO-TU0_x_znc694eglxqjcWpASm87an-Rlr8-guUoubNhgfKJlJtcZ_TPeJVeWpyqJdXBLaREZveJDj7y_K6hNZvY9IB3AczlyPWURVwlhgPjpQNs3fxa6dCKkCiwn2UUYg36kihqhoWzb-jcMTJcNqOk-GunN03FQY3qsonXLVDBHfhUMTsYtzRrZAJHQiiTwyExpkRxJ"
            alt="aviation horizon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-background/90 via-on-background/40 to-transparent"></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="lg:col-span-8">
            <motion.span 
              variants={itemVariants}
              className="inline-block bg-primary-container/20 text-primary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 font-headline"
            >
              Engineering Excellence
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="text-white font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8"
            >
              Engineering <span className="text-primary-container">Clarity.</span><br />
              Technology Confidence.<br />
              Aviation Focus.
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-slate-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light"
            >
              Navigating the complexities of modern aerospace with precision-engineered consultancy and regulatory expertise at Aviatech Consulting.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href="/services" className="primary-gradient text-white px-8 py-4 rounded-lg font-bold text-lg atmospheric-shadow hover:brightness-110 transition-all">
                Explore Services
              </Link>
              <Link href="/insights" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Professional Training Booking Module */}
      <section className="max-w-6xl mx-auto -mt-32 relative z-20 mb-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden border border-outline-variant/10"
        >
          <AnimatePresence mode="wait">
            {bookingStep === 1 ? (
              <motion.div 
                key="step-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                id="step-1"
              >
                <div className="bg-surface-container-low px-8 py-10 border-b border-outline-variant/10">
                  <div className="flex justify-center items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded bg-[#001c3a] text-white flex items-center justify-center font-bold text-lg">1</span>
                      <span className="font-headline font-bold text-on-surface">Select Modules</span>
                    </div>
                    <div className="w-16 h-px bg-outline-variant/30"></div>
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-lg">2</span>
                      <span className="font-headline font-medium text-on-surface-variant">Your Details</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h2 className="font-headline text-2xl font-bold mb-8 text-[#001c3a]">Select Your Modules</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-on-surface-variant">Category</label>
                      <div className="relative">
                        <select className="w-full appearance-none bg-white border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                          <option>B1.1 - Aeroplanes Turbine</option>
                          <option>B1.2 - Aeroplanes Piston</option>
                          <option>B1.3 - Helicopters Turbine</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-on-surface-variant">Training Path</label>
                      <div className="relative">
                        <select className="w-full appearance-none bg-white border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                          <option>Training + Examination</option>
                          <option>Examination Only</option>
                          <option>Training Only</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-on-surface-variant">Available Modules (13)</h3>
                    <button className="text-sm font-medium text-on-surface-variant bg-surface-container hover:bg-surface-container-high px-4 py-2 rounded-lg transition-colors">Select All</button>
                  </div>
                  <div className="border border-outline-variant/20 rounded-xl overflow-hidden mb-10 max-h-[400px] overflow-y-auto">
                    <div className="divide-y divide-outline-variant/10">
                      {["Mathematics", "Physics", "Electrical Fundamentals", "Electronic Fundamentals", "Digital Techniques / Electronic Instrument Systems", "Materials and Hardware", "Maintenance Practices"].map((module, i) => (
                        <label key={i} className="flex items-center gap-4 p-4 hover:bg-surface transition-colors cursor-pointer group">
                          <input className="w-5 h-5 rounded border-outline-variant/50 text-primary focus:ring-primary" type="checkbox" defaultChecked={i === 0} />
                          <span className="font-bold text-[#001c3a] min-w-[3rem]">M{i + 1}</span>
                          <span className="text-on-surface-variant">{module}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button 
                      className="bg-[#001c3a] text-white px-10 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-primary transition-all active:scale-95 shadow-lg"
                      onClick={() => setBookingStep(2)}
                    >
                      Continue <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : bookingStep === 2 ? (
              <motion.div 
                key="step-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                id="step-2"
              >
                <div className="bg-surface-container-low px-8 py-10 border-b border-outline-variant/10">
                  <div className="flex justify-center items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded bg-[#00cba9] text-white flex items-center justify-center">
                        <span className="material-symbols-outlined font-bold">check</span>
                      </span>
                      <span className="font-headline font-medium text-on-surface">Select Modules</span>
                    </div>
                    <div className="w-16 h-px bg-[#00cba9]"></div>
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded bg-[#001c3a] text-white flex items-center justify-center font-bold text-lg">2</span>
                      <span className="font-headline font-bold text-on-surface">Your Details</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                      <h2 className="font-headline text-2xl font-bold text-[#001c3a] mb-6">Your Details</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {["First Name *", "Surname *", "Email *", "Phone *", "Date of Birth *", "Place of Birth", "Nationality", "Company/Organization"].map((label, i) => (
                          <div key={i} className="space-y-2">
                            <label className="block text-sm font-semibold text-on-surface-variant">{label}</label>
                            <input 
                              className="w-full bg-white border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none" 
                              placeholder={label.replace(" *", "")} 
                              type={label.includes("Email") ? "email" : label.includes("Date") ? "date" : label.includes("Phone") ? "tel" : "text"}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-on-surface-variant">Additional Notes</label>
                        <textarea className="w-full bg-white border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="Any additional information..." rows={4}></textarea>
                      </div>
                      <div className="flex gap-4 pt-4">
                        <button 
                          className="bg-surface-container text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-container-high transition-all"
                          onClick={() => setBookingStep(1)}
                        >
                          Back
                        </button>
                        <button 
                          className="primary-gradient text-white px-10 py-4 rounded-lg font-bold flex-1 hover:brightness-110 transition-all active:scale-95 shadow-lg"
                          onClick={() => setBookingStep(3)}
                        >
                          Submit Application
                        </button>
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/20 sticky top-32">
                        <h3 className="font-headline font-bold text-xl text-[#001c3a] mb-6">Application Summary</h3>
                        <div className="space-y-6">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Category</p>
                            <p className="font-medium text-on-surface">B1.1</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Path</p>
                            <p className="font-medium text-on-surface">Training + Examination</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Selected Modules</p>
                            <ul className="space-y-2 mt-2">
                              <li className="flex items-center gap-2 text-sm text-on-surface">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                M1 Mathematics
                              </li>
                              <li className="flex items-center gap-2 text-sm text-on-surface opacity-60">
                                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                                ... more selected
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="step-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-16 text-center"
              >
                <div className="w-24 h-24 bg-[#00cba9] text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                    className="material-symbols-outlined text-5xl font-bold"
                  >
                    check
                  </motion.span>
                </div>
                <h2 className="text-4xl font-headline font-extrabold text-[#001c3a] mb-4">Application Submitted!</h2>
                <p className="text-on-surface-variant text-lg max-w-md mx-auto mb-10 leading-relaxed">
                  Your training module application has been successfully received. Our operations team will review your details and contact you within 24 hours.
                </p>
                <div className="bg-surface-container-low rounded-xl p-8 max-w-sm mx-auto mb-10 border border-outline-variant/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Reference Number</p>
                  <p className="text-2xl font-headline font-black text-primary tracking-widest">AV-842-TX</p>
                </div>
                <button 
                  className="bg-[#001c3a] text-white px-10 py-4 rounded-lg font-bold hover:bg-primary transition-all active:scale-95 shadow-lg"
                  onClick={() => setBookingStep(1)}
                >
                  Return to Homepage
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Why Aviatech Section */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold font-headline uppercase text-xs tracking-[0.2em] mb-4 block">Proven Performance</span>
              <h2 className="font-headline font-extrabold text-4xl lg:text-5xl mb-8 leading-tight">Why Leading Carriers Trust Aviatech</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12">Our methodology is built on instrument-grade accuracy and decades of tier-one aerospace engineering experience.</p>
              <div className="space-y-4">
                {[
                  { icon: "verified", label: "ISO 9001:2015 Certified Operations" },
                  { icon: "shield", label: "Tier-1 Security Compliance" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-outline-variant/5">
                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                    <span className="font-medium text-on-surface">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { value: "100%", label: "Regulatory Compliance", desc: "Zero variance recorded in global regulatory audits for all managed consultancy projects over 15 years." },
                { value: "24%", label: "Operational Cost Reduction", desc: "Average maintenance cost reduction achieved through our proprietary predictive lifecycle modeling." },
                { value: "500+", label: "Aircraft Optimized", desc: "Our frameworks currently power navigation and maintenance systems for over 500 wide-body aircraft globally." },
                { value: "40%", label: "Faster Deployment", desc: "Accelerated time-to-market for new digital avionics interfaces through rapid prototyping loops." },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-12 rounded-2xl flex flex-col justify-between border border-outline-variant/10 shadow-sm hover:shadow-md transition-all"
                >
                  <div>
                    <span className="text-6xl font-headline font-extrabold text-primary mb-6 block">{stat.value}</span>
                    <h3 className="text-2xl font-bold mb-4">{stat.label}</h3>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-bold font-headline uppercase text-xs tracking-[0.2em] mb-4 block">Knowledge Center</span>
              <h2 className="font-headline font-extrabold text-4xl lg:text-5xl">Aviation Insights</h2>
            </div>
            <Link href="/insights" className="group text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Browse all insights
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[700px]">
            <motion.div 
              className="md:col-span-7 relative group overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMCxyneUccCBl8Mezch1SBJqOOmqIzxPQ-aspUSkQev7aFiqXWAyH_cYBP2Gu6dJx97FPhFPUTru52F4RAm5cyxV1IHlfDm8SY8ULoNTgo8od1hsHoK50suPCoBLnwSPLssuD8lMcBhbAEtT7wgwO_Qs2n-c9JOEOfstVuLq-qSfBXmZ_aglOOEMsiCgHBKufK3fiH-C0V1UB2Fo--ApTqF5K406TAmVAvF8HvX2b1Te2XJ_CxP0r6PqenBMwCgxbTrCgl_ZyXW230"
                alt="cockpit view"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Special Report</span>
                <h3 className="text-white font-headline text-3xl md:text-4xl font-extrabold mb-6 max-w-lg leading-tight">
                  The Future of Autonomous Flight Deck Integration
                </h3>
                <Link href="/insights/report" className="bg-white text-on-background px-6 py-3 rounded-lg font-bold w-fit hover:bg-primary-container hover:text-white transition-colors atmospheric-shadow">
                  Read Report
                </Link>
              </div>
            </motion.div>
            <div className="md:col-span-5 grid grid-rows-2 gap-8">
              {[
                { category: "Case Study", title: "Optimizing Fuel Efficiency through AI-Driven Pathfinding", desc: "How a major transatlantic carrier saved $12M annually through algorithmic route optimization." },
                { category: "Whitepaper", title: "Next-Generation Maintenance Compliance Frameworks", desc: "A technical deep-dive into EASA/FAA regulatory alignment for digital records." },
              ].map((insight, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-surface-container p-8 rounded-2xl flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all duration-500 border border-outline-variant/10"
                >
                  <div className="space-y-4">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest">{insight.category}</span>
                    <h4 className="font-headline font-bold text-2xl group-hover:text-primary transition-colors leading-tight">{insight.title}</h4>
                  </div>
                  <p className="text-on-surface-variant line-clamp-2 leading-relaxed">{insight.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
