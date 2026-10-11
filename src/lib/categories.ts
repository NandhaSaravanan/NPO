import type { CaseStudy } from "@content/types";

/** One color per kind of organization, shared by project cards and the "Who we help" chips. */
export const categoryAccent: Record<CaseStudy["category"], string> = {
  food: "var(--color-brick)",
  youth: "var(--color-catawba)",
  animals: "var(--color-evergreen)",
  community: "var(--color-moss)",
};
