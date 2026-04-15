<template>
  <div>
    <section class="relative isolate overflow-hidden">
      <AppContainer class="py-5 sm:py-7 lg:py-9">
        <div class="relative">
          <div
            class="relative overflow-hidden rounded-4xl bg-brand-600 shadow-lg"
          >
            <div
              class="pointer-events-none absolute inset-0"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute -left-20 bottom-0 size-56 rounded-full bg-brand-300/20 blur-3xl sm:size-72"
              aria-hidden="true"
            />

            <div class="relative grid gap-0 lg:grid-cols-2">
              <div class="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
                <div class="max-w-xl">
                  <AppEyebrow tone="inverse">
                    {{ t('home.heroEyebrow') }}
                  </AppEyebrow>
                  <h1
                    class="mt-5 max-w-xl font-display text-4xl/tight font-semibold text-white sm:text-5xl"
                  >
                    {{ t('home.heroTitle') }}
                  </h1>
                  <p class="mt-5 max-w-md text-sm/7 text-brand-100/90 sm:text-base/7">
                    {{ t('home.heroIntro') }}
                  </p>

                  <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <AppLinkButton
                      to="/materiaux-recycles"
                      variant="light"
                      class="w-full sm:w-auto"
                    >
                      {{ t('actions.buyMaterials') }}
                      <Icon name="ph:arrow-right" class="ml-2 size-4" />
                    </AppLinkButton>
                    <AppLinkButton
                      to="/dechets-inertes"
                      variant="ghost-light"
                      class="w-full sm:w-auto"
                    >
                      {{ t('actions.checkAcceptedWaste') }}
                      <Icon name="ph:shield-check" class="ml-2 size-4" />
                    </AppLinkButton>
                  </div>
                </div>
              </div>

              <div class="relative min-h-72 lg:min-h-104">
                <NuxtImg
                  src="/images/hero-site.jpg"
                  alt="Vue du site ATRED à Languidic"
                  class="absolute inset-0 size-full object-cover"
                  sizes="100vw lg:55vw"
                />
                <div
                  class="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,65,58,0.72)_0%,rgba(12,65,58,0.14)_42%,rgba(12,65,58,0.08)_100%)] lg:bg-[linear-gradient(90deg,rgba(12,65,58,1)_2%,rgba(12,65,58,0.2)_38%,rgba(12,65,58,0)_78%)]"
                />
              </div>
            </div>
          </div>

          <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
            <article
              class="group relative overflow-hidden rounded-4xl border border-neutral-200 bg-white p-7 shadow-[0_18px_40px_-34px_rgba(24,33,30,0.35)] transition-shadow hover:shadow-[0_24px_50px_-32px_rgba(24,33,30,0.42)] sm:p-8 lg:p-9"
            >
              <div class="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div class="h-28 w-full shrink-0 overflow-hidden rounded-3xl sm:size-24">
                  <NuxtImg
                    src="/images/material-grave-0-31-5.jpg"
                    alt="Granulats recyclés disponibles à la vente"
                    class="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 639px) 100vw, 96px"
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-2">
                    <Icon name="ph:arrows-clockwise" class="size-4 text-brand-400" />
                    <span
                      class="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-500"
                    >
                      {{ t('home.heroMaterialsLabel') }}
                    </span>
                  </div>
                  <h2
                    class="mt-3 max-w-md font-display text-xl/tight font-semibold text-neutral-900 sm:text-[1.35rem]/tight"
                  >
                    {{ t('home.heroMaterialsTitle') }}
                  </h2>
                  <p class="mt-3 max-w-lg text-sm/7 text-neutral-600">
                    {{ t('home.heroMaterialsDescription') }}
                  </p>
                </div>
              </div>

              <div class="mt-6 flex flex-wrap gap-2.5">
                <span
                  v-for="material in heroMaterialExamples"
                  :key="material.slug"
                  class="rounded-full border border-neutral-200 bg-brand-50 px-3 py-1 text-xs font-medium text-neutral-900"
                >
                  {{ materialLabel(material) }}
                </span>
              </div>

              <p class="mt-6 max-w-xl text-sm/7 text-neutral-700">
                {{ t('home.heroMaterialsDetail') }}
              </p>
            </article>

            <article
              class="group relative overflow-hidden rounded-4xl border border-neutral-200 bg-white p-7 shadow-[0_18px_40px_-34px_rgba(24,33,30,0.35)] transition-shadow hover:shadow-[0_24px_50px_-32px_rgba(24,33,30,0.42)] sm:p-8 lg:p-9"
            >
              <div class="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div class="h-28 w-full shrink-0 overflow-hidden rounded-3xl sm:size-24">
                  <NuxtImg
                    src="/images/dechets-acceptes-1.jpg"
                    alt="Zone de dépôt de déchets inertes"
                    class="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 639px) 100vw, 96px"
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-2">
                    <Icon name="ph:truck" class="size-4 text-brand-400" />
                    <span
                      class="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-500"
                    >
                      {{ t('home.heroWasteLabel') }}
                    </span>
                  </div>
                  <h2
                    class="mt-3 max-w-md font-display text-xl/tight font-semibold text-neutral-900 sm:text-[1.35rem]/tight"
                  >
                    {{ t('home.heroWasteTitle') }}
                  </h2>
                  <p class="mt-3 max-w-lg text-sm/7 text-neutral-600">
                    {{ t('home.heroWasteDescription') }}
                  </p>
                </div>
              </div>

              <div class="mt-6 flex flex-wrap gap-2.5">
                <span
                  v-for="example in heroWasteExamples"
                  :key="localize(example)"
                  class="rounded-full bg-brand-600 px-3 py-1 text-xs font-medium text-white"
                >
                  {{ localize(example) }}
                </span>
              </div>

              <p class="mt-6 max-w-xl text-sm/7 text-neutral-700">
                {{ t('home.heroWasteDetail') }}
              </p>
              <p class="mt-4 max-w-xl text-sm/7 font-medium text-brand-700">
                {{ t('home.heroWasteAdmissionNote') }}
              </p>
            </article>
          </div>
        </div>
      </AppContainer>
    </section>

    <CtaBanner
      :title="t('home.ctaTitle')"
      :description="t('home.ctaDescription')"
      :primary-label="t('actions.contactUs')"
      primary-to="/contact"
      :secondary-label="t('actions.buyMaterials')"
      secondary-to="/materiaux-recycles"
    />
  </div>
</template>

<script setup lang="ts">
import type { LocalizedText } from '~/data/site'

import { useCopy } from '~/composables/useCopy'
import {
  localize,
  materialLabel,
  materialsCatalog,
  wasteCategories,
} from '~/data/site'

const t = useCopy()

const heroMaterialExamples = computed(() =>
  materialsCatalog.filter((material) =>
    [
      'grave-0-20',
      'grave-0-31-5',
      'grave-0-80',
      'grave-0-120',
      'sable',
      'gravier-10-14',
    ].includes(material.slug),
  ),
)

const isLocalizedText = (
  value: LocalizedText | undefined,
): value is LocalizedText => Boolean(value)

const heroWasteExamples = computed(() =>
  [
    wasteCategories[0]?.examples[0],
    wasteCategories[0]?.examples[2],
    wasteCategories[1]?.examples[0],
    wasteCategories[1]?.examples[1],
  ].filter(isLocalizedText),
)

usePageSeo({
  title: 'Déchets inertes et matériaux chantier',
  description:
    'ATRED Valorisation prend en charge les déchets inertes du BTP à Languidic et propose des graves issues du recyclage, du sable et des graviers pour les chantiers.',
  path: '/',
})
</script>
