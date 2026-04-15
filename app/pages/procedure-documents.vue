<template>
  <div>
    <PageHero
      :eyebrow="t('processPage.eyebrow')"
      :title="t('processPage.title')"
      :description="t('processPage.description')"
      image="/images/bsdi-document.png"
      :image-alt="t('processPage.imageAlt')"
    />

    <AppSection flush-top>
      <div class="grid gap-5 lg:grid-cols-4">
        <AppCard
          v-for="(step, index) in processSteps"
          :key="index"
          as="article"
        >
          <p
            class="font-display text-4xl font-semibold leading-none text-brand-500"
          >
            {{ `0${index + 1}` }}
          </p>
          <h2 class="mt-5 text-lg font-semibold text-neutral-900">
            {{ localize(step.title) }}
          </h2>
          <p class="mt-3 text-sm/7 text-neutral-700">
            {{ localize(step.description) }}
          </p>
        </AppCard>
      </div>
    </AppSection>

    <AppSection flush-top>
      <div class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <AppPanel class="p-6 sm:p-8">
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
              <p class="mt-2 text-sm/7 text-neutral-700">
                {{ localize(document.description) }}
              </p>
              <p
                class="mt-4 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700"
              >
                {{ localize(document.status) }}
              </p>
            </div>
          </div>
        </AppPanel>

        <AppCard class="bg-neutral-900! text-white">
          <AppEyebrow tone="inverse">
            {{ t('processPage.reminderEyebrow') }}
          </AppEyebrow>
          <h2 class="mt-3 font-display text-3xl/tight font-semibold">
            {{ t('processPage.reminderTitle') }}
          </h2>
          <p class="mt-4 text-sm/7 text-neutral-100">
            {{ t('processPage.reminderDescription') }}
          </p>
        </AppCard>
      </div>
    </AppSection>
  </div>
</template>

<script setup lang="ts">
import { documents, localize, processSteps } from '~/data/site'

const t = useCopy()

usePageSeo({
  title: 'Admission et documents',
  description:
    "Comprenez les modalités d'admission, de pesée et les documents utiles avant d'arriver sur le site ATRED.",
  path: '/procedure-documents',
  image: '/images/bsdi-document.png',
})
</script>
