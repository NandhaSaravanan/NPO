import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { photos, type Photo } from "@content/photos";
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
        body="Three of these are openly licensed photographs of Union County itself. Two are Unsplash stock, standing in until we have our own. None of them shows a client's site, building or team."
      />
      <section className="section chapter-mist">
        <div className="container-page max-w-3xl">
          <ul className="flex flex-col gap-1.5">
            {(Object.values(photos) as Photo[]).map((p) => (
              <li key={p.src} className="rounded-ui bg-[var(--fact-fill)] px-5 py-4">
                <p className="text-base font-semibold">
                  <a href={p.sourceUrl} className="link">{p.alt.split(/[.,]/)[0]}</a> by{" "}
                  <a href={p.photographerUrl} className="link">{p.photographer}</a>
                </p>
                <p className="mt-1 text-base">
                  {/* The licence is a requirement for the share-alike pictures, not a courtesy. */}
                  {p.licence ? (
                    <>Licensed <a href={p.licence.url} className="link">{p.licence.label}</a>. </>
                  ) : (
                    <>Unsplash licence. </>
                  )}
                  Used on: {p.usedOn}.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
