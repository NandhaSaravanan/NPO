import { site } from "@content/site";

export function buildMailto(subject: string, labels: Record<string, string>, data: Record<string, string>) {
  const body = Object.entries(data)
    .filter(([, v]) => v.trim())
    .map(([k, v]) => `${labels[k] ?? k}: ${v.trim()}`)
    .join("\n\n");
  return `mailto:${site.email}?subject=${encodeURIComponent(`${site.name}: ${subject}`)}&body=${encodeURIComponent(body)}`;
}
