"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle, Clock, Users, BookOpen, Shield, Plane, Globe, BarChart3, Zap, ChevronRight, Info } from "lucide-react";

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  participants: string;
  price: number;
  icon: React.ElementType;
  level: "Foundation" | "Advanced" | "Expert";
  popular?: boolean;
  tags: string[];
}

const modules: TrainingModule[] = [
  {
    id: "sms",
    title: "Safety Management Systems (SMS)",
    description: "Comprehensive SMS design and implementation aligned with ICAO Annex 19. Covers hazard identification, risk assessment, safety assurance, and safety promotion.",
    duration: "3 days",
    participants: "Up to 20",
    price: 4800,
    icon: Shield,
    level: "Advanced",
    popular: true,
    tags: ["ICAO", "Safety", "Risk Management"],
  },
  {
    id: "flight-ops",
    title: "Flight Operations Management",
    description: "Advanced flight operations strategy covering scheduling optimization, FOQA programs, crew resource management, and OTP improvement methodology.",
    duration: "2 days",
    participants: "Up to 15",
    price: 3600,
    icon: Plane,
    level: "Expert",
    popular: true,
    tags: ["Operations", "CRM", "FOQA"],
  },
  {
    id: "atc",
    title: "Air Traffic Control Fundamentals",
    description: "Foundational and advanced ATC procedures, phraseology, and airspace management concepts for flight operations personnel and aviation managers.",
    duration: "2 days",
    participants: "Up to 25",
    price: 2900,
    icon: Globe,
    level: "Foundation",
    tags: ["ATC", "Airspace", "Procedures"],
  },
  {
    id: "crm",
    title: "Crew Resource Management (CRM)",
    description: "Industry-leading CRM program based on the latest human factors research. Includes threat and error management (TEM) and decision-making frameworks.",
    duration: "1.5 days",
    participants: "Up to 30",
    price: 2400,
    icon: Users,
    level: "Advanced",
    popular: true,
    tags: ["CRM", "Human Factors", "TEM"],
  },
  {
    id: "regulatory",
    title: "Aviation Regulatory Compliance",
    description: "Navigate FAA, EASA, and international regulations with confidence. Covers certification processes, audit preparation, and corrective action management.",
    duration: "2.5 days",
    participants: "Up to 20",
    price: 4200,
    icon: BookOpen,
    level: "Advanced",
    tags: ["FAA", "EASA", "Compliance", "Audit"],
  },
  {
    id: "fleet",
    title: "Fleet Planning & Management",
    description: "Strategic fleet planning methodology including network analysis, aircraft type selection, lease vs. buy decisions, and maintenance program optimization.",
    duration: "2 days",
    participants: "Up to 12",
    price: 3800,
    icon: BarChart3,
    level: "Expert",
    tags: ["Fleet", "Strategy", "Finance"],
  },
  {
    id: "emergency",
    title: "Emergency Response Planning",
    description: "Develop and test your Emergency Response Plan (ERP) including family assistance, media relations, regulatory notification, and go-team protocols.",
    duration: "1 day",
    participants: "Up to 20",
    price: 1800,
    icon: Zap,
    level: "Foundation",
    tags: ["Emergency", "ERP", "Crisis Management"],
  },
  {
    id: "frms",
    title: "Fatigue Risk Management (FRMS)",
    description: "Implement an evidence-based FRMS that goes beyond regulatory FTL requirements to proactively manage fatigue risk across your operation.",
    duration: "1.5 days",
    participants: "Up to 25",
    price: 2600,
    icon: Clock,
    level: "Advanced",
    tags: ["FRMS", "Fatigue", "Safety"],
  },
];

const levelColors = {
  Foundation: "bg-emerald-100 text-emerald-700",
  Advanced: "bg-blue-100 text-blue-700",
  Expert: "bg-purple-100 text-purple-700",
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

export default function BookingPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleModule = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const selectedModules = modules.filter((m) => selected.includes(m.id));
  const total = selectedModules.reduce((sum, m) => sum + m.price, 0);

  const handleContinue = () => {
    if (selected.length === 0) return;
    // Store in sessionStorage for next steps
    if (typeof window !== "undefined") {
      sessionStorage.setItem("booking_modules", JSON.stringify(selected));
    }
    router.push("/booking/details");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <StepIndicator current={1} />

      {/* Header */}
      <div className="bg-[#0A1628] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Select Your Training Modules
          </h1>
          <p className="text-gray-300">
            Choose one or more modules for your team. All programs can be delivered on-site or remotely.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Module Grid */}
          <div className="xl:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {modules.map((module) => {
                const Icon = module.icon;
                const isSelected = selected.includes(module.id);
                return (
                  <button
                    key={module.id}
                    onClick={() => toggleModule(module.id)}
                    className={`relative text-left rounded-2xl p-6 border-2 transition-all duration-200 group ${
                      isSelected
                        ? "border-[#F59E0B] bg-white shadow-xl shadow-[#F59E0B]/10"
                        : "border-gray-100 bg-white hover:border-[#1E3A8A]/30 hover:shadow-lg"
                    }`}
                  >
                    {module.popular && (
                      <div className="absolute top-4 right-4 bg-[#F59E0B] text-[#0A1628] text-xs font-bold px-2 py-0.5 rounded-full">
                        Popular
                      </div>
                    )}

                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                          isSelected ? "bg-[#F59E0B]" : "bg-[#F8FAFC] group-hover:bg-[#1E3A8A]/10"
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${isSelected ? "text-[#0A1628]" : "text-[#1E3A8A]"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-bold text-[#0A1628] text-sm leading-tight">{module.title}</h3>
                        </div>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelColors[module.level]}`}>
                          {module.level}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{module.description}</p>

                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {module.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> {module.participants}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {module.tags.map((tag) => (
                        <span key={tag} className="bg-[#F8FAFC] border border-gray-200 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-black text-[#0A1628]">
                          ${module.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 text-xs ml-1">per group</span>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-[#F59E0B] border-[#F59E0B]"
                            : "border-gray-300 group-hover:border-[#1E3A8A]"
                        }`}
                      >
                        {isSelected && <CheckCircle className="w-5 h-5 text-[#0A1628]" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="xl:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-[#0A1628] mb-4">Booking Summary</h3>

                {selected.length === 0 ? (
                  <div className="text-center py-6">
                    <BookOpen className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                    <p className="text-gray-400 text-sm">No modules selected yet. Choose from the grid.</p>
                  </div>
                ) : (
                  <div className="space-y-3 mb-4">
                    {selectedModules.map((m) => (
                      <div key={m.id} className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-700 text-xs font-medium leading-tight">{m.title}</p>
                          <p className="text-gray-400 text-xs">{m.duration}</p>
                        </div>
                        <span className="text-[#0A1628] font-bold text-sm flex-shrink-0">
                          ${m.price.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-500 text-sm">Subtotal</span>
                    <span className="text-[#0A1628] font-bold">${total.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-xs">* Pricing per group session</span>
                  </div>

                  <button
                    onClick={handleContinue}
                    disabled={selected.length === 0}
                    className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] disabled:opacity-40 disabled:cursor-not-allowed text-[#0A1628] font-bold px-4 py-3.5 rounded-xl transition-all duration-200 text-sm"
                  >
                    Continue <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-4 flex items-start gap-2 text-xs text-gray-400">
                  <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  All sessions can be delivered on-site or via live virtual classroom. Custom scheduling available.
                </div>
              </div>

              <div className="bg-[#0A1628] rounded-2xl p-5 text-center">
                <p className="text-gray-300 text-xs mb-3">Need a custom program?</p>
                <Link
                  href="/contact"
                  className="text-[#F59E0B] font-semibold text-sm hover:underline"
                >
                  Contact us for a bespoke quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
