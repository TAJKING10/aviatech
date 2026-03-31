import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, TrendingUp, BookOpen, Globe, Shield, Plane, BarChart3, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description: "Aviation industry insights, regulatory updates, and expert analysis from the Aviatech Consulting team.",
};

const categories = ["All", "Safety", "Regulation", "Operations", "Technology", "Strategy", "Training"];

const featuredArticle = {
  category: "Safety",
  title: "The Future of Aviation Safety: How AI-Powered Predictive Analytics Is Transforming Risk Management",
  excerpt:
    "Artificial intelligence is fundamentally changing how aviation organizations identify and mitigate safety risks — moving from reactive reporting to proactive risk prediction. We examine the leading applications and what they mean for your Safety Management System.",
  author: "Dr. Katherine Chen",
  authorRole: "Chief Safety Officer",
  initials: "KC",
  authorGradient: "from-emerald-600 to-emerald-900",
  date: "March 15, 2026",
  readTime: "8 min read",
  tags: ["AI", "Predictive Analytics", "SMS", "Safety"],
};

const articles = [
  {
    category: "Regulation",
    title: "Navigating EASA's New Sustainability Requirements for 2026",
    excerpt: "EASA's Sustainable Aviation Framework introduces mandatory reporting and operational changes that affect all EU-based carriers and operators. Here's what you need to know.",
    author: "James Okafor",
    authorRole: "Head of Regulatory Affairs",
    initials: "JO",
    authorGradient: "from-purple-600 to-purple-900",
    date: "March 8, 2026",
    readTime: "6 min read",
    icon: Globe,
  },
  {
    category: "Operations",
    title: "How Top Airlines Are Achieving 94%+ OTP in a Volatile Market",
    excerpt: "On-time performance remains the most visible metric for passengers. We analyze the operational strategies and technology investments behind the industry's top performers.",
    author: "Capt. Robert Avery",
    authorRole: "CEO",
    initials: "RA",
    authorGradient: "from-[#1E3A8A] to-[#0A1628]",
    date: "February 28, 2026",
    readTime: "5 min read",
    icon: TrendingUp,
  },
  {
    category: "Training",
    title: "Competency-Based Training: The Case for CBTA in Your Organization",
    excerpt: "ICAO's evidence-based training (EBT) and competency-based training framework represents a paradigm shift. Discover the tangible benefits airlines are seeing from adoption.",
    author: "Capt. Marc Dubois",
    authorRole: "Head of Training",
    initials: "MD",
    authorGradient: "from-rose-600 to-rose-900",
    date: "February 20, 2026",
    readTime: "7 min read",
    icon: BookOpen,
  },
  {
    category: "Technology",
    title: "Digital MRO: How Predictive Maintenance Is Cutting AOG Events by 35%",
    excerpt: "The convergence of IoT sensors, big data analytics, and machine learning is enabling truly predictive maintenance. Airlines implementing these systems report dramatic reductions in unplanned AOG events.",
    author: "Sarah Al-Mahmoud",
    authorRole: "Director, Fleet Management",
    initials: "SM",
    authorGradient: "from-[#D97706] to-[#92400E]",
    date: "February 12, 2026",
    readTime: "9 min read",
    icon: BarChart3,
  },
  {
    category: "Strategy",
    title: "Fleet Planning in an Uncertain Market: Lessons from the Post-Pandemic Recovery",
    excerpt: "The COVID-19 recovery revealed critical vulnerabilities in traditional fleet planning models. We examine what the best-performing airlines did differently and what it means for future fleet strategy.",
    author: "Sarah Al-Mahmoud",
    authorRole: "Director, Fleet Management",
    initials: "SM",
    authorGradient: "from-[#D97706] to-[#92400E]",
    date: "February 5, 2026",
    readTime: "11 min read",
    icon: Plane,
  },
  {
    category: "Safety",
    title: "Just Culture Implementation: Why Most Organizations Get It Wrong",
    excerpt: "Just Culture is a cornerstone of effective safety management, but its implementation is frequently misunderstood. We break down the common pitfalls and the path to a genuinely open reporting environment.",
    author: "Dr. Katherine Chen",
    authorRole: "Chief Safety Officer",
    initials: "KC",
    authorGradient: "from-emerald-600 to-emerald-900",
    date: "January 28, 2026",
    readTime: "6 min read",
    icon: Shield,
  },
  {
    category: "Regulation",
    title: "FAA MOSAIC Rule: What It Means for Light Sport Aviation Operations",
    excerpt: "The FAA's new MOSAIC (Modernization of Special Airworthiness Certification) rule significantly expands light sport aircraft capabilities. We assess the operational and compliance implications.",
    author: "James Okafor",
    authorRole: "Head of Regulatory Affairs",
    initials: "JO",
    authorGradient: "from-purple-600 to-purple-900",
    date: "January 20, 2026",
    readTime: "5 min read",
    icon: Globe,
  },
  {
    category: "Operations",
    title: "Advanced Air Mobility: Preparing Airport Infrastructure for eVTOL Operations",
    excerpt: "With multiple eVTOL manufacturers targeting commercial certification by 2026, airports need a clear strategy for infrastructure, safety protocols, and integration with existing operations.",
    author: "Priya Sharma",
    authorRole: "Director, ATM Consulting",
    initials: "PS",
    authorGradient: "from-sky-600 to-[#0A1628]",
    date: "January 12, 2026",
    readTime: "10 min read",
    icon: Plane,
  },
  {
    category: "Strategy",
    title: "Sustainable Aviation Fuel: Building an SAF Strategy That Actually Works",
    excerpt: "SAF is no longer a theoretical concept — it's a commercial reality with real operational and financial implications. Learn how leading carriers are building practical SAF transition strategies.",
    author: "Capt. Robert Avery",
    authorRole: "CEO",
    initials: "RA",
    authorGradient: "from-[#1E3A8A] to-[#0A1628]",
    date: "January 5, 2026",
    readTime: "8 min read",
    icon: TrendingUp,
  },
];

const categoryColors: Record<string, string> = {
  Safety: "bg-emerald-100 text-emerald-700",
  Regulation: "bg-purple-100 text-purple-700",
  Operations: "bg-blue-100 text-blue-700",
  Technology: "bg-[#F59E0B]/10 text-[#D97706]",
  Strategy: "bg-rose-100 text-rose-700",
  Training: "bg-sky-100 text-sky-700",
};

export default function InsightsPage() {
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
            Aviation Intelligence
            <div className="w-8 h-0.5 bg-[#F59E0B]" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">Industry Insights</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
            Expert analysis, regulatory updates, and strategic thinking from Aviatech&apos;s aviation specialists.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#F59E0B] transition-colors text-sm"
            />
          </div>
        </div>
      </section>

      {/* Category filter */}
      <div className="bg-white border-b border-gray-100 sticky top-[68px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  cat === "All"
                    ? "bg-[#0A1628] text-white"
                    : "text-gray-500 hover:text-[#0A1628] hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <div className="mb-12">
            <div className="bg-[#0A1628] rounded-2xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featuredArticle.category]}`}>
                    {featuredArticle.category}
                  </span>
                  <span className="text-gray-400 text-sm">Featured Article</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 max-w-3xl leading-snug">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-300 text-base leading-relaxed max-w-3xl mb-8">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${featuredArticle.authorGradient} flex items-center justify-center text-white font-bold text-sm`}>
                      {featuredArticle.initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{featuredArticle.author}</div>
                      <div className="text-gray-400 text-xs">{featuredArticle.authorRole}</div>
                    </div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full" />
                    <span className="text-gray-400 text-sm">{featuredArticle.date}</span>
                    <span className="flex items-center gap-1 text-gray-400 text-sm">
                      <Clock className="w-3 h-3" /> {featuredArticle.readTime}
                    </span>
                  </div>
                  <Link
                    href="/insights"
                    className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-200"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => {
              const Icon = article.icon;
              return (
                <Link
                  key={idx}
                  href="/insights"
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                    <div className="w-9 h-9 bg-[#F8FAFC] rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#1E3A8A]" />
                    </div>
                  </div>

                  <h3 className="text-[#0A1628] font-bold text-base leading-snug mb-3 group-hover:text-[#1E3A8A] transition-colors flex-1">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${article.authorGradient} flex items-center justify-center text-white font-bold text-xs`}>
                        {article.initials}
                      </div>
                      <div>
                        <div className="text-gray-700 font-semibold text-xs">{article.author}</div>
                        <div className="text-gray-400 text-xs flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" /> {article.readTime}
                        </div>
                      </div>
                    </div>
                    <span className="text-[#1E3A8A] text-xs font-semibold">{article.date}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Load more */}
          <div className="text-center mt-10">
            <button className="flex items-center gap-2 mx-auto bg-white hover:bg-[#0A1628] hover:text-white border border-gray-200 text-[#0A1628] font-semibold px-8 py-3 rounded-xl transition-all duration-200 text-sm">
              Load More Articles <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-12 h-12 text-[#F59E0B] mx-auto mb-5" />
          <h2 className="text-3xl font-black text-white mb-3">Never Miss an Insight</h2>
          <p className="text-gray-400 mb-8">
            Join 12,000+ aviation professionals who receive our weekly briefing on industry trends,
            regulatory changes, and operational excellence.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@airline.com"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F59E0B] transition-colors"
            />
            <button className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-5 py-3 rounded-xl text-sm transition-all duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-gray-600 text-xs mt-3">No spam. Unsubscribe any time. We respect your privacy.</p>
        </div>
      </section>
    </div>
  );
}
