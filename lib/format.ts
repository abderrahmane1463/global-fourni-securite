export function formatPrice(amount: number, lang: "fr" | "ar" = "fr"): string {
  const formatted = amount.toLocaleString("fr-FR").replace(/,/g, " ");
  return lang === "ar" ? `${formatted} دج` : `${formatted} DA`;
}
