// All translatable copy for the site. Structural data (icons, positions, links,
// contact info) lives in lib/site.ts and is language-neutral. Arrays here are
// index-aligned with the arrays in site.ts (SERVICES, WHY_US, STATS, GALLERY).

const fr = {
  langToggle: "العربية", // label shown on the button to switch TO the other language
  nav: ["Accueil", "Services", "Boutique", "Réalisations", "Zones", "Contact"],
  cta: { quote: "Demander un devis", whatsapp: "Contact WhatsApp" },

  hero: {
    badgePrefix: "Systèmes actifs 24/7 · Depuis",
    titleA: "Solutions intelligentes de",
    titleHighlight: "vidéosurveillance",
    titleB: "& sécurité",
    subtitle:
      "Installation, maintenance et surveillance professionnelle pour particuliers et entreprises.",
    slogan: "« Votre sécurité est notre responsabilité. »",
    chips: ["Caméras HD & 4K", "Accès mobile", "Anti-intrusion"],
    cam: { recSub: "Live", uhdSub: "Netteté", mobile: "Mobile", mobileSub: "Temps réel" },
  },

  services: {
    kicker: "Nos services",
    title: "Une expertise complète pour",
    highlight: "votre protection",
    subtitle:
      "De l'étude à la maintenance, nous couvrons chaque maillon de votre chaîne de sécurité avec du matériel professionnel.",
    items: [
      {
        title: "Installation de caméras HD & 4K",
        description:
          "Vidéosurveillance haute définition posée par des techniciens certifiés, pour une image nette de jour comme de nuit.",
      },
      {
        title: "Caméra 4G",
        description:
          "Caméras autonomes 4G/SIM pour les sites isolés ou sans connexion internet fixe.",
      },
      {
        title: "Caméra WiFi",
        description:
          "Caméras sans fil faciles à installer, connectées directement à votre réseau WiFi.",
      },
      {
        title: "Caméra analogique",
        description:
          "Solutions analogiques fiables et économiques, idéales pour équiper ou moderniser vos locaux.",
      },
      {
        title: "Caméra numérique",
        description:
          "Caméras IP numériques haute résolution, pour une image nette et un accès réseau avancé.",
      },
      {
        title: "Maintenance & réparation",
        description:
          "Diagnostic, entretien et remise en service rapide de vos systèmes existants, toutes marques confondues.",
      },
      {
        title: "Surveillance à distance via mobile",
        description:
          "Accédez à vos caméras en direct depuis votre smartphone, où que vous soyez, à tout moment.",
      },
      {
        title: "Vente DVR / NVR / XVR",
        description:
          "Enregistreurs professionnels de dernière génération, dimensionnés pour la taille de votre installation.",
      },
      {
        title: "Alarmes & accessoires",
        description:
          "Sirènes, détecteurs et accessoires de sécurité pour renforcer la protection de vos locaux.",
      },
      {
        title: "Contrôle d'accès",
        description:
          "Badges, biométrie et gestion des entrées pour maîtriser qui accède à vos espaces sensibles.",
      },
      {
        title: "Réseaux & fibre optique",
        description:
          "Câblage structuré et fibre optique pour un réseau stable, rapide et prêt pour la vidéosurveillance.",
      },
      {
        title: "Systèmes anti-intrusion",
        description:
          "Solutions complètes de détection et de dissuasion pour anticiper et bloquer toute intrusion.",
      },
    ],
  },

  about: {
    kicker: "À propos",
    title: "Une jeune entreprise, une exigence de",
    highlight: "professionnels",
    body: "Fondée en Novembre 2024 à Ain Bessem (Bouira), Global Fourni Sécurité conçoit, installe et entretient des systèmes de vidéosurveillance et de sécurité pour les particuliers comme pour les entreprises. Nous travaillons avec du matériel de marques reconnues et des méthodes d'installation modernes, pour des solutions fiables et durables.",
    slogan: "« Votre sécurité est notre responsabilité. »",
    pillars: [
      { title: "Notre mission", text: "Rendre la sécurité professionnelle accessible à chaque foyer et entreprise." },
      { title: "Professionnalisme", text: "Des techniciens formés, un matériel garanti et un travail soigné à chaque pose." },
      { title: "Confiance client", text: "Un accompagnement transparent et un suivi durable, bien après l'installation." },
    ],
    stats: ["Installations réalisées", "Wilayas couvertes", "Surveillance mobile", "Clients accompagnés"],
  },

  gallery: {
    kicker: "Réalisations",
    title: "Nos installations en",
    highlight: "images",
    subtitle:
      "Un aperçu de notre magasin, de nos poses sur site et de nos interventions techniques.",
    items: [
      { label: "Notre magasin", caption: "Boutique — Ain Bessem" },
      { label: "Caméra 4K", caption: "Vidéosurveillance extérieure" },
      { label: "Installation", caption: "Pose sur site professionnel" },
      { label: "Salle serveur", caption: "Câblage & enregistreur NVR" },
      { label: "Maintenance", caption: "Intervention technique" },
      { label: "Reel / Vidéo", caption: "Nos réalisations en vidéo" },
      { label: "Contrôle d'accès", caption: "Badge & biométrie" },
      { label: "Surveillance mobile", caption: "Accès temps réel" },
    ],
  },

  why: {
    kicker: "Pourquoi nous",
    title: "Ce qui fait la différence",
    highlight: "Global Fourni",
    subtitle: "Bien plus qu'un installateur : un partenaire de confiance qui reste à vos côtés.",
    items: [
      { title: "Intervention rapide", description: "Une équipe réactive qui se déplace vite pour sécuriser votre site sans délai." },
      { title: "Produits professionnels", description: "Matériel de marques reconnues, fiable et garanti, jamais de compromis sur la qualité." },
      { title: "Installation moderne", description: "Des poses propres et discrètes, conformes aux standards techniques actuels." },
      { title: "Support technique", description: "Un accompagnement humain avant, pendant et longtemps après l'installation." },
      { title: "Surveillance intelligente", description: "Détection de mouvement, alertes et suivi mobile pour une vigilance permanente." },
      { title: "Solutions personnalisées", description: "Chaque projet est étudié sur mesure selon vos locaux, vos risques et votre budget." },
    ],
  },

  brands: { title: "Marques & partenaires de confiance" },

  zones: {
    kicker: "Zones d'intervention",
    title: "Nous couvrons le",
    highlight: "centre de l'Algérie",
    subtitle:
      "Basés à Ain Bessem (Bouira), nous intervenons dans plusieurs wilayas voisines pour vos installations et votre maintenance.",
    names: {
      Bouira: "Bouira",
      Alger: "Alger",
      "Boumerdès": "Boumerdès",
      Blida: "Blida",
      "Béjaïa": "Béjaïa",
      "Tizi Ouzou": "Tizi Ouzou",
    } as Record<string, string>,
    hq: "Siège",
    intervention: "Intervention",
    network: "Réseau d'intervention",
  },

  community: {
    kicker: "Communauté",
    title: "Suivez nos réalisations en",
    highlight: "direct",
    subtitle:
      "Chantiers, installations et nouveautés : retrouvez notre travail au quotidien sur nos réseaux sociaux.",
    blurbs: {
      instagram: "Photos de nos installations et stories du quotidien.",
      tiktok: "Nos reels et vidéos de chantiers en action.",
      facebook: "Actualités, avis clients et informations pratiques.",
    } as Record<string, string>,
    follow: "Suivre",
    strip: ["Photos de chantiers", "Reels & vidéos", "Nouveautés & promos"],
  },

  contact: {
    kicker: "Contact",
    title: "Contactez-nous dès aujourd'hui pour",
    highlight: "sécuriser votre espace",
    subtitle:
      "Devis gratuit et sans engagement. Décrivez votre besoin, nous vous rappelons rapidement.",
    info: {
      phone: "Téléphone",
      address: "Adresse",
      availability: "Disponibilité",
      availabilityValue: "Support rapide · Surveillance 24/7",
    },
    itinerary: "Itinéraire",
    mapCity: "Ain Bessem — Bouira",
    mapCountry: "Algérie",
    form: {
      name: "Nom complet",
      namePh: "Votre nom",
      phone: "Téléphone",
      phonePh: "05 55 60 84 23",
      service: "Service souhaité",
      serviceDefault: "Sélectionnez…",
      serviceOptions: [
        "Installation de caméras",
        "Maintenance & réparation",
        "Contrôle d'accès",
        "Alarme anti-intrusion",
        "Réseaux & fibre optique",
        "Autre",
      ],
      message: "Votre message",
      messagePh: "Décrivez votre besoin (type de local, nombre de caméras…)",
      send: "Envoyer via WhatsApp",
      sending: "Préparation…",
      sent: "Message ouvert !",
      direct: "Ou discutez directement sur WhatsApp",
    },
    wa: {
      greeting: "Bonjour Global Fourni Sécurité,",
      name: "Je m'appelle",
      phone: "Téléphone",
      service: "Service souhaité",
    },
  },

  footer: {
    tagline:
      "Installation, maintenance et surveillance professionnelle de systèmes de sécurité pour particuliers et entreprises.",
    nav: "Navigation",
    services: "Services",
    contact: "Contact",
    quote: "Demander un devis",
    foundedPrefix: "Créée en",
    rights: "Tous droits réservés.",
  },

  waTip: "Besoin d'un devis ? Écrivez-nous",
  loading: "Sécurisation…",
  founded: "Novembre 2024",

  shop: {
    kicker: "Boutique",
    title: "Équipez-vous en",
    highlight: "caméras & sécurité",
    subtitle:
      "Du matériel professionnel, sélectionné et testé par notre équipe. Commandez en ligne, livraison dans toute l'Algérie.",
    discover: "Découvrir",
    seeAll: "Voir toute la boutique",
  },

  delivery: {
    bureauLabel: "Retrait au bureau",
    domicileLabel: "Livraison à domicile",
  },

  product: {
    guarantee: "Produit garanti",
    deliveryAll: "Livraison dans toute l'Algérie",
    deliveryEverywhere: "Livraison partout en Algérie",
    soldBy: "Vendu par Global Fourni Sécurité",
    orderNow: "Commander maintenant",
    seeSpecs: "Voir les caractéristiques",
    support: "Support après-vente",
    imagePrev: "Image précédente",
    imageNext: "Image suivante",
    deliveryPrefix: "Livraison",
    deliveryOr: "ou",
    deliveryAllWilayas: "toutes wilayas",
    gallery: {
      kicker: "Galerie",
      title: "Le produit en",
      highlight: "détail",
      subtitle: "Photos réelles et fiche technique complète — cliquez pour zoomer.",
    },
    comparison: {
      kicker: "Comparatif",
      title: "Pourquoi choisir",
      highlight: "ce modèle",
      subtitle: "Face à une caméra classique, ce modèle s'installe là où les autres ne peuvent pas.",
      ordinaryCamera: "Caméra classique",
    },
    howItWorks: {
      kicker: "Mise en route",
      title: "Installation en",
      highlight: "4 étapes",
      subtitle: "Aucune compétence technique nécessaire — la caméra est prête en quelques minutes.",
    },
    specs: {
      kicker: "Fiche technique",
      title: "Caractéristiques",
      highlight: "complètes",
      subtitle: "Toutes les spécifications techniques officielles du produit.",
      idealFor: "Idéale pour :",
    },
    faq: {
      kicker: "Questions fréquentes",
      title: "Tout ce qu'il faut",
      highlight: "savoir",
    },
    finalCta: {
      securiseSpace: "Sécurisez votre espace avec la",
      subtitle:
        "Livraison dans toute l'Algérie, garantie constructeur et accompagnement par notre équipe technique après l'achat.",
    },
  },

  order: {
    kicker: "Commande",
    title: "Finalisez votre",
    highlight: "commande",
    subtitle: "Remplissez le formulaire ci-dessous, nous vous contactons pour confirmer et organiser la livraison.",
    form: {
      name: "Nom complet",
      namePh: "Votre nom",
      phone: "Téléphone",
      phonePh: "0655608423",
      wilaya: "Wilaya",
      wilayaPh: "Sélectionnez…",
      commune: "Commune",
      communePh: "Votre commune",
      address: "Adresse complète",
      addressPh: "Rue, quartier, repère…",
      quantity: "Quantité",
      decreaseQty: "Diminuer la quantité",
      increaseQty: "Augmenter la quantité",
      deliveryMode: "Mode de livraison",
      deliveryNote: "Frais de livraison identiques pour toutes les wilayas.",
      notes: "Notes (optionnel)",
      notesPh: "Précisions sur la livraison, horaires, etc.",
      subtotal: "Sous-total",
      delivery: "Livraison",
      total: "Total à payer",
      send: "Envoyer ma commande",
      sending: "Préparation…",
      sent: "Commande envoyée !",
      error: "Une erreur est survenue. Réessayez ou commandez via WhatsApp.",
      direct: "Ou commandez directement sur WhatsApp",
      errors: {
        name: "Entrez votre nom complet.",
        phone: "Numéro invalide (ex: 0655608423).",
        wilaya: "Sélectionnez votre wilaya.",
        commune: "Entrez votre commune.",
        address: "Adresse trop courte.",
        quantity: "Quantité minimum : 1.",
      },
    },
    wa: {
      newOrder: "Nouvelle commande",
      client: "Client",
      phone: "Téléphone",
      wilaya: "Wilaya",
      commune: "Commune",
      address: "Adresse",
      quantity: "Quantité",
      unitPrice: "Prix unitaire",
      delivery: "Livraison",
      total: "Total à payer",
      notes: "Notes",
    },
  },
};

type Content = typeof fr;

const ar: Content = {
  langToggle: "Français",
  nav: ["الرئيسية", "الخدمات", "المتجر", "أعمالنا", "مناطق التغطية", "اتصل بنا"],
  cta: { quote: "اطلب عرض سعر", whatsapp: "تواصل عبر واتساب" },

  hero: {
    badgePrefix: "أنظمة نشطة 24/7 · منذ",
    titleA: "حلول ذكية",
    titleHighlight: "للمراقبة بالفيديو",
    titleB: "والأمن",
    subtitle: "تركيب وصيانة ومراقبة احترافية للأفراد والشركات.",
    slogan: "« أمنكم مسؤوليتنا »",
    chips: ["كاميرات HD و 4K", "تحكّم عبر الهاتف", "مكافحة التسلل"],
    cam: { recSub: "مباشر", uhdSub: "دقة عالية", mobile: "الهاتف", mobileSub: "لحظي" },
  },

  services: {
    kicker: "خدماتنا",
    title: "خبرة متكاملة",
    highlight: "لحمايتكم",
    subtitle: "من الدراسة إلى الصيانة، نغطّي كل حلقة في منظومة أمنكم بمعدات احترافية.",
    items: [
      { title: "تركيب كاميرات HD و 4K", description: "مراقبة فيديو عالية الدقة يركّبها فنيون معتمدون، لصورة واضحة نهاراً وليلاً." },
      { title: "كاميرا 4G", description: "كاميرات مستقلة تعمل بشريحة 4G للمواقع المعزولة أو دون اتصال إنترنت ثابت." },
      { title: "كاميرا WiFi", description: "كاميرات لاسلكية سهلة التركيب، متصلة مباشرة بشبكة WiFi الخاصة بكم." },
      { title: "كاميرا تناظرية (Analogique)", description: "حلول تناظرية موثوقة واقتصادية، مثالية لتجهيز أو تحديث محلاتكم." },
      { title: "كاميرا رقمية (IP)", description: "كاميرات IP رقمية عالية الدقة، لصورة واضحة ووصول شبكي متقدم." },
      { title: "الصيانة والإصلاح", description: "تشخيص وصيانة وإعادة تشغيل سريعة لأنظمتكم الحالية، ولكل الماركات." },
      { title: "المراقبة عن بُعد عبر الهاتف", description: "شاهد كاميراتك مباشرة من هاتفك، أينما كنت وفي أي وقت." },
      { title: "بيع أجهزة DVR / NVR / XVR", description: "مسجّلات احترافية من أحدث جيل، مناسبة لحجم تركيبتكم." },
      { title: "أجهزة الإنذار والملحقات", description: "صفّارات وكواشف وملحقات أمنية لتعزيز حماية محلاتكم." },
      { title: "التحكم في الدخول", description: "بطاقات وبصمة وإدارة للمداخل للتحكم فيمن يدخل إلى أماكنكم الحساسة." },
      { title: "الشبكات والألياف البصرية", description: "كابلات منظّمة وألياف بصرية لشبكة مستقرة وسريعة وجاهزة للمراقبة." },
      { title: "أنظمة مكافحة التسلل", description: "حلول كاملة للكشف والردع لاستباق أي محاولة اقتحام وإيقافها." },
    ],
  },

  about: {
    kicker: "من نحن",
    title: "مؤسسة شابة بمعايير",
    highlight: "المحترفين",
    body: "تأسست في نوفمبر 2024 بعين بسام (البويرة)، تقوم Global Fourni Sécurité بتصميم وتركيب وصيانة أنظمة المراقبة بالفيديو والأمن للأفراد والشركات. نعمل بمعدات من ماركات معروفة وطرق تركيب حديثة، لحلول موثوقة ودائمة.",
    slogan: "« أمنكم مسؤوليتنا »",
    pillars: [
      { title: "مهمتنا", text: "جعل الأمن الاحترافي في متناول كل بيت وكل مؤسسة." },
      { title: "الاحترافية", text: "فنيون مدرّبون، معدات مضمونة، وعمل متقن في كل تركيب." },
      { title: "ثقة العملاء", text: "مرافقة شفافة ومتابعة دائمة، حتى بعد التركيب بوقت طويل." },
    ],
    stats: ["عملية تركيب", "ولايات مغطاة", "مراقبة عبر الهاتف", "عملاء تمت مرافقتهم"],
  },

  gallery: {
    kicker: "أعمالنا",
    title: "تركيباتنا",
    highlight: "بالصور",
    subtitle: "لمحة عن محلنا وعن تركيباتنا الميدانية وتدخلاتنا التقنية.",
    items: [
      { label: "محلنا", caption: "المحل — عين بسام" },
      { label: "كاميرا 4K", caption: "مراقبة خارجية" },
      { label: "تركيب", caption: "تركيب ميداني احترافي" },
      { label: "غرفة الخادم", caption: "كابلات ومسجّل NVR" },
      { label: "صيانة", caption: "تدخل تقني" },
      { label: "ريلز / فيديو", caption: "أعمالنا بالفيديو" },
      { label: "التحكم في الدخول", caption: "بطاقة وبصمة" },
      { label: "مراقبة عبر الهاتف", caption: "وصول لحظي" },
    ],
  },

  why: {
    kicker: "لماذا نحن",
    title: "ما يصنع الفرق مع",
    highlight: "Global Fourni",
    subtitle: "أكثر من مجرد مركّب: شريك موثوق يبقى إلى جانبكم.",
    items: [
      { title: "تدخل سريع", description: "فريق متجاوب يتنقل بسرعة لتأمين موقعكم دون تأخير." },
      { title: "منتجات احترافية", description: "معدات من ماركات معروفة، موثوقة ومضمونة، دون تنازل عن الجودة." },
      { title: "تركيب حديث", description: "تركيبات نظيفة وأنيقة، مطابقة للمعايير التقنية الحالية." },
      { title: "دعم تقني", description: "مرافقة إنسانية قبل التركيب وأثناءه وبعده بوقت طويل." },
      { title: "مراقبة ذكية", description: "كشف للحركة وتنبيهات ومتابعة عبر الهاتف ليقظة دائمة." },
      { title: "حلول مخصّصة", description: "كل مشروع يُدرَس حسب أماكنكم ومخاطركم وميزانيتكم." },
    ],
  },

  brands: { title: "علامات وشركاء موثوقون" },

  zones: {
    kicker: "مناطق التدخل",
    title: "نغطّي",
    highlight: "وسط الجزائر",
    subtitle: "من مقرنا بعين بسام (البويرة)، نتدخل في عدة ولايات مجاورة لتركيباتكم وصيانتكم.",
    names: {
      Bouira: "البويرة",
      Alger: "الجزائر",
      "Boumerdès": "بومرداس",
      Blida: "البليدة",
      "Béjaïa": "بجاية",
      "Tizi Ouzou": "تيزي وزو",
    },
    hq: "المقر",
    intervention: "تدخل",
    network: "شبكة التدخل",
  },

  community: {
    kicker: "مجتمعنا",
    title: "تابِعوا أعمالنا",
    highlight: "مباشرةً",
    subtitle: "أوراش وتركيبات وجديدنا: تابِعوا عملنا اليومي على شبكاتنا الاجتماعية.",
    blurbs: {
      instagram: "صور تركيباتنا وقصص من يومياتنا.",
      tiktok: "ريلز وفيديوهات من الأوراش أثناء العمل.",
      facebook: "أخبار وآراء العملاء ومعلومات مفيدة.",
    },
    follow: "متابعة",
    strip: ["صور الأوراش", "ريلز وفيديوهات", "جديد وعروض"],
  },

  contact: {
    kicker: "اتصل بنا",
    title: "تواصلوا معنا اليوم",
    highlight: "لتأمين فضائكم",
    subtitle: "عرض سعر مجاني ودون التزام. صِفوا حاجتكم وسنعاود الاتصال بكم بسرعة.",
    info: {
      phone: "الهاتف",
      address: "العنوان",
      availability: "التوفّر",
      availabilityValue: "دعم سريع · مراقبة 24/7",
    },
    itinerary: "الاتجاهات",
    mapCity: "عين بسام — البويرة",
    mapCountry: "الجزائر",
    form: {
      name: "الاسم الكامل",
      namePh: "اسمك",
      phone: "الهاتف",
      phonePh: "05 55 60 84 23",
      service: "الخدمة المطلوبة",
      serviceDefault: "اختر…",
      serviceOptions: [
        "تركيب كاميرات",
        "صيانة وإصلاح",
        "التحكم في الدخول",
        "إنذار ضد التسلل",
        "شبكات وألياف بصرية",
        "أخرى",
      ],
      message: "رسالتك",
      messagePh: "صِف حاجتك (نوع المحل، عدد الكاميرات…)",
      send: "إرسال عبر واتساب",
      sending: "جارٍ التحضير…",
      sent: "تم فتح الرسالة !",
      direct: "أو تحدّث مباشرة على واتساب",
    },
    wa: {
      greeting: "مرحباً Global Fourni Sécurité،",
      name: "اسمي",
      phone: "الهاتف",
      service: "الخدمة المطلوبة",
    },
  },

  footer: {
    tagline: "تركيب وصيانة ومراقبة احترافية لأنظمة الأمن للأفراد والشركات.",
    nav: "تصفّح",
    services: "الخدمات",
    contact: "اتصل بنا",
    quote: "اطلب عرض سعر",
    foundedPrefix: "تأسست في",
    rights: "جميع الحقوق محفوظة.",
  },

  waTip: "تحتاج عرض سعر؟ راسِلنا",
  loading: "جارٍ التأمين…",
  founded: "نوفمبر 2024",

  shop: {
    kicker: "المتجر",
    title: "جهّز نفسك بـ",
    highlight: "كاميرات وأنظمة أمن",
    subtitle: "معدات احترافية، مختارة ومجرّبة من طرف فريقنا. اطلب أونلاين، والتوصيل إلى جميع ولايات الجزائر.",
    discover: "اكتشف",
    seeAll: "عرض كل المتجر",
  },

  delivery: {
    bureauLabel: "استلام من المكتب",
    domicileLabel: "توصيل إلى المنزل",
  },

  product: {
    guarantee: "منتج مضمون",
    deliveryAll: "التوصيل إلى جميع ولايات الجزائر",
    deliveryEverywhere: "التوصيل في كل الجزائر",
    soldBy: "يُباع من طرف Global Fourni Sécurité",
    orderNow: "اطلب الآن",
    seeSpecs: "عرض المواصفات",
    support: "دعم ما بعد البيع",
    imagePrev: "الصورة السابقة",
    imageNext: "الصورة التالية",
    deliveryPrefix: "التوصيل",
    deliveryOr: "أو",
    deliveryAllWilayas: "جميع الولايات",
    gallery: {
      kicker: "معرض الصور",
      title: "المنتج",
      highlight: "بالتفصيل",
      subtitle: "صور حقيقية وفيشة تقنية كاملة — اضغط للتكبير.",
    },
    comparison: {
      kicker: "مقارنة",
      title: "لماذا تختار",
      highlight: "هذا الطراز",
      subtitle: "مقارنةً بكاميرا عادية، يُركَّب هذا الطراز حيث لا تستطيع الأخرى.",
      ordinaryCamera: "كاميرا عادية",
    },
    howItWorks: {
      kicker: "بداية التشغيل",
      title: "التركيب في",
      highlight: "4 خطوات",
      subtitle: "لا حاجة لأي مهارة تقنية — الكاميرا جاهزة في دقائق معدودة.",
    },
    specs: {
      kicker: "الفيشة التقنية",
      title: "المواصفات",
      highlight: "الكاملة",
      subtitle: "جميع المواصفات التقنية الرسمية للمنتج.",
      idealFor: "مثالية لـ :",
    },
    faq: {
      kicker: "الأسئلة الشائعة",
      title: "كل ما تحتاج",
      highlight: "معرفته",
    },
    finalCta: {
      securiseSpace: "أمّن فضاءك مع",
      subtitle: "التوصيل إلى جميع ولايات الجزائر، ضمان الصانع ومرافقة فريقنا التقني بعد الشراء.",
    },
  },

  order: {
    kicker: "الطلب",
    title: "أتمم",
    highlight: "طلبك",
    subtitle: "املأ الاستمارة أدناه، سنتصل بك لتأكيد الطلب وتنظيم التوصيل.",
    form: {
      name: "الاسم الكامل",
      namePh: "اسمك",
      phone: "الهاتف",
      phonePh: "0655608423",
      wilaya: "الولاية",
      wilayaPh: "اختر…",
      commune: "البلدية",
      communePh: "بلديتك",
      address: "العنوان الكامل",
      addressPh: "الشارع، الحي، علامة مميزة…",
      quantity: "الكمية",
      decreaseQty: "إنقاص الكمية",
      increaseQty: "زيادة الكمية",
      deliveryMode: "طريقة التوصيل",
      deliveryNote: "رسوم التوصيل نفسها في جميع الولايات.",
      notes: "ملاحظات (اختياري)",
      notesPh: "تفاصيل حول التوصيل، التوقيت، إلخ.",
      subtotal: "المجموع الفرعي",
      delivery: "التوصيل",
      total: "المجموع الكلي",
      send: "إرسال طلبي",
      sending: "جارٍ التحضير…",
      sent: "تم إرسال الطلب !",
      error: "حدث خطأ. أعد المحاولة أو اطلب عبر واتساب.",
      direct: "أو اطلب مباشرة عبر واتساب",
      errors: {
        name: "أدخل اسمك الكامل.",
        phone: "رقم غير صالح (مثال: 0655608423).",
        wilaya: "اختر ولايتك.",
        commune: "أدخل بلديتك.",
        address: "العنوان قصير جداً.",
        quantity: "الحد الأدنى للكمية : 1.",
      },
    },
    wa: {
      newOrder: "طلب جديد",
      client: "الزبون",
      phone: "الهاتف",
      wilaya: "الولاية",
      commune: "البلدية",
      address: "العنوان",
      quantity: "الكمية",
      unitPrice: "سعر الوحدة",
      delivery: "التوصيل",
      total: "المجموع الكلي",
      notes: "ملاحظات",
    },
  },
};

export const CONTENT = { fr, ar };
export type Lang = keyof typeof CONTENT;
export type { Content };
