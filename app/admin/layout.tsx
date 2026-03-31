"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import { Bell, Search, ChevronDown, User } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]" style={{ paddingTop: 0 }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          collapsed ? "ml-16" : "ml-64"
        }`}
      >
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm">
          {/* Search */}
          <div className="relative w-72 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-4 py-2 bg-[#F8FAFC] border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1E3A8A] transition-colors"
            />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Notifications */}
            <button className="relative w-9 h-9 bg-[#F8FAFC] border border-gray-200 rounded-lg flex items-center justify-center hover:border-gray-300 transition-colors">
              <Bell className="w-4 h-4 text-gray-500" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F59E0B] text-[#0A1628] text-[9px] font-black rounded-full flex items-center justify-center">
                6
              </span>
            </button>

            {/* User */}
            <button className="flex items-center gap-2.5 bg-[#F8FAFC] border border-gray-200 rounded-lg px-3 py-2 hover:border-gray-300 transition-colors">
              <div className="w-7 h-7 bg-gradient-to-br from-[#1E3A8A] to-[#0A1628] rounded-full flex items-center justify-center text-white text-xs font-bold">
                RA
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-semibold text-gray-800">Robert Avery</div>
                <div className="text-[10px] text-gray-400">Administrator</div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
