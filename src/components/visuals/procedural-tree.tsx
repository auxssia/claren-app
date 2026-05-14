"use client";

import { useRef, useState, useEffect } from "react";

const levels = [
  {
    label: "Notice Period",
    items: ["Notice served", "15 days wait", "No response"],
  },
  {
    label: "Limitation",
    items: ["30 days from notice", "File within period", "Delay condonation"],
  },
  {
    label: "Maintainability",
    items: ["Jurisdiction ok", "Parties proper", "Cause of action"],
  },
  {
    label: "Trial",
    items: ["Evidence", "Arguments", "Judgment"],
  },
];

export function ProceduralTree() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      <div className="flex flex-col gap-6">
        {levels.map((level, lvlIdx) => (
          <div key={level.label}>
            <div
              className="text-xs font-mono text-muted uppercase tracking-wider mb-2"
              style={{
                opacity: animated ? 1 : 0,
                transition: `opacity 0.5s ease-out ${lvlIdx * 150}ms`,
              }}
            >
              {level.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {level.items.map((item, itemIdx) => (
                <div
                  key={item}
                  className="px-3 py-1.5 rounded-md border border-border text-xs text-muted bg-card"
                  style={{
                    opacity: animated ? 1 : 0,
                    transform: animated ? "translateY(0)" : "translateY(8px)",
                    transition: `all 0.4s ease-out ${lvlIdx * 150 + itemIdx * 80}ms`,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            {lvlIdx < levels.length - 1 && (
              <div
                className="ml-3 mt-1 h-4 w-px bg-border"
                style={{
                  opacity: animated ? 1 : 0,
                  transition: `opacity 0.5s ease-out ${lvlIdx * 150 + 300}ms`,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
