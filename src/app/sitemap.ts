import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

const routes = [
  "",
  "/nonprofits",
  "/volunteer",
  "/our-work",
  "/about",
  "/how-it-works",
  "/what-we-offer",
  "/why-free",
  "/contact",
  "/privacy",
  "/credits",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/privacy" || path === "/credits" ? 0.3 : 0.8,
  }));
}
