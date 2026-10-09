import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page section text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-semibold">We could not find that page</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">It may have moved, or the link may be mistyped.</p>
      <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
    </section>
  );
}
