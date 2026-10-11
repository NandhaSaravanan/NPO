"use client";

import { useState } from "react";
import { site } from "@content/site";

/**
 * A schematic, not a map: one line with the Charlotte neighborhoods on the first stretch and the
 * Union County towns on the second. Positions are for legibility and carry no geographic meaning.
 * Hover, focus or tap a stop to see which county it is in.
 */
type Stop = { name: string; county: string; x: number; y: number; label: "above" | "below" };

// Positions are spaced so neighboring names never collide: labels alternate below and above the line.
const charlotteSpots: [number, number, "above" | "below"][] = [
  [80, 210, "below"], [205, 160, "above"], [330, 130, "below"], [455, 150, "above"], [580, 205, "below"],
];
const unionSpots: [number, number, "above" | "below"][] = [
  [760, 250, "above"], [885, 285, "below"], [1010, 265, "above"], [1135, 215, "below"],
];

function smooth(points: [number, number][]) {
  // Catmull-Rom to cubic Bezier, so the line curves through every stop.
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i], p1 = points[i], p2 = points[i + 1], p3 = points[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C ${c1[0]} ${c1[1]}, ${c2[0]} ${c2[1]}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

export function ServiceMap({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const stops: Stop[] = [
    ...site.serviceArea.charlotte.map((name, i) => ({ name, county: "Mecklenburg County", x: charlotteSpots[i][0], y: charlotteSpots[i][1], label: charlotteSpots[i][2] })),
    ...site.serviceArea.unionCounty.map((name, i) => ({ name, county: "Union County", x: unionSpots[i][0], y: unionSpots[i][1], label: unionSpots[i][2] })),
  ];
  const cs = stops.slice(0, charlotteSpots.length), us = stops.slice(charlotteSpots.length);
  const pt = (s: Stop): [number, number] => [s.x, s.y];

  return (
    <svg viewBox="0 0 1220 400" className={className} role="group" aria-label="Where we can show up in person. Each stop names a place and its county.">
      <text x="40" y="40" className="fill-catawba font-display text-[26px] font-extrabold">Charlotte</text>
      <text x="1180" y="390" textAnchor="end" className="fill-catawba font-display text-[26px] font-extrabold">Union County</text>

      <path d={smooth(cs.map(pt))} fill="none" stroke="var(--color-catawba)" strokeWidth="3" strokeLinecap="round" />
      <path d={smooth(us.map(pt))} fill="none" stroke="var(--color-catawba)" strokeWidth="3" strokeLinecap="round" />

      {stops.map((s) => {
        const on = active === s.name;
        const ty = s.label === "above" ? -30 : 50;
        return (
          <g
            key={s.name}
            tabIndex={0}
            role="button"
            aria-label={`${s.name}, ${s.county}`}
            aria-pressed={on}
            onMouseEnter={() => setActive(s.name)}
            onMouseLeave={() => setActive((v) => (v === s.name ? null : v))}
            onFocus={() => setActive(s.name)}
            onBlur={() => setActive((v) => (v === s.name ? null : v))}
            onClick={() => setActive((v) => (v === s.name ? null : s.name))}
            className="cursor-pointer outline-none"
          >
            <circle cx={s.x} cy={s.y} r="30" fill="transparent" />
            <circle
              cx={s.x} cy={s.y} r={on ? 15 : 10}
              fill={on ? "var(--color-myrtle)" : "var(--color-granite)"}
              stroke={on ? "var(--color-myrtle)" : "var(--color-pine)"} strokeWidth="4"
              style={{ transition: "r var(--dur-ui) var(--ease-ui), fill var(--dur-ui) var(--ease-ui), stroke var(--dur-ui) var(--ease-ui)" }}
            />
            <text x={s.x} y={s.y + ty} textAnchor="middle" className={`font-display text-[24px] font-bold ${on ? "fill-myrtle" : "fill-pine"}`}
              style={{ transition: "fill var(--dur-ui) var(--ease-ui)" }}>
              {s.name}
            </text>
            {on && (
              <text x={s.x} y={s.y + ty + (s.label === "above" ? -26 : 24)} textAnchor="middle" className="fill-muted font-display text-[18px] font-bold">
                {s.county}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
