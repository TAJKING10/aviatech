"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "dashboard", exact: true },
  { href: "/admin/bookings", label: "Bookings", icon: "calendar_today" },
  { href: "/admin/training", label: "Training Modules", icon: "school" },
  { href: "/admin/messages", label: "Messages", icon: "mail" },
  { href: "/admin/applications", label: "Applications", icon: "description" },
  { href: "/admin/settings", label: "Site Settings", icon: "settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#f6f9ff] border-r border-slate-200/15 z-50 flex flex-col">
      {/* Logo Area */}
      <div className="px-6 py-8">
        <div className="text-[#161c22] font-headline font-black text-xl leading-none">Aviatech</div>
        <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mt-1">
          Precision Admin
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto">
        {navItems.map((item) => {
          const active = isActive(item.href, item.exact);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "flex items-center gap-3 px-6 py-4 bg-white text-[#0059bb] border-r-4 border-[#0059bb] font-bold font-['Manrope'] uppercase tracking-widest text-[11px]"
                  : "flex items-center gap-3 px-6 py-4 text-slate-500 hover:bg-[#e8eef6] transition-colors font-['Manrope'] uppercase tracking-widest text-[11px] font-bold"
              }
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="px-6 pb-8 pt-4 space-y-3">
        {/* Flight Status Button */}
        <button className="w-full bg-gradient-to-r from-[#0059bb] to-[#0070ea] text-white font-['Manrope'] font-bold uppercase tracking-widest text-[10px] py-3 px-4 rounded-xl flex items-center gap-2 justify-center hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined text-[16px]">flight</span>
          Flight Status
        </button>

        {/* Support */}
        <Link
          href="/support"
          className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors font-['Manrope'] uppercase tracking-widest text-[10px] font-bold py-1"
        >
          <span className="material-symbols-outlined text-[16px]">help_outline</span>
          Support
        </Link>

        {/* Sign Out */}
        <button className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors font-['Manrope'] uppercase tracking-widest text-[10px] font-bold py-1 w-full text-left">
          <span className="material-symbols-outlined text-[16px]">logout</span>
          Sign Out
        </button>
      </div>
    </aside>
  );
}
