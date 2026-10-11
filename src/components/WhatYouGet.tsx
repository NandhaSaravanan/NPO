import type { Feature } from "@content/types";

/**
 * Editorial spread: one lead item set large, the rest as quiet hanging entries.
 * Scale does the ranking, so there is no repeated card.
 */
export function WhatYouGet({ title, body, features }: { title: string; body: string; features: Feature[] }) {
  const [lead, ...rest] = features;
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <h2 id="get" className="text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-md text-lg text-muted">{body}</p>
      </div>
      <div>
        <h3 className="text-4xl text-catawba md:text-5xl">{lead.title}</h3>
        <p className="mt-4 max-w-xl text-xl">{lead.body}</p>
        <dl className="mt-12 border-t-2 border-pine">
          {rest.map((f) => (
            <div key={f.title} className="grid gap-x-8 gap-y-1 border-b border-line py-5 sm:grid-cols-[10rem_1fr]">
              <dt className="font-display text-lg font-bold">{f.title}</dt>
              <dd className="text-muted">{f.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
