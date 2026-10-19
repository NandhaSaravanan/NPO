import Link from "next/link";
import { site } from "@content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="texture border-t border-line bg-linen">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label={`${site.name} home`} className="inline-block rounded-ui">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-muted">{site.description}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-base font-semibold text-muted">Explore</h2>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link font-semibold">{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/how-it-works" className="link font-semibold">How it works</Link>
            </li>
            <li>
              <Link href="/what-we-offer" className="link font-semibold">What we offer</Link>
            </li>
            <li>
              <Link href="/why-free" className="link font-semibold">Why free?</Link>
            </li>
            <li>
              <Link href="/privacy" className="link font-semibold">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/credits" className="link font-semibold">Photo credits</Link>
            </li>
          </ul>
        </nav>
        <div>
          <h2 className="text-base font-semibold text-muted">Contact</h2>
          <p className="mt-4">
            <a href={`mailto:${site.email}`} className="link font-semibold">
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
