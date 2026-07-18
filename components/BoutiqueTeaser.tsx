"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./ui";

export function BoutiqueTeaser() {
  const { t } = useI18n();

  return (
    <section id="boutique" className="relative py-24 sm:py-32">
      <div className="ambient-red pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] opacity-60" />
      <div className="container-x">
        <SectionHeading
          kicker={t.shop.kicker}
          title={t.shop.title}
          highlight={t.shop.highlight}
          subtitle={t.shop.subtitle}
        />

        <div className="mt-16">
          <ProductGrid limit={3} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/boutique"
            className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-heading text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blood/50"
          >
            {t.shop.seeAll}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
