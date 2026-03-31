"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Plane,
  LayoutDashboard,
  CalendarCheck,
  BookOpen,
  MessageSquare,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  ExternalLink,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/bookings", label: "Bookings", icon: CalendarCheck },
  { href: "/admin/training", label: "Training Modules", icon: BookOpen },
  { href: "/admin/messages", label: "Messages", icon: MessageSquare, badge: 4 },
  { href: "/admin/applications", label: "Applications", icon: FileText, badge: 2 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-[#0A1628] border-r border-white/10 flex flex-col transition-all duration-300 z-40 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white/10 min-h-[68px]">
        <div className="w-9 h-9 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-lg flex items-center justify-center flex-shrink-0">
          <Plane className="w-4 h-4 text-white transform -rotate-45" strokeWidth={2.5} />
        </div>
        {!collapsed && (
          <div className="flex flex-col overflow-hidden">
            <span className="text-white font-bold text-sm leading-tight">AVIATECH</span>
            <span className="text-[#F59E0B] text-[9px] font-medium tracking-[0.2em] uppercase leading-tight">
              Admin Panel
            </span>
          </div>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const active = isActive(item.href, item.exact);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative ${
                active
                  ? "bg-[#F59E0B]/10 text-[#F59E0B] border-r-2 border-[#F59E0B]"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 ${active ? "text-[#F59E0B]" : ""}`} />
              {!collapsed && (
                <span className="text-sm font-medium flex-1">{item.label}</span>
              )}
              {!collapsed && item.badge && (
                <span className="bg-[#F59E0B] text-[#0A1628] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
              {collapsed && item.badge && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#F59E0B] rounded-full"></span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="px-2 pb-4 border-t border-white/10 pt-4 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-200"
          title={collapsed ? "View Site" : undefined}
        >
          <ExternalLink className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">View Site</span>}
        </Link>
        <button
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200"
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-[#0A1628] border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors shadow-lg"
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>
    </aside>
  );
}
