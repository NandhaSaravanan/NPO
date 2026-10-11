"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CaseStudy, Cta } from "@content/types";
import { BrowserFrame, SampleLayout } from "./BrowserFrame";

const statusLabel: Record<CaseStudy["status"], string> = {
  sample: "Sample",
  "in-progress": "In progress",
  live: "Live",
};
const statusStyle: Record<CaseStudy["status"], string> = {
  sample: "border-pine text-pine",
  "in-progress": "border-catawba text-catawba",
  live: "border-pine bg-pine text-paper",
};

function CardBody({ c }: { c: CaseStudy }) {
  return (
    <>
      <div className="h-1.5 w-full" style={{ background: "var(--card-accent)" }} aria-hidden="true" />
      <div className="px-5 pt-5">
        <BrowserFrame>
          {c.image ? (
            <div className="relative aspect-[16/10] w-full">
              <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 640px) 26rem, 85vw" className="object-cover object-top" draggable={false} />
            </div>
          ) : (
            <SampleLayout />
          )}
        </BrowserFrame>
        {c.status === "sample" && !c.image && (
          <p className="mt-2 text-sm text-muted">Sample layout, not a real client</p>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <ul className="flex flex-wrap gap-2">
          <li className={`rounded-ui border px-2 py-0.5 text-sm font-bold ${statusStyle[c.status]}`}>{statusLabel[c.status]}</li>
          {c.tags.map((t) => (
            <li key={t} className="rounded-ui border border-line px-2 py-0.5 text-sm font-bold text-muted">{t}</li>
          ))}
        </ul>
        <h3 className="mt-4 text-lg">{c.title}</h3>
        <p className="mt-1 font-bold" style={{ color: "var(--card-accent)" }}>{c.orgType}</p>
        <p className="mt-3 text-muted">{c.summary}</p>
        {c.results && (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
            {c.results.map((r) => <li key={r}>{r}</li>)}
          </ul>
        )}
        {c.url && <p className="mt-auto pt-5 font-bold text-myrtle">View live site →</p>}
      </div>
    </>
  );
}

export function ProjectCarousel({ items, next }: { items: CaseStudy[]; next: { title: string; body: string; cta: Cta } }) {
  const track = useRef<HTMLUListElement>(null);
  const drag = useRef({ active: false, moved: false, startX: 0, startScroll: 0 });
  const [edges, setEdges] = useState({ start: true, end: true });
  const [dragging, setDragging] = useState(false);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const ro = new ResizeObserver(measure); // fires once on observe, which sets the initial state
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  function step(dir: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const by = (card?.getBoundingClientRect().width ?? el.clientWidth * 0.8) + 20;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * by, behavior: reduce ? "auto" : "smooth" });
  }

  // Touch and trackpads scroll natively. A mouse can also drag the row; snapping is off while dragging
  // and resumes on release, so the row settles on the nearest card.
  function onPointerDown(e: React.PointerEvent<HTMLUListElement>) {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = e.currentTarget;
    drag.current = { active: true, moved: false, startX: e.clientX, startScroll: el.scrollLeft };
  }
  function onPointerMove(e: React.PointerEvent<HTMLUListElement>) {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      setDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (d.moved) e.currentTarget.scrollLeft = d.startScroll - dx;
  }
  function endDrag() {
    drag.current.active = false;
    setDragging(false);
  }
  function onKeyDown(e: React.KeyboardEvent<HTMLUListElement>) {
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
  }

  const canScroll = !(edges.start && edges.end);

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Projects">
      <ul
        ref={track}
        tabIndex={0}
        onScroll={measure}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={onKeyDown}
        onDragStart={(e) => e.preventDefault()}
        onClickCapture={(e) => {
          if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); drag.current.moved = false; }
        }}
        className={`-mx-5 flex scroll-px-5 gap-5 overflow-x-auto px-5 pb-6 md:scroll-px-8 [scrollbar-width:none] md:-mx-8 md:px-8 [&::-webkit-scrollbar]:hidden ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab snap-x snap-mandatory"
        }`}
        aria-label="Project cards. Use the arrow keys or swipe."
      >
        {items.map((c) => (
          <li key={c.slug} className="flex w-[85%] shrink-0 snap-start sm:w-[26rem]">
            {c.url ? (
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="project-card flex w-full flex-col overflow-hidden" draggable={false}>
                <CardBody c={c} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <article className="project-card flex w-full flex-col overflow-hidden">
                <CardBody c={c} />
              </article>
            )}
          </li>
        ))}
        <li className="flex w-[85%] shrink-0 snap-start sm:w-[26rem]">
          <div className="flex w-full flex-col justify-between rounded-ui border-2 border-dashed border-pine p-6">
            <div>
              <h3 className="text-lg">{next.title}</h3>
              <p className="mt-3 text-muted">{next.body}</p>
            </div>
            <Link href={next.cta.href} className="btn btn-primary mt-8 self-start" draggable={false}>{next.cta.label}</Link>
          </div>
        </li>
      </ul>
      {canScroll && (
        <div className="mt-2 flex gap-3">
          <button type="button" onClick={() => step(-1)} disabled={edges.start} aria-label="Previous project" className="btn btn-secondary !min-h-10 !px-4 disabled:opacity-40 disabled:pointer-events-none">
            Previous
          </button>
          <button type="button" onClick={() => step(1)} disabled={edges.end} aria-label="Next project" className="btn btn-secondary !min-h-10 !px-4 disabled:opacity-40 disabled:pointer-events-none">
            Next
          </button>
        </div>
      )}
    </div>
  );
}
