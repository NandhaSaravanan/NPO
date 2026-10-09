export type IconName =
  | "layout" | "heart" | "search" | "server" | "graduation" | "mail"
  | "code" | "palette" | "pen" | "compass" | "briefcase" | "clock"
  | "star" | "users" | "check" | "chat";

export interface Cta { label: string; href: string }

export interface Step { title: string; body: string; icon: IconName }
export interface Feature { title: string; body: string; icon: IconName }
export interface FaqItem { question: string; answer: string }
export interface Role { title: string; summary: string; skills: string[]; icon: IconName }
export interface Value { title: string; body: string }
export interface RoadmapItem {
  phase: string;
  status: "now" | "next" | "later";
  title: string;
  body: string;
}
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  placeholder?: boolean;
}
export interface CaseStudy {
  slug: string;
  title: string;
  /** Short descriptor of the organization, e.g. "Food pantry, Monroe NC" */
  orgType: string;
  summary: string;
  services: string[];
  results?: string[];
  url?: string;
  /** Optional screenshot in /public, rendered with next/image */
  image?: { src: string; alt: string; width: number; height: number };
  /** Set true on example cards. Remove the field when you add a real project. */
  placeholder?: boolean;
}

export type FieldType = "text" | "email" | "tel" | "url" | "textarea" | "select";
export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  help?: string;
  placeholder?: string;
  options?: string[];
  maxLength?: number;
  autoComplete?: string;
}
export interface FormDef {
  id: "nonprofit" | "volunteer" | "contact";
  subject: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  fields: FieldDef[];
}
