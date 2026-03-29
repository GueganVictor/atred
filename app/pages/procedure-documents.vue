<script setup lang="ts">
import { documents, localize, processSteps } from '~/data/site'

const t = useCopy()

usePageSeo({
  title: 'Procédure et documents',
  description: 'Comprenez les étapes d’admission, de pesée, de dépôt et de traçabilité avant d’arriver sur le site ATRED.',
  path: '/procedure-documents',
  image: '/images/bsdi-document.png',
})
</script>

<template>
  <div>
    <PageHero
      :eyebrow="t('processPage.eyebrow')"
      :title="t('processPage.title')"
      :description="t('processPage.description')"
      image="/images/bsdi-document.png"
      :image-alt="t('processPage.imageAlt')"
    />

    <section class="container-shell section-space pt-0">
      <div class="grid gap-5 lg:grid-cols-4">
        <article v-for="(step, index) in processSteps" :key="index" class="grid-card">
          <p class="font-display text-4xl font-semibold leading-none text-brand-500">{{ `0${index + 1}` }}</p>
          <h2 class="mt-5 text-lg font-semibold text-neutral-900">
            {{ localize(step.title) }}
          </h2>
          <p class="mt-3 text-sm leading-7 text-neutral-700">
            {{ localize(step.description) }}
          </p>
        </article>
      </div>
    </section>

    <section class="container-shell section-space pt-0">
      <div class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="surface-panel p-6 sm:p-8">
          <SectionHeading
            :eyebrow="t('processPage.documentsEyebrow')"
            :title="t('processPage.documentsTitle')"
            :description="t('processPage.documentsDescription')"
          />
          <div class="mt-8 space-y-4">
            <div
              v-for="document in documents"
              :key="localize(document.title)"
              class="rounded-xl border border-neutral-200 bg-neutral-50 p-5"
            >
              <h3 class="text-lg font-semibold text-neutral-900">
                {{ localize(document.title) }}
              </h3>
              <p class="mt-2 text-sm leading-7 text-neutral-700">
                {{ localize(document.description) }}
              </p>
              <p class="mt-4 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                {{ localize(document.status) }}
              </p>
            </div>
          </div>
        </div>

        <div class="grid-card bg-neutral-900 text-white">
          <p class="eyebrow text-brand-100">{{ t('processPage.reminderEyebrow') }}</p>
          <h2 class="mt-3 font-display text-3xl font-semibold leading-tight">
            {{ t('processPage.reminderTitle') }}
          </h2>
          <p class="mt-4 text-sm leading-7 text-neutral-100">
            {{ t('processPage.reminderDescription') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
