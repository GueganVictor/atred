<template>
  <AppContainer as="section" class="py-6 sm:py-8 lg:py-10">
    <div class="grid items-stretch gap-4 lg:grid-cols-[0.95fr_1.05fr]">
      <AppPanel class="p-6 sm:px-8 sm:py-7">
        <div class="max-w-2xl">
          <AppEyebrow>{{ eyebrow }}</AppEyebrow>
          <h1
            class="mt-2 font-display text-[2.35rem]/tight font-semibold text-neutral-900 sm:text-[2.9rem] lg:text-[3.2rem]"
          >
            {{ title }}
          </h1>
          <p class="mt-4 max-w-xl text-base/8 text-neutral-700 sm:text-lg/8">
            {{ description }}
          </p>
          <slot />
        </div>
      </AppPanel>

      <div class="overflow-hidden border border-neutral-300 bg-neutral-200">
        <NuxtImg
          :src="image"
          :alt="imageAlt"
          class="size-full min-h-64 object-cover"
          sizes="sm:100vw lg:50vw"
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
