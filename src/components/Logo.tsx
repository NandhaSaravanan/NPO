import { site } from "@content/site";

/** A confident logotype, no icon mark — set in the display face at tight tracking. */
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      className={`font-display text-xl font-extrabold tracking-tighter ${onDark ? "text-linen" : "text-pine"}`}
    >
      {site.name}
    </span>
  );
}
