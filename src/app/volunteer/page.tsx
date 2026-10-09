import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { intro, roles, gains, commitment, faq, joinIntro, volunteerForm } from "@content/volunteer";
import { PageHeader, SectionHeading } from "@/components/Section";
import { FeatureGrid } from "@/components/FeatureGrid";
import { IconBadge } from "@/components/Icon";
import { Faq } from "@/components/Faq";
import { Form } from "@/components/Form";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = pageMetadata({
  title: "Volunteer",
  description: "Student developers, designers, writers and project leads: build real websites for local nonprofits, earn service hours and grow your portfolio.",
  path: "/volunteer",
});

export default function VolunteerPage() {
  return (
    <>
      <PageHeader title={intro.title} body={intro.body}>
        <Link href="#join" className="btn btn-primary">Sign up to volunteer</Link>
      </PageHeader>

      <section className="section" aria-labelledby="roles">
        <div className="container-page">
          <SectionHeading id="roles" title="Roles" body="Pick the one that fits, and tell us if you want to try something new." />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {roles.map((r, i) => (
              <li key={r.title}>
                <Reveal delay={(i % 2) * 80} className="card h-full p-6">
                  <IconBadge name={r.icon} />
                  <h3 className="mt-5 text-xl font-semibold">{r.title}</h3>
                  <p className="mt-2 text-muted">{r.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {r.skills.map((s) => (
                      <li key={s} className="rounded-full bg-accent-50 px-3 py-1 text-sm font-semibold text-accent-900">{s}</li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-cream" aria-labelledby="gain">
        <div className="container-page">
          <SectionHeading id="gain" title={gains.title} />
          <FeatureGrid items={gains.items} cols={4} />
        </div>
      </section>

      <section className="section" aria-labelledby="commit">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <SectionHeading id="commit" title={commitment.title} body={commitment.body} />
          <Reveal>
            <ul className="space-y-4">
              {commitment.items.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-1 text-accent-700"><Icon name="check" className="h-5 w-5" /></span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section bg-accent-50" aria-labelledby="vfaq">
        <div className="container-page max-w-4xl">
          <SectionHeading id="vfaq" title="Questions" />
          <div className="mt-8"><Faq items={faq} /></div>
        </div>
      </section>

      <section id="join" className="section" aria-labelledby="join-title">
        <div className="container-page max-w-3xl">
          <SectionHeading id="join-title" title={joinIntro.title} body={joinIntro.body} />
          <div className="mt-8"><Form form={volunteerForm} /></div>
        </div>
      </section>
    </>
  );
}
