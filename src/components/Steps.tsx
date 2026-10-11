import type { Step } from "@content/types";

/**
 * A rail with the time each stage takes. The list supplies the ordering
 * (screen readers announce "1 of 4"), so the page shows no second set of numbers.
 */
export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="mt-10 max-w-3xl">
      {steps.map((step, i) => (
        <li key={step.title} className="relative grid gap-x-8 gap-y-1 pb-10 last:pb-0 md:grid-cols-[11rem_1fr]">
          <p className="pl-8 font-bold text-catawba md:pl-0 md:pt-1 md:text-right">{step.when}</p>
          <div className="pl-8 md:pl-0">
            <h3 className="text-lg">{step.title}</h3>
            <p className="mt-1 text-muted">{step.body}</p>
          </div>
          <span
            aria-hidden="true"
            className="absolute left-0 top-2 h-3 w-3 rounded-full bg-myrtle ring-4 ring-granite md:left-[11rem] md:ml-[calc(1rem-0.375rem)]"
          />
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-[0.3125rem] top-5 w-0.5 bg-catawba md:left-[11rem] md:ml-[calc(1rem-0.0625rem)]"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
