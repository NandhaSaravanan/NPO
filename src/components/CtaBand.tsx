import Image from "next/image";
import Link from "next/link";
import { site } from "@content/site";
import { photos } from "@content/photos";

export function CtaBand({ title, body }: { title: string; body: string }) {
  const photo = photos.uptownRailYard;
  return (
    <section className="relative isolate overflow-hidden bg-pine text-paper" aria-labelledby="cta-title">
      <Image src={photo.src} alt="" fill sizes="100vw" className="-z-20 object-cover saturate-[0.6]" />
      <div className="absolute inset-0 -z-10 bg-pine/[0.9]" aria-hidden="true" />
      <div className="container-page grid gap-8 py-16 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <h2 id="cta-title" className="text-4xl md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-lg text-mist">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Link href={site.primaryCta.href} className="btn btn-primary">{site.primaryCta.label}</Link>
          <Link href={site.secondaryCta.href} className="btn btn-light">{site.secondaryCta.label}</Link>
        </div>
      </div>
      <p className="container-page pb-6 text-sm text-mist">
        Background photo by <a href={photo.photographerUrl} className="link">{photo.photographer}</a> on{" "}
        <a href="https://unsplash.com/?utm_source=lumen&utm_medium=referral" className="link">Unsplash</a>
      </p>
    </section>
  );
}
