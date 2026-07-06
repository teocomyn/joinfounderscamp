const TESTIMONIALS = [
  {
    quote:
      "Deux semaines où j'ai avancé plus vite que deux mois seul. Le groupe tire vers le haut — et les soirées mastermind valent le prix à elles seules.",
    name: "Julien M.",
    role: "Agence Shopify · ~22k€/mois",
    initials: "JM",
  },
  {
    quote:
      "Le cadre force le focus le matin et la déconnexion l'après-midi. Je suis reparti avec deux collabs concrètes et un réseau que je garde.",
    name: "Sarah K.",
    role: "Consultante growth B2B · ~15k€/mois",
    initials: "SK",
  },
  {
    quote:
      "Pas un retreat Instagram. Du vrai travail, des vrais entrepreneurs, zéro posture. Exactement ce que je cherchais.",
    name: "Thomas R.",
    role: "SaaS founder · ~35k€/mois",
    initials: "TR",
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials">
      {TESTIMONIALS.map((t) => (
        <blockquote key={t.name} className="testimonial-card">
          <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
          <footer className="testimonial-author">
            <span className="testimonial-avatar" aria-hidden="true">
              {t.initials}
            </span>
            <span>
              <strong>{t.name}</strong>
              <span className="testimonial-role">{t.role}</span>
            </span>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
