"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import ScrollVideo from "@/components/showcase/ScrollVideo";
import ClubXHero from "@/components/showcase/ClubXHero";
import PillNav from "@/components/showcase/PillNav";
import ShowcasePinnedSections from "@/components/showcase/ShowcasePinnedSections";
import GlassPanel from "@/components/showcase/GlassPanel";
import ShowcaseApplyPanel from "@/components/showcase/ShowcaseApplyPanel";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4";

export default function ShowcaseExperience() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    document.documentElement.classList.add("showcase-active");
    document.body.classList.add("showcase-active");
    document.body.style.background = "#000";

    const refresh = () => ScrollTrigger.refresh(true);

    refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 300);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      document.documentElement.classList.remove("showcase-active");
      document.body.classList.remove("showcase-active");
      document.body.style.background = "";
    };
  }, []);

  return (
    <div className="showcase-root">
      <ScrollVideo src={VIDEO_SRC} />
      <ClubXHero />
      <PillNav />

      <div id="scroll-driver" className="sc-scroll-driver">
        <ShowcasePinnedSections />

        <div className="sc-finale-zone">
          <GlassPanel />
        </div>

        <div className="sc-finale-zone sc-finale-zone--apply">
          <ShowcaseApplyPanel />
        </div>
      </div>
    </div>
  );
}
