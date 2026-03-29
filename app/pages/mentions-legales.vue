<script setup lang="ts">
const t = useCopy()

usePageSeo({
  title: 'Mentions légales',
  description: 'Informations légales minimales du site ATRED Valorisation.',
  path: '/mentions-legales',
})
</script>

<template>
  <section class="container-shell section-space">
    <div class="surface-panel p-6 sm:p-10">
      <SectionHeading
        :eyebrow="t('legal.eyebrow')"
        :title="t('legal.title')"
        :description="t('legal.description')"
      />

      <div class="mt-8 space-y-6 text-sm leading-8 text-neutral-700">
        <p>{{ t('legal.placeholder1') }}</p>
        <p>{{ t('legal.placeholder2') }}</p>
        <p>{{ t('legal.placeholder3') }}</p>
      </div>
    </div>
  </section>
</template>
