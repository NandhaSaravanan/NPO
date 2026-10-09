import { site } from "./site";

export const privacy = {
  title: "Privacy Policy",
  updated: "October 2026",
  sections: [
    {
      heading: "Overview",
      body: [
        `This policy explains what information ${site.name} collects through this website and how we use it. We keep it simple: we collect only what you choose to send us.`,
      ],
    },
    {
      heading: "Information you give us",
      body: [
        "When you submit an application, volunteer sign-up or contact form, we receive the details you enter, such as your name, email address, organization and message.",
        "We use this information only to respond to you, evaluate applications, match volunteers with projects and run our programs.",
      ],
    },
    {
      heading: "How forms are processed",
      body: [
        "Form submissions are sent to a form service or email inbox that we control. If no form service is connected, your device opens a pre-filled email to us instead. We do not sell your information or share it for advertising.",
      ],
    },
    {
      heading: "Analytics and cookies",
      body: [
        "This site does not use advertising trackers. Our hosting provider may collect basic technical logs, such as IP address and browser type, for security and reliability.",
      ],
    },
    {
      heading: "Sharing",
      body: [
        "We share information only with the people who need it to help you, such as the student team assigned to a project, or when required by law.",
      ],
    },
    {
      heading: "Children and students",
      body: [
        "Many of our volunteers are under 18. We ask for the minimum information needed and do not publish student details without permission from the student and, where appropriate, a parent or guardian.",
      ],
    },
    {
      heading: "Your choices",
      body: [
        `You can ask us to see, correct or delete the information you sent us by emailing ${site.email}.`,
      ],
    },
    {
      heading: "Changes",
      body: ["If we change this policy, we will update the date at the top of this page."],
    },
    {
      heading: "Contact",
      body: [`Questions? Email ${site.email}.`],
    },
  ],
};
