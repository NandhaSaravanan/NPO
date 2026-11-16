import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { caseStudies, cta } from "@content/work";
import { PageHeader } from "@/components/Section";
import { DemoPreview } from "@/components/DemoPreview";
import { CtaBand } from "@/components/CtaBand";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return pageMetadata({ title: study.title, description: study.summary, path: `/our-work/${slug}` });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study || !study.demo) notFound();
  const { demo } = study;

  return (
    <>
      <PageHeader title={study.title} body={study.summary}>
        <Link href="/our-work" className="btn btn-secondary">← All work</Link>
      </PageHeader>

      <section className="section chapter-mist" aria-labelledby="preview">
        <div className="container-page">
          <p className="text-sm font-semibold text-pine">{study.orgType}</p>
          <h2 id="preview" className="sr-only">Preview</h2>
          <div className="mt-6">
            <DemoPreview content={demo} />
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((t) => (
              <li key={t} className="rounded-ui bg-granite px-2.5 py-1 text-sm font-semibold">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {study.breakdown && (
        <section className="section chapter-paper" aria-labelledby="breakdown">
          <div className="container-page">
            <h2 id="breakdown" className="text-xl md:text-2xl">The breakdown</h2>
            <dl className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <dt className="font-semibold text-pine">Who it&apos;s for</dt>
                <dd className="mt-2 text-muted">{study.breakdown.audience}</dd>
              </div>
              <div>
                <dt className="font-semibold text-pine">What it has to make easy</dt>
                <dd className="mt-2 text-muted">{study.breakdown.goal}</dd>
              </div>
              <div>
                <dt className="font-semibold text-pine">Pages</dt>
                <dd className="mt-2 text-muted">{study.breakdown.pages}</dd>
              </div>
            </dl>
          </div>
        </section>
      )}

      {study.decisions && (
        <section className="section chapter-mist" aria-labelledby="decisions">
          <div className="container-page">
            <h2 id="decisions" className="text-xl md:text-2xl">Design decisions</h2>
            <ol className="mt-8 grid gap-8 md:grid-cols-3">
              {study.decisions.map((d) => (
                <li key={d.title} className="rounded-ui bg-[var(--fact-fill)] p-6">
                  <h3 className="text-lg">{d.title}</h3>
                  <p className="mt-2 text-base">{d.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
