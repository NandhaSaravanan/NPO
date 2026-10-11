import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { intro, difference, eligibility, process, timeline, needs, faq, applyIntro, applicationForm } from "@content/nonprofits";
import { PageHeader, SectionHeading } from "@/components/Section";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Steps } from "@/components/Steps";
import { ServiceArea } from "@/components/ServiceArea";
import { Faq } from "@/components/Faq";
import { Form } from "@/components/Form";
import { Reveal } from "@/components/Reveal";

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

      <section className="section" aria-labelledby="different">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading id="different" title={difference.title} body={difference.body} />
          <ul className="space-y-6">
            {difference.points.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 80} className="border-l-4 border-accent-400 pl-5">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-muted">{p.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-accent-50" aria-labelledby="eligible">
        <div className="container-page">
          <SectionHeading id="eligible" title={eligibility.title} body={eligibility.body} />
          <FeatureGrid items={eligibility.criteria} />
          <h3 className="mt-14 mb-6 text-2xl font-semibold">{eligibility.areaTitle}</h3>
          <ServiceArea />
          <p className="mt-8 max-w-2xl text-muted">{eligibility.note}</p>
        </div>
      </section>

      <section className="section bg-cream" aria-labelledby="process">
        <div className="container-page">
          <SectionHeading id="process" title={process.title} />
          <Steps steps={process.steps} />
        </div>
      </section>

      <section className="section" aria-labelledby="timeline">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="timeline" title={timeline.title} body={timeline.body} />
          </div>
          <Reveal>
            <dl className="card divide-y divide-line">
              {timeline.items.map((i) => (
                <div key={i.label} className="flex items-center justify-between gap-4 p-5">
                  <dt className="text-muted">{i.label}</dt>
                  <dd className="text-right font-semibold">{i.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section bg-accent-50" aria-labelledby="needs">
        <div className="container-page">
          <SectionHeading id="needs" title={needs.title} body={needs.body} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {needs.items.map((n, i) => (
              <li key={n.title}>
                <Reveal delay={(i % 2) * 80} className="card h-full p-6">
                  <h3 className="text-xl font-semibold">{n.title}</h3>
                  <p className="mt-2 text-muted">{n.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="faq">
        <div className="container-page max-w-4xl">
          <SectionHeading id="faq" title="Frequently asked questions" />
          <div className="mt-8"><Faq items={faq} /></div>
        </div>
      </section>

      <section id="apply" className="section bg-cream" aria-labelledby="apply-title">
        <div className="container-page max-w-3xl">
          <SectionHeading id="apply-title" title={applyIntro.title} body={applyIntro.body} />
          <div className="mt-8"><Form form={applicationForm} /></div>
        </div>
      </section>
    </>
  );
}
