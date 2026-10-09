import { site } from "@content/site";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="9" fill="#f2b01e" />
      <g stroke="#f2b01e" strokeWidth="2.5" strokeLinecap="round">
        <path d="M16 2.5v3M16 26.5v3M2.5 16h3M26.5 16h3M6.5 6.5l2 2M23.5 23.5l2 2M6.5 25.5l2-2M23.5 8.5l2-2" />
      </g>
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="font-display text-2xl font-semibold tracking-tight">{site.name}</span>
    </span>
  );
}
