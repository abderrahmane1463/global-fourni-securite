"use client";

import { useI18n } from "@/lib/i18n";

export function BoutiquePageHero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-noir" />
      <div className="absolute inset-0 -z-10 bg-grid-lines [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      <div className="ambient-red absolute -top-1/4 right-0 -z-10 h-[120%] w-[70%]" />

      <div className="container-x flex flex-col items-center gap-5 text-center">
        <span className="eyebrow">{t.shop.kicker}</span>
        <h1 className="max-w-2xl font-heading text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
          {t.shop.title} <span className="text-blood">{t.shop.highlight}</span>
        </h1>
        <p className="max-w-[58ch] text-ash sm:text-lg">{t.shop.subtitle}</p>
      </div>
    </section>
  );
}
