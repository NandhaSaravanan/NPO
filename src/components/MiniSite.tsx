import type { MiniSiteContent } from "@content/types";

function MiniNav({ content, compact = false }: { content: MiniSiteContent; compact?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-2 border-b border-line bg-paper px-3 py-2.5 ${compact ? "text-[0.5rem]" : "text-[0.7rem]"}`}>
      <span className="flex items-center gap-1.5 font-extrabold text-pine">
        <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-myrtle" />
        {content.orgName}
      </span>
      {!compact && (
        <span className="hidden gap-3 font-semibold text-muted sm:flex">
          {content.navLinks.map((link) => <span key={link}>{link}</span>)}
        </span>
      )}
    </div>
  );
}

function MiniHero({ content, compact = false }: { content: MiniSiteContent; compact?: boolean }) {
  return (
    <div className="bg-pine px-3 py-5">
      <p className={`font-extrabold leading-tight text-paper ${compact ? "text-xs" : "text-base sm:text-lg"}`}>
        {content.headline}
      </p>
      <p className={`mt-1.5 max-w-[14rem] text-mist ${compact ? "text-[0.5rem]" : "text-[0.65rem] sm:text-xs"}`}>
        {content.subcopy}
      </p>
      <span className={`mt-2.5 inline-block rounded-ui bg-myrtle font-semibold text-white ${compact ? "px-2 py-1 text-[0.5rem]" : "px-2.5 py-1.5 text-[0.65rem]"}`}>
        {content.ctaLabel}
      </span>
    </div>
  );
}

function MiniBlocks({ content, compact = false }: { content: MiniSiteContent; compact?: boolean }) {
  return (
    <div className={`grid gap-2 bg-paper p-3 ${compact ? "grid-cols-1" : "grid-cols-3"}`}>
      {content.blocks.map((b) => (
        <div key={b.title} className="rounded-ui bg-granite p-2">
          <p className={`font-bold text-pine ${compact ? "text-[0.55rem]" : "text-[0.65rem]"}`}>{b.title}</p>
          {!compact && <p className="mt-1 text-[0.6rem] text-muted">{b.body}</p>}
        </div>
      ))}
    </div>
  );
}

/** A small, labeled concept mini-site rendered from content, so the same demo can appear at several sizes and places. */
export function MiniSite({ content, compact = false }: { content: MiniSiteContent; compact?: boolean }) {
  return (
    <>
      <MiniNav content={content} compact={compact} />
      <MiniHero content={content} compact={compact} />
      <MiniBlocks content={content} compact={compact} />
    </>
  );
}
