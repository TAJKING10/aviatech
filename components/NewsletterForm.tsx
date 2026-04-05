"use client";

import { useState } from "react";

type Variant = "dark" | "light";

export default function NewsletterForm({ variant = "light" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
      } else if (data.alreadySubscribed) {
        setStatus("duplicate");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch {
      setStatus("error");
    }
  }

  const isDark = variant === "dark";

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 px-4 py-3 rounded-lg ${isDark ? "bg-white/10 text-white" : "bg-primary/10 text-primary"}`}>
        <span className="material-symbols-outlined text-sm">check_circle</span>
        <span className="text-sm font-bold">You&apos;re subscribed! Check your email for confirmation.</span>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div className={`flex items-center gap-3 px-4 py-3 rounded-lg ${isDark ? "bg-white/10 text-white" : "bg-surface-container text-on-surface-variant"}`}>
        <span className="material-symbols-outlined text-sm">info</span>
        <span className="text-sm font-bold">You&apos;re already subscribed.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {variant === "dark" ? (
        // Insights page dark variant
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="flex-1 bg-surface/10 border border-surface/20 rounded-lg px-6 py-4 text-sm focus:ring-2 focus:ring-primary transition-all text-surface outline-none placeholder:text-surface/40"
            placeholder="Your work email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-primary text-on-primary py-4 px-8 rounded-lg font-headline font-bold hover:brightness-110 transition-all active:scale-95 shadow-xl disabled:opacity-60"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      ) : (
        // Footer light variant
        <div className="flex bg-white p-1 rounded-lg border border-outline-variant/20 shadow-sm focus-within:ring-2 focus-within:ring-primary transition-all">
          <input
            className="bg-transparent border-none text-sm px-4 w-full focus:ring-0 outline-none"
            placeholder="email@precision.aero"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="primary-gradient text-white px-4 py-2 rounded-md font-bold text-xs uppercase hover:brightness-110 transition-all disabled:opacity-60 whitespace-nowrap"
          >
            {status === "loading" ? "..." : "Join"}
          </button>
        </div>
      )}
      {status === "error" && (
        <p className={`text-xs mt-2 ${isDark ? "text-red-300" : "text-red-500"}`}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
