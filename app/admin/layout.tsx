"use client";

import Sidebar from "@/components/admin/Sidebar";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar />
      
      <main className="flex-1 ml-64 min-h-screen bg-surface flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 w-full z-40 bg-[#f6f9ff]/80 backdrop-blur-xl border-b border-slate-200/15 shadow-[0px_20px_40px_rgba(22,28,34,0.05)]">
          <div className="flex items-center px-8 h-16">
            <nav className="flex gap-6">
              <Link href="/admin" className="text-primary font-bold border-b-2 border-primary py-5 text-sm font-headline transition-all">Dashboard</Link>
              <Link href="/admin/bookings" className="text-slate-600 hover:text-primary py-5 text-sm font-headline transition-all">Bookings</Link>
              <Link href="/admin/messages" className="text-slate-600 hover:text-primary py-5 text-sm font-headline transition-all">Messages</Link>
            </nav>

          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
          
          {/* Admin Footer */}
          <footer className="p-8 border-t border-slate-200/10 mt-auto">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <span>© {new Date().getFullYear()} Aviatech Consulting — Admin Panel</span>
              <div className="flex gap-8">
                <Link href="/admin/settings" className="hover:text-primary transition-colors">Settings</Link>
                <Link href="/admin/subscribers" className="hover:text-primary transition-colors">Subscribers</Link>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
