import { company } from './site'

export type MaterialFamilyKey = 'recycled' | 'quarry'

export type MaterialProduct = {
  slug: string
  name: string
  family: MaterialFamilyKey
  priceFrom: number
  priceUnit: string
  density: number
  image?: string
  imageAlt: string
  shortUse: string
  detailText: string
  applications: string[]
  technicalInfo: Array<{ label: string; value: string }>
  placeholderNote?: string
}

export type WasteDefinitionItem = {
  title: string
  description: string
  image: string
  imageAlt: string
}

export type DocumentAction = {
  title: string
  description: string
  actionLabel: string
  href?: string
  to?: string
  disabled?: boolean
  note?: string
}

export type BsdiHelpSection = {
  title: string
  description: string
  items: string[]
  note?: string
}

export const siteDesign = {
  siteTitle: 'ATRED Valorisation',
  siteDescription:
    'ATRED Valorisation accueille les matériaux inertes et vend des granulats pour les chantiers au départ de Languidic.',
} as const

export const homeContent = {
  eyebrow: 'Languidic',
  title: 'Centre de recyclage et valorisation de matériaux',
  description:
    'Le site ISDI classe III de Languidic réceptionne, stocke et valorise vos gravats et matériaux issus de travaux de TP et de démolition. ',
  materialBlockTitle: 'Utilisez nos matériaux recyclés pour vos chantiers',
  materialPoints: [
    'Vente de matériaux recyclés',
    'Vente de matériaux de carrière',
    'Possibilité de transport jusqu’à vos chantiers',
  ],
  wasteBlockTitle: 'Déchets inertes admis',
  wasteBlockText:
    'Terres, déblais, béton, briques, tuiles et autres matériaux inertes compatibles après validation du chargement.',
} as const

export const activityBlocks = [
  {
    title: 'L’accueil de matériaux inertes',
    description:
      'C’est l\'axe premier de la valorisation des excédents de chantier. Triés, criblés, concassés, vos gravats sont transformés en matériaux Ne pouvant être recyclés, certains matériaux, sans impact sur l’environnement, sont stockés sur notre site. A termes une nouvelle plateforme agricole verra le jour avec l’objectif de valorisation du foncier concerné.',
  },
  {
    title: 'La valorisation des matériaux',
    description:
      'Depuis de nombreuses années et dans une logique d’économie circulaire, nous accueillons des matériaux issus des chantiers de déconstruction des travaux publics ou du bâtiment. Une fois retraités (tri, concassage, criblage…) sur notre site, ces matériaux sont revendus essentiellement pour les chantiers de travaux publics et ou tout autre chantier d’aménagement.',
  },
  {
    title: 'La vente de granulats',
    description:
      'Pour tous vos travaux d’aménagement ou de construction, nous vous proposons une gamme de matériaux recyclés mais aussi sable et graviers issus de carrière ainsi que de la terre végétale.',
  },
] as const

export const keryvonContent = {
  title: 'Le site de Languidic',
  description:
    'Le site de Languidic est entièrement automatisé pour nos clients en compte. Une fois votre compte validé, votre badge permet un gain de temps pour vos dépôts et enlèvements. Notre site facilement accessible et proche de la RN 24 est l’assurance d’une offre de proximité, de circuit court qui s’appuie sur l’écoute et les compétences reconnues de notre équipe.',
  points: [
    'Site automatisé pour les clients en compte',
    'Badge d’accès après validation du compte',
    'Proximité de la RN 24',
    'Équipe joignable pour valider les besoins avant venue',
  ],
} as const

export const materialFamilies = [
  {
    slug: 'recycled' as const,
    title: 'Recyclés',
    description:
      "Graves issues du recyclage pour remblais, couches d'assise et accès chantier.",
  },
  {
    slug: 'quarry' as const,
    title: 'De carrière',
    description:
      'Sable, gravier, gros calibre et terre végétale pour les besoins courants du chantier.',
  },
] as const

export const materials: MaterialProduct[] = [
  {
    slug: 'grave-0-20',
    name: 'Grave 0/20',
    family: 'recycled',
    priceFrom: 8,
    priceUnit: '€ HT / tonne',
    density: 1.6,
    image: '/images/materiaux/graves_0_20.jpg',
    imageAlt: 'Grave 0/20 disponible à la vente',
    shortUse: 'Réglage, finition et petits aménagements.',
    detailText:
      'La grave 0/20 convient aux couches de réglage, aux finitions et aux petits aménagements extérieurs. Elle est utilisée quand il faut un matériau compact et simple à mettre en œuvre.',
    applications: [
      'Allées et accès',
      'Réglage avant finition',
      'Petits aménagements',
    ],
    technicalInfo: [
      { label: 'Famille', value: 'Recyclés' },
      { label: 'Granulométrie', value: '0/20' },
      { label: 'Densité indicative', value: '1,6 t/m³' },
    ],
  },
  {
    slug: 'grave-0-31-5',
    name: 'Grave 0/31,5',
    family: 'recycled',
    priceFrom: 9,
    priceUnit: '€ HT / tonne',
    density: 1.6,
    image: '/images/materiaux/graves_0_315.jpg',
    imageAlt: 'Grave 0/31,5 disponible à la vente',
    shortUse: 'Sous-couche et plateforme technique.',
    detailText:
      'La grave 0/31,5 est utilisée pour les sous-couches, les plateformes et les zones techniques. C’est une référence courante pour préparer un accès ou une assise.',
    applications: ['Plateformes', 'Sous-couches', 'Accès chantier'],
    technicalInfo: [
      { label: 'Famille', value: 'Recyclés' },
      { label: 'Granulométrie', value: '0/31,5' },
      { label: 'Densité indicative', value: '1,6 t/m³' },
    ],
  },
  {
    slug: 'grave-0-80',
    name: 'Grave 0/80',
    family: 'recycled',
    priceFrom: 8,
    priceUnit: '€ HT / tonne',
    density: 1.6,
    image: '/images/materiaux/graves_0_80.jpg',
    imageAlt: 'Grave 0/80 disponible à la vente',
    shortUse: 'Remblais, chemins et couches d’assise.',
    detailText:
      'La grave 0/80 est adaptée aux remblais, chemins d’accès et couches d’assise. Elle permet de traiter rapidement les volumes sur chantier.',
    applications: ['Remblais', 'Chemins d’accès', 'Couches d’assise'],
    technicalInfo: [
      { label: 'Famille', value: 'Recyclés' },
      { label: 'Granulométrie', value: '0/80' },
      { label: 'Densité indicative', value: '1,6 t/m³' },
    ],
  },
  {
    slug: 'sable',
    name: 'Sable',
    family: 'quarry',
    priceFrom: 33,
    priceUnit: '€ HT / tonne',
    density: 1.6,
    image: '/images/materiaux/sable.jpg',
    imageAlt: 'Sable disponible à la vente',
    shortUse: 'Lit de pose, remblais fins et réglage.',
    detailText:
      'Le sable est utilisé pour le lit de pose, les remblais fins, le réglage et les petites finitions. Il convient aux besoins simples et courants sur chantier.',
    applications: ['Lit de pose', 'Réglage', 'Remblai fin'],
    technicalInfo: [
      { label: 'Famille', value: 'De carrière' },
      { label: 'Granulométrie', value: 'Sable' },
      { label: 'Densité indicative', value: '1,6 t/m³' },
    ],
  },
  {
    slug: 'gravier-10-14',
    name: 'Gravier 10/14',
    family: 'quarry',
    priceFrom: 33,
    priceUnit: '€ HT / tonne',
    density: 1.5,
    image: '/images/materiaux/gravier_10_14.jpg',
    imageAlt: 'Gravier 10/14 disponible à la vente',
    shortUse: 'Drainage et aménagement extérieur.',
    detailText:
      'Le gravier 10/14 sert au drainage, aux aménagements extérieurs et aux besoins courants en gravier calibré.',
    applications: ['Drainage', 'Aménagement extérieur', 'Réseaux'],
    technicalInfo: [
      { label: 'Famille', value: 'De carrière' },
      { label: 'Granulométrie', value: '10/14' },
      { label: 'Densité indicative', value: '1,5 t/m³' },
    ],
  },
  {
    slug: '40-80',
    name: '40/80',
    family: 'recycled',
    priceFrom: 8,
    priceUnit: '€ HT / tonne',
    density: 1.6,
    image: '/images/materiaux/graves_40_80.jpg',
    imageAlt: '40/80 disponible à la vente',
    shortUse: 'Drainage et couche grossière.',
    detailText:
      'Le 40/80 convient aux usages de drainage et aux besoins de gros calibre.',
    applications: ['Drainage', 'Couche grossière', 'Aménagement technique'],
    technicalInfo: [
      { label: 'Famille', value: 'Recyclés' },
      { label: 'Granulométrie', value: '40/80' },
      { label: 'Densité indicative', value: '1,5 t/m³' },
    ],
  },
  {
    slug: 'terre-vegetale',
    name: 'Terre végétale',
    family: 'quarry',
    priceFrom: 15,
    priceUnit: '€ HT / tonne',
    density: 1.3,
    image: '/images/materiaux/terre_vegetale.jpg',
    imageAlt: 'Terre végétale disponible à la vente',
    shortUse: 'Nivellement et finitions paysagères.',
    detailText:
      'La terre végétale est prévue pour les finitions, le nivellement et les travaux paysagers.',
    applications: ['Nivellement', 'Finitions paysagères', 'Aménagement'],
    technicalInfo: [
      { label: 'Famille', value: 'De carrière' },
      { label: 'Granulométrie', value: 'Terre végétale' },
      { label: 'Densité indicative', value: '1,3 t/m³' },
    ],
  },
]

export const wasteDefinitionItems: WasteDefinitionItem[] = [
  {
    title: 'Béton non ferraillé',
    description:
      'Déchets de béton issus de la démolition, de la rénovation ou de la construction de bâtiments qui ne comportent pas d’armature métallique.',
    image: '/images/dechets-inertes/beton-non-ferraille.png',
    imageAlt: 'Pictogramme béton non ferraillé',
  },
  {
    title: 'Béton ferraillé',
    description:
      'Déchets de béton issus de la démolition, de la rénovation ou de la construction de bâtiments qui comportent une armature métallique nécessitant une opération spécifique de déferraillage.',
    image: '/images/dechets-inertes/beton-ferraille.png',
    imageAlt: 'Pictogramme béton ferraillé',
  },
  {
    title: 'Béton durci en centrale',
    description:
      'Béton durci provenant directement d’une unité de production de béton.',
    image: '/images/dechets-inertes/beton-durci-centrale.png',
    imageAlt: 'Pictogramme béton durci en centrale',
  },
  {
    title: 'Briques',
    description:
      'Déchets de briques de terre cuite de parement, de cloison ou de structure, pleines ou creuses.',
    image: '/images/dechets-inertes/briques.png',
    imageAlt: 'Pictogramme briques',
  },
  {
    title: 'Tuiles',
    description: 'Déchets de tuiles en terre cuite.',
    image: '/images/dechets-inertes/tuiles.png',
    imageAlt: 'Pictogramme tuiles',
  },
  {
    title: 'Céramique',
    description:
      'Déchets de céramique issus de la construction, de la rénovation ou de la démolition, et notamment : les éléments de carrelages, de faïences et l’ensemble des équipements sanitaires en céramique.',
    image: '/images/dechets-inertes/ceramique.png',
    imageAlt: 'Pictogramme céramique',
  },
  {
    title: 'Pierre de tailles, pavés',
    description:
      'Déchets de pierres de taille ou pavés issus de pierres naturelles, taillés et façonnés et utilisés pour la construction d’un bâtiment, son ornement ou son aménagement y compris sur la parcelle.',
    image: '/images/dechets-inertes/pierre-tailles-paves.png',
    imageAlt: 'Pictogramme pierre de tailles et pavés',
  },
  {
    title: 'Mélanges bitumineux',
    description:
      'Déchets composés de bitume (hors membranes bitumineuses, hors goudron) issus de la déconstruction ou de l’entretien des voies de circulation et de stationnement sur la parcelle d’un bâtiment.',
    image: '/images/dechets-inertes/melanges-bitumineux.png',
    imageAlt: 'Pictogramme mélanges bitumineux',
  },
  {
    title: 'Cailloux, pierres, enrochements, granulats',
    description:
      'Déchets composés de pierres et cailloux issus des fondations du bâtiment ou de l’aménagement de sa parcelle. Au sein de ces déchets sont exclus tous les pierres et cailloux provenant de l’excavation de sols naturels et remblais temporaires.',
    image: '/images/dechets-inertes/cailloux-pierres-granulats.png',
    imageAlt: 'Pictogramme cailloux, pierres, enrochements et granulats',
  },
  {
    title: 'Mélanges d’inertes',
    description:
      'Mélange de déchets inertes cités ci-dessus, hors déchets indésirables et terres.',
    image: '/images/dechets-inertes/melanges-inertes.png',
    imageAlt: 'Pictogramme mélanges d’inertes',
  },
]

export const wastePreviewItems = wasteDefinitionItems.slice(0, 6)

export const wasteRejected = [
  'Déchets dangereux ou pollués',
  'Plâtre, bois, plastique et métaux mélangés',
  'Déchets amiantés',
  'Chargements non triés avec éléments indésirables',
] as const

export const wastePageContent = {
  eyebrow: 'Déchets inertes',
  title: 'Les différents déchets de matériaux inertes',
  description:
    'Pour être recyclés et valorisés dans de nouvelles applications (remblais, sous-couches routières, granulats recyclés…), les déchets de produits et matériaux inertes doivent être triés par catégories. Voici la définition de chaque déchet de matériau inerte.',
  rejectedTitle: 'Non admissibles',
  rejectedDescription:
    'Certains matériaux ne sont pas admis sur le site, comme les :',
  reminderTitle: 'Admission préalable',
  reminderText:
    "Avant votre venue, indiquez-nous la nature du matériau, l'origine du chantier et, si besoin, quelques photos du chargement.",
} as const

export const materialsPageContent = {
  eyebrow: 'Matériaux',
  title: 'Utilisez nos matériaux recyclés pour vos chantiers',
  description:
    'Vente de matériaux recyclés, vente de matériaux de carrière et possibilité de transport jusqu’à vos chantiers.',
  familyTitle: 'Matériaux disponibles à la vente',
  detailCtaTitle: 'Besoin d’un prix ou d’un tonnage ?',
  detailCtaText:
    'Les prix affichés sont indicatifs. Nous confirmons le stock, le tonnage et le mode d’enlèvement avec vous.',
} as const

export const companyPageContent = {
  eyebrow: "L'entreprise",
  title: 'Nos activités',
  description:
    'ATRED Valorisation accueille les matériaux inertes et vend des granulats au départ du site de Keryvon à Languidic.',
} as const

export const contactPageContent = {
  eyebrow: 'Contact',
  title: 'Parlez-nous de votre chantier',
  description:
    'Pour un dépôt, un enlèvement ou une demande de prix, indiquez simplement votre besoin et nous revenons vers vous.',
  faq: [
    {
      question: 'Peut-on venir sans validation préalable ?',
      answer:
        'Il est préférable de nous appeler avant tout transport pour confirmer la compatibilité du chargement.',
    },
    {
      question: 'Les prix affichés en ligne sont-ils définitifs ?',
      answer:
        'Non. Ils sont indicatifs. Le prix final dépend du matériau, du volume et du mode d’enlèvement.',
    },
  ],
} as const

export const bsdiPageContent = {
  eyebrow: 'BSDI',
  title: 'Document légal et obligatoire',
  description:
    'Le Bordereau de Suivi des Déchets Inertes doit accompagner le chargement et permet d’assurer la traçabilité du dépôt.',
  paragraphs: [
    'Ce document doit être complété avant votre venue sur le site et conservé avec le chargement pour le suivi du dépôt.',
    'Le plus simple reste de télécharger le BSDI, de préparer les informations utiles et de nous contacter en cas de doute avant transport.',
  ],
  sideCardTitle: 'Besoin d’aide pour le compléter ?',
  sideCardDescription:
    'Le remplissage en ligne sera ajouté plus tard. En attendant, vous pouvez consulter un repère simple avant de télécharger le document.',
  helpTitle: 'Aide BSDI',
  helpDescription:
    'Repères simples pour savoir quoi remplir vous-même et quelle partie sera complétée sur le site.',
  helpSections: [
    {
      title: '1. Émetteur du bordereau',
      description:
        'Renseignez l’identité du producteur du déchet et les informations générales sur le chargement.',
      items: [
        'Nom, prénom ou raison sociale, adresse, téléphone et mail',
        'Nature des matériaux déposés',
        'Quantité estimative et type de conditionnement si besoin',
      ],
    },
    {
      title: '2. Collecteur ou transporteur',
      description:
        'Complétez cette partie si vous transportez vous-même le chargement ou si une entreprise l’achemine.',
      items: [
        'Coordonnées du transporteur',
        'Date du transport',
        'Mode de transport et signature',
      ],
    },
    {
      title: '3. Validation de l’émetteur',
      description:
        'La personne qui émet le bordereau vérifie les informations, date et signe avant l’arrivée sur site.',
      items: [
        'Relire les informations déclarées',
        'Dater le document',
        'Signer avant transport',
      ],
    },
    {
      title: '4. Réception sur le site',
      description:
        'La partie réception, pesée et éliminateur est complétée par ATRED lors de l’admission du chargement.',
      items: [],
      note: 'Ne pas remplir la partie réservée à l’installation de réception.',
    },
  ],
} as const

export const bsdiActions: DocumentAction[] = [
  {
    title: 'Télécharger',
    description: 'Ouvrir le BSDI au format PDF dans un nouvel onglet.',
    actionLabel: 'Télécharger le BSDI',
    href: '/documents/BSDI.pdf',
  },
  {
    title: 'Remplir',
    description: 'Le remplissage en ligne sera ajouté dans une prochaine version.',
    actionLabel: 'Remplir le BSDI',
    disabled: true,
  },
  {
    title: 'Aide',
    description: 'Voir un repère simple avant de compléter le document.',
    actionLabel: 'Aide BSDI',
    note: 'Repères utiles avant votre venue.',
  },
]

export const legalContent = {
  eyebrow: 'Mentions légales',
  title: 'Informations à compléter',
  intro:
    'Cette page reste un support simple avant validation finale des informations légales.',
  items: [
    'Raison sociale exacte, forme juridique, capital et SIRET à confirmer.',
    'Coordonnées de l’hébergeur et responsable de publication à compléter.',
    'Mentions sur les données de contact et les cookies à finaliser avant mise en ligne.',
  ],
} as const

export const homeMaterialSelection = [
  'grave-0-20',
  'grave-0-31-5',
  'grave-0-80',
  'sable',
  'gravier-10-14',
  'terre-vegetale',
] as const

export const companyGallery = [
  {
    src: '/images/hero-site.jpg',
    alt: 'Vue générale du site de Keryvon',
  },
  {
    src: '/images/keryvon-crusher.jpeg',
    alt: 'Installation de concassage sur le site',
  },
  {
    src: '/images/keryvon-recycling.jpeg',
    alt: 'Zone de traitement des matériaux sur le site',
  },
  {
    src: '/images/keryvon-excavator.jpeg',
    alt: 'Pelle et zone de matériaux sur le site',
  },
    {
    src: '/images/keryvon-borne.png',
    alt: 'Borne de pesage à l\'entrée du site.',
  },
  {
    src: '/images/keryvon-crushing.jpeg',
    alt: 'Installation de concassage sur le site',
  },
] as const

export const getMaterialBySlug = (slug: string) =>
  materials.find((material) => material.slug === slug)

export const getMaterialFamily = (family: MaterialFamilyKey) =>
  materialFamilies.find((item) => item.slug === family)

export const groupMaterialsByFamily = () =>
  materialFamilies.map((family) => ({
    ...family,
    items: materials.filter((material) => material.family === family.slug),
  }))

export const formatMaterialPrice = (material: MaterialProduct) =>
  `À partir de ${material.priceFrom} ${material.priceUnit}`

export const homeMaterials = materials.filter((material) =>
  homeMaterialSelection.includes(
    material.slug as (typeof homeMaterialSelection)[number],
  ),
)

export const siteContactSummary = `${company.location} • ${company.phoneDisplay} • ${company.email}`
