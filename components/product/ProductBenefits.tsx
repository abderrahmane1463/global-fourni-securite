"use client";

import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { staggerContainer, staggerItem } from "@/components/Reveal";

export function ProductBenefits({ product }: { product: Product }) {
  return (
    <section className="relative border-y border-white/5 py-16">
      <div className="container-x">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {product.benefits.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                variants={staggerItem}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/5 p-5 text-center transition-colors duration-300 hover:border-blood/30 hover:bg-white/[0.02]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-noir transition-all duration-300 group-hover:border-blood/50 group-hover:shadow-glow-sm">
                  <Icon className="h-6 w-6 text-blood" />
                </div>
                <span className="font-heading text-sm font-semibold text-white">{b.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
