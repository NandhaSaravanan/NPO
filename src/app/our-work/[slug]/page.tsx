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

      <section className="section texture" aria-labelledby="preview">
        <div className="container-page">
          <p className="text-sm font-semibold text-cobalt-deep">{study.orgType}</p>
          <h2 id="preview" className="sr-only">Preview</h2>
          <div className="mt-6">
            <DemoPreview content={demo} />
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((t) => (
              <li key={t} className="rounded-ui border border-line px-2 py-0.5 text-sm font-semibold text-muted">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {study.breakdown && (
        <section className="section texture bg-linen" aria-labelledby="breakdown">
          <div className="container-page">
            <h2 id="breakdown" className="text-xl md:text-2xl">The breakdown</h2>
            <dl className="mt-8 grid gap-8 border-t-2 border-pine pt-8 md:grid-cols-3">
              <div>
                <dt className="font-semibold text-cobalt-deep">Who it&apos;s for</dt>
                <dd className="mt-2 text-muted">{study.breakdown.audience}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cobalt-deep">What it has to make easy</dt>
                <dd className="mt-2 text-muted">{study.breakdown.goal}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cobalt-deep">Pages</dt>
                <dd className="mt-2 text-muted">{study.breakdown.pages}</dd>
              </div>
            </dl>
          </div>
        </section>
      )}

      {study.decisions && (
        <section className="section texture" aria-labelledby="decisions">
          <div className="container-page">
            <h2 id="decisions" className="text-xl md:text-2xl">Design decisions</h2>
            <ol className="mt-8 grid gap-8 border-t-2 border-pine pt-8 md:grid-cols-3">
              {study.decisions.map((d, i) => (
                <li key={d.title}>
                  <span aria-hidden="true" className="text-3xl font-extrabold text-line">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-lg">{d.title}</h3>
                  <p className="mt-2 text-muted">{d.body}</p>
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
