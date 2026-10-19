import type { Tier } from "@content/types";

/**
 * Scope tiers, not pricing tiers: every tier is free, so this never reads as a pricing
 * grid. A stacked, numbered list instead of three equal cards, since each tier builds on
 * the last ("Everything in Starter...") rather than being an interchangeable option.
 */
export function OfferTiers({ tiers, compact = false }: { tiers: Tier[]; compact?: boolean }) {
  return (
    <ol className="mt-10 border-t-2 border-pine">
      {tiers.map((tier, i) => (
        <li key={tier.name} className="grid gap-x-8 gap-y-2 border-b border-line py-8 md:grid-cols-[4rem_1fr]">
          <span aria-hidden="true" className="text-3xl font-extrabold text-line md:text-4xl">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-lg">{tier.name}</h3>
            <p className="mt-1 font-semibold text-catawba">{tier.tagline}</p>
            {!compact && (
              <>
                <p className="mt-3 max-w-prose text-muted">{tier.bestFor}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-muted">
                      <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-myrtle" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
