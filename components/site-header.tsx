"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site, social } from "@/lib/site";

const headerSocial = social.filter(
  (item) =>
    item.label === "YouTube" ||
    item.label === "Facebook page" ||
    item.label === "Instagram",
);

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="group" onClick={() => setOpen(false)}>
          <p className="font-display text-xl tracking-wide text-paper md:text-2xl">
            {site.name}
          </p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-amber">
            {site.tagline}
          </p>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-5" aria-label="Primary">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] tracking-wide transition-colors ${
                    active
                      ? "text-amber-bright"
                      : "text-paper-muted hover:text-paper"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3 border-l border-line pl-5">
            {headerSocial.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-amber hover:text-amber-bright"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="text-lg leading-none">
            {open ? "×" : "☰"}
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-ink-soft px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 font-display text-2xl text-paper"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-col gap-2 border-t border-line pt-4">
            {headerSocial.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
