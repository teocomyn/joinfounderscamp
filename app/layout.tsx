import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const OG_IMAGE =
  "https://images.unsplash.com/photo-1555881400-74d7aca8bbbf?auto=format&fit=crop&w=1200&h=630&q=80";

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
        alt: "The Founders Camp — Session Lisbonne 2027",
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
    <html lang="fr" className={GeistSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Fredoka:wght@400;500;600;700&family=Instrument+Sans:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
