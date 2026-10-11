import Link from "next/link";
import { site } from "@content/site";

export function CtaBand({ title, body }: { title: string; body: string }) {
  return (
    <section className="texture-dark bg-pine text-paper" aria-labelledby="cta-title">
      <div className="container-page grid gap-8 py-16 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <h2 id="cta-title" className="text-2xl md:text-4xl">{title}</h2>
          <p className="mt-5 max-w-xl text-base text-mist">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Link href={site.primaryCta.href} className="btn btn-primary">{site.primaryCta.label}</Link>
          <Link href={site.secondaryCta.href} className="btn btn-light">{site.secondaryCta.label}</Link>
        </div>
      </div>
    </section>
  );
}
