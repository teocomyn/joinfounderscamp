import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Founders Camp · Workations privées pour entrepreneurs",
  description:
    "The Founders Camp réunit des entrepreneurs et freelances qui performent pour 2 à 3 semaines de travail et d'aventure dans des villas à travers le monde. Sur candidature uniquement.",
  metadataBase: new URL("https://joinfounderscamp.com"),
  openGraph: {
    title: "The Founders Camp",
    description:
      "Travailler dur, depuis les plus beaux endroits du monde. Workations privées pour entrepreneurs qui performent. Sur candidature.",
    url: "https://joinfounderscamp.com",
    siteName: "The Founders Camp",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Founders Camp",
    description:
      "Workations privées pour entrepreneurs qui performent. Sur candidature.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
