import {
  Signal,
  Mic,
  BatteryFull,
  Video,
  Moon,
  BellRing,
  CloudUpload,
  Users,
  Smartphone,
  ShieldCheck,
  Wrench,
  WifiOff,
  RotateCw,
  EyeOff,
  ZoomIn,
  Radar,
  UserCheck,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export type SpecRow = { label: string; value: string };
export type Feature = { title: string; text: string; icon: LucideIcon; image: string };
export type FaqItem = { q: string; a: string };

export type Product = {
  slug: string;
  name: string;
  model: string;
  tagline: string;
  shortDescription: string;
  price: number; // DZD
  compareAtPrice?: number;
  currency: "DA";
  images: { src: string; alt: string }[];
  badges: string[];
  highlights: string[];
  benefits: { icon: LucideIcon; label: string }[];
  features: Feature[];
  comparison: {
    label: string;
    thisProduct: string | boolean;
    ordinary: string | boolean;
  }[];
  steps: { title: string; text: string }[];
  specs: SpecRow[];
  idealFor: string[];
  faq: FaqItem[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "okam-pro-4g",
    name: "Caméra Extérieure 4G Sans Fil",
    model: "O-KAM Pro 4G",
    tagline: "La surveillance qui n'a besoin d'aucun câble, ni de Wi-Fi.",
    shortDescription:
      "Caméra de sécurité extérieure fonctionnant avec une simple carte SIM 4G. Installez-la n'importe où — maison, ferme, chantier ou camping — et surveillez en direct depuis votre téléphone.",
    price: 14900,
    currency: "DA",
    images: [
      { src: "/products/okam-pro-4g/photo-1.jpg", alt: "Caméra O-KAM Pro 4G posée devant sa boîte, vue de face" },
      { src: "/products/okam-pro-4g/photo-2.jpg", alt: "Caméra O-KAM Pro 4G sur sa boîte, vue de trois quarts" },
      { src: "/products/okam-pro-4g/fiche-technique.png", alt: "Fiche technique complète de la caméra O-KAM Pro 4G" },
    ],
    badges: ["4G · Sans Wi-Fi requis", "Full HD 1080P", "Vision nocturne 10m"],
    highlights: [
      "Fonctionne avec carte SIM 4G (pas de Wi-Fi)",
      "Surveillance à distance via smartphone",
      "Image Full HD 1080P claire et nette",
      "Vision nocturne intelligente jusqu'à 10 mètres",
      "Audio bidirectionnel en temps réel",
      "Détection de mouvement avec alerte instantanée",
      "Batterie intégrée longue autonomie",
      "Stockage sur carte SD ou Cloud",
      "Installation facile et sans câble réseau",
    ],
    benefits: [
      { icon: Signal, label: "Connexion 4G avec carte SIM" },
      { icon: Video, label: "Image Full HD 1080P" },
      { icon: Moon, label: "Vision nocturne 10m" },
      { icon: Mic, label: "Audio bidirectionnel" },
      { icon: BellRing, label: "Détection de mouvement" },
      { icon: BatteryFull, label: "Batterie 5200mAh intégrée" },
      { icon: CloudUpload, label: "Stockage SD & Cloud" },
      { icon: Users, label: "Partage multi-utilisateurs" },
    ],
    features: [
      {
        title: "Fonctionne partout, sans Wi-Fi",
        text: "Insérez simplement une carte SIM 4G compatible et la caméra se connecte instantanément — idéale pour une ferme, un chantier ou une maison secondaire sans connexion internet fixe.",
        icon: Signal,
        image: "/products/okam-pro-4g/photo-2.jpg",
      },
      {
        title: "Une image nette, de jour comme de nuit",
        text: "Capteur CMOS 1/2.9\" en Full HD 1080P associé à une vision nocturne infrarouge portée jusqu'à 10 mètres, pour ne rien manquer même dans l'obscurité totale.",
        icon: Moon,
        image: "/products/okam-pro-4g/photo-1.jpg",
      },
      {
        title: "Alertée dès qu'il se passe quelque chose",
        text: "La détection de mouvement déclenche une alerte instantanée sur votre téléphone, avec un audio bidirectionnel pour parler et écouter en temps réel à distance.",
        icon: BellRing,
        image: "/products/okam-pro-4g/photo-2.jpg",
      },
      {
        title: "Autonome et facile à installer",
        text: "Batterie Li-ion intégrée de 5200mAh, sans câble réseau à faire passer. Fixez-la où vous voulez et gérez tout depuis l'application mobile dédiée, compatible iOS et Android.",
        icon: BatteryFull,
        image: "/products/okam-pro-4g/photo-1.jpg",
      },
    ],
    comparison: [
      { label: "Connexion requise", thisProduct: "Carte SIM 4G", ordinary: "Wi-Fi obligatoire" },
      { label: "Câblage réseau", thisProduct: "Aucun", ordinary: "Souvent nécessaire" },
      { label: "Résolution", thisProduct: "Full HD 1080P", ordinary: "Souvent 720P" },
      { label: "Vision nocturne", thisProduct: "Jusqu'à 10 m", ordinary: "Variable, souvent < 5 m" },
      { label: "Alimentation", thisProduct: "Batterie 5200mAh intégrée", ordinary: "Souvent filaire" },
      { label: "Installation sur site isolé", thisProduct: true, ordinary: false },
    ],
    steps: [
      { title: "Insérez la carte SIM 4G", text: "Ouvrez le compartiment dédié et insérez une carte SIM 4G compatible — aucune configuration réseau complexe." },
      { title: "Installez l'application", text: "Téléchargez l'application dédiée (iOS ou Android) et connectez votre caméra en quelques étapes." },
      { title: "Fixez la caméra", text: "Installez-la à l'endroit souhaité, sans câble réseau à faire passer — maison, ferme, chantier ou camping." },
      { title: "Surveillez à distance", text: "Recevez les alertes de mouvement et suivez l'image en direct depuis votre téléphone, où que vous soyez." },
    ],
    specs: [
      { label: "Modèle", value: "O-KAM Pro 4G" },
      { label: "Résolution", value: "1080P (1920 x 1080)" },
      { label: "Capteur", value: "CMOS 1/2.9\"" },
      { label: "Objectif", value: "3.6 mm" },
      { label: "Vision nocturne", value: "LED IR, portée jusqu'à 10 mètres" },
      { label: "Audio", value: "Bidirectionnel (micro & haut-parleur intégrés)" },
      { label: "Détection", value: "Détection de mouvement avec alerte" },
      { label: "Connexion réseau", value: "4G (compatible toutes cartes SIM 4G) — pas de Wi-Fi requis" },
      { label: "Bandes 4G supportées", value: "FDD-LTE B1/B3/B5/B7/B8/B20/B28 · TDD-LTE B38/B40/B41" },
      { label: "Stockage local", value: "Carte SD jusqu'à 128 Go (non incluse)" },
      { label: "Stockage Cloud", value: "Compatible (optionnel)" },
      { label: "Compression vidéo", value: "H.265" },
      { label: "Alimentation", value: "Batterie Li-ion intégrée 5200mAh" },
      { label: "Application mobile", value: "Compatible iOS & Android (app dédiée)" },
      { label: "Température de fonctionnement", value: "-10°C ~ +50°C" },
      { label: "Dimensions", value: "110 x 75 x 130 mm (L x l x H)" },
    ],
    idealFor: ["Maison", "Ferme", "Chantier", "Camping"],
    faq: [
      {
        q: "Ai-je besoin d'une box internet ou du Wi-Fi ?",
        a: "Non. Cette caméra fonctionne uniquement avec une carte SIM 4G — il n'y a ni Wi-Fi ni câble réseau à installer.",
      },
      {
        q: "Quelles cartes SIM sont compatibles ?",
        a: "Toute carte SIM 4G des opérateurs supportant les bandes FDD-LTE B1/B3/B5/B7/B8/B20/B28 ou TDD-LTE B38/B40/B41 fonctionne avec cette caméra.",
      },
      {
        q: "Comment sont stockées les vidéos ?",
        a: "Sur une carte micro SD (jusqu'à 128 Go, non incluse) insérée dans la caméra, avec une option de stockage Cloud en complément.",
      },
      {
        q: "Combien de temps dure la batterie ?",
        a: "La caméra intègre une batterie Li-ion de 5200mAh. L'autonomie réelle dépend de l'usage (fréquence de détection, qualité vidéo, conditions climatiques).",
      },
      {
        q: "Puis-je voir plusieurs caméras depuis un seul téléphone ?",
        a: "Oui, l'application dédiée prend en charge le partage multi-utilisateurs et la gestion de plusieurs caméras depuis un même compte.",
      },
      {
        q: "Livrez-vous en dehors de Bouira ?",
        a: "Oui, la livraison est possible dans toute l'Algérie. Indiquez votre wilaya et commune dans le formulaire de commande ci-dessous.",
      },
    ],
  },
  {
    slug: "tiger-4g",
    name: "Caméra Intérieure 4G Rotative",
    model: "TIGER 4G",
    tagline: "Une vue à 355° sur votre intérieur, sans Wi-Fi — juste une carte SIM.",
    shortDescription:
      "Caméra intérieure motorisée fonctionnant avec une simple carte SIM 4G. Rotation panoramique 355° et inclinaison 90° pour surveiller toute une pièce depuis votre téléphone.",
    price: 12500,
    currency: "DA",
    images: [
      { src: "/products/tiger-4g/photo-1.jpg", alt: "Caméra TIGER 4G posée devant sa boîte, vue de face avec objectif rotatif" },
      { src: "/products/tiger-4g/photo-2.jpg", alt: "Caméra TIGER 4G devant sa boîte Smart Camera, vue de trois quarts" },
      { src: "/products/tiger-4g/fiche-technique.png", alt: "Fiche technique complète de la caméra TIGER 4G" },
    ],
    badges: ["4G · Sans Wi-Fi requis", "Rotation 355°", "Full HD 1080P"],
    highlights: [
      "Fonctionne avec carte SIM 4G (pas de Wi-Fi)",
      "Surveillance à distance via smartphone",
      "Image Full HD 1080P claire et nette",
      "Vision nocturne intelligente jusqu'à 10 mètres",
      "Audio bidirectionnel en temps réel",
      "Détection de mouvement avec alerte instantanée",
      "Rotation panoramique 355° et inclinaison 90°",
      "Stockage sur carte SD ou Cloud",
      "Installation simple, rapide et sans câble réseau",
      "Sécurité intelligente 24h/24",
    ],
    benefits: [
      { icon: Signal, label: "Connexion 4G avec carte SIM" },
      { icon: Video, label: "Image Full HD 1080P" },
      { icon: RotateCw, label: "Rotation 355° / Inclinaison 90°" },
      { icon: Moon, label: "Vision nocturne 10m" },
      { icon: Mic, label: "Audio bidirectionnel" },
      { icon: BellRing, label: "Détection de mouvement" },
      { icon: CloudUpload, label: "Stockage SD & Cloud" },
      { icon: Smartphone, label: "Contrôle à distance" },
    ],
    features: [
      {
        title: "Fonctionne partout, sans Wi-Fi",
        text: "Insérez une carte SIM 4G compatible et la caméra se connecte instantanément — parfaite pour une pièce sans box internet ou en complément de votre réseau existant.",
        icon: Signal,
        image: "/products/tiger-4g/photo-2.jpg",
      },
      {
        title: "Une vue complète, dans toutes les directions",
        text: "Moteur de rotation panoramique à 355° et inclinaison à 90°, pilotable à distance depuis l'application — aucun angle mort dans la pièce surveillée.",
        icon: RotateCw,
        image: "/products/tiger-4g/photo-1.jpg",
      },
      {
        title: "Nette de jour comme de nuit",
        text: "Capteur Full HD 1080P associé à une vision nocturne infrarouge jusqu'à 10 mètres, avec audio bidirectionnel pour parler et écouter en temps réel.",
        icon: Moon,
        image: "/products/tiger-4g/photo-2.jpg",
      },
      {
        title: "Installation simple, sans câble réseau",
        text: "Branchez l'alimentation, insérez la carte SIM et connectez l'application dédiée (iOS et Android) — aucun câblage réseau à prévoir.",
        icon: BellRing,
        image: "/products/tiger-4g/photo-1.jpg",
      },
    ],
    comparison: [
      { label: "Connexion requise", thisProduct: "Carte SIM 4G", ordinary: "Wi-Fi obligatoire" },
      { label: "Câblage réseau", thisProduct: "Aucun", ordinary: "Souvent nécessaire" },
      { label: "Champ de vision", thisProduct: "Rotation 355° / Inclinaison 90°", ordinary: "Souvent fixe" },
      { label: "Résolution", thisProduct: "Full HD 1080P", ordinary: "Souvent 720P" },
      { label: "Vision nocturne", thisProduct: "Jusqu'à 10 m", ordinary: "Variable, souvent < 5 m" },
      { label: "Installation sans box internet", thisProduct: true, ordinary: false },
    ],
    steps: [
      { title: "Insérez la carte SIM 4G", text: "Ouvrez le compartiment dédié et insérez une carte SIM 4G compatible — aucune configuration réseau complexe." },
      { title: "Installez l'application", text: "Téléchargez l'application dédiée (iOS ou Android) et connectez votre caméra en quelques étapes." },
      { title: "Placez la caméra", text: "Posez-la sur un meuble ou fixez-la au mur — maison, boutique, bureau ou chambre d'enfant." },
      { title: "Pilotez et surveillez à distance", text: "Orientez la caméra à 355°, recevez les alertes de mouvement et suivez l'image en direct depuis votre téléphone." },
    ],
    specs: [
      { label: "Modèle", value: "TIGER 4G" },
      { label: "Résolution", value: "1080P (1920 x 1080)" },
      { label: "Capteur", value: "CMOS 1/2.9\"" },
      { label: "Objectif", value: "3.6 mm" },
      { label: "Rotation", value: "Panoramique : 355° · Inclinaison : 90°" },
      { label: "Vision nocturne", value: "LED IR, portée jusqu'à 10 mètres" },
      { label: "Audio", value: "Bidirectionnel (micro & haut-parleur intégrés)" },
      { label: "Détection", value: "Détection de mouvement avec alerte" },
      { label: "Connexion réseau", value: "4G (compatible toutes cartes SIM 4G) — pas de Wi-Fi requis" },
      { label: "Bandes 4G supportées", value: "FDD-LTE B1/B3/B5/B7/B8/B20/B28 · TDD-LTE B38/B40/B41" },
      { label: "Stockage local", value: "Carte SD jusqu'à 128 Go (non incluse)" },
      { label: "Stockage Cloud", value: "Compatible (optionnel)" },
      { label: "Compression vidéo", value: "H.265" },
      { label: "Application mobile", value: "Compatible iOS & Android (app dédiée)" },
      { label: "Alimentation", value: "DC 5V / 1A" },
      { label: "Température de fonctionnement", value: "-10°C ~ +50°C" },
      { label: "Dimensions", value: "110 x 75 x 130 mm (L x l x H)" },
    ],
    idealFor: ["Maison", "Boutique", "Bureau", "Surveillance bébé"],
    faq: [
      {
        q: "Ai-je besoin d'une box internet ou du Wi-Fi ?",
        a: "Non. Cette caméra fonctionne uniquement avec une carte SIM 4G — il n'y a ni Wi-Fi ni câble réseau à installer.",
      },
      {
        q: "Quelles cartes SIM sont compatibles ?",
        a: "Toute carte SIM 4G des opérateurs supportant les bandes FDD-LTE B1/B3/B5/B7/B8/B20/B28 ou TDD-LTE B38/B40/B41 fonctionne avec cette caméra.",
      },
      {
        q: "La caméra peut-elle tourner à distance ?",
        a: "Oui, elle dispose d'un moteur de rotation panoramique à 355° et d'une inclinaison à 90°, pilotable directement depuis l'application mobile.",
      },
      {
        q: "Comment sont stockées les vidéos ?",
        a: "Sur une carte micro SD (jusqu'à 128 Go, non incluse) insérée dans la caméra, avec une option de stockage Cloud en complément.",
      },
      {
        q: "Cette caméra convient-elle pour surveiller un bébé ?",
        a: "Oui, sa rotation à 355°, sa vision nocturne et son audio bidirectionnel en font un bon choix pour la surveillance d'une chambre d'enfant.",
      },
      {
        q: "Livrez-vous en dehors de Bouira ?",
        a: "Oui, la livraison est possible dans toute l'Algérie. Indiquez votre wilaya et commune dans le formulaire de commande ci-dessous.",
      },
    ],
  },
  {
    slug: "imou-ranger-2",
    name: "Caméra Intérieure WiFi 2K",
    model: "IMOU Ranger 2",
    tagline: "Image 2K ultra-nette et suivi intelligent des mouvements, en Wi-Fi.",
    shortDescription:
      "Caméra intérieure motorisée IMOU Ranger 2, résolution 2K (3MP), avec suivi automatique des mouvements, détection humaine et mode vie privée. Se connecte simplement à votre réseau Wi-Fi.",
    price: 13900,
    currency: "DA",
    images: [
      { src: "/products/imou-ranger-2/photo-1.jpg", alt: "Caméra IMOU Ranger 2 posée devant sa boîte 2K 3MP, vue de face" },
      { src: "/products/imou-ranger-2/photo-2.jpg", alt: "Caméra IMOU Ranger 2, vue arrière avec port Ethernet et USB-C" },
      { src: "/products/imou-ranger-2/fiche-technique.png", alt: "Fiche technique complète de la caméra IMOU Ranger 2" },
    ],
    badges: ["WiFi 2.4GHz", "2K · 3MP", "Suivi intelligent"],
    highlights: [
      "Haute qualité d'image 2K (3MP)",
      "Panoramique & inclinaison à distance",
      "Audio bidirectionnel en temps réel",
      "Suivi automatique des mouvements (Smart Tracking)",
      "Détection humaine avancée",
      "Mode vie privée (masque l'objectif)",
      "Alertes instantanées sur smartphone",
      "Stockage flexible : carte SD ou Cloud",
      "Zoom numérique",
      "Installation simple et rapide",
    ],
    benefits: [
      { icon: Wifi, label: "Connexion WiFi 2.4GHz" },
      { icon: Video, label: "Image 2K (3MP)" },
      { icon: Radar, label: "Suivi intelligent" },
      { icon: UserCheck, label: "Détection humaine" },
      { icon: EyeOff, label: "Mode vie privée" },
      { icon: ZoomIn, label: "Zoom numérique" },
      { icon: Mic, label: "Audio bidirectionnel" },
      { icon: CloudUpload, label: "Stockage SD & Cloud" },
    ],
    features: [
      {
        title: "Une image 2K d'une netteté remarquable",
        text: "Capteur 3MP en résolution 2K pour des détails nets même en zoomant, avec vision nocturne infrarouge pour une surveillance continue jour et nuit.",
        icon: Video,
        image: "/products/imou-ranger-2/photo-1.jpg",
      },
      {
        title: "Elle suit ce qui bouge, automatiquement",
        text: "Le suivi intelligent (Smart Tracking) associé à la détection humaine distingue les vraies alertes des faux mouvements, pour des notifications pertinentes.",
        icon: Radar,
        image: "/products/imou-ranger-2/photo-2.jpg",
      },
      {
        title: "Votre vie privée, protégée",
        text: "Activez le mode vie privée pour masquer physiquement l'objectif lorsque vous êtes chez vous, et définissez des zones d'alarme personnalisées.",
        icon: EyeOff,
        image: "/products/imou-ranger-2/photo-1.jpg",
      },
      {
        title: "Connectée en Wi-Fi, prête en quelques minutes",
        text: "Connexion Wi-Fi 2.4GHz ou port Ethernet RJ45 pour une liaison stable, avec stockage sur carte SD ou Cloud et application mobile dédiée.",
        icon: Wifi,
        image: "/products/imou-ranger-2/photo-2.jpg",
      },
    ],
    comparison: [
      { label: "Résolution", thisProduct: "2K (3MP)", ordinary: "Souvent 1080P ou moins" },
      { label: "Suivi de mouvement", thisProduct: "Suivi intelligent (Smart Tracking)", ordinary: "Détection basique" },
      { label: "Détection humaine", thisProduct: true, ordinary: false },
      { label: "Mode vie privée", thisProduct: true, ordinary: false },
      { label: "Champ de vision", thisProduct: "Rotation Pan & Tilt", ordinary: "Souvent fixe" },
      { label: "Connexion", thisProduct: "Wi-Fi ou Ethernet RJ45", ordinary: "Wi-Fi uniquement" },
    ],
    steps: [
      { title: "Installez l'application IMOU", text: "Téléchargez l'application dédiée (iOS ou Android) et créez votre compte." },
      { title: "Connectez la caméra au Wi-Fi", text: "Suivez les instructions à l'écran pour relier la caméra à votre réseau Wi-Fi 2.4GHz ou via le port Ethernet." },
      { title: "Placez la caméra", text: "Posez-la ou fixez-la à l'endroit souhaité — salon, entrée, bureau ou chambre." },
      { title: "Activez le suivi intelligent", text: "Configurez les zones d'alarme et laissez le suivi automatique et la détection humaine faire le travail." },
    ],
    specs: [
      { label: "Modèle", value: "IMOU Ranger 2" },
      { label: "Résolution", value: "2K (3MP)" },
      { label: "Objectif", value: "3.6 mm" },
      { label: "Rotation", value: "Panoramique : 355° · Inclinaison : 90°" },
      { label: "Vision nocturne", value: "LED IR, vision nocturne jusqu'à 10 mètres" },
      { label: "Audio", value: "Bidirectionnel (micro & haut-parleur intégrés)" },
      { label: "Détection", value: "Mouvement / Humaine / Sonore + Suivi intelligent" },
      { label: "Zones d'alarme", value: "Zones personnalisables + programmation horaire" },
      { label: "Réseau", value: "Wi-Fi 2.4GHz ou port Ethernet RJ45" },
      { label: "Stockage", value: "Carte SD jusqu'à 128 Go + Cloud (optionnel)" },
      { label: "Compression vidéo", value: "H.265" },
      { label: "Application mobile", value: "Compatible iOS & Android (app dédiée)" },
      { label: "Alimentation", value: "DC 5V / 1A" },
      { label: "Température de fonctionnement", value: "-10°C ~ +50°C" },
      { label: "Dimensions", value: "110 x 75 x 75 mm (L x l x H)" },
    ],
    idealFor: ["Maison", "Boutique", "Bureau", "Surveillance bébé"],
    faq: [
      {
        q: "Cette caméra fonctionne-t-elle avec une carte SIM 4G ?",
        a: "Non, ce modèle se connecte en Wi-Fi 2.4GHz ou via un port Ethernet RJ45. Pour une caméra sans Wi-Fi, voir nos modèles 4G.",
      },
      {
        q: "Qu'est-ce que le suivi intelligent (Smart Tracking) ?",
        a: "La caméra détecte un mouvement ou une personne et oriente automatiquement son objectif pour la suivre dans la pièce, sans intervention manuelle.",
      },
      {
        q: "Comment fonctionne le mode vie privée ?",
        a: "Il fait pivoter physiquement l'objectif face à un cache interne, pour couper la vidéo lorsque vous êtes présent chez vous.",
      },
      {
        q: "Comment sont stockées les vidéos ?",
        a: "Sur une carte micro SD (jusqu'à 128 Go, non incluse) insérée dans la caméra, avec une option de stockage Cloud en complément.",
      },
      {
        q: "Puis-je définir des zones de détection précises ?",
        a: "Oui, l'application permet de créer des zones d'alarme personnalisées et de programmer des horaires de surveillance.",
      },
      {
        q: "Livrez-vous en dehors de Bouira ?",
        a: "Oui, la livraison est possible dans toute l'Algérie. Indiquez votre wilaya et commune dans le formulaire de commande ci-dessous.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const OrderIcons = { ShieldCheck, Wrench, WifiOff, Smartphone };
