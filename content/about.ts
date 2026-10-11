import type { TeamMember, TimelineEntry, Value } from "./types";
import { ORG_NAME } from "./site";

export const intro = {
  title: "About us",
  body: `${ORG_NAME} is a student-run group building free websites for local nonprofits in Union County and the Charlotte area.`,
};

export const mission = {
  title: "Our mission",
  body: "No pantry, rescue or youth program in Union County or Charlotte should lose a donor or volunteer at the first click because its site is missing, out of date or unreadable on a phone. Local students do the building. The nonprofit keeps the site.",
};

export const story = {
  title: "Why we started",
  paragraphs: [
    "Nandha Saravanan, a high school student in Union County, started noticing the same thing around town: food pantries, youth programs and rescues doing wonderful work, with websites that were missing, out of date, or impossible to use on a phone.",
    "A website is often the first thing a donor or new volunteer checks. When it looks neglected, people hesitate, even when the organization is excellent. Most of these groups cannot afford an agency, and many have nobody on staff who builds websites.",
    `Meanwhile, plenty of students want to build real things and have nowhere to practice on real projects. ${ORG_NAME} connects the two.`,
  ],
};

/**
 * Fill in `when` and set `status: "done"` as each date is confirmed. Only true events belong here.
 * Entries marked "tbd" or "upcoming" are shown on the site as such.
 */
export const timeline = {
  title: "How we got here",
  body: "A short history, with the dates filled in as they are confirmed.",
  entries: [
    {
      when: "TBD",
      title: "The idea",
      body: "Nandha Saravanan, a high school student in Union County, noticed how many local nonprofits had websites that were missing, out of date or hard to use on a phone.",
      status: "tbd",
    },
    {
      when: "TBD",
      title: "Applications open",
      body: "The website goes live and the first nonprofit application form starts accepting submissions.",
      status: "tbd",
    },
    {
      when: "Not yet",
      title: "First project begins",
      body: "The first nonprofit is matched with a small student team.",
      status: "upcoming",
    },
    {
      when: "Not yet",
      title: "First site launches",
      body: "The first nonprofit goes live on a site it owns. It will appear on the Our Work page.",
      status: "upcoming",
    },
  ] satisfies TimelineEntry[],
};

export const model = {
  title: "How the model works",
  body: "We match student volunteers with local nonprofits and build websites. We are not a directory or a fundraising platform: the site we build is yours, at your own address.",
  points: [
    { title: "Match", body: "We pair a small team of student volunteers with a local nonprofit based on skills and the organization's needs." },
    { title: "Build", body: "The team scopes, designs and builds the site with a project lead as the nonprofit's single point of contact." },
    { title: "Hand off", body: "We launch, move everything into the nonprofit's name, and train their people to run it themselves." },
  ],
};

export const values: Value[] = [
  { title: "The site comes first", body: "We want portfolio work and we say so. But the site has to work for the neighbors who rely on you before it works for our résumés." },
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
