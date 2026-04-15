<template>
  <AppCard class="overflow-hidden border-neutral-200! bg-brand-700! text-white">
    <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <AppEyebrow tone="inverse">{{ t('estimator.eyebrow') }}</AppEyebrow>
        <h3 class="mt-3 font-display text-3xl/tight font-semibold">
          {{ t('estimator.title') }}
        </h3>
        <p class="mt-4 text-sm/7 text-neutral-100">
          {{ t('estimator.description') }}
        </p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <label class="space-y-2 text-sm">
          <span class="font-semibold">{{ t('estimator.material') }}</span>
          <select
            v-model="materialSlug"
            class="w-full rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-white outline-none"
          >
            <optgroup
              v-for="category in groupedMaterials"
              :key="category.slug"
              :label="localize(category.title)"
              class="text-neutral-900"
            >
              <option
                v-for="material in category.items"
                :key="material.slug"
                :value="material.slug"
                class="text-neutral-900"
              >
                {{ materialLabel(material) }}
              </option>
            </optgroup>
          </select>
        </label>

        <label class="space-y-2 text-sm">
          <span class="font-semibold">{{ t('estimator.length') }}</span>
          <input
            v-model.number="length"
            type="number"
            min="0"
            step="0.1"
            class="w-full rounded-xl border border-white/15 bg-white/8 px-4 py-3 outline-none"
          />
        </label>

        <label class="space-y-2 text-sm">
          <span class="font-semibold">{{ t('estimator.width') }}</span>
          <input
            v-model.number="width"
            type="number"
            min="0"
            step="0.1"
            class="w-full rounded-xl border border-white/15 bg-white/8 px-4 py-3 outline-none"
          />
        </label>

        <label class="space-y-2 text-sm">
          <span class="font-semibold">{{ t('estimator.thickness') }}</span>
          <input
            v-model.number="thicknessCm"
            type="number"
            min="0"
            step="1"
            class="w-full rounded-xl border border-white/15 bg-white/8 px-4 py-3 outline-none"
          />
        </label>
      </div>
    </div>

    <div
      class="mt-8 grid gap-4 border-t border-white/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-end"
    >
      <div>
        <p class="text-sm text-neutral-100">
          {{ localize(selectedMaterial.usage) }}
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-xl bg-white/10 px-5 py-4">
          <p class="text-xs uppercase tracking-[0.14em] text-neutral-200">
            {{ t('estimator.estimatedVolume') }}
          </p>
          <p class="mt-2 font-display text-4xl font-semibold leading-none">
            {{ volume.toFixed(2) }} <span class="text-xl">m³</span>
          </p>
        </div>
        <div class="rounded-xl bg-white px-5 py-4 text-brand-700">
          <p class="text-xs uppercase tracking-[0.14em] text-neutral-600">
            {{ t('estimator.estimatedTonnage') }}
          </p>
          <p class="mt-2 font-display text-4xl font-semibold leading-none">
            {{ tonnage.toFixed(2) }} <span class="text-xl">t</span>
          </p>
        </div>
      </div>
    </div>

    <p class="mt-4 text-xs/6 text-neutral-200">
      {{ t('estimator.disclaimer') }}
    </p>
  </AppCard>
</template>

<script setup lang="ts">
import {
  localize,
  materialCategories,
  materialLabel,
  materialsCatalog,
} from '~/data/site'

const t = useCopy()

const groupedMaterials = computed(() =>
  materialCategories
    .map((category) => ({
      ...category,
      items: materialsCatalog.filter(
        (material) => material.category === category.slug,
      ),
    }))
    .filter((category) => category.items.length > 0),
)

const materialSlug = ref(materialsCatalog[2]?.slug ?? materialsCatalog[0].slug)
const length = ref<number | null>(null)
const width = ref<number | null>(null)
const thicknessCm = ref<number | null>(null)

const selectedMaterial = computed(() => {
  return (
    materialsCatalog.find((material) => material.slug === materialSlug.value) ??
    materialsCatalog[0]
  )
})

const volume = computed(() => {
  if (!length.value || !width.value || !thicknessCm.value) {
    return 0
  }

  if (length.value <= 0 || width.value <= 0 || thicknessCm.value <= 0) {
    return 0
  }

  return length.value * width.value * (thicknessCm.value / 100)
})

const tonnage = computed(() => volume.value * selectedMaterial.value.density)
</script>
