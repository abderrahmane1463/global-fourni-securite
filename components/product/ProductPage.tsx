"use client";

import { useEffect } from "react";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import { trackViewContent } from "@/lib/analytics";
import { ProductHero } from "./ProductHero";
import { ProductBenefits } from "./ProductBenefits";
import { ProductFeatures } from "./ProductFeatures";
import { ProductGallery } from "./ProductGallery";
import { ProductComparison } from "./ProductComparison";
import { ProductHowItWorks } from "./ProductHowItWorks";
import { ProductSpecs } from "./ProductSpecs";
import { ProductFaq } from "./ProductFaq";
import { ProductFinalCta } from "./ProductFinalCta";
import { OrderForm } from "./OrderForm";

// Icon components (from lucide-react) inside product data aren't serializable
// across the server/client boundary, so this client component resolves the
// product from a plain slug string instead of receiving the object as a prop.
export function ProductPage({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);

  useEffect(() => {
    if (!product) return;
    trackViewContent({
      name: product.content.fr.name,
      id: product.slug,
      price: product.price,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.slug]);

  if (!product) notFound();

  return (
    <>
      <ProductHero product={product} />
      <ProductBenefits product={product} />
      <ProductFeatures product={product} />
      <ProductGallery product={product} />
      <ProductComparison product={product} />
      <ProductHowItWorks product={product} />
      <ProductSpecs product={product} />
      <ProductFaq product={product} />
      <ProductFinalCta product={product} />
      <OrderForm product={product} />
    </>
  );
}
