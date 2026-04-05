"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Module {
  id: number;
  code: string;
  name: string;
  description: string | null;
  category: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

const EMPTY_FORM = { code: "", name: "", description: "", category: "", active: true };

export default function TrainingPage() {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  async function fetchModules() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/training");
      const data = await res.json();
      setModules(data.modules || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchModules(); }, []);

  function openAdd() {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setError("");
    setShowForm(true);
  }

  function openEdit(mod: Module) {
    setForm({
      code: mod.code,
      name: mod.name,
      description: mod.description || "",
      category: mod.category,
      active: mod.active,
    });
    setEditingId(mod.id);
    setError("");
    setShowForm(true);
  }

  async function saveModule() {
    if (!form.code.trim() || !form.name.trim() || !form.category.trim()) {
      setError("Code, Name and Category are required.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      const res = await fetch(
        editingId ? `/api/admin/training/${editingId}` : "/api/admin/training",
        {
          method: editingId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save.");
      } else {
        setShowForm(false);
        fetchModules();
      }
    } catch {
      setError("Network error.");
    } finally {
      setSaving(false);
    }
  }

  async function toggleActive(mod: Module) {
    await fetch(`/api/admin/training/${mod.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !mod.active }),
    });
    fetchModules();
  }

  async function deleteModule(mod: Module) {
    if (!confirm(`Delete "${mod.name}"? This cannot be undone.`)) return;
    await fetch(`/api/admin/training/${mod.id}`, { method: "DELETE" });
    fetchModules();
  }

  const filtered = modules.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.code.toLowerCase().includes(search.toLowerCase()) ||
      m.category.toLowerCase().includes(search.toLowerCase())
  );

  const activeCount = modules.filter((m) => m.active).length;
  const inactiveCount = modules.filter((m) => !m.active).length;

  return (
    <div className="p-8 max-w-[1400px] mx-auto min-h-screen">

      {/* Header */}
      <section className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <nav className="flex items-center gap-2 mb-4">
            <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Curriculum</span>
            <span className="material-symbols-outlined text-slate-300 text-xs">chevron_right</span>
            <span className="text-primary text-[10px] font-bold uppercase tracking-wider">Technical Training</span>
          </nav>
          <h2 className="text-5xl font-extrabold font-headline tracking-tighter text-on-surface mb-3">Training Modules</h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-2xl">
            Manage the live modules shown in the booking form. Add, edit, disable or delete any module. Changes reflect instantly on the booking page.
          </p>
        </motion.div>
        <button
          onClick={openAdd}
          className="primary-gradient text-white px-8 py-3 rounded-md font-headline text-[11px] font-extrabold uppercase tracking-widest shadow-xl flex items-center gap-2 hover:scale-[1.02] transition-transform active:scale-95 shrink-0"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Add New Module
        </button>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Total Modules</p>
            <p className="text-4xl font-headline font-extrabold text-on-surface">{modules.length}</p>
          </div>
          <span className="material-symbols-outlined text-primary text-4xl">school</span>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Active (shown in booking)</p>
            <p className="text-4xl font-headline font-extrabold text-emerald-600">{activeCount}</p>
          </div>
          <span className="material-symbols-outlined text-emerald-500 text-4xl">check_circle</span>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Inactive (hidden)</p>
            <p className="text-4xl font-headline font-extrabold text-slate-400">{inactiveCount}</p>
          </div>
          <span className="material-symbols-outlined text-slate-400 text-4xl">visibility_off</span>
        </div>
      </div>

      {/* Add / Edit Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
            onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="bg-[#001c3a] px-8 py-6 text-white flex items-center justify-between">
                <div>
                  <h3 className="font-headline font-extrabold text-xl">{editingId ? "Edit Module" : "Add New Module"}</h3>
                  <p className="text-slate-300 text-sm mt-1">{editingId ? "Update the module details below." : "This will appear instantly in the booking form."}</p>
                </div>
                <button onClick={() => setShowForm(false)} className="text-white/60 hover:text-white">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Code *</label>
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g. M12"
                      value={form.code}
                      onChange={(e) => setForm((p) => ({ ...p, code: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Category *</label>
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g. B1.1, B1.2"
                      value={form.category}
                      onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Full Name *</label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g. M12 Helicopter Aerodynamics"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Description</label>
                  <textarea
                    rows={3}
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Brief description of what this module covers..."
                    value={form.description}
                    onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                  />
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div
                    className={cn(
                      "relative w-10 h-6 rounded-full transition-colors",
                      form.active ? "bg-primary" : "bg-slate-300"
                    )}
                    onClick={() => setForm((p) => ({ ...p, active: !p.active }))}
                  >
                    <div className={cn(
                      "absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform",
                      form.active ? "translate-x-5" : "translate-x-1"
                    )} />
                  </div>
                  <span className="text-sm font-medium text-on-surface">
                    {form.active ? "Active — visible in booking form" : "Inactive — hidden from booking form"}
                  </span>
                </label>

                {error && (
                  <p className="text-sm text-error font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">error</span>{error}
                  </p>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex-1 border border-outline-variant/30 text-on-surface px-6 py-3 rounded-lg font-bold text-sm hover:bg-surface-container transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveModule}
                    disabled={saving}
                    className="flex-1 bg-[#001c3a] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-primary transition-all disabled:opacity-60"
                  >
                    {saving ? "Saving..." : editingId ? "Save Changes" : "Add Module"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10">
        {/* Table header bar */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 gap-4 flex-wrap">
          <h3 className="font-headline font-bold text-on-surface">Module Directory</h3>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
            <input
              className="pl-9 pr-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary w-64"
              placeholder="Search by code, name or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="p-16 text-center text-slate-400 text-sm">Loading modules...</div>
        ) : filtered.length === 0 ? (
          <div className="p-16 text-center text-slate-400 text-sm">
            {search ? "No modules match your search." : "No modules yet. Click \"Add New Module\" to get started."}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Code</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Name & Description</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Category</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Updated</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((mod, i) => (
                  <motion.tr
                    key={mod.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={cn("hover:bg-surface-container-low transition-colors group", !mod.active && "opacity-50")}
                  >
                    <td className="px-6 py-5 font-headline font-bold text-primary text-base">{mod.code}</td>
                    <td className="px-6 py-5">
                      <p className="font-bold text-sm text-on-surface">{mod.name}</p>
                      {mod.description && <p className="text-[11px] text-slate-400 mt-0.5">{mod.description}</p>}
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600 font-medium">{mod.category}</td>
                    <td className="px-6 py-5 text-center">
                      <button
                        onClick={() => toggleActive(mod)}
                        title={mod.active ? "Click to deactivate" : "Click to activate"}
                        className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all hover:opacity-80",
                          mod.active ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                        )}
                      >
                        <span className={cn("w-1.5 h-1.5 rounded-full", mod.active ? "bg-emerald-500" : "bg-slate-400")} />
                        {mod.active ? "Active" : "Inactive"}
                      </button>
                    </td>
                    <td className="px-6 py-5 text-xs text-slate-400">{new Date(mod.updatedAt).toLocaleDateString()}</td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => openEdit(mod)}
                          title="Edit"
                          className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                        <button
                          onClick={() => toggleActive(mod)}
                          title={mod.active ? "Deactivate" : "Activate"}
                          className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                        >
                          <span className="material-symbols-outlined text-lg">{mod.active ? "visibility_off" : "visibility"}</span>
                        </button>
                        <button
                          onClick={() => deleteModule(mod)}
                          title="Delete permanently"
                          className="p-1.5 text-slate-400 hover:text-error hover:bg-error-container rounded-lg transition-colors"
                        >
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="p-4 bg-surface-container-low/30 border-t border-slate-100">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {filtered.length} module{filtered.length !== 1 ? "s" : ""} {search ? "matching search" : "total"} — active modules appear live in the booking form
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Live — changes reflect instantly in booking form</span>
        </div>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">© 2024 Aviatech Consulting</p>
      </footer>
    </div>
  );
}
