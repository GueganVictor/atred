<script setup lang="ts">
import { commitments, company, localize } from '~/data/site'

const t = useCopy()

usePageSeo({
  title: 'L’entreprise',
  description:
    'Découvrez le site de Keryvon, l’ancrage territorial d’ATRED Valorisation et son approche centrée sur la valorisation et la traçabilité des matériaux inertes.',
  path: '/entreprise',
  image: '/images/about-site.jpg',
})
</script>

<template>
  <div>
    <PageHero
      :eyebrow="t('companyPage.eyebrow')"
      :title="t('companyPage.title')"
      :description="t('companyPage.description')"
      image="/images/pelleteuse.jpg"
      :image-alt="t('companyPage.imageAlt')"
    />

    <section class="container-shell section-space pt-0">
      <div class="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div class="surface-panel p-6 sm:p-8">
          <SectionHeading
            :eyebrow="t('companyPage.storyEyebrow')"
            :title="t('companyPage.storyTitle')"
            :description="t('companyPage.storyDescription')"
          />
          <div
            class="mt-8 space-y-5 text-sm/8  text-neutral-700 sm:text-base"
          >
            <p>{{ t('companyPage.storyParagraph1') }}</p>
            <p>{{ t('companyPage.storyParagraph2') }}</p>
            <p>{{ t('companyPage.storyParagraph3') }}</p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="grid-card bg-neutral-900 text-white">
            <p class="eyebrow text-brand-100">
              {{ t('companyPage.siteEyebrow') }}
            </p>
            <h3 class="mt-3 font-display text-3xl/tight font-semibold ">
              {{ t('companyPage.siteTitle') }}
            </h3>
            <div class="mt-5 space-y-3 text-sm/7  text-neutral-100">
              <p>{{ company.location }}</p>
              <p>{{ company.serviceArea }}</p>
              <p>{{ t('companyPage.siteHint') }}</p>
            </div>
          </div>

          <div class="grid-card">
            <p class="eyebrow">{{ t('companyPage.commitmentsEyebrow') }}</p>
            <div class="mt-5 space-y-5">
              <div
                v-for="commitment in commitments"
                :key="localize(commitment.title)"
              >
                <h3 class="text-lg font-semibold text-neutral-900">
                  {{ localize(commitment.title) }}
                </h3>
                <p class="mt-2 text-sm/7  text-neutral-700">
                  {{ localize(commitment.description) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      :title="t('companyPage.ctaTitle')"
      :description="t('companyPage.ctaDescription')"
    />
  </div>
</template>
