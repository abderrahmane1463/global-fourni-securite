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

  // On phone, ad traffic should go straight from the photos to the order
  // form — everything else only shows from the md breakpoint up. Desktop
  // keeps the original full order (md:order-N matches the natural sequence).
  return (
    <div className="flex flex-col">
      <div className="order-1">
        <ProductHero product={product} />
      </div>
      <div className="hidden md:order-2 md:block">
        <ProductBenefits product={product} />
      </div>
      <div className="hidden md:order-3 md:block">
        <ProductFeatures product={product} />
      </div>
      <div className="order-2 md:order-4">
        <ProductGallery product={product} />
      </div>
      <div className="hidden md:order-5 md:block">
        <ProductComparison product={product} />
      </div>
      <div className="hidden md:order-6 md:block">
        <ProductHowItWorks product={product} />
      </div>
      <div className="hidden md:order-7 md:block">
        <ProductSpecs product={product} />
      </div>
      <div className="hidden md:order-8 md:block">
        <ProductFaq product={product} />
      </div>
      <div className="hidden md:order-9 md:block">
        <ProductFinalCta product={product} />
      </div>
      <div className="order-3 md:order-10">
        <OrderForm product={product} />
      </div>
    </div>
  );
}
