"use client";

import { useState } from "react";
import Link from "next/link";

const modules = [
  { id: "M1", name: "M1 Mathematics", sub: "Core Competency Module", checked: true },
  { id: "M2", name: "M2 Physics", sub: "Core Competency Module", checked: false },
  { id: "M3", name: "M3 Electrical Fundamentals", sub: "Core Competency Module", checked: false },
  { id: "M4", name: "M4 Electronic Fundamentals", sub: "Core Competency Module", checked: false },
  { id: "M5", name: "M5 Digital Techniques / Electronic Instrument Systems", sub: "Systems Module", checked: false },
  { id: "M6", name: "M6 Materials & Hardware", sub: "Systems Module", checked: false },
  { id: "M7", name: "M7 Maintenance Practices", sub: "Maintenance Module", checked: false },
  { id: "M8", name: "M8 Basic Aerodynamics", sub: "Aeronautical Module", checked: false },
  { id: "M9", name: "M9 Human Factors", sub: "Human Factors Module", checked: true },
  { id: "M10", name: "M10 Aviation Legislation", sub: "Regulatory Module", checked: false },
  { id: "M11A", name: "M11A Turbine Aeroplane Aerodynamics, Structures & Systems", sub: "B1.1 Specific", checked: true },
  { id: "M15", name: "M15 Gas Turbine Engine", sub: "Propulsion Module", checked: false },
  { id: "M17", name: "M17 Propeller", sub: "Propulsion Module", checked: false },
];

export default function BookingPage() {
  const [selected, setSelected] = useState<Record<string, boolean>>(
    Object.fromEntries(modules.map((m) => [m.id, m.checked]))
  );

  const selectedCount = Object.values(selected).filter(Boolean).length;

  return (
    <div className="bg-[#f6f9ff] font-['Inter'] text-[#161c22] antialiased min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-[0px_40px_80px_rgba(22,28,34,0.08)] overflow-hidden">
          {/* Progress Stepper */}
          <div className="bg-[#eef4fc] px-8 py-10 border-b border-[#c1c6d7]/15">
            <div className="flex items-center justify-between relative max-w-2xl mx-auto">
              <div className="absolute top-5 left-0 w-full h-[2px] bg-[#c1c6d7]/30" />
              <div className="absolute top-5 left-0 w-1/3 h-[2px] bg-[#0059bb]" />
              {[
                { num: "1", label: "Select Modules", active: true },
                { num: "2", label: "Your Details", active: false },
                { num: "3", label: "Review & Confirm", active: false },
                { num: "4", label: "Success", active: false },
              ].map((step) => (
                <div key={step.num} className="relative z-10 flex flex-col items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      step.active
                        ? "bg-[#0059bb] text-white shadow-lg shadow-[#0059bb]/30"
                        : "bg-[#dde3eb] text-[#414754]"
                    }`}
                  >
                    {step.num}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest font-headline ${
                      step.active ? "text-[#0059bb]" : "text-[#414754]/60"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Form */}
          <div className="p-8 md:p-12">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#001a41] font-headline tracking-tight mb-2">
                Select Your Modules
              </h1>
              <p className="text-[#414754]/70 text-sm max-w-lg leading-relaxed">
                Customize your aerospace training path by selecting the specific modules required for your certification or consultancy goals.
              </p>
            </div>

            {/* Selects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#414754]/80 font-headline">Category</label>
                <div className="relative">
                  <select className="w-full bg-[#e8eef6] px-4 py-4 rounded-lg border-none focus:ring-1 focus:ring-[#0059bb] text-[#161c22] font-medium text-sm appearance-none cursor-pointer outline-none">
                    <option>B1.1 Aeroplanes Turbine</option>
                    <option>B1.2 Aeroplanes Piston</option>
                    <option>B2 Avionics</option>
                    <option>Human Factors</option>
                    <option>Consulting Services</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#414754]/50">expand_more</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#414754]/80 font-headline">Training Path</label>
                <div className="relative">
                  <select className="w-full bg-[#e8eef6] px-4 py-4 rounded-lg border-none focus:ring-1 focus:ring-[#0059bb] text-[#161c22] font-medium text-sm appearance-none cursor-pointer outline-none">
                    <option>Training + Examination</option>
                    <option>Training Only</option>
                    <option>Examination Only</option>
                    <option>Advisory Session</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#414754]/50">expand_more</span>
                </div>
              </div>
            </div>

            {/* Module List */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-[0.15rem] text-[#0059bb] font-headline">Available Modules</h2>
                <button
                  onClick={() => setSelected(Object.fromEntries(modules.map((m) => [m.id, true])))}
                  className="text-[10px] font-bold uppercase tracking-widest text-[#0059bb] border-b border-[#0059bb]/20 hover:border-[#0059bb] transition-all"
                >
                  Select All
                </button>
              </div>
              <div className="border border-[#c1c6d7]/30 rounded-xl overflow-hidden bg-[#eef4fc]/30">
                <div className="h-[400px] overflow-y-auto p-1" style={{ scrollbarWidth: "thin" }}>
                  <div className="space-y-1">
                    {modules.map((mod) => (
                      <label
                        key={mod.id}
                        className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all ${
                          selected[mod.id]
                            ? "bg-white shadow-sm border border-[#0059bb]/10"
                            : "hover:bg-white/60"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selected[mod.id] || false}
                          onChange={(e) => setSelected((prev) => ({ ...prev, [mod.id]: e.target.checked }))}
                          className="w-5 h-5 rounded border-[#c1c6d7] text-[#0059bb] focus:ring-[#0059bb] cursor-pointer"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-[#161c22] tracking-tight">{mod.name}</p>
                          <p className="text-[10px] font-semibold text-[#414754]/50 uppercase tracking-tighter">{mod.sub}</p>
                        </div>
                        {selected[mod.id] && (
                          <span className="material-symbols-outlined text-[#0059bb] text-sm">check_circle</span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Summary + CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#e8eef6]">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#414754]/60 font-headline">
                  Modules Selected
                </p>
                <p className="text-3xl font-extrabold text-[#0059bb] font-headline">{selectedCount}</p>
              </div>
              <Link
                href="/booking/details"
                className="bg-gradient-to-br from-[#0059bb] to-[#0070ea] text-white font-headline font-bold px-10 py-4 rounded-lg shadow-lg hover:opacity-90 transition-all inline-flex items-center gap-2"
              >
                Continue to Details
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
