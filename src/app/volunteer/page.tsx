import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { intro, roles, gains, commitment, faq, joinIntro, volunteerForm } from "@content/volunteer";
import { PageHeader, SectionHeading } from "@/components/Section";
import { RuledList } from "@/components/RuledList";
import { Faq } from "@/components/Faq";
import { Form } from "@/components/Form";

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
          <div className="mt-10 border-t-2 border-pine">
            {roles.map((r) => (
              <div key={r.title} className="grid gap-x-10 gap-y-1 border-b border-line py-6 md:grid-cols-[minmax(0,15rem)_1fr]">
                <h3 className="text-xl">{r.title}</h3>
                <div className="max-w-prose">
                  <p className="text-muted">{r.summary}</p>
                  <p className="mt-2 font-display font-bold text-catawba">{r.skills.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper" aria-labelledby="gain">
        <div className="container-page">
          <SectionHeading id="gain" title={gains.title} />
          <RuledList items={gains.items} className="mt-10" />
        </div>
      </section>

      <section className="section" aria-labelledby="commit">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading id="commit" title={commitment.title} body={commitment.body} />
          <ul className="border-t-2 border-pine">
            {commitment.items.map((c) => (
              <li key={c} className="border-b border-line py-4">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-paper" aria-labelledby="vfaq">
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
