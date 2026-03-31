import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar />

      <div className="ml-64 min-h-screen flex flex-col flex-1">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-[#f6f9ff]/80 backdrop-blur-xl border-b border-slate-200/15 shadow-sm h-16 flex items-center justify-between px-6">
          {/* Search */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-slate-400">
              search
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-[#eef4fc] border-none rounded-md text-sm w-64 text-[#161c22] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0059bb]/20"
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-[#e8eef6] transition-colors text-slate-500 hover:text-[#161c22]">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
            </button>

            {/* Help */}
            <button className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-[#e8eef6] transition-colors text-slate-500 hover:text-[#161c22]">
              <span className="material-symbols-outlined text-[22px]">help_center</span>
            </button>

            {/* Separator */}
            <div className="w-px h-8 bg-slate-200" />

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-semibold text-[#161c22] font-['Manrope']">Alex Stratton</div>
                <div className="text-[10px] text-slate-400 font-['Manrope'] uppercase tracking-wider">Administrator</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0059bb] to-[#0070ea] flex items-center justify-center text-white text-xs font-bold font-['Manrope']">
                AS
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
