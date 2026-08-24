import Image from "next/image";
import type { Album } from "@/lib/site";

type AlbumArtProps = {
  album: Album;
  priority?: boolean;
  className?: string;
};

export function AlbumArt({ album, priority = false, className = "" }: AlbumArtProps) {
  if (album.cover) {
    return (
      <Image
        src={album.cover}
        alt={`${album.title} album cover`}
        width={800}
        height={800}
        priority={priority}
        sizes="(min-width: 768px) 420px, 90vw"
        className={`aspect-square w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex aspect-square w-full flex-col justify-between bg-[radial-gradient(circle_at_30%_20%,#1a2740,var(--ink))] p-8 ${className}`}
    >
      <p className="text-xs uppercase tracking-[0.28em] text-amber">{album.year}</p>
      <div>
        <p className="font-display text-4xl leading-none text-paper">{album.title}</p>
        <p className="mt-3 text-sm text-paper-muted">{album.ensemble}</p>
      </div>
    </div>
  );
}
