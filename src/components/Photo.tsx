import Image from "next/image";
import type { Photo as PhotoData } from "@content/photos";

/** A photo with a small credit line. `ratio` crops the frame; the image covers it. */
export function Photo({
  photo,
  ratio,
  sizes,
  priority = false,
}: {
  photo: PhotoData;
  ratio: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className={`relative w-full overflow-hidden bg-mist ${ratio}`}>
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} className="object-cover saturate-[0.8]" />
        {/* Color grade: a pine tint so stock photos sit inside the palette instead of on top of it. */}
        <div className="pointer-events-none absolute inset-0 bg-pine/30 mix-blend-multiply" aria-hidden="true" />
      </div>
      <figcaption className="mt-2 text-sm text-muted">
        Photo by{" "}
        <a href={photo.photographerUrl} className="link">{photo.photographer}</a>
        {" "}on{" "}
        <a href="https://unsplash.com/?utm_source=lumen&utm_medium=referral" className="link">Unsplash</a>
      </figcaption>
    </figure>
  );
}
