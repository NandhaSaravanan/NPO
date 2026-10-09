import { applicationForm } from "@content/nonprofits";
import { volunteerForm } from "@content/volunteer";
import { contactForm } from "@content/contact";
import type { FormDef } from "@content/types";

export const forms: Record<FormDef["id"], FormDef> = {
  nonprofit: applicationForm,
  volunteer: volunteerForm,
  contact: contactForm,
};
