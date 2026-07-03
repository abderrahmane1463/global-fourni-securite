"use client";

import { BRANDS } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Brands() {
  const { t } = useI18n();
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section className="relative border-y border-white/5 py-16">
      <div className="container-x">
        <Reveal className="mb-10 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.28em] text-white/50">
            {t.brands.title}
          </p>
        </Reveal>
      </div>

      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
          {loop.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex shrink-0 items-center gap-3 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-heading text-lg font-black text-blood">
                {brand.charAt(0)}
              </span>
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
