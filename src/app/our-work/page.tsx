import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { intro, caseStudies, nextInLine, cta } from "@content/work";
import { PageHeader, SectionHeading } from "@/components/Section";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "Our work",
  description: "How we write up each free nonprofit website we build in Union County and Charlotte. We are taking on our first projects.",
  path: "/our-work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader title={intro.title} body={intro.body} />
      <section className="section texture bg-linen" aria-labelledby="compare">
        <div className="container-page max-w-3xl">
          <SectionHeading id="compare" title="See the difference" body="What changes when a nonprofit's site gets rebuilt — not described, shown." />
          <div className="mt-8">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>
      <section className="section texture" aria-label="Case studies">
        <div className="container-page">
          <ProjectCarousel items={caseStudies} next={nextInLine} />
        </div>
      </section>
      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
