import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { publishers, works } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compositions",
  description:
    "Compositions and commissions by Michael Cretu, published by Liben Music and Recital Music.",
};

export default function CompositionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <PageIntro eyebrow="Works" title="Compositions">
        <p>
          Concert music for double bass, chamber and orchestral commissions,
          theatre scores, and arrangements drawn from Eastern European folk
          song. Scores are published by Liben Music and Recital Music.
        </p>
      </PageIntro>

      <ol className="mt-16 divide-y divide-line border-y border-line">
        {works.map((work) => (
          <li key={work.title} className="grid gap-3 py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <h2 className="font-display text-3xl text-paper">{work.title}</h2>
            <p className="leading-relaxed text-paper-muted">{work.detail}</p>
          </li>
        ))}
      </ol>

      <section className="mt-16">
        <h2 className="text-xs uppercase tracking-[0.28em] text-amber">
          Publishers
        </h2>
        <ul className="mt-5 space-y-2 text-paper-muted">
          {publishers.map((publisher) => (
            <li key={publisher.name}>
              {publisher.name}, {publisher.place}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
