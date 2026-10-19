import type { FaqItem, RoadmapItem, Step } from "./types";
import { ORG_NAME, site } from "./site";

const founder = site.founder;

export const hero = {
  title: "Free websites for the nonprofits of Union County and Charlotte.",
  body: "Food pantries, rescues, youth programs and church outreach groups do the work. We design and build the site that shows it: readable on a phone, registered in your name, with no design or development fee.",
  note: "Student-led and volunteer-powered — not a funded startup or an agency.",
  secondaryCta: { label: "Explore our work", href: "/our-work" },
};

export const aboutTeaser = {
  title: "Who's behind this",
  body: `${ORG_NAME} is run by ${founder}, a high school student in Union County. The idea started after seeing how many local nonprofits were getting by on a Facebook page or no website at all — not for lack of effort, but because a professional site costs more than most of these groups can spend. ${founder} is the single point of contact on every project, start to finish.`,
  cta: { label: "More about us", href: "/about" },
};

export const whoWeHelp = {
  title: "Who we help",
  lead: "We build for",
  groups: [
    "food pantries",
    "youth programs",
    "animal rescues",
    "church outreach ministries",
    "neighborhood associations",
    "volunteer groups",
  ],
  trail: "the organizations whose money goes to groceries, vet bills and field trips, not web design.",
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
      body: "Tell us your mission, your current site if you have one, and what you need. We review every application and reply within a week.",
      when: "We reply within a week",
    },
    {
      title: "Discovery call",
      body: "We talk through your audience, priorities, content and timeline, so the scope is clear before we design anything.",
      when: "30 minutes",
    },
    {
      title: "Design review",
      body: "We propose a site structure and visual direction and share it with you for feedback before we build.",
      when: "1 to 2 weeks",
    },
    {
      title: "Build and QA",
      body: "We develop the approved design, add your content, and test links, forms, mobile layouts and accessibility.",
      when: "3 to 5 weeks",
    },
    {
      title: "Launch and handoff",
      body: "We connect your domain, confirm ownership and hosting, and walk your team through updating the site.",
      when: "About a week",
    },
  ] satisfies Step[],
};

export const trust = {
  title: "How this is run",
  body: "The questions we'd ask before handing our website to a stranger.",
  points: [
    { title: "Who's behind it", body: "Lumen is run by Nandha Saravanan with a small team of student volunteers. No company structure — just the people doing the work." },
    { title: "How applications are reviewed", body: "A real person reads every application within a week. We check fit, then set up a scope call." },
    { title: "Who owns the site", body: "Your organization, from day one. The domain, hosting and files are registered in your name at launch, not ours." },
    { title: "How access is handed off", body: "At launch we transfer every login — domain, hosting, connected accounts — to your point person, with a record of what's where." },
    { title: "What it might cost", body: "The only likely cost is a domain name, usually $12 to $20 a year, paid to a registrar, not to us." },
    { title: "What happens after launch", body: "We train your team and give you a plain-English guide. We stay reachable, but the goal is for you to run it without us." },
  ],
};

export const homeFaq: FaqItem[] = [
  {
    question: "Is it really free?",
    answer: "Yes. There is no fee for design, build, launch or training. The only cost you may have is one you control, such as a custom domain name.",
  },
  {
    question: "Who is eligible to apply?",
    answer: "Local 501(c)(3) nonprofits and established community, faith-based or volunteer organizations within about 30 miles of Union County.",
  },
  {
    question: "Do we own the finished website?",
    answer: "Yes. Your domain, hosting and site files are set up in your organization's name, and we hand over everything at launch.",
  },
  {
    question: "We're not on the service list — can we still apply?",
    answer: "Apply anyway and tell us where you are. We'll be straightforward about whether we can take it on.",
  },
];

export const whyFree = {
  title: "Why free?",
  body: [
    `There's no office, no payroll and no agency markup, so there's nothing to charge for. Every project is volunteer-built, including by the student team on yours.`,
  ],
  cta: { label: "The full story", href: "/why-free" },
};

export const roadmap: RoadmapItem[] = [
  {
    phase: "1",
    status: "now",
    title: "Free websites for local nonprofits",
    body: "Available today. This is what we do, and we do it well.",
    detail: "We design and build the site, launch it, move the domain and hosting into your name, and train someone on your team to keep it current. Typically six to ten weeks.",
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
