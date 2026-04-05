"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Settings {
  brandName: string;
  brandTagline: string;
  supportEmail: string;
  phone: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
}

const DEFAULT: Settings = {
  brandName: "Aviatech Consulting",
  brandTagline: "Engineering High-Altitude Solutions",
  supportEmail: "info@aviatech-consulting.com",
  phone: "",
  heroHeadline: "Elevating Aerospace Standards Through Precision Consulting.",
  heroSubheadline:
    "We bridge the gap between complex aeronautical regulations and operational excellence, providing world-class audits and training modules for the next generation of flight.",
  heroPrimaryCta: "Explore Operations",
  heroSecondaryCta: "Book Training",
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>(DEFAULT);
  const [saved, setSaved] = useState<Settings>(DEFAULT);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [banner, setBanner] = useState<"saved" | "error" | null>(null);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((d) => {
        const s = { ...DEFAULT, ...d.settings };
        setSettings(s);
        setSaved(s);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  function update(key: keyof Settings, value: string) {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }

  function discard() {
    setSettings(saved);
    setBanner(null);
  }

  async function save() {
    setSaving(true);
    setBanner(null);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        setSaved(settings);
        setBanner("saved");
        setTimeout(() => setBanner(null), 3000);
      } else {
        setBanner("error");
      }
    } catch {
      setBanner("error");
    } finally {
      setSaving(false);
    }
  }

  const isDirty = JSON.stringify(settings) !== JSON.stringify(saved);

  return (
    <div className="max-w-6xl mx-auto px-12 pt-16 pb-20">
      {/* Page Header */}
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block py-1 px-3 bg-surface-container-high rounded text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            System Architecture
          </span>
          <h1 className="text-5xl font-extrabold font-headline tracking-tighter text-on-surface max-w-xl">
            Site Settings
          </h1>
          <p className="text-on-surface-variant max-w-md leading-relaxed">
            Update brand details, contact info, and homepage content. Changes save to the database instantly.
          </p>
        </motion.div>
        <div className="flex gap-4 pb-2">
          <button
            onClick={discard}
            disabled={!isDirty || saving}
            className="px-6 py-3 border border-outline-variant/30 rounded-md text-sm font-semibold hover:bg-surface-container-low transition-all disabled:opacity-40"
          >
            Discard Changes
          </button>
          <button
            onClick={save}
            disabled={!isDirty || saving}
            className="px-8 py-3 primary-gradient text-on-primary rounded-md text-sm font-semibold shadow-lg shadow-primary/10 hover:opacity-90 transition-all active:scale-95 disabled:opacity-40"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Banner */}
      {banner === "saved" && (
        <div className="mb-8 flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-4 rounded-xl text-sm font-semibold border border-emerald-200">
          <span className="material-symbols-outlined text-base">check_circle</span>
          Settings saved successfully.
        </div>
      )}
      {banner === "error" && (
        <div className="mb-8 flex items-center gap-2 bg-error-container text-error px-5 py-4 rounded-xl text-sm font-semibold">
          <span className="material-symbols-outlined text-base">error</span>
          Failed to save. Please try again.
        </div>
      )}
      {isDirty && !banner && (
        <div className="mb-8 flex items-center gap-2 bg-amber-50 text-amber-700 px-5 py-4 rounded-xl text-sm font-medium border border-amber-200">
          <span className="material-symbols-outlined text-base">edit</span>
          You have unsaved changes.
        </div>
      )}

      {loading ? (
        <div className="flex items-center gap-3 py-20 text-slate-400 text-sm justify-center">
          <span className="material-symbols-outlined animate-spin text-primary">progress_activity</span>
          Loading settings...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Identity */}
          <motion.section
            className="col-span-12 lg:col-span-7 bg-surface-container-low rounded-xl p-10 border border-outline-variant/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-8">Brand Identity</h2>
            <div className="space-y-5">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Brand Name</label>
                <input
                  className="w-full bg-white border border-outline-variant/20 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-primary/30 outline-none"
                  value={settings.brandName}
                  onChange={(e) => update("brandName", e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Brand Tagline</label>
                <input
                  className="w-full bg-white border border-outline-variant/20 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-primary/30 outline-none"
                  value={settings.brandTagline}
                  onChange={(e) => update("brandTagline", e.target.value)}
                />
              </div>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section
            className="col-span-12 lg:col-span-5 bg-surface-container rounded-xl p-10 flex flex-col justify-between border border-outline-variant/10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-8">Contact Details</h2>
              <div className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Support Email</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <span className="material-symbols-outlined text-xs text-slate-400">alternate_email</span>
                    </span>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-md pl-10 pr-4 py-3 text-sm focus:ring-1 focus:ring-primary/30 outline-none"
                      type="email"
                      value={settings.supportEmail}
                      onChange={(e) => update("supportEmail", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <span className="material-symbols-outlined text-xs text-slate-400">call</span>
                    </span>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-md pl-10 pr-4 py-3 text-sm focus:ring-1 focus:ring-primary/30 outline-none"
                      type="text"
                      value={settings.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Hero Content */}
          <motion.section
            className="col-span-12 bg-surface-container-lowest rounded-xl p-10 border border-outline-variant/10 shadow-[0px_40px_80px_rgba(22,28,34,0.03)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-8">Homepage Hero Content</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Headline</label>
                <textarea
                  className="w-full bg-surface border border-outline-variant/10 rounded-md px-4 py-3 text-lg font-headline font-bold focus:ring-1 focus:ring-primary/20 leading-tight outline-none resize-none"
                  rows={2}
                  value={settings.heroHeadline}
                  onChange={(e) => update("heroHeadline", e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Sub-Headline</label>
                <textarea
                  className="w-full bg-surface border border-outline-variant/10 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 leading-relaxed text-on-surface-variant outline-none resize-none"
                  rows={3}
                  value={settings.heroSubheadline}
                  onChange={(e) => update("heroSubheadline", e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Primary CTA Button</label>
                <input
                  className="w-full bg-surface border border-outline-variant/10 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 outline-none"
                  value={settings.heroPrimaryCta}
                  onChange={(e) => update("heroPrimaryCta", e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Secondary CTA Button</label>
                <input
                  className="w-full bg-surface border border-outline-variant/10 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 outline-none"
                  value={settings.heroSecondaryCta}
                  onChange={(e) => update("heroSecondaryCta", e.target.value)}
                />
              </div>
            </div>
          </motion.section>

          {/* Instance Status */}
          <motion.section
            className="col-span-12 bg-primary-container p-10 rounded-xl text-on-primary-container flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
              <span className="text-2xl font-headline font-black text-white">Live & Production</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-sm opacity-80">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Platform</p>
                <p className="font-bold">Vercel + Next.js 14</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Database</p>
                <p className="font-bold">MySQL (Hostinger)</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Email</p>
                <p className="font-bold">Hostinger SMTP</p>
              </div>
            </div>
          </motion.section>
        </div>
      )}

      <footer className="mt-24 pt-12 border-t border-slate-200/30 text-center">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold font-headline">
          Aviatech Consulting © {new Date().getFullYear()} — Admin Panel
        </p>
      </footer>
    </div>
  );
}
