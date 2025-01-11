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
import { useProductStore } from "@/stores/productStore"; // productStore'u import ediyoruz
import { onMounted, computed } from "vue";
import ProductCard from "~/components/ProductCard.vue";

export default {
  components: { ProductCard },
  setup() {
    const productStore = useProductStore(); // Pinia store'u kullanıyoruz

    // Store'daki state'leri bağla
    const products = computed(() => productStore.products);
    const loading = computed(() => productStore.loading);
    const error = computed(() => productStore.error);

    // onMounted içinde ürünleri çek
    onMounted(async () => {
      await productStore.fetchProducts(); // Firestore'dan ürünleri çek
      console.log("Ürünler:", productStore.products); // Konsola ürünleri yazdır
    });

    return {
      products,
      loading,
      error,
    };
  },
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
