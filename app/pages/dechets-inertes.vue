<template>
  <div>
    <AppSection>
      <SectionHeading
        :title="wastePageContent.cardsTitle"
        description="Voici les grandes familles que nous recevons le plus souvent sur le site."
      />

      <div class="mt-6 grid gap-4 lg:grid-cols-3">
        <AppCard v-for="card in wasteCards" :key="card.title">
          <h2 class="text-xl font-semibold text-neutral-900">
            {{ card.title }}
          </h2>
          <p class="mt-3 text-sm/7 text-neutral-700">
            {{ card.description }}
          </p>
          <ul class="mt-4 space-y-2 text-sm/7 text-neutral-800">
            <li v-for="item in card.items" :key="item">- {{ item }}</li>
          </ul>
        </AppCard>
      </div>
    </AppSection>

    <AppSection flush-top>
      <SectionHeading
        eyebrow="Tableau"
        :title="wastePageContent.tableTitle"
        :description="wastePageContent.tableDescription"
      />

      <div class="mt-6">
        <InfoTable :columns="tableColumns" :rows="wasteRows" />
      </div>
    </AppSection>

    <AppSection flush-top>
      <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <AppCard>
          <AppEyebrow>{{ wastePageContent.rejectedTitle }}</AppEyebrow>
          <p class="mt-3 text-sm/7 text-neutral-700">
            {{ wastePageContent.rejectedDescription }}
          </p>
          <ul class="mt-5 space-y-2 text-sm/7 text-neutral-800">
            <li v-for="item in wasteRejected" :key="item">- {{ item }}</li>
          </ul>
        </AppCard>

        <AppPanel class="p-6 sm:p-7">
          <AppEyebrow>{{ wastePageContent.reminderTitle }}</AppEyebrow>
          <p class="mt-3 text-sm/7 text-neutral-700 sm:text-base/7">
            {{ wastePageContent.reminderText }}
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <AppLinkButton to="/contact"> Nous contacter </AppLinkButton>
            <AppLinkButton to="/procedure-documents" variant="secondary">
              Voir le BSDI
            </AppLinkButton>
          </div>
        </AppPanel>
      </div>
    </AppSection>
  </div>
</template>

<script setup lang="ts">
import {
  wasteCards,
  wastePageContent,
  wasteRejected,
  wasteRows,
} from '~/data/site-content'

const tableColumns = [
  { key: 'family', label: 'Famille' },
  { key: 'examples', label: 'Exemples admis' },
  { key: 'instruction', label: 'Consigne' },
]

usePageSeo({
  title: 'Déchets inertes',
  description:
    'Familles admises, repères simples et admission préalable avant transport des matériaux inertes.',
  path: '/dechets-inertes',
  image: '/images/keryvon-recycling.jpeg',
})
</script>
