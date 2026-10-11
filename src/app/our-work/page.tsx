import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { intro, caseStudies, nextInLine, cta } from "@content/work";
import { PageHeader } from "@/components/Section";
import { ProjectCarousel } from "@/components/ProjectCarousel";
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
      <section className="section" aria-label="Case studies">
        <div className="container-page">
          <ProjectCarousel items={caseStudies} next={nextInLine} />
        </div>
      </section>
      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
