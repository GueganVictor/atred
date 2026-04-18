<template>
  <div>
    <PageHero
      :eyebrow="bsdiPageContent.eyebrow"
      :title="bsdiPageContent.title"
      :description="bsdiPageContent.description"
      image="/images/bsdi-document.png"
      image-alt="BSDI"
    />

    <AppSection flush-top>
      <div class="grid gap-4 md:grid-cols-3">
        <DocumentActionCard
          v-for="action in bsdiActions"
          :key="action.title"
          :title="action.title"
          :description="action.description"
          :action-label="action.actionLabel"
          :href="action.href"
          :to="action.to"
          :disabled="action.disabled"
          :note="action.note"
        />
      </div>
    </AppSection>

    <AppSection id="aide-bsdi" flush-top>
      <SectionHeading
        eyebrow="Aide"
        :title="bsdiPageContent.helpTitle"
        :description="bsdiPageContent.helpDescription"
      />

      <div class="mt-6 grid gap-4 lg:grid-cols-4">
        <AppCard v-for="step in bsdiPageContent.steps" :key="step.title">
          <h2 class="text-lg font-semibold text-neutral-900">
            {{ step.title }}
          </h2>
          <p class="mt-3 text-sm/7 text-neutral-700">
            {{ step.description }}
          </p>
        </AppCard>
      </div>
    </AppSection>

  </div>
</template>

<script setup lang="ts">
import { bsdiActions, bsdiPageContent } from '~/data/site-content'

usePageSeo({
  title: 'BSDI',
  description:
    'Téléchargement du BSDI, repères utiles et aide avant votre venue sur le site.',
  path: '/procedure-documents',
  image: '/images/bsdi-document.png',
})
</script>
