import { NextResponse } from "next/server";

type OrderPayload = {
  productName?: string;
  model?: string;
  quantity?: number;
  customerName?: string;
  phone?: string;
  wilaya?: string;
  commune?: string;
  address?: string;
  // Ad attribution, captured client-side from the landing URL (first touch
  // wins for the session). Purely informational — never required.
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
};

// Forwards validated order data to a Google Sheets webhook (Apps Script Web App).
// Kept server-side so the webhook URL never ships in the client bundle, and so
// the browser never has to deal with Apps Script's cross-origin quirks.
export async function POST(request: Request) {
  const webhookUrl = process.env.SHEETS_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  let payload: OrderPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  if (
    !payload.productName ||
    !payload.customerName ||
    !payload.phone ||
    !payload.wilaya ||
    !payload.commune ||
    !payload.address ||
    !payload.quantity
  ) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
    const text = await res.text();
    if (!res.ok) {
      console.error("SHEETS_WEBHOOK non-ok response", res.status, text.slice(0, 500));
      return NextResponse.json({ ok: false, error: "sheet_error" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("SHEETS_WEBHOOK fetch threw", err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false, error: "network" }, { status: 502 });
  }
}
