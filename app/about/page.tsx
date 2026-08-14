import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "About",
  description:
    "Biography of Michael Cretu, composer and solo double bassist: Bucharest, George Enescu Music School, RNCM, and Manchester.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid items-start gap-12 md:grid-cols-[1fr_280px]">
        <PageIntro eyebrow="Biography" title="About">
          <p>
            Composer, solo double bassist, and musical director. Born in
            Bucharest. Lives and works in Manchester.
          </p>
        </PageIntro>
        <Image
          src="/images/portrait.jpg"
          alt="Michael Cretu playing the double bass"
          width={560}
          height={420}
          className="w-full object-cover"
        />
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <section className="space-y-5 text-lg leading-relaxed text-paper-muted">
          <p>
            Michael Cretu began the double bass at twelve. At nineteen he joined
            the Romanian National Radio Symphony Orchestra. He studied at George
            Enescu Music School in Bucharest, then won a scholarship for
            postgraduate study with Duncan McTier at the Royal Northern College
            of Music in Manchester.
          </p>
          <p>
            He is an internationally recognised musician and composer, an
            associate and artist in residence at the University of Salford, and
            founder and musical director of the Manchester International Roots
            Orchestra, set up with Community Arts North West and RNCM.
          </p>
          <p>
            Alongside solo and chamber work he plays in a contemporary jazz trio
            with Ed Barnwell on piano and Myke Wilson on drums. He has performed
            as a soloist, chamber musician, orchestral player and jazz musician
            across Europe and South America.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.28em] text-amber">
            A family of musicians
          </h2>
          <div className="mt-5 space-y-5 leading-relaxed text-paper-muted">
            <p>
              The Cretu family has made music since the seventeenth and
              eighteenth centuries. In the mid-1700s, during Ottoman rule of the
              Romanian principalities, family musicians belonged to the
              monastery of Bistrița. They were later settled at Odaia
              Vizirului, by the Danube, and there is strong evidence they became
              musicians in residence to the court.
            </p>
            <p>
              In 1848 Petrea Cretu, a violinist and singer, moved to Brăila. In
              1884 he was among the first folk musicians to speak and play at
              the Bucharest Philharmonic. Michael’s father, Dumitru Cretu, was a
              pianist. His uncle, Johnny Răducanu (Răducan Cretu), is considered
              the father of Romanian jazz. An annual festival in Brăila still
              carries his name.
            </p>
            <p>
              That inheritance — Roma, Romanian and Jewish strands, folk music
              and the concert hall in the same house — is the ground of
              Michael’s writing. He has said that Romanian folk song holds
              together the east and west of the old Roman world: the language
              given by Rome, and the long reach of Byzantium, the Orthodox
              Church, and the Ottoman empire.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
