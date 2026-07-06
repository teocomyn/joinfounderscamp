import Image from "next/image";

export default function Founder() {
  return (
    <div className="founder-block">
      <div className="founder-media">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
          alt="Fondateur de The Founders Camp"
          fill
          sizes="(max-width: 960px) 100vw, 420px"
          className="founder-img"
        />
      </div>
      <div className="founder-copy">
        <span className="pill-label">Qui organise</span>
        <h2>Créé par des entrepreneurs, pour des entrepreneurs.</h2>
        <p>
          The Founders Camp est né d&apos;une frustration simple : les meilleures idées
          et les meilleurs deals naissent quand des fondateurs performants se retrouvent
          dans le bon environnement — pas dans un cowork bruyant ou un retreat sans
          structure.
        </p>
        <p>
          Chaque session est construite à la main : villa testée, fibre vérifiée,
          groupe calibré. On ne vend pas du rêve — on assemble les conditions pour que
          tu avances plus vite.
        </p>
        <a
          href="https://linkedin.com"
          className="founder-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le profil LinkedIn →
        </a>
      </div>
    </div>
  );
}
