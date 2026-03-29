<script setup lang="ts">
const config = useRuntimeConfig()
const t = useCopy()

const form = reactive({
  company: '',
  name: '',
  email: '',
  phone: '',
  project: '',
  message: '',
})

const loading = ref(false)
const success = ref(false)
const error = ref('')

const buildMailto = () => {
  const subject = encodeURIComponent(`Demande de devis - ${form.company || form.name}`)
  const body = encodeURIComponent(
    [
      `Entreprise: ${form.company}`,
      `Nom: ${form.name}`,
      `Email: ${form.email}`,
      `Téléphone: ${form.phone}`,
      `Projet: ${form.project}`,
      '',
      form.message,
    ].join('\n'),
  )

  window.location.href = `mailto:${config.public.contactEmail}?subject=${subject}&body=${body}`
}

const resetForm = () => {
  Object.assign(form, {
    company: '',
    name: '',
    email: '',
    phone: '',
    project: '',
    message: '',
  })
}

const onSubmit = async () => {
  loading.value = true
  success.value = false
  error.value = ''

  try {
    if (config.public.contactFormEndpoint) {
      await $fetch(config.public.contactFormEndpoint, {
        method: 'POST',
        body: {
          ...form,
          source: 'atred-website',
        },
      })
    }
    else {
      buildMailto()
    }

    success.value = true
    resetForm()
  }
  catch {
    error.value = t('contact.formError')
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="surface-panel p-6 sm:p-8">
    <div class="grid gap-5 sm:grid-cols-2">
      <label class="space-y-2 text-sm">
        <span class="font-semibold text-neutral-800">{{ t('contact.company') }}</span>
        <input v-model="form.company" type="text" class="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-brand-400">
      </label>

      <label class="space-y-2 text-sm">
        <span class="font-semibold text-neutral-800">{{ t('contact.name') }}</span>
        <input v-model="form.name" type="text" required class="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-brand-400">
      </label>

      <label class="space-y-2 text-sm">
        <span class="font-semibold text-neutral-800">{{ t('contact.email') }}</span>
        <input v-model="form.email" type="email" required class="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-brand-400">
      </label>

      <label class="space-y-2 text-sm">
        <span class="font-semibold text-neutral-800">{{ t('contact.phone') }}</span>
        <input v-model="form.phone" type="tel" class="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-brand-400">
      </label>

      <label class="space-y-2 text-sm sm:col-span-2">
        <span class="font-semibold text-neutral-800">{{ t('contact.project') }}</span>
        <input v-model="form.project" type="text" class="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-brand-400">
      </label>

      <label class="space-y-2 text-sm sm:col-span-2">
        <span class="font-semibold text-neutral-800">{{ t('contact.message') }}</span>
        <textarea v-model="form.message" rows="6" required class="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-brand-400" />
      </label>
    </div>

    <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-xs leading-6 text-neutral-600">
        {{ t('contact.formHint') }}
      </p>
      <button type="button" class="cta-primary" :disabled="loading" @click="onSubmit">
        {{ loading ? t('contact.sending') : t('actions.sendRequest') }}
      </button>
    </div>

    <p v-if="success" class="mt-4 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700">
      {{ t('contact.formSuccess') }}
    </p>
    <p v-if="error" class="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
      {{ error }}
    </p>
  </div>
</template>
