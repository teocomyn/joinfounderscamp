import Reveal from "@/components/Reveal";
import ApplyForm from "@/components/ApplyForm";
import { APPLY_STEPS, FAQ, SITE } from "@/lib/content";

export default function ApplySection() {
  return (
    <section id="candidature" className="section section-cta">
      <div className="wrap">
        <div className="apply-shell">
          <Reveal className="apply-left">
            <span className="pill-label pill-label--light">
              Candidature · {SITE.session}
            </span>
            <h2>Réserve ta place au camp.</h2>
            <p>
              5 minutes pour candidater. On revient vers toi sous 72h. Si ton profil
              matche, on t&apos;appelle pour un échange rapide.
            </p>

            <ol className="apply-steps">
              {APPLY_STEPS.map((s) => (
                <li key={s.num}>
                  <span className="apply-step-num">{s.num}</span>
                  <span>{s.label}</span>
                </li>
              ))}
            </ol>

            <div className="apply-note">
              <strong>Places limitées.</strong> Chaque session accueille 8 à 10 membres
              maximum pour garder la qualité des échanges.
            </div>

            <div className="apply-faq">
              <h3 className="apply-faq-title">Questions fréquentes</h3>
              {FAQ.map((item) => (
                <details key={item.q} className="apply-faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          <Reveal className="apply-card">
            <ApplyForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
