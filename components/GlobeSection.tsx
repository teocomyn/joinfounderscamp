import Reveal from "@/components/Reveal";
import { GlobeLive } from "@/components/ui/cobe-globe-live";

export default function GlobeSection() {
  return (
    <section id="globe" className="section section-globe">
      <div className="wrap globe-layout">
        <Reveal className="globe-copy">
          <span className="pill-label pill-label--light">Carte mondiale</span>
          <h2>Un camp. Trois continents. Zéro compromis.</h2>
          <p>
            Chaque session Founders Camp pose ses valises dans une villa testée —
            fibre vérifiée, cadre exceptionnel, groupe de 8 à 10 fondateurs.
            Fais tourner le globe et explore où le camp s&apos;installe ensuite.
          </p>
          <ul className="globe-list">
            <li>
              <strong>Lisbonne</strong> — Session 01 · Été 2027 · Candidatures ouvertes
            </li>
            <li>
              <strong>Gozo, Malte</strong> — Session 02 · 2027
            </li>
            <li>
              <strong>Bali</strong> — Session 03 · À annoncer
            </li>
          </ul>
          <a href="#candidature" className="btn btn-light">
            Candidater pour Lisbonne
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </Reveal>

        <Reveal className="globe-visual">
          <GlobeLive />
          <p className="globe-hint">Glisse pour explorer · Clique et fais pivoter</p>
        </Reveal>
      </div>
    </section>
  );
}
