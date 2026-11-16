import Link from "next/link";
import Image from "next/image";
import { site } from "@content/site";
import { hero, aboutTeaser, whoWeHelp, howItWorks, trust, homeFaq, whyFree, roadmap, closing } from "@content/home";
import { offerIntro, tiers } from "@content/offer";
import { caseStudies } from "@content/work";
import { ServiceAreaBand } from "@/components/ServiceAreaBand";
import { SectionHeading } from "@/components/Section";
import { OfferTiers } from "@/components/OfferTiers";
import { FactList } from "@/components/FactList";
import { Faq } from "@/components/Faq";
import { Roadmap } from "@/components/Roadmap";
import { CtaBand } from "@/components/CtaBand";
import { NameYourSite } from "@/components/NameYourSite";
import { Stages } from "@/components/Stages";
import { Reveal } from "@/components/Reveal";
import { BrowserFrame } from "@/components/BrowserFrame";
import { MiniSite } from "@/components/MiniSite";
import { PhotoBand } from "@/components/PhotoBand";
import { photos } from "@content/photos";

const featuredWork = caseStudies.slice(0, 2);

/*
 * The homepage is a sequence of colour chapters. Each is a full-bleed flat field that butts
 * against its neighbour with a hard edge: nothing is drawn between two fields, and the
 * sequence climbs in luminance from the forest opening to the gold handoff:
 *
 *   forest → paper → mist → moss → paper → GOLD → paper → forest(photo) → paper → gold
 *
 * Neighbouring fields always differ clearly in lightness (forest 2 / moss 12 / gold 54 /
 * mist 78 / paper 90), which is the rule the old linen-against-granite pairing broke.
 */
export default function Home() {
  return (
    <>
      {/* Chapter 1 — forest. The opening, and the one live thing on the page. */}
      <section className="chapter-forest">
        <div className="container-page pb-20 pt-[calc(var(--nav-h)+3rem)] md:pb-28 md:pt-[calc(var(--nav-h)+4rem)]">
          {/*
            The title takes the full width above both columns. In the left column alone it fell
            to four lines at display size; across the page it lands on two at every width.
          */}
          <Reveal>
            <h1 className="max-w-[15ch] text-4xl">{hero.title}</h1>
          </Reveal>
          <div className="mt-12 grid gap-14 md:mt-16 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-20">
            <Reveal>
              <p className="max-w-xl text-lg text-linen">{hero.body}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href={site.primaryCta.href} className="btn btn-primary">{site.primaryCta.label}</Link>
                <Link href={hero.secondaryCta.href} className="btn btn-light">{hero.secondaryCta.label}</Link>
              </div>
              <p className="mt-8 max-w-sm text-sm text-sage">{hero.note}</p>
            </Reveal>
            <div className="lg:pl-4">
              <NameYourSite />
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2 — paper. The work. */}
      <section className="section chapter-paper" aria-labelledby="work">
        <div className="container-page">
          <Reveal><SectionHeading id="work" title="Selected work" body="No finished client projects yet — here's how we'd approach one for an organization like yours." /></Reveal>
          <Reveal className="mt-12 grid gap-12 md:grid-cols-2">
            {featuredWork.map((c) => (
              <div key={c.slug}>
                <BrowserFrame>
                  {c.demo && <MiniSite content={c.demo} />}
                </BrowserFrame>
                <h3 className="mt-6 text-lg font-extrabold">{c.title}</h3>
                <p className="mt-2 text-base">{c.summary}</p>
                <p className="mt-2 text-sm text-muted">{c.orgType}</p>
              </div>
            ))}
          </Reveal>
          <Link href="/our-work" className="link mt-10 inline-block text-base font-semibold">See all our work</Link>
        </div>
      </section>

      {/* Chapter 3 — mist. Who the work is for, as one statement. */}
      <section className="section chapter-mist" aria-labelledby="who">
        <div className="container-page">
          <Reveal>
          <h2 id="who" className="text-lg font-extrabold">{whoWeHelp.title}</h2>
          <p className="statement mt-6">
            {whoWeHelp.lead} {whoWeHelp.groups.join(", ")} — {whoWeHelp.trail}
          </p>
          </Reveal>
        </div>
      </section>

      {/* Chapter 4 — moss. Where. */}
      <ServiceAreaBand title={whoWeHelp.areaTitle} note={whoWeHelp.areaNote} />

      {/* Chapter 5 — paper. What you get. */}
      <section className="section chapter-paper" aria-labelledby="offer">
        <div className="container-page">
          <Reveal><SectionHeading id="offer" title={offerIntro.title} body={offerIntro.body} /></Reveal>
          <Reveal><OfferTiers tiers={tiers} compact /></Reveal>
          <Link href="/what-we-offer" className="link mt-10 inline-block text-base font-semibold">See what&apos;s included in each tier</Link>
        </div>
      </section>

      {/* Chapter 6 — GOLD. The surprise in the middle: the project laid out as real time. */}
      <section className="section chapter-gold" aria-labelledby="how">
        <div className="container-page">
          <Reveal>
            <h2 id="how" className="max-w-[14ch] text-2xl">{howItWorks.title}</h2>
            <p className="mt-5 max-w-xl text-lg font-medium">{howItWorks.body}</p>
          </Reveal>
          <Reveal><Stages steps={howItWorks.steps} /></Reveal>
          <Link href={howItWorks.cta.href} className="link mt-10 inline-block text-base font-semibold">{howItWorks.cta.label}</Link>
        </div>
      </section>

      {/* Chapter 7 — paper. The questions a stranger would ask. */}
      <section className="section chapter-paper" aria-labelledby="trust">
        <div className="container-page">
          <Reveal><SectionHeading id="trust" title={trust.title} body={trust.body} /></Reveal>
          <Reveal><FactList items={trust.points} className="mt-10" /></Reveal>
        </div>
      </section>

      {/* Chapter 8 — forest, carried by the photograph. */}
      <PhotoBand photo={photos.uptownNight} labelledBy="free" overlay={{ from: 0.55, mid: 0.6, to: 0.65 }} mobileOverlay={0.78} focus="center 18%">
        <Reveal className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
          <h2 id="free" className="text-2xl">{whyFree.title}</h2>
          <div className="prose-plain space-y-4 text-base font-medium text-linen">
            {whyFree.body.map((p) => <p key={p}>{p}</p>)}
            <Link href={whyFree.cta.href} className="link text-base font-semibold text-linen">{whyFree.cta.label}</Link>
          </div>
        </Reveal>
      </PhotoBand>

      {/* Chapter 9 — paper. Who runs it, what comes next, and the questions. */}
      <section className="section chapter-paper" aria-labelledby="about">
        <Reveal className="container-page grid gap-10 md:grid-cols-[1fr_1fr] md:items-start md:gap-16">
          <div>
            <h2 id="about" className="text-xl">{aboutTeaser.title}</h2>
            <p className="mt-6 max-w-[62ch] text-base">{aboutTeaser.body}</p>
            <Link href={aboutTeaser.cta.href} className="link mt-5 inline-block text-base font-semibold">{aboutTeaser.cta.label}</Link>
          </div>
          <figure>
            <Image
              src={photos.monroeSquare.src}
              alt={photos.monroeSquare.alt}
              width={photos.monroeSquare.width}
              height={photos.monroeSquare.height}
              sizes="(min-width: 768px) 44vw, 100vw"
              className="h-auto w-full rounded-ui"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-muted">
              The courthouse square in Monroe, the county seat. Photo by{" "}
              <a href={photos.monroeSquare.photographerUrl} className="link">{photos.monroeSquare.photographer}</a>, CC0.
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="section chapter-mist" aria-labelledby="roadmap">
        <div className="container-page">
          <Reveal><Roadmap items={roadmap} asideTitle="What comes next" asideBody="Websites first. We will add more only once those are done well." /></Reveal>
          <figure className="mt-16">
            <Image
              src={photos.courthousePostcard.src}
              alt={photos.courthousePostcard.alt}
              width={photos.courthousePostcard.width}
              height={photos.courthousePostcard.height}
              sizes="(min-width: 768px) 60vw, 100vw"
              className="h-auto w-full max-w-3xl rounded-ui"
              loading="lazy"
            />
            <figcaption className="mt-3 max-w-3xl text-sm text-muted">
              Monroe has been putting its own name on things for a while. A 1920s postcard of the
              Union County Court House, from the{" "}
              <a href={photos.courthousePostcard.photographerUrl} className="link">UNC Libraries</a> collection, public domain.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* The FAQ sets its own alternating bands, so it takes no section padding of its own. */}
      <section aria-labelledby="faq">
        <div className="chapter-paper">
          <div className="container-page pt-20 md:pt-28">
            <Reveal><h2 id="faq" className="max-w-[18ch] text-2xl">Questions before you get started</h2></Reveal>
          </div>
        </div>
        <Faq items={homeFaq} />
        <div className="chapter-paper">
          <div className="container-page pb-20 md:pb-28">
            <Link href="/nonprofits#faq" className="link inline-block text-base font-semibold">More questions, answered</Link>
          </div>
        </div>
      </section>

      {/* Chapter 10 — gold. The close: the lamp lit, the site in your name. */}
      <CtaBand title={closing.title} body={closing.body} />
    </>
  );
}
