import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { intro, caseStudies, cta } from "@content/work";
import { PageHeader } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "Our work",
  description: "Case studies of websites we have built for local nonprofits in Union County and the Charlotte area.",
  path: "/our-work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader title={intro.title} body={intro.body} />
      <section className="section" aria-label="Case studies">
        <div className="container-page">
          <ul className="border-t-2 border-pine">
            {caseStudies.map((c) => (
              <li key={c.slug} className="grid gap-x-10 gap-y-3 border-b border-line py-8 md:grid-cols-[minmax(0,15rem)_1fr]">
                <div>
                  <p className="font-display font-bold text-catawba">{c.orgType}</p>
                  {c.placeholder && <p className="mt-1 text-muted">Example, not a real project</p>}
                </div>
                <div className="max-w-prose">
                  <h2 className="text-2xl">{c.title}</h2>
                  {c.image && (
                    <Image src={c.image.src} alt={c.image.alt} width={c.image.width} height={c.image.height} className="mt-4 h-auto w-full" sizes="(min-width: 768px) 40rem, 100vw" />
                  )}
                  <p className="mt-3 text-muted">{c.summary}</p>
                  <p className="mt-3 font-display font-bold">{c.services.join(" / ")}</p>
                  {c.results && (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
                      {c.results.map((r) => <li key={r}>{r}</li>)}
                    </ul>
                  )}
                  {c.url && (
                    <a href={c.url} className="mt-4 inline-block font-semibold underline decoration-myrtle decoration-2 underline-offset-4" target="_blank" rel="noopener noreferrer">
                      Visit the site<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
