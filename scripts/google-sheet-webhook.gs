/**
 * Colle ce script dans Extensions > Apps Script sur ton Google Sheet,
 * puis Déployer > Nouvelle déploiement > Application Web (accès : Tout le monde).
 * Copie l'URL dans GOOGLE_APPS_SCRIPT_URL sur Vercel.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.openById("1XUfrF_-325vQlPFHVtShphZZEPDKLKc82KAXo9B7Zuo").getSheets()[0];
  var data = JSON.parse(e.postData.contents);
  var now = Utilities.formatDate(new Date(), "Europe/Paris", "dd/MM/yyyy HH:mm:ss");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Date",
      "Type",
      "Destination",
      "Prénom",
      "Nom",
      "Email",
      "Activité",
      "CA",
      "LinkedIn",
      "Motivation",
    ]);
  }

  sheet.appendRow([
    now,
    data.type || "candidature",
    data.destination || "",
    data.prenom || "",
    data.nom || "",
    data.email || "",
    data.activite || "",
    data.ca || "",
    data.linkedin || "",
    data.motivation || "",
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON
  );
}
