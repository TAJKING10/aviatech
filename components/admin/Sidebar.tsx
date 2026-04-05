"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const menuItems = [
  { icon: "dashboard", label: "Dashboard", href: "/admin" },
  { icon: "description", label: "Applications", href: "/admin/applications" },
  { icon: "school", label: "Training Modules", href: "/admin/training" },
  { icon: "group", label: "Bookings", href: "/admin/bookings" },
  { icon: "mail", label: "Messages", href: "/admin/messages" },
  { icon: "campaign", label: "Subscribers", href: "/admin/subscribers" },
  { icon: "settings", label: "Site Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleSignOut() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-[#f6f9ff] flex flex-col border-r border-slate-200/15 z-50">
      <div className="px-6 py-8">
        <h1 className="text-xl font-black tracking-tighter text-[#161c22]">Precision Aero</h1>
        <p className="font-headline uppercase tracking-widest text-[11px] font-bold text-slate-400 mt-1">Editorial Admin</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 transition-all relative group",
                    active 
                      ? "bg-white text-primary border-r-4 border-primary" 
                      : "text-slate-500 hover:bg-[#e8eef6]"
                  )}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="font-headline uppercase tracking-widest text-[11px] font-bold">{item.label}</span>
                  {active && (
                    <motion.div 
                      layoutId="admin-nav-active"
                      className="absolute inset-0 bg-white -z-10"
                      initial={false}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-6 border-t border-slate-200/15">
        <button className="w-full primary-gradient text-white py-3 rounded-md font-headline uppercase tracking-widest text-[11px] font-bold shadow-lg hover:opacity-90 transition-all active:scale-95">
          Flight Status
        </button>
        <div className="mt-6 space-y-4">
          <Link href="/support" className="flex items-center gap-3 text-slate-500 hover:text-primary transition-colors group">
            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">help</span>
            <span className="font-headline uppercase tracking-widest text-[11px] font-bold">Support</span>
          </Link>
          <button onClick={handleSignOut} className="flex items-center gap-3 text-slate-500 hover:text-error transition-colors group w-full text-left">
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">logout</span>
            <span className="font-headline uppercase tracking-widest text-[11px] font-bold">Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
