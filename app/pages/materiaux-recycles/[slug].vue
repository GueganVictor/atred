<template>
  <div>
    <AppContainer class="py-6 sm:py-8 lg:py-10">
      <NuxtLink
        to="/materiaux-recycles"
        class="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
      >
        <Icon name="ph:arrow-left" class="size-4" />
        Retour au catalogue
      </NuxtLink>

      <div class="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="overflow-hidden border border-neutral-300 bg-neutral-200">
          <NuxtImg
            v-if="material.image"
            :src="material.image"
            :alt="material.imageAlt"
            class="size-full min-h-80 object-cover"
            sizes="(max-width: 1023px) 100vw, 45vw"
          />
          <MediaPlaceholder
            v-else
            :title="material.name"
            :note="material.placeholderNote"
          />
        </div>

        <AppPanel class="p-6 sm:p-7">
          <AppEyebrow>{{ familyTitle }}</AppEyebrow>
          <h1
            class="mt-2 font-display text-3xl/tight font-semibold text-neutral-900 sm:text-[2.65rem]"
          >
            {{ material.name }}
          </h1>
          <p class="mt-4 text-base/7 font-semibold text-brand-700">
            {{ material.shortUse }}
          </p>
          <p class="mt-4 text-sm/7 text-neutral-700 sm:text-base/7">
            {{ material.detailText }}
          </p>

          <div class="mt-6 grid gap-3 sm:grid-cols-3">
            <div
              v-for="item in material.technicalInfo"
              :key="item.label"
              class="border border-neutral-300 bg-neutral-50 p-4"
            >
              <p class="text-xs uppercase tracking-[0.12em] text-neutral-500">
                {{ item.label }}
              </p>
              <p class="mt-2 text-sm font-semibold text-neutral-900">
                {{ item.value }}
              </p>
            </div>
          </div>

          <div
            class="mt-6 flex flex-wrap items-center gap-4 border-t border-neutral-200 pt-6"
          >
            <div>
              <p class="text-xs uppercase tracking-[0.12em] text-neutral-500">
                Prix indicatif
              </p>
              <p class="mt-1 text-2xl font-semibold text-brand-700">
                {{ formatMaterialPrice(material) }}
              </p>
            </div>

            <div class="flex flex-wrap gap-3">
              <AppLinkButton to="/contact"> Contactez nous </AppLinkButton>
            </div>
          </div>
        </AppPanel>
      </div>
    </AppContainer>

    <AppSection flush-top>
      <MaterialEstimator :material-slug="material.slug" />
    </AppSection>
  </div>
</template>

<script setup lang="ts">
import {
  formatMaterialPrice,
  getMaterialBySlug,
  getMaterialFamily,
} from '~/data/site-content'

const route = useRoute()
const slug = String(route.params.slug ?? '')
const material = getMaterialBySlug(slug)

if (!material) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Matériau introuvable',
  })
}

const familyTitle = getMaterialFamily(material.family)?.title ?? 'Matériaux'

usePageSeo({
  title: material.name,
  description: material.detailText,
  path: `/materiaux-recycles/${material.slug}`,
  image: material.image ?? '/images/hero-site.jpg',
})
</script>
