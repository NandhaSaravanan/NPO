import { site } from "@content/site";

/**
 * Two stretches of one line: the Union County towns, then the Charlotte
 * neighborhoods. A schematic of who we can visit, not a map, so the order
 * and spacing carry no geographic meaning.
 */
export function ServiceArea() {
  const { unionCounty, charlotte } = site.serviceArea;
  return (
    <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
      <Stretch name="Union County" places={unionCounty} />
      <Stretch name="Charlotte" places={charlotte} />
    </div>
  );
}

function Stretch({ name, places }: { name: string; places: string[] }) {
  return (
    <section aria-label={name}>
      <h3 className="text-xl font-semibold text-accent-800">{name}</h3>
      <ul className="relative mt-3 ml-1.5 border-l-2 border-dashed border-accent-400 pl-7">
        {places.map((place) => (
          <li key={place} className="relative py-1.5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            <span aria-hidden="true" className="absolute -left-[2.3125rem] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-ink bg-accent-300" />
            {place}
          </li>
        ))}
      </ul>
    </section>
  );
}
