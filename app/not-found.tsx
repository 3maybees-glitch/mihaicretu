import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-28 text-center">
      <p className="text-xs uppercase tracking-[0.28em] text-amber">404</p>
      <h1 className="mt-4 font-display text-5xl text-paper">This page is not here.</h1>
      <p className="mt-4 text-paper-muted">This address is not on the site.</p>
      <Link
        href="/"
        className="mt-8 inline-block border border-amber px-5 py-3 text-xs uppercase tracking-[0.18em] text-amber hover:bg-amber hover:text-ink"
      >
        Return home
      </Link>
    </div>
  );
}
