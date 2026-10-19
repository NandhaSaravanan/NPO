import Link from "next/link";
import { foodPantryDemo } from "@content/work";
import { DemoPreview } from "./DemoPreview";

/**
 * A labeled concept preview standing in for a real client project: we have none yet (see
 * /our-work, which shows the same food-pantry demo as its first card), so this demonstrates
 * the kind of site Lumen builds rather than claiming one. The same mini-site renders at two
 * sizes to show it's one responsive build, not two images.
 */
export function ConceptPreview() {
  return (
    <figure>
      <DemoPreview content={foodPantryDemo} />
      <figcaption className="mt-4 text-sm text-sage sm:max-w-[70%]">
        Concept preview for a Union County nonprofit — not a real client site. See{" "}
        <Link href="/our-work" className="link">our actual projects</Link> as they launch.
      </figcaption>
    </figure>
  );
}
