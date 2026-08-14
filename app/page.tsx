import Image from "next/image";
import Link from "next/link";
import { AlbumArt } from "@/components/album-art";
import { featuredAlbum, quotes, site } from "@/lib/site";

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="/images/recital.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:px-8 md:py-28">
          <Link
            href="/album"
            aria-label={`${featuredAlbum.title} — open the album page`}
            className="mx-auto w-full max-w-sm shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          >
            <AlbumArt album={featuredAlbum} priority />
          </Link>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-amber">The new album</p>
            <h1 className="mt-4 font-display text-6xl leading-[0.9] text-paper md:text-8xl">
              {featuredAlbum.title}
            </h1>
            <p className="mt-5 font-display text-2xl text-amber-bright">
              {featuredAlbum.ensemble}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-paper-muted">
              Piano · Double bass · Drums
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper-muted">
              {featuredAlbum.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/album"
                className="border border-amber bg-amber px-6 py-3 text-sm uppercase tracking-[0.18em] text-ink hover:bg-amber-bright"
              >
                Listen to Johnny
              </Link>
              <Link
                href="/about"
                className="border border-line px-6 py-3 text-sm uppercase tracking-[0.18em] text-paper hover:border-amber"
              >
                About Michael
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-amber">{site.name}</p>
          <h2 className="mt-3 font-display text-4xl text-paper md:text-5xl">
            Composer, solo double bassist, and musical director.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-muted">
            Born in Bucharest, trained at George Enescu Music School and the
            Royal Northern College of Music, Michael Cretu writes and performs
            from a family line of musicians that reaches back to the eighteenth
            century. He lives and works in Manchester.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-paper-muted">
            His music moves between contemporary classical writing, jazz, and
            the folk traditions of Eastern Europe — a shop window for the work
            as it stands now, with a new trio recording already in production.
          </p>
        </div>
        <blockquote className="self-center border-l border-amber pl-6">
          <p className="font-display text-2xl leading-snug text-paper">
            “{quotes[1].text}”
          </p>
          <footer className="mt-4 text-sm text-paper-muted">{quotes[1].source}</footer>
        </blockquote>
      </section>

      <section className="border-y border-line bg-ink-soft">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-3 md:px-8">
          <HomeCard
            href="/recordings"
            title="Recordings"
            text="Johnny, The Byzantium Connection, and a new album in production."
          />
          <HomeCard
            href="/miro"
            title="MIRO"
            text="Musical director of the Manchester International Roots Orchestra."
          />
          <HomeCard
            href="/contact"
            title="Bookings"
            text="Concerts, collaborations, and press enquiries."
          />
        </div>
      </section>
    </div>
  );
}

function HomeCard({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text: string;
}) {
  return (
    <Link href={href} className="group block">
      <p className="font-display text-3xl text-paper group-hover:text-amber-bright">
        {title}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-paper-muted">{text}</p>
    </Link>
  );
}
