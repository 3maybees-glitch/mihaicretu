import type { Metadata } from "next";
import { AlbumArt } from "@/components/album-art";
import { PageIntro } from "@/components/page-intro";
import { SiteLogo } from "@/components/site-logo";
import { featuredAlbum } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Johnny | Michael Cretu Trio",
  },
  description:
    "Johnny, the 2022 album by the Michael Cretu Trio — piano, double bass and drums — dedicated to Johnny Răducanu.",
};

export default function AlbumPage() {
  const album = featuredAlbum;

  return (
    <article className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid items-start gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="md:sticky md:top-28">
          <AlbumArt album={album} priority />
          <ul className="mt-6 flex flex-wrap gap-3">
            {album.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-amber px-4 py-2 text-xs uppercase tracking-[0.18em] text-amber hover:bg-amber hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-8 w-36">
            <SiteLogo />
          </div>
          <PageIntro eyebrow="The new album" title={album.title}>
            <p>
              {album.ensemble} · {album.label} · {album.year}
            </p>
          </PageIntro>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-muted">
            {album.summary}
          </p>
          {album.dedication ? (
            <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-paper">
              {album.dedication}
            </p>
          ) : null}

          <h2 className="mt-14 text-xs uppercase tracking-[0.28em] text-amber">
            Tracklist
          </h2>
          <ol className="mt-5 divide-y divide-line border-y border-line">
            {album.tracks.map((track, index) => (
              <li
                key={track.title}
                className="grid grid-cols-[2rem_1fr_auto] items-baseline gap-4 py-4"
              >
                <span className="text-sm text-amber">{index + 1}</span>
                <div>
                  <p className="text-paper">{track.title}</p>
                  {track.note ? (
                    <p className="mt-1 text-sm text-paper-muted">{track.note}</p>
                  ) : null}
                </div>
                <span className="text-sm text-paper-muted">{track.duration}</span>
              </li>
            ))}
          </ol>

          <h2 className="mt-14 text-xs uppercase tracking-[0.28em] text-amber">
            Credits
          </h2>
          <ul className="mt-5 space-y-2 text-paper-muted">
            {album.credits.map((credit) => (
              <li key={credit}>{credit}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
