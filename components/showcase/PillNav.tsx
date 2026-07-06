"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToSection, type ScrollSection } from "@/components/showcase/scrollNav";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Item = {
  label: string;
  section: ScrollSection;
};

const NAV_ITEMS: Item[] = [
  { label: "Accueil", section: "home" },
  { label: "Concept", section: "concept" },
  { label: "Destinations", section: "destinations" },
];

export default function PillNav() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onItemClick = (section: ScrollSection) => {
    scrollToSection(section);
    setMobileOpen(false);
  };

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: () => `+=${window.innerHeight * 0.12}`,
      scrub: true,
      onUpdate: (self) => setScrolled(self.progress > 0.05),
    });

    return () => st.kill();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sc-header${scrolled ? " sc-header--scrolled" : ""}`}
    >
      <div className="sc-header-bar">
        <button
          className="sc-header-logo"
          onClick={() => onItemClick("home")}
          aria-label="The Founders Camp · Accueil"
        >
          <svg width="28" height="28" viewBox="0 0 40 40" aria-hidden="true">
            <defs>
              <linearGradient id="sc-logo-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#C2410C" />
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="20" fill="url(#sc-logo-grad)" />
            <path d="M20 9 L28 30 H12 Z" fill="#fff" opacity="0.95" />
          </svg>
          <span className="sc-header-brand desktop-only">Founders Camp</span>
        </button>

        <nav className="sc-header-nav desktop-only" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className="sc-header-link"
              onClick={() => onItemClick(item.section)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sc-header-actions">
          <button
            className="sc-header-cta"
            onClick={() => onItemClick("apply")}
          >
            Candidater
          </button>

          <button
            className="sc-header-menu mobile-only"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span className={`sc-menu-line${mobileOpen ? " open-a" : ""}`} />
            <span className={`sc-menu-line${mobileOpen ? " open-b" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`sc-header-drawer mobile-only${mobileOpen ? " open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className="sc-header-drawer-link"
            onClick={() => onItemClick(item.section)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
