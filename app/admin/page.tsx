import Link from "next/link";

const kpiCards = [
  {
    label: "Total Applications",
    value: "1,284",
    icon: "description",
    trend: "+12.4%",
    trendUp: true,
    borderColor: "border-[#0059bb]",
    iconBg: "bg-[#d8e2ff]",
    iconColor: "text-[#0059bb]",
  },
  {
    label: "Active Modules",
    value: "42",
    icon: "school",
    trend: "+3 this week",
    trendUp: true,
    borderColor: "border-emerald-400",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    label: "Monthly Revenue",
    value: "$84.2k",
    icon: "payments",
    trend: "+8.1%",
    trendUp: true,
    borderColor: "border-[#cda800]",
    iconBg: "bg-[#ffe07f]/30",
    iconColor: "text-[#cda800]",
  },
  {
    label: "Pending Reviews",
    value: "18",
    icon: "assignment_late",
    trend: "-4 today",
    trendUp: false,
    borderColor: "border-[#ba1a1a]",
    iconBg: "bg-[#ffdad6]",
    iconColor: "text-[#ba1a1a]",
  },
];

const recentApplications = [
  { initials: "JV", name: "Jonathan Vance", role: "Sr. Avionics Engineer", company: "Lufthansa Technik", date: "Oct 28, 2024", status: "Approved", color: "bg-blue-500" },
  { initials: "ER", name: "Elena Rodriguez", role: "Fleet Ops Manager", company: "Qatar Airways", date: "Oct 26, 2024", status: "Pending", color: "bg-purple-500" },
  { initials: "MT", name: "Marcus Thorne", role: "Independent Consultant", company: "AeroConsult", date: "Oct 24, 2024", status: "Rejected", color: "bg-emerald-500" },
  { initials: "SZ", name: "Samuel Zhang", role: "Data Analyst", company: "Singapore Airlines", date: "Oct 22, 2024", status: "Pending", color: "bg-amber-500" },
];

const modulePerformance = [
  { name: "Avionics", pct: 85 },
  { name: "Safety", pct: 62 },
  { name: "Engines", pct: 94 },
  { name: "Logistics", pct: 45 },
];

const statusColors: Record<string, string> = {
  Approved: "bg-emerald-50 text-emerald-600 border border-emerald-200",
  Pending: "bg-amber-50 text-amber-600 border border-amber-200",
  Rejected: "bg-[#ffdad6] text-[#ba1a1a] border border-red-200",
};

export default function AdminDashboardPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="font-['Manrope'] uppercase tracking-widest text-[11px] font-bold text-slate-400 mb-2">
            Admin Overview
          </div>
          <h1 className="font-headline font-extrabold text-5xl text-[#161c22] leading-none">
            Operational Efficiency{" "}
            <span className="text-[#0059bb]">02.</span>
          </h1>
          <p className="text-[#414754] text-sm mt-3 max-w-lg">
            Real-time analytics and operational data for the Aviatech Precision Admin platform. Monitor applications, training modules, and revenue metrics.
          </p>
        </div>
        {/* Progress bars decoration */}
        <div className="hidden xl:flex flex-col gap-2 mt-2 w-48">
          {[78, 54, 91, 36].map((w, i) => (
            <div key={i} className="h-1.5 bg-[#e8eef6] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0059bb] to-[#0070ea] rounded-full"
                style={{ width: `${w}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {kpiCards.map((card) => (
          <div
            key={card.label}
            className={`bg-white p-8 rounded-xl shadow-sm border-t-2 ${card.borderColor}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 ${card.iconBg} rounded-lg flex items-center justify-center`}>
                <span className={`material-symbols-outlined text-[20px] ${card.iconColor}`}>
                  {card.icon}
                </span>
              </div>
              <span
                className={`text-[10px] font-bold px-2 py-1 rounded-full font-['Manrope'] ${
                  card.trendUp
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-[#ffdad6] text-[#ba1a1a]"
                }`}
              >
                {card.trend}
              </span>
            </div>
            <div className="font-['Manrope'] uppercase tracking-[0.2em] text-[10px] font-black text-slate-400 mb-4">
              {card.label}
            </div>
            <div className="font-headline text-4xl font-extrabold text-[#161c22]">{card.value}</div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Applications Table (2/3) */}
        <div className="xl:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-[#e8eef6] flex items-center justify-between">
            <div>
              <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-1">
                Candidate Pipeline
              </div>
              <h2 className="font-headline font-bold text-lg text-[#161c22]">Recent Applications</h2>
            </div>
            <Link
              href="/admin/applications"
              className="text-[#0059bb] font-['Manrope'] text-[11px] uppercase tracking-widest font-bold hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f6f9ff] border-b border-[#e8eef6]">
                  <th className="text-left px-6 py-3 font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400">
                    Candidate
                  </th>
                  <th className="text-left px-6 py-3 font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400">
                    Role
                  </th>
                  <th className="text-left px-6 py-3 font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 hidden md:table-cell">
                    Date
                  </th>
                  <th className="text-left px-6 py-3 font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f6f9ff]">
                {recentApplications.map((app) => (
                  <tr key={app.name} className="hover:bg-[#f6f9ff] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 ${app.color} rounded-full flex items-center justify-center text-white text-xs font-bold font-['Manrope'] flex-shrink-0`}
                        >
                          {app.initials}
                        </div>
                        <span className="font-semibold text-[#161c22] text-sm">{app.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-[#414754]">{app.role}</div>
                      <div className="text-xs text-slate-400">{app.company}</div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-sm text-slate-400">{app.date}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold font-['Manrope'] ${statusColors[app.status]}`}
                      >
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Module Performance Chart (1/3) */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="mb-5">
            <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-1">
              Module Analytics
            </div>
            <h2 className="font-headline font-bold text-lg text-[#161c22]">Module Performance</h2>
          </div>

          <div className="space-y-4">
            {modulePerformance.map((m) => (
              <div key={m.name}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-widest text-[#414754]">
                    {m.name}
                  </span>
                  <span className="font-['Manrope'] text-[11px] font-bold text-[#0059bb]">{m.pct}%</span>
                </div>
                <div className="h-2 bg-[#e8eef6] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0059bb] to-[#0070ea] rounded-full"
                    style={{ width: `${m.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-[#e8eef6] grid grid-cols-2 gap-4">
            <div>
              <div className="font-headline text-2xl font-extrabold text-[#161c22]">78.4%</div>
              <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mt-0.5">
                Total Progress
              </div>
            </div>
            <div>
              <div className="font-headline text-2xl font-extrabold text-[#161c22]">1.2k</div>
              <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mt-0.5">
                Active Users
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Nexus Insights Engine */}
        <div className="xl:col-span-2 bg-[#0059bb] rounded-xl p-8 text-white flex flex-col justify-between min-h-[160px]">
          <div>
            <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-blue-200 mb-2">
              AI-Powered Intelligence
            </div>
            <h2 className="font-headline font-extrabold text-2xl mb-2">Nexus Insights Engine</h2>
            <p className="text-blue-100 text-sm max-w-md">
              Deep audit capabilities powered by machine learning. Analyze patterns across all operational data streams in real-time.
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-white text-[#0059bb] font-['Manrope'] uppercase tracking-widest text-[11px] font-bold px-6 py-2.5 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
              Launch Deep Audit
            </button>
          </div>
        </div>

        {/* FAA/EASA Compliance */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="mb-5">
            <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-1">
              Regulatory
            </div>
            <h2 className="font-headline font-bold text-lg text-[#161c22]">FAA/EASA Synchronization</h2>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-widest text-[#414754]">
                  FAA Compliance
                </span>
                <span className="font-['Manrope'] text-[11px] font-bold text-emerald-600">98%</span>
              </div>
              <div className="h-2 bg-[#e8eef6] rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: "98%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-widest text-[#414754]">
                  EASA Compliance
                </span>
                <span className="font-['Manrope'] text-[11px] font-bold text-[#0059bb]">82%</span>
              </div>
              <div className="h-2 bg-[#e8eef6] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0059bb] to-[#0070ea] rounded-full"
                  style={{ width: "82%" }}
                />
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#e8eef6]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="font-['Manrope'] text-[10px] uppercase tracking-widest font-bold text-slate-400">
                Last Sync: 14 minutes ago
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#e8eef6] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-slate-400 text-xs font-['Manrope']">
          © 2024 Precision Aerospace Editorial System
        </span>
        <div className="flex items-center gap-6">
          {["Privacy Protocol", "Audit Logs", "System v2.4.1"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-slate-400 text-[11px] font-['Manrope'] uppercase tracking-widest font-bold hover:text-[#0059bb] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
