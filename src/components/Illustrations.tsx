/** Abstract, decorative SVG art. All aria-hidden: it adds no information. */

/** Soft backdrop shapes for page headers. */
export function PageGlow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" focusable="false">
      <circle cx="300" cy="90" r="120" fill="#fdecbd" />
      <circle cx="340" cy="60" r="50" fill="#f8c64d" opacity="0.7" />
      <path d="M0 260c80-40 160-40 240 0s120 40 160 20v20H0z" fill="#fbdb86" opacity="0.6" />
    </svg>
  );
}

/** Per-case-study placeholder art, varied by index. */
export function CardArt({ index }: { index: number }) {
  const palettes = [
    ["#fdecbd", "#f2b01e", "#251f17"],
    ["#faf5ea", "#d9960b", "#251f17"],
    ["#fbdb86", "#8a5808", "#fffdf8"],
  ];
  const [bg, fg, ink] = palettes[index % palettes.length];
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill={bg} />
      <circle cx={90 + index * 90} cy="70" r="60" fill={fg} opacity="0.8" />
      <rect x="60" y="100" width="280" height="150" rx="14" fill="#fff" stroke={ink} strokeWidth="3" />
      <rect x="80" y="122" width="120" height="12" rx="6" fill={ink} />
      <rect x="80" y="146" width="200" height="8" rx="4" fill="#e8e0cf" />
      <rect x="80" y="162" width="160" height="8" rx="4" fill="#e8e0cf" />
      <rect x="80" y="184" width="70" height="22" rx="11" fill={fg} />
    </svg>
  );
}
