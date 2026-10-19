import Link from "next/link";
import { BrowserFrame, PhoneFrame } from "./BrowserFrame";

/**
 * A labeled concept preview standing in for a real client project: we have none yet (see
 * /our-work), so this demonstrates the kind of site Lumen builds rather than claiming one.
 * The same mini-site renders at two sizes to show it's one responsive build, not two images.
 */
const programs = [
  { title: "Weekly pantry", body: "Fresh groceries every Saturday, no appointment needed." },
  { title: "Mobile stops", body: "A van bringing food to four neighborhoods each month." },
  { title: "Community garden", body: "Volunteer-grown produce, free to anyone who stops by." },
];

function MiniNav({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-2 border-b border-line bg-paper px-3 py-2.5 ${compact ? "text-[0.5rem]" : "text-[0.7rem]"}`}>
      <span className="flex items-center gap-1.5 font-extrabold text-pine">
        <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-myrtle" />
        Union County Food Pantry
      </span>
      {!compact && (
        <span className="hidden gap-3 font-semibold text-muted sm:flex">
          <span>Programs</span>
          <span>Volunteer</span>
          <span>Donate</span>
        </span>
      )}
    </div>
  );
}

function MiniHero({ compact = false }: { compact?: boolean }) {
  return (
    <div className="bg-pine px-3 py-5">
      <p className={`font-extrabold leading-tight text-paper ${compact ? "text-xs" : "text-base sm:text-lg"}`}>
        Feeding Union County, one neighbor at a time.
      </p>
      <p className={`mt-1.5 max-w-[14rem] text-mist ${compact ? "text-[0.5rem]" : "text-[0.65rem] sm:text-xs"}`}>
        Weekly distributions, mobile stops and a community garden, all in one place.
      </p>
      <span className={`mt-2.5 inline-block rounded-ui bg-myrtle font-semibold text-white ${compact ? "px-2 py-1 text-[0.5rem]" : "px-2.5 py-1.5 text-[0.65rem]"}`}>
        Donate now
      </span>
    </div>
  );
}

function MiniPrograms({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-2 bg-paper p-3 ${compact ? "grid-cols-1" : "grid-cols-3"}`}>
      {programs.map((p) => (
        <div key={p.title} className="rounded-ui bg-granite p-2">
          <p className={`font-bold text-pine ${compact ? "text-[0.55rem]" : "text-[0.65rem]"}`}>{p.title}</p>
          {!compact && <p className="mt-1 text-[0.6rem] text-muted">{p.body}</p>}
        </div>
      ))}
    </div>
  );
}

export function ConceptPreview() {
  return (
    <figure>
      {/* Right padding reserves empty space for the phone frame, so it overlaps the gap, never the desktop content. */}
      <div className="relative pb-6 sm:pb-14 sm:pr-24 md:pr-28">
        <BrowserFrame className="shadow-lift">
          <MiniNav />
          <MiniHero />
          <MiniPrograms />
        </BrowserFrame>
        <PhoneFrame className="absolute bottom-0 right-0 hidden w-28 shadow-lift sm:block md:w-32">
          <MiniNav compact />
          <MiniHero compact />
          <MiniPrograms compact />
        </PhoneFrame>
      </div>
      <figcaption className="mt-4 text-sm text-mist sm:max-w-[70%]">
        Concept preview for a Union County nonprofit — not a real client site. See{" "}
        <Link href="/our-work" className="link">our actual projects</Link> as they launch.
      </figcaption>
    </figure>
  );
}
