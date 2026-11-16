import Link from "next/link";
import type { RoadmapItem } from "@content/types";
import { site } from "@content/site";

const label: Record<RoadmapItem["status"], string> = {
  now: "Available now",
  next: "Coming next",
  later: "Coming later",
};

/**
 * One real thing stated plainly and prominently, with the two future ideas as a quiet aside.
 * They are deliberately not matching boxes: only the first exists.
 *
 * "Available now" / "Coming next" used to sit as a small label above each heading. That is an
 * eyebrow, so each one now opens its own sentence instead, where it reads as information.
 */
export function Roadmap({
  items,
  asideTitle,
  asideBody,
}: {
  items: RoadmapItem[];
  asideTitle: string;
  asideBody: string;
}) {
  const [now, ...later] = items;
  return (
    <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr] lg:items-end lg:gap-20">
      <div className="rounded-ui bg-pine p-8 text-linen md:p-14">
        <h2 id="roadmap" className="text-xl md:text-2xl">{now.title}</h2>
        <p className="mt-6 max-w-xl text-lg">
          <span className="font-semibold">{label[now.status]}.</span> {now.detail}
        </p>
        <Link href={site.primaryCta.href} className="btn btn-primary mt-8">{site.primaryCta.label}</Link>
      </div>
      <aside aria-labelledby="headed">
        <h3 id="headed" className="text-lg">{asideTitle}</h3>
        <p className="mt-2 text-base">{asideBody}</p>
        <ul className="mt-6 space-y-3">
          {later.map((item) => (
            <li key={item.title} className="rounded-ui bg-[var(--fact-fill)] p-5">
              <p className="text-base font-semibold leading-snug">{item.title}</p>
              <p className="mt-1 text-base">
                <span className="font-semibold">{label[item.status]}.</span>{" "}
                {item.body.replace(/^Coming (next|later)\. /, "")}
              </p>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
