import type { Feature, RoadmapItem, Step } from "./types";
import { ORG_NAME } from "./site";

export const hero = {
  eyebrow: "Union County and Charlotte area",
  title: "A real website for the nonprofit doing real good.",
  body: "Local food pantries, youth programs, animal rescues and community groups should not lose donors and volunteers to a broken site. We build them a professional one, free.",
};

export const whoWeHelp = {
  title: "Who we help",
  body: "Small, local organizations with big impact and no web budget.",
  groups: [
    "Food pantries",
    "Youth programs",
    "Animal rescues",
    "Community groups",
    "Church outreach ministries",
    "Neighborhood associations",
  ],
};

export const howItWorks = {
  title: "How it works",
  body: "Four steps, one small team, and a site you own at the end.",
  steps: [
    {
      title: "Apply",
      body: "Tell us about your organization and what your site needs to do. It takes about ten minutes.",
      icon: "pen",
    },
    {
      title: "Scope call",
      body: "A short call to agree on pages, priorities and a launch date, so nothing surprises you later.",
      icon: "chat",
    },
    {
      title: "Build",
      body: "A small student team designs and builds your site. You review it along the way and give feedback.",
      icon: "code",
    },
    {
      title: "Launch and handoff",
      body: "We publish it, move the accounts into your name, and train you to keep it up to date.",
      icon: "check",
    },
  ] satisfies Step[],
};

export const whatYouGet = {
  title: "What you get",
  body: "Everything a small organization needs to be found, trusted and supported online.",
  features: [
    {
      title: "A site that works on phones",
      body: "Most visitors will arrive on a phone. Every page is designed for small screens first.",
      icon: "layout",
    },
    {
      title: "Donation and volunteer forms",
      body: "Clear ways for people to give, sign up and get in touch, wired to your inbox or your existing donation page.",
      icon: "heart",
    },
    {
      title: "Basic SEO",
      body: "Proper page titles, descriptions and structure so people searching for your cause can find you.",
      icon: "search",
    },
    {
      title: "Hosting guidance",
      body: "We recommend low-cost or free hosting, set it up with you, and put the accounts in your name.",
      icon: "server",
    },
    {
      title: "Training",
      body: "A hands-on session and a plain-English guide so someone on your team can update the site without us.",
      icon: "graduation",
    },
  ] satisfies Feature[],
};

export const whyFree = {
  title: "Why free?",
  body: [
    `Small nonprofits put every dollar into the people they serve, and agency quotes start where their budgets end. ${ORG_NAME} is run by students who want real client experience and want to help the community they live in.`,
    "That is the whole trade. You get a good website. Our volunteers get a portfolio and the satisfaction of shipping something that matters. No hidden fees, no upsells, no strings.",
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
  title: "Ready to get started?",
  body: "Whether you run an organization that needs a site or you are a student who wants to build one, we would love to hear from you.",
};
