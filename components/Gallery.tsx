"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, Play, Camera, Maximize2 } from "lucide-react";
import { GALLERY, type GalleryItem } from "@/lib/site";
import { SectionHeading } from "./ui";

export function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section id="realisations" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="Réalisations"
          title="Nos installations en"
          highlight="images"
          subtitle="Un aperçu de notre magasin, de nos poses sur site et de nos interventions techniques."
        />

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {GALLERY.map((item, i) => (
            <motion.button
              key={item.label}
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative block w-full overflow-hidden rounded-2xl border border-white/10 ${
                item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <Placeholder item={item} />

              {/* overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-noir via-noir/30 to-transparent p-5 opacity-100">
                <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="mb-1 flex items-center gap-2">
                    {item.isVideo ? (
                      <Play className="h-4 w-4 text-blood" />
                    ) : (
                      <Camera className="h-4 w-4 text-blood" />
                    )}
                    <span className="font-heading text-sm font-bold text-white">{item.label}</span>
                  </div>
                  <p className="text-xs text-white/60">{item.caption}</p>
                </div>
              </div>

              {/* hover zoom action */}
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-noir/60 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4 text-white" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-noir/90 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full glass text-white"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10"
            >
              <Placeholder item={active} large />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir to-transparent p-6">
                <div className="flex items-center gap-2">
                  {active.isVideo ? (
                    <Play className="h-5 w-5 text-blood" />
                  ) : (
                    <Camera className="h-5 w-5 text-blood" />
                  )}
                  <h3 className="font-heading text-xl font-bold text-white">{active.label}</h3>
                </div>
                <p className="mt-1 text-sm text-white/60">{active.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Placeholder({ item, large }: { item: GalleryItem; large?: boolean }) {
  if (item.src) {
    return (
      <>
        <Image
          src={item.src}
          alt={item.caption}
          fill
          sizes={large ? "80vw" : "(max-width:768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="pointer-events-none absolute inset-0 bg-blood/5" />
      </>
    );
  }

  // Stylized placeholder tile
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-graphite to-noir transition-transform duration-700 group-hover:scale-105">
      <div className="absolute inset-0 bg-grid-lines [background-size:28px_28px] opacity-40" />
      <div className="ambient-red absolute inset-0 opacity-70" />
      {/* animated scan line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 h-16 w-full bg-gradient-to-b from-blood/25 to-transparent animate-scan-line" />
      </div>
      {item.isVideo ? (
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-blood/40 bg-blood/10">
          <Play className="h-7 w-7 fill-blood text-blood" />
          <span className="absolute inset-0 rounded-full border border-blood/50 animate-pulse-ring" />
        </div>
      ) : (
        <Camera className="relative h-12 w-12 text-white/20" />
      )}
    </div>
  );
}
