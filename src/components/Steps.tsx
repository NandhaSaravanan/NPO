import type { Step } from "@content/types";
import { IconBadge } from "./Icon";
import { Reveal } from "./Reveal";

export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title}>
          <Reveal delay={i * 80} className="card h-full p-6">
            <div className="flex items-center justify-between">
              <IconBadge name={step.icon} />
              <span aria-hidden="true" className="font-display text-4xl font-semibold text-accent-300">{i + 1}</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold">
              <span className="sr-only">Step {i + 1}: </span>{step.title}
            </h3>
            <p className="mt-2 text-muted">{step.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
