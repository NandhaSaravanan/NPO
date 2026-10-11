import { site } from "@content/site";
import { ServiceMap } from "./ServiceMap";

/**
 * Where we can show up. Larger screens get an interactive schematic; phones get a plain list.
 * Either way it is a schematic, not a map, so order and spacing carry no geographic meaning.
 */
export function ServiceArea() {
  const { unionCounty, charlotte } = site.serviceArea;
  return (
    <>
      {/* Phones get the plain list: nothing here depends on hover. */}
      <div className="grid gap-x-16 gap-y-10 md:hidden">
        <Stretch name="Union County" places={unionCounty} />
        <Stretch name="Charlotte" places={charlotte} />
      </div>
      <ServiceMap className="hidden w-full md:block" />
    </>
  );
}

function Stretch({ name, places }: { name: string; places: string[] }) {
  return (
    <section aria-label={name}>
      <h3 className="text-xl font-semibold text-catawba">{name}</h3>
      <ul className="relative mt-3 ml-1.5 border-l-2 border-dashed border-catawba pl-7">
        {places.map((place) => (
          <li key={place} className="relative py-1.5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            <span aria-hidden="true" className="absolute -left-[2.3125rem] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-pine bg-granite" />
            {place}
          </li>
        ))}
      </ul>
    </section>
  );
}
