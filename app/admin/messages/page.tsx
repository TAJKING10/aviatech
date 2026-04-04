"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

const STATUS_COLORS: Record<string, string> = {
  unread: "bg-error-container text-error",
  pending: "bg-tertiary-container/20 text-tertiary",
  replied: "bg-secondary-container/30 text-secondary",
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  async function fetchMessages(p = page, s = statusFilter) {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/messages?page=${p}&status=${s}`);
      const data = await res.json();
      setMessages(data.messages || []);
      setTotal(data.total || 0);
      setPage(data.page || 1);
      setPages(data.pages || 1);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function fetchUnread() {
    const res = await fetch("/api/admin/messages?status=unread&page=1");
    const data = await res.json();
    setUnreadCount(data.total || 0);
  }

  useEffect(() => {
    fetchMessages();
    fetchUnread();
  }, []);

  async function updateStatus(id: number, status: string) {
    await fetch(`/api/admin/messages/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchMessages();
    fetchUnread();
  }

  async function deleteMessage(id: number) {
    if (!confirm("Delete this message?")) return;
    await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
    fetchMessages();
    fetchUnread();
  }

  function handleFilter(s: string) {
    setStatusFilter(s);
    fetchMessages(1, s);
  }

  const initials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

  return (
    <div className="p-10 space-y-12 max-w-[1400px] mx-auto">
      {/* Header */}
      <section className="grid grid-cols-1 md:grid-cols-3 items-end gap-8">
        <motion.div className="md:col-span-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <p className="text-primary font-headline text-xs uppercase tracking-[0.2em] mb-3">Communication Hub</p>
          <h2 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface">Contact Messages</h2>
          <p className="mt-6 text-on-surface-variant leading-relaxed max-w-xl font-body">
            Manage all incoming inquiries from the contact form. Mark as replied or archive once handled.
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
              <p className="text-2xl font-bold text-on-surface">{unreadCount}</p>
              <p className="text-[10px] font-headline uppercase tracking-widest text-outline">Unread Messages</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 bg-surface-container/50 p-6 rounded-2xl border border-outline-variant/10">
        <div className="flex items-center space-x-4 overflow-x-auto w-full md:w-auto scrollbar-hide pb-2 md:pb-0">
          {[{ key: "all", label: "All Messages" }, { key: "unread", label: "Unread" }, { key: "pending", label: "Pending" }, { key: "replied", label: "Replied" }].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleFilter(key)}
              className={cn(
                "px-5 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all active:scale-95",
                statusFilter === key ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Table */}
      <motion.section
        className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_20px_40px_rgba(22,28,34,0.03)] border border-outline-variant/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {loading ? (
          <div className="p-16 text-center text-slate-400 text-sm">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="p-16 text-center text-slate-400 text-sm">No messages found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high/50">
                  <th className="px-8 py-5 text-[10px] font-headline uppercase tracking-[0.15em] text-outline">Name</th>
                  <th className="px-8 py-5 text-[10px] font-headline uppercase tracking-[0.15em] text-outline">Subject</th>
                  <th className="px-8 py-5 text-[10px] font-headline uppercase tracking-[0.15em] text-outline">Date</th>
                  <th className="px-8 py-5 text-[10px] font-headline uppercase tracking-[0.15em] text-outline text-center">Status</th>
                  <th className="px-8 py-5 text-[10px] font-headline uppercase tracking-[0.15em] text-outline text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {messages.map((msg, i) => (
                  <>
                    <motion.tr
                      key={msg.id}
                      className="hover:bg-surface-container-low/40 transition-colors group cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => setExpanded(expanded === msg.id ? null : msg.id)}
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs bg-primary/10 text-primary">
                            {initials(msg.name)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-on-surface">{msg.name}</p>
                            <p className="text-xs text-outline font-body">{msg.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm font-medium text-on-surface max-w-xs truncate">{msg.subject}</p>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-xs text-on-surface">{new Date(msg.createdAt).toLocaleDateString()}</p>
                        <p className="text-[10px] text-outline">{new Date(msg.createdAt).toLocaleTimeString()}</p>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", STATUS_COLORS[msg.status] || "bg-slate-100 text-slate-600")}>
                          {msg.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end space-x-2">
                          {msg.status !== "replied" && (
                            <button onClick={() => updateStatus(msg.id, "replied")} title="Mark Replied" className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors">
                              <span className="material-symbols-outlined">reply</span>
                            </button>
                          )}
                          {msg.status === "unread" && (
                            <button onClick={() => updateStatus(msg.id, "pending")} title="Mark Pending" className="p-2 hover:bg-amber-50 rounded-lg text-amber-600 transition-colors">
                              <span className="material-symbols-outlined">schedule</span>
                            </button>
                          )}
                          <button onClick={() => deleteMessage(msg.id)} title="Delete" className="p-2 hover:bg-error-container rounded-lg text-error transition-colors">
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                    {expanded === msg.id && (
                      <tr key={`expanded-${msg.id}`}>
                        <td colSpan={5} className="px-8 pb-6 bg-surface-container-low/30">
                          <div className="bg-white rounded-xl p-6 border border-outline-variant/10 max-w-2xl">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-3">Message</p>
                            <p className="text-sm text-on-surface leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                            <a
                              href={`mailto:${msg.email}?subject=Re: ${msg.subject}`}
                              className="inline-flex items-center gap-2 mt-4 text-primary text-xs font-bold hover:underline"
                            >
                              <span className="material-symbols-outlined text-sm">mail</span>
                              Reply via email
                            </a>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {pages > 1 && (
          <div className="px-8 py-6 bg-surface-container-low/30 flex items-center justify-between border-t border-surface-container-high">
            <p className="text-xs text-outline">
              Showing <span className="font-bold text-on-surface">{(page - 1) * 10 + 1}–{Math.min(page * 10, total)}</span> of <span className="font-bold text-on-surface">{total}</span>
            </p>
            <div className="flex items-center space-x-2">
              <button onClick={() => { const p = page - 1; setPage(p); fetchMessages(p); }} disabled={page === 1} className="p-2 hover:bg-surface-container rounded-md text-outline disabled:opacity-30">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              {Array.from({ length: Math.min(pages, 5) }, (_, i) => i + 1).map((p) => (
                <button key={p} onClick={() => { setPage(p); fetchMessages(p); }} className={cn("w-8 h-8 flex items-center justify-center rounded-md text-xs font-bold", page === p ? "bg-primary text-white" : "hover:bg-surface-container text-on-surface")}>
                  {p}
                </button>
              ))}
              <button onClick={() => { const p = page + 1; setPage(p); fetchMessages(p); }} disabled={page === pages} className="p-2 hover:bg-surface-container rounded-md text-outline disabled:opacity-30">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        )}
      </motion.section>

      {/* Bottom section */}
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
                Monitor inquiry trends and optimize response cycles. Centralize all client touchpoints into a unified administrative deck.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-3">
                <div className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary font-bold">{unreadCount} unread</div>
                <div className="px-3 py-1 bg-emerald-50 rounded-full text-xs text-emerald-600 font-bold">{total} total</div>
              </div>
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
              All incoming communications are stored securely in your database. Click any row to read the full message and reply via email.
            </p>
            <div className="mt-6 flex space-x-4">
              <div className="flex items-center space-x-2 text-primary">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                <span className="text-[10px] font-headline uppercase tracking-widest font-bold">Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <span className="material-symbols-outlined text-sm">storage</span>
                <span className="text-[10px] font-headline uppercase tracking-widest font-bold">DB Stored</span>
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
