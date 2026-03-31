import type { Metadata } from "next";
import { Search, Eye, CheckCircle, XCircle, Clock, Download, Filter, MessageSquare, FileText } from "lucide-react";

export const metadata: Metadata = { title: "Applications | Admin" };

type AppStatus = "Pending Review" | "Under Review" | "Approved" | "Rejected" | "Waitlisted";
type AppType = "Partnership" | "Employment" | "Associate Consultant" | "Training Partner";

interface Application {
  id: string;
  name: string;
  organization: string;
  email: string;
  type: AppType;
  role?: string;
  status: AppStatus;
  date: string;
  score: number;
  country: string;
  notes: string;
}

const applications: Application[] = [
  { id: "APP-0142", name: "Tom Bradley", organization: "UK CAA Services", email: "t.bradley@caa.co.uk", type: "Partnership", role: undefined, status: "Pending Review", date: "Mar 25, 2026", score: 88, country: "UK", notes: "Strong institutional background, regulatory expertise" },
  { id: "APP-0141", name: "Aeroplan Inc.", organization: "AeroPlan Inc.", email: "partnerships@aeroplan.com", type: "Training Partner", role: undefined, status: "Under Review", date: "Mar 22, 2026", score: 74, country: "Canada", notes: "Has LMS infrastructure, limited aviation-specific experience" },
  { id: "APP-0140", name: "Dr. Mei Lin", organization: "Self", email: "mei.lin@aviation-phd.edu", type: "Associate Consultant", role: "Safety Systems Specialist", status: "Approved", date: "Mar 18, 2026", score: 95, country: "Singapore", notes: "PhD Aviation Safety, 10yr CAAS experience. Excellent fit." },
  { id: "APP-0139", name: "FlightLogic GmbH", organization: "FlightLogic GmbH", email: "bd@flightlogic.de", type: "Partnership", role: undefined, status: "Rejected", date: "Mar 15, 2026", score: 41, country: "Germany", notes: "No aviation regulatory background. Product-focused only." },
  { id: "APP-0138", name: "Captain Paul Winters", organization: "Ex-Delta Air Lines", email: "p.winters@gmail.com", type: "Employment", role: "Senior Flight Operations Consultant", status: "Approved", date: "Mar 12, 2026", score: 92, country: "USA", notes: "32 years flying, B777 TRI. Exceptional operational background." },
  { id: "APP-0137", name: "Amara Diallo", organization: "ASECNA", email: "a.diallo@asecna.org", type: "Associate Consultant", role: "ATM Specialist", status: "Under Review", date: "Mar 10, 2026", score: 79, country: "Senegal", notes: "15yr ATM experience, strong African market connections." },
  { id: "APP-0136", name: "SkyEd Solutions", organization: "SkyEd Solutions", email: "info@skyed.io", type: "Training Partner", role: undefined, status: "Waitlisted", date: "Mar 8, 2026", score: 65, country: "Australia", notes: "Good e-learning platform. Revisit Q3 when capacity allows." },
  { id: "APP-0135", name: "Nadia Korhonen", organization: "Finnair", email: "n.korhonen@finnair.fi", type: "Employment", role: "Regulatory Compliance Manager", status: "Pending Review", date: "Mar 5, 2026", score: 83, country: "Finland", notes: "EASA background, multilingual. Promising candidate." },
  { id: "APP-0134", name: "AviSafe Consulting", organization: "AviSafe Consulting", email: "contact@avisafe.co.za", type: "Partnership", role: undefined, status: "Approved", date: "Mar 1, 2026", score: 86, country: "South Africa", notes: "SACAA certified. Excellent for SSA market expansion." },
  { id: "APP-0133", name: "Wei Zhang", organization: "CAAC Retired", email: "w.zhang@consultants.cn", type: "Associate Consultant", role: "China Market Specialist", status: "Rejected", date: "Feb 26, 2026", score: 52, country: "China", notes: "Knowledge gap in Western regulatory frameworks." },
];

const statusConfig: Record<AppStatus, { color: string; icon: React.ElementType }> = {
  "Pending Review": { color: "bg-amber-100 text-amber-700 border-amber-200", icon: Clock },
  "Under Review": { color: "bg-blue-100 text-blue-700 border-blue-200", icon: Eye },
  "Approved": { color: "bg-emerald-100 text-emerald-700 border-emerald-200", icon: CheckCircle },
  "Rejected": { color: "bg-red-100 text-red-700 border-red-200", icon: XCircle },
  "Waitlisted": { color: "bg-purple-100 text-purple-700 border-purple-200", icon: Clock },
};

const typeColors: Record<AppType, string> = {
  Partnership: "bg-blue-100 text-blue-700",
  Employment: "bg-emerald-100 text-emerald-700",
  "Associate Consultant": "bg-purple-100 text-purple-700",
  "Training Partner": "bg-amber-100 text-amber-700",
};

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 85 ? "bg-emerald-100 text-emerald-700" :
    score >= 70 ? "bg-blue-100 text-blue-700" :
    score >= 55 ? "bg-amber-100 text-amber-700" :
    "bg-red-100 text-red-700";

  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${color}`}>
      {score}/100
    </span>
  );
}

export default function AdminApplicationsPage() {
  const pending = applications.filter(a => a.status === "Pending Review" || a.status === "Under Review").length;
  const approved = applications.filter(a => a.status === "Approved").length;
  const rejected = applications.filter(a => a.status === "Rejected").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#0A1628]">Applications</h1>
          <p className="text-gray-500 text-sm mt-0.5">
            {pending} pending review · {approved} approved · {applications.length} total
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-600 font-medium px-4 py-2 rounded-lg text-sm transition-colors">
          <Download className="w-4 h-4" /> Export
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Pending", value: pending, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Approved", value: approved, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Rejected", value: rejected, color: "text-red-600", bg: "bg-red-50" },
          { label: "Avg Score", value: `${Math.round(applications.reduce((s, a) => s + a.score, 0) / applications.length)}`, color: "text-blue-600", bg: "bg-blue-50" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
            <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-gray-500 text-sm">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search applications..."
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors"
          />
        </div>
        <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#1E3A8A] bg-white">
          <option>All Types</option>
          <option>Partnership</option>
          <option>Employment</option>
          <option>Associate Consultant</option>
          <option>Training Partner</option>
        </select>
        <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#1E3A8A] bg-white">
          <option>All Statuses</option>
          <option>Pending Review</option>
          <option>Under Review</option>
          <option>Approved</option>
          <option>Rejected</option>
          <option>Waitlisted</option>
        </select>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-[#F8FAFC]">
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Applicant</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Type</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Role / Notes</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Score</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden xl:table-cell">Date</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {applications.map((app) => {
                const status = statusConfig[app.status];
                const StatusIcon = status.icon;
                return (
                  <tr key={app.id} className="hover:bg-[#F8FAFC] transition-colors group">
                    <td className="px-5 py-4">
                      <span className="text-[#1E3A8A] font-bold text-sm">{app.id}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-[#1E3A8A] to-[#0A1628] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {app.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                        </div>
                        <div>
                          <div className="font-semibold text-[#0A1628] text-sm">{app.name}</div>
                          <div className="text-gray-400 text-xs">{app.organization} · {app.country}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${typeColors[app.type]}`}>
                        {app.type}
                      </span>
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell">
                      <p className="text-gray-500 text-xs max-w-[200px] truncate" title={app.notes}>
                        {app.role ? <span className="text-gray-700 font-medium">{app.role}</span> : app.notes}
                      </p>
                    </td>
                    <td className="px-5 py-4 hidden sm:table-cell">
                      <ScoreBadge score={app.score} />
                    </td>
                    <td className="px-5 py-4 hidden xl:table-cell">
                      <span className="text-gray-500 text-sm">{app.date}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${status.color}`}>
                        <StatusIcon className="w-3 h-3" />
                        {app.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors" title="View">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-emerald-50 text-emerald-600 rounded-lg transition-colors" title="Approve">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-50 text-gray-500 rounded-lg transition-colors" title="Message">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-red-50 text-red-500 rounded-lg transition-colors" title="Reject">
                          <XCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
