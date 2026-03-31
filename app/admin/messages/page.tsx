const messages = [
  {
    initials: "JS",
    color: "bg-slate-600",
    name: "Jameson Sterling",
    origin: "Lufthansa Technik",
    subject: "Custom Avionics Software",
    date: "Oct 24",
    status: "Unread",
    statusStyle: "bg-[#ffdad6] text-[#ba1a1a]",
  },
  {
    initials: "EM",
    color: "bg-purple-600",
    name: "Elena Moretti",
    origin: "Alitalia Services",
    subject: "Hangar Logistics Inquiry",
    date: "Oct 23",
    status: "Pending",
    statusStyle: "bg-[#ffe07f]/40 text-[#cda800]",
  },
  {
    initials: "SJ",
    color: "bg-emerald-600",
    name: "Sarah Jenkins",
    origin: "EasyJet Engineering",
    subject: "Sustainable Aviation Query",
    date: "Oct 21",
    status: "Replied",
    statusStyle: "bg-[#bdd6ff] text-[#476083]",
  },
  {
    initials: "RB",
    color: "bg-blue-600",
    name: "Robert Beaumont",
    origin: "AirFrance Industries",
    subject: "Supply Chain Bottleneck",
    date: "Oct 20",
    status: "Unread",
    statusStyle: "bg-[#ffdad6] text-[#ba1a1a]",
  },
];

const tabs = ["All Messages", "Unread", "Pending", "Replied"];

export default function AdminMessagesPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
        <div>
          <div className="font-['Manrope'] uppercase tracking-widest text-[11px] font-bold text-slate-400 mb-2">
            Communication Hub
          </div>
          <h1 className="font-headline font-extrabold text-5xl text-[#161c22] leading-none">
            Contact Messages
          </h1>
          <p className="text-[#414754] text-sm mt-3">
            Manage incoming messages, inquiries, and correspondence from clients and candidates.
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-[#e8eef6] px-6 py-4 text-center">
            <div className="font-headline text-3xl font-extrabold text-[#ba1a1a]">24</div>
            <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mt-1">
              Pending Items
            </div>
          </div>
        </div>
      </div>

      {/* Filter Strip */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`font-['Manrope'] uppercase tracking-widest text-[11px] font-bold px-4 py-2 rounded-xl transition-colors ${
                i === 0
                  ? "bg-[#0059bb] text-white"
                  : "bg-white text-slate-500 hover:bg-[#e8eef6] border border-[#e8eef6]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-white border border-[#e8eef6] rounded-xl px-4 py-2 text-sm text-[#414754] font-['Manrope'] focus:outline-none focus:ring-2 focus:ring-[#0059bb]/20">
            <option>All Dates</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
          <button className="flex items-center gap-2 border border-[#e8eef6] bg-white rounded-xl px-4 py-2 text-sm font-bold font-['Manrope'] text-slate-500 hover:border-[#0059bb] hover:text-[#0059bb] transition-colors">
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Advanced Filter
          </button>
        </div>
      </div>

      {/* Messages Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f6f9ff] border-b border-[#e8eef6]">
                {["Name & Origin", "Subject", "Date Received", "Status", "Actions"].map((col) => (
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
              {messages.map((msg) => (
                <tr key={msg.name} className="hover:bg-[#f6f9ff] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${msg.color} rounded-full flex items-center justify-center text-white text-xs font-bold font-['Manrope'] flex-shrink-0`}
                      >
                        {msg.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-[#161c22] text-sm">{msg.name}</div>
                        <div className="text-xs text-slate-400">{msg.origin}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-[#414754]">{msg.subject}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-400">{msg.date}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold font-['Manrope'] ${msg.statusStyle}`}
                    >
                      {msg.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#d8e2ff] text-[#0059bb] transition-colors" title="View">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-emerald-50 text-emerald-600 transition-colors" title="Reply">
                        <span className="material-symbols-outlined text-[18px]">reply</span>
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
          <span className="text-sm text-slate-400 font-['Manrope']">1–10 of 142 messages</span>
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

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* AI Insights */}
        <div className="bg-white rounded-xl shadow-sm p-1 border border-[#0059bb]/20">
          <div className="bg-gradient-to-br from-[#0059bb]/5 to-[#0070ea]/5 rounded-xl p-6">
            <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-[#0059bb] mb-2">
              Powered by Nexus AI
            </div>
            <h3 className="font-headline font-bold text-xl text-[#161c22] mb-2">AI Insights</h3>
            <p className="text-sm text-[#414754] mb-4">
              Intelligent message categorization and sentiment analysis. Auto-routes high-priority messages to available staff.
            </p>
            <button className="bg-[#0059bb] text-white font-['Manrope'] uppercase tracking-widest text-[10px] font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity">
              View AI Report
            </button>
          </div>
        </div>

        {/* Message Integrity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-slate-400 mb-2">
            Security
          </div>
          <h3 className="font-headline font-bold text-xl text-[#161c22] mb-4">
            Message Integrity Protocol
          </h3>
          <div className="space-y-3">
            {[
              { label: "Encryption", value: "AES-256", ok: true },
              { label: "Spam Filter", value: "Active", ok: true },
              { label: "Retention Policy", value: "90 days", ok: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="font-['Manrope'] text-[11px] uppercase tracking-widest font-bold text-slate-400">
                  {item.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span className="font-['Manrope'] text-[11px] font-bold text-[#161c22]">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
