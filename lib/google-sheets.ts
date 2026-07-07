import { google } from "googleapis";

export type LeadRow = {
  type: "candidature" | "waitlist";
  destination?: string;
  prenom?: string;
  nom?: string;
  email: string;
  activite?: string;
  ca?: string;
  linkedin?: string;
  motivation?: string;
};

const SHEET_ID =
  process.env.GOOGLE_SHEET_ID ??
  "1XUfrF_-325vQlPFHVtShphZZEPDKLKc82KAXo9B7Zuo";

const SHEET_RANGE = process.env.GOOGLE_SHEET_RANGE ?? "A:J";

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) {
    return null;
  }

  return new google.auth.GoogleAuth({
    credentials: { client_email: email, private_key: key },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function appendLeadToSheet(row: LeadRow) {
  const auth = getAuth();
  if (!auth) {
    throw new Error("GOOGLE_SHEETS_NOT_CONFIGURED");
  }

  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: SHEET_RANGE,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          timestamp,
          row.type,
          row.destination ?? "",
          row.prenom ?? "",
          row.nom ?? "",
          row.email,
          row.activite ?? "",
          row.ca ?? "",
          row.linkedin ?? "",
          row.motivation ?? "",
        ],
      ],
    },
  });
}

export async function appendLeadViaAppsScript(row: LeadRow) {
  const url = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!url) {
    throw new Error("GOOGLE_APPS_SCRIPT_NOT_CONFIGURED");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(row),
  });

  if (!res.ok) {
    throw new Error("APPS_SCRIPT_FAILED");
  }
}

export async function saveLead(row: LeadRow) {
  if (getAuth()) {
    await appendLeadToSheet(row);
    return;
  }
  await appendLeadViaAppsScript(row);
}

export function isLeadStorageConfigured() {
  return Boolean(
    (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY) ||
      process.env.GOOGLE_APPS_SCRIPT_URL
  );
}
