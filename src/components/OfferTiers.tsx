import type { Tier } from "@content/types";

/** Scope tiers, not pricing tiers: every tier is free, so the card shows what's included, never a cost. */
export function OfferTiers({ tiers, compact = false }: { tiers: Tier[]; compact?: boolean }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <div key={tier.name} className="card flex flex-col p-6 md:p-7">
          <h3 className="text-lg">{tier.name}</h3>
          <p className="mt-2 font-semibold text-catawba">{tier.tagline}</p>
          {!compact && (
            <>
              <p className="mt-3 text-sm text-muted">{tier.bestFor}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5 text-muted">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-myrtle" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
