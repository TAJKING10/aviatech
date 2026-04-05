"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  unread: "bg-red-50 text-red-600",
  pending: "bg-amber-50 text-amber-600",
  replied: "bg-emerald-50 text-emerald-600",
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
  const [replyText, setReplyText] = useState<Record<number, string>>({});
  const [replying, setReplying] = useState<number | null>(null);
  const [replySent, setReplySent] = useState<number | null>(null);

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

  async function sendReply(msg: Message) {
    const text = replyText[msg.id]?.trim();
    if (!text) return;
    setReplying(msg.id);
    try {
      await fetch(`/api/admin/messages/${msg.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ replyText: text }),
      });
      setReplySent(msg.id);
      setReplyText((prev) => ({ ...prev, [msg.id]: "" }));
      fetchMessages();
      fetchUnread();
      setTimeout(() => setReplySent(null), 3000);
    } catch (e) {
      console.error(e);
    } finally {
      setReplying(null);
    }
  }

  async function deleteMessage(id: number) {
    if (!confirm("Delete this message?")) return;
    await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
    if (expanded === id) setExpanded(null);
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
    <div className="p-10 space-y-10 max-w-[1400px] mx-auto">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <p className="text-primary font-headline text-xs uppercase tracking-[0.2em] mb-3">Communication Hub</p>
          <h2 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface">Contact Messages</h2>
          <p className="mt-4 text-on-surface-variant leading-relaxed max-w-xl font-body text-sm">
            Read, reply, and manage all incoming inquiries. Replies are sent directly from this panel.
          </p>
        </motion.div>
        <motion.div
          className="bg-surface-container-low px-6 py-4 rounded-xl flex items-center gap-4 border border-outline-variant/10 shadow-sm"
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
      </section>

      {/* Filters */}
      <div className="flex items-center gap-3 bg-surface-container-low p-4 rounded-xl flex-wrap">
        <span className="material-symbols-outlined text-outline text-lg">filter_list</span>
        {[
          { key: "all", label: "All" },
          { key: "unread", label: "Unread" },
          { key: "pending", label: "Pending" },
          { key: "replied", label: "Replied" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => handleFilter(key)}
            className={cn(
              "px-4 py-1.5 text-xs font-bold rounded-full transition-colors",
              statusFilter === key ? "bg-primary text-white" : "bg-white text-on-surface-variant hover:bg-surface-container-high"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Messages List */}
      <motion.div
        className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {loading ? (
          <div className="p-16 text-center text-slate-400 text-sm">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="p-16 text-center text-slate-400 text-sm">No messages found.</div>
        ) : (
          <div>
            {messages.map((msg, i) => (
              <div key={msg.id} className="border-b border-surface-container last:border-b-0">
                {/* Row */}
                <div
                  className={cn(
                    "flex items-center gap-4 px-6 py-5 cursor-pointer hover:bg-surface-container-low/50 transition-colors",
                    expanded === msg.id && "bg-surface-container-low/30"
                  )}
                  onClick={() => {
                    setExpanded(expanded === msg.id ? null : msg.id);
                    if (msg.status === "unread") updateStatus(msg.id, "pending");
                  }}
                >
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs bg-primary/10 text-primary shrink-0">
                    {initials(msg.name)}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <p className={cn("text-sm font-bold text-on-surface", msg.status === "unread" && "font-extrabold")}>{msg.name}</p>
                      <p className="text-xs text-outline truncate">{msg.email}</p>
                    </div>
                    <p className={cn("text-sm text-on-surface-variant truncate mt-0.5", msg.status === "unread" && "text-on-surface font-medium")}>
                      {msg.subject}
                    </p>
                  </div>

                  {/* Date + Status + Actions */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right hidden md:block">
                      <p className="text-xs text-on-surface">{new Date(msg.createdAt).toLocaleDateString()}</p>
                      <p className="text-[10px] text-outline">{new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
                    </div>
                    <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", STATUS_COLORS[msg.status] || "bg-slate-100 text-slate-600")}>
                      {msg.status}
                    </span>
                    <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        title="Delete"
                        className="p-1.5 hover:bg-error-container rounded-lg text-error transition-colors"
                      >
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                    <span className="material-symbols-outlined text-outline text-lg">
                      {expanded === msg.id ? "expand_less" : "expand_more"}
                    </span>
                  </div>
                </div>

                {/* Expanded Panel */}
                <AnimatePresence>
                  {expanded === msg.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 bg-surface-container-low/20 border-t border-outline-variant/10">
                        <div className="max-w-3xl pt-5 space-y-5">

                          {/* Full message */}
                          <div className="bg-white rounded-xl p-5 border border-outline-variant/10">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-3">Message from {msg.name}</p>
                            <p className="text-sm text-on-surface leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                          </div>

                          {/* Reply box */}
                          {msg.status !== "replied" ? (
                            <div className="bg-white rounded-xl p-5 border border-outline-variant/10">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-3">
                                Reply to {msg.name} &lt;{msg.email}&gt;
                              </p>
                              <textarea
                                rows={5}
                                className="w-full bg-surface-container-low rounded-lg px-4 py-3 text-sm text-on-surface outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                                placeholder={`Type your reply to ${msg.name}...`}
                                value={replyText[msg.id] || ""}
                                onChange={(e) => setReplyText((prev) => ({ ...prev, [msg.id]: e.target.value }))}
                              />
                              <div className="flex items-center justify-between mt-3">
                                <p className="text-[10px] text-outline">
                                  Will be sent from info@aviatech-consulting.com — message marked as replied automatically
                                </p>
                                <button
                                  onClick={() => sendReply(msg)}
                                  disabled={!replyText[msg.id]?.trim() || replying === msg.id}
                                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:brightness-110 transition-all active:scale-95 disabled:opacity-50"
                                >
                                  <span className="material-symbols-outlined text-base">send</span>
                                  {replying === msg.id ? "Sending..." : "Send Reply"}
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center gap-3 bg-emerald-50 rounded-xl px-5 py-4 border border-emerald-100">
                              <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                              <p className="text-sm text-emerald-700 font-bold">This message has been replied to.</p>
                              <button
                                onClick={() => updateStatus(msg.id, "pending")}
                                className="ml-auto text-xs text-emerald-600 hover:underline font-bold"
                              >
                                Re-open
                              </button>
                            </div>
                          )}

                          {/* Reply sent confirmation */}
                          {replySent === msg.id && (
                            <div className="flex items-center gap-3 bg-emerald-50 rounded-xl px-5 py-3 border border-emerald-100">
                              <span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span>
                              <p className="text-sm text-emerald-700 font-bold">Reply sent successfully to {msg.email}!</p>
                            </div>
                          )}

                          {/* Quick status actions */}
                          <div className="flex items-center gap-3 flex-wrap">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Mark as:</p>
                            {["unread", "pending", "replied"].filter(s => s !== msg.status).map(s => (
                              <button
                                key={s}
                                onClick={() => updateStatus(msg.id, s)}
                                className={cn(
                                  "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors border",
                                  STATUS_COLORS[s] || "bg-slate-100 text-slate-600",
                                  "hover:opacity-80"
                                )}
                              >
                                {s}
                              </button>
                            ))}
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {pages > 1 && (
          <div className="px-6 py-4 flex items-center justify-between border-t border-surface-container-high bg-surface-container-low/30">
            <p className="text-xs text-outline">
              Showing <span className="font-bold text-on-surface">{(page - 1) * 10 + 1}–{Math.min(page * 10, total)}</span> of <span className="font-bold text-on-surface">{total}</span>
            </p>
            <div className="flex gap-2">
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
      </motion.div>
    </div>
  );
}
