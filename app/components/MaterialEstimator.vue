<template>
  <AppPanel class="p-6 sm:p-7">
    <div class="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
      <div>
        <AppEyebrow>{{ t('estimator.eyebrow') }}</AppEyebrow>
        <h3
          class="mt-2 font-display text-2xl/tight font-semibold text-neutral-900"
        >
          {{ t('estimator.title') }}
        </h3>
        <p class="mt-3 text-sm/7 text-neutral-700">
          {{ t('estimator.description') }}
        </p>
      </div>

      <div class="space-y-5">
        <div class="flex flex-wrap gap-2">
          <AppButton
            type="button"
            :variant="mode === 'dimensions' ? 'primary' : 'secondary'"
            @click="mode = 'dimensions'"
          >
            {{ t('estimator.modeDimensions') }}
          </AppButton>
          <AppButton
            type="button"
            :variant="mode === 'surface' ? 'primary' : 'secondary'"
            @click="mode = 'surface'"
          >
            {{ t('estimator.modeSurface') }}
          </AppButton>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <label
            v-if="showMaterialField"
            class="space-y-2 text-sm sm:col-span-2"
          >
            <span class="font-semibold text-neutral-800">{{
              t('estimator.material')
            }}</span>
            <select
              v-model="selectedSlug"
              class="w-full rounded-[6px] border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-brand-500"
            >
              <option
                v-for="material in materials"
                :key="material.slug"
                :value="material.slug"
              >
                {{ material.name }}
              </option>
            </select>
          </label>

          <template v-if="mode === 'dimensions'">
            <label class="space-y-2 text-sm">
              <span class="font-semibold text-neutral-800">{{
                t('estimator.length')
              }}</span>
              <input
                v-model.number="length"
                type="number"
                min="0"
                step="0.1"
                class="w-full rounded-[6px] border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-brand-500"
              />
            </label>

            <label class="space-y-2 text-sm">
              <span class="font-semibold text-neutral-800">{{
                t('estimator.width')
              }}</span>
              <input
                v-model.number="width"
                type="number"
                min="0"
                step="0.1"
                class="w-full rounded-[6px] border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-brand-500"
              />
            </label>
          </template>

          <label v-else class="space-y-2 text-sm sm:col-span-2">
            <span class="font-semibold text-neutral-800">{{
              t('estimator.surface')
            }}</span>
            <input
              v-model.number="surface"
              type="number"
              min="0"
              step="0.1"
              class="w-full rounded-[6px] border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-brand-500"
            />
          </label>

          <label class="space-y-2 text-sm sm:col-span-2">
            <span class="font-semibold text-neutral-800">{{
              t('estimator.thickness')
            }}</span>
            <input
              v-model.number="thicknessCm"
              type="number"
              min="0"
              step="1"
              class="w-full rounded-[6px] border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-brand-500"
            />
          </label>
        </div>
      </div>
    </div>

    <div
      class="mt-6 grid gap-4 border-t border-neutral-200 pt-6 lg:grid-cols-[1fr_auto] lg:items-end"
    >
      <div class="grid gap-4 sm:grid-cols-3">
        <div class="border border-neutral-300 bg-neutral-50 px-5 py-4">
          <p class="text-xs uppercase tracking-[0.12em] text-neutral-600">
            {{ t('estimator.estimatedVolume') }}
          </p>
          <p
            class="mt-2 font-display text-4xl font-semibold leading-none text-neutral-900"
          >
            {{ volume.toFixed(2) }} <span class="text-xl">m³</span>
          </p>
        </div>
        <div class="border border-brand-200 bg-brand-50 px-5 py-4">
          <p class="text-xs uppercase tracking-[0.12em] text-brand-700">
            {{ t('estimator.estimatedTonnage') }}
          </p>
          <p
            class="mt-2 font-display text-4xl font-semibold leading-none text-brand-700"
          >
            {{ tonnage.toFixed(2) }} <span class="text-xl">t</span>
          </p>
        </div>
        <div class="border border-neutral-300 bg-white px-5 py-4">
          <p class="text-xs uppercase tracking-[0.12em] text-neutral-600">
            {{ t('estimator.estimatedPrice') }}
          </p>
          <p
            class="mt-2 font-display text-4xl font-semibold leading-none text-neutral-900"
          >
            {{ estimatedPrice.toFixed(2) }} <span class="text-xl">€</span>
          </p>
        </div>
      </div>
    </div>

    <p class="mt-4 text-xs/6 text-neutral-600">
      {{ t('estimator.disclaimer') }}
    </p>
  </AppPanel>
</template>

<script setup lang="ts">
import { getMaterialBySlug, materials } from '~/data/site-content'

const props = defineProps<{
  materialSlug?: string
}>()

const t = useCopy()

const selectedSlug = ref(props.materialSlug ?? materials[0]?.slug ?? '')
const mode = ref<'dimensions' | 'surface'>('dimensions')
const length = ref<number | null>(null)
const width = ref<number | null>(null)
const surface = ref<number | null>(null)
const thicknessCm = ref<number | null>(null)

watch(
  () => props.materialSlug,
  (nextValue) => {
    if (nextValue) {
      selectedSlug.value = nextValue
    }
  },
)

const showMaterialField = computed(() => !props.materialSlug)

const selectedMaterial = computed(
  () => getMaterialBySlug(selectedSlug.value) ?? materials[0],
)

const area = computed(() => {
  if (mode.value === 'surface') {
    return surface.value && surface.value > 0 ? surface.value : 0
  }

  if (!length.value || !width.value || length.value <= 0 || width.value <= 0) {
    return 0
  }

  return length.value * width.value
})

const volume = computed(() => {
  if (!thicknessCm.value || thicknessCm.value <= 0) {
    return 0
  }

  return area.value * (thicknessCm.value / 100)
})

const tonnage = computed(() => volume.value * selectedMaterial.value.density)

const estimatedPrice = computed(
  () => tonnage.value * selectedMaterial.value.priceFrom,
)
</script>
