import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  Shield,
  Briefcase,
  Package,
  Building2,
  Wrench,
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description: "Aviation consulting services for commercial airlines, military aviation, business aviation, cargo, airport management, and MRO organizations.",
};

const industries = [
  {
    id: "commercial",
    icon: Plane,
    title: "Commercial Aviation",
    subtitle: "Airlines & Regional Carriers",
    description:
      "From major international carriers to regional feeders, we help commercial airlines optimize operations, achieve regulatory excellence, and deliver superior passenger experiences in an increasingly competitive market.",
    challenges: [
      "Rising fuel costs and sustainability pressures",
      "Complex multi-regulatory environment",
      "Crew shortage and retention challenges",
      "Slot coordination and capacity constraints",
    ],
    solutions: [
      "Network and schedule optimization",
      "Fuel efficiency programs with measurable ROI",
      "Crew planning and fatigue management",
      "Slot management and capacity planning",
    ],
    clients: ["Major international airlines", "Low-cost carriers", "Regional feeder airlines"],
    stats: { value: "180+", label: "Airlines Served" },
    gradient: "from-[#1E3A8A] to-[#0A1628]",
    lightBg: "bg-blue-50",
    accentBorder: "border-blue-200",
    iconBg: "bg-blue-600",
  },
  {
    id: "military",
    icon: Shield,
    title: "Military Aviation",
    subtitle: "Defense & Government Air Forces",
    description:
      "Supporting defense aviation organizations with strategic consulting on airworthiness, safety management, maintenance program design, and operational efficiency — aligned with military standards and classification requirements.",
    challenges: [
      "Aging fleet sustainment",
      "Safety culture in high-risk environments",
      "Transition from military to civilian standards",
      "Technology insertion and modernization",
    ],
    solutions: [
      "Military airworthiness program design",
      "Defense SMS implementation",
      "Fleet sustainment strategy",
      "Technology transition advisory",
    ],
    clients: ["National air forces", "Coast guard aviation", "Government aviation units"],
    stats: { value: "25+", label: "Defense Clients" },
    gradient: "from-slate-700 to-slate-900",
    lightBg: "bg-slate-50",
    accentBorder: "border-slate-200",
    iconBg: "bg-slate-700",
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business Aviation",
    subtitle: "Corporate & Private Operators",
    description:
      "Business aviation demands the highest standards of safety and service with the operational flexibility that corporate clients expect. We help flight departments, charter operators, and management companies exceed those standards.",
    challenges: [
      "IS-BAO and ARGUS certification",
      "Operator certificate management",
      "Cost control without compromising safety",
      "Fractional ownership complexity",
    ],
    solutions: [
      "IS-BAO Stage 1, 2, 3 implementation",
      "AOC and operator certificate support",
      "Cost optimization strategies",
      "Fractional and charter operational advisory",
    ],
    clients: ["Corporate flight departments", "Charter operators", "Aircraft management companies"],
    stats: { value: "120+", label: "Business Aviation Clients" },
    gradient: "from-[#D97706] to-[#92400E]",
    lightBg: "bg-amber-50",
    accentBorder: "border-amber-200",
    iconBg: "bg-amber-600",
  },
  {
    id: "cargo",
    icon: Package,
    title: "Cargo & Freight",
    subtitle: "Air Freight Operators & Integrators",
    description:
      "The cargo sector operates under unique pressures — time-critical shipments, dangerous goods, and evolving e-commerce demands. Our cargo specialists help operators build resilient, compliant, and efficient freight operations.",
    challenges: [
      "Dangerous goods regulations (IATA DGR)",
      "Cold chain integrity management",
      "Security compliance (TSA, EU Reg 300/2008)",
      "E-commerce demand volatility",
    ],
    solutions: [
      "DGR compliance programs",
      "Cold chain management protocols",
      "Security programs and audits",
      "Capacity and fleet planning for e-commerce",
    ],
    clients: ["Cargo airlines", "Freight integrators", "Charter cargo operators"],
    stats: { value: "60+", label: "Cargo Operators" },
    gradient: "from-rose-700 to-rose-900",
    lightBg: "bg-rose-50",
    accentBorder: "border-rose-200",
    iconBg: "bg-rose-600",
  },
  {
    id: "airport",
    icon: Building2,
    title: "Airport Management",
    subtitle: "Airports & Ground Handlers",
    description:
      "Airports are the backbone of aviation infrastructure. We partner with airport authorities and ground service providers to optimize capacity, improve safety, and enhance the traveler experience through strategic management consulting.",
    challenges: [
      "Capacity utilization and gate optimization",
      "Ground handling efficiency",
      "Aerodrome safety standards (ICAO Annex 14)",
      "Revenue optimization and commercial development",
    ],
    solutions: [
      "Airport master planning and capacity analysis",
      "Ground operations efficiency review",
      "Aerodrome Safety Management System",
      "Commercial strategy and concession optimization",
    ],
    clients: ["International airports", "Regional airports", "Ground handling companies"],
    stats: { value: "45+", label: "Airports Served" },
    gradient: "from-emerald-700 to-emerald-900",
    lightBg: "bg-emerald-50",
    accentBorder: "border-emerald-200",
    iconBg: "bg-emerald-600",
  },
  {
    id: "mro",
    icon: Wrench,
    title: "MRO Organizations",
    subtitle: "Maintenance, Repair & Overhaul",
    description:
      "Maintenance organizations face increasing regulatory scrutiny and cost pressures while keeping fleets airworthy. Our MRO consultants help repair stations and maintenance organizations achieve and maintain Part 145 / EASA 145 approval while optimizing throughput.",
    challenges: [
      "Part 145 / EASA 145 approval and compliance",
      "Inventory management and AOG reduction",
      "Workforce training and qualification",
      "Digital MRO transformation",
    ],
    solutions: [
      "Repair station certification support",
      "Inventory optimization and supplier management",
      "Technician training program development",
      "MRO IT systems advisory and implementation",
    ],
    clients: ["Independent MRO providers", "Airline in-house maintenance", "Component repair shops"],
    stats: { value: "70+", label: "MRO Clients" },
    gradient: "from-[#0369A1] to-[#0A1628]",
    lightBg: "bg-sky-50",
    accentBorder: "border-sky-200",
    iconBg: "bg-sky-600",
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0A1628] py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#1E3A8A]/30 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold text-sm mb-5 uppercase tracking-wider">
            <div className="w-8 h-0.5 bg-[#F59E0B]" />
            Industries We Serve
            <div className="w-8 h-0.5 bg-[#F59E0B]" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Aviation Expertise Across<br />Every Sector
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            We understand that each segment of the aviation industry faces unique challenges.
            Our specialized teams bring sector-specific expertise to every engagement.
          </p>
        </div>
      </section>

      {/* Industry overview grid */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <a
                  key={industry.id}
                  href={`#${industry.id}`}
                  className="group flex flex-col items-center gap-3 bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className={`w-12 h-12 ${industry.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <span className="text-[#0A1628] font-semibold text-xs">{industry.title}</span>
                </a>
              );
            })}
          </div>

          {/* Detailed industry sections */}
          <div className="space-y-20">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div key={industry.id} id={industry.id} className="scroll-mt-20">
                  <div className={`flex flex-col lg:flex-row gap-10 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Gradient panel */}
                    <div className={`w-full lg:w-80 flex-shrink-0 bg-gradient-to-br ${industry.gradient} rounded-2xl p-8 text-white`}>
                      <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-5">
                        <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                      </div>
                      <div className="text-4xl font-black text-[#F59E0B] mb-1">{industry.stats.value}</div>
                      <div className="text-white/70 text-sm mb-6">{industry.stats.label}</div>
                      <h2 className="text-xl font-black mb-1">{industry.title}</h2>
                      <p className="text-white/60 text-sm mb-6">{industry.subtitle}</p>
                      <div className="space-y-2">
                        <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Typical Clients</p>
                        {industry.clients.map((client) => (
                          <div key={client} className="flex items-center gap-2 text-sm text-white/80">
                            <CheckCircle className="w-4 h-4 text-[#F59E0B]" />
                            {client}
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/booking"
                        className="mt-8 w-full flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold px-4 py-3 rounded-xl text-sm transition-all"
                      >
                        Get a Consultation <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">{industry.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Challenges */}
                        <div className={`${industry.lightBg} border ${industry.accentBorder} rounded-xl p-6`}>
                          <h3 className="font-bold text-[#0A1628] mb-4 text-sm uppercase tracking-wider">
                            Common Challenges
                          </h3>
                          <div className="space-y-3">
                            {industry.challenges.map((c) => (
                              <div key={c} className="flex items-start gap-2 text-sm text-gray-600">
                                <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                                </div>
                                {c}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Solutions */}
                        <div className="bg-white border border-gray-100 rounded-xl p-6">
                          <h3 className="font-bold text-[#0A1628] mb-4 text-sm uppercase tracking-wider">
                            Our Solutions
                          </h3>
                          <div className="space-y-3">
                            {industry.solutions.map((s) => (
                              <div key={s} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                {s}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global footprint */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Globe, value: "50+", label: "Countries" },
              { icon: Users, value: "500+", label: "Clients Served" },
              { icon: Plane, value: "1,200+", label: "Engagements Completed" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="w-8 h-8 text-[#F59E0B] mx-auto mb-3" />
                  <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
          <h2 className="text-3xl font-black text-white mb-4">
            Whatever your aviation sector, we have the expertise.
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Ready to discuss how Aviatech can help your organization achieve its goals?
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-xl shadow-[#F59E0B]/25"
          >
            <Plane className="w-5 h-5 transform -rotate-45" strokeWidth={2.5} />
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
