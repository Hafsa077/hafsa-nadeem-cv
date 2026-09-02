# hafsa-nadeem-cv

My CV as a small Next.js site. Built with the App Router, TypeScript and
Tailwind CSS, deployed on Vercel.

**Live:** https://hafsa-nadeem-cv1.vercel.app/

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To produce a production build locally:

```bash
npm run build
npm start
```

## How it's put together

All CV content lives in [`lib/cv.ts`](lib/cv.ts) as typed data — roles,
projects, skills, education and credentials. The components in
[`components/`](components) map over those structures and never hard-code copy,
so updating the CV means editing one file rather than hunting through JSX.

| Path | What it holds |
| --- | --- |
| `lib/cv.ts` | All content, typed. The single source of truth. |
| `app/layout.tsx` | Fonts (via `next/font`), metadata, the HTML shell. |
| `app/page.tsx` | Composes the sections from the data. |
| `components/Entry.tsx` | A CV row: date rail plus content. Used by experience, projects and education. |
| `components/RichText.tsx` | Renders the `**emphasis**` markers used in bullet copy. |
| `app/globals.css` | Design tokens and base styles. |

### Theming

Colours are CSS custom properties declared in `app/globals.css` and exposed to
Tailwind through `tailwind.config.ts`. Only the token values are redefined for
dark mode, so components carry one set of classes and need no `dark:` variants.
The page follows the visitor's system theme via `prefers-color-scheme`, and
respects `prefers-reduced-motion`.

### Type

Three faces, each with a job: **Archivo** for the name and headings,
**Source Sans 3** for body copy, **JetBrains Mono** for dates, metric figures
and labels — the mono keeps figures in tabular alignment.

## Deploying

Push to GitHub, import the repository at [vercel.com/new](https://vercel.com/new),
and accept the defaults — Vercel detects Next.js and needs no configuration.
Every push to `main` redeploys.

## Licence

Content © Hafsa Nadeem. Code is free to reuse.
