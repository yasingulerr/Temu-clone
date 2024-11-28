<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <NuxtLink to="/">TemuClone</NuxtLink>
      </div>

      <!-- Kategoriler -->
      <CategoriesDropdown />

      <!-- Search Bar -->
      <div class="search-bar">
        <input type="text" placeholder="Ürün, kategori veya marka ara" />
        <button type="button">Ara</button>
      </div>

      <!-- Actions -->
      <div class="actions">
        <NuxtLink to="/favorites" class="action-item">Favoriler</NuxtLink>
        <NuxtLink to="/basket" class="action-item">Sepet</NuxtLink>
        <NuxtLink to="/login" class="action-item">Giriş Yap</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
import CategoriesDropdown from "~/components/CategoriesDropDown.vue";  // Import the CategoriesDropdown component

export default {
  name: "Header",
  components: {
    CategoriesDropdown, // Register the component
  },
};
</script>

<style scoped>
/* Header genel stili */
.header {
  background-color: #f8f9fa;
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
.logo a {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.logo a:hover {
  color: #007bff;
}

/* Arama çubuğu */
.search-bar {
  flex: 1;
  margin: 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
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
}

.action-item:hover {
  color: #007bff;
}
</style>
