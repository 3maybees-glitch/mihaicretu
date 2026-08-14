import type { Metadata } from "next";
import Link from "next/link";
import { AlbumArt } from "@/components/album-art";
import { PageIntro } from "@/components/page-intro";
import { albums } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recordings",
  description:
    "Recordings by Michael Cretu, solo double bassist and composer: Johnny with the trio, and The Byzantium Connection.",
};

export default function RecordingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <PageIntro eyebrow="Discography" title="Recordings">
        <p>
          Two albums are available now. A new trio record is in production and
          will take this page when it is ready.
        </p>
      </PageIntro>

      <div className="mt-16 grid gap-16">
        {albums.map((album) => (
          <article
            key={album.id}
            className="grid items-start gap-8 border-t border-line pt-12 md:grid-cols-[240px_1fr]"
          >
            {album.featured ? (
              <Link href="/album">
                <AlbumArt album={album} />
              </Link>
            ) : (
              <AlbumArt album={album} />
            )}
            <div>
              {album.featured ? (
                <p className="text-xs uppercase tracking-[0.28em] text-amber">
                  Featured
                </p>
              ) : null}
              <h2 className="mt-2 font-display text-4xl text-paper">{album.title}</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-paper-muted">
                {album.ensemble} · {album.label} · {album.year}
              </p>
              <p className="mt-5 max-w-2xl leading-relaxed text-paper-muted">
                {album.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {album.featured ? (
                  <Link
                    href="/album"
                    className="border border-amber px-4 py-2 text-xs uppercase tracking-[0.18em] text-amber hover:bg-amber hover:text-ink"
                  >
                    Album page
                  </Link>
                ) : null}
                {album.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-line px-4 py-2 text-xs uppercase tracking-[0.18em] text-paper-muted hover:border-amber hover:text-paper"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
