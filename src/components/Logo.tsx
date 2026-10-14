import { site } from "@content/site";

export function LogoMark({ className = "h-8 w-8", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="4" fill={onDark ? "#fafbf9" : "#1b3a31"} />
      <circle cx="16" cy="16" r="6" fill="#b0306a" />
    </svg>
  );
}

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark onDark={onDark} />
      <span className="text-lg font-extrabold tracking-tight">{site.name}</span>
    </span>
  );
}
