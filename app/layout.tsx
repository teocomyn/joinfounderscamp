import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { fredoka, ibmPlexMono } from "@/lib/fonts";
import "./globals.css";

const OG_IMAGE = "https://joinfounderscamp.com/logo-founders-camp-dark.png";

export const metadata: Metadata = {
  title: "The Founders Camp · Workations privées pour entrepreneurs",
  description:
    "The Founders Camp réunit des entrepreneurs et freelances qui performent pour 2 à 3 semaines de travail et d'aventure dans des villas à travers le monde. Sur candidature uniquement.",
  metadataBase: new URL("https://joinfounderscamp.com"),
  openGraph: {
    title: "The Founders Camp · Work. Escape. Tribe.",
    description:
      "Le camp de base privé des entrepreneurs qui performent. 2 à 3 semaines de deep work et d'aventure. Sur candidature.",
    url: "https://joinfounderscamp.com",
    siteName: "The Founders Camp",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "The Founders Camp · Session Lisbonne 2027",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Founders Camp",
    description:
      "Workations privées pour entrepreneurs qui performent. Sur candidature.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${GeistSans.variable} ${fredoka.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/camp/hero-work.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
