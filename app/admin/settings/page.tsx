"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  return (
    <div className="max-w-6xl mx-auto px-12 pt-16 pb-20">
      {/* Page Header */}
      <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block py-1 px-3 bg-surface-container-high rounded text-[10px] font-bold uppercase tracking-[0.2em] text-primary">System Architecture</span>
          <h1 className="text-5xl font-extrabold font-headline tracking-tighter text-on-surface max-w-xl">Site Content Configuration</h1>
          <p className="text-on-surface-variant max-w-md leading-relaxed">Update the visual and informational backbone of the Aviatech administrative interface and public portals.</p>
        </motion.div>
        <div className="flex gap-4 pb-2">
          <button className="px-6 py-3 border border-outline-variant/30 rounded-md text-sm font-semibold hover:bg-surface-container-low transition-all">Discard Changes</button>
          <button className="px-8 py-3 primary-gradient text-on-primary rounded-md text-sm font-semibold shadow-lg shadow-primary/10 hover:opacity-90 transition-all active:scale-95">Save Changes</button>
        </div>
      </div>

      {/* Bento Layout Settings */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand Identity Section */}
        <motion.section 
          className="col-span-12 lg:col-span-7 bg-surface-container-low rounded-xl p-10 relative overflow-hidden group border border-outline-variant/10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative z-10 space-y-8">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Brand Identity</h2>
              <div className="flex flex-col md:flex-row items-start gap-10">
                <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center border border-outline-variant/10 shadow-sm relative group/logo cursor-pointer overflow-hidden">
                  <span className="material-symbols-outlined text-4xl text-slate-300 group-hover/logo:scale-110 transition-transform">cloud_upload</span>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/logo:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[10px] font-bold uppercase text-primary">Replace</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4 w-full">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Legal Brand Name</label>
                    <input className="w-full bg-white border-none rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 shadow-sm outline-none" type="text" defaultValue="Aviatech Consulting" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Brand Tagline</label>
                    <input className="w-full bg-white border-none rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 shadow-sm outline-none" placeholder="Engineering High-Altitude Solutions" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-8xl">fingerprint</span>
          </div>
        </motion.section>

        {/* Contact Quick-View */}
        <motion.section 
          className="col-span-12 lg:col-span-5 bg-surface-container rounded-xl p-10 flex flex-col justify-between border border-outline-variant/10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-8">Direct Communications</h2>
            <div className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Global Support Email</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <span className="material-symbols-outlined text-xs text-slate-400">alternate_email</span>
                  </span>
                  <input className="w-full bg-surface-container-lowest border-none rounded-md pl-10 pr-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 shadow-sm outline-none" type="email" defaultValue="admin@aviatech.global" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Operations Hotline</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <span className="material-symbols-outlined text-xs text-slate-400">call</span>
                  </span>
                  <input className="w-full bg-surface-container-lowest border-none rounded-md pl-10 pr-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 shadow-sm outline-none" type="text" defaultValue="+1 (555) 012-7890" />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 flex items-center gap-2 text-primary font-bold text-[11px] uppercase tracking-widest cursor-pointer hover:underline group">
            <span>Configure Geo-Routing</span>
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">north_east</span>
          </div>
        </motion.section>

        {/* Hero Section Editor */}
        <motion.section 
          className="col-span-12 bg-surface-container-lowest rounded-xl p-10 border border-outline-variant/10 shadow-[0px_40px_80px_rgba(22,28,34,0.03)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-4 space-y-4">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Public Landing Hero</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">The primary messaging seen by prospects. This content should be technically precise and high-impact.</p>
              <div className="pt-6">
                <div className="aspect-video rounded-lg overflow-hidden bg-surface-container relative group">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz_EyyOu3uzuRGyHg-lXUygFXIeXHBZJUW3yWPuI-50KXEU7C-WZtuHbsZuxmEidVb6YOGiBJX5hNh41H1H_vqYdwQZ-cRc9KnLPcWYza8qkN8lLU7CA58pAlUagZs3N1ef5q-mZm4MHaU5IywTS-45T3DrHNBinUUwQMyyLn3D_7P_bPb06BxhGA5_wJp8Ls8yO7hze9joUYHF3Xye2yAEegio5BIEfeCkwMCQJt59Q7TFwdO1uBs5ByGYK8ALnJL9P4EM1Hf62IH"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest hover:bg-white/30 transition-all">Change Asset</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Headline Content</label>
                <textarea className="w-full bg-surface border border-outline-variant/10 rounded-md px-4 py-3 text-lg font-headline font-bold focus:ring-1 focus:ring-primary/20 leading-tight outline-none" rows={2} defaultValue="Elevating Aerospace Standards Through Precision Consulting." />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Sub-Headline Context</label>
                <textarea className="w-full bg-surface border border-outline-variant/10 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 leading-relaxed text-on-surface-variant outline-none" rows={3} defaultValue="We bridge the gap between complex aeronautical regulations and operational excellence, providing world-class audits and training modules for the next generation of flight." />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="flex-1 space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Primary CTA</label>
                  <input className="w-full bg-surface border border-outline-variant/10 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 outline-none" type="text" defaultValue="Explore Operations" />
                </div>
                <div className="flex-1 space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Secondary CTA</label>
                  <input className="w-full bg-surface border border-outline-variant/10 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 outline-none" type="text" defaultValue="View Flight Data" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer Architecture */}
        <motion.section 
          className="col-span-12 lg:col-span-8 bg-surface-container-high rounded-xl p-10 border border-outline-variant/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-8">Footer Architecture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Solutions", links: ["Regulatory Audits", "Technical Training", "Fleet Management"] },
              { title: "Corporate", links: ["About Us", "Global Reach", "Careers"] },
              { title: "Legal", links: ["Privacy Policy", "Security Protocols"] },
            ].map((section, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-[10px] font-black uppercase text-slate-600 border-b border-slate-300/30 pb-2">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j} className="text-xs text-primary flex items-center justify-between group cursor-pointer hover:underline">
                      {link}
                      <span className="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100 transition-opacity">drag_handle</span>
                    </li>
                  ))}
                  <li className="text-xs text-slate-400 italic py-1 border-t border-dashed border-slate-300/30 cursor-pointer hover:text-primary transition-colors">+ Add link</li>
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* System Meta */}
        <motion.section 
          className="col-span-12 lg:col-span-4 bg-primary-container p-10 rounded-xl text-on-primary-container flex flex-col justify-between shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-70 mb-4">Instance Status</h2>
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse"></span>
              <span className="text-2xl font-headline font-black text-white">Live & Production</span>
            </div>
            <div className="space-y-4 opacity-80 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Last Deployment</span>
                <span className="font-bold">14m ago</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Config Version</span>
                <span className="font-bold">v8.42.0</span>
              </div>
            </div>
          </div>
          <button className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] transition-all mt-8">
            View Deployment History
          </button>
        </motion.section>
      </div>

      {/* Global Footer Placeholder */}
      <footer className="mt-24 pt-12 border-t border-slate-200/30 text-center">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold font-headline">Aviatech Global © 2024 — Precision Engineering Services</p>
      </footer>
    </div>
  );
}
