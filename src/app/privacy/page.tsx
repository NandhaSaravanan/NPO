import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { privacy } from "@content/legal";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "What information we collect through this website and how we use it.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <h1 className="text-4xl font-semibold md:text-5xl">{privacy.title}</h1>
        <p className="mt-3 text-muted">Last updated {privacy.updated}</p>
        {privacy.sections.map((s) => (
          <div key={s.heading} className="mt-10">
            <h2 className="text-2xl font-semibold">{s.heading}</h2>
            <div className="prose-plain mt-3 text-muted">
              {s.body.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
