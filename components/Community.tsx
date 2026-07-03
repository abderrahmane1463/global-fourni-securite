"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, ArrowUpRight, Play, Camera } from "lucide-react";
import { COMPANY } from "@/lib/site";
import { SectionHeading } from "./ui";
import { staggerContainer, staggerItem } from "./Reveal";

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.2v11.66a2.44 2.44 0 1 1-2.44-2.44c.2 0 .4.03.6.08V8.98a5.64 5.64 0 0 0-.6-.04A5.66 5.66 0 1 0 15.6 14.5V8.9a7.5 7.5 0 0 0 4.4 1.4V7.1a4.28 4.28 0 0 1-3.4-1.28Z" />
  </svg>
);

const PLATFORMS = [
  {
    id: "instagram",
    name: "Instagram",
    handle: COMPANY.social.instagramHandle,
    href: COMPANY.social.instagram,
    icon: Instagram,
    blurb: "Photos de nos installations et stories du quotidien.",
    accent: "from-[#833ab4] via-[#e1306c] to-[#f77737]",
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: COMPANY.social.tiktokHandle,
    href: COMPANY.social.tiktok,
    icon: TikTokIcon,
    blurb: "Nos reels et vidéos de chantiers en action.",
    accent: "from-[#25F4EE] via-[#111] to-[#FE2C55]",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: COMPANY.social.facebookHandle,
    href: COMPANY.social.facebook,
    icon: Facebook,
    blurb: "Actualités, avis clients et informations pratiques.",
    accent: "from-[#1877F2] via-[#0b5fd0] to-[#0a4bb0]",
  },
];

export function Community() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="ambient-red pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] opacity-60" />
      <div className="container-x">
        <SectionHeading
          kicker="Communauté"
          title="Suivez nos réalisations en"
          highlight="direct"
          subtitle="Chantiers, installations et nouveautés : retrouvez notre travail au quotidien sur nos réseaux sociaux."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {PLATFORMS.map((p) => {
            const Icon = p.icon;
            return (
              <motion.a
                key={p.id}
                variants={staggerItem}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl glass p-7 transition-colors duration-300 hover:border-blood/40"
              >
                {/* gradient wash on hover */}
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${p.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-noir transition-all duration-300 group-hover:border-blood/50 group-hover:shadow-glow-sm">
                    <Icon className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blood" />
                </div>

                <h3 className="font-heading text-xl font-bold text-white">{p.name}</h3>
                <p className="mt-1 font-heading text-sm font-medium text-blood">@{p.handle}</p>
                <p className="mt-3 text-sm leading-relaxed text-ash">{p.blurb}</p>

                <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-heading text-sm font-semibold text-white transition-colors duration-300 group-hover:border-blood/50 group-hover:text-blood">
                  Suivre
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* strip note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl glass px-6 py-4 text-sm text-white/70"
        >
          <span className="flex items-center gap-2">
            <Camera className="h-4 w-4 text-blood" /> Photos de chantiers
          </span>
          <span className="flex items-center gap-2">
            <Play className="h-4 w-4 text-blood" /> Reels & vidéos
          </span>
          <span className="flex items-center gap-2">
            <Instagram className="h-4 w-4 text-blood" /> Nouveautés & promos
          </span>
        </motion.div>
      </div>
    </section>
  );
}
