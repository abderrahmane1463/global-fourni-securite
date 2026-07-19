// Paste this into Google Sheets → Extensions → Apps Script.
// Then deploy it as a Web App (see README instructions) and give the
// resulting URL to the site as the SHEETS_WEBHOOK_URL environment variable.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Commandes");
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Commandes");
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Date", "Produit", "Modele", "Quantite", "Prix unitaire",
      "Livraison", "Frais livraison", "Sous-total", "Total",
      "Client", "Telephone", "Wilaya", "Commune", "Adresse", "Notes", "Langue"
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
    data.language
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
