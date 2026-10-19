import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { intro, explainer, whatThisIsNot } from "@content/whyFree";
import { PageHeader, SectionHeading } from "@/components/Section";
import { HairlineList } from "@/components/HairlineList";
import { CtaBand } from "@/components/CtaBand";
import { closing } from "@content/home";

export const metadata: Metadata = pageMetadata({
  title: "Why free?",
  description: "There's no office, no payroll and no agency markup, so there's nothing to charge nonprofits for a website.",
  path: "/why-free",
});

export default function WhyFreePage() {
  return (
    <>
      <PageHeader title={intro.title} body={intro.body} />
      <section className="section texture">
        <div className="container-page max-w-2xl space-y-4 text-base text-muted">
          {explainer.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>
      <section className="section texture bg-linen" aria-labelledby="not">
        <div className="container-page">
          <SectionHeading id="not" title={whatThisIsNot.title} />
          <HairlineList items={whatThisIsNot.items} className="mt-8" />
        </div>
      </section>
      <CtaBand title={closing.title} body={closing.body} />
    </>
  );
}
