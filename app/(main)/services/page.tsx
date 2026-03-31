import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  Shield,
  BookOpen,
  BarChart3,
  Globe,
  Lock,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive aviation consulting services including flight operations, safety management, regulatory compliance, and training programs.",
};

const services = [
  {
    id: "flight-ops",
    icon: Plane,
    title: "Flight Operations",
    tagline: "Optimize performance from gate to gate",
    description:
      "Our flight operations consulting combines advanced analytics with deep operational expertise to streamline every aspect of your flight operations — from scheduling optimization and crew resource management to fuel efficiency programs and on-time performance improvement.",
    highlights: [
      "Flight scheduling optimization & rotation planning",
      "Crew Resource Management (CRM) program development",
      "Fuel management & efficiency programs",
      "On-time performance improvement strategies",
      "FOQA/FDM program implementation",
      "Operations Control Center design & optimization",
    ],
    results: ["Average 18% reduction in fuel costs", "OTP improvements of 8-15%", "CRM certification for 100% of crews"],
    gradient: "from-[#1E3A8A] to-[#0A1628]",
    accentColor: "text-blue-400",
    bgAccent: "bg-blue-500/10",
    borderAccent: "border-blue-500/20",
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety Management",
    tagline: "Build a culture where safety is everyone's priority",
    description:
      "We help aviation organizations design, implement, and mature Safety Management Systems (SMS) that go beyond regulatory compliance to create genuine safety cultures. Our approach integrates ICAO Annex 19 requirements with practical, people-centered strategies.",
    highlights: [
      "SMS design, implementation & gap analysis",
      "Safety Risk Management (SRM) methodology",
      "Safety Performance Monitoring & Measurement",
      "Just Culture framework development",
      "Fatigue Risk Management Systems (FRMS)",
      "Emergency Response Planning",
    ],
    results: ["43% average incident reduction", "100% ICAO Annex 19 compliance", "SMS maturity level improvement"],
    gradient: "from-emerald-700 to-emerald-900",
    accentColor: "text-emerald-400",
    bgAccent: "bg-emerald-500/10",
    borderAccent: "border-emerald-500/20",
  },
  {
    id: "compliance",
    icon: Lock,
    title: "Regulatory Compliance",
    tagline: "Navigate complex regulations with confidence",
    description:
      "Aviation regulations are complex, ever-changing, and critical to operations. Our regulatory specialists have deep experience with FAA, EASA, ICAO, Transport Canada, CASA, and regional aviation authorities worldwide, helping you achieve and maintain compliance efficiently.",
    highlights: [
      "FAA & EASA certification support",
      "AOC application & renewal management",
      "Regulatory change impact assessment",
      "Audit preparation & corrective action",
      "Operations Specification (OpSpec) management",
      "International regulatory harmonization",
    ],
    results: ["100% audit pass rate (2019-2025)", "Zero failed certification applications", "Average 40% faster certification timelines"],
    gradient: "from-purple-700 to-purple-900",
    accentColor: "text-purple-400",
    bgAccent: "bg-purple-500/10",
    borderAccent: "border-purple-500/20",
  },
  {
    id: "training",
    icon: BookOpen,
    title: "Training Programs",
    tagline: "Develop the skills that make aviation excellence possible",
    description:
      "Our comprehensive training solutions are built by aviation professionals, for aviation professionals. From recurrent crew training to executive leadership programs, every course is designed to deliver practical skills and measurable competency improvements.",
    highlights: [
      "Type rating & recurrent training program design",
      "Competency-Based Training & Assessment (CBTA)",
      "ATPL theory & examination preparation",
      "Ground staff & dispatcher training",
      "Leadership & management development",
      "LMS platform design & content development",
    ],
    results: ["95% first-attempt exam pass rate", "Training cost reduction of 25%", "100% regulator-approved curricula"],
    gradient: "from-[#D97706] to-[#92400E]",
    accentColor: "text-amber-400",
    bgAccent: "bg-amber-500/10",
    borderAccent: "border-amber-500/20",
  },
  {
    id: "fleet",
    icon: BarChart3,
    title: "Fleet Management",
    tagline: "Maximize asset value across the entire lifecycle",
    description:
      "Strategic fleet planning and management consulting that helps airlines and operators make informed decisions about aircraft acquisition, utilization, maintenance, and disposal to maximize return on assets and operational efficiency.",
    highlights: [
      "Fleet planning & network optimization",
      "Aircraft acquisition & lease advisory",
      "Maintenance program optimization",
      "MRO strategy & vendor management",
      "Asset value & remarketing strategies",
      "Fleet transition & type changeover support",
    ],
    results: ["$4.2M average annual savings", "15% improvement in asset utilization", "30% reduction in maintenance costs"],
    gradient: "from-rose-700 to-rose-900",
    accentColor: "text-rose-400",
    bgAccent: "bg-rose-500/10",
    borderAccent: "border-rose-500/20",
  },
  {
    id: "atm",
    icon: Globe,
    title: "Air Traffic Management",
    tagline: "Design the airspace systems of tomorrow",
    description:
      "Our ATM specialists support ANSP modernization, airspace redesign, and NextGen/SESAR implementation. We bridge the gap between regulatory requirements, technology integration, and operational reality for improved capacity and efficiency.",
    highlights: [
      "Airspace design & route optimization",
      "NextGen & SESAR implementation support",
      "ATC procedure development & validation",
      "Performance-Based Navigation (PBN) design",
      "Capacity planning & demand forecasting",
      "ATM system procurement advisory",
    ],
    results: ["12% average capacity increase", "Fuel savings through optimized routes", "Reduced controller workload"],
    gradient: "from-[#0369A1] to-[#0A1628]",
    accentColor: "text-sky-400",
    bgAccent: "bg-sky-500/10",
    borderAccent: "border-sky-500/20",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We conduct an in-depth assessment of your current operations, challenges, and goals.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Our experts develop a tailored roadmap with clear milestones and measurable outcomes.",
  },
  {
    step: "03",
    title: "Implementation",
    desc: "We work alongside your team to execute the plan with precision and efficiency.",
  },
  {
    step: "04",
    title: "Optimization",
    desc: "Continuous monitoring and refinement ensures lasting results and performance gains.",
  },
];

export default function ServicesPage() {
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
            What We Do
            <div className="w-8 h-0.5 bg-[#F59E0B]" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Our Consulting Services
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Six core practice areas, each staffed by specialists who have held operational roles in
            the industries they now advise. This is expertise you can trust — because we&apos;ve lived it.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-xl shadow-[#F59E0B]/25"
          >
            <Plane className="w-5 h-5 transform -rotate-45" strokeWidth={2.5} />
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col lg:flex-row gap-10 items-start ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`w-full lg:w-96 flex-shrink-0 bg-gradient-to-br ${service.gradient} rounded-2xl p-8 text-white`}
                  >
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.75} />
                    </div>
                    <h2 className="text-2xl font-black mb-2">{service.title}</h2>
                    <p className="text-white/70 text-sm mb-6 italic">{service.tagline}</p>
                    <div className="space-y-3">
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">Key Results</p>
                      {service.results.map((result) => (
                        <div key={result} className="flex items-start gap-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                          <span className="text-white/90">{result}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/booking"
                      className="mt-8 w-full flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold px-4 py-3 rounded-xl text-sm transition-all duration-200"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                    <h3 className="text-[#0A1628] font-bold text-base mb-4">What&apos;s Included</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Our Engagement Process</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A structured, proven approach that delivers results without disrupting your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative">
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#F59E0B]/40 to-transparent z-0" />
                )}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative z-10 hover:border-[#F59E0B]/20 transition-colors">
                  <div className="text-5xl font-black text-[#F59E0B]/20 mb-4">{step.step}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-[#0A1628] mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Talk to one of our senior consultants for a free 30-minute strategy session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-xl shadow-[#F59E0B]/25"
            >
              Book Free Session
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#1E3A8A] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
