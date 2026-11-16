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
 * The one list pattern for the whole site.
 *
 * This used to be a heavy top rule with a hairline under every row, which gave five
 * consecutive sections the same geometry and made the page read as a stack of tables. The
 * rules are gone: each row is now a filled tile one tone step off its field, separated by a
 * 6px gap. Rhythm comes from the fill and the space, never from a line.
 */
export function FactList({ items, className = "" }: { items: ListItem[]; className?: string }) {
  const blocks: { label?: string; items: ListItem[] }[] = [];
  for (const item of items) {
    const last = blocks[blocks.length - 1];
    if (item.group && last && last.label === item.group) last.items.push(item);
    else blocks.push({ label: item.group, items: [item] });
  }

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {blocks.map((block, i) =>
        block.label ? (
          <section key={`${block.label}-${i}`} aria-label={block.label} className="flex flex-col gap-1.5">
            <h3 className="mt-6 font-display text-lg font-extrabold first:mt-0">{block.label}</h3>
            {block.items.map((item) => (
              <Row key={item.title ?? item.body} item={item} />
            ))}
          </section>
        ) : (
          <Row key={`row-${i}`} item={block.items[0]} />
        ),
      )}
    </div>
  );
}

/**
 * One fact. `bg-fact` is set by the surrounding chapter (see globals.css) so the tile is
 * always one step off whatever field it sits on, on paper and on the dark chapters alike.
 */
function Row({ item }: { item: ListItem }) {
  return (
    <div
      className={`grid gap-x-10 gap-y-1 rounded-ui bg-[var(--fact-fill)] px-6 py-6 md:px-8 ${
        item.title ? "md:grid-cols-[minmax(0,15rem)_1fr]" : ""
      }`}
    >
      {item.title && (
        <div>
          <p className="font-display text-base font-extrabold leading-tight">{item.title}</p>
          {item.meta && <p className="mt-1 text-sm font-semibold">{item.meta}</p>}
        </div>
      )}
      <div className="max-w-[62ch]">
        <p className="text-base">{item.body}</p>
        {item.note && <p className="mt-2 text-sm font-semibold">{item.note}</p>}
      </div>
    </div>
  );
}
