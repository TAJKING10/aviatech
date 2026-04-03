"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const bookings = [
  {
    name: "Jonathan Vance",
    email: "j.vance@aerocorp.com",
    category: "Avionics",
    path: "Advanced Radar Systems",
    modules: 12,
    date: "Oct 24, 2023",
    status: "Confirmed",
    initials: "JV",
    color: "bg-secondary-container text-on-secondary-container",
  },
  {
    name: "Elena Rodriguez",
    email: "e.rod@skyline.io",
    category: "Propulsion",
    path: "Next-Gen Turbofans",
    modules: 8,
    date: "Oct 26, 2023",
    status: "Pending",
    initials: "ER",
    color: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
  {
    name: "Marcus Kael",
    email: "m.kael@vector.com",
    category: "Aerodynamics",
    path: "Hypersonic Fluid Dynamics",
    modules: 15,
    date: "Oct 27, 2023",
    status: "Rejected",
    initials: "MK",
    color: "bg-primary-fixed text-on-primary-fixed",
  },
  {
    name: "Sarah Takeda",
    email: "s.takeda@globalair.net",
    category: "Flight Control",
    path: "Autonomous Docking Systems",
    modules: 6,
    date: "Oct 28, 2023",
    status: "Confirmed",
    initials: "ST",
    color: "bg-secondary-fixed text-on-secondary-fixed",
  },
];

export default function BookingsPage() {
  return (
    <div className="p-12 max-w-[1400px] mx-auto">
      {/* Page Header */}
      <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3 block">Operations Deck</span>
          <h2 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-4">Bookings Management</h2>
          <p className="text-on-surface-variant font-body leading-relaxed opacity-80">
            Oversee the full lifecycle of training module applications. Monitor candidate progress, manage institutional paths, and authorize high-precision training sequences.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <button className="primary-gradient text-white px-8 py-4 rounded-md flex items-center gap-3 font-bold text-sm tracking-wide shadow-lg hover:shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
            <span className="material-symbols-outlined">add_circle</span>
            Add New Booking
          </button>
        </motion.div>
      </section>

      {/* Stats Overview */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm border-l-4 border-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Active Candidates</h3>
              <p className="text-4xl font-headline font-extrabold text-on-surface">1,284</p>
            </div>
            <div className="text-right">
              <span className="text-primary font-bold text-sm">+12% vs last month</span>
              <div className="h-2 w-32 bg-surface-container rounded-full mt-3 overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="bg-surface-container p-8 rounded-xl flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Pending Review</h3>
          <p className="text-4xl font-headline font-extrabold text-error">42</p>
          <p className="text-xs text-on-surface-variant mt-2">Requires immediate flight authorization</p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="mb-6">
        <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-outline text-lg">filter_list</span>
            <span className="text-xs font-bold uppercase tracking-tighter text-outline">Quick Filters:</span>
          </div>
          <div className="flex gap-2">
            {["All Bookings", "Aerodynamics", "Avionics Systems", "Flight Control"].map((f, i) => (
              <button key={i} className={cn(
                "px-4 py-1.5 text-xs font-bold rounded-full transition-colors",
                i === 0 ? "bg-primary text-white" : "bg-white text-on-surface-variant hover:bg-surface-container-high"
              )}>
                {f}
              </button>
            ))}
          </div>
          <div className="ml-auto">
            <select className="bg-white border-none text-xs font-bold rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary/20 outline-none">
              <option>Status: All</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="pb-20">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline">Candidate Name</th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline">Category</th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline">Training Path</th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline">Modules</th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline">Date Submitted</th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline text-center">Status</th>
                <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high">
              {bookings.map((booking, i) => (
                <motion.tr 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-surface-container-low/50 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs", booking.color)}>
                        {booking.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">{booking.name}</p>
                        <p className="text-[10px] text-outline">{booking.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">{booking.category}</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-surface-container rounded text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">{booking.path}</span>
                  </td>
                  <td className="px-6 py-5 text-sm font-headline font-bold text-on-surface">{booking.modules}</td>
                  <td className="px-6 py-5 text-sm text-outline">{booking.date}</td>
                  <td className="px-6 py-5 text-center">
                    <span className={cn(
                      "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                      booking.status === "Confirmed" ? "bg-green-100 text-green-700" :
                      booking.status === "Pending" ? "bg-amber-100 text-amber-700" :
                      "bg-red-100 text-red-700"
                    )}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right space-x-2">
                    <button className="text-primary hover:bg-primary/10 p-2 rounded transition-colors">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button className="text-on-surface opacity-60 hover:opacity-100 hover:bg-surface-container p-2 rounded transition-colors">
                      <span className="material-symbols-outlined text-lg">visibility</span>
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          
          <div className="px-6 py-4 flex items-center justify-between border-t border-surface-container-high">
            <p className="text-xs text-outline">Showing <span className="font-bold text-on-surface">1 - 4</span> of <span className="font-bold text-on-surface">42</span> results</p>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center text-xs font-bold">1</button>
              <button className="w-8 h-8 rounded bg-white border border-outline-variant/20 flex items-center justify-center text-xs font-bold hover:bg-surface-container-low transition-colors">2</button>
              <button className="w-8 h-8 rounded bg-white border border-outline-variant/20 flex items-center justify-center text-xs font-bold hover:bg-surface-container-low transition-colors">3</button>
              <button className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Help */}
      <section className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <motion.div 
            className="md:col-span-4 h-64 rounded-xl overflow-hidden shadow-2xl relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT_5QLY97gYU7fTDIXDFQBL80if1RGi_aHTxSPPXSlrhYA4zew-xf_QdVW8YtpNJYWZPxZUtSl6BbJz_HPBXhEoG1XZxVRhyOGPD5R0T9-vjAVLHsmacHsDGlbh2owWliFawyQ2LMDtzjk2ORSeUErDzOwKuuzpwXlo9LaJCYXa114Hhxbv1rrSWxjzfRniA9neUl_CkzB9ybtWhaHh_yDpg6JwS0p5KIp4hlykNbs3mmcEP_RxCO91T0M0Rugpv6nWcG-FweeoFhp"
              alt="earth view"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white font-headline font-bold text-xl leading-tight">Global Connectivity Report</h4>
              <p className="text-white/80 text-xs mt-2">Annual training analytics for aerospace flight operations.</p>
            </div>
          </motion.div>
          <div className="md:col-span-8">
            <h3 className="text-2xl font-headline font-extrabold mb-4 text-on-surface">Precision Compliance Monitor</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm mb-6 max-w-xl">
              Aviatech&apos;s compliance engine automatically flags bookings that do not meet the prerequisite safety modules. Every confirmed booking generates a unique digital flight deck credential for the candidate, valid for 24 months across international airspace.
            </p>
            <div className="flex gap-8">
              {[
                { label: "System Latency", value: "0.04ms" },
                { label: "Auth Success", value: "99.9%" },
                { label: "Data Integrity", value: "Verified" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline">{stat.label}</p>
                  <p className="text-xl font-headline font-extrabold text-primary">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
