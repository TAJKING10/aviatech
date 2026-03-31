const applications = [
  {
    initials: "JV",
    color: "bg-slate-700",
    name: "Jonathan Vickers",
    title: "Sr. Avionics Engineer",
    company: "Lufthansa Technik",
    modules: ["SYSTEM_DYNAMICS_4", "FLIGHT_SAFETY_II"],
    moduleColors: ["bg-[#d8e2ff] text-[#0059bb]", "bg-[#bdd6ff] text-[#476083]"],
    date: "Oct 28, 2024",
    priority: "Urgent Review",
    priorityStyle: "bg-[#ffdad6] text-[#ba1a1a]",
  },
  {
    initials: "ER",
    color: "bg-purple-700",
    name: "Elena Rodriguez",
    title: "Fleet Ops Manager",
    company: "Qatar Airways",
    modules: ["STRATOSPHERIC_LOGISTICS"],
    moduleColors: ["bg-emerald-50 text-emerald-700"],
    date: "Oct 26, 2024",
    priority: "Standard",
    priorityStyle: "bg-[#e8eef6] text-[#414754]",
  },
  {
    initials: "MT",
    color: "bg-emerald-700",
    name: "Marcus Thorne",
    title: "Independent Consultant",
    company: "AeroConsult",
    modules: ["JET_PROPULSION_X", "ADV_DIAGNOSTICS"],
    moduleColors: ["bg-amber-50 text-amber-700", "bg-orange-50 text-orange-700"],
    date: "Oct 24, 2024",
    priority: "Consulting Priority",
    priorityStyle: "bg-[#ffe07f]/40 text-[#cda800]",
  },
  {
    initials: "SZ",
    color: "bg-blue-700",
    name: "Samuel Zhang",
    title: "Data Analyst",
    company: "Singapore Airlines",
    modules: ["PREDICTIVE_MAINTENANCE"],
    moduleColors: ["bg-[#bdd6ff] text-[#476083]"],
    date: "Oct 22, 2024",
    priority: "Standard",
    priorityStyle: "bg-[#e8eef6] text-[#414754]",
  },
];

const metrics = [
  {
    label: "Total Queue",
    value: "128",
    icon: "inbox",
    iconBg: "bg-[#d8e2ff]",
    iconColor: "text-[#0059bb]",
    borderColor: "border-[#0059bb]",
    gradient: false,
    isError: false,
  },
  {
    label: "High Priority",
    value: "24",
    icon: "priority_high",
    iconBg: "bg-[#ffdad6]",
    iconColor: "text-[#ba1a1a]",
    borderColor: "border-[#ba1a1a]",
    gradient: false,
    isError: true,
  },
  {
    label: "Certification Velocity",
    value: "94.2%",
    icon: "speed",
    iconBg: "",
    iconColor: "",
    borderColor: "border-[#0059bb]",
    gradient: true,
    isError: false,
  },
  {
    label: "Avg. Review Time",
    value: "2.4 days",
    icon: "schedule",
    iconBg: "bg-[#ffe07f]/30",
    iconColor: "text-[#cda800]",
    borderColor: "border-[#cda800]",
    gradient: false,
    isError: false,
  },
];

export default function AdminApplicationsPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
        <div>
          <div className="font-['Manrope'] uppercase tracking-widest text-[11px] font-bold text-slate-400 mb-2">
            Candidate Pipeline
          </div>
          <h1 className="font-headline font-extrabold text-5xl text-[#161c22] leading-none">
            Application Review
          </h1>
          <p className="text-[#414754] text-sm mt-3">
            Review and process candidate applications across all training programs and certification paths.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#ffdad6] px-4 py-2 rounded-xl">
            <span className="w-2 h-2 bg-[#ba1a1a] rounded-full animate-pulse" />
            <span className="font-['Manrope'] uppercase tracking-widest text-[11px] font-bold text-[#ba1a1a]">
              14 Active Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className={`rounded-xl p-6 shadow-sm border-t-2 ${metric.borderColor} ${
              metric.gradient
                ? "bg-gradient-to-br from-[#0059bb] to-[#0070ea] text-white"
                : metric.isError
                ? "bg-[#ffdad6]"
                : "bg-white"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              {metric.gradient ? (
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px] text-white">{metric.icon}</span>
                </div>
              ) : (
                <div className={`w-10 h-10 ${metric.iconBg} rounded-lg flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-[20px] ${metric.iconColor}`}>{metric.icon}</span>
                </div>
              )}
            </div>
            <div
              className={`font-['Manrope'] uppercase tracking-[0.2em] text-[10px] font-black mb-2 ${
                metric.gradient ? "text-blue-200" : metric.isError ? "text-[#ba1a1a]/70" : "text-slate-400"
              }`}
            >
              {metric.label}
            </div>
            <div
              className={`font-headline text-3xl font-extrabold ${
                metric.gradient ? "text-white" : metric.isError ? "text-[#ba1a1a]" : "text-[#161c22]"
              }`}
            >
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      {/* List View */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Column Headers */}
        <div className="grid grid-cols-12 px-6 py-4 bg-[#f6f9ff] border-b border-[#e8eef6]">
          <div className="col-span-3 font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400">
            Candidate Profile
          </div>
          <div className="col-span-3 font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400">
            Assigned Modules
          </div>
          <div className="col-span-2 font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400">
            Submission Date
          </div>
          <div className="col-span-2 font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400">
            Priority Status
          </div>
          <div className="col-span-2 font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400">
            Actions
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#f6f9ff]">
          {applications.map((app) => (
            <div
              key={app.name}
              className="grid grid-cols-12 px-6 py-6 hover:bg-[#f6f9ff] transition-colors group items-center"
            >
              {/* Candidate Profile */}
              <div className="col-span-3 flex items-center gap-4">
                <div
                  className={`w-12 h-12 ${app.color} rounded-xl flex items-center justify-center text-white font-bold font-['Manrope'] text-sm flex-shrink-0 grayscale group-hover:grayscale-0 transition-all`}
                >
                  {app.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#161c22] text-sm">{app.name}</div>
                  <div className="text-xs text-slate-400">{app.title}</div>
                  <div className="text-xs text-[#0059bb] font-['Manrope'] font-bold">{app.company}</div>
                </div>
              </div>

              {/* Assigned Modules */}
              <div className="col-span-3 flex flex-wrap gap-1.5">
                {app.modules.map((mod, i) => (
                  <span
                    key={mod}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-['Manrope'] uppercase tracking-wider ${app.moduleColors[i]}`}
                  >
                    {mod}
                  </span>
                ))}
              </div>

              {/* Submission Date */}
              <div className="col-span-2">
                <span className="text-sm text-slate-400">{app.date}</span>
              </div>

              {/* Priority Status */}
              <div className="col-span-2">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold font-['Manrope'] ${app.priorityStyle}`}
                >
                  {app.priority}
                </span>
              </div>

              {/* Actions */}
              <div className="col-span-2">
                <a
                  href="#"
                  className="text-[#0059bb] font-['Manrope'] uppercase tracking-widest text-[10px] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-slate-400 font-['Manrope']">
          Showing <span className="font-bold text-[#161c22]">4</span> of{" "}
          <span className="font-bold text-[#161c22]">128</span> candidates
        </span>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-[#e8eef6] rounded-xl px-4 py-2 text-sm font-bold font-['Manrope'] text-slate-500 hover:border-[#0059bb] hover:text-[#0059bb] transition-colors">
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            Previous Batch
          </button>
          <button className="flex items-center gap-2 bg-[#0059bb] text-white rounded-xl px-4 py-2 text-sm font-bold font-['Manrope'] hover:opacity-90 transition-opacity">
            Next Batch
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
