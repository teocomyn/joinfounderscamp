import Image from "next/image";
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
            Work le matin, sport l&apos;après-midi, tribu le soir. Le quotidien
            au camp, en images.
          </p>
        </Reveal>

        <Reveal className="moments-grid reveal-stagger">
          {CAMP_MOMENTS.map((m) => (
            <figure key={m.image} className="moment-card">
              <div className="moment-media">
                <Image
                  src={m.image}
                  alt={m.alt}
                  fill
                  sizes="(max-width: 680px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  className="moment-img"
                />
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
