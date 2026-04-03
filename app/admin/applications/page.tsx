"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const applicants = [
  {
    name: "Jonathan Vickers",
    role: "Sr. Avionics Engineer • Lufthansa",
    modules: ["SYSTEM_DYNAMICS_4", "FLIGHT_SAFETY_II"],
    date: "Oct 14, 2023",
    status: "Urgent Review",
    statusVariant: "error",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUlbWHk1ggD_IJ9oBjlXtiLAca0T1h2ZJXpAU7zGzAaS8DLgMV_i0WkSLJtxrxxpbQivJyIuJ6lYeDMM_x2e5Up4EiRQg41cBetk6vxZD0DSaJmNBWJQ6Qclj9XhgxtytjCAyvg7UfdMFtTK2kGKNv7hfKH5PnycdR5EZWcLTINBsT1cWlqfU1AO1C3gnG_7Oy4EAVuLd_ds9ZLlwhWaR8_l-UGklTZcoAUka2a1LZ4WNlntlvnkNATfcq_JKTyo604-E5aeFHNozq",
  },
  {
    name: "Elena Rodriguez",
    role: "Fleet Operations Manager • Qatar Airways",
    modules: ["STRATOSPHERIC_LOGISTICS"],
    date: "Oct 15, 2023",
    status: "Standard",
    statusVariant: "standard",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfoEjhEANH-S17yVahXJxq9inuvKnf7JBywMIB91LTN85LrlktxbzKtIthwEcZltrHBxAMI4tcHw0CafWda5AwkYCAGHtQr6hsPXXrJ-CEH5DtYK6iQPmk2zj2qR7uh8ny3yZDKB3SxjRCnv1EH7dcBNX6iBa-6yfdn3rAdc7FD-zvWy5v2bD_eMNBWVjQeKQ-Y8vk8eY-kQUo5yLn5Iug7HRs1X2e-sDoAr1nYlvZNkef_yk7RGVlOneSLYiMI3dZQ1Bbwkz23oHB",
  },
  {
    name: "Marcus Thorne",
    role: "Independent Consultant • AeroConsult",
    modules: ["JET_PROPULSION_X", "ADV_DIAGNOSTICS"],
    date: "Oct 16, 2023",
    status: "Consulting Priority",
    statusVariant: "secondary",
    img: null,
  },
  {
    name: "Samuel Zhang",
    role: "Data Analyst • Singapore Airlines",
    modules: ["PREDICTIVE_MAINTENANCE"],
    date: "Oct 16, 2023",
    status: "Standard",
    statusVariant: "standard",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA51AOTsKlwGJzwSyDQ6s44cAShs341113WZxRq8SHspy7WlNw9L0F83_q7UhEeM3HGbcdwwO6ZoZ7n3uyppztuc4Ee1RFp7ksXnTGUDjC3IqvCbGS5Ix64tNie82DRrQu4czrHMGwi_5Uk5eCxAaaZUOooWg2KYb2pR3vTFrWRM6CF92-sbZ_CUnTl7yMUw8xZlrDzLXv021lg3hiKKoT3nBNBbVOBgzz7IA7MQtkat3bF_KpQ3kVptaQQSv9CTFKA03MNyZ3N9kWR",
  },
];

export default function ApplicationsPage() {
  return (
    <div className="p-12 max-w-[1400px] mx-auto">
      {/* Page Header */}
      <section className="mb-16 flex justify-between items-end">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface mb-4">Application Review</h2>
          <p className="text-on-surface-variant font-body text-lg leading-relaxed">Processing queue for Aviatech Consulting. High-volume candidate requests filtered by specialized aerospace modules and priority clearance status.</p>
        </motion.div>
        <div className="flex gap-2">
          <span className="bg-surface-container-high px-4 py-2 rounded-full font-headline text-[11px] font-bold uppercase tracking-widest text-primary flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            14 Active Reviews
          </span>
        </div>
      </section>

      {/* Metrics Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <motion.div 
          className="bg-surface-container-lowest p-6 rounded-xl border border-slate-100/50 shadow-sm transition-all hover:bg-surface-container-high group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="font-headline text-[10px] uppercase tracking-widest text-slate-500 mb-2">Total Queue</p>
          <h3 className="text-3xl font-headline font-extrabold text-on-surface">128</h3>
          <div className="mt-4 flex items-center gap-1 text-primary text-xs font-bold">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>+12% this week</span>
          </div>
        </motion.div>
        <motion.div 
          className="bg-surface-container-lowest p-6 rounded-xl border border-slate-100/50 shadow-sm transition-all hover:bg-surface-container-high"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-headline text-[10px] uppercase tracking-widest text-slate-500 mb-2">High Priority</p>
          <h3 className="text-3xl font-headline font-extrabold text-error">24</h3>
          <div className="mt-4 flex items-center gap-1 text-slate-400 text-xs font-medium italic">
            <span>Requires Immediate Action</span>
          </div>
        </motion.div>
        <motion.div 
          className="col-span-1 md:col-span-2 primary-gradient p-6 rounded-xl shadow-lg shadow-primary/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative z-10 text-white">
            <p className="font-headline text-[10px] uppercase tracking-widest opacity-80 mb-2">Certification Velocity</p>
            <h3 className="text-3xl font-headline font-extrabold">Advanced Diagnostics</h3>
            <p className="mt-2 text-sm opacity-90 max-w-xs">Most requested module in last 24 hours. Consider increasing trainer capacity.</p>
          </div>
          <span className="absolute -right-4 -bottom-4 text-white/10 material-symbols-outlined text-[120px]">speed</span>
        </motion.div>
      </section>

      {/* List View */}
      <section className="space-y-4">
        <div className="grid grid-cols-12 px-6 py-4 font-headline text-[10px] uppercase tracking-widest text-slate-500 font-bold">
          <div className="col-span-4">Candidate Profile</div>
          <div className="col-span-3">Assigned Modules</div>
          <div className="col-span-2">Submission Date</div>
          <div className="col-span-2">Priority Status</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        {applicants.map((applicant, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="grid grid-cols-12 px-6 py-8 items-center bg-surface-container-lowest rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.02)] transition-all hover:bg-surface-container-high group border border-transparent hover:border-primary/10"
          >
            <div className="col-span-4 flex items-center gap-4">
              {applicant.img ? (
                <div className="relative w-12 h-12 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <Image src={applicant.img} alt={applicant.name} fill className="object-cover" />
                </div>
              ) : (
                <div className="w-12 h-12 bg-surface-variant rounded-lg flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined">person</span>
                </div>
              )}
              <div>
                <h4 className="font-headline font-bold text-lg text-on-surface">{applicant.name}</h4>
                <p className="text-xs text-slate-500 font-medium">{applicant.role}</p>
              </div>
            </div>
            <div className="col-span-3 flex flex-wrap gap-2">
              {applicant.modules.map((m, j) => (
                <span key={j} className="bg-surface-container px-3 py-1 rounded text-[10px] font-bold text-primary-container">{m}</span>
              ))}
            </div>
            <div className="col-span-2 text-sm font-medium text-on-surface-variant">
              {applicant.date}
            </div>
            <div className="col-span-2">
              <span className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter",
                applicant.statusVariant === "error" ? "bg-error-container text-error" :
                applicant.statusVariant === "secondary" ? "bg-secondary-container/30 text-secondary" :
                "bg-surface-container-high text-on-surface-variant"
              )}>
                {applicant.statusVariant === "error" && <span className="w-1.5 h-1.5 rounded-full bg-error"></span>}
                {applicant.status}
              </span>
            </div>
            <div className="col-span-1 text-right">
              <Link href="#" className="text-primary font-headline text-[10px] font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4">View Details</Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Pagination */}
      <section className="mt-12 flex justify-between items-center px-6">
        <p className="text-xs text-slate-500 font-medium">Showing {applicants.length} of 128 candidates in queue</p>
        <div className="flex gap-4">
          <button className="flex items-center gap-1 text-on-surface-variant text-xs font-bold uppercase tracking-widest hover:text-primary transition-all">
            <span className="material-symbols-outlined text-sm">chevron_left</span>
            Previous
          </button>
          <button className="flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-all">
            Next Batch
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </section>
    </div>
  );
}
