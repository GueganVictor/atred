<template>
  <AppContainer as="section" class="py-8 sm:py-10 lg:py-12">
    <div class="grid items-stretch gap-6 lg:grid-cols-[1.08fr_0.92fr]">
      <AppPanel class="relative overflow-hidden px-6 py-7 sm:p-8">
        <div
          class="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,65,58,0.05),transparent_60%)]"
        />
        <div class="relative max-w-2xl">
          <AppEyebrow>{{ eyebrow }}</AppEyebrow>
          <h1
            class="mt-3 font-display text-3xl/tight font-semibold text-neutral-900 sm:text-4xl lg:text-[2.75rem]"
          >
            {{ title }}
          </h1>
          <p class="mt-4 max-w-xl text-sm/7 text-neutral-700 sm:text-base">
            {{ description }}
          </p>
          <slot />
        </div>
      </AppPanel>

      <div
        class="relative overflow-hidden rounded-3xl border border-neutral-200 shadow-[0_16px_40px_-28px_rgba(24,33,30,0.3)]"
      >
        <NuxtImg
          :src="image"
          :alt="imageAlt"
          class="size-full min-h-60 object-cover lg:max-h-88"
          sizes="sm:100vw lg:50vw"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-neutral-900/35 via-transparent to-transparent"
        />
      </div>
    </div>
  </AppContainer>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
}>()
</script>
