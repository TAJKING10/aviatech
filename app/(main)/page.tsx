import Link from "next/link";
import {
  Plane,
  Shield,
  BookOpen,
  TrendingUp,
  Users,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  Zap,
  BarChart3,
  ChevronRight,
  Clock,
  Target,
  Lock,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Flight Operations",
    description:
      "Optimize your flight operations with data-driven strategies that enhance efficiency, reduce costs, and improve on-time performance.",
    color: "from-blue-500 to-blue-700",
    link: "/services#flight-ops",
  },
  {
    icon: Shield,
    title: "Safety Management",
    description:
      "Implement robust Safety Management Systems (SMS) aligned with ICAO standards to protect your people and assets.",
    color: "from-emerald-500 to-emerald-700",
    link: "/services#safety",
  },
  {
    icon: Lock,
    title: "Regulatory Compliance",
    description:
      "Navigate complex aviation regulations with confidence through expert guidance on FAA, EASA, and international standards.",
    color: "from-purple-500 to-purple-700",
    link: "/services#compliance",
  },
  {
    icon: BookOpen,
    title: "Training Programs",
    description:
      "Customized training curricula for flight crews, ground staff, and management teams aligned with industry best practices.",
    color: "from-[#F59E0B] to-orange-600",
    link: "/services#training",
  },
  {
    icon: BarChart3,
    title: "Fleet Management",
    description:
      "Strategic fleet planning, aircraft acquisition advisory, and maintenance program optimization for maximum ROI.",
    color: "from-rose-500 to-rose-700",
    link: "/services#fleet",
  },
  {
    icon: Globe,
    title: "Air Traffic Management",
    description:
      "ATM system design, airspace optimization, and NextGen/SESAR implementation support for modern operations.",
    color: "from-[#38BDF8] to-blue-600",
    link: "/services#atm",
  },
];

const stats = [
  { value: "500+", label: "Global Clients", icon: Users },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "50+", label: "Countries Served", icon: Globe },
];

const features = [
  {
    icon: Target,
    title: "Strategic Precision",
    description:
      "We develop tailored strategies that align with your organizational goals and operational realities, not generic one-size-fits-all solutions.",
  },
  {
    icon: Award,
    title: "Industry-Leading Expertise",
    description:
      "Our team of former airline executives, safety officers, and regulatory specialists brings decades of real-world aviation experience.",
  },
  {
    icon: Zap,
    title: "Measurable Results",
    description:
      "Every engagement is built around quantifiable outcomes — cost reductions, efficiency gains, and compliance metrics that matter.",
  },
];

const testimonials = [
  {
    name: "James Harrington",
    role: "VP Flight Operations, Atlas Airways",
    text: "Aviatech transformed our safety culture. Their SMS implementation reduced incidents by 43% in the first year. I can't recommend them highly enough.",
    rating: 5,
    initials: "JH",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Sarah Chen",
    role: "Director of Compliance, Pacific Cargo Airlines",
    text: "When we faced complex EASA certification requirements, Aviatech's regulatory team guided us through flawlessly. On time and under budget.",
    rating: 5,
    initials: "SC",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Mohamed Al-Rashidi",
    role: "CEO, Gulf Regional Aviation",
    text: "Their fleet optimization strategy saved us $4.2M in the first year alone. Aviatech doesn't just consult — they deliver real transformation.",
    rating: 5,
    initials: "MR",
    color: "from-[#F59E0B] to-orange-600",
  },
];

const insights = [
  {
    category: "Safety",
    title: "The Future of Aviation Safety: AI-Powered Predictive Analytics",
    date: "March 15, 2026",
    readTime: "6 min read",
  },
  {
    category: "Regulation",
    title: "Navigating EASA's New Sustainability Requirements for 2026",
    date: "March 8, 2026",
    readTime: "8 min read",
  },
  {
    category: "Operations",
    title: "How Top Airlines Are Achieving 94%+ OTP in a Volatile Market",
    date: "February 28, 2026",
    readTime: "5 min read",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] bg-[#0A1628] flex items-center overflow-hidden">
        {/* Background geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#1E3A8A]/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#F59E0B]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#1E3A8A]/20 to-transparent rounded-full" />

          {/* Animated rings */}
          <div className="absolute top-10 right-10 w-96 h-96 border border-[#F59E0B]/10 rounded-full animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-[#38BDF8]/5 rounded-full animate-[float_9s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-24 right-32 w-48 h-48 border border-[#F59E0B]/15 rounded-full animate-[float_4s_ease-in-out_infinite]" />

          {/* Diagonal lines */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="40" x2="40" y2="0" stroke="#38BDF8" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diag)" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
              <span className="text-[#F59E0B] text-sm font-medium">
                Trusted by 500+ Aviation Leaders Worldwide
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Elevating
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#38BDF8]">
                Aviation
              </span>
              <br />
              Excellence
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              Strategic consulting that transforms aviation organizations. From safety management
              to fleet optimization, we deliver measurable results that keep you ahead of the curve.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="group flex items-center justify-center gap-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-xl shadow-[#F59E0B]/20 hover:shadow-[#F59E0B]/30 hover:-translate-y-1"
              >
                <Plane className="w-5 h-5 transform -rotate-45 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-1"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-12">
              {["ICAO Certified", "IATA Approved", "FAA Compliant", "ISO 9001:2015"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#38BDF8]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
          <span>Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1E3A8A] border-y border-[#2d52a8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#F59E0B]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold text-sm mb-4 uppercase tracking-wider">
              <div className="w-8 h-0.5 bg-[#F59E0B]" />
              Our Services
              <div className="w-8 h-0.5 bg-[#F59E0B]" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0A1628] mb-5">
              Comprehensive Aviation Consulting
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              From flight operations to regulatory compliance, we provide end-to-end consulting
              solutions tailored to your organization&apos;s unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.link}
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent hover:-translate-y-2 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#1E3A8A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-5">{service.description}</p>
                  <div className="flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#0A1628] hover:bg-[#1E3A8A] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#1E3A8A]/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#F59E0B]/10 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold text-sm mb-4 uppercase tracking-wider">
              <div className="w-8 h-0.5 bg-[#F59E0B]" />
              Why Aviatech
              <div className="w-8 h-0.5 bg-[#F59E0B]" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              The Aviatech Difference
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We combine deep industry expertise with data-driven methodologies to deliver
              transformative results for aviation organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-[#F59E0B]/20 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#F59E0B]/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#0A1628]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Certification logos row */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["ICAO Partner", "IATA Accredited", "FAA Approved", "EASA Certified", "ISO 9001:2015"].map(
              (cert) => (
                <div
                  key={cert}
                  className="px-5 py-2.5 bg-white/5 border border-white/15 rounded-lg text-gray-300 text-sm font-medium"
                >
                  {cert}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold text-sm mb-4 uppercase tracking-wider">
              <div className="w-8 h-0.5 bg-[#F59E0B]" />
              Testimonials
              <div className="w-8 h-0.5 bg-[#F59E0B]" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0A1628] mb-5">
              Trusted by Aviation Leaders
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from the executives who&apos;ve transformed
              their operations with Aviatech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm relative">
                  <span className="text-4xl text-[#F59E0B] leading-none font-serif absolute -top-2 -left-1">&ldquo;</span>
                  <span className="pl-5">{testimonial.text}</span>
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#0A1628] text-sm">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold text-sm mb-3 uppercase tracking-wider">
                <div className="w-8 h-0.5 bg-[#F59E0B]" />
                Latest Insights
              </div>
              <h2 className="text-4xl font-black text-[#0A1628]">Aviation Intelligence</h2>
            </div>
            <Link
              href="/insights"
              className="flex items-center gap-2 text-[#1E3A8A] font-semibold hover:gap-3 transition-all text-sm"
            >
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((item, idx) => (
              <Link
                key={idx}
                href="/insights"
                className="group bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider bg-[#F59E0B]/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <Clock className="w-3 h-3" /> {item.readTime}
                  </span>
                </div>
                <h3 className="text-[#0A1628] font-bold text-base leading-snug mb-4 group-hover:text-[#1E3A8A] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-[#1E3A8A] font-medium text-sm group-hover:gap-3 transition-all">
                  Read article <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A1628] via-[#1E3A8A] to-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <circle cx="25" cy="25" r="1" fill="#F59E0B" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F59E0B]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Plane className="w-9 h-9 text-[#F59E0B] transform -rotate-45" strokeWidth={1.75} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Ready to transform your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#38BDF8]">
              aviation operations?
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a complimentary strategy session with our senior consultants and discover
            how Aviatech can unlock new levels of performance for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="group flex items-center justify-center gap-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-10 py-4 rounded-xl text-base transition-all duration-200 shadow-xl shadow-[#F59E0B]/25 hover:-translate-y-1"
            >
              <Plane className="w-5 h-5 transform -rotate-45 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              Book a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-10 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-1"
            >
              Contact Our Team
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            No commitment required. Response within 24 hours.
          </p>
        </div>
      </section>
    </div>
  );
}
