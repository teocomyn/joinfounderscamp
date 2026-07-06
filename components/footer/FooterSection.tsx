"use client";

import Image from "next/image";
import { motion } from "motion/react";
import BrandLogo from "@/components/BrandLogo";
import FitnessButton from "@/components/footer/FitnessButton";
import { FOOTER_VIDEO, FOUNDER, SITE } from "@/lib/content";

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
      <video
        className="footer-stage-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={FOOTER_VIDEO} type="video/mp4" />
      </video>
      <div className="footer-stage-scrim" aria-hidden="true" />

      <div className="footer-stage-inner">
        <motion.footer
          className="footer-glass"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="footer-founder">
            <div className="footer-founder-media">
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.name}
                fill
                sizes="80px"
                className="footer-founder-img"
              />
            </div>
            <div className="footer-founder-copy">
              <strong>{FOUNDER.name}</strong>
              <span>{FOUNDER.title}</span>
              <p>{FOUNDER.bio}</p>
              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-founder-link"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          <div className="footer-grid">
            <div className="footer-logo-cell">
              <BrandLogo className="footer-brand-logo" />
            </div>

            <h2 className="footer-heading">Work. Escape. Tribe.</h2>

            <div className="footer-actions">
              <FitnessButton
                href="#candidature"
                variant="primary"
                className="fitness-btn--compact"
              >
                Candidater
              </FitnessButton>
              <FitnessButton
                href="#concept"
                variant="secondary"
                className="fitness-btn--compact"
              >
                Découvrir le camp
              </FitnessButton>
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
        </motion.footer>
      </div>
    </section>
  );
}
