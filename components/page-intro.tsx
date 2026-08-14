import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.28em] text-amber">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 font-display text-5xl leading-none text-paper md:text-6xl">
        {title}
      </h1>
      {children ? (
        <div className="mt-6 text-lg leading-relaxed text-paper-muted">{children}</div>
      ) : null}
    </header>
  );
}
