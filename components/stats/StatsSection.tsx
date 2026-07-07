import Reveal from "@/components/Reveal";
import { STATS_VIDEO } from "@/lib/content";

const STATS = [
  { value: "8–10", label: "Places par session" },
  { value: "10k€+", label: "CA minimum mensuel" },
  { value: "3", label: "Destinations 2027" },
  { value: "100%", label: "Entrepreneurs vérifiés" },
  { value: "72h", label: "Réponse candidature" },
];

export default function StatsSection() {
  return (
    <section id="stats" className="section section-stats" aria-labelledby="stats-heading">
      <div className="wrap stats-showcase">
        <Reveal className="stats-showcase-copy">
          <span className="pill-label">La tribu</span>
          <h2 id="stats-heading">
            Des sessions qui accélèrent{" "}
            <span className="accent">les fondateurs qui performent.</span>
          </h2>
          <p className="stats-showcase-lead">
            Fondateurs e-com, SaaS et agences à 10k€+/mois, dans des villas aux
            quatre coins du monde. Work, explore, build.
          </p>

          <div className="stats-cards">
            {STATS.map((s) => (
              <div key={s.label} className="stats-card">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="stats-showcase-visual">
          <div className="stats-video-frame">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="stats-video-frame-el"
              aria-label="Aperçu session Founders Camp"
            >
              <source src={STATS_VIDEO} type="video/mp4" />
            </video>
            <div className="stats-video-frame-glow" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
