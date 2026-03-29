<script setup lang="ts">
import { localize, recycledMaterials } from '~/data/site'

const t = useCopy()

usePageSeo({
  title: 'Matériaux recyclés',
  description: 'Découvrez les graves recyclées proposées par ATRED pour remblais, sous-couches et accès de chantier.',
  path: '/materiaux-recycles',
  image: '/images/materials-hero.png',
})
</script>

<template>
  <div>
    <PageHero
      :eyebrow="t('materialsPage.eyebrow')"
      :title="t('materialsPage.title')"
      :description="t('materialsPage.description')"
      image="/images/materials-hero.png"
      :image-alt="t('materialsPage.imageAlt')"
    />

    <section class="container-shell section-space pt-0">
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article v-for="material in recycledMaterials" :key="material.slug" class="grid-card">
          <div class="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
            <NuxtImg
              :src="material.image"
              :alt="`${material.name} ${material.size}`"
              class="h-44 w-full object-cover"
              sizes="sm:100vw md:50vw xl:25vw"
            />
          </div>
          <h2 class="mt-5 font-display text-2xl font-semibold leading-tight text-neutral-900">
            {{ material.name }}
          </h2>
          <p class="mt-2 text-base font-semibold text-brand-700">{{ material.size }}</p>
          <p class="mt-4 text-sm leading-7 text-neutral-700">
            {{ localize(material.usage) }}
          </p>
          <p class="mt-5 text-xs uppercase tracking-[0.14em] text-neutral-500">
            {{ t('materialsPage.indicativeDensity') }}: {{ material.density.toFixed(1) }} t/m³
          </p>
        </article>
      </div>
    </section>

    <section class="container-shell section-space pt-0">
      <MaterialEstimator />
    </section>

    <section class="container-shell section-space pt-0">
      <div class="surface-panel p-6 sm:p-8">
        <SectionHeading
          :eyebrow="t('materialsPage.ctaEyebrow')"
          :title="t('materialsPage.ctaTitle')"
          :description="t('materialsPage.ctaDescription')"
        />
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink to="/contact" class="cta-primary">
            {{ t('actions.askQuote') }}
          </NuxtLink>
          <NuxtLink to="/dechets-inertes" class="cta-secondary">
            {{ t('actions.checkAcceptedWaste') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
