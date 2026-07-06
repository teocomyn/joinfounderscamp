import Image from "next/image";

const PILLARS = [
  {
    tag: "01 · Work",
    title: "Deep work le matin",
    text: "Wifi fibre vérifié, espaces dédiés, sessions de focus en commun. L'énergie du groupe tire tout le monde vers le haut.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    alt: "Espace de travail moderne avec vue",
  },
  {
    tag: "02 · Escape",
    title: "Aventure l'après-midi",
    text: "Surf, rando, plongée, sorties locales. On coupe vraiment pour mieux revenir.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
    alt: "Surf au coucher du soleil",
  },
  {
    tag: "03 · Tribe",
    title: "Un cercle sélectionné",
    text: "Entrepreneurs vérifiés, masterminds le soir, deals et collabs qui naissent naturellement.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Groupe d'entrepreneurs en discussion",
  },
];

export default function Pillars() {
  return (
    <div className="pillars">
      {PILLARS.map((p) => (
        <article key={p.tag} className="pillar-card">
          <div className="pillar-media">
            <Image src={p.image} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 33vw" className="pillar-img" />
            <span className="pillar-tag">{p.tag}</span>
          </div>
          <div className="pillar-body">
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
