"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { COMPANY } from "@/lib/site";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(() => setTip(true), 4000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
        >
          <AnimatePresence>
            {tip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="relative hidden rounded-2xl border border-white/10 bg-noir/90 px-4 py-2.5 text-sm text-white shadow-lg backdrop-blur sm:block"
              >
                Besoin d'un devis ? Écrivez-nous 👋
                <button
                  onClick={() => setTip(false)}
                  aria-label="Fermer"
                  className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-graphite text-white/60"
                >
                  <X className="h-3 w-3" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter sur WhatsApp"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_8px_30px_rgba(16,185,129,0.5)] transition-transform duration-300 hover:scale-110"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-40" />
            <MessageCircle className="relative h-7 w-7" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
