import type { ReactNode } from "react";

/** Shared two-column list used by the Skills and Certifications sections. */
export function DefinitionRows({
  rows,
}: {
  rows: { label: string; content: ReactNode }[];
}) {
  return (
    <dl className="m-0">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid gap-x-6 border-b border-rule py-3 last:border-b-0 sm:grid-cols-[112px_1fr]"
        >
          <dt className="mb-1 font-mono text-[0.74rem] uppercase tracking-wide text-ink-3 sm:mb-0 sm:pt-[3px]">
            {row.label}
          </dt>
          <dd className="m-0">{row.content}</dd>
        </div>
      ))}
    </dl>
  );
}
