"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(22,28,34,0.05)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-slate-900 uppercase font-headline"
        >
          Aviatech Consulting
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-['Manrope'] font-medium tracking-tight text-sm">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                    : "text-slate-600 hover:text-blue-600 transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            className="hidden sm:block bg-gradient-to-br from-[#0059bb] to-[#0070ea] text-white px-6 py-3 rounded-md font-label text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-all"
          >
            Book a Consultation
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Separator */}
      <div className="bg-slate-100/50 h-[1px] w-full" />

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-8 py-4 space-y-1">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm font-['Manrope'] font-medium tracking-tight ${
                  active ? "text-blue-600 font-bold" : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/booking"
            onClick={() => setIsOpen(false)}
            className="block mt-3 bg-gradient-to-br from-[#0059bb] to-[#0070ea] text-white text-center px-6 py-3 rounded-md font-label text-sm uppercase tracking-widest font-bold"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
