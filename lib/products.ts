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
import type { Lang } from "./content";

export type SpecRow = { label: string; value: string };
export type FeatureText = { title: string; text: string };
export type FaqItem = { q: string; a: string };
export type ComparisonRow = { label: string; thisProduct: string | boolean; ordinary: string | boolean };

export type ProductContent = {
  name: string;
  tagline: string;
  shortDescription: string;
  badges: string[];
  highlights: string[];
  benefitLabels: string[]; // aligned by index with Product.benefitIcons
  features: FeatureText[]; // aligned by index with Product.featureMedia
  comparison: ComparisonRow[];
  steps: FeatureText[]; // title/text, aligned by index with STEP_ICONS in ProductHowItWorks
  specs: SpecRow[];
  idealFor: string[];
  faq: FaqItem[];
};

export type Product = {
  slug: string;
  model: string;
  price: number; // DZD
  compareAtPrice?: number;
  currency: "DA";
  images: string[];
  benefitIcons: LucideIcon[];
  featureMedia: { icon: LucideIcon; image: string }[];
  content: Record<Lang, ProductContent>;
};

export const PRODUCTS: Product[] = [
  {
    slug: "okam-pro-4g",
    model: "O-KAM Pro 4G",
    price: 14900,
    currency: "DA",
    images: [
      "/products/okam-pro-4g/photo-1.jpg",
      "/products/okam-pro-4g/photo-2.jpg",
      "/products/okam-pro-4g/fiche-technique.png",
    ],
    benefitIcons: [Signal, Video, Moon, Mic, BellRing, BatteryFull, CloudUpload, Users],
    featureMedia: [
      { icon: Signal, image: "/products/okam-pro-4g/photo-2.jpg" },
      { icon: Moon, image: "/products/okam-pro-4g/photo-1.jpg" },
      { icon: BellRing, image: "/products/okam-pro-4g/photo-2.jpg" },
      { icon: BatteryFull, image: "/products/okam-pro-4g/photo-1.jpg" },
    ],
    content: {
      fr: {
        name: "Caméra Extérieure 4G Sans Fil",
        tagline: "La surveillance qui n'a besoin d'aucun câble, ni de Wi-Fi.",
        shortDescription:
          "Caméra de sécurité extérieure fonctionnant avec une simple carte SIM 4G. Installez-la n'importe où — maison, ferme, chantier ou camping — et surveillez en direct depuis votre téléphone.",
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
        benefitLabels: [
          "Connexion 4G avec carte SIM",
          "Image Full HD 1080P",
          "Vision nocturne 10m",
          "Audio bidirectionnel",
          "Détection de mouvement",
          "Batterie 5200mAh intégrée",
          "Stockage SD & Cloud",
          "Partage multi-utilisateurs",
        ],
        features: [
          {
            title: "Fonctionne partout, sans Wi-Fi",
            text: "Insérez simplement une carte SIM 4G compatible et la caméra se connecte instantanément — idéale pour une ferme, un chantier ou une maison secondaire sans connexion internet fixe.",
          },
          {
            title: "Une image nette, de jour comme de nuit",
            text: "Capteur CMOS 1/2.9\" en Full HD 1080P associé à une vision nocturne infrarouge portée jusqu'à 10 mètres, pour ne rien manquer même dans l'obscurité totale.",
          },
          {
            title: "Alertée dès qu'il se passe quelque chose",
            text: "La détection de mouvement déclenche une alerte instantanée sur votre téléphone, avec un audio bidirectionnel pour parler et écouter en temps réel à distance.",
          },
          {
            title: "Autonome et facile à installer",
            text: "Batterie Li-ion intégrée de 5200mAh, sans câble réseau à faire passer. Fixez-la où vous voulez et gérez tout depuis l'application mobile dédiée, compatible iOS et Android.",
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
          { q: "Ai-je besoin d'une box internet ou du Wi-Fi ?", a: "Non. Cette caméra fonctionne uniquement avec une carte SIM 4G — il n'y a ni Wi-Fi ni câble réseau à installer." },
          { q: "Quelles cartes SIM sont compatibles ?", a: "Toute carte SIM 4G des opérateurs supportant les bandes FDD-LTE B1/B3/B5/B7/B8/B20/B28 ou TDD-LTE B38/B40/B41 fonctionne avec cette caméra." },
          { q: "Comment sont stockées les vidéos ?", a: "Sur une carte micro SD (jusqu'à 128 Go, non incluse) insérée dans la caméra, avec une option de stockage Cloud en complément." },
          { q: "Combien de temps dure la batterie ?", a: "La caméra intègre une batterie Li-ion de 5200mAh. L'autonomie réelle dépend de l'usage (fréquence de détection, qualité vidéo, conditions climatiques)." },
          { q: "Puis-je voir plusieurs caméras depuis un seul téléphone ?", a: "Oui, l'application dédiée prend en charge le partage multi-utilisateurs et la gestion de plusieurs caméras depuis un même compte." },
          { q: "Livrez-vous en dehors de Bouira ?", a: "Oui, la livraison est possible dans toute l'Algérie. Indiquez votre wilaya et commune dans le formulaire de commande ci-dessous." },
        ],
      },
      ar: {
        name: "كاميرا خارجية 4G لاسلكية",
        tagline: "مراقبة لا تحتاج أي كابل، ولا حتى واي فاي.",
        shortDescription:
          "كاميرا مراقبة خارجية تعمل ببطاقة SIM من نوع 4G فقط. ركّبها في أي مكان — منزل، مزرعة، ورشة بناء أو مخيم — وراقب مباشرة من هاتفك.",
        badges: ["4G · بدون حاجة لواي فاي", "دقة Full HD 1080P", "رؤية ليلية حتى 10 أمتار"],
        highlights: [
          "تعمل ببطاقة SIM من نوع 4G (بدون واي فاي)",
          "مراقبة عن بُعد عبر الهاتف الذكي",
          "صورة واضحة بدقة Full HD 1080P",
          "رؤية ليلية ذكية حتى 10 أمتار",
          "صوت ثنائي الاتجاه في الوقت الفعلي",
          "كشف الحركة مع تنبيه فوري",
          "بطارية مدمجة بعمر طويل",
          "تخزين على بطاقة SD أو التخزين السحابي",
          "تركيب سهل وبدون كابل شبكة",
        ],
        benefitLabels: [
          "اتصال 4G ببطاقة SIM",
          "صورة Full HD 1080P",
          "رؤية ليلية 10 أمتار",
          "صوت ثنائي الاتجاه",
          "كشف الحركة",
          "بطارية مدمجة 5200mAh",
          "تخزين SD وسحابي",
          "مشاركة متعددة المستخدمين",
        ],
        features: [
          {
            title: "تعمل في كل مكان، بدون واي فاي",
            text: "أدخل بطاقة SIM من نوع 4G متوافقة، وتتصل الكاميرا فوراً — مثالية لمزرعة أو ورشة بناء أو منزل ثانٍ بدون اتصال إنترنت ثابت.",
          },
          {
            title: "صورة واضحة، نهاراً وليلاً",
            text: "حساس CMOS بحجم 1/2.9 بوصة بدقة Full HD 1080P مع رؤية ليلية بالأشعة تحت الحمراء حتى 10 أمتار، لكي لا يفوتك شيء حتى في الظلام الكامل.",
          },
          {
            title: "تنبيهك عند حدوث أي شيء",
            text: "يُطلق كشف الحركة تنبيهاً فورياً على هاتفك، مع صوت ثنائي الاتجاه للتحدث والاستماع في الوقت الفعلي عن بُعد.",
          },
          {
            title: "مستقلة وسهلة التركيب",
            text: "بطارية ليثيوم مدمجة بسعة 5200 مللي أمبير، بدون كابل شبكة. ثبّتها أينما تشاء وتحكم فيها بالكامل من التطبيق المخصص، المتوافق مع iOS وAndroid.",
          },
        ],
        comparison: [
          { label: "الاتصال المطلوب", thisProduct: "بطاقة SIM 4G", ordinary: "واي فاي إجباري" },
          { label: "كابل الشبكة", thisProduct: "غير مطلوب", ordinary: "غالباً ضروري" },
          { label: "الدقة", thisProduct: "Full HD 1080P", ordinary: "غالباً 720P" },
          { label: "الرؤية الليلية", thisProduct: "حتى 10 أمتار", ordinary: "متغيرة، غالباً أقل من 5 أمتار" },
          { label: "التغذية الكهربائية", thisProduct: "بطارية مدمجة 5200mAh", ordinary: "غالباً سلكية" },
          { label: "التركيب في موقع معزول", thisProduct: true, ordinary: false },
        ],
        steps: [
          { title: "أدخل بطاقة SIM من نوع 4G", text: "افتح الحيز المخصص وأدخل بطاقة SIM 4G متوافقة — بدون أي إعداد شبكة معقد." },
          { title: "ثبّت التطبيق", text: "حمّل التطبيق المخصص (iOS أو Android) واربط كاميرتك في خطوات بسيطة." },
          { title: "ثبّت الكاميرا", text: "ركّبها في المكان المطلوب، بدون كابل شبكة — منزل، مزرعة، ورشة بناء أو مخيم." },
          { title: "راقب عن بُعد", text: "استقبل تنبيهات الحركة وتابع الصورة مباشرة من هاتفك، أينما كنت." },
        ],
        specs: [
          { label: "الموديل", value: "O-KAM Pro 4G" },
          { label: "الدقة", value: "1080P (1920 × 1080)" },
          { label: "الحساس", value: "CMOS 1/2.9 بوصة" },
          { label: "العدسة", value: "3.6 ملم" },
          { label: "الرؤية الليلية", value: "إضاءة LED بالأشعة تحت الحمراء، حتى 10 أمتار" },
          { label: "الصوت", value: "ثنائي الاتجاه (ميكروفون وسماعة مدمجان)" },
          { label: "الكشف", value: "كشف الحركة مع تنبيه" },
          { label: "اتصال الشبكة", value: "4G (متوافقة مع جميع بطاقات SIM من نوع 4G) — بدون حاجة لواي فاي" },
          { label: "ترددات 4G المدعومة", value: "FDD-LTE B1/B3/B5/B7/B8/B20/B28 · TDD-LTE B38/B40/B41" },
          { label: "التخزين المحلي", value: "بطاقة SD حتى 128 جيجابايت (غير مرفقة)" },
          { label: "التخزين السحابي", value: "متوافقة (اختياري)" },
          { label: "ضغط الفيديو", value: "H.265" },
          { label: "التغذية الكهربائية", value: "بطارية ليثيوم مدمجة 5200mAh" },
          { label: "تطبيق الهاتف", value: "متوافق مع iOS و Android (تطبيق مخصص)" },
          { label: "درجة حرارة التشغيل", value: "-10° إلى +50° مئوية" },
          { label: "الأبعاد", value: "110 × 75 × 130 ملم (طول × عرض × ارتفاع)" },
        ],
        idealFor: ["منزل", "مزرعة", "ورشة بناء", "مخيم"],
        faq: [
          { q: "هل أحتاج إلى خط إنترنت أو واي فاي؟", a: "لا. تعمل هذه الكاميرا فقط ببطاقة SIM من نوع 4G — لا حاجة لواي فاي ولا لكابل شبكة." },
          { q: "ما هي بطاقات SIM المتوافقة؟", a: "أي بطاقة SIM من نوع 4G من مشغّلين يدعمون ترددات FDD-LTE B1/B3/B5/B7/B8/B20/B28 أو TDD-LTE B38/B40/B41 تعمل مع هذه الكاميرا." },
          { q: "كيف يتم تخزين الفيديوهات؟", a: "على بطاقة micro SD (حتى 128 جيجابايت، غير مرفقة) داخل الكاميرا، مع إمكانية التخزين السحابي كخيار إضافي." },
          { q: "كم تدوم البطارية؟", a: "تحتوي الكاميرا على بطارية ليثيوم بسعة 5200 مللي أمبير. تختلف مدة الاستعمال الفعلية حسب الاستخدام (تكرار الكشف، جودة الفيديو، الظروف المناخية)." },
          { q: "هل يمكنني مشاهدة عدة كاميرات من هاتف واحد؟", a: "نعم، يدعم التطبيق المخصص المشاركة بين عدة مستخدمين وإدارة عدة كاميرات من نفس الحساب." },
          { q: "هل توصلون خارج البويرة؟", a: "نعم، التوصيل متاح إلى جميع ولايات الجزائر. حدّد ولايتك وبلديتك في استمارة الطلب أدناه." },
        ],
      },
    },
  },
  {
    slug: "tiger-4g",
    model: "TIGER 4G",
    price: 12500,
    currency: "DA",
    images: [
      "/products/tiger-4g/photo-1.jpg",
      "/products/tiger-4g/photo-2.jpg",
      "/products/tiger-4g/fiche-technique.png",
    ],
    benefitIcons: [Signal, Video, RotateCw, Moon, Mic, BellRing, CloudUpload, Smartphone],
    featureMedia: [
      { icon: Signal, image: "/products/tiger-4g/photo-2.jpg" },
      { icon: RotateCw, image: "/products/tiger-4g/photo-1.jpg" },
      { icon: Moon, image: "/products/tiger-4g/photo-2.jpg" },
      { icon: BellRing, image: "/products/tiger-4g/photo-1.jpg" },
    ],
    content: {
      fr: {
        name: "Caméra Intérieure 4G Rotative",
        tagline: "Une vue à 355° sur votre intérieur, sans Wi-Fi — juste une carte SIM.",
        shortDescription:
          "Caméra intérieure motorisée fonctionnant avec une simple carte SIM 4G. Rotation panoramique 355° et inclinaison 90° pour surveiller toute une pièce depuis votre téléphone.",
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
        benefitLabels: [
          "Connexion 4G avec carte SIM",
          "Image Full HD 1080P",
          "Rotation 355° / Inclinaison 90°",
          "Vision nocturne 10m",
          "Audio bidirectionnel",
          "Détection de mouvement",
          "Stockage SD & Cloud",
          "Contrôle à distance",
        ],
        features: [
          {
            title: "Fonctionne partout, sans Wi-Fi",
            text: "Insérez une carte SIM 4G compatible et la caméra se connecte instantanément — parfaite pour une pièce sans box internet ou en complément de votre réseau existant.",
          },
          {
            title: "Une vue complète, dans toutes les directions",
            text: "Moteur de rotation panoramique à 355° et inclinaison à 90°, pilotable à distance depuis l'application — aucun angle mort dans la pièce surveillée.",
          },
          {
            title: "Nette de jour comme de nuit",
            text: "Capteur Full HD 1080P associé à une vision nocturne infrarouge jusqu'à 10 mètres, avec audio bidirectionnel pour parler et écouter en temps réel.",
          },
          {
            title: "Installation simple, sans câble réseau",
            text: "Branchez l'alimentation, insérez la carte SIM et connectez l'application dédiée (iOS et Android) — aucun câblage réseau à prévoir.",
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
          { q: "Ai-je besoin d'une box internet ou du Wi-Fi ?", a: "Non. Cette caméra fonctionne uniquement avec une carte SIM 4G — il n'y a ni Wi-Fi ni câble réseau à installer." },
          { q: "Quelles cartes SIM sont compatibles ?", a: "Toute carte SIM 4G des opérateurs supportant les bandes FDD-LTE B1/B3/B5/B7/B8/B20/B28 ou TDD-LTE B38/B40/B41 fonctionne avec cette caméra." },
          { q: "La caméra peut-elle tourner à distance ?", a: "Oui, elle dispose d'un moteur de rotation panoramique à 355° et d'une inclinaison à 90°, pilotable directement depuis l'application mobile." },
          { q: "Comment sont stockées les vidéos ?", a: "Sur une carte micro SD (jusqu'à 128 Go, non incluse) insérée dans la caméra, avec une option de stockage Cloud en complément." },
          { q: "Cette caméra convient-elle pour surveiller un bébé ?", a: "Oui, sa rotation à 355°, sa vision nocturne et son audio bidirectionnel en font un bon choix pour la surveillance d'une chambre d'enfant." },
          { q: "Livrez-vous en dehors de Bouira ?", a: "Oui, la livraison est possible dans toute l'Algérie. Indiquez votre wilaya et commune dans le formulaire de commande ci-dessous." },
        ],
      },
      ar: {
        name: "كاميرا داخلية 4G دوّارة",
        tagline: "رؤية بزاوية 355° داخل منزلك، بدون واي فاي — فقط بطاقة SIM.",
        shortDescription:
          "كاميرا داخلية متحركة تعمل ببطاقة SIM من نوع 4G فقط. دوران أفقي 355° وميلان 90° لمراقبة الغرفة بأكملها من هاتفك.",
        badges: ["4G · بدون حاجة لواي فاي", "دوران 355°", "دقة Full HD 1080P"],
        highlights: [
          "تعمل ببطاقة SIM من نوع 4G (بدون واي فاي)",
          "مراقبة عن بُعد عبر الهاتف الذكي",
          "صورة واضحة بدقة Full HD 1080P",
          "رؤية ليلية ذكية حتى 10 أمتار",
          "صوت ثنائي الاتجاه في الوقت الفعلي",
          "كشف الحركة مع تنبيه فوري",
          "دوران أفقي 355° وميلان 90°",
          "تخزين على بطاقة SD أو التخزين السحابي",
          "تركيب بسيط وسريع وبدون كابل شبكة",
          "أمان ذكي على مدار الساعة",
        ],
        benefitLabels: [
          "اتصال 4G ببطاقة SIM",
          "صورة Full HD 1080P",
          "دوران 355° / ميلان 90°",
          "رؤية ليلية 10 أمتار",
          "صوت ثنائي الاتجاه",
          "كشف الحركة",
          "تخزين SD وسحابي",
          "تحكم عن بُعد",
        ],
        features: [
          {
            title: "تعمل في كل مكان، بدون واي فاي",
            text: "أدخل بطاقة SIM من نوع 4G متوافقة وتتصل الكاميرا فوراً — مثالية لغرفة بدون خط إنترنت أو كإضافة لشبكتك الحالية.",
          },
          {
            title: "رؤية كاملة، في كل الاتجاهات",
            text: "محرك دوران أفقي بزاوية 355° وميلان 90°، يُتحكم فيه عن بُعد من التطبيق — بدون أي زاوية عمياء في الغرفة المراقَبة.",
          },
          {
            title: "واضحة نهاراً وليلاً",
            text: "حساس Full HD 1080P مع رؤية ليلية بالأشعة تحت الحمراء حتى 10 أمتار، وصوت ثنائي الاتجاه للتحدث والاستماع في الوقت الفعلي.",
          },
          {
            title: "تركيب بسيط، بدون كابل شبكة",
            text: "وصّل التغذية الكهربائية، أدخل بطاقة SIM واربط التطبيق المخصص (iOS و Android) — بدون أي تمديد كابل شبكة.",
          },
        ],
        comparison: [
          { label: "الاتصال المطلوب", thisProduct: "بطاقة SIM 4G", ordinary: "واي فاي إجباري" },
          { label: "كابل الشبكة", thisProduct: "غير مطلوب", ordinary: "غالباً ضروري" },
          { label: "مجال الرؤية", thisProduct: "دوران 355° / ميلان 90°", ordinary: "غالباً ثابتة" },
          { label: "الدقة", thisProduct: "Full HD 1080P", ordinary: "غالباً 720P" },
          { label: "الرؤية الليلية", thisProduct: "حتى 10 أمتار", ordinary: "متغيرة، غالباً أقل من 5 أمتار" },
          { label: "التركيب بدون خط إنترنت", thisProduct: true, ordinary: false },
        ],
        steps: [
          { title: "أدخل بطاقة SIM من نوع 4G", text: "افتح الحيز المخصص وأدخل بطاقة SIM 4G متوافقة — بدون أي إعداد شبكة معقد." },
          { title: "ثبّت التطبيق", text: "حمّل التطبيق المخصص (iOS أو Android) واربط كاميرتك في خطوات بسيطة." },
          { title: "ضع الكاميرا", text: "ضعها على أثاث أو ثبّتها على الحائط — منزل، محل، مكتب أو غرفة طفل." },
          { title: "تحكم وراقب عن بُعد", text: "وجّه الكاميرا بزاوية 355°، استقبل تنبيهات الحركة وتابع الصورة مباشرة من هاتفك." },
        ],
        specs: [
          { label: "الموديل", value: "TIGER 4G" },
          { label: "الدقة", value: "1080P (1920 × 1080)" },
          { label: "الحساس", value: "CMOS 1/2.9 بوصة" },
          { label: "العدسة", value: "3.6 ملم" },
          { label: "الدوران", value: "أفقي: 355° · ميلان: 90°" },
          { label: "الرؤية الليلية", value: "إضاءة LED بالأشعة تحت الحمراء، حتى 10 أمتار" },
          { label: "الصوت", value: "ثنائي الاتجاه (ميكروفون وسماعة مدمجان)" },
          { label: "الكشف", value: "كشف الحركة مع تنبيه" },
          { label: "اتصال الشبكة", value: "4G (متوافقة مع جميع بطاقات SIM من نوع 4G) — بدون حاجة لواي فاي" },
          { label: "ترددات 4G المدعومة", value: "FDD-LTE B1/B3/B5/B7/B8/B20/B28 · TDD-LTE B38/B40/B41" },
          { label: "التخزين المحلي", value: "بطاقة SD حتى 128 جيجابايت (غير مرفقة)" },
          { label: "التخزين السحابي", value: "متوافقة (اختياري)" },
          { label: "ضغط الفيديو", value: "H.265" },
          { label: "تطبيق الهاتف", value: "متوافق مع iOS و Android (تطبيق مخصص)" },
          { label: "التغذية الكهربائية", value: "DC 5V / 1A" },
          { label: "درجة حرارة التشغيل", value: "-10° إلى +50° مئوية" },
          { label: "الأبعاد", value: "110 × 75 × 130 ملم (طول × عرض × ارتفاع)" },
        ],
        idealFor: ["منزل", "محل", "مكتب", "مراقبة الرضيع"],
        faq: [
          { q: "هل أحتاج إلى خط إنترنت أو واي فاي؟", a: "لا. تعمل هذه الكاميرا فقط ببطاقة SIM من نوع 4G — لا حاجة لواي فاي ولا لكابل شبكة." },
          { q: "ما هي بطاقات SIM المتوافقة؟", a: "أي بطاقة SIM من نوع 4G من مشغّلين يدعمون ترددات FDD-LTE B1/B3/B5/B7/B8/B20/B28 أو TDD-LTE B38/B40/B41 تعمل مع هذه الكاميرا." },
          { q: "هل يمكن للكاميرا الدوران عن بُعد؟", a: "نعم، تحتوي على محرك دوران أفقي بزاوية 355° وميلان 90°، يُتحكم فيه مباشرة من التطبيق." },
          { q: "كيف يتم تخزين الفيديوهات؟", a: "على بطاقة micro SD (حتى 128 جيجابايت، غير مرفقة) داخل الكاميرا، مع إمكانية التخزين السحابي كخيار إضافي." },
          { q: "هل تصلح هذه الكاميرا لمراقبة رضيع؟", a: "نعم، دورانها بزاوية 355° ورؤيتها الليلية وصوتها ثنائي الاتجاه تجعلها خياراً جيداً لمراقبة غرفة طفل." },
          { q: "هل توصلون خارج البويرة؟", a: "نعم، التوصيل متاح إلى جميع ولايات الجزائر. حدّد ولايتك وبلديتك في استمارة الطلب أدناه." },
        ],
      },
    },
  },
  {
    slug: "imou-ranger-2",
    model: "IMOU Ranger 2",
    price: 13900,
    currency: "DA",
    images: [
      "/products/imou-ranger-2/photo-1.jpg",
      "/products/imou-ranger-2/photo-2.jpg",
      "/products/imou-ranger-2/fiche-technique.png",
    ],
    benefitIcons: [Wifi, Video, Radar, UserCheck, EyeOff, ZoomIn, Mic, CloudUpload],
    featureMedia: [
      { icon: Video, image: "/products/imou-ranger-2/photo-1.jpg" },
      { icon: Radar, image: "/products/imou-ranger-2/photo-2.jpg" },
      { icon: EyeOff, image: "/products/imou-ranger-2/photo-1.jpg" },
      { icon: Wifi, image: "/products/imou-ranger-2/photo-2.jpg" },
    ],
    content: {
      fr: {
        name: "Caméra Intérieure WiFi 2K",
        tagline: "Image 2K ultra-nette et suivi intelligent des mouvements, en Wi-Fi.",
        shortDescription:
          "Caméra intérieure motorisée IMOU Ranger 2, résolution 2K (3MP), avec suivi automatique des mouvements, détection humaine et mode vie privée. Se connecte simplement à votre réseau Wi-Fi.",
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
        benefitLabels: [
          "Connexion WiFi 2.4GHz",
          "Image 2K (3MP)",
          "Suivi intelligent",
          "Détection humaine",
          "Mode vie privée",
          "Zoom numérique",
          "Audio bidirectionnel",
          "Stockage SD & Cloud",
        ],
        features: [
          {
            title: "Une image 2K d'une netteté remarquable",
            text: "Capteur 3MP en résolution 2K pour des détails nets même en zoomant, avec vision nocturne infrarouge pour une surveillance continue jour et nuit.",
          },
          {
            title: "Elle suit ce qui bouge, automatiquement",
            text: "Le suivi intelligent (Smart Tracking) associé à la détection humaine distingue les vraies alertes des faux mouvements, pour des notifications pertinentes.",
          },
          {
            title: "Votre vie privée, protégée",
            text: "Activez le mode vie privée pour masquer physiquement l'objectif lorsque vous êtes chez vous, et définissez des zones d'alarme personnalisées.",
          },
          {
            title: "Connectée en Wi-Fi, prête en quelques minutes",
            text: "Connexion Wi-Fi 2.4GHz ou port Ethernet RJ45 pour une liaison stable, avec stockage sur carte SD ou Cloud et application mobile dédiée.",
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
          { q: "Cette caméra fonctionne-t-elle avec une carte SIM 4G ?", a: "Non, ce modèle se connecte en Wi-Fi 2.4GHz ou via un port Ethernet RJ45. Pour une caméra sans Wi-Fi, voir nos modèles 4G." },
          { q: "Qu'est-ce que le suivi intelligent (Smart Tracking) ?", a: "La caméra détecte un mouvement ou une personne et oriente automatiquement son objectif pour la suivre dans la pièce, sans intervention manuelle." },
          { q: "Comment fonctionne le mode vie privée ?", a: "Il fait pivoter physiquement l'objectif face à un cache interne, pour couper la vidéo lorsque vous êtes présent chez vous." },
          { q: "Comment sont stockées les vidéos ?", a: "Sur une carte micro SD (jusqu'à 128 Go, non incluse) insérée dans la caméra, avec une option de stockage Cloud en complément." },
          { q: "Puis-je définir des zones de détection précises ?", a: "Oui, l'application permet de créer des zones d'alarme personnalisées et de programmer des horaires de surveillance." },
          { q: "Livrez-vous en dehors de Bouira ?", a: "Oui, la livraison est possible dans toute l'Algérie. Indiquez votre wilaya et commune dans le formulaire de commande ci-dessous." },
        ],
      },
      ar: {
        name: "كاميرا داخلية WiFi بدقة 2K",
        tagline: "صورة 2K فائقة الوضوح وتتبّع ذكي للحركة، عبر الواي فاي.",
        shortDescription:
          "كاميرا داخلية متحركة IMOU Ranger 2 بدقة 2K (3 ميجابكسل)، مع تتبّع تلقائي للحركة وكشف بشري ووضع الخصوصية. تتصل بسهولة بشبكة الواي فاي لديك.",
        badges: ["واي فاي 2.4 جيجاهرتز", "2K · 3 ميجابكسل", "تتبّع ذكي"],
        highlights: [
          "جودة صورة عالية بدقة 2K (3 ميجابكسل)",
          "تحكم في الدوران والميلان عن بُعد",
          "صوت ثنائي الاتجاه في الوقت الفعلي",
          "تتبّع تلقائي للحركة (Smart Tracking)",
          "كشف بشري متقدم",
          "وضع الخصوصية (يُخفي العدسة)",
          "تنبيهات فورية على الهاتف الذكي",
          "تخزين مرن: بطاقة SD أو التخزين السحابي",
          "تكبير رقمي",
          "تركيب بسيط وسريع",
        ],
        benefitLabels: [
          "اتصال واي فاي 2.4 جيجاهرتز",
          "صورة 2K (3 ميجابكسل)",
          "تتبّع ذكي",
          "كشف بشري",
          "وضع الخصوصية",
          "تكبير رقمي",
          "صوت ثنائي الاتجاه",
          "تخزين SD وسحابي",
        ],
        features: [
          {
            title: "صورة 2K بوضوح استثنائي",
            text: "حساس 3 ميجابكسل بدقة 2K لتفاصيل واضحة حتى عند التكبير، مع رؤية ليلية بالأشعة تحت الحمراء لمراقبة مستمرة نهاراً وليلاً.",
          },
          {
            title: "تتبع كل ما يتحرك، تلقائياً",
            text: "يميّز التتبّع الذكي (Smart Tracking) مع الكشف البشري التنبيهات الحقيقية عن الحركات الخاطئة، لإشعارات ذات معنى.",
          },
          {
            title: "خصوصيتك، محمية",
            text: "فعّل وضع الخصوصية لإخفاء العدسة فعلياً عندما تكون في المنزل، وحدّد مناطق إنذار مخصّصة.",
          },
          {
            title: "متصلة بالواي فاي، جاهزة في دقائق",
            text: "اتصال واي فاي 2.4 جيجاهرتز أو منفذ إيثرنت RJ45 لربط مستقر، مع تخزين على بطاقة SD أو سحابي وتطبيق هاتف مخصص.",
          },
        ],
        comparison: [
          { label: "الدقة", thisProduct: "2K (3 ميجابكسل)", ordinary: "غالباً 1080P أو أقل" },
          { label: "تتبّع الحركة", thisProduct: "تتبّع ذكي (Smart Tracking)", ordinary: "كشف أساسي" },
          { label: "الكشف البشري", thisProduct: true, ordinary: false },
          { label: "وضع الخصوصية", thisProduct: true, ordinary: false },
          { label: "مجال الرؤية", thisProduct: "دوران أفقي وميلان", ordinary: "غالباً ثابتة" },
          { label: "الاتصال", thisProduct: "واي فاي أو إيثرنت RJ45", ordinary: "واي فاي فقط" },
        ],
        steps: [
          { title: "ثبّت تطبيق IMOU", text: "حمّل التطبيق المخصص (iOS أو Android) وأنشئ حسابك." },
          { title: "اربط الكاميرا بالواي فاي", text: "اتبع التعليمات على الشاشة لربط الكاميرا بشبكة الواي فاي 2.4 جيجاهرتز أو عبر منفذ إيثرنت." },
          { title: "ضع الكاميرا", text: "ضعها أو ثبّتها في المكان المطلوب — صالون، مدخل، مكتب أو غرفة نوم." },
          { title: "فعّل التتبّع الذكي", text: "اضبط مناطق الإنذار ودع التتبّع التلقائي والكشف البشري يقومان بالمهمة." },
        ],
        specs: [
          { label: "الموديل", value: "IMOU Ranger 2" },
          { label: "الدقة", value: "2K (3 ميجابكسل)" },
          { label: "العدسة", value: "3.6 ملم" },
          { label: "الدوران", value: "أفقي: 355° · ميلان: 90°" },
          { label: "الرؤية الليلية", value: "إضاءة LED بالأشعة تحت الحمراء، حتى 10 أمتار" },
          { label: "الصوت", value: "ثنائي الاتجاه (ميكروفون وسماعة مدمجان)" },
          { label: "الكشف", value: "حركة / بشري / صوتي + تتبّع ذكي" },
          { label: "مناطق الإنذار", value: "مناطق قابلة للتخصيص + جدولة زمنية" },
          { label: "الشبكة", value: "واي فاي 2.4 جيجاهرتز أو منفذ إيثرنت RJ45" },
          { label: "التخزين", value: "بطاقة SD حتى 128 جيجابايت + تخزين سحابي (اختياري)" },
          { label: "ضغط الفيديو", value: "H.265" },
          { label: "تطبيق الهاتف", value: "متوافق مع iOS و Android (تطبيق مخصص)" },
          { label: "التغذية الكهربائية", value: "DC 5V / 1A" },
          { label: "درجة حرارة التشغيل", value: "-10° إلى +50° مئوية" },
          { label: "الأبعاد", value: "110 × 75 × 75 ملم (طول × عرض × ارتفاع)" },
        ],
        idealFor: ["منزل", "محل", "مكتب", "مراقبة الرضيع"],
        faq: [
          { q: "هل تعمل هذه الكاميرا ببطاقة SIM من نوع 4G؟", a: "لا، يتصل هذا الطراز عبر واي فاي 2.4 جيجاهرتز أو منفذ إيثرنت RJ45. لكاميرا بدون واي فاي، راجع طرازاتنا من فئة 4G." },
          { q: "ما هو التتبّع الذكي (Smart Tracking)؟", a: "تكتشف الكاميرا حركة أو شخصاً وتوجّه عدستها تلقائياً لتتبّعه داخل الغرفة، دون تدخل يدوي." },
          { q: "كيف يعمل وضع الخصوصية؟", a: "يقوم بتدوير العدسة فعلياً لتواجه غطاءً داخلياً، مما يقطع الفيديو عندما تكون حاضراً في المنزل." },
          { q: "كيف يتم تخزين الفيديوهات؟", a: "على بطاقة micro SD (حتى 128 جيجابايت، غير مرفقة) داخل الكاميرا، مع إمكانية التخزين السحابي كخيار إضافي." },
          { q: "هل يمكنني تحديد مناطق كشف دقيقة؟", a: "نعم، يتيح التطبيق إنشاء مناطق إنذار مخصّصة وجدولة أوقات المراقبة." },
          { q: "هل توصلون خارج البويرة؟", a: "نعم، التوصيل متاح إلى جميع ولايات الجزائر. حدّد ولايتك وبلديتك في استمارة الطلب أدناه." },
        ],
      },
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const OrderIcons = { ShieldCheck, Wrench, WifiOff, Smartphone };
