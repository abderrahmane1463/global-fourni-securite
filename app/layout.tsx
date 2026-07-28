import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins, Cairo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { MetaPixel } from "@/components/MetaPixel";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const SITE_URL = "https://globalfournisecurite.dz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Global Fourni Sécurité — Vidéosurveillance & Sécurité | Bouira, Algérie",
    template: "%s | Global Fourni Sécurité",
  },
  description:
    "Solutions intelligentes de vidéosurveillance et de sécurité à Ain Bessem (Bouira). Installation de caméras HD & 4K, alarmes, contrôle d'accès, maintenance et surveillance mobile 24/7 pour particuliers et entreprises.",
  keywords: [
    "vidéosurveillance",
    "caméras de surveillance",
    "sécurité Bouira",
    "installation caméra Algérie",
    "Hikvision",
    "Dahua",
    "contrôle d'accès",
    "alarme anti-intrusion",
    "Ain Bessem",
    "Global Fourni Sécurité",
  ],
  authors: [{ name: "Global Fourni Sécurité" }],
  creator: "Global Fourni Sécurité",
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: SITE_URL,
    siteName: "Global Fourni Sécurité",
    title: "Global Fourni Sécurité — Vidéosurveillance & Sécurité professionnelle",
    description:
      "Installation, maintenance et surveillance professionnelle. Caméras HD & 4K, alarmes, contrôle d'accès. Bouira & centre de l'Algérie.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Fourni Sécurité",
    description:
      "Solutions intelligentes de vidéosurveillance & sécurité. Bouira, Algérie.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_URL },
  category: "Security",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Global Fourni Sécurité",
  image: `${SITE_URL}/logo-photo.jpeg`,
  description:
    "Installation, maintenance et surveillance de systèmes de vidéosurveillance et de sécurité.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ain Bessem",
    addressRegion: "Bouira",
    addressCountry: "DZ",
  },
  telephone: "+213655608423",
  foundingDate: "2024-11",
  areaServed: ["Bouira", "Alger", "Boumerdès", "Blida", "Béjaïa", "Tizi Ouzou"],
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/global_fourni_securite",
    "https://www.tiktok.com/@globalfourni",
    "https://www.facebook.com/profile.php?id=61578122815602",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-theme="light"
      suppressHydrationWarning
      className={`${montserrat.variable} ${poppins.variable} ${cairo.variable}`}
    >
      <body>
        {/* Applies a saved theme/language before first paint, avoiding a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('gfs-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;var l=localStorage.getItem('gfs-lang');if(l==='fr'||l==='ar'){document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';}}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MetaPixel />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
