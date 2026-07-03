"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { CONTENT, type Content, type Lang } from "./content";

type I18nValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: Content;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = "gfs-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  // Restore saved preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "fr" || saved === "ar") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  // Reflect language on <html> (dir + lang) and persist
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((l) => (l === "fr" ? "ar" : "fr")), []);

  const value: I18nValue = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    t: CONTENT[lang],
    setLang,
    toggle,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
