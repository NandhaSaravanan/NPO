import type { Step } from "@content/types";

/**
 * The five stages as one bar.
 *
 * Each segment's width is the share of the real calendar this stage takes, so the reader sees
 * at a glance that the discovery call is a sliver and the build is most of the project. The
 * weights below are the midpoints of the durations in `content/home.ts`, in days — change the
 * copy there and change the weight here to match, or the diagram starts lying.
 */
const WEIGHTS: Record<string, number> = {
  Apply: 7,
  "Discovery call": 1,
  "Design review": 10,
  "Build and QA": 28,
  "Launch and handoff": 7,
};

/*
 * Each stage keeps its own flat field, light to dark, so the bar reads as a passage of time.
 * None of them may be gold: this bar sits on the gold chapter, and a gold segment vanishes
 * into its own ground.
 */
const FIELDS = [
  "bg-linen text-pine",
  "bg-granite text-pine",
  "bg-sage text-pine",
  "bg-moss text-linen",
  "bg-pine text-linen",
];

export function Stages({ steps }: { steps: Step[] }) {
  const total = steps.reduce((sum, s) => sum + (WEIGHTS[s.title] ?? 5), 0);

  return (
    <div className="mt-12">
      {/* Desktop: one horizontal bar whose segments are sized by how long each stage really takes. */}
      <ol className="hidden gap-1.5 lg:flex" style={{ height: "clamp(9rem, 20vh, 13rem)" }}>
        {steps.map((step, i) => {
          const weight = WEIGHTS[step.title] ?? 5;
          return (
            <li
              key={step.title}
              className={`flex min-w-0 flex-col justify-between rounded-ui p-5 ${FIELDS[i % FIELDS.length]}`}
              style={{ flex: `${Math.max(weight / total, 0.14)} 1 0%` }}
            >
              <p className="text-base font-semibold leading-tight">{step.when}</p>
              <p className="mt-4 font-display text-lg font-extrabold leading-none">{step.title}</p>
            </li>
          );
        })}
      </ol>

      {/* Phone: the same bar turned vertical, segment heights keeping the same proportions. */}
      <ol className="flex flex-col gap-1.5 lg:hidden">
        {steps.map((step, i) => {
          const weight = WEIGHTS[step.title] ?? 5;
          return (
            <li
              key={step.title}
              className={`flex flex-col justify-between rounded-ui p-4 ${FIELDS[i % FIELDS.length]}`}
              style={{ minHeight: `${Math.max(4.5, (weight / total) * 26)}rem` }}
            >
              <p className="text-base font-semibold">{step.when}</p>
              <p className="mt-6 font-display text-lg font-extrabold leading-tight">{step.title}</p>
            </li>
          );
        })}
      </ol>

      <ul className="mt-8 grid gap-x-8 gap-y-4 lg:grid-cols-5">
        {steps.map((step) => (
          <li key={step.title} className="max-w-[24ch]">
            <p className="text-sm">{step.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
