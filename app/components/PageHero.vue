<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
}>()
</script>

<template>
  <section class="container-shell py-8 sm:py-10 lg:py-12">
    <div class="grid items-stretch gap-6 lg:grid-cols-[1.08fr_0.92fr]">
      <div class="surface-panel relative overflow-hidden px-6 py-7 sm:px-8 sm:py-8">
        <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,65,58,0.05),transparent_60%)]" />
        <div class="relative max-w-2xl">
          <p class="eyebrow">{{ eyebrow }}</p>
          <h1 class="mt-3 font-display text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl lg:text-[2.75rem]">
            {{ title }}
          </h1>
          <p class="mt-4 max-w-xl text-sm leading-7 text-neutral-700 sm:text-base">
            {{ description }}
          </p>
          <slot />
        </div>
      </div>

      <div class="relative overflow-hidden rounded-[1.5rem] border border-neutral-200 shadow-[0_16px_40px_-28px_rgba(24,33,30,0.3)]">
        <NuxtImg
          :src="image"
          :alt="imageAlt"
          class="h-full min-h-[15rem] w-full object-cover lg:max-h-[22rem]"
          sizes="sm:100vw lg:50vw"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/35 via-transparent to-transparent" />
      </div>
    </div>
  </section>
</template>
