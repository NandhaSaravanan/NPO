export interface Cta { label: string; href: string }

export interface Step { title: string; body: string; /** Typical time this step takes. */ when: string }
export interface Feature { title: string; body: string; /** Items sharing a group render under one small label. */ group?: string }
export interface FaqItem { question: string; answer: string }
export interface Role { title: string; summary: string; skills: string[] }
export interface TimelineEntry {
  /** A real date, or "TBD" until it is known. Never guess. */
  when: string;
  title: string;
  body: string;
  /** "tbd" = it happened but the date is not filled in; "upcoming" = it has not happened yet. */
  status: "done" | "tbd" | "upcoming";
}
export interface Value { title: string; body: string }
export interface Tier {
  name: string;
  tagline: string;
  bestFor: string;
  includes: string[];
}
export interface RoadmapItem {
  phase: string;
  status: "now" | "next" | "later";
  title: string;
  body: string;
  /** Extra detail, shown only on the item that is available now. */
  detail?: string;
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
  /** A rendered concept mini-site, shown instead of the grey placeholder when there is no real screenshot. */
  demo?: MiniSiteContent;
  /** The design thinking behind a concept demo: who it's for, what it has to make easy, and its page map. */
  breakdown?: { audience: string; goal: string; pages: string };
  /** Specific, concrete design decisions for the case-study detail page — not generic process talk. */
  decisions?: { title: string; body: string }[];
}

export interface MiniSiteContent {
  orgName: string;
  navLinks: string[];
  headline: string;
  subcopy: string;
  ctaLabel: string;
  blocks: { title: string; body: string }[];
  /**
   * An invented visual identity for this one demo, distinct from Lumen's own pine/cobalt/linen
   * system and from every other demo. A portfolio that reskins the studio's own site in every
   * example proves nothing about range — these colors and this font never come from globals.css.
   */
  palette: {
    heroBg: string;
    heroText: string;
    heroSubtext: string;
    accentBg: string;
    accentText: string;
    navBg: string;
    navText: string;
    blockBg: string;
    blockTitle: string;
    blockBody: string;
    headlineFont: string;
  };
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
