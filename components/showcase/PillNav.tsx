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
  { label: "Candidater", section: "apply" },
];

export default function PillNav() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLButtonElement>(null);
  const logoSvgRef = useRef<HTMLSpanElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const onItemClick = (section: ScrollSection) => {
    scrollToSection(section);
    setMobileOpen(false);
  };

  // Fade in after entry hero scrolls away
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.set(container, { opacity: 0, y: -12 });

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: () => `+=${window.innerHeight * 0.55}`,
      scrub: true,
      onUpdate: (self) => {
        const opacity = Math.min(1, self.progress * 1.8);
        container.style.opacity = String(opacity);
        container.style.transform = `translateX(-50%) translateY(${-12 * (1 - opacity)}px)`;
      },
    });

    return () => st.kill();
  }, []);

  useEffect(() => {
    const build = () => {
      pillRefs.current.forEach((pill, i) => {
        const circle = circleRefs.current[i];
        if (!pill || !circle) return;

        const w = pill.offsetWidth;
        const h = pill.offsetHeight;
        const R = (w * w) / 4 + h * h;
        const r = R / (2 * h);
        const D = 2 * r + 2;
        const delta = r - Math.sqrt(r * r - (w * w) / 4) + 1;

        gsap.set(circle, {
          width: D,
          height: D,
          bottom: -delta,
          left: "50%",
          xPercent: -50,
          transformOrigin: `50% ${D - delta}px`,
        });
      });
    };

    build();
    window.addEventListener("resize", build);
    return () => window.removeEventListener("resize", build);
  }, []);

  const enter = (i: number) => {
    const circle = circleRefs.current[i];
    const pill = pillRefs.current[i];
    if (!circle || !pill) return;
    const label = pill.querySelector(".pill-label");
    const labelHover = pill.querySelector(".pill-label-hover");

    tlRefs.current[i]?.kill();
    const tl = gsap.timeline();
    tl.to(circle, { scale: 3, duration: 0.3, ease: "power2.out" }, 0);
    tl.to(label, { yPercent: -100, duration: 0.3, ease: "power2.out" }, 0);
    tl.fromTo(
      labelHover,
      { yPercent: 100 },
      { yPercent: 0, duration: 0.3, ease: "power2.out" },
      0
    );
    tlRefs.current[i] = tl;
  };

  const leave = (i: number) => {
    const circle = circleRefs.current[i];
    const pill = pillRefs.current[i];
    if (!circle || !pill) return;
    const label = pill.querySelector(".pill-label");
    const labelHover = pill.querySelector(".pill-label-hover");

    tlRefs.current[i]?.kill();
    const tl = gsap.timeline();
    tl.to(circle, { scale: 0, duration: 0.2, ease: "power2.in" }, 0);
    tl.to(label, { yPercent: 0, duration: 0.2, ease: "power2.in" }, 0);
    tl.to(labelHover, { yPercent: 100, duration: 0.2, ease: "power2.in" }, 0);
    tlRefs.current[i] = tl;
  };

  const logoEnter = () => {
    if (logoSvgRef.current) {
      gsap.to(logoSvgRef.current, { rotate: 360, duration: 0.2 });
    }
  };
  const logoLeave = () => {
    if (logoSvgRef.current) {
      gsap.set(logoSvgRef.current, { rotate: 0 });
    }
  };

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.6, ease: "back.out(1.7)", delay: 0.3 }
      );
    }
    if (itemsRef.current) {
      gsap.fromTo(
        itemsRef.current,
        { width: 0, opacity: 0 },
        { width: "auto", opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.45 }
      );
    }
  }, []);

  const Logo = (
    <span ref={logoSvgRef} className="logo-svg-container">
      <svg width="24" height="24" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="pill-logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#C2410C" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="20" fill="url(#pill-logo-grad)" />
        <path d="M20 9 L28 30 H12 Z" fill="#fff" opacity="0.95" />
      </svg>
    </span>
  );

  return (
    <div ref={containerRef} className="pill-nav-container">
      <div className="pill-nav">
        <button
          ref={logoRef}
          className="pill-logo"
          onMouseEnter={logoEnter}
          onMouseLeave={logoLeave}
          onClick={() => onItemClick("home")}
          aria-label="The Founders Camp — Accueil"
        >
          {Logo}
        </button>

        <div ref={itemsRef} className="pill-nav-items desktop-only" style={{ overflow: "hidden" }}>
          <ul className="pill-list">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.label}>
                <button
                  ref={(el) => {
                    pillRefs.current[i] = el;
                  }}
                  className="pill"
                  onMouseEnter={() => enter(i)}
                  onMouseLeave={() => leave(i)}
                  onClick={() => onItemClick(item.section)}
                >
                  <span
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                    className="hover-circle"
                  />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover">{item.label}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="mobile-menu-button mobile-only"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span
            className="hamburger-line"
            style={
              mobileOpen
                ? { transform: "rotate(45deg) translateY(3px)", transition: "transform 0.3s" }
                : { transition: "transform 0.3s" }
            }
          />
          <span
            className="hamburger-line"
            style={
              mobileOpen
                ? { transform: "rotate(-45deg) translateY(-3px)", transition: "transform 0.3s" }
                : { transition: "transform 0.3s" }
            }
          />
        </button>
      </div>

      <div className={`mobile-menu-popover mobile-only${mobileOpen ? " open" : ""}`}>
        <ul className="mobile-menu-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <button className="mobile-menu-link" onClick={() => onItemClick(item.section)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
