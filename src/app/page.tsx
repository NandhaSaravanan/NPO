import Link from "next/link";
import { site } from "@content/site";
import { hero, whoWeHelp, howItWorks, whatYouGet, whyFree, roadmap, closing } from "@content/home";
import { ServiceArea } from "@/components/ServiceArea";
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
        <div className="container-page py-16 md:py-24">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold sm:text-5xl lg:text-6xl">{hero.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{hero.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={site.primaryCta.href} className="btn btn-primary">{site.primaryCta.label}</Link>
              <Link href={site.secondaryCta.href} className="btn btn-secondary">{site.secondaryCta.label}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="who">
        <div className="container-page">
          <SectionHeading id="who" title={whoWeHelp.title} body={whoWeHelp.body} />
          <p className="mt-6 max-w-2xl text-lg">{whoWeHelp.kinds}</p>
          <h3 className="mt-12 mb-6 text-2xl font-semibold">{whoWeHelp.areaTitle}</h3>
          <ServiceArea />
          <p className="mt-8 max-w-2xl text-muted">{whoWeHelp.areaNote}</p>
        </div>
      </section>

      <section className="section bg-cream" aria-labelledby="how">
        <div className="container-page">
          <SectionHeading id="how" title={howItWorks.title} body={howItWorks.body} />
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
          <SectionHeading id="roadmap" title="What comes next" body="Websites first. We will add more only once those are done well." />
          <Roadmap items={roadmap} />
        </div>
      </section>

      <CtaBand title={closing.title} body={closing.body} />
    </>
  );
}
