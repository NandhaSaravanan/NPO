import { site } from "@content/site";
import { photos } from "@content/photos";
import { PhotoBand } from "./PhotoBand";

/**
 * Where we can show up in person, carried by a photograph of the actual county line on NC 200.
 *
 * This section used to be a plain dark band with its text on the left and half the screen
 * empty. The picture is the argument here — "in person" means this road — so it fills the
 * field, and the towns list takes the second column so nothing is left hanging.
 */
export function ServiceAreaBand({ title, note }: { title: string; note: string }) {
  const { unionCounty, charlotte } = site.serviceArea;
  const list = (names: string[]) => names.slice(0, -1).join(", ") + " and " + names[names.length - 1];

  return (
    <PhotoBand
      photo={photos.countyLine}
      labelledBy="service-area"
      overlay={0.74}
      mobileOverlay={0.82}
      focus="center 55%"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
        <div>
          <h2 id="service-area" className="text-lg font-extrabold">{title}</h2>
          <p className="statement mt-6">{site.serviceStatement}</p>
        </div>
        <div className="lg:pt-14">
          <p className="max-w-2xl text-base font-medium">
            {list(unionCounty)} in Union County. {list(charlotte)} in Charlotte.
          </p>
          <p className="mt-4 max-w-2xl text-base font-medium text-sage">{note}</p>
        </div>
      </div>
    </PhotoBand>
  );
}
