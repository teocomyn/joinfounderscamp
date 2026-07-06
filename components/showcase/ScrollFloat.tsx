"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  children: string;
};

export default function ScrollFloat({ children }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const lines = useMemo(() => {
    return children.split("\n").map((line) => line.split(" "));
  }, [children]);

  useEffect(() => {
    const root = rootRef.current;
    const el = containerRef.current;
    if (!root || !el) return;

    const chars = el.querySelectorAll<HTMLElement>(".char");
    const vh = () => window.innerHeight;

    // Hidden on the hero — only appears once the user starts scrolling
    const visibility = gsap.fromTo(
      root,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: () => `top top-=${vh() * 0.35}`,
          end: () => `top top-=${vh() * 0.55}`,
          scrub: true,
        },
      }
    );

    const fadeOut = gsap.fromTo(
      root,
      { opacity: 1 },
      {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: () => `top top-=${vh() * 0.95}`,
          end: () => `top top-=${vh() * 1.15}`,
          scrub: true,
        },
      }
    );

    const anim = gsap.fromTo(
      chars,
      {
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        transformOrigin: "50% 0%",
      },
      {
        opacity: 0,
        yPercent: 180,
        scaleY: 1.15,
        scaleX: 0.92,
        stagger: 0.04,
        ease: "power2.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: document.documentElement,
          start: () => `top top-=${vh() * 0.45}`,
          end: () => `top top-=${vh() * 1.05}`,
          scrub: 1.2,
        },
      }
    );

    return () => {
      visibility.scrollTrigger?.kill();
      visibility.kill();
      fadeOut.scrollTrigger?.kill();
      fadeOut.kill();
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [children]);

  return (
    <div ref={rootRef} className="scroll-float-root" aria-hidden="true">
      <div ref={containerRef} className="scroll-float-text">
        {lines.map((words, li) => (
          <span key={li} className="scroll-float-line">
            {words.map((word, wi) => (
              <span key={wi} className="scroll-float-word">
                {word.split("").map((ch, ci) => (
                  <span key={ci} className="char">
                    {ch}
                  </span>
                ))}
                {wi < words.length - 1 && (
                  <span className="char" dangerouslySetInnerHTML={{ __html: "&nbsp;" }} />
                )}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
