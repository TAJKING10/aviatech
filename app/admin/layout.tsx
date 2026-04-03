"use client";

import Sidebar from "@/components/admin/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
          <div className="flex justify-between items-center px-8 h-16">
            <div className="flex items-center gap-8">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">search</span>
                <input 
                  className="pl-10 pr-4 py-1.5 bg-surface-variant/30 border-none rounded-md text-sm focus:ring-1 focus:ring-primary/20 w-64 transition-all outline-none" 
                  placeholder="Search Nexus..." 
                  type="text"
                />
              </div>
              <nav className="flex gap-6">
                <Link href="/admin" className="text-primary font-bold border-b-2 border-primary py-5 text-sm font-headline transition-all">Global View</Link>
                <Link href="/admin/logs" className="text-slate-600 hover:text-primary py-5 text-sm font-headline transition-all">Logs</Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <button className="text-slate-500 hover:text-primary transition-all">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="text-slate-500 hover:text-primary transition-all">
                  <span className="material-symbols-outlined">help_center</span>
                </button>
              </div>
              <div className="h-6 w-px bg-slate-200/50"></div>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 border border-slate-200/30 text-slate-700 text-xs font-bold uppercase tracking-widest hover:bg-surface-container-high transition-all">Export</button>
                <button className="px-4 py-2 primary-gradient text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-md hover:scale-[1.02] transition-all">New Entry</button>
                <div className="relative w-8 h-8 rounded-full border border-primary/20 overflow-hidden">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiuXUjkCCDFaMV5niQaPE6enBuPGRm14mK2ofTLERO1EI1epbRiPYpxYPVk4fhiNN8cF0T0VFxOf_ZFuoM1ngi1ipcOLOQ_oU8_h0lDVngSHwKuuO84omp0InmGvkrhT_2aUCz5-xYze6TXgJ-t4hsGqke9VAH26aEDVUvNYM5RgmIn1vU1zFCi4PRlsg9KP5T5w24Mo00RWfTMfhpzypsKbTL_k9rY5dDnd_T6uDpx3obT070-GEM-V-WIc3y_wfU2wTtPMiUvz97"
                    alt="User Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
          
          {/* Admin Footer */}
          <footer className="p-8 border-t border-slate-200/10 mt-auto">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <span>© 2024 Precision Aerospace Editorial System</span>
              <div className="flex gap-8">
                <Link href="/admin/privacy" className="hover:text-primary transition-colors">Privacy Protocol</Link>
                <Link href="/admin/logs" className="hover:text-primary transition-colors">Audit Logs</Link>
                <span className="text-slate-300">System v2.4.1</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
