"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
  CheckCircle2,
  Loader2,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { COMPANY } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.2v11.66a2.44 2.44 0 1 1-2.44-2.44c.2 0 .4.03.6.08V8.98a5.64 5.64 0 0 0-.6-.04A5.66 5.66 0 1 0 15.6 14.5V8.9a7.5 7.5 0 0 0 4.4 1.4V7.1a4.28 4.28 0 0 1-3.4-1.28Z" />
  </svg>
);

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const text = encodeURIComponent(
      `${c.wa.greeting}\n\n${c.wa.name} ${form.name}.\n${c.wa.phone} : ${form.phone}\n${c.wa.service} : ${form.service || "—"}\n\n${form.message}`,
    );
    setTimeout(() => {
      setStatus("sent");
      window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, "_blank");
      setTimeout(() => setStatus("idle"), 3500);
    }, 900);
  };

  const socials = [
    { id: "instagram", icon: Instagram, label: COMPANY.social.instagramHandle, href: COMPANY.social.instagram },
    { id: "tiktok", icon: TikTokIcon, label: COMPANY.social.tiktokHandle, href: COMPANY.social.tiktok },
    { id: "facebook", icon: Facebook, label: COMPANY.social.facebookHandle, href: COMPANY.social.facebook },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="ambient-red pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[600px] opacity-60" />
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{c.kicker}</span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            {c.title} <span className="text-blood">{c.highlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[58ch] text-ash">{c.subtitle}</p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Info + map */}
          <Reveal className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              {[
                { icon: Phone, label: c.info.phone, value: COMPANY.phoneDisplay, href: `tel:${COMPANY.phoneRaw}` },
                { icon: MapPin, label: c.info.address, value: COMPANY.location, href: COMPANY.mapUrl, external: true },
                { icon: Clock, label: c.info.availability, value: c.info.availabilityValue },
              ].map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl glass p-5 transition-colors hover:border-blood/40">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blood/30 bg-blood/10">
                      <Icon className="h-5 w-5 text-blood" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wide text-white/40">{item.label}</div>
                      <div className="font-heading font-semibold text-white">{item.value}</div>
                    </div>
                    {item.external && (
                      <ExternalLink className="ml-auto h-4 w-4 shrink-0 text-white/30 transition-colors group-hover:text-blood" />
                    )}
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group"
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm text-white/70 transition-all hover:-translate-y-0.5 hover:border-blood/50 hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-blood" />
                    <span className="max-w-[140px] truncate">{s.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Map — opens Google Maps */}
            <a
              href={COMPANY.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvrir l'itinéraire vers le magasin sur Google Maps"
              className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-graphite to-noir transition-all duration-300 hover:border-blood/50 hover:shadow-glow-sm"
            >
              <div className="absolute inset-0 bg-grid-lines [background-size:32px_32px] opacity-40 transition-transform duration-500 group-hover:scale-105" />
              <div className="ambient-red absolute inset-0 opacity-70" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="relative mx-auto mb-3 flex h-10 w-10 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-blood/40" />
                  <MapPin className="relative h-8 w-8 text-blood transition-transform duration-300 group-hover:scale-110" />
                </span>
                <div className="font-heading font-semibold text-white">{c.mapCity}</div>
                <div className="text-xs text-white/50">{c.mapCountry}</div>
              </div>
              <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-noir/70 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur transition-colors group-hover:text-blood">
                <Navigation className="h-3.5 w-3.5" /> {c.itinerary}
              </span>
            </a>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl glass p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blood/20 blur-3xl" />
            <form onSubmit={handleSubmit} className="relative flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={c.form.name} name="name" value={form.name} onChange={handleChange} required placeholder={c.form.namePh} />
                <Field label={c.form.phone} name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder={c.form.phonePh} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="font-heading text-sm font-medium text-white">
                  {c.form.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="rounded-xl border border-white/10 bg-noir/60 px-4 py-3 text-white outline-none transition-colors focus:border-blood/60 focus:shadow-glow-sm"
                >
                  <option value="">{c.form.serviceDefault}</option>
                  {c.form.serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-heading text-sm font-medium text-white">
                  {c.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={c.form.messagePh}
                  className="resize-none rounded-xl border border-white/10 bg-noir/60 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-blood/60 focus:shadow-glow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="group relative mt-1 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-blood px-6 py-4 font-heading font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg disabled:opacity-90"
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      {c.form.send}
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </motion.span>
                  )}
                  {status === "sending" && (
                    <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> {c.form.sending}
                    </motion.span>
                  )}
                  {status === "sent" && (
                    <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" /> {c.form.sent}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-white/50 transition-colors hover:text-emerald-300"
              >
                <MessageCircle className="h-4 w-4" /> {c.form.direct}
              </a>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-heading text-sm font-medium text-white">
        {label} {required && <span className="text-blood">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-noir/60 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-blood/60 focus:shadow-glow-sm"
      />
    </div>
  );
}
