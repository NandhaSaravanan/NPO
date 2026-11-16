import type { Tier } from "@content/types";

/**
 * Scope tiers, not pricing tiers: every tier is free, so this must never read as a pricing
 * grid. Each tier takes its own flat field, growing darker as the scope grows, which carries
 * "each one builds on the last" without an index number or a rule. The old 01/02/03 column is
 * gone: order is shown by position and by the deepening colour.
 */
const FIELDS = [
  { field: "bg-granite text-pine", dot: "bg-pine" },
  { field: "bg-moss text-linen", dot: "bg-gold" },
  { field: "bg-pine text-linen", dot: "bg-gold" },
];

export function OfferTiers({ tiers, compact = false }: { tiers: Tier[]; compact?: boolean }) {
  return (
    <ol className="mt-10 flex flex-col gap-1.5">
      {tiers.map((tier, i) => {
        const look = FIELDS[i % FIELDS.length];
        return (
          <li key={tier.name} className={`rounded-ui p-7 md:p-10 ${look.field}`}>
            <div className={compact ? "md:flex md:items-baseline md:gap-8" : ""}>
              <h3 className="font-display text-xl font-extrabold leading-none">{tier.name}</h3>
              <p className="mt-2 text-lg font-semibold md:mt-0">{tier.tagline}</p>
            </div>
            {!compact && (
              <>
                <p className="mt-4 max-w-[62ch] text-base">{tier.bestFor}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-base">
                      <span aria-hidden="true" className={`mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full ${look.dot}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        );
      })}
    </ol>
  );
}
