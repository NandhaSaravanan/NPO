import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { intro, roles, gains, commitment, faq, joinIntro, volunteerForm } from "@content/volunteer";
import { PageHeader, SectionHeading } from "@/components/Section";
import { HairlineList } from "@/components/HairlineList";
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

      <section className="section texture" aria-labelledby="roles">
        <div className="container-page">
          <SectionHeading id="roles" title="Roles" body="Pick the one that fits, and tell us if you want to try something new." />
          <HairlineList items={roles.map((r) => ({ title: r.title, body: r.summary, note: r.skills.join(", ") }))} className="mt-10" />
        </div>
      </section>

      <section className="section texture bg-linen" aria-labelledby="gain">
        <div className="container-page">
          <SectionHeading id="gain" title={gains.title} />
          <HairlineList items={gains.items} className="mt-10" />
        </div>
      </section>

      <section className="section texture" aria-labelledby="commit">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading id="commit" title={commitment.title} body={commitment.body} />
          <HairlineList items={commitment.items.map((c) => ({ body: c }))} />
        </div>
      </section>

      <section className="section texture bg-linen" aria-labelledby="vfaq">
        <div className="container-page max-w-4xl">
          <SectionHeading id="vfaq" title="Questions" />
          <div className="mt-8"><Faq items={faq} /></div>
        </div>
      </section>

      <section id="join" className="section texture" aria-labelledby="join-title">
        <div className="container-page max-w-3xl">
          <SectionHeading id="join-title" title={joinIntro.title} body={joinIntro.body} />
          <div className="mt-8"><Form form={volunteerForm} /></div>
        </div>
      </section>
    </>
  );
}
