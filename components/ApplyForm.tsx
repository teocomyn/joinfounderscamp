"use client";

import { useState, FormEvent } from "react";

export default function ApplyForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setLoading(true);

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      // Branche ton endpoint ici (Make, Formspree, Resend, route API interne...).
      // La variable d'env NEXT_PUBLIC_APPLY_ENDPOINT permet de le changer sans toucher au code.
      const endpoint = process.env.NEXT_PUBLIC_APPLY_ENDPOINT;
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }
      setSent(true);
      setTimeout(() => {
        document
          .getElementById("successBox")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    } catch {
      // En cas d'échec réseau, on affiche quand même la confirmation
      // pour ne pas bloquer le candidat. Les leads critiques passent par l'endpoint.
      setSent(true);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="success" id="successBox" style={{ display: "block" }}>
        <h3>Candidature envoyée ✓</h3>
        <p>
          Bien reçu. On revient vers toi sous 72h. Garde un œil sur tes emails.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" name="prenom" required autoComplete="given-name" />
        </div>
        <div className="field">
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" name="nom" required autoComplete="family-name" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="activite">Ton activité en une phrase</label>
        <input
          type="text"
          id="activite"
          name="activite"
          placeholder="Ex : agence CRO pour marques Shopify"
          required
        />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="ca">CA mensuel moyen</label>
          <select id="ca" name="ca" required defaultValue="">
            <option value="" disabled>
              Choisir
            </option>
            <option>5 000€ à 10 000€</option>
            <option>10 000€ à 25 000€</option>
            <option>25 000€ à 50 000€</option>
            <option>Plus de 50 000€</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="linkedin">LinkedIn ou site web</label>
          <input type="url" id="linkedin" name="linkedin" placeholder="https://" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="motivation">
          Pourquoi toi ? Qu&apos;est-ce que tu apportes au camp ?
        </label>
        <textarea id="motivation" name="motivation" required></textarea>
      </div>
      <button type="submit" className="btn" style={{ width: "100%" }} disabled={loading}>
        {loading ? "Envoi..." : "Envoyer ma candidature"}
      </button>
      <p className="form-foot">
        Tes infos restent entre nous. Aucune candidature n&apos;est partagée,
        même refusée.
      </p>
    </form>
  );
}
