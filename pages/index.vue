<template>
  <div class="bg-white">
    <LandingHero></LandingHero>

    <main class="isolate">
      <!-- Content section -->
      <div class="px-6 mx-auto mt-8 max-w-7xl sm:mt-0 lg:px-8 xl:mt-12">
        <div class="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Notre mission
          </h2>
          <div class="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
            <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p class="text-xl leading-8 text-gray-600">
                Parce que les déchets inertes peuvent être recyclés et
                valorisés, Atred Valorisation a mis en place sa propre
                plateforme de traitement des dechets inertes. Cette plateforme
                est équipée d’un cribleur et d’un concasseur afin de les
                transformer en matières premières secondaires. Les déchets
                inertes qui ne peuvent pas être valorisés sont traités puis
                enfouis.
              </p>
              <div class="max-w-xl mt-10 text-base leading-7 text-gray-700">
                <p>
                  Béton concassé, terre végétale et gravats pour remblais, nous
                  recyclons les déchets inertes afin d’intégrer l’écologie
                  industrielle et territoriale dans notre cœur de stratégie et
                  limiter le flux de déchets ultimes. Les matériaux recyclés
                  sont revalorisés sur de nouveaux chantiers à des prix
                  avantageux. Nous sommes engagés dans l’économie circulaire
                  pour garantir le bien-être de l’environnement, nous œuvrons en
                  favorisant le tri et un réemploi des matières.
                </p>
              </div>
            </div>
            <div class="lg:flex lg:flex-auto lg:justify-center">
              <dl class="w-64 space-y-10 xl:w-80">
                <div
                  v-for="stat in stats"
                  :key="stat.label"
                  class="flex flex-col-reverse gap-y-4"
                >
                  <dt class="text-lg leading-7 text-gray-600">
                    {{ stat.label }}
                  </dt>
                  <dd
                    class="text-4xl font-semibold tracking-tight text-gray-900"
                  >
                    {{ stat.value }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <!-- Logo cloud -->
      <div class="relative my-32 isolate -z-10 sm:mt-48">
        <div
          class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]"
        >
          <svg
            class="h-[40rem] w-[80rem] flex-none stroke-gray-200"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width="200"
                height="200"
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="50%" class="overflow-visible fill-gray-50">
              <path
                d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            />
          </svg>
        </div>
        <div class="px-6 mx-auto max-w-7xl lg:px-8">
          <h2
            class="text-2xl font-semibold leading-8 text-center text-gray-900"
          >
            Consultez le cahier des charges Atred Valorisation
          </h2>
          <div class="flex justify-center">
            <a
              download
              class="flex items-center justify-center p-2 mt-6 rounded-full cursor-pointer bg-primary hover:bg-opacity-80"
            >
              <Icon
                name="carbon:generate-pdf"
                class="w-12 h-12 p-2 text-white"
              ></Icon>
            </a>
          </div>
          <div></div>
        </div>
      </div>

      <!-- Values section -->
      <div class="px-6 mx-auto mt-36 max-w-7xl sm:mt-48 lg:px-8">
        <div class="max-w-2xl mx-auto lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Comment déposer vos déchets inertes
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <dl
          class="grid max-w-2xl grid-cols-1 mx-auto mt-16 text-base leading-7 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          <div v-for="value in values" :key="value.name">
            <dt class="text-lg font-semibold text-gray-900">
              {{ value.name }}
            </dt>
            <dd class="mt-1 text-gray-600">{{ value.description }}</dd>
          </div>
        </dl>
      </div>
      <!-- Image section -->
      <div
        class="relative my-32 overflow-hidden sm:mt-40 xl:mx-auto rounded-3xl max-w-7xl"
      >
        <img
          src="~/assets/img/hero.jpeg"
          alt=""
          class="aspect-[5/2] w-full object-cover hover:scale-105 transition"
        />
        <h1
          class="absolute text-5xl font-semibold text-white bottom-16 left-20"
        >
          Site de Keryvon
        </h1>
      </div>
    </main>
  </div>
</template>

<script setup>
const stats = [
  { label: "de taux de revalorisation", value: "83%" },
  { label: "d'existence", value: "+ 20 ans" },
  { label: "de dechets traités", value: "+500 tonnes" },
];
const values = [
  {
    name: "1. Remplissez la Déclaration d'Admission Préalable",
    description:
      "Avant même d'arriver sur le site, il faut remplir le DAP, afin de valider votre chargement et d'en assurer son contenu.",
  },
  {
    name: "2. Passage à la pesée",
    description:
      "Le passage sur le pont bascule à l'entrée du site, avec pesée, est necéssaire afin de connaître le poids des déchets déposés.",
  },
  {
    name: "3. Dépôt des matériaux",
    description:
      "Les matériaux sont déposés directement au droit de la zone de stockage, avant d'être envoyer en recyclage ou dans la cuvette.",
  },
  {
    name: "4. Traitements des déchets",
    description:
      "Une fois reçu les déchets sont triés et envoyer en concassage pour les transformer en gravats recyclés.",
  },
];
</script>
