import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { intro, caseStudies, cta } from "@content/work";
import { PageHeader } from "@/components/Section";
import { CardArt } from "@/components/Illustrations";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

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
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <li key={c.slug}>
                <Reveal delay={(i % 3) * 80} className="card flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[400/220] bg-cream">
                    {c.image ? (
                      <Image src={c.image.src} alt={c.image.alt} width={c.image.width} height={c.image.height} className="h-full w-full object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                    ) : (
                      <CardArt index={i} />
                    )}
                    {c.placeholder && (
                      <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-wider text-paper">
                        Placeholder
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow">{c.orgType}</p>
                    <h2 className="mt-2 text-xl font-semibold">{c.title}</h2>
                    <p className="mt-3 text-muted">{c.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {c.services.map((s) => (
                        <li key={s} className="rounded-full bg-accent-50 px-3 py-1 text-sm font-semibold text-accent-900">{s}</li>
                      ))}
                    </ul>
                    {c.results && (
                      <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
                        {c.results.map((r) => <li key={r}>{r}</li>)}
                      </ul>
                    )}
                    {c.url && (
                      <a href={c.url} className="mt-5 inline-block font-semibold underline decoration-accent-500 underline-offset-4" target="_blank" rel="noopener noreferrer">
                        Visit the site<span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    )}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
