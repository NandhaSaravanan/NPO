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
      <div className="rounded-ui bg-pine p-8 text-paper shadow-card md:p-14">
        <p className="font-bold text-[#f1b8d0]">{label[now.status]}</p>
        <h2 id="roadmap" className="mt-3 text-2xl md:text-4xl">{now.title}</h2>
        <p className="mt-6 max-w-xl text-lg">{now.detail}</p>
        <Link href={site.primaryCta.href} className="btn btn-primary mt-8">{site.primaryCta.label}</Link>
      </div>
      <aside aria-labelledby="headed">
        <h3 id="headed" className="text-lg">{asideTitle}</h3>
        <p className="mt-2 text-muted">{asideBody}</p>
        <ul className="mt-6 space-y-5 border-l-2 border-line pl-5">
          {later.map((item) => (
            <li key={item.title}>
              <p className="text-sm font-bold text-muted">{label[item.status]}</p>
              <p className="text-base font-bold leading-snug">{item.title}</p>
              <p className="mt-1 text-muted">{item.body.replace(/^Coming (next|later)\. /, "")}</p>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
