import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { intro, mission, story, model, values, teamIntro, team } from "@content/about";
import { PageHeader, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { closing } from "@content/home";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Our mission, why a high school student started a group to build free websites for local nonprofits, and how our volunteer model works.",
  path: "/about",
});

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title={intro.title} body={intro.body} />

      <section className="section" aria-labelledby="mission">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="mission" title={mission.title} />
          <Reveal><p className="text-xl leading-relaxed">{mission.body}</p></Reveal>
        </div>
      </section>

      <section className="section bg-cream" aria-labelledby="story">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="story" title={story.title} />
          <Reveal className="space-y-4 text-lg text-muted">
            {story.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="model">
        <div className="container-page">
          <SectionHeading id="model" title={model.title} body={model.body} />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {model.points.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 80} className="card h-full p-6">
                  <span aria-hidden="true" className="font-display text-4xl font-semibold text-accent-300">{i + 1}</span>
                  <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-accent-50" aria-labelledby="values">
        <div className="container-page">
          <SectionHeading id="values" title="What we value" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <li key={v.title}>
                <Reveal delay={(i % 2) * 80} className="h-full border-l-4 border-accent-400 bg-white p-6">
                  <h3 className="text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-muted">{v.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="team">
        <div className="container-page">
          <SectionHeading id="team" title={teamIntro.title} body={teamIntro.body} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <li key={`${m.name}-${m.role}`}>
                <Reveal delay={(i % 3) * 80} className={`card h-full p-6 ${m.placeholder ? "border-dashed" : ""}`}>
                  <span
                    aria-hidden="true"
                    className={`flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-semibold ${m.placeholder ? "bg-cream text-muted" : "bg-accent-400 text-ink"}`}
                  >
                    {m.placeholder ? "?" : initials(m.name)}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{m.name}</h3>
                  <p className="font-semibold text-accent-700">{m.role}</p>
                  <p className="mt-2 text-muted">{m.bio}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={closing.title} body={closing.body} />
    </>
  );
}
