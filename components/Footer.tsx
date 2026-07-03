"use client";

import { Phone, MapPin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY, NAV_LINKS } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.2v11.66a2.44 2.44 0 1 1-2.44-2.44c.2 0 .4.03.6.08V8.98a5.64 5.64 0 0 0-.6-.04A5.66 5.66 0 1 0 15.6 14.5V8.9a7.5 7.5 0 0 0 4.4 1.4V7.1a4.28 4.28 0 0 1-3.4-1.28Z" />
  </svg>
);

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const socials = [
    { icon: Instagram, href: COMPANY.social.instagram, label: "Instagram" },
    { icon: TikTokIcon, href: COMPANY.social.tiktok, label: "TikTok" },
    { icon: Facebook, href: COMPANY.social.facebook, label: "Facebook" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-noir to-black">
      {/* red top glow border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blood to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blood/10 to-transparent" />

      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-ash">{t.footer.tagline}</p>
            <p className="font-heading text-sm font-semibold italic text-white">
              {t.about.slogan}
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:-translate-y-0.5 hover:border-blood/50 hover:text-blood"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav */}
          <FooterCol title={t.footer.nav}>
            {NAV_LINKS.map((l, i) => (
              <FooterLink key={l.href} href={l.href}>
                {t.nav[i]}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Services */}
          <FooterCol title={t.footer.services}>
            {t.services.items.slice(0, 6).map((s, i) => (
              <FooterLink key={i} href="#services">
                {s.title.split("&")[0].split("(")[0].trim()}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Contact */}
          <FooterCol title={t.footer.contact}>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-ash transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-blood" /> <span dir="ltr">{COMPANY.phoneDisplay}</span>
            </a>
            <a
              href={COMPANY.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-ash transition-colors hover:text-white"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blood" /> {COMPANY.location}
            </a>
            <div className="mt-2 text-xs text-white/40">{t.footer.foundedPrefix} {t.founded}</div>
            <a
              href="#contact"
              className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-blood px-4 py-2 font-heading text-sm font-semibold text-white shadow-glow-sm transition-transform hover:-translate-y-0.5"
            >
              {t.footer.quote} <ArrowUpRight className="h-4 w-4" />
            </a>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <p>
            © {year} {COMPANY.legal}. {t.footer.rights}
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blood" />
            {COMPANY.location}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
      <ul className="flex flex-col gap-3">{Array.isArray(children) ? children : <li>{children}</li>}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-1 text-sm text-ash transition-colors hover:text-white"
      >
        <span className="h-px w-0 bg-blood transition-all duration-300 group-hover:w-3" />
        {children}
      </a>
    </li>
  );
}
