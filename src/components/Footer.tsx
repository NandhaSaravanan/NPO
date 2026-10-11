import Link from "next/link";
import { site } from "@content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label={`${site.name} home`} className="inline-block rounded-lg">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-muted">{site.description}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-body text-base font-bold text-muted">Explore</h2>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-semibold hover:underline">{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="font-semibold hover:underline">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
        <div>
          <h2 className="font-body text-base font-bold text-muted">Contact</h2>
          <p className="mt-4">
            <a href={`mailto:${site.email}`} className="font-semibold underline decoration-accent-500 underline-offset-4 hover:decoration-2">
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-muted">{site.region}</p>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-page py-5 text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. A volunteer studio in Union County, NC.
        </p>
      </div>
    </footer>
  );
}
