import type { Metadata } from "next";
import { site } from "@content/site";
import { pageMetadata } from "@/lib/metadata";
import { intro, contactForm } from "@content/contact";
import { PageHeader } from "@/components/Section";
import { Form } from "@/components/Form";

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
          <aside className="space-y-8 lg:pt-2">
            <div>
              <h2 className="text-xl">Email us</h2>
              <p className="mt-2">
                <a href={`mailto:${site.email}`} className="link font-semibold">{site.email}</a>
              </p>
            </div>
            <div>
              <h2 className="text-xl">Where we work</h2>
              <p className="mt-2 text-muted">{site.region}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
