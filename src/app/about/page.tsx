import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { intro, mission, story, timeline, model, values, teamIntro, team } from "@content/about";
import { PageHeader, SectionHeading } from "@/components/Section";
import { RuledList } from "@/components/RuledList";
import { Timeline } from "@/components/Timeline";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { photos } from "@content/photos";
import { closing } from "@content/home";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Our mission, why a high school student started a group to build free websites for local nonprofits, and how our volunteer model works.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader title={intro.title} body={intro.body} />

      <section className="section" aria-labelledby="mission">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="mission" title={mission.title} />
          <div>
            <p className="text-xl leading-relaxed">{mission.body}</p>
            <div className="mt-8">
              <Photo photo={photos.charlotteWestSide} ratio="aspect-[16/9]" sizes="(min-width: 768px) 640px, 100vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper" aria-labelledby="story">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="story" title={story.title} />
          <div className="space-y-4 text-lg text-muted">
            {story.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="timeline">
        <div className="container-page">
          <SectionHeading id="timeline" title={timeline.title} body={timeline.body} />
          <Timeline entries={timeline.entries} />
        </div>
      </section>

      <section className="section bg-paper" aria-labelledby="model">
        <div className="container-page">
          <SectionHeading id="model" title={model.title} body={model.body} />
          <ol className="mt-10 grid border-t-2 border-pine md:grid-cols-3">
            {model.points.map((p, i) => (
              <li key={p.title} className="border-b border-line py-6 md:border-b-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0">
                <span aria-hidden="true" className="font-display text-5xl font-extrabold text-myrtle">{i + 1}</span>
                <h3 className="mt-2 text-xl">{p.title}</h3>
                <p className="mt-2 text-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="values">
        <div className="container-page">
          <SectionHeading id="values" title="What we value" />
          <RuledList items={values} className="mt-10" />
        </div>
      </section>

      <section className="section bg-paper" aria-labelledby="team">
        <div className="container-page">
          <SectionHeading id="team" title={teamIntro.title} body={teamIntro.body} />
          <div className="mt-10 border-t-2 border-pine">
            {team.map((m) => (
              <div key={`${m.name}-${m.role}`} className="grid gap-x-10 gap-y-1 border-b border-line py-6 md:grid-cols-[minmax(0,15rem)_1fr]">
                <div>
                  <h3 className="text-xl">{m.name}</h3>
                  <p className="font-display font-bold text-catawba">{m.role}</p>
                </div>
                <p className="max-w-prose text-muted">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={closing.title} body={closing.body} />
    </>
  );
}
