<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <NuxtLink to="/">
          <img src="~/assets/image.png" alt="TEMU Logo" class="logo-image" />
        </NuxtLink>
      </div>

      <!-- Kategoriler -->
      <CategoriesDropdown />

      <!-- Arama Çubuğu ve Oturum Aç/Kullanıcı Bilgisi -->
      <div class="search-and-auth">
        <div class="search-bar">
          <input type="text" placeholder="Ürün, kategori veya marka ara" />
          <button type="button">Ara</button>
        </div>
        <!-- Kullanıcı Bilgisi veya Oturum Aç -->
        <div v-if="userEmail" class="user-info">
          <span @click="toggleUserMenu" class="user-greeting">Merhaba, {{ userEmail }}</span>
          <div v-if="showUserMenu" class="user-menu">
            <button @click="goToCart">Sepete Git</button>
            <button @click="logout">Çıkış Yap</button>
          </div>
        </div>
        <button v-else class="action-item" @click="toggleLoginModal">Oturum Aç/Kaydol</button>
      </div>

      <!-- Diğer Eylemler -->
      <div class="actions">
        <NuxtLink to="/" class="action-item">Destek</NuxtLink>
        <NuxtLink to="/basket" class="action-item">Sepet</NuxtLink>
      </div>
    </div>

    <!-- Giriş Modalı -->
    <LoginComponents
      v-if="showLoginModal"
      @close="toggleLoginModal"
    />
  </header>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import CategoriesDropdown from "~/components/CategoriesDropDown.vue";
import LoginComponents from "~/components/LoginComponents.vue";

export default defineComponent({
  name: "Header",
  components: {
    CategoriesDropdown,
    LoginComponents,
  },
  data() {
    return {
      showLoginModal: false, // Modal görünürlüğü kontrolü
      showUserMenu: false, // Kullanıcı menüsü görünürlüğü kontrolü
    };
  },
  computed: {
    userEmail() {
      const authStore = useAuthStore();
      return authStore.userEmail; // authStore'dan e-posta bilgisini al
    },
  },
  methods: {
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal;
    },
    toggleUserMenu() {
      this.showUserMenu = !this.showUserMenu;
    },
    goToCart() {
      this.$router.push("/basket"); // Sepete yönlendirme
      this.showUserMenu = false; // Menü kapanır
    },
    logout() {
      const authStore = useAuthStore();
      authStore.clearUser(); // Kullanıcı oturumunu temizle
      this.showUserMenu = false; // Menü kapanır
      alert("Çıkış yapıldı.");
    },
  },
});
</script>

<style scoped>
/* Header genel stili */
.header {
  background-color: #eaf4fb;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
}

/* Arama Çubuğu ve Kullanıcı Bilgisi */
.search-and-auth {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  margin: 0 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  flex: 1;
}

.search-bar input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #0056b3;
}

/* Kullanıcı Bilgisi */
.user-info {
  position: relative;
}

.user-greeting {
  font-size: 14px;
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
}

.user-menu {
  position: absolute;
  top: 20px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.user-menu button {
  padding: 10px 20px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  width: 100%;
}

.user-menu button:hover {
  background: #f0f0f0;
}

/* Kullanıcı eylemleri */
.actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.action-item {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.action-item:hover {
  background-color: #e9ecef;
  color: #007bff;
}
</style>
