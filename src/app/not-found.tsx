import Link from "next/link";

export default function NotFound() {
  return (
    <section className="texture">
      <div className="container-page section text-center">
      <h1 className="text-2xl md:text-4xl">We could not find that page</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">It may have moved, or the link may be mistyped.</p>
      <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
      </div>
    </section>
  );
}
