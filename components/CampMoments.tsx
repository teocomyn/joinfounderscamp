import Reveal from "@/components/Reveal";
import { CAMP_MOMENTS } from "@/lib/content";

export default function CampMoments() {
  return (
    <section id="moments" className="section section-moments" aria-labelledby="moments-heading">
      <div className="wrap">
        <Reveal className="sec-head sec-head--center">
          <span className="pill-label">Au camp</span>
          <h2 id="moments-heading">Pour te projeter, concrètement.</h2>
          <p>
            Même rythme chaque jour : produire le matin, bouger l&apos;après-midi,
            échanger le soir. Pas de stock photos : le format, c&apos;est ça.
          </p>
        </Reveal>

        <Reveal className="moments-grid reveal-stagger">
          {CAMP_MOMENTS.map((m) => (
            <figure key={m.label} className="moment-card">
              <div className="moment-media">
                <img src={m.image} alt={m.alt} loading="lazy" decoding="async" />
              </div>
              <figcaption className="moment-caption">
                <span>{m.caption}</span>
                <strong>{m.label}</strong>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
