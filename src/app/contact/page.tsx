import type { Metadata } from "next";
import { site } from "@content/site";
import { pageMetadata } from "@/lib/metadata";
import { intro, contactForm } from "@content/contact";
import { PageHeader } from "@/components/Section";
import { Form } from "@/components/Form";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Questions about free websites for nonprofits or volunteering? Send us a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader title={intro.title} body={intro.body} />
      <section className="section" aria-label="Contact form">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Form form={contactForm} />
          <aside className="space-y-6">
            <div className="card p-6">
              <span className="text-accent-700"><Icon name="mail" className="h-7 w-7" /></span>
              <h2 className="mt-3 text-xl font-semibold">Email us</h2>
              <p className="mt-2">
                <a href={`mailto:${site.email}`} className="font-semibold underline decoration-accent-500 underline-offset-4">{site.email}</a>
              </p>
            </div>
            <div className="card p-6">
              <span className="text-accent-700"><Icon name="compass" className="h-7 w-7" /></span>
              <h2 className="mt-3 text-xl font-semibold">Where we work</h2>
              <p className="mt-2 text-muted">{site.region}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
