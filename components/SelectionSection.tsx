import Reveal from "@/components/Reveal";
import { CRITERIA } from "@/lib/content";

export default function SelectionSection() {
  return (
    <section id="criteres" className="section section-dark section-selection">
      <div className="wrap">
        <div className="selection-head">
          <span className="pill-label pill-label--light">Sélection</span>
          <h2>On ne recrute pas des touristes.</h2>
          <p>
            Chaque candidature est examinée à la main. Voici ce qu&apos;on regarde
            avant de te répondre sous 72h.
          </p>
        </div>

        <Reveal className="criteria reveal-stagger">
          {CRITERIA.map((c) => (
            <div key={c.num} className="crit">
              <span className="crit-num">{c.num}</span>
              <p>{c.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
