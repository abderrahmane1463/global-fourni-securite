"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/product/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { staggerContainer } from "@/components/Reveal";

export function BoutiqueGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {PRODUCTS.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </motion.div>
  );
}
