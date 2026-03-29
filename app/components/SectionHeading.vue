<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="max-w-3xl">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2
      class="mt-3 font-display text-3xl/tight font-semibold  text-neutral-900 sm:text-4xl"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-4 text-base/7  text-neutral-700 sm:text-lg"
    >
      {{ description }}
    </p>
  </div>
</template>
