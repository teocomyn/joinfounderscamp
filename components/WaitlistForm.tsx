"use client";

import { FormEvent, useState } from "react";

type WaitlistFormProps = {
  destination: string;
};

export default function WaitlistForm({ destination }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "waitlist",
          destination,
          email,
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(
          typeof json.error === "string"
            ? json.error
            : "Inscription impossible. Réessaie."
        );
        return;
      }

      setDone(true);
    } catch {
      setError("Connexion impossible. Réessaie.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <p className="waitlist-done">
        Inscrit sur la liste {destination} ✓ On te prévient en priorité.
      </p>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={`waitlist-${destination}`}>
        Email pour la liste d&apos;attente {destination}
      </label>
      <input
        id={`waitlist-${destination}`}
        type="email"
        name="email"
        placeholder="Ton email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
      />
      <button type="submit" className="waitlist-submit" disabled={loading}>
        {loading ? "…" : "Liste d'attente"}
      </button>
      {error ? <p className="waitlist-error" role="alert">{error}</p> : null}
    </form>
  );
}
