"use client";

import { Search } from "lucide-react";
import { useState } from "react";

const results = [
  { text: "Notice period under Section 138", relevance: 0.94 },
  { text: "Limitation period for cheque bounce", relevance: 0.88 },
  { text: "Evidence requirements for complaint", relevance: 0.82 },
];

export function ContextualSearchPanel() {
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState("");

  const showResults = active && query.length > 0;

  return (
    <div className="w-full border border-border rounded-xl bg-card overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border/50">
        <Search className="h-3.5 w-3.5 text-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!active) setActive(true);
          }}
          onFocus={() => setActive(true)}
          onBlur={() => setTimeout(() => setActive(false), 200)}
          placeholder="Search case files, evidence, provisions..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted/50 outline-none"
        />
      </div>
      {showResults && (
        <div className="px-2 py-1.5 space-y-0.5">
          {results.map((r, i) => (
            <div
              key={r.text}
              className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-border/30 cursor-default transition-colors"
              style={{
                animation: `fade-in 0.3s ease-out ${i * 60}ms both`,
              }}
            >
              <span className="text-xs text-foreground">{r.text}</span>
              <span className="text-[10px] text-muted font-mono">
                {Math.round(r.relevance * 100)}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
