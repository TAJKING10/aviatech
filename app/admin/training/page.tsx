"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const modules = [
  {
    code: "M1",
    title: "Mathematics",
    desc: "Arithmetic, Algebra, and Geometry fundamentals.",
    category: "B1.1, B1.2, B2",
    status: "Published",
    date: "Oct 24, 2023",
  },
  {
    code: "M2",
    title: "Physics",
    desc: "Statics, Kinetics, and Fluid Dynamics.",
    category: "B1, B2, B3",
    status: "Published",
    date: "Nov 12, 2023",
  },
  {
    code: "M11",
    title: "Aeroplane Aerodynamics",
    desc: "Structural Systems and Aircraft Dynamics.",
    category: "B1.1, B1.3",
    status: "Draft",
    date: "Dec 01, 2023",
  },
  {
    code: "M17",
    title: "Propeller",
    desc: "Construction, Maintenance, and Control systems.",
    category: "B1.1, B1.2",
    status: "Published",
    date: "Dec 15, 2023",
  },
];

export default function TrainingPage() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-screen">
      {/* Editorial Header Section */}
      <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <nav className="flex items-center gap-2 mb-4">
            <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Curriculum</span>
            <span className="material-symbols-outlined text-slate-300 text-xs">chevron_right</span>
            <span className="text-primary text-[10px] font-bold uppercase tracking-wider">Technical Training</span>
          </nav>
          <h2 className="text-5xl font-extrabold font-headline tracking-tighter text-on-surface mb-4">Training Modules</h2>
          <p className="text-slate-500 text-lg font-light leading-relaxed">Manage and audit the core aerospace engineering curriculum. Ensure all modules align with Part-66 regulatory standards.</p>
        </motion.div>
        <div className="flex gap-4">
          <button className="bg-surface-container border border-outline-variant/15 text-on-surface px-6 py-3 rounded-md font-headline text-[11px] font-bold uppercase tracking-widest hover:bg-surface-container-high transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">file_download</span>
            Export PDF
          </button>
          <button className="primary-gradient text-white px-8 py-3 rounded-md font-headline text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-primary/25 flex items-center gap-2 hover:scale-[1.02] transition-transform active:scale-95">
            <span className="material-symbols-outlined text-sm">add</span>
            Add New Module
          </button>
        </div>
      </section>

      {/* Technical Data Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <motion.div 
          className="md:col-span-3 bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div>
            <span className="material-symbols-outlined text-primary mb-4">analytics</span>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Active Modules</h4>
          </div>
          <div className="mt-8">
            <p className="text-4xl font-headline font-extrabold text-on-surface">17 <span className="text-sm font-normal text-slate-400">/ 24</span></p>
            <div className="w-full bg-surface-variant h-1 mt-4 rounded-full overflow-hidden">
              <motion.div 
                className="bg-primary h-full"
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:col-span-3 bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/10 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <span className="material-symbols-outlined text-tertiary mb-4">pending_actions</span>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Draft Status</h4>
          </div>
          <div className="mt-8 text-4xl font-headline font-extrabold text-on-surface">
            04
            <p className="text-[10px] font-medium text-slate-400 mt-2">Ready for review</p>
          </div>
        </motion.div>

        <motion.div 
          className="md:col-span-6 relative overflow-hidden rounded-xl h-48 group shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOlERpSioWe3Pk3bVZShASVFqE-xfhLTlV-GcpWLq5xxux6216mPfkSme5gUMyPaXKXCrBq9XSVIoomxtn3h43hbL59Zz3l5bagnfpBIz2stjLvzlPdA73tk3VNl8g-iAO2scLpIzD7_Y7TXW0fEDL0H9lvNrT3oVOkou_1XTVFmOKUlEWkWzTGVv4l-zTOdYnr7B6Hyc9FuDQpI1aPfHdlVQTyV5qzyaAGf7XdybTnb2vDSetlrihUR2BAIQTchb9lQPdQ2Youd5x"
            alt="Aerospace workshop"
            fill
            className="object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex flex-col justify-center px-10">
            <h3 className="text-white text-2xl font-headline font-bold">Regulatory Compliance</h3>
            <p className="text-white/80 text-sm max-w-xs mt-2">All current modules are verified against EASA Phase 4 protocols.</p>
          </div>
        </motion.div>
      </div>

      {/* Data Table */}
      <motion.div 
        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="p-6 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-4">
            <h3 className="font-headline font-bold text-on-surface">Module Directory</h3>
            <div className="flex gap-2">
              <span className="bg-primary-container/10 text-primary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">All Modules</span>
              <span className="bg-surface-container text-slate-500 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">B1.1 Category</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">sort</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Code</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Title</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Category</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Last Updated</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {modules.map((m, i) => (
                <motion.tr 
                  key={i}
                  className="hover:bg-surface-container-low transition-colors group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <td className="px-8 py-5 font-headline font-bold text-primary">{m.code}</td>
                  <td className="px-8 py-5">
                    <p className="font-bold text-sm text-on-surface">{m.title}</p>
                    <p className="text-[11px] text-slate-400 font-body">{m.desc}</p>
                  </td>
                  <td className="px-8 py-5 text-sm text-slate-600 font-medium">{m.category}</td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      m.status === "Published" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    )}>
                      <span className={cn("w-1.5 h-1.5 rounded-full", m.status === "Published" ? "bg-emerald-600" : "bg-amber-600")}></span>
                      {m.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-xs text-slate-500 font-medium">{m.date}</td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0 translate-x-4">
                      <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                      <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
                      <button className="text-slate-400 hover:text-error"><span className="material-symbols-outlined text-[18px]">archive</span></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-surface-container-low/30 border-t border-slate-100 flex justify-between items-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Showing 1 to 4 of 17 Modules</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-400 hover:bg-white transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-bold text-xs shadow-md">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:bg-white font-bold text-xs transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:bg-white font-bold text-xs transition-colors">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-400 hover:bg-white transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
          </div>
        </div>
      </motion.div>

      {/* Footer Info */}
      <footer className="mt-20 py-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <span className="font-headline font-black tracking-tighter text-slate-300 text-lg">Nexus v4.2.0</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">System Online / Server: Zurich-Alpha</span>
          </div>
        </div>
        <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest font-headline">
          © 2024 Aviatech Consulting. All Technical Data Confidential.
        </div>
      </footer>
    </div>
  );
}
