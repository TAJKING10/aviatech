import type { Metadata } from "next";
import { Search, Plus, Edit, Trash2, Eye, ToggleLeft, ToggleRight, Clock, Users, DollarSign } from "lucide-react";

export const metadata: Metadata = { title: "Training Modules | Admin" };

interface TrainingModule {
  id: string;
  title: string;
  category: string;
  duration: string;
  maxParticipants: number;
  price: number;
  level: "Foundation" | "Advanced" | "Expert";
  status: "Active" | "Draft" | "Archived";
  bookings: number;
  revenue: number;
  lastUpdated: string;
}

const modules: TrainingModule[] = [
  { id: "sms", title: "Safety Management Systems (SMS)", category: "Safety", duration: "3 days", maxParticipants: 20, price: 4800, level: "Advanced", status: "Active", bookings: 48, revenue: 230400, lastUpdated: "Mar 15, 2026" },
  { id: "flight-ops", title: "Flight Operations Management", category: "Operations", duration: "2 days", maxParticipants: 15, price: 3600, level: "Expert", status: "Active", bookings: 36, revenue: 129600, lastUpdated: "Mar 10, 2026" },
  { id: "regulatory", title: "Aviation Regulatory Compliance", category: "Compliance", duration: "2.5 days", maxParticipants: 20, price: 4200, level: "Advanced", status: "Active", bookings: 29, revenue: 121800, lastUpdated: "Feb 28, 2026" },
  { id: "crm", title: "Crew Resource Management (CRM)", category: "Safety", duration: "1.5 days", maxParticipants: 30, price: 2400, level: "Advanced", status: "Active", bookings: 55, revenue: 132000, lastUpdated: "Mar 5, 2026" },
  { id: "fleet", title: "Fleet Planning & Management", category: "Strategy", duration: "2 days", maxParticipants: 12, price: 3800, level: "Expert", status: "Active", bookings: 22, revenue: 83600, lastUpdated: "Feb 20, 2026" },
  { id: "atc", title: "Air Traffic Control Fundamentals", category: "Operations", duration: "2 days", maxParticipants: 25, price: 2900, level: "Foundation", status: "Active", bookings: 31, revenue: 89900, lastUpdated: "Feb 15, 2026" },
  { id: "frms", title: "Fatigue Risk Management (FRMS)", category: "Safety", duration: "1.5 days", maxParticipants: 25, price: 2600, level: "Advanced", status: "Active", bookings: 18, revenue: 46800, lastUpdated: "Jan 30, 2026" },
  { id: "emergency", title: "Emergency Response Planning", category: "Safety", duration: "1 day", maxParticipants: 20, price: 1800, level: "Foundation", status: "Active", bookings: 24, revenue: 43200, lastUpdated: "Jan 20, 2026" },
  { id: "digital-mro", title: "Digital MRO & Predictive Maintenance", category: "Technology", duration: "2 days", maxParticipants: 15, price: 3200, level: "Expert", status: "Draft", bookings: 0, revenue: 0, lastUpdated: "Mar 25, 2026" },
  { id: "sustainable", title: "Sustainable Aviation & SAF Transition", category: "Strategy", duration: "1 day", maxParticipants: 25, price: 2200, level: "Foundation", status: "Draft", bookings: 0, revenue: 0, lastUpdated: "Mar 20, 2026" },
];

const statusColors: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Draft: "bg-amber-100 text-amber-700",
  Archived: "bg-gray-100 text-gray-500",
};

const levelColors: Record<string, string> = {
  Foundation: "bg-sky-100 text-sky-700",
  Advanced: "bg-blue-100 text-blue-700",
  Expert: "bg-purple-100 text-purple-700",
};

const categoryColors: Record<string, string> = {
  Safety: "bg-rose-100 text-rose-700",
  Operations: "bg-blue-100 text-blue-700",
  Compliance: "bg-purple-100 text-purple-700",
  Strategy: "bg-amber-100 text-amber-700",
  Technology: "bg-emerald-100 text-emerald-700",
};

export default function AdminTrainingPage() {
  const totalRevenue = modules.reduce((s, m) => s + m.revenue, 0);
  const totalBookings = modules.reduce((s, m) => s + m.bookings, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Training Modules</h1>
          <p className="text-gray-500 text-sm mt-0.5">
            {modules.filter(m => m.status === "Active").length} active · {modules.filter(m => m.status === "Draft").length} drafts · ${(totalRevenue / 1000).toFixed(0)}k total revenue
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors shadow-lg shadow-[#F59E0B]/20">
          <Plus className="w-4 h-4" /> Add New Module
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Total Revenue", value: `$${(totalRevenue / 1000).toFixed(0)}k`, icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Total Bookings", value: totalBookings, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Active Modules", value: modules.filter(m => m.status === "Active").length, icon: ToggleRight, color: "text-[#F59E0B]", bg: "bg-amber-50" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
              <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${s.color}`} />
              </div>
              <div>
                <div className="text-2xl font-black text-[#0A1628]">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search modules..."
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors"
          />
        </div>
        <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#1E3A8A] bg-white">
          <option>All Categories</option>
          <option>Safety</option>
          <option>Operations</option>
          <option>Compliance</option>
          <option>Strategy</option>
          <option>Technology</option>
        </select>
        <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#1E3A8A] bg-white">
          <option>All Statuses</option>
          <option>Active</option>
          <option>Draft</option>
          <option>Archived</option>
        </select>
      </div>

      {/* Modules Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-[#F8FAFC]">
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Module</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Category</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Level</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Duration</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden xl:table-cell">Bookings</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden xl:table-cell">Revenue</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {modules.map((module) => (
                <tr key={module.id} className="hover:bg-[#F8FAFC] transition-colors group">
                  <td className="px-5 py-4">
                    <div>
                      <p className="font-semibold text-[#0A1628] text-sm">{module.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">Updated {module.lastUpdated}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[module.category]}`}>
                      {module.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${levelColors[module.level]}`}>
                      {module.level}
                    </span>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="w-3.5 h-3.5" /> {module.duration}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-bold text-[#0A1628] text-sm">${module.price.toLocaleString()}</span>
                  </td>
                  <td className="px-5 py-4 hidden xl:table-cell">
                    <span className="text-gray-600 text-sm">{module.bookings}</span>
                  </td>
                  <td className="px-5 py-4 hidden xl:table-cell">
                    <span className="text-gray-600 text-sm">${module.revenue.toLocaleString()}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[module.status]}`}>
                      {module.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 hover:bg-amber-50 text-amber-600 rounded-lg transition-colors" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 hover:bg-red-50 text-red-500 rounded-lg transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Module Modal Placeholder */}
      <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A8A] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-bold text-lg">Create a New Training Module</h3>
          <p className="text-blue-200 text-sm">Add a new program to your training catalog with custom pricing, duration, and content.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-semibold px-5 py-3 rounded-xl text-sm transition-colors whitespace-nowrap">
          <Plus className="w-4 h-4" /> Create Module
        </button>
      </div>
    </div>
  );
}
