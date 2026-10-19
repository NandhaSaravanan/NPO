import type { CaseStudy } from "./types";

export const intro = {
  title: "Our work",
  body: "We have no finished client projects yet. These three concept demos show how we'd approach a real one; the last card is the spot waiting for your organization.",
};

/** Shared with the home page hero, so the two line up as one body of work rather than two different demo worlds. */
export const foodPantryDemo = {
  orgName: "Union County Food Pantry",
  navLinks: ["Programs", "Volunteer", "Donate"],
  headline: "Feeding Union County, one neighbor at a time.",
  subcopy: "Weekly distributions, mobile stops and a community garden, all in one place.",
  ctaLabel: "Donate now",
  blocks: [
    { title: "Weekly pantry", body: "Fresh groceries every Saturday, no appointment needed." },
    { title: "Mobile stops", body: "A van bringing food to four neighborhoods each month." },
    { title: "Community garden", body: "Volunteer-grown produce, free to anyone who stops by." },
  ],
  // Warm, harvest-toned identity — deliberately not Lumen's own pine/cobalt/linen.
  palette: {
    heroBg: "#6B4423",
    heroText: "#FBF3E7",
    heroSubtext: "#D9C3A8",
    accentBg: "#8A9B4F",
    accentText: "#1A1F0D",
    navBg: "#FBF3E7",
    navText: "#3D2B1A",
    blockBg: "#F3E7D3",
    blockTitle: "#6B4423",
    blockBody: "#5A4A3A",
    headlineFont: "Georgia, 'Times New Roman', serif",
  },
};

/**
 * To add a real project: copy an entry, set `status`, fill in the text, add `image` and `url`
 * once the site is public, and drop its `demo`/`breakdown`. Do not add numbers or results that
 * are not true. Replace the two remaining concept cards as real projects take their place.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "concept-food-pantry",
    title: "Concept: a food pantry's first real website",
    orgType: "Food pantry — concept demo, not a real client",
    summary: "What someone looking for food, or looking to help, needs to find in the first few seconds.",
    status: "sample",
    tags: ["Website", "Donation page", "Volunteer forms"],
    demo: foodPantryDemo,
    breakdown: {
      audience: "Families and individuals facing food insecurity, plus donors and volunteers.",
      goal: "Lead with hours and how to get food, not an about-us paragraph — and make giving or volunteering a one-click decision.",
      pages: "Home, Get Food, Donate, Volunteer, About.",
    },
  },
  {
    slug: "concept-animal-rescue",
    title: "Concept: an animal rescue's adoption site",
    orgType: "Animal rescue — concept demo, not a real client",
    summary: "A site built around the moment someone decides to adopt, not around the organization's history.",
    status: "sample",
    tags: ["Website", "Adoption listings", "Foster program"],
    demo: {
      orgName: "Catawba Paws Rescue",
      navLinks: ["Adopt", "Foster", "Donate"],
      headline: "Every pet deserves a second chance.",
      subcopy: "Browse adoptable pets, apply to foster, and see where your gift goes.",
      ctaLabel: "See adoptable pets",
      blocks: [
        { title: "Adoptable pets", body: "Photos, bios and status for every animal currently in care." },
        { title: "Foster program", body: "What fostering involves and how to apply in one short form." },
        { title: "Where gifts go", body: "A plain breakdown of what a donation covers, in real terms." },
      ],
      // Friendly navy-and-amber identity — a different composition from the food pantry demo.
      palette: {
        heroBg: "#1E3A5F",
        heroText: "#FAF6EE",
        heroSubtext: "#A9BFD6",
        accentBg: "#E8984F",
        accentText: "#1E3A5F",
        navBg: "#FAF6EE",
        navText: "#1E3A5F",
        blockBg: "#EEF2F7",
        blockTitle: "#1E3A5F",
        blockBody: "#4A5A6B",
        headlineFont: "'Trebuchet MS', 'Segoe UI', sans-serif",
      },
    },
    breakdown: {
      audience: "Local families ready to adopt or foster, and donors who want to see impact.",
      goal: "Put adoptable animals first, keep the foster and adoption applications short, and make a gift's impact concrete.",
      pages: "Home, Adopt, Foster, Donate, About.",
    },
  },
  {
    slug: "concept-youth-program",
    title: "Concept: a youth program's registration site",
    orgType: "Youth program — concept demo, not a real client",
    summary: "Built for a parent comparing programs on a phone between meetings, not browsing at leisure.",
    status: "sample",
    tags: ["Website", "Registration", "Parent resources"],
    demo: {
      orgName: "Union County Youth Collective",
      navLinks: ["Programs", "Register", "Give"],
      headline: "Where Union County kids build real skills.",
      subcopy: "After-school programs, summer camps and mentorship, all in one place.",
      ctaLabel: "Register now",
      blocks: [
        { title: "After-school", body: "Daily schedule, pickup times and what's covered, at a glance." },
        { title: "Summer camp", body: "Dates, cost and what to bring, with registration that opens on time." },
        { title: "Mentorship", body: "How the matching works, for both families and volunteer mentors." },
      ],
      // Bold violet-and-yellow identity — energetic, the third distinct look.
      palette: {
        heroBg: "#3D2563",
        heroText: "#FFFFFF",
        heroSubtext: "#C9B8E0",
        accentBg: "#F2C230",
        accentText: "#2B1A47",
        navBg: "#FFFFFF",
        navText: "#3D2563",
        blockBg: "#F4EEFC",
        blockTitle: "#3D2563",
        blockBody: "#5C4A78",
        headlineFont: "'Arial Black', 'Arial Bold', Gadget, sans-serif",
      },
    },
    breakdown: {
      audience: "Parents comparing programs quickly, plus volunteers and donors.",
      goal: "Surface dates, cost and registration status first, since that's what decides whether a parent signs up.",
      pages: "Home, Programs, Register, Volunteer, About.",
    },
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
