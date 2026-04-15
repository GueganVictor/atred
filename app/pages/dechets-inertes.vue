<template>
  <div>
    <PageHero
      :eyebrow="t('wastePage.eyebrow')"
      :title="t('wastePage.title')"
      :description="t('wastePage.description')"
      image="/images/dechets-acceptes-1.jpg"
      :image-alt="t('wastePage.imageAlt')"
    />

    <AppSection flush-top>
      <div class="grid gap-6 lg:grid-cols-2">
        <AppCard
          v-for="category in wasteCategories"
          :key="localize(category.title)"
          as="article"
          class="overflow-hidden"
        >
          <div class="relative mb-6 overflow-hidden rounded-xl">
            <NuxtImg
              :src="
                category === wasteCategories[0]
                  ? '/images/dechets-acceptes-1.jpg'
                  : '/images/dechets-acceptes-2.jpg'
              "
              :alt="localize(category.title)"
              class="h-56 w-full object-cover"
            />
          </div>
          <h2
            class="font-display text-2xl/tight font-semibold text-neutral-900"
          >
            {{ localize(category.title) }}
          </h2>
          <p class="mt-4 text-sm/7 text-neutral-700">
            {{ localize(category.description) }}
          </p>
          <ul class="mt-5 space-y-3">
            <li
              v-for="example in category.examples"
              :key="localize(example)"
              class="flex gap-3 rounded-xl bg-neutral-50 px-4 py-3 text-sm text-neutral-800"
            >
              <Icon
                name="ph:check-circle"
                class="mt-0.5 size-5 shrink-0 text-brand-600"
              />
              <span>{{ localize(example) }}</span>
            </li>
          </ul>
          <p
            v-if="category.caution"
            class="mt-5 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm/7 text-brand-700"
          >
            {{ localize(category.caution) }}
          </p>
        </AppCard>
      </div>
    </AppSection>

    <AppSection flush-top>
      <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <AppCard class="bg-neutral-900! text-white">
          <AppEyebrow tone="inverse">
            {{ t('wastePage.rejectedEyebrow') }}
          </AppEyebrow>
          <h2 class="mt-3 font-display text-3xl/tight font-semibold">
            {{ t('wastePage.rejectedTitle') }}
          </h2>
          <ul class="mt-6 space-y-3">
            <li
              v-for="item in rejectedMaterials"
              :key="localize(item)"
              class="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-100"
            >
              {{ localize(item) }}
            </li>
          </ul>
        </AppCard>

        <AppPanel class="p-6 sm:p-8">
          <SectionHeading
            :eyebrow="t('wastePage.validationEyebrow')"
            :title="t('wastePage.validationTitle')"
            :description="t('wastePage.validationDescription')"
          />
          <div class="mt-8 flex flex-wrap gap-3">
            <AppLinkButton to="/contact">
              {{ t('actions.contactUs') }}
            </AppLinkButton>
            <AppLinkButton to="/procedure-documents" variant="secondary">
              {{ t('actions.viewProcess') }}
            </AppLinkButton>
          </div>
        </AppPanel>
      </div>
    </AppSection>
  </div>
</template>

<script setup lang="ts">
import { localize, rejectedMaterials, wasteCategories } from '~/data/site'

const t = useCopy()

usePageSeo({
  title: 'Déchets inertes acceptés',
  description:
    'Consultez les familles de déchets inertes prises en charge sur le site ATRED et les cas qui nécessitent une validation préalable.',
  path: '/dechets-inertes',
  image: '/images/dechets-acceptes-1.jpg',
})
</script>
