export const SITE = {
  session: "Session 01 · Été 2027",
  sessionShort: "Lisbonne 2027",
  email: "hello@joinfounderscamp.com",
  linkedin: "https://linkedin.com/in/teocomyn",
  instagram: "https://instagram.com/joinfounderscamp",
} as const;

export const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4";

export const FOOTER_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_111347_9cf2a2b0-2c10-475b-a132-147a046b4927.mp4";

export const IMAGES = {
  heroPoster:
    "https://images.unsplash.com/photo-1711125174987-645d1a9d6466?auto=format&fit=crop&w=1200&q=80",
  bentoBg:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
  founder:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  lisbon:
    "https://images.unsplash.com/photo-1711125174987-645d1a9d6466?auto=format&fit=crop&w=1200&q=80",
  gozo:
    "https://images.unsplash.com/photo-1668647184912-67da07256e3e?auto=format&fit=crop&w=1200&q=80",
  bali:
    "https://images.unsplash.com/photo-1680100595862-9c8803a9e7da?auto=format&fit=crop&w=1200&q=80",
} as const;

export const PILLARS = [
  {
    label: "Work",
    time: "09:00 · 13:00",
    title: "Deep work le matin",
    text: "Wifi fibre vérifié, espaces dédiés, focus collectif.",
    hint: "Téléphones en mode avion. Personne ne décroche.",
  },
  {
    label: "Escape",
    time: "14:30",
    title: "Aventure l'après-midi",
    text: "Surf, rando, plongée — on coupe pour mieux revenir.",
    hint: "Optionnel au départ. Personne ne le rate au bout de 3 jours.",
  },
  {
    label: "Tribe",
    time: "19:30",
    title: "Mastermind le soir",
    text: "Chaque soir, un membre ouvre son business au groupe.",
    hint: "Deals, intros et collabs naissent autour de la table.",
  },
] as const;

export const DESTINATIONS = [
  {
    name: "Lisbonne, Portugal",
    coords: "38.7223° N · 9.1393° W",
    when: "Session 01 · Juillet 2027 · 14 jours",
    tag: "Candidatures ouvertes",
    open: true,
    featured: true,
    image: IMAGES.lisbon,
    alt: "Tramway jaune à Lisbonne dans une rue pavée",
    perks: ["Fibre 500 Mb/s testée", "Villa 8 ch. · cowork", "Surf & ville à 20 min"],
  },
  {
    name: "Gozo, Malte",
    coords: "36.0443° N · 14.2512° E",
    when: "Session 02 · 2027 · 21 jours",
    tag: "Liste d'attente",
    open: false,
    featured: false,
    image: IMAGES.gozo,
    alt: "Vue sur la mer et les falaises depuis Gozo, Malte",
    perks: ["Falaises & mer turquoise", "Villa face à la mer", "Plongée & rando"],
  },
  {
    name: "Bali, Indonésie",
    coords: "8.6500° S · 115.2167° E",
    when: "Session 03 · À annoncer",
    tag: "Liste d'attente",
    open: false,
    featured: false,
    image: IMAGES.bali,
    alt: "Rizières en terrasses de Tegallalang à Bali",
    perks: ["Rizières & jungle", "Villa avec piscine", "Yoga & temples"],
  },
] as const;

export const CRITERIA = [
  {
    num: "01",
    text: "Tu génères au moins 10 000€ de CA mensuel avec ton activité.",
  },
  {
    num: "02",
    text: "Tu peux travailler 100% en remote pendant 2 à 3 semaines.",
  },
  {
    num: "03",
    text: "Tu donnes autant que tu prends — leviers, réseau, expérience.",
  },
  {
    num: "04",
    text: "Tu es facile à vivre. L'état d'esprit compte autant que les chiffres.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Deux semaines où j'ai avancé plus vite que deux mois seul. Le groupe tire vers le haut — et les soirées mastermind valent le prix à elles seules.",
    name: "Julien M.",
    role: "Agence Shopify · ~22k€/mois",
    initials: "JM",
  },
  {
    quote:
      "Pas un retreat Instagram. Du vrai travail, des vrais entrepreneurs, zéro posture. Exactement ce que je cherchais.",
    name: "Thomas R.",
    role: "SaaS founder · ~35k€/mois",
    initials: "TR",
  },
] as const;

export const FAQ = [
  {
    q: "Combien ça coûte ?",
    a: "Le montant exact est communiqué lors de l'appel de sélection. Il couvre logement, organisation, activités et accès au cercle.",
  },
  {
    q: "Je fais moins de 10k€/mois, je peux candidater ?",
    a: "Si tu es en forte croissance, candidate quand même et explique ta trajectoire dans le formulaire.",
  },
  {
    q: "Je dois rester toute la durée du camp ?",
    a: "Oui. Le groupe vit ensemble du premier au dernier jour — c'est ce qui crée la dynamique.",
  },
  {
    q: "La connexion internet est vraiment fiable ?",
    a: "Fibre testée avant réservation + backup 4G/5G. Tu peux prendre tes calls sans stress.",
  },
] as const;

export const APPLY_STEPS = [
  { num: "01", label: "Candidature en ligne" },
  { num: "02", label: "Revue sous 72h" },
  { num: "03", label: "Appel 20 min" },
  { num: "04", label: "Confirmation place" },
] as const;

export const FOUNDER = {
  name: "Teo Comyn",
  title: "Fondateur · The Founders Camp",
  bio: "Entrepreneur et organisateur de sessions privées pour fondateurs qui performent. Chaque camp est construit à la main : villa testée, fibre vérifiée, groupe calibré.",
  linkedin: SITE.linkedin,
  image: IMAGES.founder,
} as const;
