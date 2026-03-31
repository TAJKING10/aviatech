const bookings = [
  {
    id: "BK-0042",
    candidate: "Jonathan Vance",
    initials: "JV",
    color: "bg-blue-500",
    category: "Avionics",
    trainingPath: "Advanced Radar Systems",
    modules: 12,
    dateSubmitted: "Oct 28, 2024",
    status: "Confirmed",
  },
  {
    id: "BK-0041",
    candidate: "Elena Rodriguez",
    initials: "ER",
    color: "bg-purple-500",
    category: "Propulsion",
    trainingPath: "Next-Gen Turbofans",
    modules: 8,
    dateSubmitted: "Oct 26, 2024",
    status: "Pending",
  },
  {
    id: "BK-0040",
    candidate: "Marcus Kael",
    initials: "MK",
    color: "bg-rose-500",
    category: "Aerodynamics",
    trainingPath: "Hypersonic Fluid Dynamics",
    modules: 15,
    dateSubmitted: "Oct 24, 2024",
    status: "Rejected",
  },
  {
    id: "BK-0039",
    candidate: "Sarah Takeda",
    initials: "ST",
    color: "bg-emerald-500",
    category: "Flight Control",
    trainingPath: "Autonomous Docking Systems",
    modules: 6,
    dateSubmitted: "Oct 22, 2024",
    status: "Confirmed",
  },
];

const statusColors: Record<string, string> = {
  Confirmed: "bg-emerald-50 text-emerald-600 border border-emerald-200",
  Pending: "bg-amber-50 text-amber-600 border border-amber-200",
  Rejected: "bg-[#ffdad6] text-[#ba1a1a] border border-red-200",
};

const quickFilters = ["All Bookings", "Aerodynamics", "Avionics Systems", "Flight Control"];

export default function AdminBookingsPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
        <div>
          <div className="font-['Manrope'] uppercase tracking-widest text-[11px] font-bold text-slate-400 mb-2">
            Candidate Management
          </div>
          <h1 className="font-headline font-extrabold text-5xl text-[#161c22] leading-none">
            Bookings Management
          </h1>
          <p className="text-[#414754] text-sm mt-3">
            Manage and track all training bookings and candidate registrations across programs.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button className="bg-gradient-to-r from-[#0059bb] to-[#0070ea] text-white font-['Manrope'] uppercase tracking-widest text-[11px] font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add New Booking
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-12 gap-5">
        {/* Large Card */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-1">
                Total Pipeline
              </div>
              <div className="font-headline font-extrabold text-4xl text-[#161c22]">
                Active Candidates: <span className="text-[#0059bb]">1,284</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-[#d8e2ff] rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-[#0059bb]">groups</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-['Manrope'] text-[11px] uppercase tracking-widest font-bold text-slate-400">
                Enrollment Progress
              </span>
              <span className="font-['Manrope'] text-[11px] font-bold text-[#0059bb]">84%</span>
            </div>
            <div className="h-2.5 bg-[#e8eef6] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0059bb] to-[#0070ea] rounded-full"
                style={{ width: "84%" }}
              />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-[#e8eef6]">
            {[
              { label: "Confirmed", value: "986" },
              { label: "Pending", value: "214" },
              { label: "Rejected", value: "84" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-headline text-2xl font-extrabold text-[#161c22]">{s.value}</div>
                <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Card */}
        <div className="col-span-12 lg:col-span-4 bg-[#ffdad6] rounded-xl shadow-sm p-8 flex flex-col justify-between">
          <div>
            <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-[#ba1a1a]/70 mb-1">
              Requires Action
            </div>
            <div className="font-headline font-extrabold text-4xl text-[#ba1a1a]">42</div>
            <div className="font-['Manrope'] uppercase tracking-widest text-[11px] font-bold text-[#ba1a1a] mt-1">
              Pending Review
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ba1a1a] rounded-full animate-pulse" />
            <span className="font-['Manrope'] text-[10px] uppercase tracking-widest font-bold text-[#ba1a1a]/70">
              Requires immediate attention
            </span>
          </div>
        </div>
      </div>

      {/* Filter Strip */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          {quickFilters.map((filter, i) => (
            <button
              key={filter}
              className={`font-['Manrope'] uppercase tracking-widest text-[11px] font-bold px-4 py-2 rounded-xl transition-colors ${
                i === 0
                  ? "bg-[#0059bb] text-white"
                  : "bg-white text-slate-500 hover:bg-[#e8eef6] border border-[#e8eef6]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <select className="bg-white border border-[#e8eef6] rounded-xl px-4 py-2 text-sm text-[#414754] font-['Manrope'] focus:outline-none focus:ring-2 focus:ring-[#0059bb]/20">
          <option>All Statuses</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f6f9ff] border-b border-[#e8eef6]">
                {["Candidate Name", "Category", "Training Path", "Modules", "Date Submitted", "Status", "Actions"].map(
                  (col) => (
                    <th
                      key={col}
                      className="text-left px-6 py-4 font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 whitespace-nowrap"
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f6f9ff]">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-[#f6f9ff] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 ${booking.color} rounded-full flex items-center justify-center text-white text-xs font-bold font-['Manrope'] flex-shrink-0`}
                      >
                        {booking.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-[#161c22] text-sm">{booking.candidate}</div>
                        <div className="text-xs text-slate-400">{booking.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-['Manrope'] text-[11px] uppercase tracking-widest font-bold text-[#414754]">
                      {booking.category}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-[#414754]">{booking.trainingPath}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-['Manrope'] text-[11px] font-bold text-[#161c22]">
                      {booking.modules}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-400">{booking.dateSubmitted}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold font-['Manrope'] ${statusColors[booking.status]}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#d8e2ff] text-[#0059bb] transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#d8e2ff] text-[#0059bb] transition-colors" title="View">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#e8eef6] bg-[#f6f9ff]">
          <span className="text-sm text-slate-400 font-['Manrope']">1–4 of 42 bookings</span>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#e8eef6] text-slate-400 hover:border-[#0059bb] hover:text-[#0059bb] transition-colors">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            {[1, 2, 3, 4, 5].map((p) => (
              <button
                key={p}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold font-['Manrope'] transition-colors ${
                  p === 1
                    ? "bg-[#0059bb] text-white"
                    : "border border-[#e8eef6] text-slate-400 hover:border-[#0059bb] hover:text-[#0059bb]"
                }`}
              >
                {p}
              </button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#e8eef6] text-slate-400 hover:border-[#0059bb] hover:text-[#0059bb] transition-colors">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Block */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Image Card */}
        <div className="bg-[#161c22] rounded-xl overflow-hidden relative min-h-[180px] flex items-end p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0059bb]/40 to-[#161c22]/90" />
          <div className="relative z-10">
            <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-blue-300 mb-1">
              Editorial Report
            </div>
            <h3 className="font-headline font-extrabold text-2xl text-white">Global Connectivity Report</h3>
            <p className="text-blue-200 text-sm mt-1">Q4 2024 Aviation Training Network Analysis</p>
          </div>
        </div>

        {/* Precision Compliance Monitor */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
            System Monitor
          </div>
          <h3 className="font-headline font-bold text-xl text-[#161c22] mb-6">
            Precision Compliance Monitor
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Latency", value: "0.04ms" },
              { label: "Auth Rate", value: "99.9%" },
              { label: "Integrity", value: "Verified" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-headline text-xl font-extrabold text-[#0059bb]">{stat.value}</div>
                <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
