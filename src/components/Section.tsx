export function SectionHeading({
  title,
  body,
  id,
  align = "left",
}: {
  title: string;
  body?: string;
  id?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 id={id} className="text-xl md:text-2xl">{title}</h2>
      {body && <p className="mt-4 text-base text-muted">{body}</p>}
    </div>
  );
}

export function PageHeader({ title, body, children }: { title: string; body: string; children?: React.ReactNode }) {
  return (
    <section className="texture border-b border-line bg-linen">
      <div className="container-page pb-14 pt-[calc(var(--nav-h)+2.5rem)] md:pb-20 md:pt-[calc(var(--nav-h)+3.5rem)]">
        <h1 className="max-w-3xl text-2xl sm:text-3xl md:text-4xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">{body}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
