import Image from "next/image";

const DESTINATIONS = [
  {
    name: "Lisbonne, Portugal",
    coords: "38.7223° N · 9.1393° W",
    when: "Session 01 · Été 2027 · 2 semaines",
    tag: "Candidatures ouvertes",
    open: true,
    image:
      "https://images.unsplash.com/photo-1555881400-74d7aca8bbbf?auto=format&fit=crop&w=1200&q=80",
    alt: "Tramway jaune à Lisbonne au coucher du soleil",
  },
  {
    name: "Gozo, Malte",
    coords: "36.0443° N · 14.2512° E",
    when: "Session 02 · 2027 · 3 semaines",
    tag: "Bientôt",
    open: false,
    image:
      "https://images.unsplash.com/photo-1528329543622-d894a1127951?auto=format&fit=crop&w=1200&q=80",
    alt: "Falaises et mer turquoise à Gozo, Malte",
  },
  {
    name: "Bali, Indonésie",
    coords: "8.6500° S · 115.2167° E",
    when: "Session 03 · À annoncer",
    tag: "Bientôt",
    open: false,
    image:
      "https://images.unsplash.com/photo-1537996194471-cc057b964117?w=1200&q=80",
    alt: "Rizières en terrasses à Bali",
  },
];

export default function Destinations() {
  return (
    <div className="dests">
      {DESTINATIONS.map((d) => (
        <article key={d.name} className={`dest${d.open ? " dest--open" : ""}`}>
          <div className="dest-media">
            <Image
              src={d.image}
              alt={d.alt}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className="dest-img"
            />
            <div className="dest-media-scrim" aria-hidden="true" />
            <span className={`tag${d.open ? " open" : ""}`}>{d.tag}</span>
          </div>
          <div className="dest-body">
            <span className="mono coords">{d.coords}</span>
            <h3>{d.name}</h3>
            <p className="when">{d.when}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
