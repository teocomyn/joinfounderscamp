"use client";

import { useEffect, useState } from "react";

export default function StickyApplyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky-apply${visible ? " sticky-apply--visible" : ""}`}
      aria-hidden={!visible}
    >
      <a href="#candidature" className="sticky-apply-btn">
        Candidater
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
