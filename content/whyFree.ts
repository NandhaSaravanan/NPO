import { ORG_NAME } from "./site";

const founder = "Nandha Saravanan";

export const intro = {
  title: "Why free?",
  body: `Because this is volunteer work, not a business. There's no office, no payroll and no agency markup, so there's nothing to pass on to you.`,
};

export const explainer = {
  paragraphs: [
    `${ORG_NAME} is run by ${founder}, a high school student, and built by a small team of student volunteers. Nobody here draws a salary from your project. The students on your team are doing this for the experience, the portfolio, and the chance to build something real.`,
    "So the trade is simple: your organization gets a working, professional site, and the team gets real client work to put their name on. We are not a funded startup and we are not asking for donations.",
    "The only cost you might ever see is a domain name, usually $12 to $20 a year, paid to a registrar, not to us. We'll tell you about it before you commit to anything, and you're free to skip it and use a free subdomain instead.",
  ],
};

export const whatThisIsNot = {
  title: "What free does not mean",
  items: [
    { title: "Not a lesser site", body: "You get the same build quality, process and attention as a paid agency project, because the students on your team are trying to prove exactly that." },
    { title: "Not locked in", body: "Your domain, hosting and accounts are set up in your organization's name from the start. If you ever want to leave, there's nothing to untangle." },
    { title: "Not a fundraising ask", body: "We don't take a cut of donations, and we won't come back later asking you to pay for what we already built." },
  ],
};
