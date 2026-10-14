"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@content/site";
import { Logo } from "./Logo";

const navLink = "nav-link whitespace-nowrap px-3 py-2 text-sm font-semibold";

/**
 * Scroll distance at which the bar turns solid. The hero headline starts about 144px from the top on desktop and the
 * bar ends at 72px, so text would reach the bar at roughly 70px of scroll. Switching at 48px finishes the 240ms
 * transition before any content slides under the links. Waiting until the whole hero has passed would let the
 * headline run underneath transparent nav text.
 */
const SOLID_AFTER = 48;

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // Remember which page the menu was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean | ((v: boolean) => boolean)) => {
    const value = typeof next === "function" ? next(open) : next;
    setOpenOn(value ? pathname : null);
  };
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Only the home page has a dark hero under the bar, so only it gets a transparent state.
  useEffect(() => {
    if (!isHome) return;
    let frame = 0;
    const check = () => {
      frame = 0;
      setPastHero(window.scrollY > SOLID_AFTER);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [isHome]);

  const solid = !isHome || pastHero || open;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-40 px-4 md:px-6">
      <div data-solid={solid} className="nav-bar on-dark pointer-events-auto mx-auto max-w-6xl rounded-bar border">
        <div className="grid h-14 grid-cols-[1fr_auto] items-center px-4 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
          <Link href="/" aria-label={`${site.name} home`} className="justify-self-start rounded-ui">
            <Logo onDark />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className={navLink} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <Link href={site.primaryCta.href} className="btn btn-primary !min-h-10 !px-5 !py-2 !text-sm">
              {site.primaryCta.label}
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-ui border border-pine-edge text-paper hover:bg-paper/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-pine-edge lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={`block ${navLink} !py-3`} aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href={site.primaryCta.href} className="btn btn-primary w-full">
                {site.primaryCta.label}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
