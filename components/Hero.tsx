import Image from "next/image";
import { HERO_IMAGE, SITE } from "@/lib/content";

const HERO_CHIPS = [
  "2 semaines",
  "8 fondateurs",
  "10k€+/mois",
  "e-com & digital",
] as const;

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-glow hero-bg-glow--copper" />
        <div className="hero-bg-glow hero-bg-glow--pine" />
      </div>

      <div className="wrap hero-shell">
        <div className="hero-copy">
          <span className="pill-label">{SITE.session} · Sur candidature</span>

          <h1 className="hero-title">
            <span className="hero-title-line">Work. Escape.</span>
            <span className="hero-title-line hero-title-line--accent">Tribe.</span>
          </h1>

          <p className="hero-lead">
            Workations privées pour fondateurs e-com, SaaS et agences. Deep work le
            matin, sport l&apos;après-midi, mastermind le soir, entouré de gens
            plus forts que toi.
          </p>

          <ul className="hero-chips" aria-label="Format du camp">
            {HERO_CHIPS.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>

          <div className="hero-ctas">
            <a href="#candidature" className="btn btn-dark btn-hero-primary">
              Déposer ma candidature
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a href="#concept" className="btn btn-outline">
              Découvrir le camp
            </a>
          </div>

          <p className="hero-proof">
            <strong>72h</strong> pour une réponse ·{" "}
            <strong>{SITE.sessionShort}</strong> · places limitées
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-stack">
            <div className="hero-photo-ring" aria-hidden="true" />
            <div className="hero-frame hero-frame--square">
              <Image
                className="hero-photo"
                src={HERO_IMAGE}
                alt="Fondateurs au travail avec vue sur la ville"
                fill
                priority
                sizes="(max-width: 560px) 100vw, (max-width: 960px) 400px, 480px"
              />
              <div className="hero-frame-scrim" aria-hidden="true" />
              <div className="hero-float hero-float--session">
                <span>{SITE.sessionShort}</span>
                <strong>Session 01</strong>
              </div>
              <div className="hero-float hero-float--spots">
                <strong>8</strong>
                <span>places max</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
