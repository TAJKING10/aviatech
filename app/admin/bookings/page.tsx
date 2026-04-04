"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Booking {
  id: number;
  referenceNo: string;
  firstName: string;
  surname: string;
  email: string;
  category: string;
  trainingPath: string;
  modules: string[];
  status: string;
  createdAt: string;
}

const STATUS_COLORS: Record<string, string> = {
  confirmed: "bg-green-100 text-green-700",
  pending: "bg-amber-100 text-amber-700",
  rejected: "bg-red-100 text-red-700",
};

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [pendingCount, setPendingCount] = useState(0);

  async function fetchBookings(p = page, s = statusFilter) {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/bookings?page=${p}&status=${s}`);
      const data = await res.json();
      setBookings(data.bookings || []);
      setTotal(data.total || 0);
      setPage(data.page || 1);
      setPages(data.pages || 1);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function fetchPending() {
    const res = await fetch("/api/admin/bookings?status=pending&page=1");
    const data = await res.json();
    setPendingCount(data.total || 0);
  }

  useEffect(() => {
    fetchBookings();
    fetchPending();
  }, []);

  async function updateStatus(id: number, status: string) {
    await fetch(`/api/admin/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchBookings();
    fetchPending();
  }

  function handleFilter(s: string) {
    setStatusFilter(s);
    fetchBookings(1, s);
  }

  return (
    <div className="p-12 max-w-[1400px] mx-auto">
      {/* Header */}
      <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3 block">Operations Deck</span>
          <h2 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-4">Bookings Management</h2>
          <p className="text-on-surface-variant font-body leading-relaxed opacity-80">
            Oversee the full lifecycle of training module applications. Monitor candidate progress and authorize training sequences.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm border-l-4 border-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Total Bookings</h3>
              <p className="text-4xl font-headline font-extrabold text-on-surface">{loading ? "—" : total}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-surface-container p-8 rounded-xl flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Pending Review</h3>
          <p className="text-4xl font-headline font-extrabold text-error">{pendingCount}</p>
          <p className="text-xs text-on-surface-variant mt-2">Requires authorization</p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="mb-6">
        <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-outline text-lg">filter_list</span>
            <span className="text-xs font-bold uppercase tracking-tighter text-outline">Status:</span>
          </div>
          <div className="flex gap-2">
            {["all", "pending", "confirmed", "rejected"].map((s) => (
              <button
                key={s}
                onClick={() => handleFilter(s)}
                className={cn(
                  "px-4 py-1.5 text-xs font-bold rounded-full transition-colors capitalize",
                  statusFilter === s ? "bg-primary text-white" : "bg-white text-on-surface-variant hover:bg-surface-container-high"
                )}
              >
                {s === "all" ? "All Bookings" : s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="pb-20">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
          {loading ? (
            <div className="p-16 text-center text-slate-400 text-sm">Loading bookings...</div>
          ) : bookings.length === 0 ? (
            <div className="p-16 text-center text-slate-400 text-sm">No bookings found.</div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline">Candidate</th>
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline">Ref</th>
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline">Category</th>
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline">Path</th>
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline">Modules</th>
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline">Date</th>
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline text-center">Status</th>
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-outline text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high">
                {bookings.map((b, i) => (
                  <motion.tr
                    key={b.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="hover:bg-surface-container-low/50 transition-colors group"
                  >
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-on-surface">{b.firstName} {b.surname}</p>
                      <p className="text-[10px] text-outline">{b.email}</p>
                    </td>
                    <td className="px-6 py-5 text-xs font-mono font-bold text-primary">{b.referenceNo}</td>
                    <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">{b.category}</td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 bg-surface-container rounded text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">{b.trainingPath}</span>
                    </td>
                    <td className="px-6 py-5 text-sm font-headline font-bold text-on-surface">{b.modules.length}</td>
                    <td className="px-6 py-5 text-sm text-outline">{new Date(b.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-5 text-center">
                      <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase", STATUS_COLORS[b.status] || "bg-slate-100 text-slate-600")}>
                        {b.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {b.status !== "confirmed" && (
                          <button
                            onClick={() => updateStatus(b.id, "confirmed")}
                            title="Confirm"
                            className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg">check_circle</span>
                          </button>
                        )}
                        {b.status !== "rejected" && (
                          <button
                            onClick={() => updateStatus(b.id, "rejected")}
                            title="Reject"
                            className="p-1.5 text-error hover:bg-error-container rounded transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg">cancel</span>
                          </button>
                        )}
                        {b.status !== "pending" && (
                          <button
                            onClick={() => updateStatus(b.id, "pending")}
                            title="Set Pending"
                            className="p-1.5 text-amber-600 hover:bg-amber-50 rounded transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg">pending</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Pagination */}
          {pages > 1 && (
            <div className="px-6 py-4 flex items-center justify-between border-t border-surface-container-high">
              <p className="text-xs text-outline">
                Showing <span className="font-bold text-on-surface">{(page - 1) * 10 + 1}–{Math.min(page * 10, total)}</span> of <span className="font-bold text-on-surface">{total}</span>
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => { const p = page - 1; setPage(p); fetchBookings(p); }}
                  disabled={page === 1}
                  className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-30"
                >
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => { setPage(p); fetchBookings(p); }}
                    className={cn("w-8 h-8 rounded flex items-center justify-center text-xs font-bold", page === p ? "bg-primary text-white" : "bg-white border border-outline-variant/20 hover:bg-surface-container-low")}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => { const p = page + 1; setPage(p); fetchBookings(p); }}
                  disabled={page === pages}
                  className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-30"
                >
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info section */}
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
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white font-headline font-bold text-xl leading-tight">Global Connectivity Report</h4>
              <p className="text-white/80 text-xs mt-2">Annual training analytics for aerospace flight operations.</p>
            </div>
          </motion.div>
          <div className="md:col-span-8">
            <h3 className="text-2xl font-headline font-extrabold mb-4 text-on-surface">Precision Compliance Monitor</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm mb-6 max-w-xl">
              Aviatech&apos;s compliance engine flags bookings that do not meet prerequisite safety modules. Every confirmed booking generates a unique digital flight deck credential valid for 24 months.
            </p>
            <div className="flex gap-8">
              {[{ label: "System Latency", value: "0.04ms" }, { label: "Auth Success", value: "99.9%" }, { label: "Data Integrity", value: "Verified" }].map((s, i) => (
                <div key={i}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline">{s.label}</p>
                  <p className="text-xl font-headline font-extrabold text-primary">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
