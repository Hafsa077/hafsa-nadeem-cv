import type { ReactNode } from "react";

import { RichText } from "./RichText";
import { StackChips } from "./StackChips";

/**
 * One row of the CV: a date rail on the left, content on the right.
 * The rail encodes chronology, which is information the reader scans for —
 * it collapses above the content on narrow screens.
 */
export function Entry({
  rail,
  badge,
  heading,
  where,
  stack,
  bullets,
}: {
  rail: ReactNode;
  badge?: string;
  heading: ReactNode;
  where?: ReactNode;
  stack?: string[];
  bullets?: string[];
}) {
  return (
    <article className="mb-6 grid gap-x-6 border-b border-rule pb-6 last:mb-0 last:border-b-0 last:pb-0 sm:grid-cols-[112px_1fr]">
      <div className="mb-2 font-mono text-[0.76rem] leading-normal tabular-nums text-ink-3 sm:mb-0 sm:pt-1">
        {rail}
        {badge ? (
          <span className="ml-2 inline-block rounded-sm bg-accent-soft px-[7px] py-px text-[0.68rem] uppercase tracking-wider text-accent sm:ml-0 sm:mt-1.5">
            {badge}
          </span>
        ) : null}
      </div>

      <div>
        <h3 className="mb-1 font-display text-[1.16rem] font-semibold tracking-[-0.011em]">
          {heading}
        </h3>

        {where ? (
          <p className="mb-2.5 text-[0.9rem] italic text-ink-2">{where}</p>
        ) : null}

        {stack ? <StackChips items={stack} /> : null}

        {bullets ? (
          <ul className="max-w-measure list-disc pl-[18px] marker:text-rule-strong">
            {bullets.map((bullet) => (
              <li key={bullet} className="mb-[7px] last:mb-0">
                <RichText text={bullet} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
