import type { Cta } from "./types";

/**
 * Change ORG_NAME once and it updates everywhere:
 * header, footer, page titles, metadata, structured data, and forms.
 */
export const ORG_NAME = "Lumen";

export const site = {
  name: ORG_NAME,
  tagline: "Free websites for nonprofits in Union County and Charlotte.",
  description: `${ORG_NAME} is a volunteer studio run by a high school student in Union County, NC. We build free websites for nonprofits in Union County and Charlotte.`,
  /** Public contact address. Every form falls back to this. */
  email: "nandhasaravanan2000@gmail.com",
  region: "Union County and Charlotte, North Carolina",
  /** The motive statement behind the service-area band on the home and For Nonprofits pages. */
  serviceStatement: "Real organizations doing real work, without the budget, time, or technical help to put a website behind it. That's the gap we fill.",
  serviceArea: {
    unionCounty: ["Monroe", "Waxhaw", "Indian Trail", "Weddington"],
    charlotte: ["South End", "NoDa", "Plaza Midwood", "Dilworth", "University City"],
  },
  locality: "Union County",
  state: "NC",
  founder: "Nandha Saravanan",
  /** Override with NEXT_PUBLIC_SITE_URL in your hosting environment. */
  defaultUrl: "https://npo-rose.vercel.app",
  nav: [
    { label: "For Nonprofits", href: "/nonprofits" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Our Work", href: "/our-work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies Cta[],
  primaryCta: { label: "Apply for a free website", href: "/nonprofits#apply" } satisfies Cta,
  secondaryCta: { label: "Volunteer with us", href: "/volunteer#join" } satisfies Cta,
  social: [] as { label: string; href: string }[],
};
