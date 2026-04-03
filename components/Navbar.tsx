"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-8 py-4",
        scrolled 
          ? "bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(22,28,34,0.05)] py-3" 
          : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className={cn(
            "text-xl font-bold tracking-tighter uppercase font-headline transition-colors",
            scrolled || pathname !== "/" ? "text-slate-900" : "text-white"
          )}
        >
          Aviatech Consulting
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-headline font-medium tracking-tight text-sm">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors relative py-1",
                  active
                    ? "text-primary font-bold"
                    : scrolled || pathname !== "/"
                      ? "text-slate-600 hover:text-primary"
                      : "text-slate-200 hover:text-white"
                )}
              >
                {link.label}
                {active && (
                  <motion.div 
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className={cn(
              "hidden lg:block font-medium transition-colors",
              scrolled || pathname !== "/" ? "text-slate-600 hover:text-primary" : "text-slate-200 hover:text-white"
            )}
          >
            Contact
          </Link>
          <Link
            href="/booking"
            className="primary-gradient text-white px-6 py-3 rounded-lg font-medium active:scale-95 transition-transform atmospheric-shadow"
          >
            Book a Consultation
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              scrolled || pathname !== "/" ? "text-slate-600" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 px-8 py-6 space-y-4 absolute left-0 w-full shadow-xl"
          >
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
                  className={cn(
                    "block text-lg font-headline font-medium tracking-tight",
                    active ? "text-primary font-bold" : "text-slate-600"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-headline font-medium text-slate-600"
            >
              Contact
            </Link>
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="block primary-gradient text-white text-center px-6 py-4 rounded-lg font-bold shadow-lg"
            >
              Book a Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
