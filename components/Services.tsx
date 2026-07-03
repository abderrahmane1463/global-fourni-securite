"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./ui";
import { staggerContainer, staggerItem } from "./Reveal";

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="ambient-red pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] opacity-60" />
      <div className="container-x">
        <SectionHeading
          kicker={t.services.kicker}
          title={t.services.title}
          highlight={t.services.highlight}
          subtitle={t.services.subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.services.items.map((service, i) => {
            const Icon = SERVICES[i].icon;
            return (
              <motion.article
                key={i}
                variants={staggerItem}
                className="border-glow group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:bg-white/[0.04]"
              >
                {/* hover glow blob */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blood/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-noir transition-all duration-300 group-hover:border-blood/50 group-hover:shadow-glow-sm">
                  <Icon className="h-6 w-6 text-blood transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="relative mb-2 font-heading text-lg font-bold leading-snug text-white">
                  {service.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-ash">{service.description}</p>

                <div className="relative mt-5 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blood to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
