"use client";

import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui";

export function ProductSpecs({ product }: { product: Product }) {
  const { lang, t } = useI18n();
  const content = product.content[lang];

  return (
    <section id="specifications" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          kicker={t.product.specs.kicker}
          title={t.product.specs.title}
          highlight={t.product.specs.highlight}
          subtitle={t.product.specs.subtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10"
        >
          <table className="w-full border-collapse text-left">
            <tbody>
              {content.specs.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}
                >
                  <th
                    scope="row"
                    className="w-1/3 border-b border-white/5 p-4 align-top font-heading text-sm font-semibold text-white sm:p-5 sm:text-base"
                  >
                    {row.label}
                  </th>
                  <td className="border-b border-white/5 p-4 align-top text-sm text-ash sm:p-5 sm:text-base">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {content.idealFor.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="font-heading text-sm font-semibold text-white/50">
              {t.product.specs.idealFor}
            </span>
            {content.idealFor.map((use) => (
              <span
                key={use}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/80"
              >
                {use}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
