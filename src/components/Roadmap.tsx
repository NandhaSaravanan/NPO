import type { RoadmapItem } from "@content/types";
import { Reveal } from "./Reveal";

const badge: Record<RoadmapItem["status"], { label: string; cls: string }> = {
  now: { label: "Available now", cls: "bg-accent-400 text-ink" },
  next: { label: "Coming next", cls: "bg-accent-100 text-accent-900" },
  later: { label: "Coming later", cls: "bg-cream text-muted border border-line" },
};

export function Roadmap({ items }: { items: RoadmapItem[] }) {
  return (
    <ol className="mt-10 grid gap-5 md:grid-cols-3">
      {items.map((item, i) => (
        <li key={item.title}>
          <Reveal delay={i * 80} className={`card h-full p-6 ${item.status === "now" ? "ring-2 ring-accent-400" : ""}`}>
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${badge[item.status].cls}`}>
              {badge[item.status].label}
            </span>
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-muted">{item.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
