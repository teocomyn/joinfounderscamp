"use client";

import { useRef } from "react";
import Image from "next/image";

const DESTINATIONS = [
  {
    name: "Lisbonne, Portugal",
    coords: "38.7223° N · 9.1393° W",
    when: "Session 01 · Été 2027 · 2 semaines",
    tag: "Candidatures ouvertes",
    open: true,
    image:
      "https://images.unsplash.com/photo-1711125174987-645d1a9d6466?auto=format&fit=crop&w=1200&q=80",
    alt: "Tramway jaune à Lisbonne dans une rue pavée",
  },
  {
    name: "Gozo, Malte",
    coords: "36.0443° N · 14.2512° E",
    when: "Session 02 · 2027 · 3 semaines",
    tag: "Bientôt",
    open: false,
    image:
      "https://images.unsplash.com/photo-1668647184912-67da07256e3e?auto=format&fit=crop&w=1200&q=80",
    alt: "Vue sur la mer et les falaises depuis Gozo, Malte",
  },
  {
    name: "Bali, Indonésie",
    coords: "8.6500° S · 115.2167° E",
    when: "Session 03 · À annoncer",
    tag: "Bientôt",
    open: false,
    image:
      "https://images.unsplash.com/photo-1680100595862-9c8803a9e7da?auto=format&fit=crop&w=1200&q=80",
    alt: "Rizières en terrasses de Tegallalang à Bali",
  },
];

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
        <button type="button" className="dest-arrow" aria-label="Destination précédente" onClick={() => scroll(-1)}>
          ←
        </button>
        <button type="button" className="dest-arrow" aria-label="Destination suivante" onClick={() => scroll(1)}>
          →
        </button>
      </div>
      <div className="dests dests--track" ref={trackRef}>
        {DESTINATIONS.map((d) => (
          <article key={d.name} className={`dest${d.open ? " dest--open" : ""}${d.open ? " dest--featured" : ""}`}>
            <div className="dest-media">
              <Image
                src={d.image}
                alt={d.alt}
                fill
                sizes="(max-width: 960px) 85vw, 380px"
                className="dest-img"
              />
              <div className="dest-media-scrim" aria-hidden="true" />
              <span className={`tag${d.open ? " open" : ""}`}>{d.tag}</span>
            </div>
            <div className="dest-body">
              <span className="mono coords">{d.coords}</span>
              <h3>{d.name}</h3>
              <p className="when">{d.when}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
