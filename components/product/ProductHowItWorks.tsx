"use client";

import { motion } from "framer-motion";
import { Microchip, Smartphone, Anchor, Eye } from "lucide-react";
import type { Product } from "@/lib/products";
import { SectionHeading } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/components/Reveal";

const STEP_ICONS = [Microchip, Smartphone, Anchor, Eye];

export function ProductHowItWorks({ product }: { product: Product }) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="Mise en route"
          title="Installation en"
          highlight="4 étapes"
          subtitle="Aucune compétence technique nécessaire — la caméra est prête en quelques minutes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* connecting line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          {product.steps.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? Eye;
            return (
              <motion.div key={step.title} variants={staggerItem} className="relative flex flex-col items-start gap-4">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-blood/30 bg-noir shadow-glow-sm">
                  <Icon className="h-7 w-7 text-blood" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blood font-heading text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ash">{step.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
