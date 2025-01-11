// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  plugins: ["~/plugins/firebase"],
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true }
})
