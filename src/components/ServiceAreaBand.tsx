import Image from "next/image";
import { site } from "@content/site";
import { photos } from "@content/photos";

/**
 * Full-bleed band: the Charlotte skyline, graded dark, with one plain statement of where we work.
 * The towns and neighborhoods stay as a plain line because the eligibility list points to them.
 */
export function ServiceAreaBand({ title, note }: { title: string; note: string }) {
  const photo = photos.charlotteWestSide;
  const { unionCounty, charlotte } = site.serviceArea;
  const list = (names: string[]) => names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
  return (
    <section className="relative isolate overflow-hidden bg-pine text-paper" aria-labelledby="service-area">
      <Image src={photo.src} alt="" fill sizes="100vw" className="-z-20 object-cover saturate-[0.7]" />
      <div className="absolute inset-0 -z-10 bg-pine/85 md:bg-transparent md:bg-gradient-to-r md:from-pine/95 md:via-pine/75 md:to-pine/35" aria-hidden="true" />
      <div className="container-page py-20 md:py-32">
        <h2 id="service-area" className="text-2xl text-mist md:text-3xl">{title}</h2>
        <p className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">{site.serviceStatement}</p>
        <p className="mt-8 max-w-2xl text-lg text-mist">
          {list(unionCounty)} in Union County. {list(charlotte)} in Charlotte.
        </p>
        <p className="mt-3 max-w-2xl text-mist">{note}</p>
        <p className="mt-12 text-sm text-mist">
          Background photo by <a href={photo.photographerUrl} className="link">{photo.photographer}</a> on{" "}
          <a href="https://unsplash.com/?utm_source=lumen&utm_medium=referral" className="link">Unsplash</a>
        </p>
      </div>
    </section>
  );
}
