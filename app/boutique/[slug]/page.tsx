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

  const url = `${SITE_URL}/boutique/${product.slug}`;
  const image = `${SITE_URL}${product.images[0].src}`;

  return {
    title: `${product.name} (${product.model}) — Boutique`,
    description: product.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} — Global Fourni Sécurité`,
      description: product.shortDescription,
      url,
      type: "website",
      images: [{ url: image, alt: product.images[0].alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    model: product.model,
    description: product.shortDescription,
    image: product.images.map((img) => `${SITE_URL}${img.src}`),
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
