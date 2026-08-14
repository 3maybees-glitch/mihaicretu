import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { concerts, venues } from "@/lib/site";

export const metadata: Metadata = {
  title: "Concerts",
  description:
    "Selected concerts and venues for Michael Cretu, composer and solo double bassist based in Manchester.",
};

export default function ConcertsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <PageIntro eyebrow="Diary" title="Concerts">
        <p>
          A selection of recent and notable appearances. Upcoming dates will be
          listed here as they are confirmed.
        </p>
      </PageIntro>

      <ol className="mt-16 divide-y divide-line border-y border-line">
        {concerts.map((concert) => (
          <li
            key={`${concert.year}-${concert.title}`}
            className="grid gap-2 py-7 md:grid-cols-[6rem_1fr]"
          >
            <p className="text-sm uppercase tracking-[0.16em] text-amber">
              {concert.year}
            </p>
            <div>
              <h2 className="font-display text-3xl text-paper">{concert.title}</h2>
              <p className="mt-2 text-paper-muted">{concert.place}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-16">
        <h2 className="text-xs uppercase tracking-[0.28em] text-amber">
          Selected venues
        </h2>
        <ul className="mt-5 columns-1 gap-x-12 text-paper-muted sm:columns-2">
          {venues.map((venue) => (
            <li key={venue} className="break-inside-avoid py-1">
              {venue}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
