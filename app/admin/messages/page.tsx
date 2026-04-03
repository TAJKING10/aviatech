"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const messages = [
  {
    name: "Jameson Sterling",
    email: "j.sterling@aero-logic.com",
    subject: "Custom Avionics Software Integration Inquiry",
    preview: "Looking for a quote on fleet-wide system upgrade...",
    date: "Oct 24, 2023",
    time: "09:14 AM GMT",
    status: "Unread",
    initials: "JS",
    color: "bg-secondary-container text-on-secondary-container",
  },
  {
    name: "Elena Moretti",
    email: "elena.m@stratoglobal.it",
    subject: "Technical Consulting for Hangar Logistics",
    preview: "Requires urgent consultation regarding the Milan site...",
    date: "Oct 23, 2023",
    time: "04:45 PM GMT",
    status: "Pending",
    initials: "EM",
    color: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
  {
    name: "Sarah Jenkins",
    email: "s.jenkins@flyhorizon.com",
    subject: "Partnership Proposal: Sustainable Aviation",
    preview: "Regarding the upcoming summit in Dubai and green fuels...",
    date: "Oct 21, 2023",
    time: "11:20 AM GMT",
    status: "Replied",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr6DZOnpzNsWJezSGTOzlSzHUENCamn_2BGA5CC4sKSpTcjz2Cdl-UYnyKmYaG6_EqusKA7YR8XRiFIF7UwDURRQcBzaC8XNloav1C0mv6OdtSda_y0a1WL4ono59Rs_ngYsgBQCRvCB9CzeNnQV3WGgo5kpW-qsX0HoD4XGHqvzCf9i4Ngw-g5W_n5BOUvbuYRZSCuFuaUCStK7qq6flh-RqgIQWBXjqlF-Z0UhJ2yo_p5FdSNnpUmHnMMkLY5hA7X1Ms-nZkAg2z",
  },
  {
    name: "Robert Beaumont",
    email: "beaumont@vertex-sky.com",
    subject: "Supply Chain Bottleneck Analysis",
    preview: "Attached data set for the Q4 review process...",
    date: "Oct 20, 2023",
    time: "02:30 PM GMT",
    status: "Unread",
    initials: "RB",
    color: "bg-primary-fixed text-on-primary-fixed",
  },
];

export default function MessagesPage() {
  return (
    <div className="p-10 space-y-12 max-w-[1400px] mx-auto">
      {/* Page Header */}
      <section className="grid grid-cols-1 md:grid-cols-3 items-end gap-8">
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-primary font-headline text-xs uppercase tracking-[0.2em] mb-3">Communication Hub</p>
          <h2 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface">Contact Messages</h2>
          <p className="mt-6 text-on-surface-variant leading-relaxed max-w-xl font-body">
            Oversee global inquiry streams and optimize response cycles. The Aerospace Precision dashboard centralizes all client touchpoints into a unified administrative deck.
          </p>
        </motion.div>
        <div className="flex justify-end">
          <motion.div 
            className="bg-surface-container-low px-6 py-4 rounded-xl flex items-center space-x-4 border border-outline-variant/10 shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="bg-primary/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary">pending_actions</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-on-surface">24</p>
              <p className="text-[10px] font-headline uppercase tracking-widest text-outline">Pending Items</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Strip */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 bg-surface-container/50 p-6 rounded-2xl border border-outline-variant/10">
        <div className="flex items-center space-x-4 overflow-x-auto w-full md:w-auto scrollbar-hide pb-2 md:pb-0">
          {["All Messages", "Unread", "Pending", "Replied"].map((filter, i) => (
            <button key={i} className={cn(
              "px-5 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all active:scale-95",
              i === 0 ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high"
            )}>
              {filter}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-xs text-outline">calendar_month</span>
            <select className="pl-10 pr-8 py-2 bg-white border-none text-xs font-headline uppercase tracking-widest rounded-md focus:ring-1 focus:ring-primary/30 appearance-none shadow-sm cursor-pointer outline-none">
              <option>Last 30 Days</option>
              <option>This Quarter</option>
              <option>Fiscal Year</option>
            </select>
          </div>
          <button className="flex items-center space-x-2 bg-white border-none px-4 py-2 rounded-md text-xs font-headline uppercase tracking-widest shadow-sm hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            <span>Advanced</span>
          </button>
        </div>
      </section>

      {/* Table Section */}
      <motion.section 
        className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_20px_40px_rgba(22,28,34,0.03)] border border-outline-variant/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/50">
                <th className="px-8 py-5 text-[10px] font-headline uppercase tracking-[0.15em] text-outline">Name & Origin</th>
                <th className="px-8 py-5 text-[10px] font-headline uppercase tracking-[0.15em] text-outline">Subject</th>
                <th className="px-8 py-5 text-[10px] font-headline uppercase tracking-[0.15em] text-outline">Date Received</th>
                <th className="px-8 py-5 text-[10px] font-headline uppercase tracking-[0.15em] text-outline text-center">Status</th>
                <th className="px-8 py-5 text-[10px] font-headline uppercase tracking-[0.15em] text-outline text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {messages.map((msg, i) => (
                <motion.tr 
                  key={i} 
                  className="hover:bg-surface-container-low/40 transition-colors group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-4">
                      {msg.img ? (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <Image src={msg.img} alt={msg.name} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs", msg.color)}>
                          {msg.initials}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-bold text-on-surface">{msg.name}</p>
                        <p className="text-xs text-outline font-body">{msg.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="max-w-xs">
                      <p className="text-sm font-medium text-on-surface truncate">{msg.subject}</p>
                      <p className="text-xs text-outline truncate opacity-70 font-body">{msg.preview}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-xs font-body text-on-surface">{msg.date}</p>
                    <p className="text-[10px] text-outline">{msg.time}</p>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      msg.status === "Unread" ? "bg-error-container text-error" :
                      msg.status === "Pending" ? "bg-tertiary-container/20 text-tertiary" :
                      "bg-secondary-container/30 text-secondary"
                    )}>
                      {msg.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0 translate-x-4">
                      <button className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors" title="View Message">
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                      <button className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors" title="Reply">
                        <span className="material-symbols-outlined">reply</span>
                      </button>
                      <button className="p-2 hover:bg-surface-variant rounded-lg text-outline transition-colors" title="Archive">
                        <span className="material-symbols-outlined">archive</span>
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 bg-surface-container-low/30 flex items-center justify-between border-t border-surface-container-high">
          <p className="text-xs text-outline">Showing <span className="font-bold text-on-surface">1 - 4</span> of <span className="font-bold text-on-surface">142</span> inquiries</p>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-surface-container rounded-md text-outline disabled:opacity-30">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-md text-xs font-bold shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container text-on-surface rounded-md text-xs font-bold">2</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container text-on-surface rounded-md text-xs font-bold">3</button>
            <span className="text-outline px-2">...</span>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container text-on-surface rounded-md text-xs font-bold">15</button>
            <button className="p-2 hover:bg-surface-container rounded-md text-outline">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Bottom Editorial Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 pb-20">
        <motion.div 
          className="primary-gradient p-1 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-[15px] p-8 flex flex-col justify-between h-full">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-4">auto_awesome</span>
              <h3 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">AI Insights: Sentiment Report</h3>
              <p className="mt-4 text-on-surface-variant text-sm leading-relaxed font-body">
                Our precision analytics suggest a <span className="text-primary font-bold">14% increase</span> in technical software inquiries this week. We recommend assigning more resources to the Avionics Specialist queue.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2].map((_, i) => (
                  <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image 
                      src={`https://lh3.googleusercontent.com/aida-public/AB6AXu${i === 0 ? "Dnfg8lWy6ognWg4iyWkvu8-67lLinr_F8b8MW8OJXnDUcjm_MmV_B6iDyBZ7cstYXGWaOAXsMM4PPO2lwFJHNTG1_l0VeB_E2X34c78IHmhhP7ZIGWGLC5vm2oyNLbLE6HHGRvZYGO_Qxwiq6Srs_oG9h6X5quaRU2vEAcxWXNJIC_s1LXeRr0IkLFKNZfQ5HVMEjVb48pfplFPeyMX3KaB8jEan_AviAkbFXpO0V_di3yIi0f6G41TcytUN7xoFBLd3b8S7qruIOL" : "BMwNHR_w_3TzYuRTR-rfAYsAQULq11LMJ6Qsl8h4VYnWbo-XBBHSryfu_PesvbK2OkvaGVDVKhnN165Tog5DQwYxNb4JSTdFRq9weYrN_9hMiAUIznglirT9-fuvBLgKTXmFo7ZIGascMwXgOkyFMOSJIJMSv2VqgN69SsTbgPo_9UOIgnUY15gms01eQ7NwS1hkVO8EDxP-4xhuWHFO98KO2Rifg9IaYZUlZ4GFlU70Z6iGf5OhOwqBTrr0xGHl-Raoaksq4hp1DJ"}`}
                      alt="avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container flex items-center justify-center text-[10px] font-bold text-on-surface">+4</div>
              </div>
              <button className="text-primary text-xs font-headline uppercase tracking-widest font-bold hover:underline transition-all">View Analytics</button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center border border-outline-variant/10 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">Message Integrity Protocol</h3>
            <p className="mt-4 text-on-surface-variant text-sm leading-relaxed font-body">
              All incoming communications are encrypted using high-altitude security standards. Our system ensures zero data loss during high-volume periods.
            </p>
            <div className="mt-6 flex space-x-4">
              <div className="flex items-center space-x-2 text-primary">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                <span className="text-[10px] font-headline uppercase tracking-widest font-bold">Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <span className="material-symbols-outlined text-sm">history</span>
                <span className="text-[10px] font-headline uppercase tracking-widest font-bold">99.9% Uptime</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-5">
            <span className="material-symbols-outlined text-[200px]">rocket_launch</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
