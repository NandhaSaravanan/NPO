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
      <h2 id={id} className="text-3xl md:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-lg text-muted">{body}</p>}
    </div>
  );
}

export function PageHeader({ title, body, children }: { title: string; body: string; children?: React.ReactNode }) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="container-page py-14 md:py-20">
        <h1 className="max-w-3xl text-4xl md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted md:text-xl">{body}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
