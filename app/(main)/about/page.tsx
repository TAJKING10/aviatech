import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  Award,
  Target,
  Heart,
  Users,
  Globe,
  TrendingUp,
  Shield,
  ArrowRight,
  Linkedin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Aviatech Consulting — our story, team, values, and certifications.",
};

const team = [
  {
    name: "Captain Robert Avery",
    role: "Chief Executive Officer",
    background: "Former VP Flight Operations, Delta Air Lines | 32 years aviation experience",
    initials: "RA",
    gradient: "from-[#1E3A8A] to-[#0A1628]",
    specialties: ["Flight Operations", "Strategic Leadership", "Safety Management"],
  },
  {
    name: "Dr. Katherine Chen",
    role: "Chief Safety Officer",
    background: "Ex-FAA Safety Inspector | PhD Aviation Safety | IATA SMS Lead Auditor",
    initials: "KC",
    gradient: "from-emerald-600 to-emerald-900",
    specialties: ["Safety Management Systems", "Regulatory Compliance", "Risk Assessment"],
  },
  {
    name: "James Okafor",
    role: "Head of Regulatory Affairs",
    background: "Former EASA Regulatory Officer | 20+ years regulatory experience",
    initials: "JO",
    gradient: "from-purple-600 to-purple-900",
    specialties: ["EASA/FAA Compliance", "AOC Certification", "International Regulations"],
  },
  {
    name: "Sarah Al-Mahmoud",
    role: "Director, Fleet Management",
    background: "Ex-Emirates Fleet Planning | MBA Stanford | Aircraft Finance Specialist",
    initials: "SM",
    gradient: "from-[#D97706] to-[#92400E]",
    specialties: ["Fleet Planning", "Aircraft Acquisition", "MRO Strategy"],
  },
  {
    name: "Capt. Marc Dubois",
    role: "Head of Training",
    background: "Former Air France Training Captain | A380/B787 Type Rating Instructor",
    initials: "MD",
    gradient: "from-rose-600 to-rose-900",
    specialties: ["Training Program Design", "CBTA", "Simulator Training"],
  },
  {
    name: "Priya Sharma",
    role: "Director, ATM Consulting",
    background: "Ex-Eurocontrol | NextGen Program Lead | ATM Systems Engineer",
    initials: "PS",
    gradient: "from-sky-600 to-[#0A1628]",
    specialties: ["Air Traffic Management", "Airspace Design", "NextGen/SESAR"],
  },
];

const values = [
  {
    icon: Shield,
    title: "Safety First, Always",
    description:
      "Safety is not just a service we offer — it is the lens through which every decision at Aviatech is made. We model the safety culture we help our clients build.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We measure our success by your outcomes. Every engagement includes clear KPIs and measurable deliverables that demonstrate tangible return on investment.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description:
      "We don't just deliver reports and walk away. We build lasting partnerships that provide ongoing support as your organization evolves and challenges change.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Aviation is inherently global. Our team brings multi-jurisdictional expertise and cultural intelligence that enables effective consulting across all regions.",
  },
  {
    icon: Award,
    title: "Uncompromising Integrity",
    description:
      "We give our clients honest advice — even when it's not what they want to hear. Our reputation is built on trust, transparency, and ethical practice.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description:
      "We stay at the forefront of aviation technology, regulation, and best practice so that our clients always benefit from the most current thinking.",
  },
];

const certifications = [
  { name: "ICAO", description: "Official Partner Organization", year: "2010" },
  { name: "IATA", description: "IOSA Audit Organization", year: "2011" },
  { name: "FAA", description: "Approved Training Organization", year: "2009" },
  { name: "EASA", description: "Approved Training Organization (ATO)", year: "2012" },
  { name: "ISO 9001:2015", description: "Quality Management Certified", year: "2015" },
  { name: "IS-BAO", description: "Registered Consultant", year: "2013" },
];

const milestones = [
  { year: "2009", event: "Aviatech founded in New York by Capt. Robert Avery with 3 aviation specialists" },
  { year: "2011", event: "Expanded to Europe with London office; reached 50-client milestone" },
  { year: "2013", event: "Launched Safety Management Systems practice; achieved IOSA status" },
  { year: "2016", event: "Opened Dubai office; expanded into Middle East and Asian markets" },
  { year: "2018", event: "500th client engagement; launched proprietary risk assessment methodology" },
  { year: "2021", event: "Singapore office opened; team grew to 120+ global specialists" },
  { year: "2024", event: "Surpassed 500 active clients across 50+ countries" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0A1628] py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#1E3A8A]/30 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold text-sm mb-5 uppercase tracking-wider">
              <div className="w-8 h-0.5 bg-[#F59E0B]" />
              Our Story
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Built by Aviation Professionals,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#38BDF8]">
                for Aviation Organizations.
              </span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Aviatech Consulting was born from a simple insight: the best aviation consulting
              comes from people who have actually done the job. Since 2009, we&apos;ve built a team
              of former airline executives, safety regulators, and operations specialists who now
              dedicate their expertise to helping others succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#1E3A8A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years in Business" },
              { value: "500+", label: "Clients Worldwide" },
              { value: "120+", label: "Aviation Specialists" },
              { value: "50+", label: "Countries Active" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#F59E0B] mb-1">{s.value}</div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-[#0A1628] mb-6">
                15 Years of Aviation Excellence
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Aviatech Consulting was founded in 2009 by Captain Robert Avery following a distinguished
                  32-year career at Delta Air Lines. Frustrated by generic consulting advice from firms
                  without operational experience, he assembled a team of aviation insiders to offer
                  something different: consulting grounded in real-world aviation practice.
                </p>
                <p>
                  What began as a New York-based flight operations practice has grown into a globally
                  recognized firm with offices in New York, London, Dubai, and Singapore. Today, our
                  120+ specialists serve over 500 clients across 50 countries, spanning commercial airlines,
                  defense aviation, business aviation, MRO providers, and airport authorities.
                </p>
                <p>
                  Our edge is simple: every consultant at Aviatech has held operational or regulatory
                  roles in the industries they advise. We don&apos;t just understand aviation theory —
                  we&apos;ve lived it. That operational DNA drives everything we do.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h3 className="font-bold text-[#0A1628] text-sm uppercase tracking-wider mb-6">Our Journey</h3>
              {milestones.map((m, idx) => (
                <div key={m.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {m.year.slice(2)}
                    </div>
                    {idx < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="text-[#F59E0B] font-bold text-sm">{m.year}</div>
                    <div className="text-gray-600 text-sm mt-1">{m.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold text-sm mb-4 uppercase tracking-wider">
              <div className="w-8 h-0.5 bg-[#F59E0B]" />
              Our Values
              <div className="w-8 h-0.5 bg-[#F59E0B]" />
            </div>
            <h2 className="text-4xl font-black text-[#0A1628]">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-[#F8FAFC] rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#0A1628] rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <h3 className="font-bold text-[#0A1628] mb-3">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-[#F8FAFC] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold text-sm mb-4 uppercase tracking-wider">
              <div className="w-8 h-0.5 bg-[#F59E0B]" />
              Leadership Team
              <div className="w-8 h-0.5 bg-[#F59E0B]" />
            </div>
            <h2 className="text-4xl font-black text-[#0A1628] mb-4">Meet Our Experts</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Former airline executives, regulators, and operational specialists who have
              been in your shoes — and know exactly how to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className={`h-3 bg-gradient-to-r ${member.gradient}`} />
                <div className="p-7">
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 bg-gradient-to-br ${member.gradient} rounded-xl flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A1628] text-base">{member.name}</h3>
                      <p className="text-[#F59E0B] font-semibold text-sm">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">{member.background}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {member.specialties.map((s) => (
                      <span key={s} className="bg-[#F8FAFC] border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-[#1E3A8A] text-sm font-semibold hover:gap-3 transition-all">
                    <Linkedin className="w-4 h-4" /> View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Certifications & Accreditations</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our credentials speak to our commitment to the highest standards of quality and professionalism.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-[#F59E0B]/30 hover:bg-white/8 transition-all">
                <div className="text-[#F59E0B] font-black text-lg mb-1">{cert.name}</div>
                <div className="text-gray-400 text-xs leading-snug mb-2">{cert.description}</div>
                <div className="text-gray-600 text-xs">Since {cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-[#0A1628] mb-4">
            Ready to work with us?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join 500+ aviation organizations that trust Aviatech to help them operate better, safer, and smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-xl shadow-[#F59E0B]/25"
            >
              <Plane className="w-5 h-5 transform -rotate-45" strokeWidth={2.5} />
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#1E3A8A] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Contact Our Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
