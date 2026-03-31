const values = [
  { icon: "target", title: "Precision", desc: "Zero margin for error in every technical blueprint we deliver." },
  { icon: "verified_user", title: "Trust", desc: "Building long-term alliances through transparency and integrity." },
  { icon: "rocket_launch", title: "Innovation", desc: "Pushing beyond conventional boundaries to define the future of flight." },
  { icon: "visibility", title: "Clarity", desc: "Distilling vast datasets into actionable intelligence." },
  { icon: "handshake", title: "Partnership", desc: "Your mission becomes our objective. Seamlessly integrated." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f6f9ff] text-[#161c22] font-['Inter'] antialiased">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 items-end">
          <div>
            <span className="font-['Inter'] text-xs text-[#0059bb] uppercase tracking-[0.2em] font-bold mb-6 block">
              Our Identity
            </span>
            <h1 className="text-7xl font-extrabold font-headline leading-[1.1] tracking-tighter text-[#161c22] mb-8">
              Navigating the <br />
              Stratosphere of <br />
              <span className="text-[#0070ea]">Complexity.</span>
            </h1>
          </div>
          <div className="pb-4">
            <p className="text-lg text-[#414754] leading-relaxed max-w-md">
              In an era of rapid technological acceleration, Aviatech Consulting serves as the steady hand for global aviation leaders navigating intricate digital transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story — Bento */}
      <section className="bg-[#eef4fc] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-white p-12 rounded-xl flex flex-col justify-center">
              <h2 className="text-4xl font-headline font-bold mb-6">The Aviatech Story</h2>
              <p className="text-[#414754] leading-relaxed mb-6 text-lg">
                Founded by aerospace engineers and digital architects, Aviatech Consulting was born out of a single realization: the gap between legacy aviation systems and modern computational potential is widening.
              </p>
              <p className="text-[#414754] leading-relaxed">
                We don't just advise; we engineer the transition. Our mission is to decode technical complexity into operational excellence, ensuring that every organization we touch achieves a higher state of readiness and innovation.
              </p>
            </div>
            <div className="md:col-span-4 h-full min-h-[400px] rounded-xl overflow-hidden relative bg-[#161c22] flex items-center justify-center">
              <span className="material-symbols-outlined text-white/20 text-[100px]">architecture</span>
              <div className="absolute inset-0 bg-[#0059bb]/20 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20">
            <div className="max-w-xl">
              <h2 className="text-5xl font-headline font-bold tracking-tight mb-4">Core Principles</h2>
              <div className="h-1 w-24 bg-[#0059bb] mb-8" />
            </div>
            <p className="text-[#414754] max-w-sm font-medium italic">
              "Precision is not just a standard; it is the fundamental frequency of our operations."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
            {values.map((v) => (
              <div key={v.title} className="bg-[#e8eef6] p-10 hover:bg-[#dde3eb] transition-colors duration-300">
                <span className="material-symbols-outlined text-[#0059bb] mb-6 text-4xl block">{v.icon}</span>
                <h3 className="font-headline font-bold text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-[#414754] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach — Dark */}
      <section className="bg-[#161c22] text-[#f6f9ff] py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-square bg-white/5 p-8 rounded-full flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#414754]/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white/30 text-[100px]">settings</span>
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-10 -right-10 bg-white/10 backdrop-blur-xl p-8 rounded-lg border border-white/10 max-w-xs shadow-2xl">
                <p className="text-white font-headline font-bold text-lg mb-2">Systems Thinking</p>
                <p className="text-white/60 text-xs leading-relaxed">
                  Our philosophy relies on viewing every organization as an interconnected flight system, where every adjustment impacts the whole trajectory.
                </p>
              </div>
            </div>
            <div>
              <span className="font-['Inter'] uppercase tracking-[0.2em] text-[#0070ea] font-bold mb-6 block text-xs">
                Our Approach
              </span>
              <h2 className="text-5xl font-headline font-bold mb-10 leading-tight">
                Engineering <br />the Transition.
              </h2>
              <ul className="space-y-12">
                {[
                  { num: "01", title: "Diagnosis & Auditing", desc: "A deep-dive analysis into legacy infrastructure to identify bottlenecks and security vulnerabilities within your tech stack." },
                  { num: "02", title: "Strategic Flightpath", desc: "Developing a bespoke digital transformation roadmap that aligns with both operational requirements and future-proof scaling." },
                  { num: "03", title: "Technical Implementation", desc: "Executing complex integrations with surgical precision, ensuring zero downtime and maximum security compliance." },
                ].map((step) => (
                  <li key={step.num} className="flex items-start gap-6">
                    <span className="text-[#0070ea] font-headline font-extrabold text-2xl">{step.num}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-[#f6f9ff]/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#f6f9ff]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-headline font-bold mb-8">
            Ready to elevate your technical standards?
          </h2>
          <button className="bg-[#0059bb] hover:bg-[#0070ea] text-white px-10 py-5 rounded-md font-headline font-bold transition-all transform hover:-translate-y-1">
            Partner With Us
          </button>
        </div>
      </section>
    </div>
  );
}
