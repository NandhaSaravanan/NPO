import type { FaqItem } from "@content/types";

/**
 * A band per question.
 *
 * Every question owns a full-bleed field, and the fields alternate between paper and mist so
 * the stack gets its rhythm from colour rather than from rules. Bands are as tall as their
 * content, so their heights differ. Every answer is visible: a page with four questions has
 * nothing to gain from hiding the answers behind toggles.
 */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={item.question} className={i % 2 === 0 ? "chapter-paper" : "chapter-mist"}>
          <div className="container-page grid gap-x-12 gap-y-3 py-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-14">
            <h3 className="text-lg font-extrabold">{item.question}</h3>
            <p className="max-w-[62ch] text-base">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
