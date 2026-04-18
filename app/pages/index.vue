<template>
  <div>
    <section>
      <AppContainer class="py-6 sm:py-8 lg:py-10">
        <AppPanel class="relative min-h-96 overflow-hidden p-6 sm:px-8 sm:py-7 lg:min-h-112">
          <div class="absolute inset-y-0 right-0 hidden w-full md:block md:w-[58%]">
            <NuxtImg
              :src="companyGallery[0].src"
              :alt="companyGallery[0].alt"
              class="size-full object-cover object-center"
            />
            <div
              class="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.96)_24%,rgba(255,255,255,0.82)_40%,rgba(255,255,255,0.4)_60%,rgba(255,255,255,0.08)_82%,rgba(255,255,255,0)_100%)]"
            />
          </div>

          <div class="relative z-10 max-w-xl">
            <AppEyebrow>{{ homeContent.eyebrow }}</AppEyebrow>
            <h1
              class="mt-2 max-w-xl font-display text-3xl/tight font-semibold text-neutral-900 sm:text-4xl lg:text-[2.85rem]"
            >
              {{ homeContent.title }}
            </h1>
            <p class="mt-4 max-w-xl text-sm/7 text-neutral-700 sm:text-base/7">
              {{ homeContent.description }}
            </p>

            <ul class="mt-5 space-y-2 text-sm/7 text-neutral-800">
              <li
                v-for="point in homeContent.materialPoints"
                :key="point"
                class="flex items-center gap-2"
              >
                <Icon
                  name="ph:check-square"
                  class="size-4 shrink-0 text-brand-700"
                />
                <span>{{ point }}</span>
              </li>
            </ul>

            <div class="mt-6 flex flex-wrap gap-3">
              <AppLinkButton to="/materiaux-recycles">
                Voir les matériaux
              </AppLinkButton>
              <AppLinkButton to="/dechets-inertes" variant="secondary">
                Déposer des inertes
              </AppLinkButton>
            </div>
          </div>
        </AppPanel>
      </AppContainer>
    </section>

    <AppSection flush-top>
      <div class="grid gap-6">
        <div class="space-y-5">
          <SectionHeading
            eyebrow="Matériaux"
            :title="homeContent.materialBlockTitle"
          />
        </div>

        <div class="grid gap-4 grid-cols-6">
          <MaterialTile
            v-for="material in homeMaterials"
            :key="material.slug"
            :material="material"
            compact
          />
        </div>
        <div>
          <AppLinkButton to="/materiaux-recycles" variant="secondary">
            Ouvrir le catalogue
          </AppLinkButton>
        </div>
      </div>
    </AppSection>

    <AppSection flush-top>
      <div class="grid gap-6">
        <AppPanel class="p-6 sm:p-7">
          <AppEyebrow>Déchets inertes</AppEyebrow>
          <h2
            class="mt-2 font-display text-2xl/tight font-semibold text-neutral-900 sm:text-[2rem]"
          >
            {{ homeContent.wasteBlockTitle }}
          </h2>

          <div class="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              v-for="card in wasteCards"
              :key="card.title"
              class="border border-neutral-300 bg-neutral-50 p-4"
            >
              <h3 class="text-lg font-semibold text-neutral-900">
                {{ card.title }}
              </h3>
              <ul class="mt-3 space-y-1 text-sm/7 text-neutral-800">
                <li v-for="item in card.items" :key="item">- {{ item }}</li>
              </ul>
            </div>
          </div>

          <div class="mt-6 flex flex-wrap gap-3">
            <AppLinkButton to="/dechets-inertes">
              Voir les matériaux admis
            </AppLinkButton>
            <AppLinkButton to="/contact" variant="secondary">
              Valider un chargement
            </AppLinkButton>
          </div>
        </AppPanel>

        <AppPanel class="overflow-hidden p-0">
          <div class="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
            <div
              class="overflow-hidden border-b border-neutral-300 md:border-r md:border-b-0"
            >
              <NuxtImg
                :src="companyGallery[1].src"
                :alt="companyGallery[1].alt"
                class="size-full min-h-64 object-cover"
                sizes="(max-width: 767px) 100vw, 40vw"
              />
            </div>
            <div class="p-6 sm:p-7">
              <AppEyebrow>{{ keryvonContent.title }}</AppEyebrow>
              <p class="mt-3 text-sm/7 text-neutral-700 sm:text-base/7">
                {{ keryvonContent.description }}
              </p>
              <ul class="mt-5 space-y-2 text-sm/7 text-neutral-800">
                <li v-for="point in keryvonContent.points" :key="point">
                  - {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </AppPanel>
      </div>
    </AppSection>

  </div>
</template>

<script setup lang="ts">
import {
  companyGallery,
  homeContent,
  homeMaterials,
  keryvonContent,
  wasteCards,
} from '~/data/site-content'

usePageSeo({
  title: 'Accueil',
  description:
    'ATRED Valorisation vend des granulats et accueille les matériaux inertes sur le site de Keryvon à Languidic.',
  path: '/',
  image: '/images/hero-site.jpg',
})
</script>
