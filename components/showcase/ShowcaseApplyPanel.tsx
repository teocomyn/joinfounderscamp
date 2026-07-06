"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ApplyForm from "@/components/ApplyForm";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ShowcaseApplyPanel() {
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
        x: moveX * 12,
        y: moveY * 12,
        rotationY: moveX * 2,
        rotationX: -moveY * 2,
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
    <div
      ref={containerRef}
      id="candidature"
      className="sc-panel-container"
      aria-label="Candidature"
    >
      <div ref={wrapperRef} className="sc-panel-wrapper sc-panel-wrapper--tall">
        <div ref={panelRef} className="sc-glass-panel sc-glass-panel--apply">
          <div className="sc-apply-grid">
            <div className="sc-apply-copy">
              <span className="sc-eyebrow sc-eyebrow--light">Candidature · Session 01</span>
              <h2 className="sc-apply-title">Réserve ta place au camp.</h2>
              <p className="sc-apply-lead">
                5 minutes pour candidater. On revient vers toi sous 72h. Si ton profil
                matche, on t&apos;appelle pour un échange rapide avant de valider ta place.
              </p>
              <div className="sc-apply-note">
                <strong>14 places max.</strong> Premier arrivé, premier étudié. Chaque
                session est examinée à la main.
              </div>
            </div>
            <div className="sc-apply-form">
              <ApplyForm />
            </div>
          </div>
          <footer className="sc-apply-foot">
            <span>THE FOUNDERS CAMP</span>
            <span>Work hard. From anywhere.</span>
            <a href="mailto:hello@joinfounderscamp.com">hello@joinfounderscamp.com</a>
          </footer>
        </div>
      </div>
    </div>
  );
}
