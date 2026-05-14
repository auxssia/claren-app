"use client";

import { useRef, useState, useEffect } from "react";

const docs = [
  { id: "c", label: "Contract", x: 50, y: 65 },
  { id: "e", label: "Email", x: 140, y: 30 },
  { id: "i", label: "Invoice", x: 140, y: 100 },
  { id: "n", label: "Notice", x: 230, y: 50 },
  { id: "s", label: "Screenshot", x: 230, y: 80 },
];

const connections = [
  ["c", "e"],
  ["c", "i"],
  ["e", "n"],
  ["i", "n"],
  ["i", "s"],
  ["n", "s"],
];

export function DocumentRelationships() {
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full aspect-[2/1] sm:aspect-[2.5/1] max-h-[180px] sm:max-h-[220px] relative">
      <svg viewBox="0 0 300 130" className="w-full h-full">
        {connections.map(([from, to], i) => {
          const f = docs.find((d) => d.id === from)!;
          const t = docs.find((d) => d.id === to)!;
          return (
            <line
              key={`${from}-${to}`}
              x1={f.x}
              y1={f.y}
              x2={t.x}
              y2={t.y}
              stroke="var(--edge)"
              strokeWidth="1"
              className="transition-all duration-700"
              style={{
                strokeDasharray: 200,
                strokeDashoffset: animated ? 0 : 200,
                transitionDelay: `${i * 80}ms`,
              }}
            />
          );
        })}
        {docs.map((doc, i) => (
          <g key={doc.id}>
            <rect
              x={doc.x - 2}
              y={doc.y - 7}
              width="4"
              height="14"
              rx="2"
              fill="var(--bar-fill)"
              className="transition-all duration-500"
              style={{
                opacity: animated ? 1 : 0,
                transitionDelay: `${200 + i * 100}ms`,
              }}
            />
            <text
              x={doc.x + 8}
              y={doc.y + 1}
              fontSize="4.5"
              fill="var(--svg-text)"
              className="transition-all duration-500"
              style={{
                opacity: animated ? 1 : 0,
                transitionDelay: `${300 + i * 100}ms`,
              }}
              fontFamily="system-ui"
            >
              {doc.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
