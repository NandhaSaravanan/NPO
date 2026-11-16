import Link from "next/link";
import { site } from "@content/site";

/**
 * The close, on the gold field: the page opens dark and ends on the colour of the name.
 * Forest ink on gold measures 8.5:1, so both the heading and the outlined action stay legible
 * without a second accent.
 */
export function CtaBand({ title, body }: { title: string; body: string }) {
  return (
    <section className="chapter-gold" aria-labelledby="cta-title">
      <div className="container-page grid gap-10 py-24 md:py-32 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <h2 id="cta-title" className="max-w-[14ch] text-3xl">{title}</h2>
          <p className="mt-7 max-w-xl text-lg font-medium">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Link href={site.primaryCta.href} className="btn bg-pine text-linen hover:bg-pine-deep">{site.primaryCta.label}</Link>
          <Link href={site.secondaryCta.href} className="btn btn-secondary">{site.secondaryCta.label}</Link>
        </div>
      </div>
    </section>
  );
}
