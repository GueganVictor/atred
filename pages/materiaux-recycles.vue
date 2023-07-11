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
        class="grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-5"
      >
        <div
          v-for="mat in materials"
          class="flex flex-col items-center p-8 bg-gray-400/5 sm:p-10"
        >
          <img class="object-contain h-32" :src="mat.src" alt="Transistor" />
          <p class="mt-2 text-lg text-center">{{ mat.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const materials = [
  {
    src: "https://www.breizh-recyclage.fr/wp-content/uploads/2020/07/materieux-recycles-0-10-900x900px-150x150.png",
    name: "Gravats 0-10",
  },
  {
    src: "https://www.breizh-recyclage.fr/wp-content/uploads/2020/07/materieux-recycles-0-10-900x900px-150x150.png",
    name: "Gravats 0-10",
  },
  {
    src: "https://www.breizh-recyclage.fr/wp-content/uploads/2020/07/materieux-recycles-0-10-900x900px-150x150.png",
    name: "Gravats 0-10",
  },
  {
    src: "https://www.breizh-recyclage.fr/wp-content/uploads/2020/07/materieux-recycles-0-10-900x900px-150x150.png",
    name: "Gravats 0-10",
  },
  {
    src: "https://www.breizh-recyclage.fr/wp-content/uploads/2020/07/materieux-recycles-0-10-900x900px-150x150.png",
    name: "Gravats 0-10",
  },
  {
    src: "https://www.breizh-recyclage.fr/wp-content/uploads/2020/07/materieux-recycles-0-10-900x900px-150x150.png",
    name: "Gravats 0-10",
  },
  {
    src: "https://www.breizh-recyclage.fr/wp-content/uploads/2020/07/materieux-recycles-0-10-900x900px-150x150.png",
    name: "Gravats 0-10",
  },
  {
    src: "https://www.breizh-recyclage.fr/wp-content/uploads/2020/07/materieux-recycles-0-10-900x900px-150x150.png",
    name: "Gravats 0-10",
  },
  {
    src: "https://www.breizh-recyclage.fr/wp-content/uploads/2020/07/materieux-recycles-0-10-900x900px-150x150.png",
    name: "Gravats 0-10",
  },
];
</script>
