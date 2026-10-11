import type { Feature, RoadmapItem, Step } from "./types";
import { ORG_NAME, site } from "./site";

const founder = site.founder;

export const hero = {
  title: "Free websites for the nonprofits of Union County and Charlotte.",
  body: `Food pantries, rescues, youth programs and church outreach groups do the work. We build the site that shows it: readable on a phone, registered in your name, with no fee and no agency markup. ${ORG_NAME} is a volunteer studio run by a high school student in Union County, and we are taking on our first projects.`,
};

export const whoWeHelp = {
  title: "Who we help",
  body: "Groups whose money goes to groceries, vet bills and field trips, not web design.",
  kinds:
    "Food pantries, youth programs, animal rescues, church outreach ministries, neighborhood associations and volunteer groups.",
  areaTitle: "Where we can show up in person",
  areaNote: "Not on the list but close by? Apply anyway and tell us where you are.",
};

export const howItWorks = {
  title: "How it works",
  body: "From your application to a live site you own, usually six to ten weeks.",
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

export const whatYouGet = {
  title: "What we build into every site",
  body: "A small site that does the few jobs a small organization needs.",
  features: [
    {
      title: "A site that works on phones",
      body: "Most pages are designed for a small screen first, then scaled up.",
    },
    {
      title: "Donation and volunteer forms",
      body: "Clear ways for people to give, sign up and get in touch, wired to your inbox or the donation page you already use.",
    },
    {
      title: "Basic SEO",
      body: "Real page titles, descriptions and structure, so a search like \"food pantry Waxhaw\" has something accurate to find.",
    },
    {
      title: "Hosting guidance",
      body: "We recommend low-cost or free hosting, set it up with you, and put the accounts in your name.",
    },
    {
      title: "Training",
      body: "A hands-on session and a plain-English guide, so someone on your team can update the site without us.",
    },
  ] satisfies Feature[],
};

export const whyFree = {
  title: "Why free?",
  body: [
    `There is no office, no payroll and no agency markup here, so there is nothing to cover. ${ORG_NAME} is a volunteer studio run by ${founder}, a high school student in Union County who is building a portfolio on real projects. The students on your team are doing the same.`,
    "So the trade is simple. You get a working site, and we get something real to put our names on. We are not a funded startup, and we are not asking you for donations. The only cost you might see is a domain name, usually $12 to $20 a year, and we will tell you before you commit.",
  ],
};

export const roadmap: RoadmapItem[] = [
  {
    phase: "1",
    status: "now",
    title: "Free websites for local nonprofits",
    body: "Available today. This is what we do, and we do it well.",
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
