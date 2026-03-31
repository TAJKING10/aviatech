import type { Metadata } from "next";
import { Search, Filter, Download, Eye, Edit, Trash2, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Bookings | Admin" };

interface Booking {
  id: string;
  client: string;
  company: string;
  email: string;
  module: string;
  amount: number;
  date: string;
  status: "Confirmed" | "Pending" | "In Progress" | "Cancelled" | "Completed";
  country: string;
  participants: number;
}

const bookings: Booking[] = [
  { id: "AVI-001842", client: "James Harrington", company: "Atlas Airways", email: "j.harrington@atlas.com", module: "Safety Management Systems", amount: 4800, date: "Mar 28, 2026", status: "Confirmed", country: "USA", participants: 18 },
  { id: "AVI-001841", client: "Sarah Chen", company: "Pacific Cargo Airlines", email: "s.chen@pacific-cargo.com", module: "Regulatory Compliance", amount: 4200, date: "Mar 27, 2026", status: "Pending", country: "Singapore", participants: 12 },
  { id: "AVI-001840", client: "Mohamed Al-Rashidi", company: "Gulf Regional Aviation", email: "m.rashidi@gra.ae", module: "Fleet Planning & Management", amount: 3800, date: "Mar 26, 2026", status: "Confirmed", country: "UAE", participants: 8 },
  { id: "AVI-001839", client: "Anna Kowalski", company: "EuroConnect Airlines", email: "a.kowalski@euroconnect.eu", module: "CRM + SMS Bundle", amount: 7200, date: "Mar 25, 2026", status: "In Progress", country: "Poland", participants: 24 },
  { id: "AVI-001838", client: "David Okonkwo", company: "AfriAir Ltd", email: "d.okonkwo@afriair.ng", module: "Flight Operations", amount: 3600, date: "Mar 24, 2026", status: "Confirmed", country: "Nigeria", participants: 15 },
  { id: "AVI-001837", client: "Keiko Tanaka", company: "JAL Technical", email: "k.tanaka@jal-tech.jp", module: "Emergency Response Planning", amount: 1800, date: "Mar 22, 2026", status: "Completed", country: "Japan", participants: 20 },
  { id: "AVI-001836", client: "Henrik Larsson", company: "Nordic Air", email: "h.larsson@nordicair.se", module: "FRMS Training", amount: 2600, date: "Mar 20, 2026", status: "Cancelled", country: "Sweden", participants: 16 },
  { id: "AVI-001835", client: "Priya Patel", company: "IndiaSky Express", email: "p.patel@indiasky.in", module: "ATC Fundamentals", amount: 2900, date: "Mar 18, 2026", status: "Completed", country: "India", participants: 22 },
  { id: "AVI-001834", client: "Carlos Mendes", company: "LATAM Consulting", email: "c.mendes@latam.com", module: "Safety Management Systems", amount: 4800, date: "Mar 15, 2026", status: "Completed", country: "Brazil", participants: 19 },
  { id: "AVI-001833", client: "Fatima Al-Zahrawi", company: "Qatar Airways Group", email: "f.alzahrawi@qag.qa", module: "Fleet Planning", amount: 3800, date: "Mar 12, 2026", status: "Completed", country: "Qatar", participants: 10 },
  { id: "AVI-001832", client: "Tom Bradley", company: "UK CAA Services", email: "t.bradley@caa.co.uk", module: "Regulatory Compliance", amount: 4200, date: "Mar 10, 2026", status: "Completed", country: "UK", participants: 14 },
  { id: "AVI-001831", client: "Yuki Sato", company: "ANA Holdings", email: "y.sato@ana.jp", module: "CRM Training", amount: 2400, date: "Mar 8, 2026", status: "Completed", country: "Japan", participants: 28 },
];

const statusColors: Record<string, string> = {
  Confirmed: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Pending: "bg-amber-100 text-amber-700 border-amber-200",
  "In Progress": "bg-blue-100 text-blue-700 border-blue-200",
  Cancelled: "bg-red-100 text-red-700 border-red-200",
  Completed: "bg-gray-100 text-gray-600 border-gray-200",
};

export default function AdminBookingsPage() {
  const totalRevenue = bookings.reduce((s, b) => s + b.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Bookings</h1>
          <p className="text-gray-500 text-sm mt-0.5">{bookings.length} total bookings · ${(totalRevenue / 1000).toFixed(1)}k revenue</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-600 font-medium px-4 py-2 rounded-lg text-sm transition-colors">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <Link
            href="/booking"
            className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <Plus className="w-4 h-4" /> New Booking
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by client, company, or booking ID..."
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1E3A8A] transition-colors"
            />
          </div>
          <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#1E3A8A] bg-white">
            <option>All Statuses</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#1E3A8A] bg-white">
            <option>All Modules</option>
            <option>Safety Management Systems</option>
            <option>Flight Operations</option>
            <option>Regulatory Compliance</option>
            <option>CRM Training</option>
          </select>
          <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 hover:border-gray-300 transition-colors bg-white">
            <Filter className="w-4 h-4" /> More Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-[#F8FAFC]">
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700">
                  Booking ID
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700">
                  Client
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                  Module
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Country
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700">
                  Amount
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell cursor-pointer hover:text-gray-700">
                  Date
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-[#F8FAFC] transition-colors group">
                  <td className="px-5 py-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-[#1E3A8A] font-bold text-sm">{booking.id}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#1E3A8A] to-[#0A1628] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {booking.client.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-semibold text-[#0A1628] text-sm">{booking.client}</div>
                        <div className="text-gray-400 text-xs">{booking.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <span className="text-gray-600 text-sm">{booking.module}</span>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-gray-500 text-sm">{booking.country}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-bold text-[#0A1628] text-sm">${booking.amount.toLocaleString()}</span>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <span className="text-gray-500 text-sm">{booking.date}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusColors[booking.status]}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
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

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 bg-[#F8FAFC]">
          <p className="text-sm text-gray-500">Showing 1–12 of 248 bookings</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-gray-300 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[1, 2, 3, "...", 20].map((p, i) => (
              <button
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  p === 1
                    ? "bg-[#1E3A8A] text-white"
                    : "border border-gray-200 text-gray-500 hover:border-gray-300"
                }`}
              >
                {p}
              </button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-gray-300 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
