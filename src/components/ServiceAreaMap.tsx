"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's figure: the service area itself.
 *
 * Earth Evidence Lab opens on a globe because it is about the whole planet. Lumen works in two
 * counties, so the equivalent is this — real Census boundaries for Union and Mecklenburg lit
 * against the ring of counties around them, with every town we serve coming up in turn. The
 * name is a unit of light, so the towns switching on is the page saying what it does.
 *
 * Boundaries are US Census cartographic files projected to Mercator at build time; the towns
 * sit at their true coordinates. It is a real map, not a decorative shape.
 *
 * It is laid out beside the headline rather than behind it: at hero proportions a full-bleed
 * map crops to an unreadable fragment, and its town markers landed on top of the type.
 */
const TOWNS = [
  { name: "Charlotte", x: 295.6, y: 447.2, big: true },
  { name: "University City", x: 412.3, y: 331.1, big: false },
  { name: "NoDa", x: 340.5, y: 419.2, big: false },
  { name: "Plaza Midwood", x: 340.5, y: 452.4, big: false },
  { name: "Dilworth", x: 289.5, y: 476.5, big: false },
  { name: "South End", x: 278.9, y: 472.1, big: false },
  { name: "Indian Trail", x: 498.1, y: 661.1, big: false },
  { name: "Weddington", x: 395.9, y: 739.3, big: false },
  { name: "Stallings", x: 407.5, y: 642.9, big: false },
  { name: "Matthews", x: 434.6, y: 604.2, big: false },
  { name: "Waxhaw", x: 411.7, y: 877.8, big: false },
  { name: "Monroe", x: 637.4, y: 791.1, big: true },
  { name: "Wingate", x: 754.7, y: 792.2, big: false },
  { name: "Marshville", x: 846.6, y: 770.2, big: false },
];

const VB_W = 1000;
const VB_H = 1084;

export function ServiceAreaMap() {
  const ref = useRef<HTMLElement>(null);

  /*
   * The lit state is driven through the DOM rather than React state, so the markup the server
   * sends carries no `data-lit` at all. The CSS default is the settled map, which means a
   * visitor without JavaScript sees the towns and labels instead of an empty outline; only
   * once this effect runs does the figure get an unlit start to animate from.
   */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.dataset.lit = "false";
    const t = window.setTimeout(() => {
      el.dataset.lit = "true";
    }, 400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <figure className="map-wrap" ref={ref}>
      <svg
        className="map-figure"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="A map of Union and Mecklenburg counties in North Carolina, with the towns Lumen serves marked: Charlotte, Matthews, Indian Trail, Stallings, Weddington, Waxhaw, Monroe, Wingate and Marshville."
      >
        {/* Union and Mecklenburg: the two counties we actually work in. */}
        <g className="map-focus">
      <path d="M623.3 1029.4L553.9 1028.4L548.4 1028.3L526.6 1027.9L524.4 1027.8L378.6 1026.3L371.8 1026.3L349.6 1018.3L366.7 861.5L338.3 823.0L298.7 768.1L380.3 721.7L636.5 473.8L687.6 506.8L688.8 508.5L715.3 513.9L732.0 533.0L766.4 540.2L778.5 532.3L954.5 491.3L904.1 1034.6L811.6 1032.7L791.6 1032.2L790.0 1032.0L788.6 1032.1L781.3 1031.8L770.9 1031.5L754.7 1031.0L751.3 1030.9L711.7 1030.5L623.3 1029.4Z" />
      <path d="M221.9 661.4L188.7 617.6L162.0 638.6L64.7 706.8L46.1 682.2L45.5 666.3L46.4 647.9L52.4 633.4L58.8 627.3L70.9 623.6L75.1 615.2L63.2 562.6L106.2 547.6L107.1 500.3L105.8 471.1L96.8 456.4L102.6 420.6L164.9 199.3L174.7 75.2L364.0 49.3L387.4 200.2L397.9 207.8L410.7 228.2L439.4 253.6L452.3 264.5L469.6 276.4L500.3 387.4L502.0 388.6L636.5 473.8L380.3 721.7L298.7 768.1L221.9 661.4Z" />
        </g>
        <g className="map-towns">
          {TOWNS.map((t, i) => (
            <circle
              key={t.name}
              cx={t.x}
              cy={t.y}
              r={t.big ? 15 : 9.5}
              style={{ transitionDelay: `${300 + i * 110}ms` }}
            />
          ))}
        </g>
        <g className="map-labels" aria-hidden="true">
        <text x={272} y={453.2} textAnchor="end">Charlotte</text>
        <text x={661} y={797.1} textAnchor="start">Monroe</text>
        </g>
      </svg>
      <figcaption className="map-caption">
        Union and Mecklenburg counties. Every town we can reach in person.
      </figcaption>
    </figure>
  );
}
