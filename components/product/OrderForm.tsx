"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle, Minus, Plus, MessageCircle, Building2, Home } from "lucide-react";
import type { Product } from "@/lib/products";
import { COMPANY, DELIVERY_PRICES, type DeliveryType } from "@/lib/site";
import { WILAYAS, wilayaLabel, getWilayaByCode } from "@/lib/wilayas";
import { formatPrice } from "@/lib/format";
import { useI18n } from "@/lib/i18n";
import { CONTENT, type Content, type Lang } from "@/lib/content";
import { getAttribution, trackLead } from "@/lib/analytics";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

type FormState = {
  name: string;
  phone: string;
  wilaya: string; // wilaya code, e.g. "10"
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

function validate(form: FormState, errors: Content["order"]["form"]["errors"]): FieldErrors {
  const out: FieldErrors = {};
  if (form.name.trim().length < 3) out.name = errors.name;
  if (!/^0\d{8,9}$/.test(form.phone.trim())) out.phone = errors.phone;
  if (!form.wilaya) out.wilaya = errors.wilaya;
  if (form.commune.trim().length < 2) out.commune = errors.commune;
  if (form.address.trim().length < 1) out.address = errors.address;
  if (form.quantity < 1) out.quantity = errors.quantity;
  return out;
}

// The sheet is read by the shop owner, so it always uses the French labels
// regardless of which language the customer ordered in (kept as metadata).
function buildOrderPayload(product: Product, form: FormState, lang: Lang) {
  const deliveryPrice = DELIVERY_PRICES[form.deliveryType];
  const deliveryLabel =
    form.deliveryType === "bureau" ? CONTENT.fr.delivery.bureauLabel : CONTENT.fr.delivery.domicileLabel;
  const wilaya = getWilayaByCode(form.wilaya);
  const subtotal = product.price * form.quantity;

  return {
    productName: product.content.fr.name,
    model: product.model,
    quantity: form.quantity,
    unitPrice: product.price,
    deliveryType: form.deliveryType,
    deliveryLabel,
    deliveryPrice,
    subtotal,
    total: subtotal + deliveryPrice,
    customerName: form.name,
    phone: form.phone,
    wilaya: wilaya ? wilayaLabel(wilaya, "fr") : form.wilaya,
    commune: form.commune,
    address: form.address,
    notes: form.notes,
    language: lang,
    ...getAttribution(),
  };
}

export function OrderForm({ product }: { product: Product }) {
  const { lang, t } = useI18n();
  const content = product.content[lang];
  const f = t.order.form;
  const [form, setForm] = useState<FormState>(INITIAL);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const errors = validate(form, f.errors);
  const hasErrors = Object.keys(errors).length > 0;

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((s) => ({ ...s, [key]: value }));

  const markTouched = (key: keyof FormState) => setTouched((s) => ({ ...s, [key]: true }));

  const handleSubmit = async (e: React.FormEvent) => {
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
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildOrderPayload(product, form, lang)),
      });
      if (!res.ok) throw new Error("order_failed");

      trackLead({
        name: product.content.fr.name,
        value: product.price * form.quantity + DELIVERY_PRICES[form.deliveryType],
      });

      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setForm(INITIAL);
        setTouched({});
      }, 3500);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const totalDelivery = DELIVERY_PRICES[form.deliveryType];

  return (
    <section id="commander" className="relative py-24 sm:py-32">
      <div className="ambient-red pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[600px] opacity-60" />
      <div className="container-x">
        <SectionHeading
          kicker={t.order.kicker}
          title={t.order.title}
          highlight={t.order.highlight}
          subtitle={t.order.subtitle}
        />

        <Reveal
          delay={0.1}
          className="relative mx-auto mt-16 max-w-2xl overflow-hidden rounded-3xl glass p-7 sm:p-9"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blood/20 blur-3xl" />

          {/* order summary */}
          <div className="relative mb-7 flex items-center justify-between rounded-2xl border border-white/10 bg-noir/40 px-5 py-4">
            <div>
              <div className="font-heading text-sm font-bold text-white">{content.name}</div>
              <div className="text-xs text-white/50">{product.model}</div>
            </div>
            <div className="font-heading text-lg font-extrabold text-blood">
              {formatPrice(product.price, lang)}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label={f.name}
                required
                value={form.name}
                error={touched.name ? errors.name : undefined}
                onChange={(v) => setField("name", v)}
                onBlur={() => markTouched("name")}
                placeholder={f.namePh}
              />
              <Field
                label={f.phone}
                required
                type="tel"
                value={form.phone}
                error={touched.phone ? errors.phone : undefined}
                onChange={(v) => setField("phone", v)}
                onBlur={() => markTouched("phone")}
                placeholder={f.phonePh}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="wilaya" className="font-heading text-sm font-medium text-white">
                  {f.wilaya} <span className="text-blood">*</span>
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
                  <option value="">{f.wilayaPh}</option>
                  {WILAYAS.map((w) => (
                    <option key={w.code} value={w.code}>
                      {wilayaLabel(w, lang)}
                    </option>
                  ))}
                </select>
                {touched.wilaya && errors.wilaya && (
                  <span className="text-xs text-red-400">{errors.wilaya}</span>
                )}
              </div>

              <Field
                label={f.commune}
                required
                value={form.commune}
                error={touched.commune ? errors.commune : undefined}
                onChange={(v) => setField("commune", v)}
                onBlur={() => markTouched("commune")}
                placeholder={f.communePh}
              />
            </div>

            <Field
              label={f.address}
              required
              value={form.address}
              error={touched.address ? errors.address : undefined}
              onChange={(v) => setField("address", v)}
              onBlur={() => markTouched("address")}
              placeholder={f.addressPh}
            />

            <div className="flex flex-col gap-2">
              <label className="font-heading text-sm font-medium text-white">{f.quantity}</label>
              <div className="flex w-fit items-center gap-1 rounded-xl border border-white/10 bg-noir/60 p-1.5">
                <button
                  type="button"
                  onClick={() => setField("quantity", Math.max(1, form.quantity - 1))}
                  aria-label={f.decreaseQty}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 light:hover:bg-black/5"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-heading font-semibold text-white">
                  {form.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setField("quantity", form.quantity + 1)}
                  aria-label={f.increaseQty}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 light:hover:bg-black/5"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-heading text-sm font-medium text-white">{f.deliveryMode}</label>
              <div className="grid gap-3 sm:grid-cols-2">
                {(Object.keys(DELIVERY_PRICES) as DeliveryType[]).map((key) => {
                  const price = DELIVERY_PRICES[key];
                  const label = key === "bureau" ? t.delivery.bureauLabel : t.delivery.domicileLabel;
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
                        <span className="font-heading text-sm font-semibold text-white">{label}</span>
                        <span className="text-xs text-white/50">{formatPrice(price, lang)}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              <span className="text-xs text-white/40">{f.deliveryNote}</span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="notes" className="font-heading text-sm font-medium text-white">
                {f.notes}
              </label>
              <textarea
                id="notes"
                rows={3}
                value={form.notes}
                onChange={(e) => setField("notes", e.target.value)}
                placeholder={f.notesPh}
                className="resize-none rounded-xl border border-white/10 bg-noir/60 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-blood/60 focus:shadow-glow-sm"
              />
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-noir/40 px-5 py-4">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>
                  {f.subtotal} ({form.quantity} × {formatPrice(product.price, lang)})
                </span>
                <span>{formatPrice(product.price * form.quantity, lang)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>
                  {f.delivery} (
                  {form.deliveryType === "bureau" ? t.delivery.bureauLabel : t.delivery.domicileLabel})
                </span>
                <span>{formatPrice(totalDelivery, lang)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-2">
                <span className="text-sm font-semibold text-white">{f.total}</span>
                <span className="font-heading text-lg font-extrabold text-white">
                  {formatPrice(product.price * form.quantity + totalDelivery, lang)}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="group relative mt-1 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-blood px-6 py-4 font-heading font-semibold text-white text-white-always shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg disabled:opacity-90"
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
                    {f.send}
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
                    <Loader2 className="h-4 w-4 animate-spin" /> {f.sending}
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
                    <CheckCircle2 className="h-4 w-4" /> {f.sent}
                  </motion.span>
                )}
                {status === "error" && (
                  <motion.span
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-center"
                  >
                    <AlertCircle className="h-4 w-4" /> {f.error}
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
              <MessageCircle className="h-4 w-4" /> {f.direct}
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
