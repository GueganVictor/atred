<template>
  <NuxtLink
    :to="`/materiaux-recycles/${material.slug}`"
    class="group flex h-full flex-col border border-neutral-300 bg-white transition hover:border-brand-500"
  >
    <div
      :class="imageClass"
    >
      <NuxtImg
        v-if="material.image"
        :src="material.image"
        :alt="material.imageAlt"
        class="size-full object-cover transition duration-300 group-hover:scale-[1.02]"
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
      />
      <MediaPlaceholder
        v-else
        :title="material.name"
        :note="material.placeholderNote"
      />
    </div>

    <div :class="bodyClass">
      <div :class="contentClass">
        <p
          class="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700"
        >
          {{ familyTitle }}
        </p>
        <h3 :class="titleClass">
          {{ material.name }}
        </h3>
      </div>

      <div :class="footerClass">
        <div>
          <p :class="priceClass">
            {{ formatMaterialPrice(material) }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { MaterialProduct } from '~/data/site-content'

import { formatMaterialPrice, getMaterialFamily } from '~/data/site-content'

const props = defineProps<{
  material: MaterialProduct
  compact?: boolean
}>()

const familyTitle = computed(
  () => getMaterialFamily(props.material.family)?.title ?? 'Matériaux',
)

const imageClass = computed(() =>
  props.compact
    ? 'aspect-[4/3] overflow-hidden border-b border-neutral-300 bg-neutral-100'
    : 'aspect-square overflow-hidden border-b border-neutral-300 bg-neutral-100',
)

const bodyClass = computed(() =>
  props.compact ? 'flex flex-1 flex-col gap-3 p-4' : 'flex flex-1 flex-col gap-4 p-5',
)

const contentClass = computed(() => (props.compact ? 'space-y-1.5' : 'space-y-2'))

const titleClass = computed(() =>
  props.compact ? 'text-lg font-semibold text-neutral-900' : 'text-xl font-semibold text-neutral-900',
)

const footerClass = computed(() =>
  props.compact
    ? 'mt-auto flex items-end justify-between gap-3 border-t border-neutral-200 pt-3'
    : 'mt-auto flex items-end justify-between gap-4 border-t border-neutral-200 pt-4',
)

const priceClass = computed(() =>
  props.compact
    ? 'mt-1 text-sm font-semibold text-brand-700'
    : 'mt-1 text-lg font-semibold text-brand-700',
)
</script>
