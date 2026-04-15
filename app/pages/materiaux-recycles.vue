<template>
  <div>
    <PageHero
      :eyebrow="t('materialsPage.eyebrow')"
      :title="t('materialsPage.title')"
      :description="t('materialsPage.description')"
      image="/images/materials-hero.png"
      :image-alt="t('materialsPage.imageAlt')"
    />

    <AppSection flush-top>
      <div class="space-y-10">
        <section v-for="category in groupedMaterials" :key="category.slug">
          <div class="max-w-3xl">
            <AppEyebrow>{{ localize(category.title) }}</AppEyebrow>
            <p class="mt-3 text-base/7 text-neutral-700 sm:text-lg/7">
              {{ localize(category.description) }}
            </p>
          </div>

          <div class="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <AppCard
              v-for="material in category.items"
              :key="material.slug"
              as="article"
            >
              <div
                class="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100"
              >
                <NuxtImg
                  :src="material.image"
                  :alt="materialLabel(material)"
                  class="h-44 w-full object-cover"
                  sizes="sm:100vw md:50vw xl:25vw"
                />
              </div>
              <h2
                class="mt-5 font-display text-2xl/tight font-semibold text-neutral-900"
              >
                {{ materialLabel(material) }}
              </h2>
              <p class="mt-4 text-sm/7 text-neutral-700">
                {{ localize(material.usage) }}
              </p>
              <p
                class="mt-5 text-xs uppercase tracking-[0.14em] text-neutral-500"
              >
                {{ t('materialsPage.indicativeDensity') }}:
                {{ material.density.toFixed(1) }} t/m³
              </p>
            </AppCard>
          </div>
        </section>
      </div>
    </AppSection>

    <AppSection flush-top>
      <MaterialEstimator />
    </AppSection>

    <AppSection flush-top>
      <AppPanel class="p-6 sm:p-8">
        <SectionHeading
          :eyebrow="t('materialsPage.ctaEyebrow')"
          :title="t('materialsPage.ctaTitle')"
          :description="t('materialsPage.ctaDescription')"
        />
        <div class="mt-8 flex flex-wrap gap-3">
          <AppLinkButton to="/contact">
            {{ t('actions.askQuote') }}
          </AppLinkButton>
          <AppLinkButton to="/dechets-inertes" variant="secondary">
            {{ t('actions.checkAcceptedWaste') }}
          </AppLinkButton>
        </div>
      </AppPanel>
    </AppSection>
  </div>
</template>

<script setup lang="ts">
import {
  localize,
  materialCategories,
  materialLabel,
  materialsCatalog,
} from '~/data/site'

const t = useCopy()

const groupedMaterials = computed(() =>
  materialCategories
    .map((category) => ({
      ...category,
      items: materialsCatalog.filter(
        (material) => material.category === category.slug,
      ),
    }))
    .filter((category) => category.items.length > 0),
)

usePageSeo({
  title: 'Matériaux pour le chantier',
  description:
    'Découvrez les graves issues du recyclage, le sable et les graviers proposés par ATRED pour remblais, plateformes, couches d’assise et besoins courants de chantier.',
  path: '/materiaux-recycles',
  image: '/images/materials-hero.png',
})
</script>
