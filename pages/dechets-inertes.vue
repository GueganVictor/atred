<template>
  <div class="relative px-6 py-10 overflow-hidden isolate sm:py-16 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
        Les déchets inertes
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-500">
        Ces déchets issus du secteur du bâtiment et des travaux publics doivent
        suivre les règlementations en vigueur concernant le traitement et le
        recyclage afin de préserver l’environnement.
      </p>
    </div>
  </div>
  <div class="max-w-6xl mx-auto bg-white">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Les matériaux acceptés
        </h2>
        <p class="mt-2 leading-8 text-gray-600">
          Découvrez les matériaux autorisés sur notre site.
        </p>
      </div>
      <div
        class="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-2 auto-rows-fr sm:mt-6 md:mx-0 md:max-w-none md:grid-cols-2"
      >
        <article
          v-for="post in posts"
          :key="post.id"
          class="relative flex flex-col justify-end px-8 pt-48 pb-8 overflow-hidden bg-gray-900 isolate rounded-2xl md:pt-80"
        >
          <img
            :src="post.imageUrl"
            alt=""
            class="absolute inset-0 object-cover w-full h-full -z-10"
          />
          <div
            class="absolute inset-0 opacity-75 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"
          />
          <div
            class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"
          />
          <h3 class="mt-3 text-xl leading-6 text-white">
            <a :href="post.href">
              <span class="absolute inset-0" />
              {{ post.title }}
            </a>
            <p class="text-sm text-gray-400">
              {{ post.description }}
            </p>
          </h3>
        </article>
      </div>
    </div>
  </div>
  <div class="py-24 bg-white sm:py-32">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div
        class="grid items-center max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-24 md:mx-0 md:max-w-none md:grid-cols-2"
      >
        <div class="md:pr-4">
          <div class="px-6 rounded-3xl sm:px-12 md:max-w-lg md:px-8 xl:px-10">
            <img
              class="object-contain w-auto h-48 mx-auto md:h-full"
              src="~/assets/img/content/BSD.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
            <h1
              class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Document légaux et obligatoires
            </h1>
            <div class="max-w-xl">
              <p class="mt-6">
                Afin d’assurer le contrôle et la traçabilité de vos déchets, le
                Bordereau de Suivi des Déchets d’Inertes doit être complété à
                chaque étape de traitement du déchet et doit toujours
                accompagner le déchet. Ce BSDI doit être conservé pour justifier
                le traitement de celui-ci.
              </p>
              <p class="mt-8">
                Ce document légal est à compléter et à renvoyer avec votre devis
                signé pour valider la demande de prise en charge de vos déchets.
              </p>
            </div>
          </div>
          <div class="flex mt-10">
            <a href="#" class="text-base font-semibold leading-7 text-primary"
              >Télécharger le BSDI <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DechetImg1 from "~/assets/img/content/dechets1.jpg";
import DechetImg2 from "~/assets/img/content/dechets2.jpg";

const posts = [
  {
    id: 1,
    title: "Terre et matériaux de terrassement",
    href: "#",
    description: "Cailloux, déblais, enrobés, bitumeux sans goudron...",
    imageUrl: DechetImg1,
  },
  {
    id: 2,
    title: "Déchets de construction et de démolition",
    href: "#",
    description:
      "Béton, brique, tuiles et céramiques, mélanges bitumeux, terres et pierres...",
    imageUrl: DechetImg2,
  },
  // More posts...
];
</script>
