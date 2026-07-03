"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./ui";
import { staggerContainer, staggerItem } from "./Reveal";

export function WhyChooseUs() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-noir via-graphite/40 to-noir" />
      <div className="ambient-red pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container-x">
        <SectionHeading
          kicker={t.why.kicker}
          title={t.why.title}
          highlight={t.why.highlight}
          subtitle={t.why.subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.why.items.map((feature, i) => {
            const Icon = WHY_US[i].icon;
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl glass p-7 transition-colors duration-300 hover:border-blood/40"
              >
                <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-blood/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blood/30 bg-blood/10 shadow-glow-sm">
                  <Icon className="h-7 w-7 text-blood" />
                </div>
                <h3 className="relative mb-2 font-heading text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-ash">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
