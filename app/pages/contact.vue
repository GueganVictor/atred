<template>
  <div>
    <PageHero
      :eyebrow="t('contactPage.eyebrow')"
      :title="t('contactPage.title')"
      :description="t('contactPage.description')"
      image="/images/about-site.jpg"
      :image-alt="t('contactPage.imageAlt')"
    />

    <AppSection flush-top>
      <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="space-y-6">
          <AppCard class="bg-neutral-900! text-white">
            <AppEyebrow tone="inverse">
              {{ t('contactPage.directEyebrow') }}
            </AppEyebrow>
            <div class="mt-5 space-y-5 text-sm/7 text-neutral-100">
              <div>
                <p class="font-semibold text-white">
                  {{ t('contactPage.address') }}
                </p>
                <p>{{ company.location }}</p>
              </div>
              <div>
                <p class="font-semibold text-white">
                  {{ t('contactPage.phone') }}
                </p>
                <a :href="company.phoneLink" class="hover:text-white">{{
                  company.phoneDisplay
                }}</a>
              </div>
              <div>
                <p class="font-semibold text-white">
                  {{ t('contactPage.email') }}
                </p>
                <a :href="`mailto:${company.email}`" class="hover:text-white">{{
                  company.email
                }}</a>
              </div>
              <div>
                <p class="font-semibold text-white">
                  {{ t('contactPage.hours') }}
                </p>
                <ul class="mt-2 space-y-1">
                  <li v-for="line in company.hours" :key="line">{{ line }}</li>
                </ul>
              </div>
            </div>
            <AppLinkButton
              :href="company.mapsUrl"
              variant="soft-light"
              target="_blank"
              rel="noreferrer"
              class="mt-6"
            >
              {{ t('actions.openMap') }}
            </AppLinkButton>
          </AppCard>

          <AppCard>
            <AppEyebrow>{{ t('contactPage.faqEyebrow') }}</AppEyebrow>
            <div class="mt-5 space-y-4">
              <details
                v-for="item in faqs"
                :key="item.question.fr"
                class="rounded-xl border border-neutral-200 bg-neutral-50 px-5 py-4"
              >
                <summary
                  class="cursor-pointer list-none font-semibold text-neutral-900"
                >
                  {{ item.question.fr }}
                </summary>
                <p class="mt-3 text-sm/7 text-neutral-700">
                  {{ item.answer.fr }}
                </p>
              </details>
            </div>
          </AppCard>
        </div>

        <div>
          <SectionHeading
            :eyebrow="t('contactPage.formEyebrow')"
            :title="t('contactPage.formTitle')"
            :description="t('contactPage.formDescription')"
          />
          <div class="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </AppSection>
  </div>
</template>

<script setup lang="ts">
import { company, faqs } from '~/data/site'

const t = useCopy()

usePageSeo({
  title: 'Contact et devis',
  description:
    'Contactez ATRED Valorisation pour faire admettre un chargement de déchets inertes, vérifier une disponibilité en graves issues du recyclage, sable ou graviers, ou demander un devis chantier.',
  path: '/contact',
})
</script>
