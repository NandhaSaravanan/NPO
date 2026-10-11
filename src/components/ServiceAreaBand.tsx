import { site } from "@content/site";
import { photos } from "@content/photos";
import { PhotoBand } from "./PhotoBand";

/**
 * One plain statement of where we work, over the Charlotte skyline. The towns and neighborhoods stay as a
 * plain line because the eligibility list points to them.
 */
export function ServiceAreaBand({ title, note }: { title: string; note: string }) {
  const { unionCounty, charlotte } = site.serviceArea;
  const list = (names: string[]) => names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
  return (
    <PhotoBand photo={photos.charlotteWestSide} labelledBy="service-area" overlay={{ from: 0.86, mid: 0.66, to: 0.1 }} padding="py-20 md:py-32">
      <h2 id="service-area" className="text-lg text-mist md:text-xl">{title}</h2>
      <p className="mt-4 max-w-3xl font-display text-2xl font-bold md:text-4xl">{site.serviceStatement}</p>
      <p className="mt-8 max-w-2xl text-base text-mist">
        {list(unionCounty)} in Union County. {list(charlotte)} in Charlotte.
      </p>
      <p className="mt-3 max-w-2xl text-mist">{note}</p>
    </PhotoBand>
  );
}
