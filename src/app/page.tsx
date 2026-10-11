import Link from "next/link";
import { site } from "@content/site";
import { hero, whoWeHelp, howItWorks, whatYouGet, whyFree, roadmap, closing } from "@content/home";
import { ServiceAreaBand } from "@/components/ServiceAreaBand";
import { SectionHeading } from "@/components/Section";
import { Steps } from "@/components/Steps";
import { HairlineList } from "@/components/HairlineList";
import { Roadmap } from "@/components/Roadmap";
import { CtaBand } from "@/components/CtaBand";
import { categoryAccent } from "@/lib/categories";
import { Photo } from "@/components/Photo";
import { photos } from "@content/photos";

export default function Home() {
  return (
    <>
      <section className="texture">
        <div className="container-page pt-16 pb-12 md:pt-24 md:pb-16">
          <div>
            <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl">{hero.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{hero.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={site.primaryCta.href} className="btn btn-primary">{site.primaryCta.label}</Link>
              <Link href={site.secondaryCta.href} className="btn btn-secondary">{site.secondaryCta.label}</Link>
            </div>
          </div>
          <div className="mt-12 md:mt-16">
            <Photo photo={photos.uptownRailYard} ratio="aspect-[4/3] md:aspect-[21/9]" sizes="(min-width: 1152px) 1088px, 100vw" priority />
          </div>
        </div>
      </section>

      <section className="section texture bg-paper" aria-labelledby="who">
        <div className="container-page">
          <SectionHeading id="who" title={whoWeHelp.title} body={whoWeHelp.body} />
          <ul className="mt-8 flex flex-wrap gap-3">
            {whoWeHelp.groups.map((g) => (
              <li
                key={g.label}
                className="rounded-ui px-4 py-2 font-display text-lg font-bold text-paper"
                style={{ background: categoryAccent[g.category] }}
              >
                {g.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceAreaBand title={whoWeHelp.areaTitle} note={whoWeHelp.areaNote} />

      <section className="section texture" aria-labelledby="how">
        <div className="container-page">
          <SectionHeading id="how" title={howItWorks.title} body={howItWorks.body} />
          <Steps steps={howItWorks.steps} />
        </div>
      </section>

      <section className="section texture bg-paper" aria-labelledby="get">
        <div className="container-page">
          <SectionHeading id="get" title={whatYouGet.title} body={whatYouGet.body} />
          <HairlineList items={whatYouGet.items} className="mt-8" />
        </div>
      </section>

      <section className="section texture" aria-labelledby="free">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div>
            <h2 id="free" className="text-3xl md:text-4xl">{whyFree.title}</h2>
          </div>
          <div className="prose-plain space-y-4 text-lg text-muted">
            {whyFree.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="section texture bg-paper" aria-labelledby="roadmap">
        <div className="container-page">
          <Roadmap items={roadmap} asideTitle="What comes next" asideBody="Websites first. We will add more only once those are done well." />
        </div>
      </section>

      <CtaBand title={closing.title} body={closing.body} />
    </>
  );
}
