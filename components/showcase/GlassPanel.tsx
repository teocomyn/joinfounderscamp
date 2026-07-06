"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToSection } from "@/components/showcase/scrollNav";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BRANDS = ["LISBONNE", "GOZO", "BALI", "DEEP WORK", "MASTERMIND", "WORKATION"];

export default function GlassPanel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    const panel = panelRef.current;
    if (!container || !wrapper || !panel) return;

    const anim = gsap.fromTo(
      wrapper,
      { y: "100%" },
      {
        y: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1.5,
        },
      }
    );

    const onMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 2;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(panel, {
        x: moveX * 20,
        y: moveY * 20,
        rotationY: moveX * 4,
        rotationX: -moveY * 4,
        ease: "power3.out",
        duration: 1,
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="sc-panel-container">
      <div ref={wrapperRef} className="sc-panel-wrapper">
        <div ref={panelRef} className="sc-glass-panel">
          <div className="sc-glass-content">
            <p className="sc-glass-eyebrow">À propos du camp</p>
            <h2 className="sc-glass-title">
              On transforme le travail solitaire en semaines de{" "}
              <em>deep work</em> depuis les plus beaux endroits du monde. Une
              poignée d&apos;entrepreneurs qui <em>performent</em>, entourés des
              bonnes <em>personnes</em>.
            </h2>
            <button
              type="button"
              className="cx-btn cx-btn-lg sc-glass-cta"
              onClick={() => scrollToSection("apply", 2.2)}
            >
              Candidater maintenant
            </button>
          </div>

          <div className="sc-marquee-wrap">
            <div className="showcase-marquee-track">
              {Array.from({ length: 4 }).flatMap((_, dup) =>
                BRANDS.map((brand, i) => (
                  <span key={`${dup}-${i}`} className="showcase-brand">
                    {brand}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
