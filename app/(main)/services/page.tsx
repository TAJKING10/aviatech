import Link from "next/link";

const services = [
  { icon: "flight_takeoff", title: "Aviation Technology Consulting", desc: "Deploying cutting-edge avionics systems and ground control software architectures that meet stringent FAA/EASA standards." },
  { icon: "dynamic_form", title: "Digital Transformation Advisory", desc: "Modernizing legacy airline operations through cloud-native migration and integrated digital ecosystem planning." },
  { icon: "settings_suggest", title: "Systems & Process Optimization", desc: "Refining workflows from maintenance tracking to passenger manifest management for maximum throughput and reliability." },
  { icon: "account_tree", title: "Technical Project Support", desc: "End-to-end technical oversight for complex aerospace engineering initiatives and multi-vendor integrations." },
  { icon: "analytics", title: "Business Analysis", desc: "Data-driven feasibility studies and market gap analysis for emerging aerospace technologies and logistics solutions." },
  { icon: "database", title: "Software & Data Consulting", desc: "Architecting secure, real-time data pipelines for telemetry processing and predictive maintenance analytics." },
  { icon: "speed", title: "Operational Efficiency", desc: "Reducing turnaround times and fuel burn through algorithmic route optimization and ground crew coordination." },
  { icon: "groups_3", title: "Training & Change Support", desc: "Facilitating smooth adoption of new technologies through specialized training programs for pilots, engineers, and staff." },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f6f9ff] text-[#161c22] font-['Inter'] antialiased">
      {/* Hero */}
      <header className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="inline-block px-3 py-1 bg-[#e3e9f1] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#0059bb] mb-6">
              Expertise &amp; Solutions
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] text-[#161c22] mb-8">
              Precision-Engineered{" "}
              <br />
              <span style={{ background: "linear-gradient(135deg,#0059bb,#0070ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Aviation Intelligence
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-[#414754] text-lg leading-relaxed font-light">
              Leveraging decades of aerospace experience to navigate the complexities of digital flight decks and operational infrastructure.
            </p>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c1c6d7]/20 rounded-xl overflow-hidden shadow-sm">
          {services.map((svc) => (
            <div key={svc.title} className="bg-white p-10 hover:bg-[#e8eef6] transition-colors duration-500 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-[#0059bb]/5 rounded-lg mb-8 group-hover:bg-[#0059bb] transition-colors">
                  <span className="material-symbols-outlined text-[#0059bb] group-hover:text-white transition-colors">{svc.icon}</span>
                </div>
                <h3 className="text-2xl font-headline font-bold tracking-tight mb-4">{svc.title}</h3>
                <p className="text-[#414754] text-sm leading-relaxed mb-8">{svc.desc}</p>
              </div>
              <button className="flex items-center text-[#0059bb] font-headline font-bold text-xs uppercase tracking-widest group/btn">
                Request Info
                <span className="material-symbols-outlined ml-2 text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </button>
            </div>
          ))}
          {/* CTA Card */}
          <div className="bg-[#0059bb] p-10 flex flex-col justify-center items-start text-white">
            <h3 className="text-3xl font-headline font-extrabold mb-6 leading-tight">Tailored Aviation Solutions</h3>
            <p className="text-[#d8e2ff]/80 text-sm mb-10 leading-relaxed">
              Don't see exactly what you're looking for? Our consulting team builds bespoke architectures for unique aerospace challenges.
            </p>
            <Link href="/contact" className="bg-white text-[#0059bb] px-8 py-3 rounded font-headline font-bold text-sm tracking-tight hover:shadow-xl active:scale-95 transition-all">
              Inquire Custom Project
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="max-w-7xl mx-auto px-8 pb-40">
        <div className="relative rounded-2xl overflow-hidden min-h-[500px] flex items-center bg-[#161c22]">
          <div className="relative z-10 max-w-2xl p-12 lg:p-20">
            <span className="text-[#d8e2ff] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Operational Spotlight</span>
            <h2 className="text-white text-5xl font-headline font-extrabold tracking-tighter mb-6">Redefining Maintenance Paradigms</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              How we helped a global carrier reduce unplanned maintenance by 22% using predictive data modeling and sensor integration.
            </p>
            <button className="text-white border border-white/30 px-6 py-3 rounded-md hover:bg-white hover:text-[#161c22] transition-all font-headline font-bold text-sm tracking-tighter">
              Read Case Study
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-8 pb-40 text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tight mb-4">Start Your Trajectory</h2>
        <p className="text-[#414754] mb-10">Connect with an Aviatech specialist today to discuss your technical roadmap.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input type="email" placeholder="Professional Email Address" className="flex-grow bg-[#e8eef6] border-none rounded-md px-6 py-4 focus:ring-2 focus:ring-[#0059bb] text-[#161c22] outline-none" />
          <button className="bg-gradient-to-br from-[#0059bb] to-[#0070ea] text-white px-8 py-4 rounded-md font-headline font-bold tracking-tight whitespace-nowrap">Send Request</button>
        </div>
      </section>
    </div>
  );
}
