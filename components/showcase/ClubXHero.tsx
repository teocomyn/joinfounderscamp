"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToSection } from "@/components/showcase/scrollNav";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AVATARS: { initials: string; from: string; to: string }[] = [
  { initials: "LM", from: "#F59E0B", to: "#B45309" },
  { initials: "TC", from: "#EF4444", to: "#7F1D1D" },
  { initials: "AK", from: "#10B981", to: "#065F46" },
  { initials: "SR", from: "#6366F1", to: "#3730A3" },
  { initials: "JD", from: "#EC4899", to: "#9D174D" },
];

const STATS = [
  { num: "14", label: "Places par session" },
  { num: "5k€+", label: "CA minimum requis" },
  { num: "3", label: "Destinations 2026" },
  { num: "100%", label: "Entrepreneurs vérifiés" },
];

export default function ClubXHero() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;
    const stats = statsRef.current;
    if (!overlay || !content || !stats) return;

    const vh = () => window.innerHeight;

    // Main overlay fades out quickly once user scrolls
    const overlayFade = gsap.to(overlay, {
      opacity: 0,
      y: -32,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: () => `+=${vh() * 0.55}`,
        scrub: true,
        onUpdate: (self) => {
          overlay.style.pointerEvents = self.progress > 0.2 ? "none" : "auto";
        },
      },
    });

    // Hero copy disappears first — avoids any overlap with scroll sections
    const contentFade = gsap.to(content, {
      opacity: 0,
      y: -24,
      scale: 0.98,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: () => `+=${vh() * 0.28}`,
        scrub: true,
      },
    });

    // Stats linger slightly then fade with overlay
    const statsFade = gsap.to(stats, {
      opacity: 0,
      y: 20,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: () => `top top-=${vh() * 0.12}`,
        end: () => `+=${vh() * 0.38}`,
        scrub: true,
      },
    });

    return () => {
      overlayFade.scrollTrigger?.kill();
      overlayFade.kill();
      contentFade.scrollTrigger?.kill();
      contentFade.kill();
      statsFade.scrollTrigger?.kill();
      statsFade.kill();
    };
  }, []);

  return (
    <div ref={overlayRef} className="cx-overlay">
      <div className="cx-scrim" aria-hidden="true" />
      <div className="cx-scrim-vignette" aria-hidden="true" />

      <div className="cx-hero">
        <div ref={contentRef} className="cx-hero-content">
          <div className="cx-badge animate-fade-rise">
            <div className="cx-avatars">
              {AVATARS.map((a) => (
                <span
                  key={a.initials}
                  className="cx-avatar"
                  style={{
                    background: `linear-gradient(135deg, ${a.from}, ${a.to})`,
                  }}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <span className="cx-badge-text">
              Session 01 · Été 2026 · Candidatures ouvertes
            </span>
          </div>

          <h1 className="cx-headline animate-fade-rise">
            Work. Escape. <span className="cx-headline-accent">Tribe.</span>
          </h1>

          <p className="cx-subtext animate-fade-rise-delay">
            Le camp de base privé des entrepreneurs qui performent, depuis les plus
            beaux endroits du monde.
          </p>

          <div className="cx-hero-actions animate-fade-rise-delay-2">
            <button
              className="cx-btn cx-btn-primary cx-btn-lg"
              onClick={() => scrollToSection("apply", 2.2)}
            >
              Déposer ma candidature
            </button>
            <button
              className="cx-btn cx-btn-ghost"
              onClick={() => scrollToSection("concept", 2.2)}
            >
              Découvrir le camp
              <span className="cx-btn-arrow" aria-hidden="true">↓</span>
            </button>
          </div>
        </div>
      </div>

      <div ref={statsRef} className="cx-stats-wrap animate-fade-rise-delay-3">
        <div className="cx-stats">
          {STATS.map((s, i) => (
            <div key={s.label} className="cx-stat">
              {i > 0 && <span className="cx-stat-divider" aria-hidden="true" />}
              <span className="cx-stat-num">{s.num}</span>
              <span className="cx-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
