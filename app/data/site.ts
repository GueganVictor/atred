export type LocaleCode = 'fr' | 'en'

export type LocalizedText = Record<LocaleCode, string>

type Service = {
  title: LocalizedText
  description: LocalizedText
  icon: string
}

type MaterialCategoryKey = 'recycled' | 'quarry'

type MaterialCategory = {
  slug: MaterialCategoryKey
  title: LocalizedText
  description: LocalizedText
}

type WasteCategory = {
  title: LocalizedText
  description: LocalizedText
  examples: LocalizedText[]
  caution?: LocalizedText
}

type Material = {
  slug: string
  category: MaterialCategoryKey
  name: string
  size: string
  image: string
  usage: LocalizedText
  density: number
}

type ProcessStep = {
  title: LocalizedText
  description: LocalizedText
}

type DocumentItem = {
  title: LocalizedText
  description: LocalizedText
  status: LocalizedText
}

type Commitment = {
  title: LocalizedText
  description: LocalizedText
}

export const company = {
  name: 'ATRED Valorisation',
  legalName: 'SAS ATRED Valorisation',
  location: 'Lieu Dit Keryvon, 56440 Languidic',
  contactPerson: 'Mr Bastian Jacob',
  phoneDisplay: '06 49 76 08 26',
  phoneLink: 'tel:+33649760826',
  email: 'isdi@atredvalorisation.fr',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=47.85579082491541+-3.1720683701739545',
  mapsEmbedUrl:
    'https://www.google.com/maps?output=embed&q=47.85579082491541+-3.1720683701739545',
  serviceArea:
    'Morbihan, Lorient, Hennebont, Lanester, Languidic et chantiers du bassin sud Bretagne',
  hours: [
    'Lundi au vendredi : 8h00 - 12h00 / 13h30 - 17h30',
    'Accueil chantier sur confirmation préalable',
  ],
}

export const services: Service[] = [
  {
    icon: 'ph:truck-trailer',
    title: {
      fr: 'Site local et contact direct',
      en: 'Local site and direct contact',
    },
    description: {
      fr: 'Le site de Keryvon à Languidic répond aux chantiers du Morbihan avec un échange direct pour confirmer besoins, accès et disponibilités.',
      en: 'The Keryvon site in Languidic serves projects across Morbihan with direct contact to confirm needs, access and availability.',
    },
  },
  {
    icon: 'ph:arrows-clockwise',
    title: {
      fr: 'Matériaux disponibles',
      en: 'Materials available',
    },
    description: {
      fr: 'Graves issues du recyclage, sable et graviers de carrière, terre végétale de carrière sont proposés selon production, stock et besoin chantier.',
      en: 'Recycled aggregates, sand and quarry gravel are offered according to production, stock and site needs.',
    },
  },
  {
    icon: 'ph:clipboard-text',
    title: {
      fr: 'Admission et suivi clairs',
      en: 'Clear admission and tracking',
    },
    description: {
      fr: "Validation préalable du chargement, pesée et documents utiles permettent de sécuriser la prise en charge avant l'arrivée sur site.",
      en: 'Pre-validation, weighing and useful documents secure handling before arrival on site.',
    },
  },
]

export const wasteCategories: WasteCategory[] = [
  {
    title: {
      fr: 'Terres et matériaux de terrassement',
      en: 'Earth and excavation materials',
    },
    description: {
      fr: 'Matériaux minéraux non pollués issus de terrassement, déblais, cailloux et pierres compatibles avec le stockage ou la valorisation.',
      en: 'Unpolluted mineral materials from excavation, spoil, stones and aggregates compatible with storage or recovery.',
    },
    examples: [
      {
        fr: 'Terres inertes non polluées',
        en: 'Unpolluted inert soil',
      },
      {
        fr: 'Cailloux, pierres, remblais minéraux',
        en: 'Stones, rocks and mineral fill',
      },
      {
        fr: 'Déblais de chantier sans éléments indésirables',
        en: 'Construction spoil without unwanted elements',
      },
    ],
  },
  {
    title: {
      fr: 'Déchets de construction et démolition',
      en: 'Construction and demolition waste',
    },
    description: {
      fr: 'Déchets minéraux issus de démolition, curage ou voirie pouvant être orientés vers le tri, le concassage ou le stockage réglementé.',
      en: 'Mineral waste from demolition, strip-out or roadworks suitable for sorting, crushing or regulated storage.',
    },
    examples: [
      {
        fr: 'Béton concassable ou non ferraillé',
        en: 'Crushable or non-reinforced concrete',
      },
      {
        fr: 'Briques, tuiles, céramiques',
        en: 'Bricks, tiles and ceramics',
      },
      {
        fr: 'Enrobés sans goudron, mélanges bitumineux autorisés',
        en: 'Tar-free asphalt and authorized bituminous mixes',
      },
    ],
    caution: {
      fr: 'Toute présence de pollution, plâtre, bois, plastique, amiante ou déchets non inertes doit être signalée avant admission.',
      en: 'Any sign of pollution, plaster, wood, plastic, asbestos or non-inert waste must be declared before admission.',
    },
  },
]

export const rejectedMaterials: LocalizedText[] = [
  {
    fr: 'Déchets dangereux ou pollués',
    en: 'Hazardous or polluted waste',
  },
  {
    fr: 'Bois, plastiques, métaux mélangés, plâtre',
    en: 'Wood, plastics, mixed metals and plaster',
  },
  {
    fr: 'Déchets amiantés ou matériaux nécessitant une filière spécifique',
    en: 'Asbestos waste or materials requiring a dedicated channel',
  },
]

export const materialCategories: MaterialCategory[] = [
  {
    slug: 'recycled',
    title: {
      fr: 'Graves issues du recyclage',
      en: 'Recycled aggregates',
    },
    description: {
      fr: "Pour remblais, plateformes, couches d'assise et accès chantier.",
      en: 'For fill, platforms, sub-bases and site access.',
    },
  },
  {
    slug: 'quarry',
    title: {
      fr: 'sable et graviers de carrière, terre végétale issus de carrières',
      en: 'Sand and quarry gravel',
    },
    description: {
      fr: 'Pour réglage, finition, drainage et besoins courants du chantier.',
      en: 'For levelling, finishing, drainage and standard site needs.',
    },
  },
]

// AJOUTER TERRE VEGETALE et 40/80
// avoir la possiblité 
export const materialsCatalog: Material[] = [
  {
    slug: 'grave-0-20',
    category: 'recycled',
    name: 'Grave recyclée',
    size: '0/20',
    image: '/images/materiaux/graves_0_20.jpg',
    usage: {
      fr: 'Finition d’allées, couches de réglage et petits aménagements extérieurs.',
      en: 'Driveway finishing, levelling layers and small outdoor works.',
    },
    density: 1.6,
  },
  {
    slug: 'grave-0-31-5',
    category: 'recycled',
    name: 'Grave recyclée',
    size: '0/31,5',
    image: '/images/materiaux/graves_0_315.jpg',
    usage: {
      fr: 'Sous-couches et plateformes techniques pour accès chantier ou voirie légère.',
      en: 'Sub-bases and technical platforms for site access or light roadworks.',
    },
    density: 1.6,
  },
  {
    slug: 'grave-0-80',
    category: 'recycled',
    name: 'Grave recyclée',
    size: '0/80',
    image: '/images/materiaux/graves_0_80.jpg',
    usage: {
      fr: 'Remblais, chemins d’accès, couches d’assise et mises à niveau.',
      en: 'Fill, access roads, base layers and levelling works.',
    },
    density: 1.6,
  },
  {
    slug: 'sable',
    category: 'quarry',
    name: 'Sable',
    size: '',
    image: '/images/materiaux/sable.jpg',
    usage: {
      fr: 'Lit de pose, remblais fins, réglage et finitions selon le besoin chantier.',
      en: 'Bedding, fine fill, levelling and finishing according to site needs.',
    },
    density: 1.6,
  },
  {
    slug: 'gravier-10-14',
    category: 'quarry',
    name: 'Gravier',
    size: '10/14',
    image: '/images/materiaux/gravier_10_14.jpg',
    usage: {
      fr: 'Drainage, aménagements extérieurs et besoins courants en gravier calibré.',
      en: 'Drainage, outdoor works and standard needs for calibrated gravel.',
    },
    density: 1.6,
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: {
      fr: 'Validation préalable du chargement',
      en: 'Pre-admission validation',
    },
    description: {
      fr: 'Le chantier, la nature des matériaux et les justificatifs sont vérifiés avant l’arrivée pour éviter tout refus sur site.',
      en: 'The project, material nature and supporting documents are checked before arrival to avoid refusal on site.',
    },
  },
  {
    title: {
      fr: 'Accueil et pesée à l’entrée',
      en: 'Reception and weighing on arrival',
    },
    description: {
      fr: 'Le chargement est orienté, pesé et enregistré afin de garantir la traçabilité des flux entrants.',
      en: 'The load is directed, weighed and registered to guarantee traceability of incoming flows.',
    },
  },
  {
    title: {
      fr: 'Dépôt, tri et orientation',
      en: 'Unload, sorting and routing',
    },
    description: {
      fr: 'Les matériaux sont déposés sur la bonne zone pour être valorisés ou stockés selon leur nature et leur conformité.',
      en: 'Materials are unloaded in the correct area for recovery or storage depending on their nature and compliance.',
    },
  },
  {
    title: {
      fr: 'Suivi documentaire',
      en: 'Document tracking',
    },
    description: {
      fr: 'Les éléments de suivi sont conservés pour sécuriser la conformité réglementaire et les échanges avec vos donneurs d’ordre.',
      en: 'Tracking documents are kept to secure regulatory compliance and support your customers and ordering parties.',
    },
  },
]

export const documents: DocumentItem[] = [
  {
    title: {
      fr: 'Bordereau de suivi / pièce de traçabilité',
      en: 'Tracking slip / traceability document',
    },
    description: {
      fr: 'Document utilisé pour justifier l’origine, la nature et la destination des déchets pris en charge.',
      en: 'Document used to justify the origin, nature and destination of managed waste.',
    },
    status: {
      fr: "Disponible selon le besoin au moment du devis ou de l'admission",
      en: 'Available on request during quotation',
    },
  },
  {
    title: {
      fr: 'Pré-admission chantier',
      en: 'Site pre-admission',
    },
    description: {
      fr: 'Permet de vérifier en amont la compatibilité des matériaux avec les autorisations du site.',
      en: 'Allows checking in advance whether materials are compatible with site authorizations.',
    },
    status: {
      fr: "À valider avec l'équipe ATRED avant transport",
      en: 'To be validated with the ATRED team',
    },
  },
]

export const commitments: Commitment[] = [
  {
    title: {
      fr: 'Double réponse chantier',
      en: 'Dual site solution',
    },
    description: {
      fr: 'Un même site pour déposer des déchets inertes compatibles et se fournir en graves issues du recyclage, sable ou graviers selon le besoin.',
      en: 'One site to bring compatible inert waste and source recycled aggregates, sand or gravel according to the need.',
    },
  },
  {
    title: {
      fr: 'Ancrage local',
      en: 'Local footprint',
    },
    description: {
      fr: 'Une plateforme implantée à Languidic, au service des entreprises du territoire et des chantiers du Morbihan.',
      en: 'A platform based in Languidic serving local companies and projects across Morbihan.',
    },
  },
  {
    title: {
      fr: 'Admission cadrée',
      en: 'Structured admission',
    },
    description: {
      fr: 'Validation préalable, pesée et suivi documentaire viennent sécuriser la prise en charge sans alourdir les échanges.',
      en: 'Pre-validation, weighing and document tracking secure handling without overcomplicating exchanges.',
    },
  },
]

export const faqs = [
  {
    question: {
      fr: 'Est-ce que vous fournissez un prix directement en ligne ?',
      en: 'Do you provide online pricing directly?',
    },
    answer: {
      fr: 'Non. Les tarifs de prise en charge ou de vente dépendent du matériau, du volume, du stock disponible et du contexte chantier. Le site permet surtout de qualifier le besoin avant devis.',
      en: 'No. Prices depend on material, volume, availability and the project context. The website primarily helps qualify the need before quotation.',
    },
  },
  {
    question: {
      fr: 'Puis-je déposer un chargement sans validation préalable ?',
      en: 'Can I bring a load without prior validation?',
    },
    answer: {
      fr: 'Il est préférable de nous contacter en amont afin de confirmer la conformité du chargement et les documents attendus.',
      en: 'It is better to contact us in advance to confirm load compliance and required documents.',
    },
  },
]

export const materialLabel = (material: Material) =>
  [material.name, material.size].filter(Boolean).join(' ')

export const localize = (text: LocalizedText) => text.fr
