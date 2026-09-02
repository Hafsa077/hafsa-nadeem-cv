import type { Config } from "tailwindcss";

/**
 * Colours resolve to CSS variables declared in app/globals.css, which flip
 * under `prefers-color-scheme`. That means components never need `dark:`
 * variants — one class works in both themes.
 */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ground: "var(--ground)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        rule: "var(--rule)",
        "rule-strong": "var(--rule-strong)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        measure: "70ch",
        sheet: "860px",
      },
    },
  },
  plugins: [],
} satisfies Config;
