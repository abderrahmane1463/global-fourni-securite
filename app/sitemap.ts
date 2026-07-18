import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://globalfournisecurite.dz";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/boutique`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...PRODUCTS.map((p) => ({
      url: `${base}/boutique/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
