import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { intro, difference, eligibility, process, timeline, needs, faq, applyIntro, applicationForm } from "@content/nonprofits";
import { PageHeader, SectionHeading } from "@/components/Section";
import { HairlineList } from "@/components/HairlineList";
import { Steps } from "@/components/Steps";
import { ServiceAreaBand } from "@/components/ServiceAreaBand";
import { Faq } from "@/components/Faq";
import { Form } from "@/components/Form";

export const metadata: Metadata = pageMetadata({
  title: "Free websites for nonprofits",
  description: "Apply for a free, professional website for your Union County or Charlotte-area nonprofit. See who is eligible, the process, timeline and FAQ.",
  path: "/nonprofits",
});

export default function NonprofitsPage() {
  return (
    <>
      <PageHeader title={intro.title} body={intro.body}>
        <Link href="#apply" className="btn btn-primary">Apply now</Link>
      </PageHeader>

      <section className="section texture" aria-labelledby="different">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHeading id="different" title={difference.title} body={difference.body} />
          <ul className="space-y-8">
            {difference.points.map((p) => (
              <li key={p.title} className="border-l-4 border-cobalt pl-5">
                <h3 className="text-lg">{p.title}</h3>
                <p className="mt-1 text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section texture bg-linen" aria-labelledby="eligible">
        <div className="container-page">
          <SectionHeading id="eligible" title={eligibility.title} body={eligibility.body} />
          <HairlineList items={eligibility.criteria} className="mt-8" />
        </div>
      </section>

      <ServiceAreaBand title={eligibility.areaTitle} note={eligibility.note} />

      <section className="section texture" aria-labelledby="process">
        <div className="container-page">
          <SectionHeading id="process" title={process.title} />
          <Steps steps={process.steps} />
        </div>
      </section>

      <section className="section texture bg-linen" aria-labelledby="timeline">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading id="timeline" title={timeline.title} body={timeline.body} />
          <HairlineList items={timeline.items.map((i) => ({ title: i.label, body: i.value }))} />
        </div>
      </section>

      <section className="section texture" aria-labelledby="needs">
        <div className="container-page">
          <SectionHeading id="needs" title={needs.title} body={needs.body} />
          <HairlineList items={needs.items} className="mt-8" />
        </div>
      </section>

      <section className="section texture bg-linen" aria-labelledby="faq">
        <div className="container-page max-w-4xl">
          <SectionHeading id="faq" title="Frequently asked questions" />
          <div className="mt-8"><Faq items={faq} /></div>
        </div>
      </section>

      <section id="apply" className="section texture" aria-labelledby="apply-title">
        <div className="container-page max-w-3xl">
          <SectionHeading id="apply-title" title={applyIntro.title} body={applyIntro.body} />
          <div className="mt-8"><Form form={applicationForm} /></div>
        </div>
      </section>
    </>
  );
}
