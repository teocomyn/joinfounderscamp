import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export type ScrollSection =
  | "home"
  | "concept"
  | "destinations"
  | "selection"
  | "apply";

/** Scroll positions tuned to the 750vh scroll driver layout */
export function getScrollTarget(section: ScrollSection): number {
  const vh = window.innerHeight;
  const driver = document.getElementById("scroll-driver");
  const driverHeight = driver?.offsetHeight ?? vh * 7.5;

  const targets: Record<ScrollSection, number> = {
    home: 0,
    concept: vh * 1.6,
    destinations: vh * 3.4,
    selection: vh * 5.2,
    apply: driverHeight - vh * 0.5,
  };

  return Math.max(0, targets[section]);
}

export function scrollToSection(section: ScrollSection, duration = 2.6) {
  gsap.to(window, {
    duration,
    scrollTo: getScrollTarget(section),
    ease: "power3.inOut",
  });
}
