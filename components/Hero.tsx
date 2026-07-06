import { HERO_VIDEO, IMAGES, SITE } from "@/lib/content";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="pill-label">{SITE.session} · Sur candidature</span>
          <h1>
            Work. Escape. <span className="accent">Tribe.</span>
          </h1>
          <p className="hero-meta">
            2 semaines · 8 fondateurs · 10k€+/mois · {SITE.sessionShort}
          </p>
          <p className="hero-sub">
            Le camp que tu aurais dû rejoindre il y a 2 ans : deep work, sport et
            aventure depuis les plus beaux spots du monde, entouré de gens plus
            forts que toi.
          </p>
          <div className="hero-ctas">
            <a href="#candidature" className="btn btn-dark">
              Déposer ma candidature
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a href="#concept" className="btn btn-outline">
              Découvrir le camp
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={IMAGES.heroPoster}
              aria-label="Aperçu d'une session Founders Camp"
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
            <div className="hero-frame-glow" aria-hidden="true" />
          </div>
        </div>
      </div>
    </header>
  );
}
