import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-24 px-8 bg-slate-50 border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-screen-2xl mx-auto">
        <div className="col-span-1">
          <div className="text-lg font-black text-slate-900 uppercase tracking-widest font-headline mb-6">
            Aviatech Consulting
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Engineering clarity and technology confidence for the global aviation sector. High-performance consultancy for mission-critical operations.
          </p>
        </div>
        
        <div className="flex flex-col space-y-4">
          <h5 className="font-bold text-on-surface mb-2 font-headline uppercase text-xs tracking-widest">Company</h5>
          <Link href="/about" className="text-slate-500 hover:text-primary text-sm transition-transform hover:translate-x-1">About Us</Link>
          <Link href="/services" className="text-slate-500 hover:text-primary text-sm transition-transform hover:translate-x-1">Our Services</Link>
          <Link href="/industries" className="text-slate-500 hover:text-primary text-sm transition-transform hover:translate-x-1">Industries</Link>
          <Link href="/contact" className="text-slate-500 hover:text-primary text-sm transition-transform hover:translate-x-1">Contact Us</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h5 className="font-bold text-on-surface mb-2 font-headline uppercase text-xs tracking-widest">Resources</h5>
          <Link href="/insights" className="text-slate-500 hover:text-primary text-sm transition-transform hover:translate-x-1">Insights</Link>
          <Link href="/regulatory" className="text-slate-500 hover:text-primary text-sm transition-transform hover:translate-x-1">Regulatory Compliance</Link>
          <Link href="/privacy" className="text-slate-500 hover:text-primary text-sm transition-transform hover:translate-x-1">Privacy Policy</Link>
          <Link href="/terms" className="text-slate-500 hover:text-primary text-sm transition-transform hover:translate-x-1">Terms of Service</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h5 className="font-bold text-on-surface mb-2 font-headline uppercase text-xs tracking-widest">Connect</h5>
          <p className="text-slate-500 text-sm mb-4">Stay updated with our latest aviation engineering insights.</p>
          <div className="flex bg-white p-1 rounded-lg border border-outline-variant/20 shadow-sm focus-within:ring-2 focus-within:ring-primary transition-all">
            <input 
              className="bg-transparent border-none text-sm px-4 w-full focus:ring-0 outline-none" 
              placeholder="email@precision.aero" 
              type="email" 
            />
            <button className="primary-gradient text-white px-4 py-2 rounded-md font-bold text-xs uppercase hover:brightness-110 transition-all">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto pt-12 mt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs font-body tracking-wide">
          © 2024 Aviatech Consulting Editorial. All rights reserved. Engineered for Excellence.
        </p>
        <div className="flex space-x-8">
          <Link href="/privacy" className="text-slate-500 hover:text-primary text-xs transition-colors">Privacy Policy</Link>
          <Link href="/accessibility" className="text-slate-500 hover:text-primary text-xs transition-colors">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
