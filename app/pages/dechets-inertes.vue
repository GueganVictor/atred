<script setup lang="ts">
import { localize, rejectedMaterials, wasteCategories } from '~/data/site'

const { locale, t } = useI18n()
const localePath = useLocalePath()

usePageSeo({
  title: 'Déchets inertes acceptés',
  description: 'Consultez les familles de matériaux inertes acceptées sur le site ATRED et les cas qui nécessitent une validation préalable.',
  path: '/dechets-inertes',
  image: '/images/dechets-acceptes-1.jpg',
})
</script>

<template>
  <div>
    <PageHero
      :eyebrow="t('wastePage.eyebrow')"
      :title="t('wastePage.title')"
      :description="t('wastePage.description')"
      image="/images/dechets-acceptes-1.jpg"
      :image-alt="t('wastePage.imageAlt')"
    />

    <section class="container-shell section-space pt-0">
      <div class="grid gap-6 lg:grid-cols-2">
        <article
          v-for="category in wasteCategories"
          :key="localize(category.title, locale)"
          class="grid-card overflow-hidden"
        >
          <div class="relative mb-6 overflow-hidden rounded-xl">
            <NuxtImg
              :src="category === wasteCategories[0] ? '/images/dechets-acceptes-1.jpg' : '/images/dechets-acceptes-2.jpg'"
              :alt="localize(category.title, locale)"
              class="h-56 w-full object-cover"
            />
          </div>
          <h2 class="font-display text-2xl font-semibold leading-tight text-neutral-900">
            {{ localize(category.title, locale) }}
          </h2>
          <p class="mt-4 text-sm leading-7 text-neutral-700">
            {{ localize(category.description, locale) }}
          </p>
          <ul class="mt-5 space-y-3">
            <li
              v-for="example in category.examples"
              :key="localize(example, locale)"
              class="flex gap-3 rounded-xl bg-neutral-50 px-4 py-3 text-sm text-neutral-800"
            >
              <Icon name="ph:check-circle" class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span>{{ localize(example, locale) }}</span>
            </li>
          </ul>
          <p v-if="category.caution" class="mt-5 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm leading-7 text-brand-700">
            {{ localize(category.caution, locale) }}
          </p>
        </article>
      </div>
    </section>

    <section class="container-shell section-space pt-0">
      <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="grid-card bg-neutral-900 text-white">
          <p class="eyebrow text-brand-100">{{ t('wastePage.rejectedEyebrow') }}</p>
          <h2 class="mt-3 font-display text-3xl font-semibold leading-tight">
            {{ t('wastePage.rejectedTitle') }}
          </h2>
          <ul class="mt-6 space-y-3">
            <li
              v-for="item in rejectedMaterials"
              :key="localize(item, locale)"
              class="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-100"
            >
              {{ localize(item, locale) }}
            </li>
          </ul>
        </div>

        <div class="surface-panel p-6 sm:p-8">
          <SectionHeading
            :eyebrow="t('wastePage.validationEyebrow')"
            :title="t('wastePage.validationTitle')"
            :description="t('wastePage.validationDescription')"
          />
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink :to="localePath('/contact')" class="cta-primary">
              {{ t('actions.contactUs') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/procedure-documents')" class="cta-secondary">
              {{ t('actions.viewProcess') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
