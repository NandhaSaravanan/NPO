import { site } from "@content/site";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="4" fill="#1b3a31" />
      <circle cx="16" cy="16" r="6" fill="#b0306a" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="font-display text-lg font-bold tracking-tight">{site.name}</span>
    </span>
  );
}
