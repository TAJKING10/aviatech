import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[#f6f9ff] text-[#161c22] font-['Inter'] antialiased">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden bg-[#f6f9ff] pt-20">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-[#e3e9f1] rounded-full">
              <span className="text-[#0059bb] font-['Inter'] text-xs font-bold uppercase tracking-widest">
                Global Aerospace Advisory
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-headline font-extrabold leading-[1.05] tracking-tight text-[#161c22]">
              Engineering <span className="text-[#0059bb]">Clarity.</span>
              <br />
              Technology <span className="text-[#0059bb]">Confidence.</span>
              <br />
              Aviation Focus.
            </h1>
            <p className="text-lg text-[#414754] max-w-lg leading-relaxed">
              A trusted consulting partner helping aviation businesses improve systems, operations, and digital capability through engineering-led precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/services"
                className="bg-gradient-to-br from-[#0059bb] to-[#0070ea] text-white px-8 py-4 rounded-md font-['Inter'] text-sm uppercase tracking-widest font-bold flex items-center gap-2 group hover:opacity-90 transition-all"
              >
                Explore Services
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/contact"
                className="border border-[#c1c6d7] text-[#161c22] px-8 py-4 rounded-md font-['Inter'] text-sm uppercase tracking-widest font-bold hover:bg-[#e3e9f1] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-full bg-[#dde3eb] absolute -top-12 -right-12 w-96 h-96 mix-blend-multiply filter blur-3xl opacity-30" />
            <div className="rounded-xl shadow-2xl relative z-10 bg-[#e8eef6] aspect-[4/3] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#0059bb] text-[80px]">flight</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Credibility Section */}
      <section className="py-24 bg-[#eef4fc]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: "flight_takeoff",
                title: "Industry-focused expertise",
                desc: "Deep-rooted understanding of aviation regulatory environments and operational complexities.",
              },
              {
                icon: "strategy",
                title: "Strategic advisory",
                desc: "Beyond implementation: we architect long-term digital roadmaps for sustainable flight operations.",
              },
              {
                icon: "public",
                title: "International business mindset",
                desc: "Supporting cross-border aerospace projects with a global standard of technical excellence.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <span className="material-symbols-outlined text-[#0059bb] text-4xl">{item.icon}</span>
                <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                <p className="text-[#414754] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-[#f6f9ff]" id="services">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Precision Engineering for Digital Skies
              </h2>
              <p className="text-[#414754] text-lg">
                We bridge the gap between legacy aviation systems and the future of digital aerospace through specialized technical consulting.
              </p>
            </div>
            <div className="hidden md:block pb-2">
              <div className="h-1 w-24 bg-[#0059bb]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "settings_applications",
                title: "Aviation Technology Consulting",
                desc: "Specialized technical architecture design for mission-critical flight management and ground systems.",
              },
              {
                icon: "transform",
                title: "Digital Transformation Advisory",
                desc: "Modernizing legacy infrastructure to support AI-driven analytics and real-time operational data flow.",
              },
              {
                icon: "analytics",
                title: "Systems & Process Optimization",
                desc: "Lean methodologies applied to aviation workflows, reducing latency and increasing system reliability.",
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="p-8 bg-white rounded-xl hover:bg-[#e8eef6] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#e3e9f1] flex items-center justify-center mb-8 group-hover:bg-[#0059bb] transition-colors">
                  <span className="material-symbols-outlined text-[#0059bb] group-hover:text-white">
                    {svc.icon}
                  </span>
                </div>
                <h4 className="font-headline text-xl font-bold mb-4">{svc.title}</h4>
                <p className="text-[#414754] mb-8 leading-relaxed">{svc.desc}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#0059bb] font-bold text-sm uppercase tracking-widest group-hover:underline"
                >
                  Learn More
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 bg-[#eef4fc]" id="industries">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-headline text-3xl font-extrabold mb-16 uppercase tracking-widest text-center">
            Core Industries
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              { label: "Airlines", icon: "flight_takeoff" },
              { label: "Airports", icon: "corporate_fare" },
              { label: "Logistics", icon: "inventory_2" },
              { label: "Aerospace Support", icon: "build_circle" },
            ].map((ind) => (
              <div
                key={ind.label}
                className="group relative overflow-hidden rounded-xl h-96 bg-[#161c22] flex items-end p-8"
              >
                <span className="material-symbols-outlined text-white/10 absolute top-8 right-8 text-[80px] group-hover:text-white/20 transition-colors">
                  {ind.icon}
                </span>
                <h5 className="text-white font-headline text-2xl font-bold relative z-10">{ind.label}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-[#f6f9ff]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
              Why the Industry Chooses Aviatech
            </h2>
            <p className="text-[#414754] text-lg mb-12">
              We don't just understand technology; we understand how technology breathes in the high-pressure world of aviation. Our approach is defined by uncompromising precision.
            </p>
            <div className="space-y-10">
              {[
                {
                  icon: "verified",
                  title: "Aviation-focused Understanding",
                  desc: "Every consultant at Aviatech comes with deep domain experience, ensuring we speak the language of flight operations.",
                },
                {
                  icon: "terminal",
                  title: "Practical Consulting",
                  desc: "We deliver actionable roadmaps, not just theoretical whitepapers. Implementation is part of our DNA.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#d8e2ff]/40 text-[#0059bb]">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h6 className="font-headline text-lg font-bold mb-2">{item.title}</h6>
                    <p className="text-[#414754]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 bg-[#e8eef6] rounded-3xl p-12 relative">
            <div className="absolute -top-6 -left-6 bg-[#0059bb] p-6 rounded-2xl text-white font-bold text-4xl font-headline">
              15+
            </div>
            <h3 className="font-headline text-2xl font-bold mb-6 pt-6 text-[#0059bb]">
              Key Advantage Metrics
            </h3>
            <ul className="space-y-4 font-['Inter'] uppercase text-sm tracking-widest text-[#414754]">
              {[
                { label: "Regulatory Compliance Rate", value: "100%" },
                { label: "Avg. System Efficiency Gain", value: "32%" },
                { label: "Active Global Hubs", value: "08" },
                { label: "Strategic Partners", value: "45" },
              ].map((m) => (
                <li
                  key={m.label}
                  className="flex justify-between border-b border-[#c1c6d7] pb-4"
                >
                  <span>{m.label}</span>
                  <span className="text-[#161c22] font-bold">{m.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-[#161c22] text-white" id="about">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-headline text-4xl font-extrabold mb-8">
                Guided by Precision, Driven by Trust.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Aviatech Consulting was founded on a simple premise: Aviation technology requires a higher standard of care. We are a collective of aerospace veterans and software architects dedicated to navigating the digital frontier.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h6 className="text-[#0059bb] font-bold uppercase tracking-widest text-xs mb-2">Precision</h6>
                  <p className="text-slate-500 text-sm">Eliminating ambiguity in technical execution.</p>
                </div>
                <div>
                  <h6 className="text-[#0059bb] font-bold uppercase tracking-widest text-xs mb-2">Clarity</h6>
                  <p className="text-slate-500 text-sm">Simplifying complex systems for operational ease.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-[#414754] aspect-square opacity-60" />
                <div className="rounded-xl bg-[#414754] aspect-square mt-12 opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#f6f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-headline text-3xl font-extrabold mb-24 text-center">Our Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-[#dde3eb] z-0" />
            {[
              { num: "01", title: "Discover", desc: "Deep dive into current infrastructure and operational constraints." },
              { num: "02", title: "Assess", desc: "Gap analysis and risk evaluation of proposed technological shifts." },
              { num: "03", title: "Design", desc: "Architecting customized solutions with scalability at the core." },
              { num: "04", title: "Implement", desc: "Managed deployment and long-term technical lifecycle support." },
            ].map((step) => (
              <div key={step.num} className="relative z-10 flex flex-col items-center text-center px-4">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-[#f6f9ff] shadow-xl flex items-center justify-center mb-8 font-headline text-2xl font-bold text-[#0059bb]">
                  {step.num}
                </div>
                <h5 className="font-headline font-bold text-xl mb-4">{step.title}</h5>
                <p className="text-[#414754] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-32 bg-[#eef4fc]" id="insights">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="font-headline text-3xl font-extrabold uppercase tracking-widest">
              Aviation Insights
            </h2>
            <Link
              href="/insights"
              className="text-[#0059bb] font-bold uppercase tracking-widest text-sm border-b-2 border-[#0059bb] pb-1"
            >
              Read All Articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                category: "Industry Trends",
                title: "Digital trends in aviation: Beyond the cockpit",
                desc: "Exploring how AI and machine learning are revolutionizing ground-to-air communications and predictive maintenance...",
              },
              {
                category: "Case Study",
                title: "Scaling Airport Systems for the Next Decade",
                desc: "A look into how centralized cloud architectures are helping regional hubs handle triple the volume with 20% less latency...",
              },
            ].map((article) => (
              <div key={article.title} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-8 bg-[#e8eef6] h-80 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#0059bb] text-[60px]">article</span>
                </div>
                <span className="text-[#0059bb] font-['Inter'] text-xs font-bold uppercase tracking-widest">
                  {article.category}
                </span>
                <h4 className="font-headline text-2xl font-bold mt-4 mb-4 group-hover:text-[#0059bb] transition-colors">
                  {article.title}
                </h4>
                <p className="text-[#414754] leading-relaxed">{article.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-[#f6f9ff]" id="contact">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white rounded-[2rem] p-12 lg:p-24 shadow-[0_40px_80px_rgba(22,28,34,0.03)] flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="font-headline text-4xl font-extrabold mb-8">
                Let's discuss your next project
              </h2>
              <div className="space-y-8">
                {[
                  { label: "Email us", value: "hello@aviatech.com" },
                  { label: "Visit us", value: "Techno Plaza I, Suite 402\nZurich Airport Business Park, CH" },
                  { label: "Call us", value: "+41 44 123 4567" },
                ].map((item) => (
                  <div key={item.label}>
                    <h6 className="font-['Inter'] uppercase tracking-widest text-xs text-[#0059bb] mb-2 font-bold">
                      {item.label}
                    </h6>
                    <p className="text-lg font-bold whitespace-pre-line">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-['Inter'] text-xs uppercase tracking-widest font-bold text-[#414754]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#e8eef6] border-none p-4 rounded-md focus:ring-2 focus:ring-[#0059bb] focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-['Inter'] text-xs uppercase tracking-widest font-bold text-[#414754]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-[#e8eef6] border-none p-4 rounded-md focus:ring-2 focus:ring-[#0059bb] focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="font-['Inter'] text-xs uppercase tracking-widest font-bold text-[#414754]">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Airlines, Airport, OEM..."
                    className="w-full bg-[#e8eef6] border-none p-4 rounded-md focus:ring-2 focus:ring-[#0059bb] focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="font-['Inter'] text-xs uppercase tracking-widest font-bold text-[#414754]">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    className="w-full bg-[#e8eef6] border-none p-4 rounded-md focus:ring-2 focus:ring-[#0059bb] focus:bg-white transition-all outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-br from-[#0059bb] to-[#0070ea] text-white px-10 py-5 rounded-md font-['Inter'] text-sm uppercase tracking-widest font-bold md:w-fit hover:opacity-90 transition-all shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
