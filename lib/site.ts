import {
  Camera,
  Wrench,
  Smartphone,
  HardDrive,
  BellRing,
  Fingerprint,
  Network,
  ShieldAlert,
  RadioTower,
  Wifi,
  Cable,
  Binary,
  Zap,
  BadgeCheck,
  Cpu,
  Headset,
  Radar,
  Settings2,
  type LucideIcon,
} from "lucide-react";

export const COMPANY = {
  name: "GLOBAL FOURNI SÉCURITÉ",
  legal: "EURL Global Fourni Sécurité",
  phoneDisplay: "0655 60 84 23",
  phoneRaw: "0655608423",
  whatsapp: "213655608423", // Algeria country code for wa.me link
  location: "Ain Bessem — Bouira, Algérie",
  mapUrl:
    "https://google.com/maps?ftid=0x128e9d0024ac3177:0x427b2cf44f994c87&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100813469,94286869&g_ep=CAISEjI2LjI1LjMuOTMyMTI1MTg3MBgAIP___________wEqSSw5NDI5NzY5OSw5NDIzMTE4OCw5NDI4MDU2OCw0NzA3MTcwNCw5NDIxODY0MSw5NDI4MjEzNCwxMDA4MTM0NjksOTQyODY4NjlCAkRa&skid=4a16fd48-0a5e-484b-992c-32690afc3d83&g_st=ipc",
  founded: "Novembre 2024",
  sloganFr: "Votre sécurité est notre responsabilité.",
  sloganAr: "أمنكم مسؤوليتنا وثقتكم شرف لنا",
  social: {
    instagram: "https://www.instagram.com/global_fourni_securite",
    tiktok: "https://www.tiktok.com/@globalfourni",
    facebook: "https://www.facebook.com/profile.php?id=61578122815602",
    instagramHandle: "global_fourni_securite",
    tiktokHandle: "globalfourni",
    facebookHandle: "Global Fourni Sécurité",
  },
};

// Flat-rate shipping, same price for every wilaya. Labels are localized
// (see lib/content.ts `delivery`), prices are locale-independent.
export const DELIVERY_PRICES = {
  bureau: 450,
  domicile: 650,
} as const;

export type DeliveryType = keyof typeof DELIVERY_PRICES;

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Boutique", href: "#boutique" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Zones", href: "#zones" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: Camera,
    title: "Installation de caméras HD & 4K",
    description:
      "Vidéosurveillance haute définition posée par des techniciens certifiés, pour une image nette de jour comme de nuit.",
  },
  {
    icon: RadioTower,
    title: "Caméra 4G",
    description:
      "Caméras autonomes 4G/SIM pour les sites isolés ou sans connexion internet fixe.",
  },
  {
    icon: Wifi,
    title: "Caméra WiFi",
    description:
      "Caméras sans fil faciles à installer, connectées directement à votre réseau WiFi.",
  },
  {
    icon: Cable,
    title: "Caméra analogique",
    description:
      "Solutions analogiques fiables et économiques, idéales pour équiper ou moderniser vos locaux.",
  },
  {
    icon: Binary,
    title: "Caméra numérique",
    description:
      "Caméras IP numériques haute résolution, pour une image nette et un accès réseau avancé.",
  },
  {
    icon: Wrench,
    title: "Maintenance & réparation",
    description:
      "Diagnostic, entretien et remise en service rapide de vos systèmes existants, toutes marques confondues.",
  },
  {
    icon: Smartphone,
    title: "Surveillance à distance via mobile",
    description:
      "Accédez à vos caméras en direct depuis votre smartphone, où que vous soyez, à tout moment.",
  },
  {
    icon: HardDrive,
    title: "Vente DVR / NVR / XVR",
    description:
      "Enregistreurs professionnels de dernière génération, dimensionnés pour la taille de votre installation.",
  },
  {
    icon: BellRing,
    title: "Alarmes & accessoires",
    description:
      "Sirènes, détecteurs et accessoires de sécurité pour renforcer la protection de vos locaux.",
  },
  {
    icon: Fingerprint,
    title: "Contrôle d'accès",
    description:
      "Badges, biométrie et gestion des entrées pour maîtriser qui accède à vos espaces sensibles.",
  },
  {
    icon: Network,
    title: "Réseaux & fibre optique",
    description:
      "Câblage structuré et fibre optique pour un réseau stable, rapide et prêt pour la vidéosurveillance.",
  },
  {
    icon: ShieldAlert,
    title: "Systèmes anti-intrusion",
    description:
      "Solutions complètes de détection et de dissuasion pour anticiper et bloquer toute intrusion.",
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const WHY_US: Feature[] = [
  {
    icon: Zap,
    title: "Intervention rapide",
    description: "Une équipe réactive qui se déplace vite pour sécuriser votre site sans délai.",
  },
  {
    icon: BadgeCheck,
    title: "Produits professionnels",
    description: "Matériel de marques reconnues, fiable et garanti, jamais de compromis sur la qualité.",
  },
  {
    icon: Cpu,
    title: "Installation moderne",
    description: "Des poses propres et discrètes, conformes aux standards techniques actuels.",
  },
  {
    icon: Headset,
    title: "Support technique",
    description: "Un accompagnement humain avant, pendant et longtemps après l'installation.",
  },
  {
    icon: Radar,
    title: "Surveillance intelligente",
    description: "Détection de mouvement, alertes et suivi mobile pour une vigilance permanente.",
  },
  {
    icon: Settings2,
    title: "Solutions personnalisées",
    description: "Chaque projet est étudié sur mesure selon vos locaux, vos risques et votre budget.",
  },
];

export const STATS = [
  { value: 120, suffix: "+", label: "Installations réalisées" },
  { value: 6, suffix: "+", label: "Wilayas couvertes" },
  { value: 24, suffix: "/7", label: "Surveillance mobile" },
  { value: 100, suffix: "%", label: "Clients accompagnés" },
];

export const BRANDS = ["Hikvision", "Dahua", "ZKTeco", "CDVI", "Ezviz", "Uniview"];

export const ZONES = [
  { name: "Bouira", top: "58%", left: "44%", primary: true },
  { name: "Alger", top: "38%", left: "30%" },
  { name: "Boumerdès", top: "42%", left: "40%" },
  { name: "Blida", top: "50%", left: "28%" },
  { name: "Béjaïa", top: "40%", left: "62%" },
  { name: "Tizi Ouzou", top: "36%", left: "52%" },
];

export const TESTIMONIALS = [
  {
    name: "Karim B.",
    role: "Commerçant — Bouira",
    quote:
      "Installation impeccable et très rapide. Je surveille ma boutique depuis mon téléphone, c'est exactement ce que je voulais.",
  },
  {
    name: "Sofiane M.",
    role: "Gérant d'entreprise — Alger",
    quote:
      "Équipe sérieuse et professionnelle. Le matériel Hikvision est de qualité et le suivi après installation est parfait.",
  },
  {
    name: "Nassima R.",
    role: "Particulier — Boumerdès",
    quote:
      "Des conseils honnêtes et une pose soignée. Je me sens vraiment en sécurité chez moi maintenant. Merci !",
  },
  {
    name: "Yacine T.",
    role: "Responsable magasin — Béjaïa",
    quote:
      "Contrôle d'accès et caméras 4K installés en une journée. Résultat propre et fiable, je recommande vivement.",
  },
];

export type GalleryItem = {
  label: string;
  caption: string;
  tall?: boolean;
  isVideo?: boolean;
  src?: string;
};

export const GALLERY: GalleryItem[] = [
  { label: "Notre magasin", caption: "Boutique — Ain Bessem", src: "/storefront.jpeg", tall: true },
  { label: "Caméra 4K", caption: "Vidéosurveillance extérieure" },
  { label: "Installation", caption: "Pose sur site professionnel" },
  { label: "Salle serveur", caption: "Câblage & enregistreur NVR", tall: true },
  { label: "Maintenance", caption: "Intervention technique" },
  { label: "Reel / Vidéo", caption: "Nos réalisations en vidéo", isVideo: true },
  { label: "Contrôle d'accès", caption: "Badge & biométrie" },
  { label: "Surveillance mobile", caption: "Accès temps réel" },
];
