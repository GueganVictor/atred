<template>
  <article class="flex h-full flex-col border border-neutral-300 bg-white p-5">
    <div class="space-y-3">
      <p
        class="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700"
      >
        Action
      </p>
      <h3 class="text-xl font-semibold text-neutral-900">
        {{ title }}
      </h3>
      <p class="text-sm/7 text-neutral-700">
        {{ description }}
      </p>
    </div>

    <p v-if="note" class="mt-4 text-xs/6 text-neutral-600">
      {{ note }}
    </p>

    <div class="mt-auto pt-5">
      <AppLinkButton
        v-if="!disabled && (to || href)"
        :to="to"
        :href="href"
        :download="href?.startsWith('/documents/') ? '' : undefined"
        :target="href?.startsWith('/documents/') ? '_blank' : undefined"
        :rel="href?.startsWith('/documents/') ? 'noreferrer' : undefined"
      >
        {{ actionLabel }}
      </AppLinkButton>
      <AppButton v-else disabled>
        {{ actionLabel }}
      </AppButton>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  actionLabel: string
  href?: string
  to?: string
  disabled?: boolean
  note?: string
}>()
</script>
