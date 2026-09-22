import type { Metadata } from "next";
import { Archivo, JetBrains_Mono, Source_Sans_3 } from "next/font/google";

import { profile } from "@/lib/cv";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name}, Backend Software Engineer`,
  description:
    "Backend software engineer in Lahore, Pakistan. Node.js, Express, Spring Boot, MySQL and AWS.",
  openGraph: {
    title: `${profile.name}, Backend Software Engineer`,
    description:
      "Backend software engineer in Lahore, Pakistan. Node.js, Express, Spring Boot, MySQL and AWS.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body text-base leading-relaxed`}
      >
        {children}
      </body>
    </html>
  );
}
