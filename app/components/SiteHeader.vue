<template>
  <header class="sticky top-0 z-50 border-b border-neutral-300 bg-neutral-100">
    <AppContainer class="flex min-h-16 items-center justify-between gap-4">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img
          src="/images/logo-atred.png"
          :alt="t('company.name')"
          class="h-12"
        />
      </NuxtLink>

      <nav class="hidden items-center gap-6 lg:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="text-sm font-semibold text-neutral-800 hover:text-brand-700"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden lg:block">
        <AppLinkButton to="/contact" variant="secondary">
          {{ t('actions.askQuote') }}
        </AppLinkButton>
      </div>

      <button
        type="button"
        class="inline-flex size-11 items-center justify-center rounded-lg border border-neutral-300 bg-white text-neutral-900 lg:hidden"
        :aria-label="t('actions.openMenu')"
        @click="isOpen = !isOpen"
      >
        <Icon :name="isOpen ? 'ph:x' : 'ph:list'" class="size-5" />
      </button>
    </AppContainer>

    <div v-if="isOpen" class="border-t border-neutral-300 bg-white lg:hidden">
      <AppContainer as="nav" class="flex flex-col gap-3 py-4">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-800 hover:border-brand-300 hover:bg-neutral-50"
          @click="isOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
        <AppLinkButton to="/contact" class="mt-2" @click="isOpen = false">
          {{ t('actions.askQuote') }}
        </AppLinkButton>
      </AppContainer>
    </div>
  </header>
</template>

<script setup lang="ts">
const t = useCopy()

const isOpen = ref(false)

const navigation = computed(() => [
  { label: t('nav.home'), to: '/' },
  { label: t('nav.company'), to: '/entreprise' },
  { label: t('nav.waste'), to: '/dechets-inertes' },
  { label: t('nav.materials'), to: '/materiaux-recycles' },
])
</script>
