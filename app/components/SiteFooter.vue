<script setup lang="ts">
import { company } from '~/data/site'

const t = useCopy()

const links = computed(() => [
  { label: t('nav.company'), to: '/entreprise' },
  { label: t('nav.waste'), to: '/dechets-inertes' },
  { label: t('nav.materials'), to: '/materiaux-recycles' },
  { label: t('nav.process'), to: '/procedure-documents' },
  { label: t('nav.contact'), to: '/contact' },
])
</script>

<template>
  <footer class="mt-16 border-t border-neutral-200 bg-neutral-900 text-white">
    <div
      class="container-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]"
    >
      <div class="space-y-4">
        <p
          class="font-display text-2xl font-semibold tracking-[0.06em] text-white"
        >
          ATRED Valorisation
        </p>
        <p class="max-w-md text-sm/7  text-neutral-100">
          {{ t('company.taglineLong') }}
        </p>
      </div>

      <div>
        <p
          class="text-sm font-semibold uppercase tracking-[0.14em] text-brand-100"
        >
          {{ t('footer.navigation') }}
        </p>
        <div class="mt-4 flex flex-col gap-3 text-sm text-neutral-100">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="transition hover:text-white"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/mentions-legales" class="transition hover:text-white">
            {{ t('footer.legal') }}
          </NuxtLink>
        </div>
      </div>

      <div>
        <p
          class="text-sm font-semibold uppercase tracking-[0.14em] text-brand-100"
        >
          {{ t('footer.contact') }}
        </p>
        <div class="mt-4 space-y-3 text-sm/7  text-neutral-100">
          <p>{{ company.location }}</p>
          <p>
            <a :href="company.phoneLink" class="transition hover:text-white">{{
              company.phoneDisplay
            }}</a>
          </p>
          <p>
            <a
              :href="`mailto:${company.email}`"
              class="transition hover:text-white"
              >{{ company.email }}</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
