import Image from "next/image";
import { DESTINATIONS } from "@/lib/content";

export default function Destinations() {
  return (
    <div className="dests">
      {DESTINATIONS.map((d) => (
        <article
          key={d.name}
          className={`dest${d.open ? " dest--open" : ""}${d.featured ? " dest--featured" : ""}`}
        >
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
