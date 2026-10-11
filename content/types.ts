export interface Cta { label: string; href: string }

export interface Step { title: string; body: string; /** Typical time this step takes. */ when: string }
export interface Feature { title: string; body: string }
export interface FaqItem { question: string; answer: string }
export interface Role { title: string; summary: string; skills: string[] }
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
  /** "sample" cards are labeled as examples, not real clients. */
  status: "sample" | "in-progress" | "live";
  /** Tags such as "Website" or "Donation page". */
  tags: string[];
  /** Real outcomes only. Leave out until there are some. */
  results?: string[];
  /** Adds the "View live site" link and makes the card clickable. Only set for real, public sites. */
  url?: string;
  /** Screenshot in /public. Without it the card shows a labeled empty frame. */
  image?: { src: string; alt: string; width: number; height: number };
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
