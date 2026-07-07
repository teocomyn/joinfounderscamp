"use client";

import { MapPin } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Globe } from "@/components/ui/globe";

const DESTINATIONS = [
  { name: "Lisbonne", detail: "Session 01 · Été 2027", open: true },
  { name: "Gozo", detail: "Session 02 · 2027", open: false },
  { name: "Bali", detail: "Session 03 · À annoncer", open: false },
];

export function GlobeDemo() {
  return (
    <div className="globe-demo">
      <div className="globe-demo-brand">
        <BrandLogo className="globe-demo-logo" />
      </div>
      <Globe className="globe-demo-globe" />
      <div className="globe-demo-radial" aria-hidden="true" />
    </div>
  );
}

export default function GlobeSection() {
  return (
    <section id="globe" className="section section-globe">
      <div className="wrap section-globe-inner">
        <div className="globe-intro">
          <span className="pill-label">Carte mondiale</span>
          <h2>THE FOUNDERS CAMP · partout où tu dois être.</h2>
          <p>
            Work. Escape. Tribe. depuis Lisbonne, Gozo ou Bali. Fais pivoter le
            globe : chaque spot est testé : fibre, cadre, groupe calibré 8–10
            fondateurs.
          </p>
        </div>

        <GlobeDemo />

        <div className="globe-dest-row">
          {DESTINATIONS.map((d) => (
            <div
              key={d.name}
              className={`globe-dest-pill${d.open ? " globe-dest-pill--open" : ""}`}
            >
              <MapPin className="globe-dest-icon" strokeWidth={2} aria-hidden="true" />
              <div>
                <strong>{d.name}</strong>
                <span>{d.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="globe-demo-cta">
          <a href="#candidature" className="btn btn-dark">
            Déposer ma candidature
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <p className="globe-hint">Glisse pour explorer · Session 01 · Lisbonne 2027</p>
        </div>
      </div>
    </section>
  );
}
