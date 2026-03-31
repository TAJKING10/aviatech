export default function ContactPage() {
  return (
    <div className="bg-[#f6f9ff] text-[#161c22] font-['Inter'] antialiased">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="inline-block font-['Inter'] uppercase tracking-[0.2rem] text-[#0059bb] text-xs font-bold mb-4">
              Get in Touch
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-[#161c22] leading-[1.1]">
              Let&apos;s discuss your <br />
              <span style={{ background: "linear-gradient(135deg,#0059bb,#0070ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                next project
              </span>
              .
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-[#414754] text-lg leading-relaxed">
              Elevating aerospace ventures through strategic engineering and operational precision. Our experts are ready to pilot your next breakthrough.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-10 rounded-xl shadow-[0_20px_40px_rgba(22,28,34,0.03)] border border-[#c1c6d7]/15">
            <h3 className="font-headline text-2xl font-bold mb-8">Send an Inquiry</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-['Inter'] text-xs font-bold uppercase tracking-wider text-[#414754]">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-[#e8eef6] border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#0059bb] focus:bg-white transition-all outline-none text-[#161c22] placeholder:text-[#c1c6d7]" />
              </div>
              <div className="space-y-2">
                <label className="font-['Inter'] text-xs font-bold uppercase tracking-wider text-[#414754]">Email Address</label>
                <input type="email" placeholder="john@company.com" className="w-full bg-[#e8eef6] border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#0059bb] focus:bg-white transition-all outline-none text-[#161c22] placeholder:text-[#c1c6d7]" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="font-['Inter'] text-xs font-bold uppercase tracking-wider text-[#414754]">Subject</label>
                <select className="w-full bg-[#e8eef6] border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#0059bb] focus:bg-white transition-all outline-none text-[#161c22]">
                  <option>Aerospace Strategy</option>
                  <option>Engineering Consulting</option>
                  <option>Supply Chain Optimization</option>
                  <option>Digital Transformation</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="font-['Inter'] text-xs font-bold uppercase tracking-wider text-[#414754]">Message</label>
                <textarea rows={5} placeholder="Tell us about your project goals..." className="w-full bg-[#e8eef6] border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#0059bb] focus:bg-white transition-all outline-none text-[#161c22] placeholder:text-[#c1c6d7]" />
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full md:w-auto bg-gradient-to-br from-[#0059bb] to-[#0070ea] text-white font-headline font-bold px-10 py-4 rounded-lg shadow-lg hover:-translate-y-0.5 transition-all">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="grid grid-cols-1 gap-8">
              {[
                { icon: "mail", title: "Email Us", lines: ["connect@aviatech.com", "support@aviatech.com"] },
                { icon: "call", title: "Call Our Office", lines: ["+1 (555) 890-4422", "Mon - Fri, 9am - 6pm EST"] },
                { icon: "location_on", title: "Global Headquarters", lines: ["1200 Innovation Way, Suite 400", "Aerospace District, Seattle, WA 98101"] },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-6 group">
                  <div className="bg-[#e3e9f1] p-4 rounded-xl text-[#0059bb] transition-colors group-hover:bg-[#0059bb] group-hover:text-white">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-1">{item.title}</h4>
                    {item.lines.map((line) => (
                      <p key={line} className="text-[#414754]">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-[320px] rounded-xl overflow-hidden bg-[#e8eef6] border border-[#c1c6d7]/15 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#0059bb] text-[60px]">map</span>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-[#161c22] shadow-sm">
                HQ Location
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
