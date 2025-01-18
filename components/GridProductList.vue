<template>
  <div class="grid-product-list">
    <!-- Ürünler Yüklenirken -->
    <p v-if="loading" class="loading">Ürünler yükleniyor...</p>

    <!-- Hata Durumu -->
    <p v-if="error" class="error">{{ error }}</p>

    <!-- Ürün Yoksa -->
    <p v-if="!products.length && !loading && !error" class="no-products">
      Şu anda gösterilecek ürün yok.
    </p>

    <!-- Ürünler Varsa -->
    <div v-else class="product-item" v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "~/components/ProductCard.vue";

export default {
  props: {
    products: { type: Array, required: true },
    loading: { type: Boolean, required: true },
    error: { type: [String, null], required: false },
  },
  components: { ProductCard },
};
</script>

<style scoped>
.grid-product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.loading,
.no-products,
.error {
  text-align: center;
  font-size: 18px;
  color: #555;
  margin-top: 20px;
}
</style>
