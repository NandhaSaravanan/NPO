import type { MiniSiteContent } from "@content/types";
import { BrowserFrame, PhoneFrame } from "./BrowserFrame";
import { MiniSite } from "./MiniSite";

/**
 * The desktop-plus-phone mockup composition, factored out so the hero and the case-study
 * detail pages show the same kind of preview for any demo, not just the food pantry.
 */
export function DemoPreview({ content, className = "" }: { content: MiniSiteContent; className?: string }) {
  return (
    // Right padding reserves empty space for the phone frame, so it overlaps the gap, never the desktop content.
    <div className={`relative pb-6 sm:pb-14 sm:pr-24 md:pr-28 ${className}`}>
      <BrowserFrame className="shadow-lift">
        <MiniSite content={content} />
      </BrowserFrame>
      <PhoneFrame className="absolute bottom-0 right-0 hidden w-28 shadow-lift sm:block md:w-32">
        <MiniSite content={content} compact />
      </PhoneFrame>
    </div>
  );
}
