import type { FaqItem } from "@content/types";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t-2 border-pine">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-line py-5">
          <summary className="faq-summary flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
            {item.question}
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-myrtle [transition:transform_var(--dur-ui)_var(--ease-ui)] group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="mt-3 max-w-3xl text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
