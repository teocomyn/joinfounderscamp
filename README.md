# The Founders Camp · joinfounderscamp.com

Landing page de candidature. Next.js 14 (App Router) + TypeScript. Zéro dépendance UI, tout en CSS natif.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Déployer sur Vercel

1. Push ce dossier sur un repo GitHub.
2. Sur vercel.com : New Project, importe le repo. Vercel détecte Next.js tout seul.
3. Ajoute le domaine `joinfounderscamp.com` dans Settings > Domains.
4. Deploy.

## Recevoir les candidatures

Le formulaire poste vers l'URL définie dans `NEXT_PUBLIC_APPLY_ENDPOINT`.

Trois options simples, sans coder de backend :

- **Formspree** : crée un formulaire, copie l'URL `https://formspree.io/f/xxx` dans la variable d'env.
- **Make / n8n** : crée un webhook, colle l'URL.
- **Tally / Notion** : plus simple encore, remplace carrément le formulaire par un embed.

Sur Vercel : Settings > Environment Variables > ajoute `NEXT_PUBLIC_APPLY_ENDPOINT`.

Tant que la variable est vide, le formulaire affiche la confirmation sans rien envoyer (pratique pour tester).

## Personnaliser

- Palette et typo : `app/globals.css` (variables `--pine`, `--copper`, etc. en haut du fichier).
- Textes, destinations, critères, FAQ : `app/page.tsx`.
- Formulaire : `components/ApplyForm.tsx`.

## Palette

- Pin `#12291F` / `#0C1D16` : fond
- Sable `#EAE3D2` : texte
- Cuivre `#C56A3E` / `#D98A5F` : accent (remplace l'ancien jaune)
- Sauge `#7E9184` : labels secondaires
