<template>
  <div>
    <AppSection>
      <div class="grid gap-6 lg:grid-cols-2">
        <AppCard>
          <AppEyebrow>Contact direct</AppEyebrow>
          <div class="mt-5 space-y-5 text-base/8 text-neutral-700 sm:text-lg/8">
            <div>
              <p
                class="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500"
              >
                Adresse
              </p>
              <p>{{ company.location }}</p>
            </div>
            <div>
              <p
                class="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500"
              >
                Téléphone
              </p>
              <a
                :href="company.phoneLink"
                class="font-semibold text-neutral-900 hover:text-brand-700"
                >{{ company.phoneDisplay }}</a
              >
            </div>
            <div>
              <p
                class="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500"
              >
                Email
              </p>
              <a
                :href="`mailto:${company.email}`"
                class="font-semibold text-neutral-900 hover:text-brand-700"
              >
                {{ company.email }}
              </a>
            </div>
            <div>
              <p
                class="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500"
              >
                Horaires
              </p>
              <ul class="mt-1 space-y-1">
                <li v-for="line in company.hours" :key="line">{{ line }}</li>
              </ul>
            </div>
          </div>
        </AppCard>

        <AppCard class="overflow-hidden p-0">
          <AppEyebrow>Plan d'accès</AppEyebrow>

          <iframe
            :src="company.mapsEmbedUrl"
            title="Plan d'accès au site de Keryvon"
            class="h-84 w-full border-0 mt-4"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </AppCard>
      </div>
    </AppSection>

    <AppSection flush-top>
      <div class="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <SectionHeading
            eyebrow="Formulaire"
            title="Contactez-nous"
            description="Dépôt, enlèvement, matériau recherché, volume ou tonnage: donnez-nous les grandes lignes et nous revenons vers vous."
          />
          <div class="mt-6">
            <ContactForm />
          </div>
        </div>

        <AppCard>
          <AppEyebrow>Questions fréquentes</AppEyebrow>
          <div class="mt-4 space-y-3">
            <details
              v-for="item in contactPageContent.faq"
              :key="item.question"
              class="group border border-neutral-300 bg-neutral-50 p-4"
            >
              <summary
                class="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-neutral-900"
              >
                <span>{{ item.question }}</span>
                <Icon
                  name="ph:caret-down"
                  class="size-4 shrink-0 text-neutral-600 transition-transform group-open:rotate-180"
                />
              </summary>
              <p class="mt-3 text-sm/7 text-neutral-700">
                {{ item.answer }}
              </p>
            </details>
          </div>
        </AppCard>
      </div>
    </AppSection>
  </div>
</template>

<script setup lang="ts">
import { company } from '~/data/site'
import { contactPageContent } from '~/data/site-content'

usePageSeo({
  title: 'Contact',
  description:
    'Contactez ATRED Valorisation pour un dépôt, un enlèvement ou une demande de prix.',
  path: '/contact',
  image: '/images/hero-site.jpg',
})
</script>
