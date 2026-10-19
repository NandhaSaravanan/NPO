import type { MiniSiteContent } from "@content/types";

/**
 * Every color and the headline font here come from `content.palette`, never from Lumen's own
 * design tokens — see the note on MiniSiteContent. This is what keeps three demos from all
 * looking like the studio's own site in three different crops.
 */
function MiniNav({ content, compact = false }: { content: MiniSiteContent; compact?: boolean }) {
  const { palette: p } = content;
  return (
    <div
      className={`flex items-center justify-between gap-2 px-3 py-2.5 ${compact ? "text-[0.5rem]" : "text-[0.7rem]"}`}
      style={{ background: p.navBg, color: p.navText, borderBottom: `1px solid ${p.accentBg}33` }}
    >
      <span className="flex items-center gap-1.5 font-bold" style={{ fontFamily: p.headlineFont }}>
        <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full" style={{ background: p.accentBg }} />
        {content.orgName}
      </span>
      {!compact && (
        <span className="hidden gap-3 font-semibold sm:flex" style={{ opacity: 0.75 }}>
          {content.navLinks.map((link) => <span key={link}>{link}</span>)}
        </span>
      )}
    </div>
  );
}

function MiniHero({ content, compact = false }: { content: MiniSiteContent; compact?: boolean }) {
  const { palette: p } = content;
  return (
    <div className="px-3 py-5" style={{ background: p.heroBg }}>
      <p
        className={`font-bold leading-tight ${compact ? "text-xs" : "text-base sm:text-lg"}`}
        style={{ color: p.heroText, fontFamily: p.headlineFont }}
      >
        {content.headline}
      </p>
      <p className={`mt-1.5 max-w-[14rem] ${compact ? "text-[0.5rem]" : "text-[0.65rem] sm:text-xs"}`} style={{ color: p.heroSubtext }}>
        {content.subcopy}
      </p>
      <span
        className={`mt-2.5 inline-block rounded font-semibold ${compact ? "px-2 py-1 text-[0.5rem]" : "px-2.5 py-1.5 text-[0.65rem]"}`}
        style={{ background: p.accentBg, color: p.accentText }}
      >
        {content.ctaLabel}
      </span>
    </div>
  );
}

function MiniBlocks({ content, compact = false }: { content: MiniSiteContent; compact?: boolean }) {
  const { palette: p } = content;
  return (
    <div className={`grid gap-2 p-3 ${compact ? "grid-cols-1" : "grid-cols-3"}`} style={{ background: p.navBg }}>
      {content.blocks.map((b) => (
        <div key={b.title} className="rounded p-2" style={{ background: p.blockBg }}>
          <p className={`font-bold ${compact ? "text-[0.55rem]" : "text-[0.65rem]"}`} style={{ color: p.blockTitle, fontFamily: p.headlineFont }}>
            {b.title}
          </p>
          {!compact && <p className="mt-1 text-[0.6rem]" style={{ color: p.blockBody }}>{b.body}</p>}
        </div>
      ))}
    </div>
  );
}

/** A small, labeled concept mini-site rendered entirely from one demo's own invented identity. */
export function MiniSite({ content, compact = false }: { content: MiniSiteContent; compact?: boolean }) {
  return (
    <>
      <MiniNav content={content} compact={compact} />
      <MiniHero content={content} compact={compact} />
      <MiniBlocks content={content} compact={compact} />
    </>
  );
}
