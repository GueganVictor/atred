<template>
  <AppContainer as="section" class="py-6 sm:py-8 lg:py-10">
    <AppPanel class="p-6 sm:p-7">
      <AppEyebrow>{{ legalContent.eyebrow }}</AppEyebrow>
      <h1
        class="mt-2 font-display text-3xl/tight font-semibold text-neutral-900"
      >
        {{ legalContent.title }}
      </h1>
      <p class="mt-4 max-w-2xl text-sm/7 text-neutral-700 sm:text-base/7">
        {{ legalContent.intro }}
      </p>

      <ul class="mt-6 space-y-3 text-sm/7 text-neutral-800">
        <li v-for="item in legalContent.items" :key="item">- {{ item }}</li>
      </ul>
    </AppPanel>
  </AppContainer>
</template>

<script setup lang="ts">
import { legalContent } from '~/data/site-content'

usePageSeo({
  title: 'Mentions légales',
  description: 'Mentions légales à compléter avant publication finale.',
  path: '/mentions-legales',
})
</script>
