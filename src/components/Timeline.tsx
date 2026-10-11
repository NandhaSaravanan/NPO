import type { TimelineEntry } from "@content/types";

/** A vertical rail of dated events. Entries without a confirmed date are shown plainly as TBD or not yet. */
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="mt-10 max-w-3xl">
      {entries.map((e, i) => {
        const done = e.status === "done";
        return (
          <li key={e.title} className="relative grid gap-x-8 gap-y-1 pb-10 last:pb-0 md:grid-cols-[11rem_1fr]">
            <p className={`pl-8 font-display font-bold md:pl-0 md:pt-1 md:text-right ${done ? "text-catawba" : "text-muted"}`}>{e.when}</p>
            <div className="pl-8 md:pl-0">
              <h3 className="text-2xl">{e.title}</h3>
              <p className="mt-1 text-muted">{e.body}</p>
            </div>
            <span
              aria-hidden="true"
              className={`absolute left-0 top-2 h-3 w-3 rounded-full ring-4 ring-granite md:left-[11rem] md:ml-[calc(1rem-0.375rem)] ${
                done ? "bg-myrtle" : "border-2 border-dashed border-muted bg-granite"
              }`}
            />
            {i < entries.length - 1 && (
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-[0.3125rem] top-5 w-0.5 md:left-[11rem] md:ml-[calc(1rem-0.0625rem)] ${done ? "bg-catawba" : "border-l-2 border-dashed border-line"}`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
