"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const kpis = [
  { label: "Total Applications", value: "1,284", icon: "description", trend: "+12% vs last month", trendType: "up", border: "border-primary" },
  { label: "Active Modules", value: "42", icon: "school", trend: "Steady capacity level", trendType: "neutral", border: "border-primary-container" },
  { label: "Monthly Revenue", value: "$84.2k", icon: "payments", trend: "+5.4% growth", trendType: "up", border: "border-tertiary-container" },
  { label: "Pending Reviews", value: "18", icon: "assignment_late", trend: "Action required", trendType: "down", border: "border-error" },
];

const applications = [
  { name: "Sarah Jenkins", email: "s.jenkins@skybound.com", role: "Avionics Technician", date: "Oct 24, 2023", status: "Approved", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXr1swUXUkqwLDU4NGiGFcD9czwdkXxg8Qzv9GUyGbv3n2Ev7v5MC8SR-HB2Nfg-m5DkdLf4iqshUPFaWph4LqjLV6QOgcQX2Epri-z-1pC20qV7WqJLGZYIn7W7HmXY1wGTOeKafqvdHQRAW5MDHtdt9ayOSxhfCoSS-2_p6HELIfUPdF3FoaOWFP-UvBA0gHZ6xywPYxhYJluA_sJ91mB9e3aqPzZRLi9D7eCVYpex0q9nuXwn6IYNhxkrBo6X9TH2umA4PSQowp" },
  { name: "David Miller", email: "d.miller@vector.aero", role: "Safety Inspector", date: "Oct 23, 2023", status: "Pending", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYFvLB5XI47NLsA9C0FBalOfqBB826rF8zAtr6pDLACzu5VaTFZ6ipw4MUZv_OIUUDmZyqBHmjYubnuXPPN_dJljEoFs6g8wQRbGMYJrOz9vU5v_315P0NJJzLpmd8kmMXZdYK7loSMuBomE9VkjMTVMITiukfYR84yXCnJ-F-12tXawDwtggzD89KKijxidVMK2IZGNIiq3wLGrClOJ__VUeFp6yg1tKBuhjCluH_6LB3wRC4EJXQnBMq4ufCFqRyobVKNv-qAP1c" },
  { name: "Elena Rodriguez", email: "elena.rod@orbit.io", role: "Structural Engineer", date: "Oct 22, 2023", status: "Rejected", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFswUlB4LB66rDsfG7y7OuEBy9AtZnM6NVOCFIBqerJuyEL23cdka0mKkN1c7uBA600qP7789vI5jdJzXsoibdvJnFGP8wgp_gw6tS8PldYTJ_pz8UsmybhXQSrA2aa00vVMZ1GHIyzsrZPypHxHQyhPl2tAKwwU9gTe0A5-z4V74NSSapKdLRA9gvY6QCA-9QxKVsLToPHWkoT0oN4-ZWuDuKd1oVylg4qnIIOHufp1mXrOTf8H22OUI6wW4C4lG2rdy8RYR3qUp5" },
];

const modules = [
  { label: "Avionics", progress: 85 },
  { label: "Safety", progress: 62 },
  { label: "Engines", progress: 94 },
  { label: "Logistics", progress: 45 },
];

export default function AdminDashboard() {
  return (
    <div className="p-12 max-w-[1400px] mx-auto">
      {/* Hero Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="font-headline text-5xl font-extrabold text-on-background tracking-tight leading-none mb-6">
            Operational <br />Efficiency <span className="text-primary">02.</span>
          </h2>
          <p className="font-body text-slate-500 text-lg leading-relaxed">
            Precision Aerospace metrics for Q4 performance. Analyzing the intersection of personnel readiness and technical compliance through an editorial lens.
          </p>
        </motion.div>
        <div className="flex gap-3 mb-2">
          <div className="h-1 w-12 bg-primary"></div>
          <div className="h-1 w-4 bg-slate-200"></div>
          <div className="h-1 w-4 bg-slate-200"></div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
        {kpis.map((kpi, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "bg-surface-container-lowest p-8 rounded-xl shadow-[0px_20px_40px_rgba(22,28,34,0.02)] transition-all hover:bg-surface-container-high group border-t-2",
              kpi.border
            )}
          >
            <p className="font-label uppercase tracking-[0.2em] text-[10px] font-black text-slate-400 mb-4">{kpi.label}</p>
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-4xl font-extrabold text-on-background">{kpi.value}</h3>
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">{kpi.icon}</span>
            </div>
            <p className={cn(
              "mt-4 text-xs font-medium flex items-center gap-1",
              kpi.trendType === "up" ? "text-emerald-600" : kpi.trendType === "down" ? "text-error" : "text-slate-400"
            )}>
              {kpi.trendType === "up" && <span className="material-symbols-outlined text-xs">trending_up</span>}
              {kpi.trendType === "down" && <span className="material-symbols-outlined text-xs">priority_high</span>}
              {kpi.trend}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Main Data Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Recent Applications */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-10">
            <h4 className="font-headline text-2xl font-bold text-on-surface">Recent Applications</h4>
            <Link href="/admin/applications" className="font-label uppercase tracking-widest text-[10px] font-bold text-primary border-b border-primary pb-1">View All Records</Link>
          </div>
          <motion.div 
            className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_40px_80px_rgba(0,0,0,0.02)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-8 py-5 font-label uppercase tracking-widest text-[10px] text-slate-400 font-black">Candidate</th>
                  <th className="px-8 py-5 font-label uppercase tracking-widest text-[10px] text-slate-400 font-black">Role</th>
                  <th className="px-8 py-5 font-label uppercase tracking-widest text-[10px] text-slate-400 font-black">Date</th>
                  <th className="px-8 py-5 font-label uppercase tracking-widest text-[10px] text-slate-400 font-black">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {applications.map((app, i) => (
                  <tr key={i} className="hover:bg-surface-container transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                          <Image src={app.img} alt={app.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-on-surface">{app.name}</p>
                          <p className="text-xs text-slate-400">{app.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm font-medium text-slate-600">{app.role}</td>
                    <td className="px-8 py-6 text-sm text-slate-400">{app.date}</td>
                    <td className="px-8 py-6">
                      <span className={cn(
                        "px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full",
                        app.status === "Approved" ? "bg-emerald-50 text-emerald-600" :
                        app.status === "Pending" ? "bg-tertiary-fixed text-tertiary-container" :
                        "bg-error-container text-error"
                      )}>
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Module Performance */}
        <div>
          <div className="flex justify-between items-center mb-10">
            <h4 className="font-headline text-2xl font-bold text-on-surface">Module Performance</h4>
            <span className="material-symbols-outlined text-slate-300">more_vert</span>
          </div>
          <motion.div 
            className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_40px_80px_rgba(0,0,0,0.02)] h-[400px] flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-xs text-slate-400 mb-8">Completion rates across technical training silos.</p>
            <div className="flex-1 flex items-end gap-6 px-4">
              {modules.map((m, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3 h-full">
                  <div className="w-full bg-primary-container/10 rounded-t-sm relative group h-full flex flex-col justify-end overflow-hidden">
                    <motion.div 
                      className="primary-gradient w-full rounded-t-sm transition-all group-hover:opacity-80"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${m.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  </div>
                  <span className="font-label text-[9px] uppercase tracking-tighter text-slate-500">{m.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Progress</p>
                <p className="text-lg font-bold text-on-surface">78.4%</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Active Users</p>
                <p className="text-lg font-bold text-on-surface">1.2k</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Secondary Analytics */}
      <section className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <motion.div 
            className="primary-gradient p-12 rounded-xl text-white md:col-span-2 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <span className="px-3 py-1 bg-white/10 glass-effect text-[10px] font-black uppercase tracking-[0.3em] mb-6 inline-block">System Intelligence</span>
              <h3 className="font-headline text-3xl font-extrabold mb-6">Nexus Insights Engine</h3>
              <p className="font-body text-primary-fixed/80 max-w-lg mb-8 text-white/80">
                Real-time predictive analytics suggesting a 14% increase in application volume for Avionics roles in the upcoming quarter. Adjust training capacity accordingly.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-md font-headline uppercase tracking-widest text-[11px] font-bold shadow-xl hover:bg-slate-50 transition-all active:scale-95">Launch Deep Audit</button>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 border-[40px] border-white/5 rounded-full"></div>
            <div className="absolute right-10 top-10 w-20 h-20 border-2 border-white/10 rotate-45"></div>
          </motion.div>
          
          <motion.div 
            className="bg-surface-container p-12 rounded-xl h-full flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-label uppercase tracking-widest text-[10px] font-black text-slate-400 mb-4">Compliance Status</p>
            <h4 className="font-headline text-xl font-bold mb-6 text-on-surface">FAA/EASA Synchronization</h4>
            <div className="space-y-6">
              {[
                { label: "Documentation Accuracy", value: 98 },
                { label: "Renewal Readiness", value: 82 },
              ].map((c, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">{c.label}</span>
                    <span className="font-bold text-primary">{c.value}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-primary h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
