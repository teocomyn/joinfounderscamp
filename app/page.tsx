import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ApplyForm from "@/components/ApplyForm";
import Destinations from "@/components/Destinations";

export default function Home() {
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
                produire, assez de liberté pour respirer. Tu gères ton business,
                le camp gère le reste : logement, spots de travail, activités,
                logistique.
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
                <p>
                  Bloc de focus collectif. Téléphones en mode avion, objectifs
                  annoncés le matin.
                </p>
              </div>
              <div className="slot">
                <span className="mono">14:30</span>
                <h3>Aventure</h3>
                <p>
                  Exploration, rando, plage, sortie locale. On découvre vraiment
                  l&apos;endroit.
                </p>
              </div>
              <div className="slot">
                <span className="mono">19:30</span>
                <h3>Dîner + mastermind</h3>
                <p>
                  Chaque soir, un membre ouvre son business : chiffres, blocages,
                  leviers. Le groupe challenge.
                </p>
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
            <p>
              Le niveau du camp, c&apos;est le niveau de ses membres. Chaque
              candidature est examinée à la main. Voici ce qu&apos;on regarde.
            </p>
          </Reveal>
          <Reveal className="criteria">
            <div className="crit">
              <span className="check">✓</span>
              <p>
                <strong>Tu génères au moins 5 000€ de CA mensuel</strong> avec
                ton activité de freelance, d&apos;agence ou ta boîte.
              </p>
            </div>
            <div className="crit">
              <span className="check">✓</span>
              <p>
                <strong>Tu peux travailler 100% en remote</strong> pendant 2 à 3
                semaines sans que ton business s&apos;arrête.
              </p>
            </div>
            <div className="crit">
              <span className="check">✓</span>
              <p>
                <strong>Tu donnes autant que tu prends.</strong> Tu viens
                partager tes leviers, ton réseau, ton expérience.
              </p>
            </div>
            <div className="crit">
              <span className="check">✓</span>
              <p>
                <strong>Tu es facile à vivre.</strong> On partage une maison
                pendant plusieurs semaines. L&apos;état d&apos;esprit compte
                autant que les chiffres.
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
                5 minutes pour candidater. On revient vers toi sous 72h. Si ton
                profil matche, on t&apos;appelle pour un échange rapide avant de
                valider ta place.
              </p>
              <div className="apply-note">
                <strong>Places limitées.</strong> Chaque session accueille 10 à
                14 membres maximum pour garder la qualité des échanges.
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
              <p>
                Le prix dépend de la destination et de la durée. Il couvre le
                logement en villa privée, l&apos;organisation complète, les
                activités de groupe et l&apos;accès au cercle. Le montant exact
                est communiqué lors de l&apos;appel de sélection.
              </p>
            </details>
            <details>
              <summary>Je fais moins de 5k€/mois, je peux candidater ?</summary>
              <p>
                Le seuil existe pour garantir que tout le monde parle le même
                langage business. Si tu es juste en dessous mais en forte
                croissance, candidate quand même et explique ta trajectoire.
              </p>
            </details>
            <details>
              <summary>Je dois rester toute la durée du camp ?</summary>
              <p>
                Oui. Le format fonctionne parce que le groupe vit ensemble du
                premier au dernier jour.
              </p>
            </details>
            <details>
              <summary>La connexion internet est vraiment fiable ?</summary>
              <p>
                C&apos;est le critère numéro 1 : fibre testée avant réservation,
                plus un backup 4G/5G. Tu peux prendre tes calls clients sans stress.
              </p>
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
          <span className="mono">© 2026 · joinfounderscamp.com</span>
        </div>
      </footer>
    </>
  );
}
