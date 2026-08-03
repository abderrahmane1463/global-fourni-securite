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

  // On phone, ad traffic sees the order form right after the hero (its own
  // image carousel + CTA already cover the "photos" part) — everything else
  // keeps its normal relative order, just pushed below the form. Desktop
  // keeps the original full order (md:order-N matches the natural sequence).
  return (
    <div className="flex flex-col">
      <div className="order-1">
        <ProductHero product={product} />
      </div>
      <div className="order-2 md:order-10">
        <OrderForm product={product} />
      </div>
      <div className="order-3 md:order-2">
        <ProductBenefits product={product} />
      </div>
      <div className="order-4 md:order-3">
        <ProductFeatures product={product} />
      </div>
      <div className="order-5 md:order-4">
        <ProductGallery product={product} />
      </div>
      <div className="order-6 md:order-5">
        <ProductComparison product={product} />
      </div>
      <div className="order-7 md:order-6">
        <ProductHowItWorks product={product} />
      </div>
      <div className="order-8 md:order-7">
        <ProductSpecs product={product} />
      </div>
      <div className="order-9 md:order-8">
        <ProductFaq product={product} />
      </div>
      <div className="order-10 md:order-9">
        <ProductFinalCta product={product} />
      </div>
    </div>
  );
}
