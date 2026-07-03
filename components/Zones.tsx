"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { ZONES } from "@/lib/site";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

export function Zones() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="zones" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="Zones d'intervention"
          title="Nous couvrons le"
          highlight="centre de l'Algérie"
          subtitle="Basés à Ain Bessem (Bouira), nous intervenons dans plusieurs wilayas voisines pour vos installations et votre maintenance."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Map */}
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-graphite to-noir sm:aspect-[16/10]">
            <div className="absolute inset-0 bg-grid-lines [background-size:40px_40px] opacity-40" />
            <div className="ambient-red absolute inset-0 opacity-70" />

            {/* connective lines from hub */}
            <svg className="absolute inset-0 h-full w-full" aria-hidden>
              {ZONES.filter((z) => !z.primary).map((z) => (
                <line
                  key={z.name}
                  x1="44%"
                  y1="58%"
                  x2={z.left}
                  y2={z.top}
                  stroke="rgba(225,6,0,0.25)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}
            </svg>

            {ZONES.map((zone, i) => (
              <button
                key={zone.name}
                onMouseEnter={() => setHovered(zone.name)}
                onMouseLeave={() => setHovered(null)}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: zone.top, left: zone.left }}
                aria-label={zone.name}
              >
                {/* pulse ring */}
                <span
                  className={`absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    zone.primary ? "bg-blood/40" : "bg-blood/25"
                  } animate-pulse-ring`}
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                <motion.span
                  whileHover={{ scale: 1.4 }}
                  className={`relative flex items-center justify-center rounded-full ${
                    zone.primary
                      ? "h-5 w-5 bg-blood shadow-glow"
                      : "h-3.5 w-3.5 bg-blood-bright"
                  }`}
                >
                  {zone.primary && <MapPin className="h-3 w-3 text-white" />}
                </motion.span>

                <span
                  className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-noir/80 px-2.5 py-1 font-heading text-xs font-semibold backdrop-blur transition-all duration-300 ${
                    hovered === zone.name || zone.primary
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  } ${zone.primary ? "text-blood" : "text-white"}`}
                >
                  {zone.name}
                  {zone.primary && " · Siège"}
                </span>
              </button>
            ))}

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-white/70">
              <Navigation className="h-3.5 w-3.5 text-blood" />
              Réseau d'intervention
            </div>
          </Reveal>

          {/* Zone list */}
          <div className="flex flex-col gap-3">
            {ZONES.map((zone, i) => (
              <Reveal key={zone.name} delay={i * 0.06} as="div">
                <div
                  onMouseEnter={() => setHovered(zone.name)}
                  onMouseLeave={() => setHovered(null)}
                  className={`flex items-center justify-between rounded-xl border px-5 py-4 transition-all duration-300 ${
                    hovered === zone.name
                      ? "border-blood/50 bg-blood/5"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      className={`h-5 w-5 ${zone.primary ? "text-blood" : "text-white/50"}`}
                    />
                    <span className="font-heading font-semibold text-white">{zone.name}</span>
                  </div>
                  {zone.primary ? (
                    <span className="rounded-full bg-blood/15 px-2.5 py-0.5 text-xs font-semibold text-blood">
                      Siège
                    </span>
                  ) : (
                    <span className="text-xs text-white/40">Intervention</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
