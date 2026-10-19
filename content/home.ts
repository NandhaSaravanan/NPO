import type { RoadmapItem, Step } from "./types";
import { ORG_NAME, site } from "./site";

const founder = site.founder;

export const hero = {
  title: "Free websites for the nonprofits of Union County and Charlotte.",
  body: `Food pantries, rescues, youth programs and church outreach groups do the work. We build the site that shows it: readable on a phone, registered in your name, with no fee and no agency markup. ${ORG_NAME} is a volunteer studio run by a high school student in Union County, and we are taking on our first projects.`,
};

export const aboutTeaser = {
  title: "Who's behind this",
  body: `${ORG_NAME} is run by ${founder}, a high school student in Union County. The idea started after seeing how many local nonprofits were getting by on a Facebook page or no website at all — not for lack of effort, but because a professional site costs more than most of these groups can spend. Every project is built personally, start to finish, at no cost to the organization.`,
  cta: { label: "More about us", href: "/about" },
};

export const whoWeHelp = {
  title: "Who we help",
  body: "Groups whose money goes to groceries, vet bills and field trips, not web design.",
  groups: [
    "Food pantries",
    "Youth programs",
    "Animal rescues",
    "Church outreach ministries",
    "Neighborhood associations",
    "Volunteer groups",
  ],
  areaTitle: "Where we can show up in person",
  areaNote: "Not on the list but close by? Apply anyway and tell us where you are.",
};

export const howItWorks = {
  title: "How it works",
  body: "From your application to a live site you own, usually six to ten weeks.",
  cta: { label: "The full process", href: "/how-it-works" },
  steps: [
    {
      title: "Apply",
      body: "Tell us about your organization and what the site needs to do. It takes about ten minutes.",
      when: "We reply within a week",
    },
    {
      title: "Scope call",
      body: "A short call to agree on pages, priorities and a launch date, so nothing surprises you later.",
      when: "30 minutes",
    },
    {
      title: "Build",
      body: "A small student team designs and builds your site. You see a preview link and send feedback as we go.",
      when: "4 to 6 weeks",
    },
    {
      title: "Launch and handoff",
      body: "We publish it, move the domain and hosting into your name, and train someone on your team to update it.",
      when: "About a week",
    },
  ] satisfies Step[],
};

export const whyFree = {
  title: "Why free?",
  body: [
    `There's no office, no payroll and no agency markup, so there's nothing to charge for. ${ORG_NAME} is run by ${founder}, a high school student, and built by student volunteers who want real client work, not a fee.`,
  ],
  cta: { label: "The full story", href: "/why-free" },
};

export const roadmap: RoadmapItem[] = [
  {
    phase: "1",
    status: "now",
    title: "Free websites for local nonprofits",
    body: "Available today. This is what we do, and we do it well.",
    detail: "We design and build the site, launch it, move the domain and hosting into your name, and train someone on your team to keep it current. Typically six to ten weeks, with no fee.",
  },
  {
    phase: "2",
    status: "next",
    title: "Social media setup and content help",
    body: "Coming next. Helping the same nonprofits set up their profiles and plan simple, sustainable content.",
  },
  {
    phase: "3",
    status: "later",
    title: "Digital support for small local businesses",
    body: "Coming later. Bringing the same model to the small businesses that make our towns work.",
  },
];

export const closing = {
  title: "Apply, or join the team",
  body: "If you run a Union County or Charlotte nonprofit with a site that is not working, apply and we will reply within a week. If you are a student who wants real projects for your portfolio, sign up to volunteer.",
};
