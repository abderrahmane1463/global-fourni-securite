import type { Metadata } from "next";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ProductGrid } from "@/components/product/ProductGrid";
import { BoutiquePageHero } from "@/components/product/BoutiquePageHero";

export const metadata: Metadata = {
  title: "Boutique — Caméras & équipements de sécurité",
  description:
    "Achetez en ligne nos caméras de vidéosurveillance et équipements de sécurité. Livraison dans toute l'Algérie, commande simple via WhatsApp.",
  alternates: { canonical: "https://globalfournisecurite.dz/boutique" },
  openGraph: {
    title: "Boutique — Global Fourni Sécurité",
    description:
      "Caméras de vidéosurveillance et équipements de sécurité, livrés partout en Algérie.",
    type: "website",
  },
};

export default function BoutiquePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <BoutiquePageHero />

        <section className="relative pb-24 sm:pb-32">
          <div className="container-x">
            <ProductGrid />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
