<template>
  <header
    class="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-50/95 backdrop-blur-md"
  >
    <AppContainer class="flex min-h-18 items-center justify-between gap-4">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img
          src="/images/logo-atred.png"
          :alt="t('company.name')"
          class="h-12 p-1.5"
        />
      </NuxtLink>

      <nav class="hidden items-center gap-7 lg:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="text-sm font-semibold text-neutral-700 transition hover:text-brand-700"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden lg:block">
        <AppLinkButton to="/contact">
          {{ t('actions.askQuote') }}
        </AppLinkButton>
      </div>

      <button
        type="button"
        class="inline-flex size-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 lg:hidden"
        :aria-label="t('actions.openMenu')"
        @click="isOpen = !isOpen"
      >
        <Icon :name="isOpen ? 'ph:x' : 'ph:list'" class="size-5" />
      </button>
    </AppContainer>

    <div v-if="isOpen" class="border-t border-neutral-200 bg-white lg:hidden">
      <AppContainer as="nav" class="flex flex-col gap-3 py-4">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="rounded-xl px-4 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-100"
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
  { label: t('nav.process'), to: '/procedure-documents' },
])
</script>
