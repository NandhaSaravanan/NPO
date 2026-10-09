import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

const routes = ["", "/nonprofits", "/volunteer", "/our-work", "/about", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/privacy" ? 0.3 : 0.8,
  }));
}
