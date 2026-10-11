import type { CaseStudy } from "./types";

export const intro = {
  title: "Our work",
  body: "We have no finished projects yet. The first card shows how each one will be written up, and the last is the spot waiting for your organization.",
};

/**
 * To add a real project: copy the entry, set `status`, fill in the text, add `image`,
 * and set `url` once the site is public. Delete the sample entry when the first real one is in.
 * Do not add numbers or results that are not true.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "sample-food-pantry",
    title: "Sample: A food pantry's first real website",
    orgType: "Food pantry (example, not a real client)",
    summary: "A sample showing the format: what the organization needed, what we built, and what changed once it was live.",
    status: "sample",
    tags: ["Website", "Donation page", "Training"],
  },
];

export const nextInLine = {
  title: "Next in line: your organization",
  body: "Apply and you could be the first real project on this page.",
  cta: { label: "Apply for a free website", href: "/nonprofits#apply" },
};

export const cta = {
  title: "Want to be our first case study?",
  body: "We are taking on our first projects now. Apply and help us show what a good local nonprofit website looks like.",
};
