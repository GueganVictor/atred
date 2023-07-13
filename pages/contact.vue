<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="relative bg-white isolate">
    <div class="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
      <div
        class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48"
      >
        <div class="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
          <div
            class="absolute inset-y-0 left-0 w-full overflow-hidden -z-10 ring-1 ring-gray-900/10"
          >
            <div class="w-full h-full gradient opacity-10" />
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            Contactez-nous
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Nous voulons inscrire notre entreprise dans l’économie circulaire en
            limitant l’enfouissement ou la destruction des déchets inertes et
            amiantés grâce à nos techniques de valorisation et de recyclage.
            <br />
            Nous sommes à votre écoute pour toute demande de service :<br />
            - Traitement des déchets inertes ;<br />
            - Vente de matériaux recyclés.
          </p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Adresse</span>
                <Icon
                  name="mdi-office-building"
                  class="w-6 text-gray-400 h-7"
                  aria-hidden="true"
                />
              </dt>
              <dd>Keryvon<br />56440, Languidic</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Téléphone</span>
                <Icon
                  name="mdi-phone"
                  class="w-6 text-gray-400 h-7"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a class="hover:text-gray-900" href="tel:+33 6 85 05 54 39"
                  >+33 6 85 05 54 39</a
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <Icon
                  name="mdi-email"
                  class="w-6 text-gray-400 h-7"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a class="hover:text-gray-900" href="mailto:hello@example.com"
                  >isdi@atredvalorisation.fr</a
                >
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <form
        @submit.prevent="sendEmail"
        class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
      >
        <div class="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Prénom*</label
              >
              <div class="mt-2.5">
                <input
                  v-model="form.firstname"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Nom*</label
              >
              <div class="mt-2.5">
                <input
                  v-model="form.lastname"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Email*</label
              >
              <div class="mt-2.5">
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone-number"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Numéro de téléphone</label
              >
              <div class="mt-2.5">
                <input
                  v-model="form.phone"
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autocomplete="tel"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Message*</label
              >
              <div class="mt-2.5">
                <textarea
                  v-model="form.message"
                  name="message"
                  id="message"
                  rows="4"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-end mt-8">
            <button
              type="submit"
              class="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Envoyer un message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
});

const sendEmail = async () => {
  const body = {
    firstname: form.value.firstname,
    lastname: form.value.lastname,
    email: form.value.email,
    phone: form.value.phone,
    message: form.value.message,
  };
  await $fetch("https://equibiogenes.com/api/email/atred" + "email", {
    method: "POST",
    body,
  });
  form.value = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };
};
</script>

<style>
.gradient {
  background: rgb(12, 65, 58);
  background: linear-gradient(
    90deg,
    rgba(12, 65, 58, 1) 0%,
    rgba(9, 120, 105, 1) 50%,
    rgba(0, 209, 181, 1) 100%
  );
}
</style>
