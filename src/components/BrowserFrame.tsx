/**
 * A small browser window. Holds a real screenshot when there is one, otherwise a greyed-out
 * layout that is labeled as a sample so nobody mistakes it for a client's site.
 */
export function BrowserFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-ui border border-line bg-linen ${className}`}>
      <div className="flex items-center gap-3 border-b border-line bg-granite px-3 py-2" aria-hidden="true">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="h-4 flex-1 rounded-ui bg-granite" />
      </div>
      {children}
    </div>
  );
}

/** A small phone bezel, for showing a mobile view of the same content next to a BrowserFrame. */
export function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[1.1rem] border-4 border-pine bg-linen ${className}`}>
      <div className="flex justify-center border-b border-line bg-granite py-1" aria-hidden="true">
        <span className="h-1 w-8 rounded-full bg-line" />
      </div>
      {children}
    </div>
  );
}

/** Greyed placeholder page. The one call-to-action block borrows the card's accent. */
export function SampleLayout() {
  return (
    <div className="bg-linen p-4" role="img" aria-label="Sample website layout with placeholder blocks, not a real client">
      <div aria-hidden="true" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="h-3 w-16 rounded-ui bg-granite" />
          <span className="flex gap-2">
            <span className="h-2 w-8 rounded-ui bg-granite" />
            <span className="h-2 w-8 rounded-ui bg-granite" />
            <span className="h-2 w-8 rounded-ui bg-granite" />
          </span>
        </div>
        <div className="grid min-h-[8rem] grid-cols-[1.2fr_1fr] gap-3">
          <div className="flex flex-col justify-center gap-2">
            <span className="h-4 w-11/12 rounded-ui bg-line" />
            <span className="h-4 w-8/12 rounded-ui bg-line" />
            <span className="mt-1 h-2 w-full rounded-ui bg-granite" />
            <span className="h-2 w-10/12 rounded-ui bg-granite" />
            <span className="mt-2 h-6 w-20 rounded-ui" style={{ background: "var(--card-accent)" }} />
          </div>
          <span className="rounded-ui bg-granite" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <span className="h-8 rounded-ui bg-granite" />
          <span className="h-8 rounded-ui bg-granite" />
          <span className="h-8 rounded-ui bg-granite" />
        </div>
      </div>
    </div>
  );
}
