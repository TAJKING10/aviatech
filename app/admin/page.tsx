import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck, DollarSign, Users, AlertCircle, TrendingUp, TrendingDown,
  ArrowRight, CheckCircle, Clock, Eye, Plus, FileText, MessageSquare, BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard | Aviatech",
};

const stats = [
  {
    label: "Total Bookings",
    value: "248",
    change: "+12%",
    trend: "up",
    icon: CalendarCheck,
    color: "bg-blue-500",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    label: "Revenue (YTD)",
    value: "$1.24M",
    change: "+18.3%",
    trend: "up",
    icon: DollarSign,
    color: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    label: "Active Clients",
    value: "89",
    change: "+5",
    trend: "up",
    icon: Users,
    color: "bg-[#F59E0B]",
    lightBg: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    label: "Pending Reviews",
    value: "12",
    change: "-3",
    trend: "down",
    icon: AlertCircle,
    color: "bg-rose-500",
    lightBg: "bg-rose-50",
    textColor: "text-rose-600",
  },
];

const recentBookings = [
  { id: "AVI-001842", client: "James Harrington", company: "Atlas Airways", module: "Safety Management Systems", amount: "$4,800", date: "Mar 28, 2026", status: "Confirmed" },
  { id: "AVI-001841", client: "Sarah Chen", company: "Pacific Cargo Airlines", module: "Regulatory Compliance", amount: "$4,200", date: "Mar 27, 2026", status: "Pending" },
  { id: "AVI-001840", client: "Mohamed Al-Rashidi", company: "Gulf Regional Aviation", module: "Fleet Planning", amount: "$3,800", date: "Mar 26, 2026", status: "Confirmed" },
  { id: "AVI-001839", client: "Anna Kowalski", company: "EuroConnect Airlines", module: "CRM + SMS Bundle", amount: "$7,200", date: "Mar 25, 2026", status: "In Progress" },
  { id: "AVI-001838", client: "David Okonkwo", company: "AfriAir Ltd", module: "Flight Operations", amount: "$3,600", date: "Mar 24, 2026", status: "Confirmed" },
];

const statusColors: Record<string, string> = {
  Confirmed: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
};

const activityFeed = [
  { action: "New booking received", detail: "Atlas Airways — SMS Training", time: "2 minutes ago", color: "bg-emerald-500" },
  { action: "Contact message", detail: "Inquiry from Lufthansa Technik", time: "18 minutes ago", color: "bg-blue-500" },
  { action: "Application submitted", detail: "Partnership — AeroPlan Inc.", time: "1 hour ago", color: "bg-purple-500" },
  { action: "Booking cancelled", detail: "Nordic Air — FRMS Module", time: "3 hours ago", color: "bg-red-500" },
  { action: "Payment received", detail: "$7,200 — EuroConnect Airlines", time: "5 hours ago", color: "bg-[#F59E0B]" },
  { action: "Training completed", detail: "Gulf Regional Aviation — Fleet", time: "Yesterday", color: "bg-gray-400" },
];

const monthlyData = [
  { month: "Oct", bookings: 18, revenue: 72 },
  { month: "Nov", bookings: 22, revenue: 88 },
  { month: "Dec", bookings: 15, revenue: 60 },
  { month: "Jan", bookings: 28, revenue: 112 },
  { month: "Feb", bookings: 31, revenue: 124 },
  { month: "Mar", bookings: 26, revenue: 104 },
];

const maxRevenue = Math.max(...monthlyData.map((d) => d.revenue));

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-0.5">Welcome back, Robert. Here&apos;s what&apos;s happening.</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/admin/bookings"
            className="flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <Eye className="w-4 h-4" /> All Bookings
          </Link>
          <Link
            href="/booking"
            className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <Plus className="w-4 h-4" /> New Booking
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 ${stat.lightBg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${stat.textColor}`} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${stat.trend === "up" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
                  {stat.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {stat.change}
                </div>
              </div>
              <div className="text-3xl font-black text-[#0A1628] mb-0.5">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-black text-[#0A1628] text-lg">Revenue Overview</h2>
              <p className="text-gray-400 text-sm">Last 6 months (USD thousands)</p>
            </div>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 focus:outline-none focus:border-[#1E3A8A]">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>

          {/* CSS Bar Chart */}
          <div className="flex items-end justify-between gap-3 h-48">
            {monthlyData.map((d) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs text-gray-400">${d.revenue}k</span>
                <div
                  className="w-full bg-gradient-to-t from-[#1E3A8A] to-[#38BDF8] rounded-t-lg transition-all duration-700"
                  style={{ height: `${(d.revenue / maxRevenue) * 100}%`, minHeight: "8px" }}
                  title={`${d.month}: $${d.revenue}k`}
                />
                <span className="text-xs text-gray-500 font-medium">{d.month}</span>
              </div>
            ))}
          </div>

          {/* Mini stats row */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-5 border-t border-gray-100">
            {[
              { label: "Avg per Booking", value: "$5,000" },
              { label: "Total This Month", value: "$104k" },
              { label: "YoY Growth", value: "+18.3%" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-black text-[#0A1628] text-lg">{s.value}</div>
                <div className="text-gray-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-black text-[#0A1628] text-lg mb-5">Recent Activity</h2>
          <div className="space-y-4">
            {activityFeed.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className={`w-2 h-2 ${item.color} rounded-full mt-1.5 flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-gray-800 text-sm font-medium">{item.action}</p>
                  <p className="text-gray-400 text-xs truncate">{item.detail}</p>
                </div>
                <span className="text-gray-400 text-xs flex-shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
          <Link
            href="/admin/bookings"
            className="mt-5 flex items-center justify-center gap-2 text-[#1E3A8A] text-sm font-semibold hover:gap-3 transition-all"
          >
            View all activity <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="font-black text-[#0A1628] text-lg">Recent Bookings</h2>
          <Link
            href="/admin/bookings"
            className="flex items-center gap-1.5 text-[#1E3A8A] text-sm font-semibold hover:gap-2.5 transition-all"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-[#F8FAFC]">
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Booking ID</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Client</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Module</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Date</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-[#1E3A8A] font-bold text-sm">{booking.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-[#0A1628] text-sm">{booking.client}</div>
                    <div className="text-gray-400 text-xs">{booking.company}</div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-gray-600 text-sm">{booking.module}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-[#0A1628] text-sm">{booking.amount}</span>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className="text-gray-500 text-sm">{booking.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColors[booking.status]}`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Add Booking", icon: Plus, href: "/booking", color: "bg-[#F59E0B] text-[#0A1628]" },
          { label: "Review Applications", icon: FileText, href: "/admin/applications", color: "bg-purple-100 text-purple-700" },
          { label: "Check Messages", icon: MessageSquare, href: "/admin/messages", color: "bg-blue-100 text-blue-700" },
          { label: "View Analytics", icon: BarChart3, href: "/admin", color: "bg-emerald-100 text-emerald-700" },
        ].map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              href={action.href}
              className={`${action.color} rounded-2xl p-5 font-semibold text-sm flex flex-col items-center gap-3 hover:shadow-md transition-all hover:-translate-y-0.5 text-center`}
            >
              <Icon className="w-6 h-6" />
              {action.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
