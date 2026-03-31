"use client";

import Link from "next/link";

export default function BookingDetailsPage() {
  return (
    <div className="bg-[#f6f9ff] font-['Inter'] text-[#161c22] antialiased min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Progress Stepper */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="flex justify-between items-start">
            {[
              { num: "1", label: "Select Modules", done: true },
              { num: "2", label: "Your Details", active: true },
              { num: "3", label: "Review & Confirm", done: false },
              { num: "4", label: "Success", done: false },
            ].map((step, i) => (
              <div key={step.num} className="flex flex-col items-center gap-3 group relative flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    step.done
                      ? "bg-[#0059bb] text-white shadow-md"
                      : step.active
                      ? "bg-[#0070ea] text-white shadow-xl ring-4 ring-[#0059bb]/10"
                      : "bg-[#dde3eb] text-[#414754]"
                  }`}
                >
                  {step.done ? (
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  ) : (
                    step.num
                  )}
                </div>
                <span
                  className={`font-['Inter'] text-[10px] uppercase tracking-[0.15em] ${
                    step.done || step.active ? "font-bold text-[#161c22]" : "font-semibold text-[#414754]/50"
                  } ${step.done ? "text-[#0059bb]" : ""}`}
                >
                  {step.label}
                </span>
                {i < 3 && (
                  <div
                    className={`absolute top-5 left-1/2 w-full h-[2px] -z-10 ${
                      step.done ? "bg-[#0059bb]" : "bg-[#dde3eb]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-4xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-12 bg-white p-8 md:p-12 rounded-xl shadow-[0px_20px_40px_rgba(22,28,34,0.03)] border border-[#c1c6d7]/10">
            <div className="mb-10">
              <h1 className="font-headline text-3xl font-extrabold tracking-tight mb-2">
                Technical Training Application
              </h1>
              <p className="text-[#414754] text-sm max-w-xl">
                Please provide your professional identification and corporate affiliation. All data is processed according to EASA Part-147 data protection standards.
              </p>
            </div>

            <form className="space-y-8">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { label: "First Name", placeholder: "e.g. Jean", type: "text" },
                  { label: "Last Name", placeholder: "e.g. Dupont", type: "text" },
                  { label: "Professional Email", placeholder: "j.dupont@airline.com", type: "email" },
                  { label: "Phone Number", placeholder: "+33 1 00 00 00 00", type: "tel" },
                ].map((field) => (
                  <div key={field.label} className="space-y-2">
                    <label className="font-['Inter'] text-[11px] uppercase tracking-wider font-bold text-[#414754]">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-[#dde3eb]/30 border-none rounded-md px-4 py-3 focus:ring-1 focus:ring-[#0059bb] focus:bg-white transition-all duration-200 outline-none"
                    />
                  </div>
                ))}
              </div>

              <div className="h-px bg-[#e3e9f1] w-full" />

              {/* Company Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="md:col-span-2 space-y-2">
                  <label className="font-['Inter'] text-[11px] uppercase tracking-wider font-bold text-[#414754]">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Full legal name of the entity"
                    className="w-full bg-[#dde3eb]/30 border-none rounded-md px-4 py-3 focus:ring-1 focus:ring-[#0059bb] focus:bg-white transition-all duration-200 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-['Inter'] text-[11px] uppercase tracking-wider font-bold text-[#414754]">
                    Country of Operations
                  </label>
                  <select className="w-full bg-[#dde3eb]/30 border-none rounded-md px-4 py-3 focus:ring-1 focus:ring-[#0059bb] focus:bg-white transition-all duration-200 outline-none">
                    <option>United Kingdom</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>United States</option>
                    <option>United Arab Emirates</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-['Inter'] text-[11px] uppercase tracking-wider font-bold text-[#414754]">
                    ZIP / Postal Code
                  </label>
                  <input
                    type="text"
                    placeholder="XXXXX"
                    className="w-full bg-[#dde3eb]/30 border-none rounded-md px-4 py-3 focus:ring-1 focus:ring-[#0059bb] focus:bg-white transition-all duration-200 outline-none"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="font-['Inter'] text-[11px] uppercase tracking-wider font-bold text-[#414754]">
                    Registered Office Address
                  </label>
                  <input
                    type="text"
                    placeholder="Street name and number"
                    className="w-full bg-[#dde3eb]/30 border-none rounded-md px-4 py-3 focus:ring-1 focus:ring-[#0059bb] focus:bg-white transition-all duration-200 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-['Inter'] text-[11px] uppercase tracking-wider font-bold text-[#414754]">
                  Additional Notes / Technical Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Specify any previous certifications or specific scheduling requirements..."
                  className="w-full bg-[#dde3eb]/30 border-none rounded-md px-4 py-3 focus:ring-1 focus:ring-[#0059bb] focus:bg-white transition-all duration-200 outline-none"
                />
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 w-5 h-5 rounded border-[#c1c6d7] text-[#0059bb] focus:ring-[#0059bb]" />
                <span className="text-sm text-[#414754]">
                  I acknowledge that all information provided is accurate and that the application is subject to review under EASA Part-147 and relevant national authority requirements.
                </span>
              </label>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-[#e8eef6]">
                <Link
                  href="/booking"
                  className="flex items-center gap-2 text-[#414754] font-['Inter'] text-sm font-bold hover:text-[#0059bb] transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Back
                </Link>
                <Link
                  href="/booking/review"
                  className="bg-gradient-to-br from-[#0059bb] to-[#0070ea] text-white font-headline font-bold px-10 py-4 rounded-lg shadow-lg hover:opacity-90 transition-all inline-flex items-center gap-2"
                >
                  Review Application
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
