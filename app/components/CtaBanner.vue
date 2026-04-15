<template>
  <AppSection>
    <div
      class="relative overflow-hidden rounded-3xl bg-brand-700 px-6 py-8 text-white sm:px-8"
    >
      <div
        class="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent)]"
      />
      <div
        class="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      >
        <div class="max-w-2xl">
          <AppEyebrow tone="inverse">{{ t('common.needHelp') }}</AppEyebrow>
          <h2
            class="mt-3 font-display text-3xl/tight font-semibold sm:text-4xl"
          >
            {{ title }}
          </h2>
          <p class="mt-4 text-base/7 text-neutral-100">
            {{ description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <AppLinkButton :to="primaryTo" variant="light">
            {{ primaryLabel }}
          </AppLinkButton>
          <AppLinkButton :to="secondaryTo" variant="ghost-light">
            {{ secondaryLabel }}
          </AppLinkButton>
        </div>
      </div>
    </div>
  </AppSection>
</template>

<script setup lang="ts">
const t = useCopy()

defineProps<{
  title: string
  description: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel: string
  secondaryTo: string
}>()
</script>
