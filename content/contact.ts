import type { FormDef } from "./types";

export const intro = {
  title: "Get in touch",
  body: "Questions about eligibility, volunteering, or partnering with us? Send a note and we will reply within a few days.",
};

export const contactForm: FormDef = {
  id: "contact",
  subject: "Contact message",
  submitLabel: "Send message",
  successTitle: "Message sent",
  successBody: "Thanks for reaching out. We will reply within a few days.",
  fields: [
    { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name", maxLength: 100 },
    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", maxLength: 200 },
    {
      name: "topic",
      label: "Topic",
      type: "select",
      required: true,
      options: ["Getting a website", "Volunteering", "Partnership or press", "Something else"],
    },
    { name: "message", label: "Message", type: "textarea", required: true, maxLength: 2000 },
  ],
};
