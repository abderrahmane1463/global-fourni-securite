import type { Metadata } from "next";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ProductGrid } from "@/components/product/ProductGrid";

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
        <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
          <div className="absolute inset-0 -z-10 bg-noir" />
          <div className="absolute inset-0 -z-10 bg-grid-lines [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
          <div className="ambient-red absolute -top-1/4 right-0 -z-10 h-[120%] w-[70%]" />

          <div className="container-x flex flex-col items-center gap-5 text-center">
            <span className="eyebrow">Boutique</span>
            <h1 className="max-w-2xl font-heading text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              Équipez-vous en <span className="text-blood">caméras & sécurité</span>
            </h1>
            <p className="max-w-[58ch] text-ash sm:text-lg">
              Du matériel professionnel, sélectionné et testé par notre équipe. Commandez en ligne,
              livraison dans toute l'Algérie.
            </p>
          </div>
        </section>

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
