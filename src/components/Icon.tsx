import type { IconName } from "@content/types";

const paths: Record<IconName, React.ReactNode> = {
  layout: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>,
  heart: <path d="M12 20s-7-4.4-9-9.2C1.8 7.6 3.6 4.5 6.8 4.5c1.9 0 3.5 1 5.2 3 1.7-2 3.3-3 5.2-3 3.2 0 5 3.1 3.8 6.3C19 15.6 12 20 12 20z" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  server: <><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" /></>,
  graduation: <><path d="m2 9 10-5 10 5-10 5z" /><path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  code: <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />,
  palette: <><path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2-.5-1 0-2.5 1.5-2.5H17a4 4 0 0 0 4-4C21 6.5 17 3 12 3z" /><path d="M7.5 11h.01M10 7.5h.01M14.5 7.5h.01" /></>,
  pen: <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16zM14 6l4 4" />,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5c2 .6 3.5 2.4 3.5 5.5" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12.5 3 3 5-6" /></>,
  chat: <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />,
};

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

export function IconBadge({ name }: { name: IconName }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-800">
      <Icon name={name} />
    </span>
  );
}
