import Image from "next/image";
import type { Photo } from "@content/photos";
/** Overlay strength, 0 to 1. A number is uniform. Stops run left to right on wide screens. */
export type Overlay = number | { from: number; mid: number; to: number };
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
  // One flat scrim, not a gradient: the house keeps hard edges, and a graded wash over a
  // photograph is the tell it exists to avoid. The strongest stop wins so text stays legible
  // across the whole band rather than only where the wash happened to be dark.
  const wideOpacity = typeof overlay === "number" ? overlay : Math.max(overlay.from, overlay.mid, overlay.to);
  return (
    <section className="relative isolate overflow-hidden bg-pine text-linen" aria-labelledby={labelledBy}>
      <Image src={photo.src} alt="" fill sizes="100vw" className="-z-20 object-cover" style={{ objectPosition: focus }} />
      <div className="absolute inset-0 -z-10 bg-pine md:hidden" style={{ opacity: solid }} aria-hidden="true" />
      <div className="absolute inset-0 -z-10 hidden bg-pine md:block" style={{ opacity: wideOpacity }} aria-hidden="true" />
      <div className={`container-page ${padding}`}>{children}</div>
      <p className="container-page pb-6 text-sm text-sage">
        <span className="rounded-ui bg-pine/75 px-2 py-0.5">
          Photo by <a href={photo.photographerUrl} className="link">{photo.photographer}</a>
          {photo.licence ? (
            <>, <a href={photo.licence.url} className="link">{photo.licence.label}</a></>
          ) : (
            <> on <a href="https://unsplash.com/?utm_source=lumen&utm_medium=referral" className="link">Unsplash</a></>
          )}
        </span>
      </p>
    </section>
  );
}
