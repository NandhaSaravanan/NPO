import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  id,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  id?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 id={id} className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-lg text-muted">{body}</p>}
    </Reveal>
  );
}

export function PageHeader({ title, body, children }: { title: string; body: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page section relative !py-14 md:!py-20">
        <h1 className="max-w-3xl text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted md:text-xl">{body}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
