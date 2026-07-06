import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ApplyForm from "@/components/ApplyForm";
import Destinations from "@/components/Destinations";

export default function ClassicPage() {
  return (
    <>
      <Nav />
      <Hero />

      <section id="concept">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="mono">Le concept</span>
            <h2>Le meilleur environnement de travail n&apos;est pas un bureau.</h2>
            <p>
              C&apos;est une table face à la mer, des gens plus forts que toi
              dans la pièce, et zéro distraction. On loue une villa, on structure
              les journées, et chacun avance sur son business plus vite qu&apos;il
              ne l&apos;aurait fait seul.
            </p>
          </Reveal>
          <Reveal className="pillars">
            <div className="pillar">
              <span className="mono">Work</span>
              <h3>
                Des matinées de <em>deep work</em>
              </h3>
              <p>
                Wifi fibre vérifié, espaces de travail dédiés, sessions de focus
                en commun. Chacun bosse sur son business, mais l&apos;énergie du
                groupe tire tout le monde vers le haut.
              </p>
            </div>
            <div className="pillar">
              <span className="mono">Escape</span>
              <h3>
                Des après-midis <em>d&apos;aventure</em>
              </h3>
              <p>
                Surf, rando, plongée, sorties locales. On coupe vraiment pour
                mieux revenir. Les meilleures idées ne viennent jamais devant
                l&apos;écran.
              </p>
            </div>
            <div className="pillar">
              <span className="mono">Tribe</span>
              <h3>
                Un cercle <em>sélectionné</em>
              </h3>
              <p>
                Chaque membre est vérifié : entrepreneurs et freelances qui
                génèrent déjà du chiffre. Masterminds le soir, partages de
                leviers, deals et collabs qui naissent naturellement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="destinations">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="mono">Destinations</span>
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

      <section id="format">
        <div className="wrap">
          <div className="day">
            <Reveal className="sec-head" style={{ marginBottom: 0 }}>
              <span className="mono">Le format</span>
              <h2>Une journée au camp.</h2>
              <p>
                Un cadre simple, répété chaque jour. Assez de structure pour
                produire, assez de liberté pour respirer.
              </p>
            </Reveal>
            <Reveal className="timeline">
              <div className="slot">
                <span className="mono">07:30</span>
                <h3>Sport ou surf au lever du soleil</h3>
                <p>Optionnel, mais personne ne le rate.</p>
              </div>
              <div className="slot">
                <span className="mono">09:00 · 13:00</span>
                <h3>Deep work</h3>
                <p>Bloc de focus collectif. Téléphones en mode avion.</p>
              </div>
              <div className="slot">
                <span className="mono">14:30</span>
                <h3>Aventure</h3>
                <p>Exploration, rando, plage, sortie locale.</p>
              </div>
              <div className="slot">
                <span className="mono">19:30</span>
                <h3>Dîner + mastermind</h3>
                <p>Chaque soir, un membre ouvre son business au groupe.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="criteres">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="mono">Sélection</span>
            <h2>On ne recrute pas des touristes.</h2>
            <p>Chaque candidature est examinée à la main.</p>
          </Reveal>
          <Reveal className="criteria">
            <div className="crit">
              <span className="check">✓</span>
              <p>
                <strong>Tu génères au moins 10 000€ de CA mensuel</strong> avec
                ton activité.
              </p>
            </div>
            <div className="crit">
              <span className="check">✓</span>
              <p>
                <strong>Tu peux travailler 100% en remote</strong> pendant 2 à 3
                semaines.
              </p>
            </div>
            <div className="crit">
              <span className="check">✓</span>
              <p>
                <strong>Tu donnes autant que tu prends.</strong>
              </p>
            </div>
            <div className="crit">
              <span className="check">✓</span>
              <p>
                <strong>Tu es facile à vivre.</strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="candidature">
        <div className="wrap">
          <div className="apply-grid">
            <Reveal className="apply-left">
              <span
                className="mono"
                style={{ color: "var(--copper-soft)", display: "block", marginBottom: 16 }}
              >
                Candidature · Session 01
              </span>
              <h2>Réserve ta place au camp.</h2>
              <p>
                5 minutes pour candidater. On revient vers toi sous 72h.
              </p>
              <div className="apply-note">
                <strong>Places limitées.</strong> 8 à 10 membres maximum par session.
              </div>
            </Reveal>
            <Reveal>
              <ApplyForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="faq" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="mono">FAQ</span>
            <h2>Questions fréquentes.</h2>
          </Reveal>
          <Reveal className="faq">
            <details>
              <summary>Combien ça coûte ?</summary>
              <p>Le montant exact est communiqué lors de l&apos;appel de sélection.</p>
            </details>
            <details>
              <summary>Je fais moins de 10k€/mois, je peux candidater ?</summary>
              <p>Si tu es en forte croissance, candidate quand même.</p>
            </details>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="wrap foot-inner">
          <div>
            <div className="foot-brand">THE FOUNDERS CAMP</div>
            <span className="mono">Work hard. From anywhere.</span>
          </div>
          <div className="foot-links">
            <a href="#concept">Concept</a>
            <a href="#destinations">Destinations</a>
            <a href="#candidature">Candidater</a>
            <a href="mailto:hello@joinfounderscamp.com">Contact</a>
          </div>
          <span className="mono">© 2027 · joinfounderscamp.com</span>
        </div>
      </footer>
    </>
  );
}
