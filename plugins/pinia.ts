import { createPinia } from "pinia";
import { defineNuxtPlugin } from "#app";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate); // Persist özelliğini ekliyoruz
  nuxtApp.vueApp.use(pinia);
});
