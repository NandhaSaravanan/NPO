"use client";

import { useId, useState } from "react";
import { foodPantryDemo } from "@content/work";
import { MiniSite } from "./MiniSite";

/**
 * A deliberately dated, cluttered mockup of what this same pantry's site might look like
 * before a rebuild: default Times New Roman, a harsh palette, a dense wall of center-aligned
 * text, and a visitor counter. Nothing here uses Lumen's tokens or the "after" demo's palette.
 */
function BeforeSite() {
  return (
    <div style={{ background: "#FFFFCC", fontFamily: "'Times New Roman', Times, serif", color: "#000000" }}>
      <div style={{ background: "#003399", padding: "6px 8px", display: "flex", gap: 8, flexWrap: "wrap" }}>
        {["HOME", "ABOUT US", "OUR HISTORY", "VOLUNTEER", "DONATE!!", "CONTACT", "LINKS"].map((l) => (
          <span key={l} style={{ color: "#FFFF00", fontSize: "0.5rem", fontWeight: 700, textDecoration: "underline" }}>{l}</span>
        ))}
      </div>
      <div style={{ padding: "0.75rem", textAlign: "center", borderBottom: "3px double #990000" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#CC0000", textTransform: "uppercase", margin: 0 }}>
          ~*~ Welcome to Our Website ~*~
        </p>
        <p style={{ fontSize: "0.5rem", marginTop: 4, lineHeight: 1.5 }}>
          Thank you for visiting! Union County Food Pantry has been serving the community for many years.
          Please look around our site to learn more about who we are and what we do. We rely on the generosity
          of donors like you. Our hours vary, please call ahead. Est. visitors: 004127
        </p>
        <span style={{ display: "inline-block", marginTop: 6, background: "#00CC00", border: "2px outset #006600", padding: "4px 10px", fontSize: "0.55rem", fontWeight: 700 }}>
          CLICK HERE TO DONATE
        </span>
      </div>
      <div style={{ padding: "0.5rem 0.75rem", fontSize: "0.5rem", color: "#333333" }}>
        <p style={{ margin: 0 }}>Last updated: 3 years ago. Best viewed at 800x600.</p>
      </div>
    </div>
  );
}

/**
 * Drag or use the arrow keys to compare: a generic, dated nonprofit site against the same
 * organization's demo from Selected Work. The reveal is a native range input under the hood,
 * so it's fully keyboard-accessible, not just a mouse toy.
 */
export function BeforeAfterSlider() {
  const [value, setValue] = useState(50);
  const id = useId();
  return (
    <div>
      <div className="relative h-[230px] w-full select-none overflow-hidden rounded-ui border border-line shadow-lift sm:h-[260px]">
        <div className="absolute inset-0">
          <BeforeSite />
        </div>
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
          <MiniSite content={foodPantryDemo} />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-linen" style={{ left: `${value}%` }} aria-hidden="true">
          <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-linen shadow-lift">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-pine" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M8 7 4 12l4 5M16 7l4 5-4 5" />
            </svg>
          </span>
        </div>
        <span className="pointer-events-none absolute left-2 top-2 rounded border border-line bg-linen/90 px-2 py-0.5 text-xs font-semibold text-muted">Before</span>
        <span className="pointer-events-none absolute right-2 top-2 rounded border border-line bg-linen/90 px-2 py-0.5 text-xs font-semibold text-muted">After</span>
        <label htmlFor={id} className="sr-only">Compare before and after</label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>
      <p className="mt-3 text-sm text-muted">
        The same food pantry, two ways: a generic site with no clear next step, next to the Union County Food Pantry demo from the work above. Drag the slider, or tab to it and use the arrow keys.
      </p>
    </div>
  );
}
