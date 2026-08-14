import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "MIRO",
  description:
    "Michael Cretu is founder and musical director of the Manchester International Roots Orchestra, set up with RNCM and Community Arts North West.",
};

export default function MiroPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <PageIntro eyebrow="Ensemble" title="MIRO">
        <p>
          The Manchester International Roots Orchestra is an ensemble of
          musicians from all over the world, living in Manchester. Michael Cretu
          is its founder and musical director.
        </p>
      </PageIntro>

      <div className="mt-14 grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-lg leading-relaxed text-paper-muted">
          <p>
            MIRO was set up by Community Arts North West in partnership with the
            Royal Northern College of Music. It began by bringing RNCM students
            together with musicians from world traditions. It is now an
            independent orchestra, still close to both founding partners, and
            gathers players whose roots include Romania, Pakistan, Kurdistan,
            Iran, Bosnia, Serbia, Scotland, England, and West Africa.
          </p>
          <p>
            The repertoire moves through Eastern European melody, Middle Eastern
            percussion and voice, Sufi chant, African gospel, rap, hip-hop,
            classical music and jazz. In 2019 RNCM commissioned a forty-minute
            contemporary suite from Michael to close the New Music Festival —
            string writing, narration, and songs chosen with the musicians
            themselves.
          </p>
          <p>
            The orchestra has appeared at the Festival of Manchester, Horizons
            Festival at HOME, Tara Arts in London, Journeys Festival, and the
            Edinburgh Festival.
          </p>
          <a
            href="https://www.miro-ensemble.org/"
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-amber px-5 py-3 text-xs uppercase tracking-[0.18em] text-amber hover:bg-amber hover:text-ink"
          >
            miro-ensemble.org
          </a>
        </div>
        <Image
          src="/images/recital.jpg"
          alt="Michael Cretu performing on double bass"
          width={720}
          height={960}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
