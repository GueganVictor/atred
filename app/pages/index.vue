<script setup lang="ts">
import { company, commitments, heroStats, localize, processSteps, recycledMaterials, services } from '~/data/site'

const { locale, t } = useI18n()
const localePath = useLocalePath()

usePageSeo({
  title: 'Valorisation et stockage de déchets inertes',
  description: 'ATRED Valorisation accompagne les entreprises du BTP pour la réception, la valorisation et le stockage réglementé de déchets inertes à Languidic.',
  path: '/',
})
</script>

<template>
  <div>
    <section class="container-shell py-6 sm:py-8 lg:py-10">
      <div class="grid items-stretch gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <div class="surface-panel relative overflow-hidden px-6 py-6 sm:px-8 sm:py-7">
          <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,65,58,0.05),transparent_60%)]" />
          <div class="relative max-w-2xl">
            <p class="eyebrow">{{ t('home.heroEyebrow') }}</p>
            <h1 class="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl lg:text-[2.85rem]">
              {{ t('home.heroTitle') }}
            </h1>
            <p class="mt-4 max-w-2xl text-sm leading-7 text-neutral-700 sm:text-base">
              {{ t('home.heroDescription') }}
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <NuxtLink :to="localePath('/contact')" class="cta-primary">
                {{ t('actions.askQuote') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/dechets-inertes')" class="cta-secondary">
                {{ t('actions.checkAcceptedWaste') }}
              </NuxtLink>
            </div>

            <div class="mt-6 grid gap-3 sm:grid-cols-3">
              <div
                v-for="stat in heroStats"
                :key="stat.value"
                class="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3"
              >
                <p class="font-display text-2xl font-semibold leading-none text-brand-700">{{ stat.value }}</p>
                <p class="mt-1 text-xs leading-5 text-neutral-600">
                  {{ localize(stat.label, locale) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-[1.5rem] border border-neutral-200 shadow-[0_16px_40px_-28px_rgba(24,33,30,0.3)]">
          <NuxtImg
            src="/images/hero-site.jpg"
            :alt="t('home.heroImageAlt')"
            class="h-full min-h-[18rem] object-contain"
            sizes="sm:100vw lg:50vw"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/35 via-transparent to-transparent" />
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
        <article v-for="service in services" :key="service.icon" class="grid-card">
          <Icon :name="service.icon" class="h-9 w-9 text-brand-600" />
          <h3 class="mt-5 font-display text-2xl font-semibold leading-tight text-neutral-900">
            {{ localize(service.title, locale) }}
          </h3>
          <p class="mt-4 text-sm leading-7 text-neutral-700">
            {{ localize(service.description, locale) }}
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
          <div class="mt-8 grid gap-4">
            <div
              v-for="(step, index) in processSteps"
              :key="index"
              class="rounded-xl border border-neutral-200 bg-neutral-50 p-5"
            >
              <p class="text-sm font-semibold text-brand-700">{{ `0${index + 1}` }}</p>
              <h3 class="mt-2 text-lg font-semibold text-neutral-900">
                {{ localize(step.title, locale) }}
              </h3>
              <p class="mt-2 text-sm leading-7 text-neutral-700">
                {{ localize(step.description, locale) }}
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="grid-card bg-neutral-100">
            <p class="eyebrow">{{ t('home.commitmentsEyebrow') }}</p>
            <h3 class="mt-3 font-display text-3xl font-semibold leading-tight text-neutral-900">
              {{ t('home.commitmentsTitle') }}
            </h3>
            <div class="mt-6 space-y-4">
              <div v-for="commitment in commitments" :key="localize(commitment.title, locale)">
                <p class="text-base font-semibold text-neutral-900">
                  {{ localize(commitment.title, locale) }}
                </p>
                <p class="mt-1 text-sm leading-7 text-neutral-700">
                  {{ localize(commitment.description, locale) }}
                </p>
              </div>
            </div>
          </div>

          <div class="grid-card border-brand-100 bg-brand-50">
            <p class="eyebrow">{{ t('home.materialsEyebrow') }}</p>
            <h3 class="mt-3 font-display text-3xl font-semibold leading-tight text-neutral-900">
              {{ t('home.materialsTitle') }}
            </h3>
            <div class="mt-6 space-y-4">
              <div
                v-for="material in recycledMaterials"
                :key="material.slug"
                class="flex items-start justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3"
              >
                <div>
                  <p class="font-semibold text-neutral-900">{{ material.name }} {{ material.size }}</p>
                  <p class="mt-1 text-sm leading-6 text-neutral-700">
                    {{ localize(material.usage, locale) }}
                  </p>
                </div>
              </div>
            </div>
            <NuxtLink :to="localePath('/materiaux-recycles')" class="cta-secondary mt-6">
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
