import type { Tier } from "./types";

export const offerIntro = {
  title: "What we offer",
  body: "Every tier here is free. There's no pricing to compare, only how much site your organization needs.",
};

export const tiers: Tier[] = [
  {
    name: "Starter",
    tagline: "A single page with your info, hours and a way to reach you.",
    bestFor: "Best for a group that just needs a real presence online, fast.",
    includes: [
      "One page: who you are, what you do, hours and location",
      "A contact method that goes straight to your inbox",
      "Mobile-friendly design",
      "Usually live within two weeks",
    ],
  },
  {
    name: "Standard",
    tagline: "A full multi-page site built around your programs.",
    bestFor: "Best for an organization ready to tell its full story and take action online.",
    includes: [
      "Everything in Starter",
      "Multiple pages: programs, about, events, get involved",
      "Donation and volunteer sign-up forms",
      "Basic SEO so people searching for you can find you",
    ],
  },
  {
    name: "Standard+",
    tagline: "Standard, plus what it takes to run it yourselves.",
    bestFor: "Best for a team that wants to make small updates without calling us.",
    includes: [
      "Everything in Standard",
      "Hosting and domain set up in your organization's name",
      "A hands-on training session for your team",
      "A plain-English guide for everyday edits",
    ],
  },
];

export const offerClosing = {
  title: "Not sure which tier fits?",
  body: "Say so in the application. We will help you land on the right scope during the scope call, at no cost either way.",
};
