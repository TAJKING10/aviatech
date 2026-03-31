const modules = [
  {
    code: "M1",
    title: "Mathematics",
    categories: ["B1.1", "B1.2", "B2"],
    status: "Published",
    updated: "Oct 15, 2024",
  },
  {
    code: "M2",
    title: "Physics",
    categories: ["B1", "B2", "B3"],
    status: "Published",
    updated: "Oct 10, 2024",
  },
  {
    code: "M11",
    title: "Aeroplane Aerodynamics",
    categories: ["B1.1", "B1.3"],
    status: "Draft",
    updated: "Oct 28, 2024",
  },
  {
    code: "M17",
    title: "Propeller",
    categories: ["B1.1", "B1.2"],
    status: "Published",
    updated: "Sep 30, 2024",
  },
];

const categoryColors: Record<string, string> = {
  "B1.1": "bg-[#d8e2ff] text-[#0059bb]",
  "B1.2": "bg-[#bdd6ff] text-[#476083]",
  "B1.3": "bg-[#d4e3ff] text-[#476083]",
  "B2": "bg-emerald-50 text-emerald-700",
  "B3": "bg-amber-50 text-amber-700",
  "B1": "bg-[#e8eef6] text-[#414754]",
};

export default function AdminTrainingPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
        <div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
            <span>Curriculum</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span>Technical Training</span>
          </div>
          <h1 className="font-headline font-extrabold text-5xl text-[#161c22] leading-none">
            Training Modules
          </h1>
          <p className="text-[#414754] text-sm mt-3 max-w-xl">
            Manage and publish aviation training modules compliant with EASA Part-66 standards. All modules are reviewed and validated by certified instructors.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-3">
          <button className="border border-[#e8eef6] bg-white text-[#414754] font-['Manrope'] uppercase tracking-widest text-[11px] font-bold px-5 py-2.5 rounded-xl hover:border-[#0059bb] hover:text-[#0059bb] transition-colors inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
            Export PDF
          </button>
          <button className="bg-gradient-to-r from-[#0059bb] to-[#0070ea] text-white font-['Manrope'] uppercase tracking-widest text-[11px] font-bold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add New Module
          </button>
        </div>
      </div>

      {/* Bento Stats Grid */}
      <div className="grid grid-cols-12 gap-5">
        {/* Active Modules */}
        <div className="col-span-12 md:col-span-4 bg-white rounded-xl shadow-sm p-6">
          <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-4">
            Active Modules
          </div>
          <div className="flex items-end gap-2 mb-4">
            <span className="font-headline text-5xl font-extrabold text-[#161c22]">17</span>
            <span className="font-headline text-2xl font-extrabold text-slate-300 mb-1">/24</span>
          </div>
          <div className="h-2.5 bg-[#e8eef6] rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-[#0059bb] to-[#0070ea] rounded-full"
              style={{ width: "70.8%" }}
            />
          </div>
          <div className="font-['Manrope'] text-[11px] font-bold text-slate-400">
            70.8% of curriculum published
          </div>
        </div>

        {/* Draft Status */}
        <div className="col-span-12 md:col-span-4 bg-[#ffe07f]/20 rounded-xl shadow-sm p-6 border-t-2 border-[#cda800]">
          <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-[#cda800]/70 mb-4">
            Draft Status
          </div>
          <div className="font-headline text-5xl font-extrabold text-[#cda800] mb-2">04</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="font-['Manrope'] text-[11px] font-bold text-[#cda800]">
              Ready for review
            </span>
          </div>
        </div>

        {/* Image Card */}
        <div className="col-span-12 md:col-span-4 bg-[#161c22] rounded-xl overflow-hidden relative min-h-[160px] flex items-end">
          <div className="absolute inset-0 bg-gradient-to-t from-[#161c22] via-[#161c22]/60 to-transparent" />
          <div className="relative z-10 p-6">
            <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-blue-300 mb-1">
              Compliance
            </div>
            <h3 className="font-headline font-extrabold text-xl text-white">
              Regulatory Compliance
            </h3>
            <p className="text-slate-300 text-xs mt-1">EASA Part-66 · FAA Part-147</p>
          </div>
        </div>
      </div>

      {/* Module Directory Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-[#e8eef6] flex items-center justify-between">
          <div>
            <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-1">
              Curriculum
            </div>
            <h2 className="font-headline font-bold text-lg text-[#161c22]">Module Directory</h2>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-slate-400">
              search
            </span>
            <input
              type="text"
              placeholder="Search modules..."
              className="pl-9 pr-4 py-2 bg-[#f6f9ff] border border-[#e8eef6] rounded-xl text-sm text-[#161c22] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0059bb]/20 w-56"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f6f9ff] border-b border-[#e8eef6]">
                {["Code", "Title", "Category", "Status", "Last Updated", "Actions"].map((col) => (
                  <th
                    key={col}
                    className="text-left px-6 py-4 font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f6f9ff]">
              {modules.map((mod) => (
                <tr key={mod.code} className="hover:bg-[#f6f9ff] transition-colors group">
                  <td className="px-6 py-5">
                    <span className="font-['Manrope'] font-black text-[#0059bb] text-sm">{mod.code}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-semibold text-[#161c22] text-sm">{mod.title}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-1">
                      {mod.categories.map((cat) => (
                        <span
                          key={cat}
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-['Manrope'] ${
                            categoryColors[cat] || "bg-[#e8eef6] text-[#414754]"
                          }`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    {mod.status === "Published" ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold font-['Manrope'] bg-emerald-50 text-emerald-600">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold font-['Manrope'] bg-amber-50 text-amber-600">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-400">{mod.updated}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#d8e2ff] text-[#0059bb] transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#d8e2ff] text-[#0059bb] transition-colors" title="View">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#ffdad6] text-[#ba1a1a] transition-colors" title="Archive">
                        <span className="material-symbols-outlined text-[18px]">archive</span>
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
          <span className="text-sm text-slate-400 font-['Manrope']">1–4 of 24 modules</span>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#e8eef6] text-slate-400 hover:border-[#0059bb] hover:text-[#0059bb] transition-colors">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            {[1, 2, 3].map((p) => (
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

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[#e8eef6]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400">
            Nexus v4.2.0 · System Online / Server: Zurich-Alpha
          </span>
        </div>
      </div>
    </div>
  );
}
