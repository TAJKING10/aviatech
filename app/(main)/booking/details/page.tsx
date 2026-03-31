"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, ChevronRight, ChevronLeft, User, Building2, Mail, Phone, Globe, MessageSquare } from "lucide-react";

function StepIndicator({ current }: { current: number }) {
  const steps = ["Select Modules", "Your Details", "Review & Confirm"];
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center">
          {steps.map((label, idx) => {
            const step = idx + 1;
            const isActive = step === current;
            const isComplete = step < current;
            return (
              <div key={label} className="flex items-center flex-1">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all ${
                      isComplete
                        ? "bg-[#1E3A8A] text-white"
                        : isActive
                        ? "bg-[#F59E0B] text-[#0A1628]"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {isComplete ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  <span
                    className={`text-sm font-semibold hidden sm:block ${
                      isActive ? "text-[#0A1628]" : isComplete ? "text-[#1E3A8A]" : "text-gray-400"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-4 bg-gray-200 relative">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#1E3A8A] transition-all"
                      style={{ width: isComplete ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const countries = [
  "United States", "United Kingdom", "United Arab Emirates", "Singapore", "Canada",
  "Australia", "Germany", "France", "Japan", "South Korea", "India", "Brazil",
  "Saudi Arabia", "Qatar", "South Africa", "Nigeria", "Kenya", "China", "Other",
];

const roles = [
  "CEO / Managing Director",
  "VP / Director Flight Operations",
  "Chief Safety Officer",
  "Director Regulatory Compliance",
  "Training Manager",
  "Fleet Manager",
  "Operations Manager",
  "HR / People Director",
  "Other",
];

export default function BookingDetailsPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    country: "",
    teamSize: "",
    preferredDates: "",
    deliveryFormat: "on-site",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.company) newErrors.company = "Company is required";
    if (!form.role) newErrors.role = "Role is required";
    if (!form.country) newErrors.country = "Country is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    if (typeof window !== "undefined") {
      sessionStorage.setItem("booking_details", JSON.stringify(form));
    }
    router.push("/booking/review");
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 border rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? "border-red-400 focus:ring-red-100 focus:border-red-400"
        : "border-gray-200 focus:ring-[#1E3A8A]/10 focus:border-[#1E3A8A]"
    }`;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <StepIndicator current={2} />

      <div className="bg-[#0A1628] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">Your Details</h1>
          <p className="text-gray-300">Tell us about yourself and your organization so we can prepare a tailored proposal.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          {/* Personal Info */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <h2 className="text-lg font-black text-[#0A1628]">Personal Information</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Robert"
                  className={inputClass("firstName")}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Avery"
                  className={inputClass("lastName")}
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Email Address <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="r.avery@airline.com"
                  className={inputClass("email")}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className={inputClass("phone")}
                />
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#1E3A8A]" />
              </div>
              <h2 className="text-lg font-black text-[#0A1628]">Company Information</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Company / Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Atlas Airways"
                  className={inputClass("company")}
                />
                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your Role <span className="text-red-500">*</span>
                </label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className={inputClass("role") + " bg-white"}
                >
                  <option value="">Select your role</option>
                  {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
                {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> Country <span className="text-red-500">*</span></span>
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={inputClass("country") + " bg-white"}
                >
                  <option value="">Select country</option>
                  {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Team Size</label>
                <select
                  name="teamSize"
                  value={form.teamSize}
                  onChange={handleChange}
                  className={inputClass("teamSize") + " bg-white"}
                >
                  <option value="">Select team size</option>
                  <option>1–5 participants</option>
                  <option>6–15 participants</option>
                  <option>16–30 participants</option>
                  <option>30+ participants</option>
                </select>
              </div>
            </div>
          </div>

          {/* Scheduling */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
              </div>
              <h2 className="text-lg font-black text-[#0A1628]">Scheduling & Preferences</h2>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Delivery Format</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "on-site", label: "On-Site", desc: "At your location" },
                    { value: "virtual", label: "Virtual", desc: "Live online sessions" },
                    { value: "hybrid", label: "Hybrid", desc: "Mix of both" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex flex-col items-center p-3 rounded-xl border-2 cursor-pointer transition-all text-center ${
                        form.deliveryFormat === opt.value
                          ? "border-[#F59E0B] bg-[#F59E0B]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="deliveryFormat"
                        value={opt.value}
                        checked={form.deliveryFormat === opt.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="font-semibold text-sm text-[#0A1628]">{opt.label}</span>
                      <span className="text-gray-400 text-xs mt-0.5">{opt.desc}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Preferred Date(s) or Time Frame
                </label>
                <input
                  type="text"
                  name="preferredDates"
                  value={form.preferredDates}
                  onChange={handleChange}
                  placeholder="e.g. Q3 2026, or specific dates like July 14-16, 2026"
                  className={inputClass("preferredDates")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Additional Notes or Requirements
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us anything else we should know — specific outcomes you want to achieve, existing programs we should be aware of, or any logistical requirements."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/10 focus:border-[#1E3A8A] transition-all resize-none"
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => router.push("/booking")}
              className="flex items-center gap-2 text-gray-500 hover:text-[#0A1628] font-semibold text-sm transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Modules
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#F59E0B]/25"
            >
              Review Order <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
