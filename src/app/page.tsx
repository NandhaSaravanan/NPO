import Link from "next/link";
import { site } from "@content/site";
import { hero, aboutTeaser, whoWeHelp, howItWorks, trust, homeFaq, whyFree, roadmap, closing } from "@content/home";
import { offerIntro, tiers } from "@content/offer";
import { caseStudies } from "@content/work";
import { ServiceAreaBand } from "@/components/ServiceAreaBand";
import { SectionHeading } from "@/components/Section";
import { OfferTiers } from "@/components/OfferTiers";
import { HairlineList } from "@/components/HairlineList";
import { Faq } from "@/components/Faq";
import { Roadmap } from "@/components/Roadmap";
import { CtaBand } from "@/components/CtaBand";
import { ConceptPreview } from "@/components/ConceptPreview";
import { BrowserFrame } from "@/components/BrowserFrame";
import { MiniSite } from "@/components/MiniSite";
import { PhotoBand } from "@/components/PhotoBand";
import { photos } from "@content/photos";

const featuredWork = caseStudies.slice(0, 2);

export default function Home() {
  return (
    <>
      <section className="texture-dark bg-pine text-paper">
        <div className="container-page pb-16 pt-[calc(var(--nav-h)+2.5rem)] md:pb-24 md:pt-[calc(var(--nav-h)+4.5rem)]">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
            <div>
              <h1 className="max-w-xl text-2xl sm:text-3xl lg:text-4xl">{hero.title}</h1>
              <p className="mt-6 max-w-xl text-base text-mist md:text-lg">{hero.body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={site.primaryCta.href} className="btn btn-primary">{site.primaryCta.label}</Link>
                <Link href={hero.secondaryCta.href} className="btn btn-light">{hero.secondaryCta.label}</Link>
              </div>
              <p className="mt-6 max-w-sm text-sm text-mist">{hero.note}</p>
            </div>
            <div className="lg:pl-4">
              <ConceptPreview />
            </div>
          </div>
        </div>
      </section>

      <section className="section texture bg-paper" aria-labelledby="work">
        <div className="container-page">
          <SectionHeading id="work" title="Selected work" body="We have no finished client projects yet. These concept demos show how we'd approach a real one, built with the same system we'd use for yours." />
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {featuredWork.map((c) => (
              <div key={c.slug}>
                <BrowserFrame className="shadow-card">
                  {c.demo && <MiniSite content={c.demo} />}
                </BrowserFrame>
                <p className="mt-3 text-sm font-semibold text-catawba">{c.orgType}</p>
                <h3 className="mt-1 text-lg">{c.title}</h3>
                <p className="mt-1 text-muted">{c.summary}</p>
              </div>
            ))}
          </div>
          <Link href="/our-work" className="link mt-8 inline-block font-semibold">See all our work</Link>
        </div>
      </section>

      <section className="section texture" aria-labelledby="who">
        <div className="container-page">
          <h2 id="who" className="text-lg text-muted md:text-xl">{whoWeHelp.title}</h2>
          <p className="mt-4 max-w-4xl text-2xl font-extrabold leading-snug text-pine md:text-4xl">
            {whoWeHelp.lead}{" "}
            {whoWeHelp.groups.map((g, i) => (
              <span key={g}>
                <span className="text-myrtle">{g}</span>
                {i === whoWeHelp.groups.length - 1 ? "" : i === whoWeHelp.groups.length - 2 ? ", and " : ", "}
              </span>
            ))}
            {" — "}
            {whoWeHelp.trail}
          </p>
        </div>
      </section>

      <ServiceAreaBand title={whoWeHelp.areaTitle} note={whoWeHelp.areaNote} />

      <section className="section texture bg-paper" aria-labelledby="offer">
        <div className="container-page">
          <SectionHeading id="offer" title={offerIntro.title} body={offerIntro.body} />
          <OfferTiers tiers={tiers} compact />
          <Link href="/what-we-offer" className="link mt-8 inline-block font-semibold">See what&apos;s included in each tier</Link>
        </div>
      </section>

      <section className="section texture" aria-labelledby="how">
        <div className="container-page">
          <SectionHeading id="how" title={howItWorks.title} body={howItWorks.body} />
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {howItWorks.steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-pine pt-4">
                <span aria-hidden="true" className="text-sm font-semibold text-catawba">{i + 1}</span>
                <p className="mt-1 text-lg font-semibold leading-tight">{step.title}</p>
              </li>
            ))}
          </ol>
          <Link href={howItWorks.cta.href} className="link mt-8 inline-block font-semibold">{howItWorks.cta.label}</Link>
        </div>
      </section>

      <section className="section bg-paper" aria-labelledby="trust">
        <div className="container-page">
          <SectionHeading id="trust" title={trust.title} body={trust.body} />
          <HairlineList items={trust.points} className="mt-8" />
          <Link href={trust.cta.href} className="link mt-8 inline-block font-semibold">{trust.cta.label}</Link>
        </div>
      </section>

      <PhotoBand photo={photos.uptownNight} labelledBy="free" overlay={{ from: 0.25, mid: 0.45, to: 0.6 }} mobileOverlay={0.8} focus="center 18%">
        <div className="grid gap-8 md:grid-cols-[1.25fr_1fr] md:items-start">
          <div>
            <h2 id="free" className="text-xl md:text-2xl">{whyFree.title}</h2>
          </div>
          <div className="prose-plain space-y-4 text-base font-medium text-mist">
            {whyFree.body.map((p) => <p key={p}>{p}</p>)}
            <Link href={whyFree.cta.href} className="link font-semibold text-paper">{whyFree.cta.label}</Link>
          </div>
        </div>
      </PhotoBand>

      <section className="section" aria-labelledby="about">
        <div className="container-page grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-start">
          <SectionHeading id="about" title={aboutTeaser.title} />
          <div>
            <p className="max-w-2xl text-base text-muted">{aboutTeaser.body}</p>
            <Link href={aboutTeaser.cta.href} className="link mt-4 inline-block font-semibold">{aboutTeaser.cta.label}</Link>
          </div>
        </div>
      </section>

      <section className="section texture bg-paper" aria-labelledby="roadmap">
        <div className="container-page">
          <Roadmap items={roadmap} asideTitle="What comes next" asideBody="Websites first. We will add more only once those are done well." />
        </div>
      </section>

      <section className="section" aria-labelledby="faq">
        <div className="container-page max-w-4xl">
          <SectionHeading id="faq" title="A few quick questions" />
          <div className="mt-8"><Faq items={homeFaq} /></div>
          <Link href="/nonprofits#faq" className="link mt-6 inline-block font-semibold">More questions, answered</Link>
        </div>
      </section>

      <CtaBand title={closing.title} body={closing.body} />
    </>
  );
}
