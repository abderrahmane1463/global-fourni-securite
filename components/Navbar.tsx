"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, COMPANY } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-noir/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-x flex h-[72px] items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative py-2 font-heading text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full bg-blood shadow-glow-sm transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2 font-heading text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-blood" />
              {COMPANY.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blood px-5 py-2.5 font-heading text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
            >
              <span className="relative z-10">Demander un devis</span>
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-noir/95 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, clipPath: reduce ? undefined : "circle(0% at 90% 5%)" }}
            animate={{ opacity: 1, clipPath: reduce ? undefined : "circle(150% at 90% 5%)" }}
            exit={{ opacity: 0, clipPath: reduce ? undefined : "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="ambient-red pointer-events-none absolute inset-0" />
            <div className="container-x relative flex h-[72px] items-center justify-between">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="container-x relative flex flex-1 flex-col justify-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-4 border-b border-white/5 py-4 font-heading text-3xl font-bold text-white"
                >
                  <span className="text-sm font-semibold text-blood">
                    0{i + 1}
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    {link.label}
                  </span>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col gap-3"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-full bg-blood px-6 py-4 font-heading font-semibold text-white shadow-glow"
                >
                  Demander un devis
                </a>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center justify-center gap-2 font-heading text-white/70"
                >
                  <Phone className="h-4 w-4 text-blood" /> {COMPANY.phoneDisplay}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
