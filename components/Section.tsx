import type { ReactNode } from "react";

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-5 border-b border-rule pb-2 font-mono text-[0.76rem] font-medium uppercase tracking-[0.15em] text-ink-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
