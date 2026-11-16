"use client";

import { useEffect, useRef } from "react";

/**
 * The entrance for a section's parts: heading, then text, then picture, staggered.
 *
 * Content is visible by default — the CSS only hides children once this component has set
 * `data-reveal` from script, so a failed or blocked script leaves the page fully readable
 * rather than blank. `prefers-reduced-motion` keeps the content and drops the travel.
 */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "ol";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Index each child so the CSS can stagger them.
    Array.from(el.children).forEach((child, i) => {
      (child as HTMLElement).style.setProperty("--i", String(Math.min(i, 8)));
    });
    el.setAttribute("data-reveal", "out");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.setAttribute("data-reveal", "in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // @ts-expect-error -- one ref type across the four allowed tags
  return <Tag ref={ref} className={className}>{children}</Tag>;
}
