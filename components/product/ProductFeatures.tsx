"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { Reveal } from "@/components/Reveal";

export function ProductFeatures({ product }: { product: Product }) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x flex flex-col gap-24">
        {product.features.map((feature, i) => {
          const Icon = feature.icon;
          const reversed = i % 2 === 1;
          return (
            <div
              key={feature.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal y={30}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-graphite">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="ambient-red pointer-events-none absolute inset-0 opacity-30 mix-blend-screen" />
                </div>
              </Reveal>

              <Reveal delay={0.1} y={30}>
                <div className="flex flex-col items-start gap-4">
                  <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blood/30 bg-blood/10 shadow-glow-sm">
                    <Icon className="h-7 w-7 text-blood" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="max-w-lg text-base leading-relaxed text-ash">{feature.text}</p>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
