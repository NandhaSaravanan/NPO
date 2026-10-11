import type { TeamMember, Value } from "./types";
import { ORG_NAME } from "./site";

export const intro = {
  title: "About us",
  body: `${ORG_NAME} is a student-run group building free websites for local nonprofits in Union County and the Charlotte area.`,
};

export const mission = {
  title: "Our mission",
  body: "Every community group deserves a website that earns trust. We use the skills of local students to give small nonprofits a professional online presence, at no cost, so they can spend their time and money on the people they serve.",
};

export const story = {
  title: "Why we started",
  paragraphs: [
    "Nandha Saravanan, a high school student in Union County, started noticing the same thing around town: food pantries, youth programs and rescues doing wonderful work, with websites that were missing, out of date, or impossible to use on a phone.",
    "A website is often the first thing a donor or new volunteer checks. When it looks neglected, people hesitate, even when the organization is excellent. Most of these groups cannot afford an agency, and many have nobody on staff who builds websites.",
    `Meanwhile, plenty of students want to build real things and have nowhere to practice on real projects. ${ORG_NAME} connects the two.`,
  ],
};

export const model = {
  title: "How the model works",
  body: "We match student volunteers with local nonprofits. Our focus is digital help, starting with websites.",
  points: [
    { title: "Match", body: "We pair a small team of student volunteers with a local nonprofit based on skills and the organization's needs." },
    { title: "Build", body: "The team scopes, designs and builds the site with a project lead as the nonprofit's single point of contact." },
    { title: "Hand off", body: "We launch, move everything into the nonprofit's name, and train their people to run it themselves." },
  ],
};

export const values: Value[] = [
  { title: "Community first", body: "We build for the people who rely on these organizations, not for our portfolios." },
  { title: "Plain-spoken", body: "No jargon and no surprises. We say what we will do and then do it." },
  { title: "Built to last", body: "Simple, accessible, fast sites that a small team can keep running without us." },
  { title: "Owned by you", body: "Your domain, your content and your accounts are yours from day one." },
];

export const teamIntro = {
  title: "The team",
  body: "A student-run effort, just getting started.",
};

/** Add entries as people join. */
export const team: TeamMember[] = [
  {
    name: "Nandha Saravanan",
    role: "Founder",
    bio: "High school student in Union County. Started the organization to help local nonprofits get online.",
  },
];
