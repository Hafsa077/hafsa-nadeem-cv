import { Fragment, type ReactElement } from "react";

/**
 * Renders the `**emphasis**` markers used in lib/cv.ts bullets.
 *
 * Deliberately tiny: the content only ever needs bold, so pulling in a
 * markdown parser for one rule would be more dependency than the job needs.
 */
export function RichText({ text }: { text: string }): ReactElement {
  const segments = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return (
    <>
      {segments.map((segment, i) => {
        const match = segment.match(/^\*\*([^*]+)\*\*$/);
        return match ? (
          <strong key={i} className="font-semibold text-ink">
            {match[1]}
          </strong>
        ) : (
          <Fragment key={i}>{segment}</Fragment>
        );
      })}
    </>
  );
}
