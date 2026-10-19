import { site } from "@content/site";

/**
 * One plain statement of why we exist, on solid pine with the standard diagonal texture.
 * No photo: a motive statement carries its own weight, and a generic skyline shot only
 * undercut it. The towns and neighborhoods stay as a plain line because the eligibility
 * list points to them.
 */
export function ServiceAreaBand({ title, note }: { title: string; note: string }) {
  const { unionCounty, charlotte } = site.serviceArea;
  const list = (names: string[]) => names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
  return (
    <section className="texture-dark bg-pine text-paper" aria-labelledby="service-area">
      <div className="container-page py-20 md:py-28">
        <h2 id="service-area" className="text-lg text-mist md:text-xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-2xl font-extrabold md:text-4xl">{site.serviceStatement}</p>
        <p className="mt-8 max-w-2xl text-base font-medium text-mist">
          {list(unionCounty)} in Union County. {list(charlotte)} in Charlotte.
        </p>
        <p className="mt-3 max-w-2xl font-medium text-mist">{note}</p>
      </div>
    </section>
  );
}
