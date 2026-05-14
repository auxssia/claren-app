"use client";

import { useRef, useEffect, useState } from "react";

const nodes = [
  { id: "doc1", label: "Contract.pdf", x: 50, y: 50, color: "oklch(0.2 0 0)" },
  { id: "doc2", label: "Email Chain", x: 160, y: 20, color: "oklch(0.3 0 0)" },
  { id: "doc3", label: "Invoice #204", x: 150, y: 90, color: "oklch(0.4 0 0)" },
  { id: "doc4", label: "Notice.jpg", x: 260, y: 110, color: "oklch(0.5 0 0)" },
  { id: "doc5", label: "Screenshot", x: 280, y: 30, color: "oklch(0.35 0 0)" },
  { id: "doc6", label: "Annexure A", x: 50, y: 130, color: "oklch(0.45 0 0)" },
];

const edges = [
  { from: "doc1", to: "doc2" },
  { from: "doc1", to: "doc3" },
  { from: "doc2", to: "doc5" },
  { from: "doc3", to: "doc4" },
  { from: "doc6", to: "doc1" },
  { from: "doc4", to: "doc5" },
  { from: "doc6", to: "doc4" },
];

export function EvidenceGraph() {
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
    <div ref={ref} className="w-full aspect-[2/1] max-h-[300px] relative">
      <svg viewBox="0 0 340 160" className="w-full h-full">
        {edges.map((edge, i) => {
          const from = nodes.find((n) => n.id === edge.from)!;
          const to = nodes.find((n) => n.id === edge.to)!;
          return (
            <line
              key={edge.from + edge.to}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="oklch(0 0 0 / 0.12)"
              strokeWidth="1"
              className="transition-all duration-700"
              style={{
                strokeDasharray: 200,
                strokeDashoffset: animated ? 0 : 200,
                transitionDelay: `${i * 100}ms`,
              }}
            />
          );
        })}
        {nodes.map((node, i) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="5"
              fill={node.color}
              className="transition-all duration-500"
              style={{
                opacity: animated ? 1 : 0,
                transitionDelay: `${300 + i * 80}ms`,
              }}
            />
            <text
              x={node.x + 9}
              y={node.y + 1}
              fontSize="5"
              fill="oklch(0.4 0 0)"
              className="transition-all duration-500"
              style={{
                opacity: animated ? 1 : 0,
                transitionDelay: `${400 + i * 80}ms`,
              }}
              fontFamily="system-ui"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <span className="text-[10px] text-muted/50 uppercase tracking-widest">
          Evidence Relationship Graph
        </span>
      </div>
    </div>
  );
}
