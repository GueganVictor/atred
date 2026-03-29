<script setup lang="ts">
const t = useCopy()

defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <section class="container-shell section-space">
    <div class="relative overflow-hidden rounded-[1.5rem] bg-brand-700 px-6 py-8 text-white sm:px-8">
      <div class="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent)]" />
      <div class="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl">
          <p class="eyebrow text-brand-100">{{ t('common.needHelp') }}</p>
          <h2 class="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {{ title }}
          </h2>
          <p class="mt-4 text-base leading-7 text-neutral-100">
            {{ description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <NuxtLink to="/contact" class="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-neutral-100">
            {{ t('actions.contactUs') }}
          </NuxtLink>
          <NuxtLink to="/procedure-documents" class="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            {{ t('actions.viewProcess') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
