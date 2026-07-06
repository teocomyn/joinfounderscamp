import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ApplyForm from "@/components/ApplyForm";
import Destinations from "@/components/Destinations";
import Pillars from "@/components/Pillars";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <section id="concept" className="section section-light">
        <div className="wrap">
          <Reveal className="sec-head sec-head--center">
            <span className="pill-label">Le concept</span>
            <h2>
              Le meilleur environnement de travail
              <br />
              n&apos;est pas un bureau.
            </h2>
            <p>
              C&apos;est une table face à la mer, des gens plus forts que toi
              dans la pièce, et zéro distraction. On loue une villa, on structure
              les journées, et chacun avance sur son business plus vite qu&apos;il
              ne l&apos;aurait fait seul.
            </p>
          </Reveal>
          <Reveal>
            <Pillars />
          </Reveal>
        </div>
      </section>

      <section id="destinations" className="section section-dark">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="pill-label pill-label--light">Destinations</span>
            <h2>Un camp de base. Qui change de coordonnées.</h2>
            <p>
              Chaque session pose le camp dans un nouveau spot, choisi pour trois
              critères non négociables : la connexion, le cadre, le terrain de
              jeu.
            </p>
          </Reveal>
          <Reveal>
            <Destinations />
          </Reveal>
        </div>
      </section>

      <section id="format" className="section section-light">
        <div className="wrap">
          <div className="split-block">
            <Reveal className="sec-head">
              <span className="pill-label">Le format</span>
              <h2>Une journée au camp.</h2>
              <p>
                Un cadre simple, répété chaque jour. Assez de structure pour
                produire, assez de liberté pour respirer.
              </p>
            </Reveal>
            <Reveal className="timeline">
              <div className="slot">
                <span className="slot-time">07:30</span>
                <h3>Sport ou surf au lever du soleil</h3>
                <p>Optionnel, mais personne ne le rate.</p>
              </div>
              <div className="slot">
                <span className="slot-time">09:00 · 13:00</span>
                <h3>Deep work</h3>
                <p>Bloc de focus collectif. Téléphones en mode avion.</p>
              </div>
              <div className="slot">
                <span className="slot-time">14:30</span>
                <h3>Aventure</h3>
                <p>Exploration, rando, plage, sortie locale.</p>
              </div>
              <div className="slot">
                <span className="slot-time">19:30</span>
                <h3>Dîner + mastermind</h3>
                <p>Chaque soir, un membre ouvre son business au groupe.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="criteres" className="section section-dark">
        <div className="wrap">
          <Reveal className="sec-head sec-head--center">
            <span className="pill-label pill-label--light">Sélection</span>
            <h2>On ne recrute pas des touristes.</h2>
            <p>Chaque candidature est examinée à la main. Voici ce qu&apos;on regarde.</p>
          </Reveal>
          <Reveal className="criteria">
            <div className="crit">
              <span className="check">✓</span>
              <p>
                <strong>Tu génères au moins 10 000€ de CA mensuel</strong> avec ton activité.
              </p>
            </div>
            <div className="crit">
              <span className="check">✓</span>
              <p>
                <strong>Tu peux travailler 100% en remote</strong> pendant 2 à 3 semaines.
              </p>
            </div>
            <div className="crit">
              <span className="check">✓</span>
              <p>
                <strong>Tu donnes autant que tu prends.</strong> Leviers, réseau, expérience.
              </p>
            </div>
            <div className="crit">
              <span className="check">✓</span>
              <p>
                <strong>Tu es facile à vivre.</strong> L&apos;état d&apos;esprit compte autant que les chiffres.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="candidature" className="section section-cta">
        <div className="wrap">
          <div className="apply-shell">
            <Reveal className="apply-left">
              <span className="pill-label pill-label--light">Candidature · Session 01</span>
              <h2>Réserve ta place au camp.</h2>
              <p>
                5 minutes pour candidater. On revient vers toi sous 72h. Si ton profil
                matche, on t&apos;appelle pour un échange rapide.
              </p>
              <div className="apply-note">
                <strong>Places limitées.</strong> Chaque session accueille 8 à 10 membres
                maximum pour garder la qualité des échanges.
              </div>
            </Reveal>
            <Reveal className="apply-card">
              <ApplyForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="faq" className="section section-light section-faq">
        <div className="wrap">
          <Reveal className="sec-head sec-head--center">
            <span className="pill-label">FAQ</span>
            <h2>Questions fréquentes.</h2>
          </Reveal>
          <Reveal className="faq">
            <details>
              <summary>Combien ça coûte ?</summary>
              <p>
                Le montant exact est communiqué lors de l&apos;appel de sélection. Il couvre
                logement, organisation, activités et accès au cercle.
              </p>
            </details>
            <details>
              <summary>Je fais moins de 10k€/mois, je peux candidater ?</summary>
              <p>
                Si tu es en forte croissance, candidate quand même et explique ta trajectoire.
              </p>
            </details>
            <details>
              <summary>Je dois rester toute la durée du camp ?</summary>
              <p>Oui. Le groupe vit ensemble du premier au dernier jour.</p>
            </details>
            <details>
              <summary>La connexion internet est vraiment fiable ?</summary>
              <p>
                Fibre testée avant réservation + backup 4G/5G. Tu peux prendre tes calls sans stress.
              </p>
            </details>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap foot-grid">
          <div className="foot-brand-block">
            <div className="foot-brand">THE FOUNDERS CAMP</div>
            <p className="foot-tagline">Work hard. From anywhere.</p>
          </div>
          <div className="foot-col">
            <span className="foot-label">Navigation</span>
            <a href="#concept">Concept</a>
            <a href="#destinations">Destinations</a>
            <a href="#candidature">Candidater</a>
          </div>
          <div className="foot-col">
            <span className="foot-label">Contact</span>
            <a href="mailto:hello@joinfounderscamp.com">hello@joinfounderscamp.com</a>
          </div>
          <span className="foot-copy">© 2027 · joinfounderscamp.com</span>
        </div>
      </footer>
    </>
  );
}
