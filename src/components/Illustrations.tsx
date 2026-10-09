/** Abstract, decorative SVG art. All aria-hidden: it adds no information. */

export function HeroArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 440" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#f8c64d" stopOpacity="0.9" />
          <stop offset="1" stopColor="#f8c64d" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="330" cy="135" r="130" fill="url(#glow)" />
      <g stroke="#f2b01e" strokeWidth="5" strokeLinecap="round">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const x1 = 330 + Math.cos(a) * 62;
          const y1 = 120 + Math.sin(a) * 62;
          const x2 = 330 + Math.cos(a) * (i % 2 ? 80 : 94);
          const y2 = 120 + Math.sin(a) * (i % 2 ? 80 : 94);
          return <line key={i} x1={x1.toFixed(1)} y1={y1.toFixed(1)} x2={x2.toFixed(1)} y2={y2.toFixed(1)} />;
        })}
      </g>
      <circle cx="330" cy="120" r="46" fill="#f2b01e" />
      {/* browser window */}
      <g>
        <rect x="40" y="150" width="320" height="230" rx="18" fill="#fff" stroke="#251f17" strokeWidth="3" />
        <path d="M40 186h320" stroke="#251f17" strokeWidth="3" />
        <circle cx="64" cy="168" r="6" fill="#f2b01e" />
        <circle cx="84" cy="168" r="6" fill="#fbdb86" />
        <circle cx="104" cy="168" r="6" fill="#e8e0cf" />
        <rect x="64" y="208" width="140" height="16" rx="8" fill="#251f17" />
        <rect x="64" y="236" width="220" height="10" rx="5" fill="#e8e0cf" />
        <rect x="64" y="256" width="190" height="10" rx="5" fill="#e8e0cf" />
        <rect x="64" y="290" width="104" height="34" rx="17" fill="#f2b01e" />
        <rect x="190" y="290" width="104" height="34" rx="17" fill="none" stroke="#251f17" strokeWidth="3" />
        <rect x="64" y="338" width="64" height="24" rx="8" fill="#fdecbd" />
        <rect x="138" y="338" width="64" height="24" rx="8" fill="#fdecbd" />
        <rect x="212" y="338" width="64" height="24" rx="8" fill="#fdecbd" />
      </g>
      {/* phone */}
      <g>
        <rect x="318" y="238" width="104" height="180" rx="18" fill="#fffdf8" stroke="#251f17" strokeWidth="3" />
        <rect x="338" y="260" width="64" height="12" rx="6" fill="#251f17" />
        <rect x="338" y="284" width="64" height="8" rx="4" fill="#e8e0cf" />
        <rect x="338" y="300" width="48" height="8" rx="4" fill="#e8e0cf" />
        <rect x="338" y="326" width="64" height="30" rx="15" fill="#f2b01e" />
        <rect x="338" y="368" width="64" height="30" rx="8" fill="#fdecbd" />
      </g>
      <path d="M40 410c60-14 130-14 200 0s130 14 200 0" fill="none" stroke="#f8c64d" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

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
