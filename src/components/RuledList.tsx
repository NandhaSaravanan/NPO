/** Title on the left, text on the right, hairlines between. Used where content is a plain list of parallel items. */
export function RuledList({ items, className = "" }: { items: { title: string; body: string }[]; className?: string }) {
  return (
    <ul className={`border-t-2 border-pine ${className}`}>
      {items.map((item) => (
        <li key={item.title} className="grid gap-x-10 gap-y-1 border-b border-line py-6 md:grid-cols-[minmax(0,15rem)_1fr]">
          <h3 className="text-xl">{item.title}</h3>
          <p className="max-w-prose text-muted">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
