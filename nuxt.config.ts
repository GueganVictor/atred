import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  devServer: {
    port: 4001,
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@pinia/nuxt'],

  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  runtimeConfig: {
    public: {
      companyName: 'ATRED Valorisation',
      siteUrl: 'https://atredvalorisation.fr',
      contactEmail: 'isdi@atredvalorisation.fr',
      contactFormEndpoint: '',
    },
  },

  app: {
    head: {
      titleTemplate: '%s',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#2e6b5a' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
})
