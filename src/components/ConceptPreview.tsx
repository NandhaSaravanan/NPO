import Link from "next/link";
import { foodPantryDemo } from "@content/work";
import { BrowserFrame, PhoneFrame } from "./BrowserFrame";
import { MiniSite } from "./MiniSite";

/**
 * A labeled concept preview standing in for a real client project: we have none yet (see
 * /our-work, which shows the same food-pantry demo as its first card), so this demonstrates
 * the kind of site Lumen builds rather than claiming one. The same mini-site renders at two
 * sizes to show it's one responsive build, not two images.
 */
export function ConceptPreview() {
  return (
    <figure>
      {/* Right padding reserves empty space for the phone frame, so it overlaps the gap, never the desktop content. */}
      <div className="relative pb-6 sm:pb-14 sm:pr-24 md:pr-28">
        <BrowserFrame className="shadow-lift">
          <MiniSite content={foodPantryDemo} />
        </BrowserFrame>
        <PhoneFrame className="absolute bottom-0 right-0 hidden w-28 shadow-lift sm:block md:w-32">
          <MiniSite content={foodPantryDemo} compact />
        </PhoneFrame>
      </div>
      <figcaption className="mt-4 text-sm text-sage sm:max-w-[70%]">
        Concept preview for a Union County nonprofit — not a real client site. See{" "}
        <Link href="/our-work" className="link">our actual projects</Link> as they launch.
      </figcaption>
    </figure>
  );
}
