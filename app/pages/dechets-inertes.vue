<template>
  <div>
    <AppSection>
      <SectionHeading
        :title="wastePageContent.title"
        :description="wastePageContent.description"
      />

      <div class="mt-6 grid gap-4 xl:grid-cols-2">
        <article
          v-for="item in wasteDefinitionItems"
          :key="item.title"
          class="flex gap-4 border border-neutral-300 bg-white p-5 sm:gap-5 sm:p-6"
        >
          <NuxtImg
            :src="item.image"
            :alt="item.imageAlt"
            class="size-18 shrink-0 rounded-full object-cover sm:size-22"
            sizes="88px"
          />

          <div class="min-w-0">
            <h2 class="text-lg font-semibold text-neutral-900 sm:text-xl">
              {{ item.title }}
            </h2>
            <p class="mt-3 text-base/7 text-neutral-700">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </AppSection>

    <AppSection flush-top>
      <div class="grid gap-6 lg:grid-cols-2">
        <AppCard class="bg-amber-50!">
          <AppEyebrow class="text-amber-950!">
            {{ wastePageContent.rejectedTitle }}
          </AppEyebrow>
          <p class="mt-3 text-sm/7 text-amber-950">
            {{ wastePageContent.rejectedDescription }}
          </p>
          <ul class="mt-5 space-y-2 text-sm/7 font-medium text-amber-900">
            <li v-for="item in wasteRejected" :key="item">- {{ item }}</li>
          </ul>
        </AppCard>

        <AppCard id="bsdi">
          <AppEyebrow>{{ wastePageContent.reminderTitle }}</AppEyebrow>
          <h2 class="mt-2 text-xl font-semibold text-neutral-900 sm:text-2xl">
            {{ bsdiPageContent.eyebrow }}
          </h2>
          <p class="mt-3 text-sm/7 text-neutral-700 sm:text-base/7">
            {{ wastePageContent.reminderText }}
          </p>
          <p class="mt-3 text-sm/7 text-neutral-700 sm:text-base/7">
            {{ bsdiPageContent.description }}
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <AppLinkButton
              :href="downloadAction.href"
              target="_blank"
              rel="noreferrer"
            >
              {{ downloadAction.actionLabel }}
            </AppLinkButton>
            <AppLinkButton
              href="#"
              variant="secondary"
              @click.prevent="isHelpOpen = true"
            >
              {{ helpAction.actionLabel }}
            </AppLinkButton>
            <AppButton disabled>
              {{ fillAction.actionLabel }}
            </AppButton>
          </div>
        </AppCard>
      </div>
    </AppSection>

    <Teleport to="body">
      <div
        v-if="isHelpOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/50 p-4"
        @click.self="closeHelpModal"
      >
        <div
          class="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden border border-neutral-300 bg-white"
        >
          <div
            class="flex items-start justify-between gap-4 border-b border-neutral-300 px-5 py-4 sm:px-6"
          >
            <div>
              <h2 class="mt-2 text-2xl font-semibold text-neutral-900">
                {{ bsdiPageContent.helpTitle }}
              </h2>
            </div>

            <button
              type="button"
              class="inline-flex size-11 items-center justify-center border border-neutral-300 bg-white text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900"
              @click="closeHelpModal"
            >
              <Icon name="ph:x" class="size-5" />
              <span class="sr-only">Fermer l’aide BSDI</span>
            </button>
          </div>

          <div class="overflow-y-auto p-5 sm:p-6">
            <div class="grid gap-4 lg:grid-cols-2">
              <AppCard
                v-for="section in bsdiPageContent.helpSections"
                :key="section.title"
              >
                <h3 class="text-lg font-semibold text-neutral-900 sm:text-xl">
                  {{ section.title }}
                </h3>
                <p class="mt-3 text-sm/7 text-neutral-700 sm:text-base/7">
                  {{ section.description }}
                </p>
                <ul
                  v-if="section.items.length"
                  class="mt-4 space-y-2 text-sm/7 text-neutral-800 sm:text-base/7"
                >
                  <li v-for="item in section.items" :key="item">
                    - {{ item }}
                  </li>
                </ul>
              </AppCard>
            </div>
          </div>

          <div
            class="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-300 px-5 py-4 sm:px-6"
          >
            <p class="text-sm/6 text-neutral-600">
              En cas de doute, contactez-nous avant de transporter le
              chargement.
            </p>
            <div class="flex flex-wrap gap-3">
              <AppLinkButton to="/contact" variant="secondary">
                Nous contacter
              </AppLinkButton>
              <AppLinkButton
                :href="downloadAction.href"
                target="_blank"
                rel="noreferrer"
              >
                {{ downloadAction.actionLabel }}
              </AppLinkButton>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import {
  bsdiActions,
  bsdiPageContent,
  wasteDefinitionItems,
  wastePageContent,
  wasteRejected,
} from '~/data/site-content'

const downloadAction = bsdiActions.find(
  (action) => action.title === 'Télécharger',
)!
const fillAction = bsdiActions.find((action) => action.title === 'Remplir')!
const helpAction = bsdiActions.find((action) => action.title === 'Aide')!

const isHelpOpen = ref(false)

const closeHelpModal = () => {
  isHelpOpen.value = false
}

if (import.meta.client) {
  watch(isHelpOpen, (open) => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  })
}

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.documentElement.style.overflow = ''
  }
})

usePageSeo({
  title: 'Déchets inertes',
  description:
    'Définitions des déchets inertes admis, admission préalable et BSDI à télécharger avant votre venue.',
  path: '/dechets-inertes',
  image: '/images/keryvon-recycling.jpeg',
})
</script>
