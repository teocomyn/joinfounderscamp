"use client";

import { useState, FormEvent } from "react";
import { SITE } from "@/lib/content";

export default function ApplyForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setLoading(true);
    setError("");

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "candidature" }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(
          typeof json.error === "string"
            ? json.error
            : "Envoi impossible. Réessaie dans un instant."
        );
        return;
      }

      setSent(true);
      setTimeout(() => {
        document
          .getElementById("successBox")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    } catch {
      setError("Connexion impossible. Vérifie ton réseau et réessaie.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="success" id="successBox" style={{ display: "block" }}>
        <h3>Candidature envoyée ✓</h3>
        <p>
          Bien reçu. On revient vers toi sous 72h. En attendant, réserve ton appel
          de 20 min directement :
        </p>
        <a
          href={SITE.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark success-calendly"
        >
          Réserver mon appel
          <span className="btn-arrow" aria-hidden="true">→</span>
        </a>
        <p className="success-note">
          Garde un œil sur tes emails pour la confirmation.
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
            <option>5 000€ à 10 000€ (en forte croissance)</option>
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
      {error ? <p className="form-error" role="alert">{error}</p> : null}
      <p className="form-meta">
        <span aria-hidden="true">⏱</span> Environ 5 minutes · Réponse sous 72h · à
        partir de {SITE.priceFrom}
      </p>
      <button type="submit" className="btn btn-submit" disabled={loading}>
        {loading ? "Envoi en cours…" : "Envoyer ma candidature"}
      </button>
      <p className="form-foot">
        Tes infos restent confidentielles. Aucune candidature n&apos;est partagée,
        même refusée.
      </p>
    </form>
  );
}
