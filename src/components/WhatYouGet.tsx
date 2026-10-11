/** A heading beside one large statement. Kept to what is true of every site, with nothing boxed or repeated. */
export function WhatYouGet({ title, body, lead }: { title: string; body: string; lead: { title: string; body: string } }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
      <div>
        <h2 id="get" className="text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-md text-lg text-muted">{body}</p>
      </div>
      <div>
        <h3 className="text-4xl text-catawba md:text-5xl">{lead.title}</h3>
        <p className="mt-4 max-w-xl text-xl">{lead.body}</p>
      </div>
    </div>
  );
}
