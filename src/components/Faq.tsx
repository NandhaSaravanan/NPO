import type { FaqItem } from "@content/types";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line rounded-[var(--radius-card)] border border-line bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-5 md:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-lg font-semibold [&::-webkit-details-marker]:hidden">
            {item.question}
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="mt-3 max-w-3xl text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
