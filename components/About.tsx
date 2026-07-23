"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Target, Award, Users } from "lucide-react";
import Image from "next/image";
import { COMPANY, STATS } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
      {n}
      <span className="text-blood">{suffix}</span>
    </span>
  );
}

const PILLAR_ICONS = [Target, Award, Users];

export function About() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Visual */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <div className="ambient-red absolute inset-0 z-10 mix-blend-screen" />
            <Image
              src="/storefront.jpeg"
              alt="Magasin Global Fourni Sécurité à Ain Bessem"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-transparent" />
            <div className="absolute bottom-5 left-5 z-20 glass rounded-2xl px-5 py-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-blood" />
                <div>
                  <div className="font-heading text-sm font-bold text-white">{COMPANY.legal}</div>
                  <div className="text-xs text-white/60">{COMPANY.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arabic slogan plaque */}
          <div className="mt-5 rounded-2xl border border-blood/20 bg-blood/5 px-6 py-4 text-center" dir="rtl">
            <p className="font-heading text-lg font-semibold text-white">{COMPANY.sloganAr}</p>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Reveal>
            <span className="eyebrow">{t.about.kicker}</span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              {t.about.title} <span className="text-blood">{t.about.highlight}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-[60ch] leading-relaxed text-ash">{t.about.body}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-heading text-lg font-semibold italic text-white">
              {t.about.slogan}
            </p>
          </Reveal>

          <div className="mt-2 flex flex-col gap-4">
            {t.about.pillars.map((p, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <Reveal key={i} delay={0.1 + i * 0.08} as="div">
                  <div className="group flex items-start gap-4 rounded-2xl border border-white/5 p-4 transition-colors hover:border-blood/30 hover:bg-white/[0.02] light:hover:bg-black/[0.02]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-noir transition-all group-hover:border-blood/50 group-hover:shadow-glow-sm">
                      <Icon className="h-5 w-5 text-blood" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-white">{p.title}</h3>
                      <p className="text-sm text-ash">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="container-x mt-20">
        <div className="glass grid grid-cols-2 gap-8 rounded-3xl px-8 py-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <span className="text-sm text-ash">{t.about.stats[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
