import Link from "next/link";
import { Plane, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, ArrowRight } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "News & Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Flight Operations", href: "/services#flight-ops" },
    { label: "Safety Management", href: "/services#safety" },
    { label: "Regulatory Compliance", href: "/services#compliance" },
    { label: "Training Programs", href: "/services#training" },
    { label: "Fleet Management", href: "/services#fleet" },
  ],
  industries: [
    { label: "Commercial Aviation", href: "/industries#commercial" },
    { label: "Military Aviation", href: "/industries#military" },
    { label: "Business Aviation", href: "/industries#business" },
    { label: "Cargo & Freight", href: "/industries#cargo" },
    { label: "Airport Management", href: "/industries#airport" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-gray-300">
      {/* Newsletter Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-xl font-bold mb-1">
                Stay ahead in aviation
              </h3>
              <p className="text-gray-400 text-sm">
                Get the latest industry insights, regulatory updates, and consulting tips.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F59E0B] transition-colors"
              />
              <button className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 whitespace-nowrap">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-lg flex items-center justify-center">
                <Plane className="w-5 h-5 text-white transform -rotate-45" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">AVIATECH</span>
                <span className="text-[#F59E0B] text-[10px] font-medium tracking-[0.2em] uppercase leading-tight">
                  Consulting
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Aviatech Consulting is a premier aviation consulting firm delivering strategic
              excellence across flight operations, safety management, and regulatory compliance
              for organizations worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@aviatech.aero" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#F59E0B] transition-colors group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#F59E0B]/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                info@aviatech.aero
              </a>
              <a href="tel:+12125550180" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#F59E0B] transition-colors group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#F59E0B]/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                +1 (212) 555-0180
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                1221 Avenue of the Americas, New York, NY
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#F59E0B] transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#F59E0B] transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#F59E0B] transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Aviatech Consulting. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-[#F59E0B]/20 border border-white/10 hover:border-[#F59E0B]/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#F59E0B] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="flex gap-4 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-gray-300 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
