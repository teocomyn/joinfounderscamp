"use client";

import Reveal from "@/components/Reveal";
import { Globe } from "@/components/ui/globe";

const DESTINATIONS = [
  { name: "Lisbonne", detail: "Session 01 · Été 2027", open: true },
  { name: "Gozo", detail: "Session 02 · 2027", open: false },
  { name: "Bali", detail: "Session 03 · À annoncer", open: false },
];

export default function GlobeSection() {
  return (
    <section id="globe" className="section section-globe">
      <div className="wrap">
        <Reveal className="sec-head sec-head--center globe-sec-head">
          <span className="pill-label pill-label--light">Carte mondiale</span>
          <h2>Un camp. Trois continents. Zéro compromis.</h2>
          <p>
            Fais pivoter le globe — Lisbonne, Gozo et Bali t&apos;attendent.
            Chaque spot est testé : fibre, cadre, terrain de jeu.
          </p>
        </Reveal>

        <Reveal>
          <div className="globe-demo">
            <span className="globe-demo-title" aria-hidden="true">
              World
            </span>
            <Globe className="globe-demo-globe" />
            <div className="globe-demo-radial" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="globe-dest-row">
          {DESTINATIONS.map((d) => (
            <div key={d.name} className={`globe-dest-pill${d.open ? " globe-dest-pill--open" : ""}`}>
              <span className="globe-dest-dot" aria-hidden="true" />
              <div>
                <strong>{d.name}</strong>
                <span>{d.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="globe-demo-cta">
          <a href="#candidature" className="btn btn-light">
            Candidater pour Lisbonne
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <p className="globe-hint">Glisse ou fais pivoter le globe</p>
        </div>
      </div>
    </section>
  );
}
