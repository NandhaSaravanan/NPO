export interface ListItem {
  title?: string;
  body: string;
  /** A short line under the title, such as a role. */
  meta?: string;
  /** A short line under the text, such as a skills list. */
  note?: string;
  /** Items that share a group sit under one small label. */
  group?: string;
}

/**
 * The one list pattern for the whole site: a heavy rule on top, hairlines between items, everything
 * left-aligned. Items with a `group` share a small sentence-case label; otherwise each row is
 * title on the left and text on the right. Items with no title run full width.
 */
export function HairlineList({ items, className = "" }: { items: ListItem[]; className?: string }) {
  const blocks: { label?: string; items: ListItem[] }[] = [];
  for (const item of items) {
    const last = blocks[blocks.length - 1];
    if (item.group && last && last.label === item.group) last.items.push(item);
    else blocks.push({ label: item.group, items: [item] });
  }

  return (
    <div className={`border-t-2 border-pine ${className}`}>
      {blocks.map((block, i) =>
        block.label ? (
          <section key={`${block.label}-${i}`} aria-label={block.label} className="grid gap-x-10 border-b border-line md:grid-cols-[minmax(0,15rem)_1fr]">
            <h3 className="pt-5 font-display text-base font-bold text-catawba md:pb-5">{block.label}</h3>
            <ul>
              {block.items.map((item) => (
                <li key={item.title ?? item.body} className="border-b border-line py-5 last:border-b-0">
                  {item.title && <p className="font-display text-lg font-bold leading-tight">{item.title}</p>}
                  {item.meta && <p className="font-display font-bold text-catawba">{item.meta}</p>}
                  <p className="mt-1 max-w-prose text-muted">{item.body}</p>
                  {item.note && <p className="mt-2 font-display font-bold text-catawba">{item.note}</p>}
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <FlatRow key={`row-${i}`} item={block.items[0]} />
        ),
      )}
    </div>
  );
}

function FlatRow({ item }: { item: ListItem }) {
  return (
    <div className={`grid gap-x-10 gap-y-1 border-b border-line py-5 ${item.title ? "md:grid-cols-[minmax(0,15rem)_1fr]" : ""}`}>
      {item.title && (
        <div>
          <p className="font-display text-lg font-bold leading-tight">{item.title}</p>
          {item.meta && <p className="font-display font-bold text-catawba">{item.meta}</p>}
        </div>
      )}
      <div className="max-w-prose">
        <p className="text-muted">{item.body}</p>
        {item.note && <p className="mt-2 font-display font-bold text-catawba">{item.note}</p>}
      </div>
    </div>
  );
}
