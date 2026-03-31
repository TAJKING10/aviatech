"use client";

import { useState } from "react";

const footerColumns = [
  {
    title: "Solutions",
    links: ["Flight Operations", "Safety Management", "Regulatory Compliance", "Fleet Planning"],
  },
  {
    title: "Corporate",
    links: ["About Aviatech", "Leadership Team", "Careers", "Press & Media"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
  },
];

export default function AdminSettingsPage() {
  const [brandName, setBrandName] = useState("Aviatech Consulting");
  const [brandTagline, setBrandTagline] = useState("Precision in Every Flight Path");
  const [supportEmail, setSupportEmail] = useState("support@aviatech.aero");
  const [hotline, setHotline] = useState("+1 (800) AVI-TECH");
  const [heroHeadline, setHeroHeadline] = useState(
    "Precision Aviation Consulting for the Modern Era"
  );
  const [heroSubHeadline, setHeroSubHeadline] = useState(
    "Strategic excellence in flight operations, safety management, and regulatory compliance."
  );
  const [primaryCta, setPrimaryCta] = useState("Book a Consultation");
  const [secondaryCta, setSecondaryCta] = useState("Explore Services");

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#d8e2ff] text-[#0059bb] font-['Manrope'] uppercase tracking-widest text-[10px] font-bold px-3 py-1.5 rounded-full mb-3">
            <span className="material-symbols-outlined text-[14px]">architecture</span>
            System Architecture
          </div>
          <h1 className="font-headline font-extrabold text-5xl text-[#161c22] leading-none">
            Site Content Configuration
          </h1>
          <p className="text-[#414754] text-sm mt-3">
            Manage all public-facing content, brand identity, and system settings from this central panel.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-3">
          <button className="border border-[#e8eef6] bg-white text-[#414754] font-['Manrope'] uppercase tracking-widest text-[11px] font-bold px-5 py-2.5 rounded-xl hover:border-slate-300 transition-colors">
            Discard
          </button>
          <button className="bg-gradient-to-r from-[#0059bb] to-[#0070ea] text-white font-['Manrope'] uppercase tracking-widest text-[11px] font-bold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">save</span>
            Save Changes
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-5">
        {/* Brand Identity */}
        <div className="col-span-12 lg:col-span-7 bg-white rounded-xl shadow-sm p-8">
          <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
            Branding
          </div>
          <h2 className="font-headline font-bold text-lg text-[#161c22] mb-6">Brand Identity</h2>

          {/* Logo Upload */}
          <div className="border-2 border-dashed border-[#c1c6d7] rounded-xl p-8 flex flex-col items-center justify-center text-center mb-6 hover:border-[#0059bb] transition-colors cursor-pointer group">
            <span className="material-symbols-outlined text-[32px] text-slate-300 group-hover:text-[#0059bb] transition-colors mb-2">
              upload
            </span>
            <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400">
              Upload Logo
            </div>
            <div className="text-xs text-slate-300 mt-1">SVG, PNG, or JPG · Max 2MB</div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
                Legal Brand Name
              </label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full px-4 py-3 bg-[#f6f9ff] border border-[#e8eef6] rounded-xl text-sm text-[#161c22] font-['Manrope'] focus:outline-none focus:ring-2 focus:ring-[#0059bb]/20 focus:border-[#0059bb]"
              />
            </div>
            <div>
              <label className="block font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
                Brand Tagline
              </label>
              <input
                type="text"
                value={brandTagline}
                onChange={(e) => setBrandTagline(e.target.value)}
                className="w-full px-4 py-3 bg-[#f6f9ff] border border-[#e8eef6] rounded-xl text-sm text-[#161c22] font-['Manrope'] focus:outline-none focus:ring-2 focus:ring-[#0059bb]/20 focus:border-[#0059bb]"
              />
            </div>
          </div>
        </div>

        {/* Direct Communications */}
        <div className="col-span-12 lg:col-span-5 bg-white rounded-xl shadow-sm p-8">
          <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
            Contact
          </div>
          <h2 className="font-headline font-bold text-lg text-[#161c22] mb-6">Direct Communications</h2>

          <div className="space-y-4">
            <div>
              <label className="block font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
                Global Support Email
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-slate-400">
                  mail
                </span>
                <input
                  type="email"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#f6f9ff] border border-[#e8eef6] rounded-xl text-sm text-[#161c22] font-['Manrope'] focus:outline-none focus:ring-2 focus:ring-[#0059bb]/20 focus:border-[#0059bb]"
                />
              </div>
            </div>
            <div>
              <label className="block font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
                Operations Hotline
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-slate-400">
                  phone
                </span>
                <input
                  type="text"
                  value={hotline}
                  onChange={(e) => setHotline(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#f6f9ff] border border-[#e8eef6] rounded-xl text-sm text-[#161c22] font-['Manrope'] focus:outline-none focus:ring-2 focus:ring-[#0059bb]/20 focus:border-[#0059bb]"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#e8eef6]">
            <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-3">
              Notification Preferences
            </div>
            {["New Booking Alert", "Application Submitted", "Message Received"].map((pref) => (
              <div key={pref} className="flex items-center justify-between py-2">
                <span className="text-sm text-[#414754] font-['Manrope']">{pref}</span>
                <div className="w-10 h-5 bg-[#0059bb] rounded-full relative cursor-pointer">
                  <div className="w-3.5 h-3.5 bg-white rounded-full absolute right-0.5 top-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Public Landing Hero */}
        <div className="col-span-12 bg-white rounded-xl shadow-sm p-8">
          <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
            Homepage
          </div>
          <h2 className="font-headline font-bold text-lg text-[#161c22] mb-6">Public Landing Hero</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hero Preview */}
            <div className="bg-[#161c22] rounded-xl overflow-hidden relative min-h-[220px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0059bb]/30 to-transparent" />
              <div className="relative z-10 text-center p-8">
                <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-blue-300 mb-2">
                  Hero Preview
                </div>
                <div className="font-headline font-extrabold text-2xl text-white leading-tight mb-2">
                  {heroHeadline}
                </div>
                <div className="text-blue-200 text-sm">{heroSubHeadline}</div>
                <div className="flex gap-3 mt-4 justify-center">
                  <span className="bg-white text-[#0059bb] font-['Manrope'] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl">
                    {primaryCta}
                  </span>
                  <span className="border border-white/40 text-white font-['Manrope'] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl">
                    {secondaryCta}
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
                  Headline
                </label>
                <textarea
                  value={heroHeadline}
                  onChange={(e) => setHeroHeadline(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-3 bg-[#f6f9ff] border border-[#e8eef6] rounded-xl text-sm text-[#161c22] font-['Manrope'] focus:outline-none focus:ring-2 focus:ring-[#0059bb]/20 focus:border-[#0059bb] resize-none"
                />
              </div>
              <div>
                <label className="block font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
                  Sub-Headline
                </label>
                <textarea
                  value={heroSubHeadline}
                  onChange={(e) => setHeroSubHeadline(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-3 bg-[#f6f9ff] border border-[#e8eef6] rounded-xl text-sm text-[#161c22] font-['Manrope'] focus:outline-none focus:ring-2 focus:ring-[#0059bb]/20 focus:border-[#0059bb] resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
                    Primary CTA
                  </label>
                  <input
                    type="text"
                    value={primaryCta}
                    onChange={(e) => setPrimaryCta(e.target.value)}
                    className="w-full px-4 py-3 bg-[#f6f9ff] border border-[#e8eef6] rounded-xl text-sm text-[#161c22] font-['Manrope'] focus:outline-none focus:ring-2 focus:ring-[#0059bb]/20 focus:border-[#0059bb]"
                  />
                </div>
                <div>
                  <label className="block font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
                    Secondary CTA
                  </label>
                  <input
                    type="text"
                    value={secondaryCta}
                    onChange={(e) => setSecondaryCta(e.target.value)}
                    className="w-full px-4 py-3 bg-[#f6f9ff] border border-[#e8eef6] rounded-xl text-sm text-[#161c22] font-['Manrope'] focus:outline-none focus:ring-2 focus:ring-[#0059bb]/20 focus:border-[#0059bb]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Architecture */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-xl shadow-sm p-8">
          <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
            Navigation
          </div>
          <h2 className="font-headline font-bold text-lg text-[#161c22] mb-6">Footer Architecture</h2>

          <div className="grid grid-cols-3 gap-6">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-[#0059bb] mb-3">
                  {col.title}
                </div>
                <div className="space-y-2">
                  {col.links.map((link) => (
                    <div
                      key={link}
                      className="flex items-center gap-2 p-2.5 bg-[#f6f9ff] rounded-xl group cursor-pointer hover:bg-[#e8eef6] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px] text-slate-300 group-hover:text-[#414754] transition-colors">
                        drag_indicator
                      </span>
                      <span className="text-sm text-[#414754] font-['Manrope'] flex-1">{link}</span>
                      <span className="material-symbols-outlined text-[16px] text-slate-300 group-hover:text-[#414754] transition-colors">
                        edit
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instance Status */}
        <div className="col-span-12 lg:col-span-4 bg-[#0059bb] rounded-xl shadow-sm p-8 flex flex-col justify-between">
          <div>
            <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-blue-200 mb-2">
              Deployment
            </div>
            <h2 className="font-headline font-bold text-xl text-white mb-4">Instance Status</h2>

            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="font-['Manrope'] uppercase tracking-widest text-[11px] font-bold text-emerald-300">
                Live & Production
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-['Manrope'] text-[11px] uppercase tracking-widest font-bold text-blue-200">
                  Last Deployment
                </span>
                <span className="font-['Manrope'] text-[11px] font-bold text-white">14m ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-['Manrope'] text-[11px] uppercase tracking-widest font-bold text-blue-200">
                  Config Version
                </span>
                <span className="font-['Manrope'] text-[11px] font-bold text-white">v8.42.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-['Manrope'] text-[11px] uppercase tracking-widest font-bold text-blue-200">
                  Server Region
                </span>
                <span className="font-['Manrope'] text-[11px] font-bold text-white">EU-West-1</span>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full border border-white/30 text-white font-['Manrope'] uppercase tracking-widest text-[10px] font-bold py-2.5 rounded-xl hover:bg-white/10 transition-colors">
            View Deployment History
          </button>
        </div>
      </div>
    </div>
  );
}
