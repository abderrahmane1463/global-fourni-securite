import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ProductPage } from "@/components/product/ProductPage";
import { PRODUCTS, getProductBySlug } from "@/lib/products";

const SITE_URL = "https://globalfournisecurite.dz";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  // SSR metadata is crawler-facing and stays French, consistent with the
  // rest of the site's server-rendered <head> (language toggle is client-side).
  const c = product.content.fr;
  const url = `${SITE_URL}/boutique/${product.slug}`;
  const image = `${SITE_URL}${product.images[0]}`;

  return {
    title: `${c.name} (${product.model}) — Boutique`,
    description: c.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${c.name} — Global Fourni Sécurité`,
      description: c.shortDescription,
      url,
      type: "website",
      images: [{ url: image, alt: c.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.name,
      description: c.shortDescription,
      images: [image],
    },
  };
}

export default async function ProductRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const c = product.content.fr;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: c.name,
    model: product.model,
    description: c.shortDescription,
    image: product.images.map((src) => `${SITE_URL}${src}`),
    brand: { "@type": "Brand", name: "Global Fourni Sécurité" },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/boutique/${product.slug}`,
      priceCurrency: "DZD",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Global Fourni Sécurité" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <ProductPage slug={product.slug} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
