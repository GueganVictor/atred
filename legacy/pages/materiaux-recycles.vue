<template>
  <div
    class="relative px-6 py-24 overflow-hidden bg-black isolate sm:py-32 lg:px-8"
  >
    <img
      src="~/assets/img/bg.png"
      alt=""
      class="absolute inset-0 object-cover w-full h-full opacity-40 -z-10"
    />
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Achat de matériaux recyclés
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-200">
        Les déchets inertes que nous collectons sont triés puis recyclés dans le
        but d’être réutilisé sur vos chantiers des travaux publics et du
        bâtiment.
      </p>
    </div>
  </div>
  <div class="py-16 bg-white">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="mb-8">
        <h1 class="text-xl font-bold sm:text-2xl">
          Nos matériaux disponibles à la vente
        </h1>
      </div>
      <div
        class="grid grid-cols-2 gap-2 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3"
      >
        <div
          v-for="mat in materials"
          class="flex flex-col items-center p-8 bg-gray-400/5 sm:p-10"
        >
          <img
            class="object-cover h-32 aspect-square"
            :src="mat.src"
            :alt="mat.name"
          />
          <p class="mt-4 text-xl font-semibold text-center">{{ mat.name }}</p>
          <p class="mt-1 text-sm text-center text-gray-500 aspect">
            {{ mat.desc }}
          </p>
        </div>
      </div>
    </div>

    <div class="px-6 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Vous souhaitez nous achetez des graves ?
        </h2>

        <div class="flex items-center justify-center mt-8 gap-x-6">
          <LinkRouter
            href="/contact"
            class="rounded-md cursor-pointer bg-primary px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >N'hésitez pas à nous contactez !</LinkRouter
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gravat020 from "~/assets/img/content/gravats/gravats0-20.jpg";
import gravat0315 from "~/assets/img/content/gravats/gravats0-315.jpg";
import gravat080 from "~/assets/img/content/gravats/gravats0-80.jpg";
import gravat0120 from "~/assets/img/content/gravats/gravats0-120.jpg";

const materials = [
  {
    src: gravat020,
    name: "Gravats 0/20",
    desc: "Le gravillon concassé 0/20 s'utilise pour la réalisation d'un aménagement extérieur : cour, allée, jardin.",
  },
  {
    src: gravat0315,
    name: "Gravats 0/31.5",
    desc: "La grave 0/31,5 est un mélange de sable et de gravier. Il permet de réaliser un ouvrage en béton et des travaux de maçonnerie courante.",
  },
  {
    src: gravat080,
    name: "Gravats 0/80",
    desc: "La grave 0/80 est idéale pour le remblai ou pour les sous-couches d’assise dans vos chantiers.",
  },
  {
    src: gravat0120,
    name: "Gravats 0/120",
    desc: "La grave 0/120 est désigné pour les remblais d'accès de chantiers, remblais de dalles de maisons ou remblais industriels.",
  },
];
</script>
