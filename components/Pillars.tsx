import Image from "next/image";
import { Briefcase, Mountain, Users } from "lucide-react";
import { IMAGES, PILLARS } from "@/lib/content";

const ICONS = {
  Work: Briefcase,
  Escape: Mountain,
  Tribe: Users,
} as const;

export default function Pillars() {
  return (
    <div className="bento-stage">
      <Image
        src={IMAGES.bentoBg}
        alt=""
        fill
        sizes="(max-width: 1180px) 100vw, 1180px"
        quality={75}
        className="bento-stage-bg"
      />
      <div className="bento-stage-scrim" aria-hidden="true" />
      <div className="bento-grid">
        {PILLARS.map((p) => {
          const Icon = ICONS[p.label];
          return (
            <article key={p.label} className="bento-card">
              <span className="bento-label">{p.label}</span>
              <div className="bento-icon">
                <Icon className="bento-lucide" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div className="bento-foot">
                <span className="bento-time">{p.time}</span>
                <h3 className="bento-title">{p.title}</h3>
                <p className="bento-desc">{p.text}</p>
                <p className="bento-hint">{p.hint}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
