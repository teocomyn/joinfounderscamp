const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4";

const POSTER =
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80";

const STATS = [
  { value: "8–10", label: "Places par session" },
  { value: "10k€+", label: "CA minimum requis" },
  { value: "3", label: "Destinations 2027" },
  { value: "100%", label: "Entrepreneurs vérifiés" },
];

const GLASS = [
  { icon: "◎", label: "Fibre vérifiée", sub: "Backup 4G/5G" },
  { icon: "◆", label: "8–10 founders max", sub: "Groupe calibré" },
  { icon: "✦", label: "Mastermind chaque soir", sub: "Partage & deals" },
];

export default function Hero() {
  return (
    <>
      <header className="hero">
        <div className="hero-deco hero-deco--1" aria-hidden="true">✦</div>
        <div className="hero-deco hero-deco--2" aria-hidden="true">✦</div>
        <div className="hero-deco hero-deco--3" aria-hidden="true">+</div>

        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="pill-label">Session 01 · Été 2027 · Sur candidature</span>
            <h1>
              Work. Escape. <span className="accent">Tribe.</span>
            </h1>
            <p className="hero-sub">
              Le camp de base privé des entrepreneurs qui performent — 2 à 3 semaines
              de deep work, de sport et d&apos;aventure depuis les plus beaux endroits
              du monde.
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
                poster={POSTER}
                aria-label="Aperçu d'une session Founders Camp"
              >
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
              <div className="hero-frame-glow" aria-hidden="true" />
            </div>
            <div className="hero-glass-row">
              {GLASS.map((g) => (
                <div key={g.label} className="hero-glass">
                  <span className="hero-glass-icon" aria-hidden="true">{g.icon}</span>
                  <strong>{g.label}</strong>
                  <span>{g.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="stats-band">
        <div className="wrap stats-grid">
          {STATS.map((s, i) => (
            <div key={s.label} className="stat-item">
              {i > 0 && <span className="stat-divider" aria-hidden="true" />}
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
