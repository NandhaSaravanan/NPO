import Link from "next/link";
import { site } from "@content/site";
import { hero, whoWeHelp, howItWorks, whatYouGet, whyFree, roadmap, closing } from "@content/home";
import { HeroArt } from "@/components/Illustrations";
import { SectionHeading } from "@/components/Section";
import { Steps } from "@/components/Steps";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Roadmap } from "@/components/Roadmap";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div className="container-page grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow mb-4">{hero.eyebrow}</p>
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">{hero.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">{hero.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={site.primaryCta.href} className="btn btn-primary">{site.primaryCta.label}</Link>
              <Link href={site.secondaryCta.href} className="btn btn-secondary">{site.secondaryCta.label}</Link>
            </div>
          </div>
          <HeroArt className="mx-auto w-full max-w-md lg:max-w-none" />
        </div>
      </section>

      <section className="section" aria-labelledby="who">
        <div className="container-page">
          <SectionHeading id="who" title={whoWeHelp.title} body={whoWeHelp.body} />
          <Reveal>
            <ul className="mt-8 flex flex-wrap gap-3">
              {whoWeHelp.groups.map((g) => (
                <li key={g} className="rounded-full border border-line bg-white px-5 py-2.5 font-semibold shadow-sm">{g}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream" aria-labelledby="how">
        <div className="container-page">
          <SectionHeading id="how" eyebrow="The process" title={howItWorks.title} body={howItWorks.body} />
          <Steps steps={howItWorks.steps} />
        </div>
      </section>

      <section className="section" aria-labelledby="get">
        <div className="container-page">
          <SectionHeading id="get" title={whatYouGet.title} body={whatYouGet.body} />
          <FeatureGrid items={whatYouGet.features} />
        </div>
      </section>

      <section className="section bg-accent-50" aria-labelledby="free">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
          <Reveal>
            <h2 id="free" className="text-3xl font-semibold md:text-4xl">{whyFree.title}</h2>
          </Reveal>
          <Reveal className="prose-plain space-y-4 text-lg text-muted">
            {whyFree.body.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="roadmap">
        <div className="container-page">
          <SectionHeading id="roadmap" eyebrow="Where we are headed" title="What comes next" body="We are starting with websites and doing that well before we take on more." />
          <Roadmap items={roadmap} />
        </div>
      </section>

      <CtaBand title={closing.title} body={closing.body} />
    </>
  );
}
