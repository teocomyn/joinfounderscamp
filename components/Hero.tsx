const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4";

export default function Hero() {
  return (
    <header className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="wrap hero-inner">
        <span className="mono hero-eyebrow">
          Sur candidature uniquement · Session 01 · Été 2026
        </span>
        <h1>
          Work. Escape. <span className="accent">Tribe.</span>
        </h1>
        <p className="hero-sub">
          Le camp de base privé des entrepreneurs qui performent — 2 à 3 semaines
          de deep work, de sport et d&apos;aventure depuis les plus beaux endroits
          du monde.
        </p>
        <div className="hero-ctas">
          <a href="#candidature" className="btn">
            Déposer ma candidature
          </a>
          <a href="#concept" className="btn btn-ghost">
            Découvrir le camp
          </a>
        </div>
        <div className="hero-meta">
          <div>
            <strong>8–10</strong>
            <span>places par session</span>
          </div>
          <div>
            <strong>5k€+</strong>
            <span>CA minimum requis</span>
          </div>
          <div>
            <strong>3</strong>
            <span>destinations 2026</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>entrepreneurs vérifiés</span>
          </div>
        </div>
      </div>
    </header>
  );
}
