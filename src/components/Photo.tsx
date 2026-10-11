import Image from "next/image";
import type { Photo as PhotoData } from "@content/photos";

/** A photo with a small credit line. `ratio` crops the frame. The photo is shown as shot: no filter, no tint. */
export function Photo({
  photo,
  ratio,
  sizes,
  priority = false,
  onDark = false,
}: {
  photo: PhotoData;
  ratio: string;
  sizes: string;
  priority?: boolean;
  /** Set when the photo sits on a dark section, so the credit line is light. */
  onDark?: boolean;
}) {
  return (
    <figure>
      <div className={`relative w-full overflow-hidden rounded-ui bg-mist shadow-card ${ratio}`}>
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      <figcaption className={`mt-2 text-sm ${onDark ? "text-mist" : "text-muted"}`}>
        Photo by{" "}
        <a href={photo.photographerUrl} className="link">{photo.photographer}</a>
        {" "}on{" "}
        <a href="https://unsplash.com/?utm_source=lumen&utm_medium=referral" className="link">Unsplash</a>
      </figcaption>
    </figure>
  );
}
