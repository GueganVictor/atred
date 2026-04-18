<template>
  <div
    class="flex size-full min-h-48 flex-col items-center justify-center gap-3 border border-dashed border-neutral-300 bg-neutral-100 px-6 py-8 text-center"
  >
    <Icon name="ph:image-square" class="size-10 text-neutral-400" />
    <p class="text-sm font-semibold text-neutral-800">
      {{ title }}
    </p>
    <p v-if="note" class="max-w-xs text-xs/6 text-neutral-600">
      {{ note }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  note?: string
}>()
</script>
