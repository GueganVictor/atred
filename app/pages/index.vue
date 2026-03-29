<script setup lang="ts">
import { useCopy } from '~/composables/useCopy'
import {
  company,
  localize,
  processSteps,
  recycledMaterials,
  services,
} from '~/data/site'

const t = useCopy()

usePageSeo({
  title: 'Valorisation et stockage de déchets inertes',
  description:
    'ATRED Valorisation accompagne les entreprises du BTP pour la réception, la valorisation et le stockage réglementé de déchets inertes à Languidic.',
  path: '/',
})
</script>

<template>
  <div>
    <section class="container-shell py-6 sm:py-8 lg:py-10">
      <div class="grid items-stretch gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <div
          class="surface-panel relative overflow-hidden p-6  sm:px-8 sm:py-7"
        >
          <div
            class="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,65,58,0.05),transparent_60%)]"
          />
          <div class="relative max-w-2xl">
            <p class="eyebrow">{{ t('home.heroEyebrow') }}</p>
            <h1
              class="mt-3 max-w-3xl font-display text-3xl/tight font-semibold  text-neutral-900 sm:text-4xl lg:text-[2.85rem]"
            >
              {{ t('home.heroTitle') }}
            </h1>
            <p
              class="mt-4 max-w-2xl text-sm/7  text-neutral-700 sm:text-base"
            >
              {{ t('home.heroDescription') }}
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <NuxtLink to="/contact" class="cta-primary">
                {{ t('actions.askQuote') }}
              </NuxtLink>
              <NuxtLink to="/dechets-inertes" class="cta-secondary">
                {{ t('actions.checkAcceptedWaste') }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="relative overflow-hidden rounded-3xl border border-neutral-200 shadow-[0_16px_40px_-28px_rgba(24,33,30,0.3)]"
        >
          <NuxtImg
            src="/images/hero-site.jpg"
            :alt="t('home.heroImageAlt')"
            class="h-full min-h-72 object-contain"
            sizes="sm:100vw lg:50vw"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-neutral-900/35 via-transparent to-transparent"
          />
        </div>
      </div>
    </section>

    <section class="container-shell section-space pt-0">
      <SectionHeading
        :eyebrow="t('home.servicesEyebrow')"
        :title="t('home.servicesTitle')"
        :description="t('home.servicesDescription')"
      />

      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.icon"
          class="grid-card"
        >
          <Icon :name="service.icon" class="size-9  text-brand-600" />
          <h3
            class="mt-5 font-display text-2xl/tight font-semibold  text-neutral-900"
          >
            {{ localize(service.title) }}
          </h3>
          <p class="mt-4 text-sm/7  text-neutral-700">
            {{ localize(service.description) }}
          </p>
        </article>
      </div>
    </section>

    <section class="container-shell section-space pt-0">
      <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="surface-panel p-6 sm:p-8">
          <SectionHeading
            :eyebrow="t('home.processEyebrow')"
            :title="t('home.processTitle')"
            :description="t('home.processDescription')"
          />
          <div class="mt-8 space-y-0">
            <div
              v-for="(step, index) in processSteps"
              :key="index"
              class="relative grid gap-4 pb-7 pl-14 last:pb-0"
            >
              <div
                v-if="index !== processSteps.length - 1"
                class="absolute left-[1.1rem] top-10 bottom-0 w-px bg-neutral-300"
              />
              <div
                class="absolute left-0 top-0 flex size-9  items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white"
              >
                {{ index + 1 }}
              </div>
              <div>
                <h3 class="text-lg mt-1 font-semibold text-neutral-900">
                  {{ localize(step.title) }}
                </h3>
                <p class="mt-2 text-sm/7  text-neutral-700">
                  {{ localize(step.description) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="grid-card border-brand-100 bg-brand-50">
            <p class="eyebrow">{{ t('home.materialsEyebrow') }}</p>
            <h3
              class="mt-3 font-display text-3xl/tight font-semibold  text-neutral-900"
            >
              {{ t('home.materialsTitle') }}
            </h3>
            <div class="mt-6 space-y-4">
              <div
                v-for="material in recycledMaterials"
                :key="material.slug"
                class="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white px-4 py-3"
              >
                <NuxtImg
                  :src="material.image"
                  :alt="`${material.name} ${material.size}`"
                  class="size-16  shrink-0 rounded-lg object-cover"
                  sizes="64px"
                />
                <div>
                  <p class="font-semibold text-neutral-900">
                    {{ material.name }} {{ material.size }}
                  </p>
                  <p class="mt-1 text-sm/6  text-neutral-700">
                    {{ localize(material.usage) }}
                  </p>
                </div>
              </div>
            </div>
            <NuxtLink to="/materiaux-recycles" class="cta-secondary mt-6">
              {{ t('actions.viewMaterials') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      :title="t('home.ctaTitle')"
      :description="`${company.location} • ${company.phoneDisplay} • ${company.serviceArea}`"
    />
  </div>
</template>
