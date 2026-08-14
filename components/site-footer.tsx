import Link from "next/link";
import { nav, site, social } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-ink-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-3xl text-paper">{site.name}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-paper-muted">
              {site.footerLine}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper-muted">
            {social.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-bright"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.16em] text-paper-muted">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-paper">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
