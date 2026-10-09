import Link from "next/link";
import { site } from "@content/site";
import { Reveal } from "./Reveal";

export function CtaBand({ title, body }: { title: string; body: string }) {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container-page">
        <Reveal>
          <div className="rounded-[2rem] bg-ink px-6 py-12 text-center text-paper md:px-16 md:py-16">
            <h2 id="cta-title" className="text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#e8e0cf]">{body}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={site.primaryCta.href} className="btn btn-primary">{site.primaryCta.label}</Link>
              <Link href={site.secondaryCta.href} className="btn border-2 border-paper text-paper hover:bg-paper hover:text-ink">
                {site.secondaryCta.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
