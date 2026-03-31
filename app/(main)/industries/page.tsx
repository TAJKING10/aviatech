export default function IndustriesPage() {
  return (
    <div className="bg-[#f6f9ff] text-[#161c22] font-['Inter'] antialiased">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <span className="font-['Inter'] text-[#0059bb] uppercase tracking-[0.2rem] text-xs font-bold mb-4 block">
              Sector Expertise
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-[#161c22] leading-[1.1] mb-8">
              Precision Solutions for the{" "}
              <span className="text-[#0059bb]">Global Skyway</span>.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end">
            <p className="text-[#414754] text-lg leading-relaxed mb-6">
              Aviatech Consulting provides instrument-grade strategic guidance across the full aerospace ecosystem, from legacy carriers to emerging tech vendors.
            </p>
            <div className="h-1 w-24 bg-[#0059bb]" />
          </div>
        </div>
      </section>

      {/* Industry Bento Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Airlines */}
          <div className="group relative bg-[#e8eef6] rounded-xl overflow-hidden p-8 transition-all duration-300 hover:bg-[#dde3eb]">
            <div className="mb-12">
              <span className="material-symbols-outlined text-4xl text-[#0059bb]">flight_takeoff</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Airlines</h3>
            <p className="text-[#414754] leading-relaxed">
              Optimizing fleet management, network planning, and passenger experience through data-driven operational intelligence.
            </p>
            <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl">flight</span>
            </div>
          </div>

          {/* Airports */}
          <div className="group relative bg-[#eef4fc] rounded-xl overflow-hidden p-8 transition-all duration-300 hover:bg-[#dde3eb]">
            <div className="mb-12">
              <span className="material-symbols-outlined text-4xl text-[#0059bb]">hub</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Airports</h3>
            <p className="text-[#414754] leading-relaxed">
              Modernizing ground operations and terminal logistics to maximize throughput and minimize environmental impact.
            </p>
            <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl">corporate_fare</span>
            </div>
          </div>

          {/* Logistics & Cargo — row span 2 */}
          <div className="group relative bg-[#e8eef6] rounded-xl overflow-hidden p-8 md:row-span-2 transition-all duration-300 hover:bg-[#dde3eb]">
            <div className="mb-12">
              <span className="material-symbols-outlined text-4xl text-[#0059bb]">inventory_2</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Logistics &amp; Cargo</h3>
            <p className="text-[#414754] leading-relaxed mb-8">
              Streamlining global supply chains with automated tracking and strategic route optimization for high-velocity freight.
            </p>
            <div className="w-full h-64 bg-[#161c22] rounded-lg mt-4 flex items-center justify-center">
              <span className="material-symbols-outlined text-white/20 text-[80px]">local_shipping</span>
            </div>
          </div>

          {/* Aerospace Support */}
          <div className="group relative bg-[#eef4fc] rounded-xl overflow-hidden p-8 transition-all duration-300 hover:bg-[#dde3eb]">
            <div className="mb-12">
              <span className="material-symbols-outlined text-4xl text-[#0059bb]">build_circle</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Aerospace Support</h3>
            <p className="text-[#414754] leading-relaxed">
              MRO strategies and supply chain resilience for component manufacturers and ground handling specialists.
            </p>
          </div>

          {/* Technology Vendors */}
          <div className="group relative bg-[#e8eef6] rounded-xl overflow-hidden p-8 transition-all duration-300 hover:bg-[#dde3eb]">
            <div className="mb-12">
              <span className="material-symbols-outlined text-4xl text-[#0059bb]">memory</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Technology Vendors</h3>
            <p className="text-[#414754] leading-relaxed">
              Bridging the gap between software innovation and regulatory compliance for NextGen aviation systems.
            </p>
          </div>

          {/* SMEs — col span 2 */}
          <div className="col-span-1 md:col-span-2 group relative bg-[#0070ea] text-white rounded-xl overflow-hidden p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-300">
            <div className="flex-1">
              <div className="mb-6">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-4">SMEs &amp; Startups</h3>
              <p className="text-white/80 leading-relaxed max-w-md">
                Scaling the future of flight. We provide lean, tactical consulting for boutique aerospace firms and emerging drone technologies.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-white text-[#0059bb] px-8 py-4 rounded-md font-bold hover:bg-[#f6f9ff] transition-colors">
                Explore SME Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sector Section */}
      <section className="py-24 bg-[#eef4fc]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-6">Cross-Sector Integration</h2>
            <p className="text-[#414754] text-lg leading-relaxed">
              Our unique advantage lies in our ability to connect different sectors. We understand how airport infrastructure impacts airline efficiency, and how technology vendors must align with MRO workflows.
            </p>
            <ul className="mt-8 space-y-4">
              {["Regulatory Alignment", "Operational Synchronicity", "Data Liquidity"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0059bb]">check_circle</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-[#0059bb]/5 rounded-full blur-3xl" />
            <div className="relative z-10 w-full aspect-square bg-[#e8eef6] rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-[#0059bb] text-[80px]">flight</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
