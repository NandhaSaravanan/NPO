import type { Feature } from "@content/types";
import { IconBadge } from "./Icon";
import { Reveal } from "./Reveal";

export function FeatureGrid({ items, cols = 3 }: { items: Feature[]; cols?: 2 | 3 | 4 }) {
  const grid = cols === 4 ? "lg:grid-cols-4" : cols === 2 ? "" : "lg:grid-cols-3";
  return (
    <ul className={`mt-10 grid gap-5 sm:grid-cols-2 ${grid}`}>
      {items.map((f, i) => (
        <li key={f.title}>
          <Reveal delay={(i % 3) * 80} className="card h-full p-6">
            <IconBadge name={f.icon} />
            <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-muted">{f.body}</p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
