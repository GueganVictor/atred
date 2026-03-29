const messages = {
  nav: {
    home: 'Accueil',
    company: "L'entreprise",
    waste: 'Déchets inertes',
    materials: 'Matériaux recyclés',
    process: 'Procédure & documents',
    contact: 'Contact',
  },
  actions: {
    askQuote: 'Demander un devis',
    contactUs: 'Nous contacter',
    viewProcess: 'Voir la procédure',
    viewMaterials: 'Voir les matériaux',
    checkAcceptedWaste: 'Vérifier les matériaux acceptés',
    sendRequest: 'Envoyer la demande',
    openMenu: 'Ouvrir le menu',
    openMap: "Voir l'accès au site",
  },
  common: {
    needHelp: "Besoin d'un échange rapide ?",
  },
  company: {
    name: 'ATRED Valorisation',
    taglineShort: 'Valorisation & stockage réglementé',
    taglineLong:
      'Plateforme dédiée aux déchets inertes du BTP, à leur valorisation matière et à leur traçabilité réglementaire.',
  },
  footer: {
    navigation: 'Navigation',
    contact: 'Contact direct',
    legal: 'Mentions légales',
  },
  home: {
    heroEyebrow: 'Plateforme de valorisation pour le BTP',
    heroTitle:
      'Vos déchets inertes méritent une filière claire, locale et réglementée.',
    heroDescription:
      'ATRED Valorisation accompagne les entreprises du bâtiment, des travaux publics et de la démolition pour la réception, la valorisation et le stockage de matériaux inertes sur le site de Keryvon.',
    heroImageAlt: 'Vue du site de valorisation ATRED',
    servicesEyebrow: 'Ce que nous faisons',
    servicesTitle: 'Une réponse simple pour déposer, valoriser et réemployer.',
    servicesDescription:
      'Le site a été pensé pour répondre aux attentes terrain des entreprises de travaux: lisibilité, conformité, rapidité de prise de contact et matériaux recyclés réutilisables.',
    processEyebrow: "Avant d'arriver sur site",
    processTitle: 'Un process court, mais cadré.',
    processDescription:
      'Nous sécurisons la compatibilité du chargement, la pesée et le suivi des matériaux afin de protéger le site et vos opérations.',
    commitmentsEyebrow: 'Pourquoi ATRED',
    commitmentsTitle: 'Une logique de chantier, pas un discours générique.',
    materialsEyebrow: 'Matériaux disponibles',
    materialsTitle: 'Des graves recyclées pour vos remblais et accès chantier.',
    ctaTitle: 'Validez votre besoin avant déplacement',
  },
  companyPage: {
    eyebrow: 'Le site et son rôle',
    title:
      'Une plateforme ancrée à Languidic pour gérer les matériaux inertes avec méthode.',
    description:
      "ATRED Valorisation s'inscrit dans la continuité du site de Keryvon, avec une approche plus structurée de la valorisation matière, de la réception chantier et de la traçabilité.",
    imageAlt: 'Pelleteuse et zone de traitement sur le site',
    storyEyebrow: 'Notre histoire',
    storyTitle: 'Du stockage à la valorisation.',
    storyDescription:
      "Le site s'est développé autour d'un besoin simple: proposer une solution claire aux professionnels qui doivent traiter leurs déblais et gravats dans un cadre maîtrisé.",
    storyParagraph1:
      "Le site de Keryvon accompagne depuis plus de vingt ans les flux de matériaux inertes issus des chantiers locaux. Cette expérience constitue aujourd'hui la base opérationnelle d'ATRED Valorisation.",
    storyParagraph2:
      "L'évolution de l'activité vise à privilégier autant que possible la valorisation des matériaux compatibles, afin de prolonger leur cycle de vie sur de nouveaux usages techniques.",
    storyParagraph3:
      "Cette approche s'appuie sur une réception cadrée, des vérifications préalables et une relation directe avec les entreprises du territoire.",
    siteEyebrow: 'Le site de Keryvon',
    siteTitle: 'Un outil local au service des chantiers bretons.',
    siteHint:
      "Accès, horaires et modalités d'admission sont confirmés au cas par cas selon la nature du chantier et des matériaux.",
    commitmentsEyebrow: 'Nos engagements',
    ctaTitle: 'Vous avez un chantier à préparer ?',
    ctaDescription:
      "Nous pouvons confirmer la compatibilité d'un chargement, préparer une réception ou étudier un besoin en matériaux recyclés.",
  },
  wastePage: {
    eyebrow: 'Admission des déchets inertes',
    title: 'Identifier rapidement ce qui peut être pris en charge sur le site.',
    description:
      'Les matériaux admis doivent rester conformes au périmètre réglementaire du site. En cas de doute, une validation préalable est indispensable avant transport.',
    imageAlt: 'Matériaux inertes acceptés sur la plateforme',
    rejectedEyebrow: 'À exclure ou confirmer',
    rejectedTitle: 'Les matières qui nécessitent une autre filière.',
    validationEyebrow: 'Vérification préalable',
    validationTitle: 'Un doute sur votre chargement ?',
    validationDescription:
      "Envoyez-nous la nature du matériau, son origine chantier et, si besoin, des photos. Nous confirmons l'orientation à retenir avant votre venue.",
  },
  materialsPage: {
    eyebrow: 'Sortie de valorisation',
    title:
      'Des graves recyclées pensées pour les usages chantier du quotidien.',
    description:
      "Nos matériaux recyclés répondent aux besoins de remblais, de couches d'assise, de plateformes et d'accès techniques. Les disponibilités sont confirmées selon production et stock.",
    imageAlt: 'Grave recyclée destinée aux chantiers',
    indicativeDensity: 'Densité indicative',
    ctaEyebrow: 'Disponibilités & devis',
    ctaTitle:
      "Besoin d'un volume précis ou d'une granulométrie en particulier ?",
    ctaDescription:
      "Le calculateur donne un ordre de grandeur. La validation finale se fait avec notre équipe selon le besoin chantier, le stock disponible et le mode d'enlèvement.",
  },
  processPage: {
    eyebrow: 'Mode opératoire',
    title: "Préparer l'arrivée sur site et sécuriser la traçabilité.",
    description:
      "Avant toute réception, nous vérifions la compatibilité du chargement et les informations utiles au suivi. L'objectif est d'éviter les blocages à l'entrée et de garantir une gestion lisible des flux.",
    imageAlt: 'Document de suivi des déchets inertes',
    documentsEyebrow: 'Pièces utiles',
    documentsTitle: 'Les documents à prévoir ou à demander.',
    documentsDescription:
      "La liste exacte dépend du chantier et de la nature des matériaux. Cette page sert de repère avant échange avec l'équipe.",
    reminderEyebrow: 'Important',
    reminderTitle: 'Aucune admission sensible sans validation préalable.',
    reminderDescription:
      "En présence d'un doute sur la nature du matériau, son origine ou sa conformité, contactez-nous avant tout transport. Cela évite un refus sur site et sécurise la responsabilité du chantier.",
  },
  contactPage: {
    eyebrow: 'Contact & devis',
    title:
      'Parlez-nous de votre chantier, de votre chargement ou de votre besoin matière.',
    description:
      "Nous revenons vers vous pour confirmer la compatibilité des matériaux, la disponibilité de graves recyclées ou les modalités d'accès au site.",
    imageAlt: "Zone de stockage et d'accès du site",
    directEyebrow: 'Contact direct',
    address: 'Adresse',
    phone: 'Téléphone',
    email: 'Email',
    hours: 'Horaires',
    faqEyebrow: 'Questions fréquentes',
    formEyebrow: 'Décrivez votre besoin',
    formTitle: 'Une demande simple, orientée chantier.',
    formDescription:
      "Indiquez l'origine du chantier, la nature des matériaux ou le besoin en graves. Cela nous permet de vous répondre plus vite et plus précisément.",
  },
  contact: {
    company: 'Entreprise',
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    project: 'Chantier / besoin',
    message: 'Message',
    formHint:
      "Sans endpoint externe configuré, l'envoi ouvre votre messagerie avec les informations déjà préparées.",
    sending: 'Envoi en cours...',
    formSuccess:
      'Votre demande a bien été préparée. Nous vous recontacterons dès que possible.',
    formError:
      "Une erreur est survenue lors de l'envoi. Vous pouvez aussi nous contacter directement par téléphone ou email.",
  },
  estimator: {
    eyebrow: 'Estimateur indicatif',
    title: 'Calculez un volume de base avant devis.',
    description:
      'Renseignez vos dimensions pour obtenir un ordre de grandeur en m3 et en tonnes selon le matériau sélectionné.',
    material: 'Matériau',
    length: 'Longueur (m)',
    width: 'Largeur (m)',
    thickness: 'Épaisseur (cm)',
    estimatedVolume: 'Volume estimé',
    estimatedTonnage: 'Tonnage estimé',
    disclaimer:
      'Estimation indicative non contractuelle. Le besoin réel dépend du compactage, du chantier et de la nature exacte du matériau.',
  },
  legal: {
    eyebrow: 'Cadre légal',
    title: 'Mentions légales à compléter avant mise en production.',
    description:
      'Cette page sert de placeholder propre pour la V1. Les informations juridiques finales devront être validées avant publication.',
    placeholder1:
      'À compléter: raison sociale exacte, forme juridique, capital, SIRET, RCS, siège social et responsable de publication.',
    placeholder2:
      "À compléter: hébergeur du site, politique de traitement des données de contact et modalités d'exercice des droits.",
    placeholder3:
      'À compléter: informations sur les cookies, statistiques et toute intégration tierce utilisée en production.',
  },
} as const

export const useCopy = () => {
  return (path: string) => {
    let current: unknown = messages

    for (const key of path.split('.')) {
      if (!current || typeof current !== 'object' || !(key in current)) {
        return path
      }

      current = (current as Record<string, unknown>)[key]
    }

    return typeof current === 'string' ? current : path
  }
}
