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

export type WasteCard = {
  title: string
  description: string
  items: string[]
}

export type WasteRow = {
  family: string
  examples: string
  instruction: string
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

export const siteDesign = {
  siteTitle: 'ATRED Valorisation',
  siteDescription:
    'ATRED Valorisation accueille les matériaux inertes et vend des granulats pour les chantiers au départ de Keryvon à Languidic.',
} as const

export const homeContent = {
  eyebrow: 'Keryvon - Languidic',
  title: 'Matériaux et déchets inertes pour vos chantiers',
  description:
    'Un site pour acheter vos granulats et déposer vos matériaux inertes après validation. Réponse directe, accès simple, service de proximité.',
  materialBlockTitle: 'Utilisez des matériaux recyclés pour vos chantiers',
  materialPoints: [
    'Vente de matériaux recyclés',
    'Vente de matériaux de carrière',
    'Possibilité de transport jusqu’à vos chantiers',
  ],
  wasteBlockTitle: 'Déposez vos déchets inertes sur un site de proximité',
  wasteBlockText:
    'Nous accueillons les terres, déblais et gravats inertes compatibles après vérification du chargement. En cas de doute, on valide avant transport.',
} as const

export const activityBlocks = [
  {
    title: 'La vente de granulats',
    description:
      'Pour tous vos travaux d’aménagement ou de construction, nous vous proposons une gamme de matériaux (sables et gravier) issus de carrière ainsi que de la terre végétale.',
  },
  {
    title: 'La valorisation des matériaux',
    description:
      'Depuis de nombreuses années et dans une logique d’économie circulaire, nous accueillons des matériaux issus des chantiers de déconstruction des travaux publics ou du bâtiment. Une fois retraités (tri, concassage, criblage…) sur notre site, ces matériaux sont revendus essentiellement pour les chantiers de travaux publics et ou tout autre chantier d’aménagement.',
  },
  {
    title: 'L’accueil de matériaux inertes',
    description:
      'C’est un autre axe de la valorisation des excédents de chantier. Ne pouvant être recyclés, certains matériaux, sans impact sur l’environnement, sont stockés sur notre site. A termes une nouvelle plateforme agricole verra le jour avec l’objectif de valorisation du foncier concerné.',
  },
] as const

export const keryvonContent = {
  title: 'Le site de Keryvon',
  description:
    'Le site de Keryvon est entièrement automatisé pour nos clients en compte. Une fois votre compte validé, votre badge permet un gain de temps pour vos dépôts et enlèvements. Notre site facilement accessible et proche de la RN 24 est l’assurance d’une offre de proximité, de circuit court qui s’appuie sur l’écoute et les compétences reconnues de notre équipe.',
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
    priceFrom: 18,
    priceUnit: '€ HT / tonne',
    density: 1.6,
    image: '/images/material-grave-0-20.jpg',
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
    priceFrom: 16,
    priceUnit: '€ HT / tonne',
    density: 1.6,
    image: '/images/material-grave-0-31-5.jpg',
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
    priceFrom: 14,
    priceUnit: '€ HT / tonne',
    density: 1.6,
    image: '/images/material-grave-0-80.jpg',
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
    slug: 'grave-0-120',
    name: 'Grave 0/120',
    family: 'recycled',
    priceFrom: 13,
    priceUnit: '€ HT / tonne',
    density: 1.7,
    image: '/images/material-grave-0-120.jpg',
    imageAlt: 'Grave 0/120 disponible à la vente',
    shortUse: 'Gros remblai et mise à niveau.',
    detailText:
      'La grave 0/120 est prévue pour les gros volumes, les remises à niveau et les remblais plus lourds. Elle répond aux besoins de base quand il faut avancer vite.',
    applications: ['Gros remblais', 'Mise à niveau', 'Terrassement'],
    technicalInfo: [
      { label: 'Famille', value: 'Recyclés' },
      { label: 'Granulométrie', value: '0/120' },
      { label: 'Densité indicative', value: '1,7 t/m³' },
    ],
  },
  {
    slug: 'sable',
    name: 'Sable',
    family: 'quarry',
    priceFrom: 24,
    priceUnit: '€ HT / tonne',
    density: 1.6,
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
    placeholderNote: 'TODO: ajouter la photo validée du sable',
  },
  {
    slug: 'gravier-10-14',
    name: 'Gravier 10/14',
    family: 'quarry',
    priceFrom: 28,
    priceUnit: '€ HT / tonne',
    density: 1.5,
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
    placeholderNote: 'TODO: ajouter la photo validée du gravier 10/14',
  },
  {
    slug: '40-80',
    name: '40/80',
    family: 'quarry',
    priceFrom: 30,
    priceUnit: '€ HT / tonne',
    density: 1.5,
    imageAlt: 'Placeholder 40/80',
    shortUse: 'Drainage et couche grossière.',
    detailText:
      'Le 40/80 convient aux usages de drainage et aux besoins de gros calibre. Cette fiche est prête, il restera à ajouter la photo produit validée.',
    applications: ['Drainage', 'Couche grossière', 'Aménagement technique'],
    technicalInfo: [
      { label: 'Famille', value: 'De carrière' },
      { label: 'Granulométrie', value: '40/80' },
      { label: 'Densité indicative', value: '1,5 t/m³' },
    ],
    placeholderNote: 'TODO: ajouter la photo validée du 40/80',
  },
  {
    slug: 'terre-vegetale',
    name: 'Terre végétale',
    family: 'quarry',
    priceFrom: 15,
    priceUnit: '€ HT / tonne',
    density: 1.3,
    imageAlt: 'Placeholder terre végétale',
    shortUse: 'Nivellement et finitions paysagères.',
    detailText:
      'La terre végétale est prévue pour les finitions, le nivellement et les travaux paysagers. La photo produit reste à intégrer dès qu’elle est disponible.',
    applications: ['Nivellement', 'Finitions paysagères', 'Aménagement'],
    technicalInfo: [
      { label: 'Famille', value: 'De carrière' },
      { label: 'Granulométrie', value: 'Terre végétale' },
      { label: 'Densité indicative', value: '1,3 t/m³' },
    ],
    placeholderNote: 'TODO: ajouter la photo validée de la terre végétale',
  },
]

export const wasteCards: WasteCard[] = [
  {
    title: 'Terres et déblais',
    description:
      'Matériaux minéraux non pollués issus de terrassement et de déblais.',
    items: [
      'Terres inertes non polluées',
      'Déblais minéraux propres',
      'Cailloux et pierres',
    ],
  },
  {
    title: 'Gravats de chantier',
    description:
      'Déchets minéraux issus de démolition ou de déconstruction, hors éléments indésirables.',
    items: ['Béton', 'Briques', 'Tuiles', 'Céramiques'],
  },
  {
    title: 'Mélanges minéraux admis',
    description:
      'Certains mélanges d’inertes et enrobés peuvent être admis après contrôle.',
    items: [
      'Enrobés sans goudron',
      'Mélanges d’inertes propres',
      'Chargements triés',
    ],
  },
]

export const wasteRows: WasteRow[] = [
  {
    family: 'Terres inertes',
    examples: 'Terres, déblais minéraux, cailloux, pierres',
    instruction: 'Validation avant transport et chargement propre',
  },
  {
    family: 'Béton, briques, tuiles',
    examples: 'Béton, briques, tuiles, céramiques',
    instruction: 'Sans bois, plâtre, plastique ni éléments pollués',
  },
  {
    family: 'Enrobés admis',
    examples: 'Enrobés sans goudron et mélanges bitumineux autorisés',
    instruction: 'À confirmer avec l’équipe avant venue',
  },
  {
    family: 'Mélanges d’inertes propres',
    examples: 'Mélanges minéraux triés, hors déchets indésirables',
    instruction: 'Photos conseillées pour accélérer la validation',
  },
]

export const wasteRejected = [
  'Déchets dangereux ou pollués',
  'Plâtre, bois, plastique et métaux mélangés',
  'Déchets amiantés',
  'Chargements non triés avec éléments indésirables',
] as const

export const wastePageContent = {
  eyebrow: 'Déchets inertes',
  title: 'Matériaux admis sur le site',
  description:
    'Nous accueillons les matériaux inertes compatibles avec le site. En cas de doute, on valide toujours le chargement avant transport.',
  cardsTitle: 'Ce que vous pouvez nous apporter',
  tableTitle: 'Repères simples avant votre venue',
  tableDescription:
    'Le tableau ci-dessous donne une vue rapide. Si le chargement est mixte ou si un doute existe, prenez contact avant de vous déplacer.',
  rejectedTitle: 'À part ou à confirmer',
  rejectedDescription:
    'Certains matériaux ne sont pas admis sur le site ou demandent une vérification avant tout transport.',
  reminderTitle: 'Admission préalable',
  reminderText:
    "Avant votre venue, indiquez-nous la nature du matériau, l'origine du chantier et, si besoin, quelques photos du chargement.",
} as const

export const materialsPageContent = {
  eyebrow: 'Matériaux',
  title: 'Utilisez des matériaux recyclés pour vos chantiers',
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
  title: 'Bordereau de suivi de déchets inertes',
  description:
    'Téléchargez le document, consultez les repères utiles et revenez vers nous en cas de doute avant votre venue.',
  helpTitle: 'Aide pour préparer votre dossier',
  helpDescription:
    'Le plus simple reste de nous transmettre la nature du chargement, le chantier d’origine et les pièces utiles avant transport.',
  steps: [
    {
      title: 'Validation du chargement',
      description:
        "On vérifie l'origine du chantier, la nature des matériaux et les documents utiles avant l'arrivée sur site.",
    },
    {
      title: 'Accueil et pesée',
      description:
        'À votre arrivée, le chargement est orienté et pesé pour assurer le suivi.',
    },
    {
      title: 'Dépôt sur la bonne zone',
      description:
        'Les matériaux sont déposés sur la zone prévue selon leur nature et leur conformité.',
    },
    {
      title: 'Suivi documentaire',
      description:
        'Les éléments utiles sont conservés pour garder une traçabilité simple et claire.',
    },
  ],
} as const

export const bsdiActions: DocumentAction[] = [
  {
    title: 'Télécharger',
    description: 'Télécharger le BSDI au format PDF.',
    actionLabel: 'Télécharger le PDF',
    href: '/documents/BSDI.pdf',
    note: 'Document local fourni par ATRED.',
  },
  {
    title: 'Remplir',
    description: 'Le remplissage en ligne sera ajouté plus tard.',
    actionLabel: 'Bientôt disponible',
    disabled: true,
    note: 'Le bouton reste volontairement inactif pour la V1.',
  },
  {
    title: 'Aide',
    description: 'Voir les étapes et repères utiles avant votre venue.',
    actionLabel: 'Voir l’aide BSDI',
    href: '#aide-bsdi',
    note: 'Accès direct aux explications de la page.',
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
