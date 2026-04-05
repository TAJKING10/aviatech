"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const ALL_MODULES = [
  "M1 Mathematics",
  "M2 Physics",
  "M3 Electrical Fundamentals",
  "M4 Electronic Fundamentals",
  "M5 Digital Techniques / Electronic Instrument Systems",
  "M6 Materials & Hardware",
  "M7 Maintenance Practices",
  "M8 Basic Aerodynamics",
  "M9 Human Factors",
  "M10 Aviation Legislation",
  "M11A Turbine Aeroplane Aerodynamics, Structures & Systems",
  "M15 Gas Turbine Engine",
  "M17 Propeller",
];

interface Booking {
  id: number;
  referenceNo: string;
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  dateOfBirth?: string | null;
  placeOfBirth?: string | null;
  nationality?: string | null;
  company?: string | null;
  notes?: string | null;
  category: string;
  trainingPath: string;
  modules: string[];
  status: string;
  createdAt: string;
}

const STATUS_COLORS: Record<string, string> = {
  confirmed: "bg-emerald-50 text-emerald-700",
  pending: "bg-amber-50 text-amber-700",
  rejected: "bg-red-50 text-red-700",
};

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [pendingCount, setPendingCount] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [editingModules, setEditingModules] = useState<number | null>(null);
  const [draftModules, setDraftModules] = useState<string[]>([]);
  const [savingModules, setSavingModules] = useState(false);

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

  async function saveModules(id: number) {
    setSavingModules(true);
    await fetch(`/api/admin/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modules: draftModules }),
    });
    setSavingModules(false);
    setEditingModules(null);
    fetchBookings();
  }

  async function deleteBooking(id: number) {
    if (!confirm("Delete this booking permanently?")) return;
    await fetch(`/api/admin/bookings/${id}`, { method: "DELETE" });
    if (expanded === id) setExpanded(null);
    fetchBookings();
    fetchPending();
  }

  function handleFilter(s: string) {
    setStatusFilter(s);
    fetchBookings(1, s);
  }

  return (
    <div className="p-10 max-w-[1400px] mx-auto space-y-10">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3 block">Operations Deck</span>
          <h2 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-3">Bookings Management</h2>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed max-w-xl">
            Full lifecycle management of training applications. Click any row to see all candidate details and modules.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="flex gap-4">
          <div className="bg-surface-container-lowest px-6 py-4 rounded-xl border-l-4 border-primary shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Total</p>
            <p className="text-3xl font-headline font-extrabold text-on-surface">{loading ? "—" : total}</p>
          </div>
          <div className="bg-surface-container-lowest px-6 py-4 rounded-xl border-l-4 border-error shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Pending</p>
            <p className="text-3xl font-headline font-extrabold text-error">{pendingCount}</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="flex items-center gap-3 bg-surface-container-low p-4 rounded-xl flex-wrap">
        <span className="material-symbols-outlined text-outline text-lg">filter_list</span>
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

      {/* Bookings list */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10">
        {loading ? (
          <div className="p-16 text-center text-slate-400 text-sm">Loading bookings...</div>
        ) : bookings.length === 0 ? (
          <div className="p-16 text-center text-slate-400 text-sm">No bookings found.</div>
        ) : (
          <div>
            {/* Table header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container-low border-b border-outline-variant/10">
              <div className="col-span-3 text-[10px] font-extrabold uppercase tracking-widest text-outline">Candidate</div>
              <div className="col-span-2 text-[10px] font-extrabold uppercase tracking-widest text-outline">Reference</div>
              <div className="col-span-3 text-[10px] font-extrabold uppercase tracking-widest text-outline">Category</div>
              <div className="col-span-1 text-[10px] font-extrabold uppercase tracking-widest text-outline text-center">Modules</div>
              <div className="col-span-1 text-[10px] font-extrabold uppercase tracking-widest text-outline text-center">Status</div>
              <div className="col-span-2 text-[10px] font-extrabold uppercase tracking-widest text-outline text-right">Actions</div>
            </div>

            {bookings.map((b, i) => (
              <div key={b.id} className="border-b border-surface-container last:border-b-0">
                {/* Row */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={cn(
                    "grid grid-cols-12 gap-4 px-6 py-5 items-center cursor-pointer hover:bg-surface-container-low/40 transition-colors",
                    expanded === b.id && "bg-surface-container-low/30"
                  )}
                  onClick={() => setExpanded(expanded === b.id ? null : b.id)}
                >
                  <div className="col-span-3">
                    <p className="text-sm font-bold text-on-surface">{b.firstName} {b.surname}</p>
                    <p className="text-[10px] text-outline">{b.email}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-xs font-mono font-bold text-primary">{b.referenceNo}</span>
                    <p className="text-[10px] text-outline mt-0.5">{new Date(b.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="col-span-3">
                    <p className="text-sm font-medium text-on-surface-variant">{b.category}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-surface-container rounded text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">{b.trainingPath}</span>
                  </div>
                  <div className="col-span-1 text-center">
                    <span className="text-lg font-headline font-extrabold text-primary">{b.modules.length}</span>
                  </div>
                  <div className="col-span-1 text-center">
                    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase", STATUS_COLORS[b.status] || "bg-slate-100 text-slate-600")}>
                      {b.status}
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>
                    {b.status !== "confirmed" && (
                      <button onClick={() => updateStatus(b.id, "confirmed")} title="Confirm" className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded transition-colors">
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                      </button>
                    )}
                    {b.status !== "rejected" && (
                      <button onClick={() => updateStatus(b.id, "rejected")} title="Reject" className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors">
                        <span className="material-symbols-outlined text-lg">cancel</span>
                      </button>
                    )}
                    {b.status !== "pending" && (
                      <button onClick={() => updateStatus(b.id, "pending")} title="Set Pending" className="p-1.5 text-amber-600 hover:bg-amber-50 rounded transition-colors">
                        <span className="material-symbols-outlined text-lg">pending</span>
                      </button>
                    )}
                    <button onClick={() => deleteBooking(b.id)} title="Delete" className="p-1.5 text-red-400 hover:bg-red-50 rounded transition-colors">
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                    <span className="material-symbols-outlined text-outline text-lg ml-1">
                      {expanded === b.id ? "expand_less" : "expand_more"}
                    </span>
                  </div>
                </motion.div>

                {/* Expanded Detail Panel */}
                <AnimatePresence>
                  {expanded === b.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 pt-4 bg-surface-container-low/20 border-t border-outline-variant/10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">

                          {/* Personal Info */}
                          <div className="bg-white rounded-xl p-5 border border-outline-variant/10">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Personal Details</p>
                            <div className="space-y-3">
                              {[
                                { label: "Full Name", value: `${b.firstName} ${b.surname}` },
                                { label: "Email", value: b.email },
                                { label: "Phone", value: b.phone },
                                { label: "Date of Birth", value: b.dateOfBirth },
                                { label: "Place of Birth", value: b.placeOfBirth },
                                { label: "Nationality", value: b.nationality },
                                { label: "Company", value: b.company },
                              ].map(({ label, value }) => value ? (
                                <div key={label}>
                                  <p className="text-[10px] font-bold text-outline uppercase tracking-wider">{label}</p>
                                  <p className="text-sm text-on-surface font-medium">{value}</p>
                                </div>
                              ) : null)}
                            </div>
                          </div>

                          {/* Training Info */}
                          <div className="bg-white rounded-xl p-5 border border-outline-variant/10">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Training Details</p>
                            <div className="space-y-3 mb-4">
                              {[
                                { label: "Reference", value: b.referenceNo },
                                { label: "Category", value: b.category },
                                { label: "Training Path", value: b.trainingPath },
                                { label: "Submitted", value: new Date(b.createdAt).toLocaleString() },
                              ].map(({ label, value }) => (
                                <div key={label}>
                                  <p className="text-[10px] font-bold text-outline uppercase tracking-wider">{label}</p>
                                  <p className="text-sm text-on-surface font-medium">{value}</p>
                                </div>
                              ))}
                            </div>
                            {b.notes && (
                              <div>
                                <p className="text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Notes</p>
                                <p className="text-sm text-on-surface-variant leading-relaxed">{b.notes}</p>
                              </div>
                            )}
                          </div>

                          {/* Modules */}
                          <div className="bg-white rounded-xl p-5 border border-outline-variant/10">
                            <div className="flex items-center justify-between mb-4">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                                Modules ({editingModules === b.id ? draftModules.length : b.modules.length})
                              </p>
                              {editingModules !== b.id ? (
                                <button
                                  onClick={() => { setEditingModules(b.id); setDraftModules([...b.modules]); }}
                                  className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline flex items-center gap-1"
                                >
                                  <span className="material-symbols-outlined text-sm">edit</span>Edit
                                </button>
                              ) : (
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => setEditingModules(null)}
                                    className="text-[10px] font-bold text-outline uppercase tracking-widest hover:underline"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={() => saveModules(b.id)}
                                    disabled={savingModules || draftModules.length === 0}
                                    className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest hover:underline disabled:opacity-50"
                                  >
                                    {savingModules ? "Saving..." : "Save"}
                                  </button>
                                </div>
                              )}
                            </div>

                            {editingModules === b.id ? (
                              // Edit mode — checklist of all modules
                              <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                                {ALL_MODULES.map((mod) => (
                                  <label key={mod} className="flex items-center gap-2 cursor-pointer py-1 hover:bg-surface-container-low rounded px-1 group">
                                    <input
                                      type="checkbox"
                                      checked={draftModules.includes(mod)}
                                      onChange={(e) => {
                                        if (e.target.checked) setDraftModules(prev => [...prev, mod]);
                                        else setDraftModules(prev => prev.filter(m => m !== mod));
                                      }}
                                      className="w-4 h-4 rounded border-outline-variant/50 text-primary focus:ring-primary"
                                    />
                                    <span className="text-xs text-on-surface">{mod}</span>
                                  </label>
                                ))}
                              </div>
                            ) : (
                              // View mode
                              <div className="space-y-2">
                                {b.modules.map((mod, j) => (
                                  <div key={j} className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    <span className="text-xs font-medium text-on-surface">{mod}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                        </div>

                        {/* Email candidate */}
                        <div className="mt-4">
                          <a
                            href={`mailto:${b.email}?subject=Re: Training Application ${b.referenceNo}`}
                            className="inline-flex items-center gap-2 text-primary text-xs font-bold hover:underline"
                          >
                            <span className="material-symbols-outlined text-sm">mail</span>
                            Email {b.firstName} directly
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {pages > 1 && (
          <div className="px-6 py-4 flex items-center justify-between border-t border-surface-container-high">
            <p className="text-xs text-outline">
              Showing <span className="font-bold text-on-surface">{(page - 1) * 10 + 1}–{Math.min(page * 10, total)}</span> of <span className="font-bold text-on-surface">{total}</span>
            </p>
            <div className="flex gap-2">
              <button onClick={() => { const p = page - 1; setPage(p); fetchBookings(p); }} disabled={page === 1} className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-30">
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                <button key={p} onClick={() => { setPage(p); fetchBookings(p); }} className={cn("w-8 h-8 rounded flex items-center justify-center text-xs font-bold", page === p ? "bg-primary text-white" : "bg-white border border-outline-variant/20 hover:bg-surface-container-low")}>
                  {p}
                </button>
              ))}
              <button onClick={() => { const p = page + 1; setPage(p); fetchBookings(p); }} disabled={page === pages} className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-30">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
