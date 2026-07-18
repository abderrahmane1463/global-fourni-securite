"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, Minus, Plus, MessageCircle, Building2, Home } from "lucide-react";
import type { Product } from "@/lib/products";
import { COMPANY, DELIVERY } from "@/lib/site";
import { WILAYAS } from "@/lib/wilayas";
import { formatPrice } from "@/lib/format";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

type DeliveryType = keyof typeof DELIVERY;

type FormState = {
  name: string;
  phone: string;
  wilaya: string;
  commune: string;
  address: string;
  quantity: number;
  deliveryType: DeliveryType;
  notes: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "",
  phone: "",
  wilaya: "",
  commune: "",
  address: "",
  quantity: 1,
  deliveryType: "bureau",
  notes: "",
};

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (form.name.trim().length < 3) errors.name = "Entrez votre nom complet.";
  if (!/^0\d{8,9}$/.test(form.phone.trim())) errors.phone = "Numéro invalide (ex: 0655608423).";
  if (!form.wilaya) errors.wilaya = "Sélectionnez votre wilaya.";
  if (form.commune.trim().length < 2) errors.commune = "Entrez votre commune.";
  if (form.address.trim().length < 5) errors.address = "Adresse trop courte.";
  if (form.quantity < 1) errors.quantity = "Quantité minimum : 1.";
  return errors;
}

// Isolated so a real backend (fetch("/api/orders", …)) can replace the
// WhatsApp hand-off later without touching the form/validation logic above.
function buildOrderMessage(product: Product, form: FormState): string {
  const delivery = DELIVERY[form.deliveryType];
  const subtotal = product.price * form.quantity;
  const total = subtotal + delivery.price;
  return (
    `Nouvelle commande — ${product.name} (${product.model})\n\n` +
    `Client : ${form.name}\n` +
    `Téléphone : ${form.phone}\n` +
    `Wilaya : ${form.wilaya}\n` +
    `Commune : ${form.commune}\n` +
    `Adresse : ${form.address}\n` +
    `Quantité : ${form.quantity}\n` +
    `Prix unitaire : ${formatPrice(product.price)}\n` +
    `Livraison : ${delivery.label} (${formatPrice(delivery.price)})\n` +
    `Total à payer : ${formatPrice(total)}` +
    (form.notes.trim() ? `\n\nNotes : ${form.notes.trim()}` : "")
  );
}

export function OrderForm({ product }: { product: Product }) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const errors = validate(form);
  const hasErrors = Object.keys(errors).length > 0;

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const markTouched = (key: keyof FormState) => setTouched((t) => ({ ...t, [key]: true }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      phone: true,
      wilaya: true,
      commune: true,
      address: true,
      quantity: true,
    });
    if (hasErrors) return;

    setStatus("sending");
    const text = encodeURIComponent(buildOrderMessage(product, form));
    setTimeout(() => {
      setStatus("sent");
      window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, "_blank");
      setTimeout(() => {
        setStatus("idle");
        setForm(INITIAL);
        setTouched({});
      }, 3500);
    }, 800);
  };

  return (
    <section id="commander" className="relative py-24 sm:py-32">
      <div className="ambient-red pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[600px] opacity-60" />
      <div className="container-x">
        <SectionHeading
          kicker="Commande"
          title="Finalisez votre"
          highlight="commande"
          subtitle="Remplissez le formulaire ci-dessous, nous vous contactons pour confirmer et organiser la livraison."
        />

        <Reveal
          delay={0.1}
          className="relative mx-auto mt-16 max-w-2xl overflow-hidden rounded-3xl glass p-7 sm:p-9"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blood/20 blur-3xl" />

          {/* order summary */}
          <div className="relative mb-7 flex items-center justify-between rounded-2xl border border-white/10 bg-noir/40 px-5 py-4">
            <div>
              <div className="font-heading text-sm font-bold text-white">{product.name}</div>
              <div className="text-xs text-white/50">{product.model}</div>
            </div>
            <div className="font-heading text-lg font-extrabold text-blood">
              {formatPrice(product.price)}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Nom complet"
                required
                value={form.name}
                error={touched.name ? errors.name : undefined}
                onChange={(v) => setField("name", v)}
                onBlur={() => markTouched("name")}
                placeholder="Votre nom"
              />
              <Field
                label="Téléphone"
                required
                type="tel"
                value={form.phone}
                error={touched.phone ? errors.phone : undefined}
                onChange={(v) => setField("phone", v)}
                onBlur={() => markTouched("phone")}
                placeholder="0655608423"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="wilaya" className="font-heading text-sm font-medium text-white">
                  Wilaya <span className="text-blood">*</span>
                </label>
                <select
                  id="wilaya"
                  value={form.wilaya}
                  onChange={(e) => setField("wilaya", e.target.value)}
                  onBlur={() => markTouched("wilaya")}
                  className={`rounded-xl border bg-noir/60 px-4 py-3 text-white outline-none transition-colors focus:shadow-glow-sm ${
                    touched.wilaya && errors.wilaya
                      ? "border-red-500/60 focus:border-red-500/60"
                      : "border-white/10 focus:border-blood/60"
                  }`}
                >
                  <option value="">Sélectionnez…</option>
                  {WILAYAS.map((w) => (
                    <option key={w}>{w}</option>
                  ))}
                </select>
                {touched.wilaya && errors.wilaya && (
                  <span className="text-xs text-red-400">{errors.wilaya}</span>
                )}
              </div>

              <Field
                label="Commune"
                required
                value={form.commune}
                error={touched.commune ? errors.commune : undefined}
                onChange={(v) => setField("commune", v)}
                onBlur={() => markTouched("commune")}
                placeholder="Votre commune"
              />
            </div>

            <Field
              label="Adresse complète"
              required
              value={form.address}
              error={touched.address ? errors.address : undefined}
              onChange={(v) => setField("address", v)}
              onBlur={() => markTouched("address")}
              placeholder="Rue, quartier, repère…"
            />

            <div className="flex flex-col gap-2">
              <label className="font-heading text-sm font-medium text-white">Quantité</label>
              <div className="flex w-fit items-center gap-1 rounded-xl border border-white/10 bg-noir/60 p-1.5">
                <button
                  type="button"
                  onClick={() => setField("quantity", Math.max(1, form.quantity - 1))}
                  aria-label="Diminuer la quantité"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-heading font-semibold text-white">
                  {form.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setField("quantity", form.quantity + 1)}
                  aria-label="Augmenter la quantité"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-heading text-sm font-medium text-white">Mode de livraison</label>
              <div className="grid gap-3 sm:grid-cols-2">
                {(Object.keys(DELIVERY) as DeliveryType[]).map((key) => {
                  const option = DELIVERY[key];
                  const selected = form.deliveryType === key;
                  const Icon = key === "bureau" ? Building2 : Home;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setField("deliveryType", key)}
                      aria-pressed={selected}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                        selected
                          ? "border-blood/60 bg-blood/[0.06] shadow-glow-sm"
                          : "border-white/10 bg-noir/60 hover:border-white/20"
                      }`}
                    >
                      <Icon className={`h-5 w-5 shrink-0 ${selected ? "text-blood" : "text-white/50"}`} />
                      <span className="flex flex-col">
                        <span className="font-heading text-sm font-semibold text-white">
                          {option.label}
                        </span>
                        <span className="text-xs text-white/50">{formatPrice(option.price)}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              <span className="text-xs text-white/40">
                Frais de livraison identiques pour toutes les wilayas.
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="notes" className="font-heading text-sm font-medium text-white">
                Notes (optionnel)
              </label>
              <textarea
                id="notes"
                rows={3}
                value={form.notes}
                onChange={(e) => setField("notes", e.target.value)}
                placeholder="Précisions sur la livraison, horaires, etc."
                className="resize-none rounded-xl border border-white/10 bg-noir/60 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-blood/60 focus:shadow-glow-sm"
              />
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-noir/40 px-5 py-4">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Sous-total ({form.quantity} × {formatPrice(product.price)})</span>
                <span>{formatPrice(product.price * form.quantity)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Livraison ({DELIVERY[form.deliveryType].label})</span>
                <span>{formatPrice(DELIVERY[form.deliveryType].price)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-2">
                <span className="text-sm font-semibold text-white">Total à payer</span>
                <span className="font-heading text-lg font-extrabold text-white">
                  {formatPrice(product.price * form.quantity + DELIVERY[form.deliveryType].price)}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="group relative mt-1 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-blood px-6 py-4 font-heading font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg disabled:opacity-90"
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    Envoyer ma commande
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="h-4 w-4 animate-spin" /> Préparation…
                  </motion.span>
                )}
                {status === "sent" && (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Commande envoyée !
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
              <MessageCircle className="h-4 w-4" /> Ou commandez directement sur WhatsApp
            </a>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  required,
  placeholder,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-heading text-sm font-medium text-white">
        {label} {required && <span className="text-blood">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        required={required}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`rounded-xl border bg-noir/60 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:shadow-glow-sm ${
          error ? "border-red-500/60 focus:border-red-500/60" : "border-white/10 focus:border-blood/60"
        }`}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
