import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Angad Singh — Portfolio",
    template: "%s — Angad Singh",
  },
  description:
    "Angad Singh — Computer Science student building systems that move, from smart gloves to AI products.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Angad Singh — Portfolio",
    description:
      "Computer Science student building systems that move, from smart gloves to AI products.",
    siteName: "Angad Singh",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Angad Singh — Portfolio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angad Singh — Portfolio",
    description:
      "Computer Science student building systems that move, from smart gloves to AI products.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} min-h-dvh bg-charcoal text-foreground antialiased`}
      >
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-copper focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-sand-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
