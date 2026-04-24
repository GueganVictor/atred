<template>
  <div>
    <AppSection>
      <SectionHeading
        eyebrow="Catalogue"
        :title="materialsPageContent.familyTitle"
      />

      <div class="mt-8 space-y-10">
        <section v-for="family in groupedMaterials" :key="family.slug">
          <div class="max-w-2xl">
            <AppEyebrow class="text-sm! sm:text-xl!">{{ family.title }}</AppEyebrow>
          </div>

          <div
            class="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
          >
            <MaterialTile
              v-for="material in family.items"
              :key="material.slug"
              :material="material"
              compact
            />
          </div>
        </section>
      </div>
    </AppSection>

  </div>
</template>

<script setup lang="ts">
import {
  groupMaterialsByFamily,
  materialsPageContent,
} from '~/data/site-content'

const groupedMaterials = groupMaterialsByFamily()

usePageSeo({
  title: 'Matériaux',
  description:
    'Catalogue matériaux ATRED avec prix indicatifs, usages chantier et fiches détail.',
  path: '/materiaux-recycles',
  image: '/images/materiaux/graves_0_315.jpg',
})
</script>
