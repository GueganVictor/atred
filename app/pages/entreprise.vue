<template>
  <div>
    <AppSection>
      <SectionHeading
        eyebrow="ATRED"
        title="Nos activités"
        description="Trois axes simples: accueil de matériaux inertes, valorisation des matériaux et vente de granulats."
      />

      <div class="mt-6 grid gap-4 lg:grid-cols-3">
        <AppCard v-for="activity in activityBlocks" :key="activity.title">
          <h2 class="text-xl font-semibold text-neutral-900">
            {{ activity.title }}
          </h2>
          <p class="mt-3 text-sm/7 text-neutral-700">
            {{ activity.description }}
          </p>
        </AppCard>
      </div>
    </AppSection>

    <AppSection flush-top>
      <div class="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div class="grid gap-4 sm:grid-cols-2">
          <div
            class="overflow-hidden border border-neutral-300 bg-neutral-200 sm:col-span-2"
          >
            <NuxtImg
              :src="companyGallery[1].src"
              :alt="companyGallery[1].alt"
              class="h-72 w-full object-cover"
            />
          </div>
          <div class="overflow-hidden border border-neutral-300 bg-neutral-200">
            <video
              class="h-56 w-full object-cover"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              :poster="companyGallery[2].src"
            >
              <source src="/videos/keryvon-site.mov" type="video/quicktime" />
            </video>
          </div>
          <div class="overflow-hidden border border-neutral-300 bg-neutral-200">
            <NuxtImg
              :src="companyGallery[3].src"
              :alt="companyGallery[3].alt"
              class="h-56 w-full object-cover"
              sizes="(max-width: 639px) 100vw, 25vw"
            />
          </div>
        </div>

        <AppPanel class="p-6 sm:p-7">
          <AppEyebrow>{{ keryvonContent.title }}</AppEyebrow>
          <p class="mt-3 text-sm/7 text-neutral-700 sm:text-base/7">
            {{ keryvonContent.description }}
          </p>

          <ul class="mt-5 space-y-2 text-sm/7 text-neutral-800">
            <li v-for="point in keryvonContent.points" :key="point">
              - {{ point }}
            </li>
          </ul>

          <div
            class="mt-6 border-t border-neutral-200 pt-5 text-sm/7 text-neutral-700"
          >
            <p>{{ company.location }}</p>
            <p>{{ company.serviceArea }}</p>
            <p>{{ company.hours[0] }}</p>
          </div>
        </AppPanel>
      </div>
    </AppSection>

  </div>
</template>

<script setup lang="ts">
import { company } from '~/data/site'
import {
  activityBlocks,
  companyGallery,
  keryvonContent,
} from '~/data/site-content'

usePageSeo({
  title: "L'entreprise",
  description:
    'Découvrez les activités ATRED, le site de Keryvon et les services proposés aux chantiers.',
  path: '/entreprise',
  image: '/images/hero-site.jpg',
})
</script>
