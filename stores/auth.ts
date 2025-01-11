import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    userEmail: null as string | null, // Kullanıcı e-posta bilgisi
  }),
  actions: {
    setUserEmail(email: string) {
      this.userEmail = email; // Kullanıcı e-postasını sakla
    },
    clearUser() {
      this.userEmail = null; // Kullanıcı bilgilerini temizle
    },
  },
  persist: true, // Persist özelliğini aktif et
});
