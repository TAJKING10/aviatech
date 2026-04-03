"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <div className="bg-surface font-body text-on-surface overflow-x-hidden">
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:col-span-8">
              <span className="inline-block font-label uppercase tracking-[0.2rem] text-primary text-xs font-bold mb-4">Get in Touch</span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
                Let’s discuss your <br />
                <span className="text-gradient-blue">next project</span>.
              </h1>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-on-surface-variant text-lg leading-relaxed font-body">
                Elevating aerospace ventures through strategic engineering and operational precision. Our experts are ready to pilot your next breakthrough.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Contact Content Grid */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Inquiry Form */}
            <motion.div 
              className="lg:col-span-7 bg-surface-container-lowest p-10 rounded-xl shadow-[0_20px_40px_rgba(22,28,34,0.03)] border border-outline-variant/15"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-headline text-2xl font-bold mb-8 text-on-surface">Send an Inquiry</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">Full Name</label>
                  <input className="w-full bg-surface-container border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none text-on-surface placeholder:text-outline-variant" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">Email Address</label>
                  <input className="w-full bg-surface-container border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none text-on-surface placeholder:text-outline-variant" placeholder="john@company.com" type="email" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">Subject</label>
                  <select className="w-full bg-surface-container border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none text-on-surface">
                    <option>Aerospace Strategy</option>
                    <option>Engineering Consulting</option>
                    <option>Supply Chain Optimization</option>
                    <option>Digital Transformation</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">Message</label>
                  <textarea className="w-full bg-surface-container border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none text-on-surface placeholder:text-outline-variant" placeholder="Tell us about your project goals..." rows={5}></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full md:w-auto primary-gradient text-white font-headline font-bold px-10 py-4 rounded-lg shadow-lg hover:translate-y-[-2px] transition-all active:scale-95" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <div className="lg:col-span-5 space-y-12">
              <div className="grid grid-cols-1 gap-8">
                {[
                  { icon: "mail", title: "Email Us", details: ["connect@aviatech.com", "support@aviatech.com"] },
                  { icon: "call", title: "Call Our Office", details: ["+1 (555) 890-4422", "Mon - Fri, 9am - 6pm EST"] },
                  { icon: "location_on", title: "Global Headquarters", details: ["1200 Innovation Way, Suite 400", "Aerospace District, Seattle, WA 98101"] },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-start gap-6 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
                  >
                    <div className="bg-surface-container-high p-4 rounded-xl text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg mb-1 text-on-surface">{item.title}</h4>
                      {item.details.map((detail, j) => (
                        <p key={j} className="text-on-surface-variant font-body">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div 
                className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-inner bg-surface-container border border-outline-variant/15"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="absolute inset-0 grayscale opacity-80 mix-blend-multiply bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfi0R6gpaWt_VNCUScxI4rmsO4WSgSR5MI79xDshUsBW3tK0a0tQVzChJbpgHaLi2kn4CZpLDfmNrKI2TXFtYNZuPvEWBRLeaZMk_2-MSQfE7LZWXDoI4TZnOz34G_dn5jGh-IGclw6eVZdTzmmFtXor79pzkf8QkjNw1kcp86tJcem3bgwLk1odmS33Qunr8qFYyPDFBHlcKJ6AJfIwYntJlx_5M5RLetlCCsvXv3ljVFVv-MCgHfY2eGgvYVNveZLpew12WAme2Q')" }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary text-on-primary p-3 rounded-full shadow-2xl animate-pulse">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>near_me</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-on-surface shadow-sm">
                  HQ Location
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
