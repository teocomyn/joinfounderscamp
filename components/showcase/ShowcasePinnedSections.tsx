"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLARS = [
  {
    tag: "Work",
    title: "Deep work le matin",
    text: "Wifi fibre vérifié, espaces dédiés, sessions de focus en commun. L'énergie du groupe tire tout le monde vers le haut.",
  },
  {
    tag: "Escape",
    title: "Aventure l'après-midi",
    text: "Surf, rando, plongée, sorties locales. On coupe vraiment pour mieux revenir.",
  },
  {
    tag: "Tribe",
    title: "Un cercle sélectionné",
    text: "Entrepreneurs vérifiés, masterminds le soir, deals et collabs qui naissent naturellement.",
  },
];

const DESTINATIONS = [
  {
    status: "Ouvert",
    coords: "38.7223° N · 9.1393° W",
    name: "Lisbonne",
    detail: "Session 01 · Été 2027 · 2 semaines",
    open: true,
  },
  {
    status: "Bientôt",
    coords: "36.0443° N · 14.2512° E",
    name: "Gozo",
    detail: "Session 02 · 2027",
    open: false,
  },
  {
    status: "Bientôt",
    coords: "8.6500° S · 115.2167° E",
    name: "Bali",
    detail: "Session 03 · À annoncer",
    open: false,
  },
];

const CRITERIA = [
  "Tu génères au moins 10 000€ de CA mensuel avec ton activité.",
  "Tu peux travailler 100% en remote pendant 2 à 3 semaines.",
  "Tu donnes autant que tu prends : leviers, réseau, expérience.",
  "Tu es facile à vivre. L'état d'esprit compte autant que les chiffres.",
];

function useBeatFade(
  ref: RefObject<HTMLElement | null>,
  startVh: number,
  peakVh: number,
  endVh: number
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const apply = (scrollY: number) => {
      const y = scrollY / window.innerHeight;
      let opacity = 0;
      let yOffset = 28;

      if (y >= startVh && y <= endVh) {
        if (y < peakVh) {
          const t = (y - startVh) / (peakVh - startVh);
          opacity = t;
          yOffset = 28 * (1 - t);
        } else {
          const t = (y - peakVh) / (endVh - peakVh);
          opacity = 1 - t;
          yOffset = -20 * t;
        }
      }

      el.style.opacity = String(opacity);
      el.style.transform = `translateY(${yOffset}px)`;
      el.style.pointerEvents = opacity > 0.35 ? "auto" : "none";
    };

    apply(window.scrollY);

    const st = ScrollTrigger.create({
      trigger: "#scroll-driver",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => apply(self.scroll()),
    });

    return () => st.kill();
  }, [startVh, peakVh, endVh]);
}

export default function ShowcasePinnedSections() {
  const conceptRef = useRef<HTMLElement>(null);
  const destRef = useRef<HTMLElement>(null);
  const selectRef = useRef<HTMLElement>(null);

  useBeatFade(conceptRef, 1.0, 1.6, 2.4);
  useBeatFade(destRef, 2.6, 3.2, 4.0);
  useBeatFade(selectRef, 4.2, 4.8, 5.6);

  return (
    <>
      <section ref={conceptRef} id="concept" className="sc-beat" aria-label="Le concept">
        <div className="sc-beat-inner">
          <span className="sc-eyebrow">Le concept</span>
          <h2 className="sc-beat-title">
            Le meilleur environnement de travail
            <br />
            <em>n&apos;est pas un bureau.</em>
          </h2>
          <div className="sc-pillars">
            {PILLARS.map((p) => (
              <article key={p.tag} className="sc-pillar">
                <span className="sc-pillar-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={destRef} id="destinations" className="sc-beat" aria-label="Destinations">
        <div className="sc-beat-inner">
          <span className="sc-eyebrow">Destinations</span>
          <h2 className="sc-beat-title">
            Un camp de base.
            <br />
            <em>Qui change de coordonnées.</em>
          </h2>
          <div className="sc-dests">
            {DESTINATIONS.map((d) => (
              <article key={d.name} className={`sc-dest${d.open ? " sc-dest--open" : ""}`}>
                <span className={`sc-dest-status${d.open ? " sc-dest-status--open" : ""}`}>
                  {d.status}
                </span>
                <span className="sc-dest-coords">{d.coords}</span>
                <h3>{d.name}</h3>
                <p>{d.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={selectRef} id="selection" className="sc-beat" aria-label="Sélection">
        <div className="sc-beat-inner sc-beat-inner--narrow">
          <span className="sc-eyebrow">Sélection</span>
          <h2 className="sc-beat-title">
            On ne recrute pas
            <br />
            <em>des touristes.</em>
          </h2>
          <ul className="sc-criteria">
            {CRITERIA.map((c) => (
              <li key={c}>
                <span className="sc-check" aria-hidden="true">
                  ✓
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
