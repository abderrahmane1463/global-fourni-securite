"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import type { Product } from "@/lib/products";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui";

export function ProductGallery({ product }: { product: Product }) {
  const { lang, t } = useI18n();
  const content = product.content[lang];
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          kicker={t.product.gallery.kicker}
          title={t.product.gallery.title}
          highlight={t.product.gallery.highlight}
          subtitle={t.product.gallery.subtitle}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {product.images.map((src, i) => {
            const alt = `${content.name} — ${i + 1}`;
            return (
              <motion.button
                key={src}
                onClick={() => setActive({ src, alt })}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-graphite"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-noir/60 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4 text-white" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-noir/90 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              className="glass absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-white"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[85vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-graphite"
            >
              <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-contain p-4" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
