import type { Cta } from "./types";

/**
 * Change ORG_NAME once and it updates everywhere:
 * header, footer, page titles, metadata, structured data, and forms.
 */
export const ORG_NAME = "Lumen";

export const site = {
  name: ORG_NAME,
  tagline: "Free websites for local nonprofits.",
  description: `${ORG_NAME} is a student-run group that designs and builds free, professional websites for nonprofits in Union County and the Charlotte area.`,
  /** Replace with the real address. Every form falls back to this. */
  email: "hello@lumen.example",
  region: "Union County and the Charlotte area, North Carolina",
  locality: "Union County",
  state: "NC",
  founder: "Naren Saravanan",
  /** Override with NEXT_PUBLIC_SITE_URL in your hosting environment. */
  defaultUrl: "https://lumen.example",
  nav: [
    { label: "For Nonprofits", href: "/nonprofits" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Our Work", href: "/our-work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies Cta[],
  primaryCta: { label: "Get a free website", href: "/nonprofits#apply" } satisfies Cta,
  secondaryCta: { label: "Volunteer with us", href: "/volunteer#join" } satisfies Cta,
  social: [] as { label: string; href: string }[],
};
