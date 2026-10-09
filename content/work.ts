import type { CaseStudy } from "./types";

export const intro = {
  title: "Our work",
  body: "Case studies from the organizations we have helped. We are just getting started, so the cards below are examples of the format. Real projects will replace them as we launch.",
};

/**
 * To add a real project, copy an entry, fill it in, and delete the
 * `placeholder: true` line. Remove example cards once you have real ones.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "example-food-pantry",
    title: "Example: Community food pantry",
    orgType: "Food pantry",
    summary: "A sample case study showing how we will describe the problem, what we built and what changed for a food pantry once its site was live.",
    services: ["Design", "Development", "Donation page", "Training"],
    results: ["Results and numbers will appear here after launch."],
    placeholder: true,
  },
  {
    slug: "example-youth-program",
    title: "Example: After-school youth program",
    orgType: "Youth program",
    summary: "A sample case study for a youth program that needed a mobile-friendly site with program schedules and a volunteer sign-up form.",
    services: ["Design", "Development", "Volunteer forms"],
    results: ["Results and numbers will appear here after launch."],
    placeholder: true,
  },
  {
    slug: "example-animal-rescue",
    title: "Example: Local animal rescue",
    orgType: "Animal rescue",
    summary: "A sample case study for an animal rescue that needed adoptable pets, an application form and a clear way to donate.",
    services: ["Design", "Development", "SEO", "Hosting setup"],
    results: ["Results and numbers will appear here after launch."],
    placeholder: true,
  },
];

export const cta = {
  title: "Want to be our first case study?",
  body: "We are taking on our first projects now. Apply and help us show what a good local nonprofit website looks like.",
};
