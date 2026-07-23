"use client";

import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, MessageCircle, ArrowRight, Wifi, Video, Lock } from "lucide-react";
import { COMPANY } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { Particles } from "./Particles";

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useI18n();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="accueil"
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-[#050505] light:bg-white" />
      <div className="absolute inset-0 -z-10 bg-grid-lines [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      <div className="ambient-red absolute -top-1/4 right-0 -z-10 h-[120%] w-[70%]" />
      <div className="absolute left-1/2 top-0 -z-10 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-blood/50 to-transparent" />
      <Particles className="-z-10 opacity-70" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blood opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blood" />
            </span>
            {t.hero.badgePrefix} {t.founded}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t.hero.titleA}{" "}
            <span className="relative text-blood text-glow">
              {t.hero.titleHighlight}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M2 7 Q150 -2 298 7" stroke="#E10600" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            {t.hero.titleB}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-xl text-base leading-relaxed text-ash sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="font-heading text-lg font-semibold italic text-white"
          >
            {t.hero.slogan}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-blood px-7 py-3.5 font-heading text-sm font-semibold text-white text-white-always shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-blood-bright hover:shadow-glow-lg"
            >
              {t.cta.quote}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-7 py-3.5 font-heading text-sm font-semibold text-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/60 hover:bg-emerald-500/20 light:border-emerald-500/30 light:bg-emerald-50 light:text-emerald-700 light:hover:bg-emerald-100"
            >
              <MessageCircle className="h-4 w-4" />
              {t.cta.whatsapp}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60"
          >
            {[Video, Wifi, Lock].map((Icon, i) => (
              <span key={i} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-blood" /> {t.hero.chips[i]}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: floating camera */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md md:block"
        >
          <div className="absolute inset-0 rounded-full bg-blood/20 blur-[80px]" />
          <div className="absolute inset-8 rounded-full border border-white/10" />
          <div className="absolute inset-16 rounded-full border border-blood/20" />

          {/* rotating radar sweep */}
          {!reduce && (
            <motion.div
              className="absolute inset-8 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(225,6,0,0.25) 40deg, transparent 80deg)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          )}

          <motion.div
            animate={reduce ? undefined : { y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <SecurityCamera />
          </motion.div>

          {/* floating info chips */}
          <FloatingChip className="left-0 top-10" delay={0.6} label="REC" sub={t.hero.cam.recSub} dot />
          <FloatingChip className="right-0 top-28" delay={0.9} label="4K UHD" sub={t.hero.cam.uhdSub} />
          <FloatingChip className="bottom-10 left-6" delay={1.2} label={t.hero.cam.mobile} sub={t.hero.cam.mobileSub} icon={<ShieldCheck className="h-3.5 w-3.5 text-blood" />} />
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent light:from-white" />
    </section>
  );
}

function FloatingChip({
  className = "",
  delay = 0,
  label,
  sub,
  dot,
  icon,
}: {
  className?: string;
  delay?: number;
  label: string;
  sub: string;
  dot?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`glass absolute flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blood opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blood" />
        </span>
      )}
      {icon}
      <div className="leading-tight">
        <div className="font-heading text-xs font-bold text-white">{label}</div>
        <div className="text-[10px] text-white/50">{sub}</div>
      </div>
    </motion.div>
  );
}

function SecurityCamera() {
  return (
    <svg viewBox="0 0 260 220" className="w-[78%] drop-shadow-[0_20px_40px_rgba(225,6,0,0.35)]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a2a2e" />
          <stop offset="55%" stopColor="#141416" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <radialGradient id="lens" cx="0.4" cy="0.4" r="0.7">
          <stop offset="0%" stopColor="#5b0a06" />
          <stop offset="45%" stopColor="#1a0402" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="rgba(225,6,0,0.5)" />
          <stop offset="100%" stopColor="rgba(225,6,0,0)" />
        </linearGradient>
      </defs>

      {/* IR beam cone */}
      <path d="M188 92 L258 40 L258 150 L196 118 Z" fill="url(#beam)" />

      {/* mount arm */}
      <rect x="40" y="150" width="16" height="54" rx="4" fill="#1c1c1f" />
      <rect x="18" y="196" width="60" height="14" rx="6" fill="#0e0e10" />
      <path d="M56 158 Q92 150 120 138" stroke="#1c1c1f" strokeWidth="12" strokeLinecap="round" fill="none" />

      {/* camera body */}
      <g transform="rotate(-9 140 100)">
        <rect x="60" y="70" width="150" height="60" rx="18" fill="url(#body)" stroke="#333" strokeWidth="1.5" />
        {/* sunshield */}
        <rect x="66" y="60" width="120" height="18" rx="9" fill="#1b1b1e" />
        {/* lens housing */}
        <circle cx="196" cy="100" r="30" fill="#0a0a0b" stroke="#2c2c30" strokeWidth="2" />
        <circle cx="196" cy="100" r="22" fill="url(#lens)" />
        <circle cx="196" cy="100" r="10" fill="#000" />
        <circle cx="189" cy="93" r="4" fill="rgba(255,255,255,0.35)" />
        {/* status LED */}
        <circle cx="80" cy="86" r="4" fill="#E10600" />
        {/* brand line */}
        <rect x="78" y="112" width="60" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
      </g>
    </svg>
  );
}
