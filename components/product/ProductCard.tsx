"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { useI18n } from "@/lib/i18n";
import { staggerItem } from "@/components/Reveal";

export function ProductCard({ product }: { product: Product }) {
  const { lang, t } = useI18n();
  const content = product.content[lang];

  return (
    <motion.div variants={staggerItem}>
      <Link
        href={`/boutique/${product.slug}`}
        className="group border-glow relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.04] light:hover:bg-black/[0.04]"
      >
        <div className="relative aspect-square overflow-hidden bg-graphite">
          <Image
            src={product.images[0]}
            alt={content.name}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="ambient-red pointer-events-none absolute inset-0 opacity-30 mix-blend-screen" />
          {content.badges[0] && (
            <span className="absolute left-4 top-4 rounded-full bg-blood px-3 py-1 font-heading text-xs font-semibold text-white text-white-always shadow-glow-sm">
              {content.badges[0]}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="font-heading text-lg font-bold text-white">{content.name}</h3>
          <p className="line-clamp-2 text-sm text-ash">{content.tagline}</p>
          <div className="mt-auto flex items-center justify-between pt-3">
            <span className="font-heading text-xl font-extrabold text-white">
              {formatPrice(product.price, lang)}
            </span>
            <span className="flex items-center gap-1.5 font-heading text-sm font-semibold text-blood transition-transform duration-300 group-hover:translate-x-1">
              {t.shop.discover} <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
