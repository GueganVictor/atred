<template>
  <div class="max-w-3xl">
    <AppEyebrow v-if="eyebrow">{{ eyebrow }}</AppEyebrow>
    <h2
      class="mt-2 font-display text-[2.15rem]/tight font-semibold text-neutral-900 sm:text-[2.45rem]"
    >
      {{ title }}
    </h2>
    <p v-if="description" class="mt-3 text-lg/8 text-neutral-700">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title?: string
  description?: string
}>()
</script>
