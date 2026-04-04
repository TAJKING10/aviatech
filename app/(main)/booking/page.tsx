"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const moduleList = [
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

const categories = ["B1.1 - Aeroplanes Turbine", "B1.2 - Aeroplanes Piston", "B2 - Avionics"];
const trainingPaths = ["Training + Examination", "Examination Only", "Training Only"];

interface FormData {
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
  company: string;
  notes: string;
}

async function downloadPDF(data: {
  referenceNo: string;
  firstName: string;
  surname: string;
  email: string;
  category: string;
  trainingPath: string;
  modules: string[];
}) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.setTextColor(0, 89, 187);
  doc.text("Aviatech Consulting", 20, 25);

  doc.setFontSize(12);
  doc.setTextColor(22, 28, 34);
  doc.text("Booking Confirmation", 20, 35);

  doc.setDrawColor(0, 89, 187);
  doc.setLineWidth(0.5);
  doc.line(20, 40, 190, 40);

  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`, 20, 50);

  doc.setFontSize(11);
  doc.setTextColor(22, 28, 34);

  const rows: [string, string][] = [
    ["Reference No.", data.referenceNo],
    ["Name", `${data.firstName} ${data.surname}`],
    ["Email", data.email],
    ["Category", data.category],
    ["Training Path", data.trainingPath],
    ["Status", "Pending Review"],
  ];

  let y = 65;
  rows.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold");
    doc.text(label, 20, y);
    doc.setFont("helvetica", "normal");
    doc.text(value, 75, y);
    y += 10;
  });

  y += 5;
  doc.setFont("helvetica", "bold");
  doc.text("Selected Modules:", 20, y);
  y += 8;
  doc.setFont("helvetica", "normal");
  data.modules.forEach((mod) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.text(`• ${mod}`, 25, y);
    y += 7;
  });

  y += 10;
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text("Our team will review your application and contact you within 24 hours.", 20, y);
  doc.text("aviatech.com | connect@aviatech.com", 20, y + 8);

  doc.save(`Aviatech-${data.referenceNo}.pdf`);
}

export default function BookingPage() {
  const [bookingStep, setBookingStep] = useState(1);
  const [selected, setSelected] = useState<Record<string, boolean>>(
    Object.fromEntries(moduleList.map((m) => [m.id, m.checked]))
  );
  const [category, setCategory] = useState(categories[0]);
  const [trainingPath, setTrainingPath] = useState(trainingPaths[0]);
  const [form, setForm] = useState<FormData>({
    firstName: "", surname: "", email: "", phone: "",
    dateOfBirth: "", placeOfBirth: "", nationality: "", company: "", notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [referenceNo, setReferenceNo] = useState("AV-000-XX");

  const selectedModules = moduleList.filter((m) => selected[m.id]);
  const selectedCount = selectedModules.length;

  function updateForm(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    if (!form.firstName || !form.surname || !form.email || !form.phone) {
      setSubmitError("Please fill in all required fields.");
      return;
    }
    setSubmitError("");
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          category,
          trainingPath,
          modules: selectedModules.map((m) => m.name),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error || "Submission failed. Please try again.");
      } else {
        setReferenceNo(data.referenceNo);
        setBookingStep(3);
      }
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const formFields: { key: keyof FormData; label: string; type: string; required?: boolean }[] = [
    { key: "firstName", label: "First Name", type: "text", required: true },
    { key: "surname", label: "Surname", type: "text", required: true },
    { key: "email", label: "Professional Email", type: "email", required: true },
    { key: "phone", label: "Phone", type: "tel", required: true },
    { key: "dateOfBirth", label: "Date of Birth", type: "date" },
    { key: "placeOfBirth", label: "Place of Birth", type: "text" },
    { key: "nationality", label: "Nationality", type: "text" },
    { key: "company", label: "Company / Organization", type: "text" },
  ];

  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden border border-outline-variant/10"
        >
          {/* Progress Stepper */}
          <div className="bg-surface-container-low px-8 py-10 border-b border-outline-variant/10">
            <div className="flex justify-center items-center gap-4">
              <div className="flex items-center gap-3">
                <span className={cn(
                  "w-10 h-10 rounded flex items-center justify-center font-bold text-lg transition-colors",
                  bookingStep >= 1 ? "bg-primary text-white" : "bg-surface-container-highest text-on-surface-variant"
                )}>
                  {bookingStep > 1 ? <span className="material-symbols-outlined">check</span> : "1"}
                </span>
                <span className={cn(
                  "font-headline font-bold text-sm tracking-tight",
                  bookingStep >= 1 ? "text-on-surface" : "text-on-surface-variant"
                )}>Select Modules</span>
              </div>
              <div className="w-16 h-px bg-outline-variant/30" />
              <div className="flex items-center gap-3">
                <span className={cn(
                  "w-10 h-10 rounded flex items-center justify-center font-bold text-lg transition-colors",
                  bookingStep >= 2 ? "bg-primary text-white" : "bg-surface-container-highest text-on-surface-variant"
                )}>
                  {bookingStep > 2 ? <span className="material-symbols-outlined">check</span> : "2"}
                </span>
                <span className={cn(
                  "font-headline font-bold text-sm tracking-tight",
                  bookingStep >= 2 ? "text-on-surface" : "text-on-surface-variant"
                )}>Your Details</span>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1 — Module Selection */}
            {bookingStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-8 lg:p-12"
              >
                <div className="mb-10">
                  <h1 className="text-3xl font-extrabold text-on-surface font-headline tracking-tighter mb-2">
                    Select Your Modules
                  </h1>
                  <p className="text-on-surface-variant text-sm max-w-lg leading-relaxed">
                    Customize your aerospace training path by selecting the specific modules required for your certification or consultancy goals.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant font-headline">Category</label>
                    <div className="relative">
                      <select
                        className="w-full appearance-none bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {categories.map((c) => <option key={c}>{c}</option>)}
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant font-headline">Training Path</label>
                    <div className="relative">
                      <select
                        className="w-full appearance-none bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        value={trainingPath}
                        onChange={(e) => setTrainingPath(e.target.value)}
                      >
                        {trainingPaths.map((p) => <option key={p}>{p}</option>)}
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xs uppercase tracking-widest text-primary font-headline">Available Modules ({moduleList.length})</h3>
                  <button
                    onClick={() => setSelected(Object.fromEntries(moduleList.map((m) => [m.id, true])))}
                    className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Select All
                  </button>
                </div>

                <div className="border border-outline-variant/20 rounded-xl overflow-hidden mb-10 max-h-[400px] overflow-y-auto bg-surface-container-low/30 scrollbar-hide">
                  <div className="divide-y divide-outline-variant/10">
                    {moduleList.map((mod) => (
                      <label key={mod.id} className="flex items-center gap-4 p-4 hover:bg-white transition-colors cursor-pointer group">
                        <input
                          className="w-5 h-5 rounded border-outline-variant/50 text-primary focus:ring-primary cursor-pointer"
                          type="checkbox"
                          checked={!!selected[mod.id]}
                          onChange={(e) => setSelected((prev) => ({ ...prev, [mod.id]: e.target.checked }))}
                        />
                        <div className="flex-1">
                          <p className="font-bold text-sm text-on-surface">{mod.name}</p>
                          <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{mod.sub}</p>
                        </div>
                        {selected[mod.id] && <span className="material-symbols-outlined text-primary text-sm">check_circle</span>}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-outline-variant/10">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-headline">Modules Selected</p>
                    <p className="text-3xl font-extrabold text-primary font-headline">{selectedCount}</p>
                  </div>
                  <button
                    className="bg-primary text-white px-10 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-primary-container transition-all active:scale-95 shadow-lg disabled:opacity-50"
                    onClick={() => setBookingStep(2)}
                    disabled={selectedCount === 0}
                  >
                    Continue <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2 — Personal Details */}
            {bookingStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-8 lg:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-8">
                    <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tighter mb-6">Your Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {formFields.map((field) => (
                        <div key={field.key} className="space-y-2">
                          <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant font-headline">
                            {field.label}{field.required ? " *" : ""}
                          </label>
                          <input
                            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-sm transition-all focus:bg-white"
                            placeholder={field.label}
                            type={field.type}
                            value={form[field.key]}
                            onChange={(e) => updateForm(field.key, e.target.value)}
                            required={field.required}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant font-headline">Additional Notes</label>
                      <textarea
                        className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none resize-none text-sm transition-all focus:bg-white"
                        placeholder="Any additional information..."
                        rows={4}
                        value={form.notes}
                        onChange={(e) => updateForm("notes", e.target.value)}
                      />
                    </div>

                    {submitError && (
                      <div className="bg-error-container text-error rounded-lg px-4 py-3 text-sm font-medium flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">error</span>
                        {submitError}
                      </div>
                    )}

                    <div className="flex gap-4 pt-4">
                      <button
                        className="bg-surface-container text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-container-high transition-all"
                        onClick={() => setBookingStep(1)}
                        disabled={isSubmitting}
                      >
                        Back
                      </button>
                      <button
                        className="primary-gradient text-white px-10 py-4 rounded-lg font-bold flex-1 hover:brightness-110 transition-all active:scale-95 shadow-lg disabled:opacity-60"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </button>
                    </div>
                  </div>

                  {/* Summary Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 sticky top-32">
                      <h3 className="font-headline font-bold text-lg text-on-surface mb-6 border-b border-outline-variant/10 pb-4">Application Summary</h3>
                      <div className="space-y-6">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Category</p>
                          <p className="font-bold text-sm text-primary">{category}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Path</p>
                          <p className="font-bold text-sm text-primary">{trainingPath}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Selected Modules</p>
                          <ul className="space-y-2 mt-2">
                            {selectedModules.slice(0, 3).map((m) => (
                              <li key={m.id} className="flex items-center gap-2 text-xs text-on-surface font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {m.name}
                              </li>
                            ))}
                            {selectedCount > 3 && (
                              <li className="text-[10px] text-on-surface-variant font-bold italic pl-3.5">
                                + {selectedCount - 3} more modules
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3 — Success */}
            {bookingStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-16 text-center"
              >
                <div className="w-24 h-24 bg-[#00cba9] text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                    className="material-symbols-outlined text-5xl font-bold"
                  >
                    check
                  </motion.span>
                </div>
                <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4 tracking-tighter">Application Submitted!</h2>
                <p className="text-on-surface-variant text-lg max-w-md mx-auto mb-10 leading-relaxed font-body">
                  Your training module application has been successfully received. Our operations team will review your details and contact you within 24 hours.
                </p>
                <div className="bg-surface-container-low rounded-xl p-8 max-w-sm mx-auto mb-10 border border-outline-variant/10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Reference Number</p>
                  <p className="text-2xl font-headline font-black text-primary tracking-[0.2em]">{referenceNo}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() =>
                      downloadPDF({
                        referenceNo,
                        firstName: form.firstName,
                        surname: form.surname,
                        email: form.email,
                        category,
                        trainingPath,
                        modules: selectedModules.map((m) => m.name),
                      })
                    }
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-all active:scale-95"
                  >
                    <span className="material-symbols-outlined">download</span>
                    Download PDF
                  </button>
                  <Link
                    href="/"
                    className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-bold hover:bg-primary-container transition-all active:scale-95 shadow-lg"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
