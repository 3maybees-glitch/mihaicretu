"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site, social } from "@/lib/site";

const headerSocial = social.filter(
  (item) =>
    item.label === "YouTube" ||
    item.label === "Facebook page" ||
    item.label === "Instagram" ||
    item.label === "LinkedIn" ||
    item.label === "X",
);

function socialLabel(label: string) {
  return label === "Facebook page" ? "Facebook" : label;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-start justify-between gap-6 px-5 py-4 md:px-8">
        <div>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/michael-cretu-trio-logo.png"
              alt=""
              width={890}
              height={837}
              priority
              sizes="64px"
              className="h-14 w-auto shrink-0 md:h-16"
            />
            <span>
              <span className="block font-display text-xl tracking-wide text-paper md:text-2xl">
                {site.name}
              </span>
              <span className="block text-[11px] uppercase tracking-[0.22em] text-amber">
                {site.tagline}
              </span>
            </span>
          </Link>
          <nav
            className="mt-2 flex flex-wrap gap-x-3 gap-y-1"
            aria-label="Social"
          >
            {headerSocial.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] text-paper-muted hover:text-amber-bright"
              >
                {socialLabel(item.label)}
              </a>
            ))}
          </nav>
        </div>

        <nav className="hidden items-center gap-5 pt-2 lg:flex" aria-label="Primary">
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

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-line text-paper lg:hidden"
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
        </nav>
      ) : null}
    </header>
  );
}
