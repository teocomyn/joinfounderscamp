"use client";

import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";

const LINKS = [
  { href: "#concept", label: "Concept" },
  { href: "#destinations", label: "Destinations" },
  { href: "#criteres", label: "Sélection" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
        <div className="nav-shell wrap">
          <a href="#" className="logo" onClick={closeMenu}>
            <BrandLogo className="logo-img" priority />
          </a>

          <div className="nav-pill">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="nav-burger"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
            <a href="#candidature" className="btn btn-nav">
              Candidater
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </nav>

      <div
        className={`nav-overlay${menuOpen ? " nav-overlay--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="nav-overlay-close"
          aria-label="Fermer le menu"
          onClick={closeMenu}
        >
          ×
        </button>
        <nav className="nav-overlay-nav" aria-label="Navigation mobile">
          <BrandLogo className="nav-overlay-logo" variant="light" priority />
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={closeMenu}>
              {l.label}
            </a>
          ))}
          <a href="#candidature" className="btn btn-dark nav-overlay-cta" onClick={closeMenu}>
            Déposer ma candidature
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </>
  );
}
