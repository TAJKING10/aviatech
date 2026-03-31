const articles = [
  {
    category: "Digital trends in aviation",
    date: "March 14, 2024",
    title: "Digital trends in aviation: Beyond the Passenger Experience",
    desc: "Exploring how data-driven decision making is migrating from customer-facing apps to the deep core of maintenance cycles and fuel logistics.",
    size: "large",
  },
  {
    category: "Technology Strategy",
    date: "",
    title: "Technology strategy for growing firms",
    desc: "Scaling aviation infrastructure requires a modular approach to legacy system modernization.",
    size: "small",
  },
  {
    category: "Performance",
    date: "",
    title: "Improving operational efficiency in ground handling",
    desc: "Optimization algorithms are reducing turnaround times by up to 15% in major regional hubs.",
    size: "card",
  },
  {
    category: "Case Study",
    date: "February 2, 2024",
    title: "Reducing emissions through smarter route architecture",
    desc: "A detailed breakdown of how an EMEA carrier cut fuel usage by 11% using AI-optimized routing.",
    size: "small",
  },
  {
    category: "Regulatory",
    date: "January 18, 2024",
    title: "Navigating EASA & FAA compliance in the age of digital avionics",
    desc: "How certification processes are evolving as software-defined systems become the norm in cockpit design.",
    size: "small",
  },
];

export default function InsightsPage() {
  return (
    <div className="bg-[#f6f9ff] text-[#161c22] font-['Inter'] antialiased">
      {/* Hero / Featured Article */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <div className="mb-12">
          <span className="text-[#0059bb] font-['Inter'] uppercase tracking-[0.2em] text-xs font-bold">
            Featured Insight
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mt-4 max-w-4xl text-[#161c22]">
            The Future of Flight Operations
          </h1>
        </div>
        <div className="relative group overflow-hidden rounded-xl aspect-[21/9] bg-[#e8eef6] flex items-end">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#0059bb]/20 text-[120px]">flight</span>
          </div>
          <div className="relative z-10 w-full bg-gradient-to-t from-[#161c22]/80 via-transparent to-transparent p-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4 text-white/80 font-['Inter'] text-xs uppercase tracking-wider">
                <span>Strategy</span>
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <span>12 Min Read</span>
              </div>
              <h2 className="text-3xl font-headline font-bold text-white mb-6">
                Next-Gen Fleet Management: How AI is Redefining Efficiency in Commercial Aviation
              </h2>
              <button className="flex items-center gap-2 text-white font-headline font-bold border-b-2 border-white pb-1 hover:gap-4 transition-all">
                Read Article{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
            {["All Insights", "Digital Trends", "Operational Efficiency", "Technology Strategy"].map((f, i) => (
              <button
                key={f}
                className={`px-6 py-2 rounded-full text-sm font-['Inter'] font-medium whitespace-nowrap ${
                  i === 0
                    ? "bg-[#0059bb] text-white"
                    : "bg-[#e8eef6] hover:bg-[#e3e9f1] transition-colors text-[#414754]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#717786]">
              search
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-[#e8eef6] border-none rounded-lg pl-12 pr-4 py-3 text-sm focus:ring-1 focus:ring-[#0059bb] focus:bg-white transition-all outline-none"
            />
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Large Article */}
          <article className="md:col-span-8 group cursor-pointer">
            <div className="bg-[#e8eef6] rounded-xl overflow-hidden aspect-[16/8] mb-6 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#0059bb]/30 text-[80px] group-hover:text-[#0059bb]/50 transition-colors">article</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#0059bb] font-['Inter'] text-xs font-bold uppercase tracking-widest">
                Digital trends in aviation
              </span>
              <span className="text-[#717786] font-['Inter'] text-xs">March 14, 2024</span>
            </div>
            <h3 className="text-3xl font-headline font-bold text-[#161c22] mb-4 group-hover:text-[#0059bb] transition-colors leading-tight">
              Digital trends in aviation: Beyond the Passenger Experience
            </h3>
            <p className="text-[#414754] leading-relaxed max-w-2xl">
              Exploring how data-driven decision making is migrating from customer-facing apps to the deep core of maintenance cycles and fuel logistics.
            </p>
          </article>

          {/* Small Article */}
          <article className="md:col-span-4 group cursor-pointer">
            <div className="bg-[#e8eef6] rounded-xl overflow-hidden aspect-square mb-6 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#0059bb]/30 text-[60px] group-hover:scale-110 transition-transform">hub</span>
            </div>
            <div className="mb-4">
              <span className="text-[#0059bb] font-['Inter'] text-xs font-bold uppercase tracking-widest">
                Technology Strategy
              </span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-[#161c22] mb-3 group-hover:text-[#0059bb] transition-colors">
              Technology strategy for growing firms
            </h3>
            <p className="text-[#414754] text-sm leading-relaxed">
              Scaling aviation infrastructure requires a modular approach to legacy system modernization.
            </p>
          </article>

          {/* Card Article — blue hover */}
          <article className="md:col-span-4 group cursor-pointer">
            <div className="bg-[#e3e9f1] rounded-xl p-8 h-full flex flex-col justify-between hover:bg-[#0059bb] group transition-colors duration-500">
              <div>
                <span className="text-[#0059bb] group-hover:text-white/80 font-['Inter'] text-xs font-bold uppercase tracking-widest mb-6 block">
                  Performance
                </span>
                <h3 className="text-2xl font-headline font-bold text-[#161c22] group-hover:text-white leading-tight">
                  Improving operational efficiency in ground handling
                </h3>
              </div>
              <div className="mt-8">
                <p className="text-[#414754] group-hover:text-white/70 text-sm mb-6">
                  Optimization algorithms are reducing turnaround times by up to 15% in major regional hubs.
                </p>
                <span className="material-symbols-outlined text-[#0059bb] group-hover:text-white text-3xl">
                  trending_up
                </span>
              </div>
            </div>
          </article>

          {/* Two more small articles */}
          {[
            {
              category: "Case Study",
              date: "February 2, 2024",
              title: "Reducing emissions through smarter route architecture",
              desc: "A detailed breakdown of how an EMEA carrier cut fuel usage by 11% using AI-optimized routing.",
            },
            {
              category: "Regulatory",
              date: "January 18, 2024",
              title: "Navigating EASA & FAA compliance in the age of digital avionics",
              desc: "How certification processes are evolving as software-defined systems become the norm in cockpit design.",
            },
          ].map((art) => (
            <article key={art.title} className="md:col-span-4 group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#0059bb] font-['Inter'] text-xs font-bold uppercase tracking-widest">{art.category}</span>
                <span className="text-[#717786] font-['Inter'] text-xs">{art.date}</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-[#161c22] mb-3 group-hover:text-[#0059bb] transition-colors">
                {art.title}
              </h3>
              <p className="text-[#414754] text-sm leading-relaxed">{art.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
