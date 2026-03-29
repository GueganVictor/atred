export type LocaleCode = 'fr' | 'en'

export type LocalizedText = Record<LocaleCode, string>

type Service = {
  title: LocalizedText
  description: LocalizedText
  icon: string
}

type Stat = {
  value: string
  label: LocalizedText
}

type WasteCategory = {
  title: LocalizedText
  description: LocalizedText
  examples: LocalizedText[]
  caution?: LocalizedText
}

type Material = {
  slug: string
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
  location: 'Keryvon, 56440 Languidic',
  phoneDisplay: '+33 6 85 05 54 39',
  phoneLink: 'tel:+33685055439',
  email: 'isdi@atredvalorisation.fr',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Keryvon+56440+Languidic',
  serviceArea: 'Morbihan, Lorient, Hennebont, Lanester, Languidic et chantiers du bassin sud Bretagne',
  hours: [
    'Lundi au vendredi : 8h00 - 12h00 / 13h30 - 17h30',
    'Accueil chantier sur confirmation préalable',
  ],
}

export const heroStats: Stat[] = [
  {
    value: '+500 tonnes de',
    label: {
      fr: 'déchets inertes traités sur le site de Keryvon',
      en: 'inert waste treated on the Keryvon site',
    },
  },
]

export const services: Service[] = [
  {
    icon: 'ph:truck-trailer',
    title: {
      fr: 'Réception de déchets inertes',
      en: 'Inert waste reception',
    },
    description: {
      fr: 'Accueil des déblais, gravats, terres et matériaux conformes aux autorisations du site.',
      en: 'Reception of spoil, rubble, soil and materials compliant with site authorizations.',
    },
  },
  {
    icon: 'ph:arrows-clockwise',
    title: {
      fr: 'Valorisation matière',
      en: 'Material recovery',
    },
    description: {
      fr: 'Tri, concassage et remise en circulation de matériaux recyclés pour de nouveaux usages chantier.',
      en: 'Sorting, crushing and reintroduction of recycled materials for new construction uses.',
    },
  },
  {
    icon: 'ph:clipboard-text',
    title: {
      fr: 'Traçabilité et conformité',
      en: 'Traceability and compliance',
    },
    description: {
      fr: 'Accompagnement sur les démarches préalables, les pièces à fournir et le suivi documentaire.',
      en: 'Support for pre-admission formalities, required documents and tracking paperwork.',
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

export const recycledMaterials: Material[] = [
  {
    slug: 'grave-0-20',
    name: 'Grave recyclée',
    size: '0/20',
    image: '/images/material-grave-0-20.jpg',
    usage: {
      fr: 'Finition d’allées, couches de réglage et petits aménagements extérieurs.',
      en: 'Driveway finishing, levelling layers and small outdoor works.',
    },
    density: 1.7,
  },
  {
    slug: 'grave-0-31-5',
    name: 'Grave recyclée',
    size: '0/31,5',
    image: '/images/material-grave-0-31-5.jpg',
    usage: {
      fr: 'Sous-couches et plateformes techniques pour accès chantier ou voirie légère.',
      en: 'Sub-bases and technical platforms for site access or light roadworks.',
    },
    density: 1.8,
  },
  {
    slug: 'grave-0-80',
    name: 'Grave recyclée',
    size: '0/80',
    image: '/images/material-grave-0-80.jpg',
    usage: {
      fr: 'Remblais, chemins d’accès, couches d’assise et mises à niveau.',
      en: 'Fill, access roads, base layers and levelling works.',
    },
    density: 1.9,
  },
  {
    slug: 'grave-0-120',
    name: 'Grave recyclée',
    size: '0/120',
    image: '/images/material-grave-0-120.jpg',
    usage: {
      fr: 'Remblais lourds, plateformes industrielles et accès de chantier robustes.',
      en: 'Heavy fill, industrial platforms and robust site accesses.',
    },
    density: 2,
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
      fr: 'Disponible sur demande au moment du devis',
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
      fr: 'À valider avec l’équipe ATRED',
      en: 'To be validated with the ATRED team',
    },
  },
]

export const commitments: Commitment[] = [
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
      fr: 'Valorisation prioritaire',
      en: 'Recovery first',
    },
    description: {
      fr: 'Les matériaux compatibles sont orientés vers des usages secondaires plutôt que vers un simple enfouissement.',
      en: 'Compatible materials are redirected to secondary uses rather than only being buried.',
    },
  },
  {
    title: {
      fr: 'Cadre réglementaire clair',
      en: 'Clear regulatory framework',
    },
    description: {
      fr: 'Chaque admission s’inscrit dans un process de contrôle pour protéger le site, l’environnement et vos responsabilités.',
      en: 'Every admission follows a control process to protect the site, the environment and your responsibilities.',
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
      fr: 'Non. Les tarifs dépendent du matériau, du volume, de la disponibilité et du contexte chantier. Le site permet surtout de qualifier le besoin avant devis.',
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

export const localize = (text: LocalizedText, locale: string) => text[locale as LocaleCode] ?? text.fr
