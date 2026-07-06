"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { CRITERIA } from "@/lib/content";

type Answer = "yes" | "no" | null;

export default function SelectionSection() {
  const [ca, setCa] = useState<Answer>(null);
  const [remote, setRemote] = useState<Answer>(null);
  const [duration, setDuration] = useState<Answer>(null);

  const answered = [ca, remote, duration].filter(Boolean).length;
  const matches =
    ca === "yes" && remote === "yes" && duration === "yes";

  return (
    <section id="criteres" className="section section-dark section-selection">
      <div className="wrap">
        <div className="selection-head">
          <span className="pill-label pill-label--light">Sélection</span>
          <h2>On ne recrute pas des touristes.</h2>
          <p>
            Chaque candidature est examinée à la main. Voici ce qu&apos;on regarde
            avant de te répondre sous 72h.
          </p>
        </div>

        <Reveal className="selection-grid reveal-stagger">
          <div className="criteria">
            {CRITERIA.map((c) => (
              <div key={c.num} className="crit">
                <span className="crit-num">{c.num}</span>
                <p>{c.text}</p>
              </div>
            ))}
          </div>

          <aside className="selection-aside">
            <div className="qualifier">
              <h3 className="qualifier-title">Tu matches ?</h3>
              <div className="qualifier-questions">
                <QualifierRow
                  label="CA ≥ 10k€/mois"
                  value={ca}
                  onChange={setCa}
                />
                <QualifierRow
                  label="100% remote possible"
                  value={remote}
                  onChange={setRemote}
                />
                <QualifierRow
                  label="2 semaines dispo"
                  value={duration}
                  onChange={setDuration}
                />
              </div>
              {answered === 3 && (
                <div className={`qualifier-result${matches ? " qualifier-result--match" : ""}`}>
                  {matches ? (
                    <>
                      <strong>Tu matches.</strong> Continue ta candidature, on a hâte de te lire.
                      <a href="#candidature" className="btn btn-nav qualifier-cta">
                        Candidater maintenant
                        <span className="btn-arrow" aria-hidden="true">→</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <strong>Pas bloqué.</strong> Si tu es en forte croissance, candidate quand même et explique ta trajectoire.
                      <a href="#candidature" className="qualifier-link">
                        Déposer ma candidature →
                      </a>
                    </>
                  )}
                </div>
              )}
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

function QualifierRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: Answer;
  onChange: (v: Answer) => void;
}) {
  return (
    <div className="qualifier-row">
      <span>{label}</span>
      <div className="qualifier-btns">
        <button
          type="button"
          className={`qualifier-btn${value === "yes" ? " qualifier-btn--active" : ""}`}
          onClick={() => onChange("yes")}
        >
          Oui
        </button>
        <button
          type="button"
          className={`qualifier-btn${value === "no" ? " qualifier-btn--active" : ""}`}
          onClick={() => onChange("no")}
        >
          Non
        </button>
      </div>
    </div>
  );
}
