"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Truck, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { DELIVERY_PRICES } from "@/lib/site";
import { formatPrice } from "@/lib/format";
import { useI18n } from "@/lib/i18n";
import { Particles } from "@/components/Particles";

export function ProductHero({ product }: { product: Product }) {
  const reduce = useReducedMotion();
  const { lang, t } = useI18n();
  const content = product.content[lang];
  const [active, setActive] = useState(0);
  const images = product.images;

  const next = () => setActive((i) => (i + 1) % images.length);
  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-36">
      <div className="absolute inset-0 -z-10 bg-noir" />
      <div className="absolute inset-0 -z-10 bg-grid-lines [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      <div className="ambient-red absolute -top-1/4 right-0 -z-10 h-[120%] w-[70%]" />
      <Particles className="-z-10 opacity-50" />

      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Gallery */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-graphite"
          >
            {images.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "pointer-events-none opacity-0"}`}
              >
                <Image
                  src={src}
                  alt={`${content.name} — ${i + 1}`}
                  fill
                  priority={i === 0}
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-contain p-6 transition-transform duration-700 will-change-transform group-hover:scale-105 sm:p-10"
                />
              </div>
            ))}
            <div className="ambient-red pointer-events-none absolute inset-0 opacity-40 mix-blend-screen" />

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label={t.product.imagePrev}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full glass text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label={t.product.imageNext}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full glass text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </motion.div>

          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActive(i)}
                  aria-label={`${content.name} — ${i + 1}`}
                  className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border transition-all duration-300 sm:h-20 sm:w-20 ${
                    i === active ? "border-blood shadow-glow-sm" : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={src} alt="" fill sizes="80px" className="object-contain bg-graphite p-1.5" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2"
          >
            {content.badges.map((b) => (
              <span
                key={b}
                className="glass rounded-full px-3 py-1.5 text-xs font-semibold text-white/80"
              >
                {b}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl"
          >
            {content.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="max-w-lg text-base leading-relaxed text-ash sm:text-lg"
          >
            {content.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="max-w-lg text-sm leading-relaxed text-white/60"
          >
            {content.shortDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="flex items-baseline gap-3"
          >
            <span className="font-heading text-4xl font-extrabold text-white">
              {formatPrice(product.price, lang)}
            </span>
            {product.compareAtPrice && (
              <span className="font-heading text-lg text-white/40 line-through">
                {formatPrice(product.compareAtPrice, lang)}
              </span>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="text-xs text-white/40"
          >
            + {t.product.deliveryPrefix} {formatPrice(DELIVERY_PRICES.bureau, lang)} (
            {t.delivery.bureauLabel}) {t.product.deliveryOr} {formatPrice(DELIVERY_PRICES.domicile, lang)} (
            {t.delivery.domicileLabel}) — {t.product.deliveryAllWilayas}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#commander"
              className="group inline-flex items-center gap-2 rounded-full bg-blood px-8 py-4 font-heading text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-blood-bright hover:shadow-glow-lg"
            >
              {t.product.orderNow}
            </a>
            <a
              href="#specifications"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-4 font-heading text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blood/50"
            >
              {t.product.seeSpecs}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blood" /> {t.product.guarantee}
            </span>
            <span className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-blood" /> {t.product.deliveryAll}
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-blood" /> {t.product.soldBy}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
