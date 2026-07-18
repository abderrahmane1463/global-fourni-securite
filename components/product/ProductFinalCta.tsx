"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Headset } from "lucide-react";
import type { Product } from "@/lib/products";
import { DELIVERY } from "@/lib/site";
import { formatPrice } from "@/lib/format";
import { Reveal } from "@/components/Reveal";

export function ProductFinalCta({ product }: { product: Product }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="ambient-red pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] opacity-70" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-blood to-transparent" />

      <div className="container-x flex flex-col items-center gap-6 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            Sécurisez votre espace avec la{" "}
            <span className="text-blood">{product.model}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto max-w-[58ch] text-ash">
            Livraison dans toute l'Algérie, garantie constructeur et accompagnement par notre
            équipe technique après l'achat.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="font-heading text-4xl font-extrabold text-white">
              {formatPrice(product.price)}
            </span>
          </div>
          <p className="mt-1 text-xs text-white/40">
            + Livraison {formatPrice(DELIVERY.bureau.price)} (bureau) ou{" "}
            {formatPrice(DELIVERY.domicile.price)} (domicile) — toutes wilayas
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <motion.a
            href="#commander"
            whileHover={{ y: -2 }}
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-blood px-10 py-4 font-heading text-base font-semibold text-white shadow-glow transition-all duration-300 hover:shadow-glow-lg"
          >
            Commander maintenant
          </motion.a>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blood" /> Produit garanti
            </span>
            <span className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-blood" /> Livraison partout en Algérie
            </span>
            <span className="flex items-center gap-2">
              <Headset className="h-4 w-4 text-blood" /> Support après-vente
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
