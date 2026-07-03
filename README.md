# GLOBAL FOURNI SÉCURITÉ — Site web

Site vitrine premium (dark/cinématique) pour l'entreprise de vidéosurveillance & sécurité
**Global Fourni Sécurité** (Ain Bessem — Bouira, Algérie).

## Stack
- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS 3**
- **Framer Motion** (animations)
- **Lucide React** (icônes)

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
```

Production :

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.tsx     # SEO, polices (Montserrat + Poppins), JSON-LD LocalBusiness
  page.tsx       # Assemblage des sections
  globals.css    # Thème, effets glow / glass / bordures animées
  loading.tsx    # Écran de chargement
  sitemap.ts / robots.ts
components/       # Navbar, Hero, Services, About, Gallery, WhyChooseUs,
                  # Brands, Zones, Testimonials, Contact, Footer, WhatsAppFloat…
lib/site.ts      # ⭐ Toutes les données (services, zones, avis, coordonnées)
public/          # Images (logo-photo.jpeg, storefront.jpeg, gallery/)
```

## Personnaliser

- **Coordonnées, réseaux sociaux, textes** → `lib/site.ts` (objet `COMPANY` + listes).
- **Numéro WhatsApp** → `COMPANY.whatsapp` (format international sans `+`, ex. `213655608423`).
- **Photos de la galerie** → déposez vos images dans `public/gallery/` puis ajoutez
  `src: "/gallery/mon-image.jpg"` aux entrées de `GALLERY` dans `lib/site.ts`
  (les entrées sans `src` affichent un joli placeholder animé).
- **Couleurs** → `tailwind.config.ts` (`blood`, `noir`, `graphite`, `ash`).
- **Domaine / SEO** → remplacez `SITE_URL` dans `app/layout.tsx`, `sitemap.ts`, `robots.ts`.

## Notes
- Le logo est recréé en **SVG** (`components/Logo.tsx`) — net à toute taille.
- Le formulaire de contact ouvre une conversation **WhatsApp** pré-remplie
  (aucun backend requis). Branchez un service d'e-mail si besoin dans `components/Contact.tsx`.
- Accessibilité : animations désactivées via `prefers-reduced-motion`.
