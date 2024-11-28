<template>
  <div class="categories-dropdown">
    <button class="categories-btn">Kategoriler</button>
    <div class="categories-dropdown-content">
      <NuxtLink to="/category/men-clothing" class="category-item">Erkek Giyim</NuxtLink>
      <NuxtLink to="/category/home-kitchen" class="category-item">Ev ve Mutfak</NuxtLink>
      <NuxtLink to="/category/women-clothing" class="category-item">Kadın Giyim</NuxtLink>
      <NuxtLink to="/category/jewelry" class="category-item">Takı ve Aksesuar</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesDropdown",
};
</script>

<style scoped>
.categories-btn {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

.categories-btn:hover {
  background-color: #f1f1f1;
}

.categories-dropdown {
  position: relative;
  display: inline-block;
}

.categories-dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.categories-dropdown:hover .categories-dropdown-content {
  display: block;
}

.category-item {
  display: block;
  padding: 8px 12px;
  color: #333;
  text-decoration: none;
}

.category-item:hover {
  background-color: #f1f1f1;
  color: #007bff;
}
</style>
