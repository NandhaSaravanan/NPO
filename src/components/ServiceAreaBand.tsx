import Image from "next/image";
import { photos } from "@content/photos";
import { ServiceArea } from "./ServiceArea";

/** Full-bleed band: the Charlotte skyline, graded dark, behind the service-area diagram. */
export function ServiceAreaBand({ title, note }: { title: string; note: string }) {
  const photo = photos.charlotteWestSide;
  return (
    <section className="relative isolate overflow-hidden bg-pine text-paper" aria-labelledby="service-area">
      <Image src={photo.src} alt="" fill sizes="100vw" className="-z-20 object-cover saturate-[0.6]" />
      <div className="absolute inset-0 -z-10 bg-pine/[0.88]" aria-hidden="true" />
      <div className="container-page section">
        <h2 id="service-area" className="text-3xl md:text-4xl">{title}</h2>
        <div className="mt-10">
          <ServiceArea tone="dark" />
        </div>
        <p className="mt-8 max-w-2xl text-mist">{note}</p>
        <p className="mt-10 text-sm text-mist">
          Background photo by{" "}
          <a href={photo.photographerUrl} className="link">{photo.photographer}</a> on{" "}
          <a href="https://unsplash.com/?utm_source=lumen&utm_medium=referral" className="link">Unsplash</a>
        </p>
      </div>
    </section>
  );
}
