"use client";

// Thin wrapper around the Meta Pixel (window.fbq) + first-touch ad attribution
// (utm_* / fbclid) capture. Safe to call even when the Pixel script hasn't
// loaded yet (e.g. NEXT_PUBLIC_META_PIXEL_ID not set) — calls just no-op.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const ATTRIBUTION_KEY = "gfs-attribution";

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
};

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

// Reads ad-click params from the current URL and stores them for the rest of
// the session (first touch wins), so attribution survives further navigation
// before someone actually places an order.
export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Attribution = {};
    for (const key of UTM_PARAMS) {
      const v = params.get(key);
      if (v) found[key] = v;
    }
    const fbclid = params.get("fbclid");
    if (fbclid) found.fbclid = fbclid;

    if (Object.keys(found).length === 0) return;

    const existing = sessionStorage.getItem(ATTRIBUTION_KEY);
    if (existing) return; // first touch wins for this session

    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(found));
  } catch {
    /* ignore */
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function trackPageView() {
  window.fbq?.("track", "PageView");
}

export function trackViewContent(params: {
  name: string;
  id: string;
  price: number;
}) {
  window.fbq?.("track", "ViewContent", {
    content_name: params.name,
    content_ids: [params.id],
    content_type: "product",
    value: params.price,
    currency: "DZD",
  });
}

export function trackLead(params: { name: string; value?: number }) {
  window.fbq?.("track", "Lead", {
    content_name: params.name,
    value: params.value,
    currency: "DZD",
  });
}
