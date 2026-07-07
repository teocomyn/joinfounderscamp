import { NextResponse } from "next/server";
import { isLeadStorageConfigured, saveLead, type LeadRow } from "@/lib/google-sheets";

export const runtime = "nodejs";

function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!isLeadStorageConfigured()) {
    return NextResponse.json(
      { error: "Le stockage des leads n'est pas encore configuré." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide." }, { status: 400 });
  }

  const type = body.type === "waitlist" ? "waitlist" : "candidature";
  const email = body.email;

  if (!isEmail(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }

  const row: LeadRow = {
    type,
    destination: typeof body.destination === "string" ? body.destination : "",
    prenom: typeof body.prenom === "string" ? body.prenom.trim() : "",
    nom: typeof body.nom === "string" ? body.nom.trim() : "",
    email: email.trim().toLowerCase(),
    activite: typeof body.activite === "string" ? body.activite.trim() : "",
    ca: typeof body.ca === "string" ? body.ca : "",
    linkedin: typeof body.linkedin === "string" ? body.linkedin.trim() : "",
    motivation: typeof body.motivation === "string" ? body.motivation.trim() : "",
  };

  if (type === "candidature") {
    if (!row.prenom || !row.nom || !row.activite || !row.ca || !row.linkedin || !row.motivation) {
      return NextResponse.json(
        { error: "Merci de remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }
  }

  if (type === "waitlist" && !row.destination) {
    return NextResponse.json({ error: "Destination manquante." }, { status: 400 });
  }

  try {
    await saveLead(row);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Impossible d'enregistrer ta demande. Réessaie dans un instant." },
      { status: 500 }
    );
  }
}
