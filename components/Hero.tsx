import { HERO_VIDEO, SITE } from "@/lib/content";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="pill-label">{SITE.session} · Sur candidature</span>
          <p className="hero-tagline">
            Work. Escape. <span className="accent">Tribe.</span>
          </p>
          <p className="hero-meta">
            2 semaines · 8 fondateurs · 10k€+/mois · e-com &amp; digital
          </p>
          <p className="hero-sub">
            Workations privées pour fondateurs e-com, SaaS et agences. Deep work le
            matin, sport l&apos;après-midi, mastermind le soir, entouré de gens
            plus forts que toi.
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
              preload="auto"
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
