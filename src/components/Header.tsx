"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@content/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  // Remember which page the menu was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean | ((v: boolean) => boolean)) => {
    const value = typeof next === "function" ? next(open) : next;
    setOpenOn(value ? pathname : null);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const link = (href: string) =>
    `whitespace-nowrap px-3 py-2 font-display text-[1rem] font-bold decoration-2 underline-offset-8 hover:underline hover:decoration-myrtle ${
      pathname === href ? "underline decoration-myrtle" : ""
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-granite/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" aria-label={`${site.name} home`} className="rounded-lg">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className={link(item.href)} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
          <Link href={site.primaryCta.href} className="btn btn-primary ml-3 !min-h-10 !px-5 !py-2">
            {site.primaryCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-pine lg:hidden"
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

      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-line bg-granite lg:hidden">
        <ul className="container-page flex flex-col gap-1 py-4">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={`block ${link(item.href)} !py-3`} aria-current={pathname === item.href ? "page" : undefined}>
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
    </header>
  );
}
