import Image from "next/image";

const BENTO_BG =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=80";

const PILLARS = [
  {
    label: "Work",
    title: "Deep work le matin",
    text: "Wifi fibre vérifié, espaces dédiés, focus collectif.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="bento-icon-svg">
        <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Escape",
    title: "Aventure l'après-midi",
    text: "Surf, rando, plongée — on coupe pour mieux revenir.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="bento-icon-svg">
        <path
          d="M24 6 L42 38 H6 Z"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Tribe",
    title: "Un cercle sélectionné",
    text: "Masterminds le soir, deals et collabs naturelles.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="bento-icon-svg">
        <path d="M8 8 L40 40 M40 8 L8 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <div className="bento-stage">
      <Image
        src={BENTO_BG}
        alt=""
        fill
        sizes="(max-width: 1180px) 100vw, 1180px"
        className="bento-stage-bg"
      />
      <div className="bento-stage-scrim" aria-hidden="true" />
      <div className="bento-grid">
        {PILLARS.map((p) => (
          <article key={p.label} className="bento-card">
            <span className="bento-label">{p.label}</span>
            <div className="bento-icon">{p.icon}</div>
            <div className="bento-foot">
              <h3 className="bento-title">{p.title}</h3>
              <p className="bento-desc">{p.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
