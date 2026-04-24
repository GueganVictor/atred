<template>
  <footer class="mt-14 border-t border-neutral-300 bg-white">
    <AppContainer class="grid gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
      <div class="space-y-4">
        <p class="font-display text-2xl font-semibold text-neutral-900">
          ATRED Valorisation
        </p>
        <p class="max-w-md text-sm/7 text-neutral-700">
          {{ t('company.taglineLong') }}
        </p>
      </div>

      <div>
        <p
          class="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700"
        >
          {{ t('footer.navigation') }}
        </p>
        <div class="mt-4 flex flex-col gap-3 text-sm text-neutral-700">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="hover:text-brand-700"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/mentions-legales" class="hover:text-brand-700">
            {{ t('footer.legal') }}
          </NuxtLink>
        </div>
      </div>

      <div>
        <p
          class="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700"
        >
          {{ t('footer.contact') }}
        </p>
        <div class="mt-4 space-y-3 text-sm/7 text-neutral-700">
          <p>{{ company.location }}</p>
          <p>
            <a :href="company.phoneLink" class="hover:text-brand-700">{{
              company.phoneDisplay
            }}</a>
          </p>
          <p>
            <a :href="`mailto:${company.email}`" class="hover:text-brand-700">{{
              company.email
            }}</a>
          </p>
        </div>
      </div>
    </AppContainer>
  </footer>
</template>

<script setup lang="ts">
import { company } from '~/data/site'

const t = useCopy()

const links = computed(() => [
  { label: t('nav.company'), to: '/entreprise' },
  { label: t('nav.waste'), to: '/dechets-inertes' },
  { label: t('nav.materials'), to: '/materiaux-recycles' },
  { label: t('nav.contact'), to: '/contact' },
])
</script>
