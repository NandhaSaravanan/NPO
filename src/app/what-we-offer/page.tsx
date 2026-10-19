import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { offerIntro, offerClosing, tiers } from "@content/offer";
import { PageHeader, SectionHeading } from "@/components/Section";
import { OfferTiers } from "@/components/OfferTiers";
import { CtaBand } from "@/components/CtaBand";
import { closing } from "@content/home";

export const metadata: Metadata = pageMetadata({
  title: "What we offer",
  description: "Three free scope tiers for nonprofit websites, from a single page to a full multi-page site with training. No pricing, because none of it costs you anything.",
  path: "/what-we-offer",
});

export default function WhatWeOfferPage() {
  return (
    <>
      <PageHeader title={offerIntro.title} body={offerIntro.body} />
      <section className="section texture">
        <div className="container-page">
          <OfferTiers tiers={tiers} />
        </div>
      </section>
      <section className="section texture bg-linen" aria-labelledby="offer-closing">
        <div className="container-page max-w-2xl">
          <SectionHeading id="offer-closing" title={offerClosing.title} body={offerClosing.body} />
        </div>
      </section>
      <CtaBand title={closing.title} body={closing.body} />
    </>
  );
}
