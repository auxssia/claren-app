"use client";

import { useRef, useState, useEffect } from "react";

const statuteNodes = [
  { id: "s138", label: "S.138 N.I. Act", x: 60, y: 40 },
  { id: "s139", label: "S.139 Presumption", x: 170, y: 25 },
  { id: "s142", label: "S.142 Cognizance", x: 170, y: 60 },
  { id: "crpc", label: "CrPC 200", x: 270, y: 40 },
  { id: "evidence", label: "Evidence Act", x: 270, y: 75 },
];

const statuteEdges = [
  ["s138", "s139"],
  ["s138", "s142"],
  ["s142", "crpc"],
  ["s142", "evidence"],
];

export function LegalNodeMap() {
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
    <div ref={ref} className="w-full aspect-[2.5/1] max-h-[220px] relative">
      <svg viewBox="0 0 340 100" className="w-full h-full">
        {statuteEdges.map(([from, to], i) => {
          const f = statuteNodes.find((n) => n.id === from)!;
          const t = statuteNodes.find((n) => n.id === to)!;
          return (
            <line
              key={`${from}-${to}`}
              x1={f.x}
              y1={f.y}
              x2={t.x}
              y2={t.y}
              stroke="oklch(0 0 0 / 0.1)"
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
        {statuteNodes.map((node, i) => (
          <g key={node.id}>
            <rect
              x={node.x - 30}
              y={node.y - 8}
              width="60"
              height="16"
              rx="3"
              fill="oklch(0.97 0 0)"
              stroke="oklch(0 0 0 / 0.1)"
              strokeWidth="0.5"
              className="transition-all duration-500"
              style={{
                opacity: animated ? 1 : 0,
                transform: animated ? "scale(1)" : "scale(0.9)",
                transformOrigin: `${node.x}px ${node.y}px`,
                transitionDelay: `${200 + i * 100}ms`,
              }}
            />
            <text
              x={node.x}
              y={node.y + 1}
              fontSize="4.5"
              fill="oklch(0.35 0 0)"
              textAnchor="middle"
              dominantBaseline="middle"
              className="transition-all duration-500"
              style={{
                opacity: animated ? 1 : 0,
                transitionDelay: `${300 + i * 100}ms`,
              }}
              fontFamily="system-ui"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
