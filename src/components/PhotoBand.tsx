import Image from "next/image";
import type { Photo } from "@content/photos";

/** Overlay strength, 0 to 1. A number is uniform. Stops run left to right on wide screens. */
export type Overlay = number | { from: number; mid: number; to: number };

const PINE = "23 63 53";

/**
 * A full-bleed section with a photo behind it. The photo keeps its own color: no saturation filter, only a
 * pine overlay where text needs it. Each instance sets its own overlay, because a bright photo and a dark
 * one need very different amounts to stay readable without washing the image out.
 * On phones the overlay is uniform at the strongest value, since text spans the full width there.
 */
export function PhotoBand({
  photo,
  labelledBy,
  overlay,
  padding = "section",
  focus = "center",
  mobileOverlay,
  children,
}: {
  photo: Photo;
  labelledBy?: string;
  overlay: Overlay;
  /** Classes for vertical padding on the content container. */
  padding?: string;
  /** CSS object-position: which part of the photo stays in view when the band is cropped. */
  focus?: string;
  /** Phone overlay. Defaults to the strongest wide-screen value; raise it when a bright photo sits behind full-width text. */
  mobileOverlay?: number;
  children: React.ReactNode;
}) {
  const solid = mobileOverlay ?? (typeof overlay === "number" ? overlay : Math.max(overlay.from, overlay.mid, overlay.to));
  const wide =
    typeof overlay === "number"
      ? `rgb(${PINE} / ${overlay})`
      : `linear-gradient(to right, rgb(${PINE} / ${overlay.from}) 0%, rgb(${PINE} / ${overlay.mid}) 55%, rgb(${PINE} / ${overlay.to}) 100%)`;
  return (
    <section className="relative isolate overflow-hidden bg-pine text-linen" aria-labelledby={labelledBy}>
      <Image src={photo.src} alt="" fill sizes="100vw" className="-z-20 object-cover" style={{ objectPosition: focus }} />
      <div className="absolute inset-0 -z-10 bg-pine md:hidden" style={{ opacity: solid }} aria-hidden="true" />
      <div className="absolute inset-0 -z-10 hidden md:block" style={{ background: wide }} aria-hidden="true" />
      <div className={`container-page ${padding}`}>{children}</div>
      <p className="container-page pb-6 text-sm text-sage">
        <span className="rounded-ui bg-pine/75 px-2 py-0.5">
          Background photo by <a href={photo.photographerUrl} className="link">{photo.photographer}</a> on{" "}
          <a href="https://unsplash.com/?utm_source=lumen&utm_medium=referral" className="link">Unsplash</a>
        </span>
      </p>
    </section>
  );
}
