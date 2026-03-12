import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    "Angad Singh — Computer Science student building practical AI, data, and software systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Angad Singh — Portfolio",
    description:
      "Computer Science student building practical AI, data, and software systems.",
    siteName: "Angad Singh",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Angad Singh — Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angad Singh — Portfolio",
    description:
      "Computer Science student building practical AI, data, and software systems.",
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-[#07070a] text-zinc-100 antialiased`}
      >
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-zinc-950/90 focus:px-4 focus:py-3 focus:text-sm focus:text-zinc-50 focus:ring-2 focus:ring-white/20"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
