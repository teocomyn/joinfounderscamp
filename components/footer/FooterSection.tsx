"use client";

import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";
import { FOOTER_IMAGE, FOUNDERS, SITE } from "@/lib/content";

const NAV_LINKS = [
  { label: "Concept", href: "#concept" },
  { label: "Destinations", href: "#destinations" },
  { label: "Sélection", href: "#criteres" },
  { label: "Contact", href: `mailto:${SITE.email}` },
];

const CONNECT_LINKS = [
  { label: "Candidater", href: "#candidature" },
  { label: "Instagram", href: SITE.instagram, external: true },
  { label: "LinkedIn", href: SITE.linkedin, external: true },
];

export default function FooterSection() {
  return (
    <section className="footer-stage" aria-label="Pied de page">
      <Image
        className="footer-stage-photo"
        src={FOOTER_IMAGE}
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="footer-stage-scrim" aria-hidden="true" />

      <div className="footer-stage-inner">
        <footer className="footer-glass">
          <div className="footer-founders">
            {FOUNDERS.map((f) => (
              <div key={f.name} className="footer-founder">
                <div className="footer-founder-media">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    sizes="80px"
                    className="footer-founder-img"
                  />
                </div>
                <div className="footer-founder-copy">
                  <strong>{f.name}</strong>
                  <span>{f.title}</span>
                  <p>{f.bio}</p>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-founder-link"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="footer-grid">
            <div className="footer-logo-cell">
              <BrandLogo className="footer-brand-logo" />
            </div>

            <h2 className="footer-heading">Work. Escape. Tribe.</h2>

            <div className="footer-actions">
              <a href="#candidature" className="fitness-btn fitness-btn--primary fitness-btn--compact">
                Candidater
              </a>
              <a href="#concept" className="fitness-btn fitness-btn--secondary fitness-btn--compact">
                Découvrir le camp
              </a>
            </div>

            <nav className="footer-menu" aria-label="Navigation">
              <span className="footer-menu-label">Navigation</span>
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="footer-menu-link">
                  {l.label}
                </a>
              ))}
            </nav>

            <nav className="footer-menu" aria-label="Réseaux">
              <span className="footer-menu-label">Connect</span>
              {CONNECT_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="footer-menu-link"
                  {...(l.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-legal">
            <span>© The Founders Camp 2027</span>
            <span>joinfounderscamp.com</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
