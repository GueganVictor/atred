<template>
  <div>
    <AppSection>
      <SectionHeading
        :title="wastePageContent.tableTitle"
        :description="wastePageContent.tableDescription"
      />

      <div class="mt-6 overflow-hidden border border-neutral-300 bg-white">
        <div
          class="hidden grid-cols-[6.5rem_minmax(0,15rem)_1fr] gap-4 border-b border-neutral-300 bg-neutral-100 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-neutral-700 md:grid"
        >
          <span>Visuel</span>
          <span>Famille</span>
          <span>Repère</span>
        </div>

        <article
          v-for="item in wasteTableItems"
          :key="item.title"
          class="grid gap-4 border-b border-neutral-300 p-4 last:border-b-0 sm:px-5 md:grid-cols-[6.5rem_minmax(0,15rem)_1fr] md:items-center"
        >
          <div class="overflow-hidden border border-neutral-300 bg-neutral-100">
            <NuxtImg
              :src="item.image"
              :alt="item.imageAlt"
              class="h-20 w-full object-cover"
              sizes="96px"
            />
          </div>

          <div>
            <h2 class="text-lg font-semibold text-neutral-900 sm:text-xl">
              {{ item.title }}
            </h2>
          </div>

          <div>
            <p class="text-base/7 text-neutral-700">
              {{ item.description }}
            </p>
            <p class="mt-2 text-sm/6 text-brand-900">
              Exemples : <span class="font-medium">{{ item.examples.join(', ') }}</span>
            </p>
          </div>
        </article>
      </div>
    </AppSection>

    <AppSection flush-top>
      <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <AppCard class="bg-amber-50!">
          <AppEyebrow class="text-amber-950!">{{ wastePageContent.rejectedTitle }}</AppEyebrow>
          <p class="mt-3 text-sm/7 text-amber-900">
            {{ wastePageContent.rejectedDescription }}
          </p>
          <ul class="mt-5 space-y-2 text-sm/7 text-amber-800 font-medium">
            <li v-for="item in wasteRejected" :key="item">- {{ item }}</li>
          </ul>
        </AppCard>

        <AppCard>
          <AppEyebrow>{{ wastePageContent.reminderTitle }}</AppEyebrow>
          <p class="mt-3 text-sm/7 text-neutral-700 sm:text-base/7">
            {{ wastePageContent.reminderText }}
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <AppLinkButton to="/contact"> Nous contacter </AppLinkButton>
            <AppLinkButton to="/procedure-documents" variant="secondary">
              Voir le BSDI
            </AppLinkButton>
          </div>
        </AppCard>
      </div>
    </AppSection>
  </div>
</template>

<script setup lang="ts">
import {
  wastePageContent,
  wasteRejected,
  wasteTableItems,
} from '~/data/site-content'

usePageSeo({
  title: 'Déchets inertes',
  description:
    'Familles admises, repères simples et admission préalable avant transport des matériaux inertes.',
  path: '/dechets-inertes',
  image: '/images/keryvon-recycling.jpeg',
})
</script>
