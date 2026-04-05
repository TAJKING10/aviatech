"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Subscriber {
  id: number;
  email: string;
  createdAt: string;
}

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Broadcast state
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ sent: number; failed: number; total: number } | null>(null);

  async function fetchSubscribers(p = page) {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/subscribers?page=${p}`);
      const data = await res.json();
      setSubscribers(data.subscribers || []);
      setTotal(data.total || 0);
      setPage(data.page || 1);
      setPages(data.pages || 1);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchSubscribers(); }, []);

  async function deleteSubscriber(id: number, email: string) {
    if (!confirm(`Remove ${email} from subscribers?`)) return;
    await fetch("/api/admin/subscribers", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchSubscribers(page);
  }

  async function sendBroadcast() {
    if (!subject.trim() || !body.trim()) return;
    if (!confirm(`Send this email to all ${total} subscribers?`)) return;
    setSending(true);
    setResult(null);
    try {
      const res = await fetch("/api/admin/broadcast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, body }),
      });
      const data = await res.json();
      setResult(data);
      if (data.success) {
        setSubject("");
        setBody("");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="p-10 max-w-[1400px] mx-auto space-y-10">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-primary font-headline text-xs uppercase tracking-[0.2em] mb-3">Newsletter</p>
        <h2 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface">Subscribers</h2>
        <p className="mt-3 text-on-surface-variant text-sm leading-relaxed max-w-xl">
          Manage your subscriber list and send broadcast emails to everyone at once.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-10 items-start">

        {/* Subscriber List — left col */}
        <div className="xl:col-span-2 space-y-6">
          {/* Stat */}
          <div className="bg-surface-container-lowest rounded-xl px-6 py-5 border-l-4 border-primary shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Total Subscribers</p>
              <p className="text-4xl font-headline font-extrabold text-on-surface">{loading ? "—" : total}</p>
            </div>
            <span className="material-symbols-outlined text-primary text-4xl">campaign</span>
          </div>

          {/* List */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10">
            <div className="px-6 py-4 bg-surface-container-low border-b border-outline-variant/10">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-outline">Email Address</p>
            </div>

            {loading ? (
              <div className="p-10 text-center text-slate-400 text-sm">Loading...</div>
            ) : subscribers.length === 0 ? (
              <div className="p-10 text-center text-slate-400 text-sm">No subscribers yet.</div>
            ) : (
              <div>
                {subscribers.map((sub, i) => (
                  <motion.div
                    key={sub.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-center justify-between px-6 py-4 border-b border-surface-container last:border-b-0 hover:bg-surface-container-low/40 transition-colors group"
                  >
                    <div>
                      <p className="text-sm font-medium text-on-surface">{sub.email}</p>
                      <p className="text-[10px] text-outline mt-0.5">
                        Subscribed {new Date(sub.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteSubscriber(sub.id, sub.email)}
                      className="p-1.5 text-error hover:bg-error-container rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                      title="Remove subscriber"
                    >
                      <span className="material-symbols-outlined text-lg">person_remove</span>
                    </button>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {pages > 1 && (
              <div className="px-6 py-4 flex items-center justify-between border-t border-surface-container-high bg-surface-container-low/30">
                <p className="text-xs text-outline">{total} total</p>
                <div className="flex gap-2">
                  <button onClick={() => { const p = page - 1; setPage(p); fetchSubscribers(p); }} disabled={page === 1} className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-outline hover:bg-surface-container disabled:opacity-30">
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                  </button>
                  {Array.from({ length: Math.min(pages, 5) }, (_, i) => i + 1).map((p) => (
                    <button key={p} onClick={() => { setPage(p); fetchSubscribers(p); }} className={cn("w-8 h-8 rounded text-xs font-bold", page === p ? "bg-primary text-white" : "bg-white border border-outline-variant/20 hover:bg-surface-container-low")}>
                      {p}
                    </button>
                  ))}
                  <button onClick={() => { const p = page + 1; setPage(p); fetchSubscribers(p); }} disabled={page === pages} className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-outline hover:bg-surface-container disabled:opacity-30">
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Broadcast Composer — right col */}
        <div className="xl:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
            {/* Header */}
            <div className="px-8 py-6 bg-[#001c3a] text-white">
              <div className="flex items-center gap-3 mb-1">
                <span className="material-symbols-outlined">campaign</span>
                <h3 className="font-headline font-extrabold text-xl">Send Broadcast Email</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Compose an email and send it to all <strong>{total}</strong> subscriber{total !== 1 ? "s" : ""} at once.
              </p>
            </div>

            <div className="p-8 space-y-6">
              {/* To field (read-only info) */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">To</label>
                <div className="flex items-center gap-2 bg-surface-container-low rounded-lg px-4 py-3 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary text-sm">group</span>
                  <span className="text-sm text-on-surface-variant font-medium">All Subscribers ({total} recipients)</span>
                </div>
              </div>

              {/* From */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">From</label>
                <div className="flex items-center gap-2 bg-surface-container-low rounded-lg px-4 py-3 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary text-sm">mail</span>
                  <span className="text-sm text-on-surface-variant font-medium">Aviatech Consulting &lt;info@aviatech-consulting.com&gt;</span>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Subject *</label>
                <input
                  type="text"
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm text-on-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="e.g. New Training Modules Available — Aviatech Consulting"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              {/* Body */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Message *</label>
                <textarea
                  rows={10}
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm text-on-surface outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder={`Dear Subscriber,\n\nWrite your message here...\n\nBest regards,\nAviatech Consulting Team`}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
                <p className="text-[10px] text-outline mt-2">
                  An unsubscribe notice will be added automatically at the bottom of every email.
                </p>
              </div>

              {/* Result banner */}
              {result && (
                <div className={cn(
                  "flex items-center gap-3 rounded-xl px-5 py-4 border",
                  result.failed === 0
                    ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                    : "bg-amber-50 border-amber-100 text-amber-700"
                )}>
                  <span className="material-symbols-outlined text-xl">
                    {result.failed === 0 ? "check_circle" : "warning"}
                  </span>
                  <div>
                    <p className="font-bold text-sm">
                      {result.failed === 0
                        ? `Broadcast sent! ${result.sent} of ${result.total} emails delivered.`
                        : `Sent ${result.sent}, failed ${result.failed} out of ${result.total}.`}
                    </p>
                  </div>
                </div>
              )}

              {/* Send button */}
              <div className="flex items-center justify-between pt-2 border-t border-outline-variant/10">
                <p className="text-xs text-outline">
                  This will send {total} individual emails.
                </p>
                <button
                  onClick={sendBroadcast}
                  disabled={!subject.trim() || !body.trim() || sending || total === 0}
                  className="inline-flex items-center gap-2 bg-[#001c3a] text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-primary transition-all active:scale-95 disabled:opacity-50 shadow-lg"
                >
                  <span className="material-symbols-outlined text-base">send</span>
                  {sending ? `Sending to ${total} subscribers...` : `Send to All ${total} Subscribers`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
