import type { RoadmapItem } from "@content/types";

const label: Record<RoadmapItem["status"], string> = {
  now: "Available now",
  next: "Coming next",
  later: "Coming later",
};

/** A staircase: the nearer the phase, the larger it is set and the further left it sits. */
export function Roadmap({ items }: { items: RoadmapItem[] }) {
  return (
    <ol className="mt-10 space-y-6">
      {items.map((item) => {
        if (item.status === "now") {
          return (
            <li key={item.title} className="bg-pine p-7 text-paper md:p-12">
              <p className="font-display font-bold text-[#f1b8d0]">{label.now}</p>
              <h3 className="mt-2 max-w-2xl text-3xl md:text-5xl">{item.title}</h3>
              <p className="mt-4 max-w-xl text-lg text-mist">{item.body}</p>
            </li>
          );
        }
        const next = item.status === "next";
        return (
          <li key={item.title} className={`border-l-4 pl-6 ${next ? "border-catawba md:ml-16" : "border-line md:ml-32"}`}>
            <p className={`font-display font-bold ${next ? "text-catawba" : "text-muted"}`}>{label[item.status]}</p>
            <h3 className={`mt-1 ${next ? "text-2xl md:text-3xl" : "text-xl text-muted md:text-2xl"}`}>{item.title}</h3>
            <p className="mt-2 max-w-xl text-muted">{item.body}</p>
          </li>
        );
      })}
    </ol>
  );
}
