"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DashboardData {
  totalBookings: number;
  pendingBookings: number;
  confirmedBookings: number;
  totalMessages: number;
  unreadMessages: number;
  recentBookings: { id: number; firstName: string; surname: string; email: string; category: string; status: string; createdAt: string }[];
  recentMessages: { id: number; name: string; email: string; subject: string; status: string; createdAt: string }[];
}

const moduleStats = [
  { label: "Avionics", progress: 85 },
  { label: "Safety", progress: 62 },
  { label: "Engines", progress: 94 },
  { label: "Logistics", progress: 45 },
];

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={cn(
      "px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full",
      status === "confirmed" ? "bg-emerald-50 text-emerald-600" :
      status === "pending" ? "bg-amber-50 text-amber-600" :
      "bg-error-container text-error"
    )}>
      {status}
    </span>
  );
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then((r) => r.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const kpis = data
    ? [
        { label: "Total Bookings", value: String(data.totalBookings), icon: "description", trend: `${data.confirmedBookings} confirmed`, trendType: "up", border: "border-primary" },
        { label: "Pending Review", value: String(data.pendingBookings), icon: "assignment_late", trend: data.pendingBookings > 0 ? "Action required" : "All clear", trendType: data.pendingBookings > 0 ? "down" : "neutral", border: "border-error" },
        { label: "Total Messages", value: String(data.totalMessages), icon: "mail", trend: `${data.unreadMessages} unread`, trendType: "neutral", border: "border-primary-container" },
        { label: "Unread Messages", value: String(data.unreadMessages), icon: "mark_email_unread", trend: data.unreadMessages > 0 ? "Needs response" : "All read", trendType: data.unreadMessages > 0 ? "down" : "neutral", border: "border-tertiary-container" },
      ]
    : [
        { label: "Total Bookings", value: "—", icon: "description", trend: "Loading...", trendType: "neutral", border: "border-primary" },
        { label: "Pending Review", value: "—", icon: "assignment_late", trend: "Loading...", trendType: "neutral", border: "border-error" },
        { label: "Total Messages", value: "—", icon: "mail", trend: "Loading...", trendType: "neutral", border: "border-primary-container" },
        { label: "Unread Messages", value: "—", icon: "mark_email_unread", trend: "Loading...", trendType: "neutral", border: "border-tertiary-container" },
      ];

  return (
    <div className="p-12 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="font-headline text-5xl font-extrabold text-on-background tracking-tight leading-none mb-6">
            Operational <br />Dashboard <span className="text-primary">01.</span>
          </h2>
          <p className="font-body text-slate-500 text-lg leading-relaxed">
            Live metrics for bookings and contact messages.
          </p>
        </motion.div>
        <div className="flex gap-3 mb-2">
          <div className="h-1 w-12 bg-primary" />
          <div className="h-1 w-4 bg-slate-200" />
          <div className="h-1 w-4 bg-slate-200" />
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

      {/* Main Data */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Recent Bookings */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-10">
            <h4 className="font-headline text-2xl font-bold text-on-surface">Recent Bookings</h4>
            <Link href="/admin/bookings" className="font-label uppercase tracking-widest text-[10px] font-bold text-primary border-b border-primary pb-1">View All</Link>
          </div>
          <motion.div
            className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_40px_80px_rgba(0,0,0,0.02)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {loading ? (
              <div className="p-12 text-center text-slate-400 text-sm">Loading...</div>
            ) : !data?.recentBookings.length ? (
              <div className="p-12 text-center text-slate-400 text-sm">No bookings yet.</div>
            ) : (
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="px-8 py-5 font-label uppercase tracking-widest text-[10px] text-slate-400 font-black">Candidate</th>
                    <th className="px-8 py-5 font-label uppercase tracking-widest text-[10px] text-slate-400 font-black">Category</th>
                    <th className="px-8 py-5 font-label uppercase tracking-widest text-[10px] text-slate-400 font-black">Date</th>
                    <th className="px-8 py-5 font-label uppercase tracking-widest text-[10px] text-slate-400 font-black">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.recentBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-surface-container transition-colors">
                      <td className="px-8 py-6">
                        <p className="font-bold text-sm text-on-surface">{b.firstName} {b.surname}</p>
                        <p className="text-xs text-slate-400">{b.email}</p>
                      </td>
                      <td className="px-8 py-6 text-sm font-medium text-slate-600">{b.category}</td>
                      <td className="px-8 py-6 text-sm text-slate-400">{new Date(b.createdAt).toLocaleDateString()}</td>
                      <td className="px-8 py-6"><StatusBadge status={b.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
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
              {moduleStats.map((m, i) => (
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
                <p className="text-lg font-bold text-on-surface">{data ? data.totalBookings : "—"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recent Messages */}
      {data && data.recentMessages.length > 0 && (
        <section className="mt-20">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-headline text-2xl font-bold text-on-surface">Recent Messages</h4>
            <Link href="/admin/messages" className="font-label uppercase tracking-widest text-[10px] font-bold text-primary border-b border-primary pb-1">View All</Link>
          </div>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_40px_80px_rgba(0,0,0,0.02)]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-8 py-5 font-label uppercase tracking-widest text-[10px] text-slate-400 font-black">From</th>
                  <th className="px-8 py-5 font-label uppercase tracking-widest text-[10px] text-slate-400 font-black">Subject</th>
                  <th className="px-8 py-5 font-label uppercase tracking-widest text-[10px] text-slate-400 font-black">Date</th>
                  <th className="px-8 py-5 font-label uppercase tracking-widest text-[10px] text-slate-400 font-black">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.recentMessages.map((m) => (
                  <tr key={m.id} className="hover:bg-surface-container transition-colors">
                    <td className="px-8 py-6">
                      <p className="font-bold text-sm text-on-surface">{m.name}</p>
                      <p className="text-xs text-slate-400">{m.email}</p>
                    </td>
                    <td className="px-8 py-6 text-sm text-slate-600">{m.subject}</td>
                    <td className="px-8 py-6 text-sm text-slate-400">{new Date(m.createdAt).toLocaleDateString()}</td>
                    <td className="px-8 py-6">
                      <span className={cn(
                        "px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full",
                        m.status === "replied" ? "bg-emerald-50 text-emerald-600" :
                        m.status === "pending" ? "bg-amber-50 text-amber-600" :
                        "bg-error-container text-error"
                      )}>
                        {m.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Compliance section */}
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
              <p className="font-body text-white/80 max-w-lg mb-8">
                Real-time predictive analytics for training module demand. Adjust capacity based on live booking trends.
              </p>
              <Link href="/admin/bookings" className="inline-block bg-white text-primary px-8 py-3 rounded-md font-headline uppercase tracking-widest text-[11px] font-bold shadow-xl hover:bg-slate-50 transition-all active:scale-95">
                View Bookings
              </Link>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 border-[40px] border-white/5 rounded-full" />
            <div className="absolute right-10 top-10 w-20 h-20 border-2 border-white/10 rotate-45" />
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
              {[{ label: "Documentation Accuracy", value: 98 }, { label: "Renewal Readiness", value: 82 }].map((c, i) => (
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
