"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldCheck } from "lucide-react";
import type { Product } from "@/lib/products";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function ProductComparison({ product }: { product: Product }) {
  const { lang, t } = useI18n();
  const comparison = product.content[lang].comparison;

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="ambient-red pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2" />
      <div className="container-x">
        <SectionHeading
          kicker={t.product.comparison.kicker}
          title={t.product.comparison.title}
          highlight={t.product.comparison.highlight}
          subtitle={t.product.comparison.subtitle}
        />

        <Reveal delay={0.1} className="mt-16 overflow-hidden rounded-3xl border border-white/10">
          <div className="grid grid-cols-3 bg-white/[0.02] text-center">
            <div className="p-4 sm:p-6" />
            <div className="flex flex-col items-center gap-1.5 border-x border-white/10 bg-blood/10 p-4 sm:p-6">
              <ShieldCheck className="h-5 w-5 text-blood" />
              <span className="font-heading text-xs font-bold text-white sm:text-sm">
                {product.model}
              </span>
            </div>
            <div className="p-4 sm:p-6">
              <span className="font-heading text-xs font-semibold text-white/50 sm:text-sm">
                {t.product.comparison.ordinaryCamera}
              </span>
            </div>
          </div>

          {comparison.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-3 items-center border-t border-white/5 text-center"
            >
              <div className="p-4 text-left text-sm text-white/70 sm:p-6 sm:text-base">{row.label}</div>
              <div className="flex items-center justify-center border-x border-white/10 bg-blood/[0.04] p-4 sm:p-6">
                <ComparisonCell value={row.thisProduct} emphasis />
              </div>
              <div className="flex items-center justify-center p-4 sm:p-6">
                <ComparisonCell value={row.ordinary} />
              </div>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function ComparisonCell({ value, emphasis }: { value: string | boolean; emphasis?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className={`h-5 w-5 ${emphasis ? "text-blood" : "text-white/40"}`} />
    ) : (
      <X className="h-5 w-5 text-white/25" />
    );
  }
  return (
    <span className={`text-sm font-semibold sm:text-base ${emphasis ? "text-white" : "text-white/50"}`}>
      {value}
    </span>
  );
}
