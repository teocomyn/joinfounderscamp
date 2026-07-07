export const SITE = {
  session: "Session 01 · Été 2027",
  sessionShort: "Lisbonne 2027",
  email: "hello@joinfounderscamp.com",
  linkedin: "https://linkedin.com/in/teocomyn",
  instagram: "https://instagram.com/joinfounderscamp",
  calendly:
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/teocomyn",
  priceFrom: "4 900€",
} as const;

export const HERO_IMAGE = "/camp/hero-work.webp";

export const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_202655_a7f5aca0-2f80-4bc9-bcb5-96ac95662003.mp4";

export const STATS_IMAGE = "/camp/stats-dinner.webp";

export const STATS_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_145725_08886141-ed95-4a8e-8d6d-b75eaadce638.mp4";

export const FOOTER_IMAGE = "/camp/surf-cliffs.webp";

export const FOOTER_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_111347_9cf2a2b0-2c10-475b-a132-147a046b4927.mp4";

export const IMAGES = {
  heroPoster:
    "https://images.unsplash.com/photo-1711125174987-645d1a9d6466?auto=format&fit=crop&w=1200&q=80",
  bentoBg: "/camp/work-villa-pool.webp",
  founder: "/founder-teo.webp",
  founderLeopold: "/founder-leopold.webp",
  logo: "/logo-founders-camp-dark.png",
  logoLight: "/logo-founders-camp-transparent.png",
  lisbon:
    "https://images.unsplash.com/photo-1711125174987-645d1a9d6466?auto=format&fit=crop&w=900&q=75",
  gozo:
    "https://images.unsplash.com/photo-1668647184912-67da07256e3e?auto=format&fit=crop&w=900&q=75",
  bali:
    "https://images.unsplash.com/photo-1680100595862-9c8803a9e7da?auto=format&fit=crop&w=900&q=75",
} as const;

export const CAMP_MOMENTS = [
  {
    label: "Work",
    caption: "Deep work · vue ville",
    image: "/camp/work-city.webp",
    alt: "Fondateurs au travail avec vue sur la ville",
  },
  {
    label: "Work",
    caption: "Cowork · jungle",
    image: "/camp/work-jungle.webp",
    alt: "Laptop face à la jungle tropicale",
  },
  {
    label: "Work",
    caption: "Villa · piscine · Bali",
    image: "/camp/work-pool-bali.webp",
    alt: "Travail depuis une villa avec piscine à Bali",
  },
  {
    label: "Work",
    caption: "Forêt · focus total",
    image: "/camp/work-forest.webp",
    alt: "Session de travail avec vue forêt",
  },
  {
    label: "Work",
    caption: "Terrasse · océan",
    image: "/camp/work-terrace.webp",
    alt: "Travail en terrasse face à la piscine et l'océan",
  },
  {
    label: "Work",
    caption: "Villa · pool · groupe",
    image: "/camp/work-villa-pool.webp",
    alt: "Groupe de fondateurs qui travaillent en villa",
  },
  {
    label: "Sport",
    caption: "Salle · vue tropicale",
    image: "/camp/gym-view.webp",
    alt: "Salle de sport avec vue sur la végétation",
  },
  {
    label: "Sport",
    caption: "Running · tropiques",
    image: "/camp/run-tropical.webp",
    alt: "Course à pied entre les palmiers",
  },
  {
    label: "Sport",
    caption: "Running · groupe",
    image: "/camp/run-group.webp",
    alt: "Groupe qui court ensemble en ville",
  },
  {
    label: "Tribu",
    caption: "Dîner · terrasse",
    image: "/camp/dinner.webp",
    alt: "Dîner entre fondateurs en terrasse",
  },
  {
    label: "Escape",
    caption: "Plongée · prépa",
    image: "/camp/dive-boat.webp",
    alt: "Préparation plongée depuis un bateau",
  },
  {
    label: "Escape",
    caption: "Plongée · plage",
    image: "/camp/dive-walk.webp",
    alt: "Marche vers la plage avec le matériel de plongée",
  },
  {
    label: "Escape",
    caption: "Surf · falaises",
    image: "/camp/surf-cliffs.webp",
    alt: "Session surf entre les falaises",
  },
  {
    label: "Escape",
    caption: "Voilier · saut",
    image: "/camp/sailboat-jump.webp",
    alt: "Saut depuis un voilier dans l'eau turquoise",
  },
  {
    label: "Escape",
    caption: "Scooter · Bali",
    image: "/camp/scooter.webp",
    alt: "Exploration en scooter dans la jungle",
  },
] as const;

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
    text: "Surf, rando, plongée, on coupe pour mieux revenir.",
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
    text: "Tu génères au moins 10 000€/mois avec ton activité (e-com, SaaS, agence ou activité digitale).",
  },
  {
    num: "02",
    text: "Tu peux travailler 100% en remote pendant 2 à 3 semaines.",
  },
  {
    num: "03",
    text: "Tu donnes autant que tu prends : leviers, réseau, expérience.",
  },
  {
    num: "04",
    text: "Tu es facile à vivre. L'état d'esprit compte autant que les chiffres.",
  },
] as const;

export const FAQ = [
  {
    q: "Combien ça coûte ?",
    a: `À partir de ${SITE.priceFrom} tout compris pour 2 semaines (logement, organisation, activités). Le montant exact est confirmé lors de l'appel de sélection selon la session et la chambre.`,
  },
  {
    q: "Je fais moins de 10k€/mois, je peux candidater ?",
    a: "Si tu es en forte croissance, candidate quand même et explique ta trajectoire dans le formulaire.",
  },
  {
    q: "Je dois rester toute la durée du camp ?",
    a: "Non, on est flexibles : tu peux partir quelques jours si tu as un impératif. En revanche, on demande un minimum de 10 jours sur 14 pour que le groupe prenne et que tu profites vraiment de la dynamique.",
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

export const FOUNDERS = [
  {
    name: "Teo Comyn",
    title: "Co-fondateur · The Founders Camp",
    bio: "Expert Shopify · CRO & SEO · +60 marques. Co-organise chaque session.",
    linkedin: "https://linkedin.com/in/teocomyn",
    image: IMAGES.founder,
  },
  {
    name: "Léopold De Wulf",
    title: "Co-fondateur · The Founders Camp",
    bio: "Fondateur Clickroad · SEO Shopify. Co-organise chaque session.",
    linkedin: "https://linkedin.com/in/leopold-de-wulf",
    image: IMAGES.founderLeopold,
  },
] as const;
