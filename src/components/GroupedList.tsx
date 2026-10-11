import type { Feature } from "@content/types";

/**
 * One continuous list: a heavy rule on top, hairlines between items, and a small bold label where
 * items share a group. Groups appear in the order their first item appears.
 */
export function GroupedList({ items, className = "" }: { items: Feature[]; className?: string }) {
  const groups: { label?: string; items: Feature[] }[] = [];
  for (const item of items) {
    const last = groups[groups.length - 1];
    if (last && last.label === item.group) last.items.push(item);
    else groups.push({ label: item.group, items: [item] });
  }
  return (
    <div className={`border-t-2 border-pine ${className}`}>
      {groups.map((g, gi) => (
        <section key={`${g.label}-${gi}`} aria-label={g.label} className="grid gap-x-10 border-b border-line md:grid-cols-[minmax(0,15rem)_1fr]">
          <h3 className="pt-5 font-display text-lg font-bold text-catawba md:pb-5">{g.label}</h3>
          <ul>
            {g.items.map((item) => (
              <li key={item.title} className="border-b border-line py-5 last:border-b-0">
                <p className="font-display text-xl font-bold leading-tight">{item.title}</p>
                <p className="mt-1 max-w-prose text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
