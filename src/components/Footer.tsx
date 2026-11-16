import Link from "next/link";
import { site } from "@content/site";

/**
 * A designed close, not a sitemap: the name returns at full width on the forest field, with
 * the links set beneath it. Nothing here is separated by a rule — the tone step between the
 * footer's field and the copyright strip does that work.
 */
export function Footer() {
  return (
    <footer className="chapter-forest">
      <div className="container-page pb-10 pt-16 md:pb-14 md:pt-24">
        {/* The wordmark as the close, cut to the full width of the page. */}
        <Link href="/" aria-label={`${site.name} home`} className="block">
          <span className="block font-display text-4xl font-extrabold leading-[0.8] tracking-[-0.045em] text-linen">
            {site.name}
          </span>
        </Link>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <p className="max-w-sm text-base text-sage">{site.description}</p>

          <nav aria-label="Footer">
            <h2 className="font-display text-base font-extrabold text-linen">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {[
                ...site.nav,
                { href: "/how-it-works", label: "How it works" },
                { href: "/what-we-offer", label: "What we offer" },
                { href: "/why-free", label: "Why free?" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/credits", label: "Photo credits" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link text-base text-linen">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-base font-extrabold text-linen">Contact</h2>
            <p className="mt-4">
              <a href={`mailto:${site.email}`} className="link text-base text-linen">{site.email}</a>
            </p>
            <p className="mt-2 text-base text-sage">{site.region}</p>
          </div>
        </div>
      </div>

      <div className="bg-pine-deep">
        <p className="container-page py-5 text-sm text-sage">
          © {new Date().getFullYear()} {site.name}. A volunteer studio in Union County, NC.
        </p>
      </div>
    </footer>
  );
}
