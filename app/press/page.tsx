import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { pressItems, quotes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press quotes and articles about Michael Cretu, composer and solo double bassist.",
};

export default function PressPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <PageIntro eyebrow="Words" title="Press">
        <p>Selected notices, interviews, and reviews.</p>
      </PageIntro>

      <div className="mt-16 grid gap-10">
        {quotes.map((quote) => (
          <blockquote key={quote.source} className="border-l border-amber pl-6">
            <p className="font-display text-2xl leading-snug text-paper md:text-3xl">
              “{quote.text}”
            </p>
            <footer className="mt-4 text-sm text-paper-muted">{quote.source}</footer>
          </blockquote>
        ))}
      </div>

      <section className="mt-20">
        <h2 className="text-xs uppercase tracking-[0.28em] text-amber">
          Articles
        </h2>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {pressItems.map((item) => (
            <li key={item.href} className="py-5">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <p className="font-display text-2xl text-paper group-hover:text-amber-bright">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-paper-muted">
                  {item.source}
                  {item.year ? ` · ${item.year}` : ""}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
