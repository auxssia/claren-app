"use client";

import { useState, FormEvent } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-sm text-muted">
        Thanks for joining. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        className="px-4 py-2.5 rounded-lg border border-border bg-transparent text-sm text-foreground placeholder:text-muted/50 outline-none focus:border-foreground/30 transition-colors min-w-0 sm:w-64"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-all hover:opacity-90"
      >
        Join waitlist
      </button>
    </form>
  );
}
