/**
 * A small browser window. Holds a real screenshot when there is one, otherwise a greyed-out
 * layout that is labeled as a sample so nobody mistakes it for a client's site.
 */
export function BrowserFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-sm border border-line bg-paper ${className}`}>
      <div className="flex items-center gap-3 border-b border-line bg-granite px-3 py-2" aria-hidden="true">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="h-4 flex-1 rounded-sm bg-mist" />
      </div>
      {children}
    </div>
  );
}

/** Greyed placeholder page. The one call-to-action block borrows the card's accent. */
export function SampleLayout() {
  return (
    <div className="aspect-[16/10] bg-paper p-4" role="img" aria-label="Sample website layout with placeholder blocks, not a real client">
      <div aria-hidden="true" className="flex h-full flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="h-3 w-16 rounded-sm bg-mist" />
          <span className="flex gap-2">
            <span className="h-2 w-8 rounded-sm bg-mist" />
            <span className="h-2 w-8 rounded-sm bg-mist" />
            <span className="h-2 w-8 rounded-sm bg-mist" />
          </span>
        </div>
        <div className="grid flex-1 grid-cols-[1.2fr_1fr] gap-3">
          <div className="flex flex-col justify-center gap-2">
            <span className="h-4 w-11/12 rounded-sm bg-line" />
            <span className="h-4 w-8/12 rounded-sm bg-line" />
            <span className="mt-1 h-2 w-full rounded-sm bg-mist" />
            <span className="h-2 w-10/12 rounded-sm bg-mist" />
            <span className="mt-2 h-6 w-20 rounded-sm" style={{ background: "var(--card-accent)" }} />
          </div>
          <span className="rounded-sm bg-mist" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <span className="h-8 rounded-sm bg-mist" />
          <span className="h-8 rounded-sm bg-mist" />
          <span className="h-8 rounded-sm bg-mist" />
        </div>
      </div>
    </div>
  );
}
