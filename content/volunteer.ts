import type { FaqItem, FormDef, Role, Feature } from "./types";

export const intro = {
  title: "Build something that matters",
  body: "Join a student team that ships real websites for real organizations in your community. You do not need to be an expert. You need to be reliable and willing to learn.",
};

export const roles: Role[] = [
  {
    title: "Web developer",
    summary: "Turn designs into fast, accessible, mobile-friendly pages and connect forms and hosting.",
    skills: ["HTML and CSS", "JavaScript or React", "Git basics"],
    icon: "code",
  },
  {
    title: "Designer",
    summary: "Shape the look and feel: layout, color, type and simple graphics that suit each organization.",
    skills: ["Figma or similar", "Layout and typography", "Accessibility awareness"],
    icon: "palette",
  },
  {
    title: "Content writer",
    summary: "Help nonprofits say what they do in clear, warm, plain language that moves people to act.",
    skills: ["Clear writing", "Interviewing", "Editing"],
    icon: "pen",
  },
  {
    title: "Project lead",
    summary: "Be the main contact for a nonprofit, keep the team on schedule and make sure launch goes smoothly.",
    skills: ["Communication", "Organization", "Follow-through"],
    icon: "compass",
  },
];

export const gains = {
  title: "What you gain",
  items: [
    { title: "A real portfolio", body: "Live projects with your name on them, far better than a class assignment.", icon: "briefcase" },
    { title: "Service hours", body: "We track your hours and can provide documentation for school service requirements.", icon: "clock" },
    { title: "Client experience", body: "Scope work, take feedback and deliver on a deadline, the way professionals do.", icon: "users" },
    { title: "A reference", body: "Nonprofit leaders who can speak to your work and reliability.", icon: "star" },
  ] satisfies Feature[],
};

export const commitment = {
  title: "What we expect",
  body: "We keep it manageable for students.",
  items: [
    "About 3 to 5 hours a week while you are on a project, usually for 6 to 10 weeks.",
    "A weekly team check-in, online or in person, at a time that works for the group.",
    "Clear communication. If you are stuck or swamped, tell your lead early.",
    "Respect for each organization and the people it serves, including how we handle their information.",
  ],
};

export const faq: FaqItem[] = [
  {
    question: "Do I need experience?",
    answer: "Not always. Developers and designers should have some experience, but writers and project leads can learn as they go. Everyone gets paired with teammates and a lead.",
  },
  {
    question: "Who can volunteer?",
    answer: "High school and college students in or near Union County and the Charlotte area. Adults with relevant skills who want to mentor are welcome to get in touch.",
  },
  {
    question: "Can I choose my project?",
    answer: "We match by skills, interests and schedule, and we do our best to honor your preferences.",
  },
];

export const joinIntro = {
  title: "Sign up to volunteer",
  body: "Tell us a bit about you. We will reach out within a week about the next project.",
};

export const volunteerForm: FormDef = {
  id: "volunteer",
  subject: "Volunteer sign-up",
  submitLabel: "Sign me up",
  successTitle: "Thanks for signing up",
  successBody: "We will reach out within a week with next steps and the next project that fits you.",
  fields: [
    { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name", maxLength: 100 },
    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", maxLength: 200 },
    { name: "school", label: "School or organization", type: "text", required: true, maxLength: 120 },
    { name: "grade", label: "Grade or year", type: "text", help: "For example: 10th grade, college sophomore.", maxLength: 60 },
    {
      name: "role",
      label: "Role you are interested in",
      type: "select",
      required: true,
      options: ["Web developer", "Designer", "Content writer", "Project lead", "Not sure yet"],
    },
    { name: "portfolio", label: "Portfolio or GitHub (optional)", type: "url", placeholder: "https://", maxLength: 200 },
    {
      name: "about",
      label: "Why do you want to volunteer?",
      type: "textarea",
      required: true,
      help: "A few sentences is plenty. Mention any skills or tools you know.",
      maxLength: 1500,
    },
  ],
};
