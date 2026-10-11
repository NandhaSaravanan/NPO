import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@content/photos";
import { PageHeader } from "@/components/Section";

export const metadata: Metadata = pageMetadata({
  title: "Photo credits",
  description: "Who took the photographs on this site.",
  path: "/credits",
});

export default function CreditsPage() {
  return (
    <>
      <PageHeader
        title="Photo credits"
        body="The photographs here are stock images from Unsplash, standing in until we have our own. Thanks to the photographers."
      />
      <section className="section texture">
        <div className="container-page max-w-3xl">
          <ul className="border-t-2 border-pine">
            {Object.values(photos).map((p) => (
              <li key={p.src} className="border-b border-line py-5">
                <p className="text-base font-bold">
                  <a href={p.sourceUrl} className="link">Photo</a> by{" "}
                  <a href={p.photographerUrl} className="link">{p.photographer}</a>
                </p>
                <p className="mt-1 text-muted">Used on: {p.usedOn}.</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
