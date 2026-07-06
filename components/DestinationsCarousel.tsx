"use client";

import { useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { DESTINATIONS } from "@/lib/content";

export default function DestinationsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".dest");
    const gap = 22;
    const step = card ? card.offsetWidth + gap : 320;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return (
    <div className="dest-carousel">
      <div className="dest-carousel-controls">
        <button
          type="button"
          className="dest-arrow"
          aria-label="Destination précédente"
          onClick={() => scroll(-1)}
        >
          ←
        </button>
        <button
          type="button"
          className="dest-arrow"
          aria-label="Destination suivante"
          onClick={() => scroll(1)}
        >
          →
        </button>
      </div>

      <div className="dests dests--track" ref={trackRef}>
        {DESTINATIONS.map((d) => (
          <article
            key={d.name}
            className={`dest${d.open ? " dest--open" : ""}${d.featured ? " dest--featured" : ""}`}
          >
            <div className="dest-media">
              <Image
                src={d.image}
                alt={d.alt}
                fill
                sizes="(max-width: 960px) 85vw, 420px"
                className="dest-img"
              />
              <div className="dest-media-scrim" aria-hidden="true" />
              <span className={`tag${d.open ? " open" : ""}`}>{d.tag}</span>
            </div>
            <div className="dest-body">
              <span className="mono coords">{d.coords}</span>
              <h3>{d.name}</h3>
              <p className="when">{d.when}</p>
              <ul className="dest-perks">
                {d.perks.map((perk) => (
                  <li key={perk}>
                    <Check className="dest-perk-icon" strokeWidth={2.5} aria-hidden="true" />
                    {perk}
                  </li>
                ))}
              </ul>
              {!d.open && (
                <a href="#candidature" className="dest-waitlist">
                  Rejoindre la liste d&apos;attente →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="dest-section-cta">
        <a href="#candidature" className="btn btn-light">
          Candidater pour Lisbonne
          <span className="btn-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
