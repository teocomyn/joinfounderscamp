import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Pillars from "@/components/Pillars";
import CampMoments from "@/components/CampMoments";
import DestinationsCarousel from "@/components/DestinationsCarousel";
import GlobeSection from "@/components/GlobeSection";
import StatsSection from "@/components/stats/StatsSection";
import SelectionSection from "@/components/SelectionSection";
import ApplySection from "@/components/ApplySection";
import FooterSection from "@/components/footer/FooterSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
      <Hero />

      <section id="concept" className="section section-bento">
        <div className="wrap">
          <Reveal className="sec-head sec-head--center">
            <span className="pill-label">Le concept</span>
            <h2>
              Le camp que tu aurais dû rejoindre
              <br />
              il y a 2 ans.
            </h2>
            <p>
              Work · Escape · Tribe : une journée structurée, répétée chaque jour.
              Assez de cadre pour produire, assez de liberté pour respirer.
            </p>
          </Reveal>
          <Pillars />
        </div>
      </section>

      <CampMoments />

      <section id="destinations" className="section section-dark">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="pill-label pill-label--light">Destinations</span>
            <h2>Un camp de base. Qui change de coordonnées.</h2>
            <p>
              Chaque session pose le camp dans un nouveau spot, choisi pour trois
              critères non négociables : la connexion, le cadre, le terrain de jeu.
            </p>
          </Reveal>
          <Reveal>
            <DestinationsCarousel />
          </Reveal>
        </div>
      </section>

      <GlobeSection />

      <StatsSection />

      <SelectionSection />

      <ApplySection />

      <FooterSection />
      </main>
    </>
  );
}
