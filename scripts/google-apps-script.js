// Paste this into Google Sheets → Extensions → Apps Script.
// Then deploy it as a Web App (see README instructions) and give the
// resulting URL to the site as the SHEETS_WEBHOOK_URL environment variable.
//
// v2: adds ad-attribution columns (utm_source, utm_campaign, fbclid...) so
// you can see which Meta ad/campaign brought in each order. Existing rows
// are untouched; new columns just appear on the right for new orders.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Commandes");
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Commandes");
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Date", "Produit", "Modele", "Quantite", "Prix unitaire",
      "Livraison", "Frais livraison", "Sous-total", "Total",
      "Client", "Telephone", "Wilaya", "Commune", "Adresse", "Notes", "Langue",
      "Source (utm_source)", "Support (utm_medium)", "Campagne (utm_campaign)",
      "Contenu (utm_content)", "Mot-cle (utm_term)", "Facebook Click ID (fbclid)"
    ]);
  }

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.productName,
    data.model,
    data.quantity,
    data.unitPrice,
    data.deliveryLabel,
    data.deliveryPrice,
    data.subtotal,
    data.total,
    data.customerName,
    data.phone,
    data.wilaya,
    data.commune,
    data.address,
    data.notes,
    data.language,
    data.utm_source || "",
    data.utm_medium || "",
    data.utm_campaign || "",
    data.utm_content || "",
    data.utm_term || "",
    data.fbclid || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
