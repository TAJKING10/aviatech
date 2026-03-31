"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle, ChevronLeft, Download, Clock, Users, Shield, Plane, Globe,
  BarChart3, BookOpen, Zap, User, Building2, Mail, Phone, MessageSquare,
} from "lucide-react";

const moduleIcons: Record<string, React.ElementType> = {
  sms: Shield,
  "flight-ops": Plane,
  atc: Globe,
  crm: Users,
  regulatory: BookOpen,
  fleet: BarChart3,
  emergency: Zap,
  frms: Clock,
};

const moduleData: Record<string, { title: string; price: number; duration: string }> = {
  sms: { title: "Safety Management Systems (SMS)", price: 4800, duration: "3 days" },
  "flight-ops": { title: "Flight Operations Management", price: 3600, duration: "2 days" },
  atc: { title: "Air Traffic Control Fundamentals", price: 2900, duration: "2 days" },
  crm: { title: "Crew Resource Management (CRM)", price: 2400, duration: "1.5 days" },
  regulatory: { title: "Aviation Regulatory Compliance", price: 4200, duration: "2.5 days" },
  fleet: { title: "Fleet Planning & Management", price: 3800, duration: "2 days" },
  emergency: { title: "Emergency Response Planning", price: 1800, duration: "1 day" },
  frms: { title: "Fatigue Risk Management (FRMS)", price: 2600, duration: "1.5 days" },
};

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
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all ${isComplete ? "bg-[#1E3A8A] text-white" : isActive ? "bg-[#F59E0B] text-[#0A1628]" : "bg-gray-100 text-gray-400"}`}>
                    {isComplete ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  <span className={`text-sm font-semibold hidden sm:block ${isActive ? "text-[#0A1628]" : isComplete ? "text-[#1E3A8A]" : "text-gray-400"}`}>{label}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-4 bg-gray-200 relative">
                    <div className="absolute top-0 left-0 h-full bg-[#1E3A8A] transition-all" style={{ width: isComplete ? "100%" : "0%" }} />
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

export default function BookingReviewPage() {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [moduleIds, setModuleIds] = useState<string[]>([]);
  const [details, setDetails] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const m = sessionStorage.getItem("booking_modules");
      const d = sessionStorage.getItem("booking_details");
      if (m) setModuleIds(JSON.parse(m));
      if (d) setDetails(JSON.parse(d));
    }
  }, []);

  const selectedModules = moduleIds.map((id) => ({ id, ...moduleData[id] })).filter(Boolean);
  const subtotal = selectedModules.reduce((sum, m) => sum + m.price, 0);
  const tax = Math.round(subtotal * 0.0875);
  const total = subtotal + tax;

  const confirmationNumber = `AVI-${Date.now().toString().slice(-6)}`;

  const handleConfirm = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        <StepIndicator current={3} />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Success Animation */}
          <div className="text-center mb-10">
            <div className="w-28 h-28 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 success-icon">
              <svg viewBox="0 0 52 52" className="w-14 h-14" fill="none">
                <circle cx="26" cy="26" r="25" stroke="#10B981" strokeWidth="2" fill="#D1FAE5" />
                <path
                  className="check-path"
                  d="M14 27L22 35L38 17"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-black text-[#0A1628] mb-2">Booking Confirmed!</h1>
            <p className="text-gray-500 text-lg mb-1">Thank you, {details.firstName || "valued client"}!</p>
            <p className="text-gray-400 text-sm">
              Your booking request has been received. A senior consultant will contact you within
              one business day to finalize scheduling and logistics.
            </p>
          </div>

          {/* Confirmation Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
            <div className="bg-[#0A1628] px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-xs">Confirmation Number</p>
                <p className="text-[#F59E0B] font-black text-lg">{confirmationNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs">Date</p>
                <p className="text-white font-semibold text-sm">
                  {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
            </div>

            <div className="p-6">
              {/* Modules Summary */}
              <h3 className="font-bold text-[#0A1628] text-sm mb-4 uppercase tracking-wider">Modules Booked</h3>
              <div className="space-y-3 mb-6">
                {selectedModules.map((m) => {
                  const Icon = moduleIcons[m.id] || BookOpen;
                  return (
                    <div key={m.id} className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl">
                      <div className="w-9 h-9 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#1E3A8A]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[#0A1628] font-semibold text-sm">{m.title}</p>
                        <p className="text-gray-400 text-xs">{m.duration}</p>
                      </div>
                      <span className="text-[#0A1628] font-bold text-sm">${m.price.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2 mb-6">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span><span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Tax (8.75%)</span><span>${tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-black text-[#0A1628]">
                  <span>Total</span><span>${total.toLocaleString()}</span>
                </div>
              </div>

              {/* Contact Details */}
              <h3 className="font-bold text-[#0A1628] text-sm mb-3 uppercase tracking-wider">Contact Details</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="w-4 h-4 text-gray-400" />
                  {details.firstName} {details.lastName}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Building2 className="w-4 h-4 text-gray-400" />
                  {details.company || "—"}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4 text-gray-400" />
                  {details.email || "—"}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe className="w-4 h-4 text-gray-400" />
                  {details.country || "—"}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#1E3A8A] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm">
              <Download className="w-4 h-4" /> Download Confirmation
            </button>
            <Link
              href="/"
              className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-[#0A1628] font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
            >
              Return to Homepage
            </Link>
          </div>

          <p className="text-center text-gray-400 text-xs mt-6">
            A confirmation email has been sent to <strong>{details.email}</strong>.<br />
            Questions? Contact <a href="mailto:bookings@aviatech.aero" className="text-[#1E3A8A] hover:underline">bookings@aviatech.aero</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <StepIndicator current={3} />

      <div className="bg-[#0A1628] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">Review Your Booking</h1>
          <p className="text-gray-300">Please review your selection before confirming.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        {/* Modules */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-[#0A1628] mb-5 text-lg">Selected Training Modules</h2>
          {selectedModules.length === 0 ? (
            <p className="text-gray-400 text-sm">No modules selected. <Link href="/booking" className="text-[#1E3A8A] underline">Go back to add modules.</Link></p>
          ) : (
            <div className="space-y-3">
              {selectedModules.map((m) => {
                const Icon = moduleIcons[m.id] || BookOpen;
                return (
                  <div key={m.id} className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-xl">
                    <div className="w-11 h-11 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#1E3A8A]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#0A1628] font-bold text-sm">{m.title}</p>
                      <p className="text-gray-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> {m.duration}</p>
                    </div>
                    <span className="text-[#0A1628] font-black">${m.price.toLocaleString()}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Contact Info Review */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-black text-[#0A1628] text-lg">Contact Details</h2>
            <Link href="/booking/details" className="text-[#1E3A8A] text-sm font-semibold hover:underline">Edit</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: User, label: "Name", value: `${details.firstName || ""} ${details.lastName || ""}`.trim() || "—" },
              { icon: Building2, label: "Company", value: details.company || "—" },
              { icon: Mail, label: "Email", value: details.email || "—" },
              { icon: Phone, label: "Phone", value: details.phone || "—" },
              { icon: Globe, label: "Country", value: details.country || "—" },
              { icon: MessageSquare, label: "Format", value: details.deliveryFormat || "On-site" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#F8FAFC] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">{label}</p>
                  <p className="text-[#0A1628] font-semibold text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-[#0A1628] mb-5 text-lg">Price Summary</h2>
          <div className="space-y-3">
            {selectedModules.map((m) => (
              <div key={m.id} className="flex justify-between text-sm">
                <span className="text-gray-600">{m.title}</span>
                <span className="text-gray-800 font-semibold">${m.price.toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t border-gray-100 pt-3 mt-3 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span><span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Tax (8.75%)</span><span>${tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xl font-black text-[#0A1628] pt-1 border-t border-gray-100">
                <span>Total</span><span>${total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="bg-[#F59E0B]/5 border border-[#F59E0B]/20 rounded-xl p-4 text-sm text-gray-600 leading-relaxed">
          By confirming this booking, you agree to Aviatech&apos;s{" "}
          <Link href="/terms" className="text-[#1E3A8A] underline">Terms & Conditions</Link> and{" "}
          <Link href="/privacy" className="text-[#1E3A8A] underline">Privacy Policy</Link>. Payment is due upon invoice receipt. Full refunds available up to 14 days before the session start date.
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/booking/details")}
            className="flex items-center gap-2 text-gray-500 hover:text-[#0A1628] font-semibold text-sm transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Edit Details
          </button>
          <button
            onClick={handleConfirm}
            disabled={loading || selectedModules.length === 0}
            className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] disabled:opacity-50 disabled:cursor-not-allowed text-[#0A1628] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#F59E0B]/25"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-[#0A1628]/30 border-t-[#0A1628] rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                Confirm Booking
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
