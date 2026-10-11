import type { FaqItem, Feature, FormDef, Step } from "./types";

export const intro = {
  title: "A free website for your nonprofit",
  body: "If your pantry, rescue, ministry or youth program has a site that is missing, out of date or broken on a phone, we can rebuild it. Here is how to tell if we are a fit, and what the next six to ten weeks look like.",
};

export const difference = {
  title: "We build websites. We are not a directory.",
  body: "Directories and fundraising platforms list your organization alongside many others, and that can help. This is a different kind of help: a site of your own, built around your programs and your voice.",
  points: [
    { title: "It lives at your address", body: "Your domain, your hosting, your logins. If you ever move on from us, nothing breaks." },
    { title: "Your donors come to you", body: "Gifts go through the donation service you already use or choose. We do not collect money, take a cut or hold your supporters' details." },
    { title: "Keep your other listings", body: "A listing somewhere else can point to your site. Your site gives people the full story when they click." },
  ],
};

export const eligibility = {
  title: "Who is eligible",
  body: "We are a small team, so we focus on organizations close to home.",
  criteria: [
    {
      title: "Local",
      body: "Based in or mainly serving a town or neighborhood on our service list below, or within about 30 miles of Union County.",
      icon: "compass",
    },
    {
      title: "Mission-driven",
      body: "A registered 501(c)(3), or an established community, faith-based or volunteer organization doing public good.",
      icon: "heart",
    },
    {
      title: "Ready to participate",
      body: "Someone on your team can talk with us, share content and photos, and review drafts on a reasonable schedule.",
      icon: "users",
    },
  ] satisfies Feature[],
  note: "Not sure you qualify? Apply anyway or send us a note. We would rather talk than guess.",
  areaTitle: "Where we can show up in person",
};

export const process = {
  title: "What the process looks like",
  steps: [
    {
      title: "Apply",
      body: "Fill out the form below. We read every application and reply within a week.",
      when: "Reply within a week",
    },
    {
      title: "Scope call",
      body: "A call to agree on pages, features, content and a timeline.",
      when: "30 minutes",
    },
    {
      title: "Build",
      body: "We design and build your site, share a preview link, and revise based on your feedback.",
      when: "4 to 6 weeks",
    },
    {
      title: "Launch and handoff",
      body: "We go live, move all accounts into your name, and train your team to maintain the site.",
      when: "About a week",
    },
  ] satisfies Step[],
};

export const timeline = {
  title: "Timeline expectations",
  body: "Most projects take about six to ten weeks from the scope call to launch. Student schedules and school breaks can stretch that, and slow feedback or late content does too. We will agree on a target date up front and tell you early if anything shifts.",
  items: [
    { label: "Application review", value: "Within 1 week" },
    { label: "Scope call to build start", value: "1 to 2 weeks" },
    { label: "Build and revisions", value: "4 to 6 weeks" },
    { label: "Launch and training", value: "About 1 week" },
  ],
};

export const needs = {
  title: "What we need from you",
  body: "The more of this you can share early, the faster your site goes live.",
  items: [
    { title: "Content", body: "Your mission, programs, how to get involved, and any text you already use on flyers or social media. Rough notes are fine." },
    { title: "Photos", body: "Pictures of your work, events and people. Please make sure you have permission to share anyone who appears in them." },
    { title: "Logo and brand", body: "Your logo and colors if you have them. If not, we will help you pick something simple." },
    { title: "A point person", body: "One contact who can answer questions and approve decisions, plus access to any existing domain or accounts." },
  ],
};

export const faq: FaqItem[] = [
  {
    question: "Is it really free?",
    answer: "Yes. There is no fee for design, build, launch or training. The only costs you may have are ones you control, such as a custom domain name (usually around $12 to $20 a year). We will tell you exactly what, if anything, is needed before you commit.",
  },
  {
    question: "Are you a directory or a fundraising platform?",
    answer: "No. We build your organization's own website and hand it over. We do not list organizations, collect donations or take a share of what your supporters give.",
  },
  {
    question: "Who will build my site?",
    answer: "A small team of student volunteers, led by a project lead who stays in touch with you. Students are matched to your project by skills and availability.",
  },
  {
    question: "Do I own the website?",
    answer: "Yes. Your domain, hosting and site files are set up in your organization's name, and we hand over everything at launch. You are never locked in to us.",
  },
  {
    question: "Can you redesign our existing site?",
    answer: "Often, yes. If you already have a domain or a site, we can rebuild it and keep what works. Tell us what you have in the application.",
  },
  {
    question: "Can we accept donations through the site?",
    answer: "Yes. We link or embed the donation service you already use, or help you choose a low-fee option. We do not handle payments ourselves.",
  },
  {
    question: "What happens after launch?",
    answer: "We train your team and give you a simple guide for updating text, photos and events. We stay reachable for questions, but the goal is for you to be self-sufficient.",
  },
  {
    question: "How many projects do you take on?",
    answer: "We are a small team, so we take on a limited number at a time to keep quality high. If we are full, we will tell you honestly and keep your application on file.",
  },
];

export const applyIntro = {
  title: "Apply for a free website",
  body: "Tell us about your organization. We will reply within a week to set up a scope call.",
};

export const applicationForm: FormDef = {
  id: "nonprofit",
  subject: "Website application",
  submitLabel: "Send application",
  successTitle: "Application received",
  successBody: "Thank you. We will review it and reply within a week to schedule a scope call.",
  fields: [
    { name: "orgName", label: "Organization name", type: "text", required: true, autoComplete: "organization", maxLength: 120 },
    { name: "contactName", label: "Your name", type: "text", required: true, autoComplete: "name", maxLength: 100 },
    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", maxLength: 200 },
    { name: "phone", label: "Phone (optional)", type: "tel", autoComplete: "tel", maxLength: 40 },
    { name: "location", label: "City or town", type: "text", required: true, help: "We serve organizations within about 30 miles of Union County.", maxLength: 100 },
    {
      name: "orgType",
      label: "Type of organization",
      type: "select",
      required: true,
      options: ["501(c)(3) nonprofit", "Faith-based outreach", "Community or volunteer group", "School or youth program", "Other"],
    },
    {
      name: "currentSite",
      label: "Current website (optional)",
      type: "url",
      placeholder: "https://",
      help: "Leave blank if you do not have one.",
      maxLength: 200,
    },
    {
      name: "needs",
      label: "What should your website do?",
      type: "textarea",
      required: true,
      help: "For example: explain our programs, collect donations, sign up volunteers, share events.",
      maxLength: 1500,
    },
  ],
};
