<template>
  <div class="grid-product-list">
    <div class="product-item" 
         v-for="product in products" 
         :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "~/components/ProductCard.vue"; // ProductCard component'ini import ediyoruz.

export default defineComponent({
  name: "GridProductList",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  components: {
    ProductCard,
  },
});
</script>

<style scoped>
.grid-product-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 ürün bir satırda */
  gap: 20px; /* Ürünler arasındaki boşluk */
  margin: 20px 0;
}

.product-item {
  display: flex;
  justify-content: center; /* Ürünleri ortalamak için */
}

@media (max-width: 1200px) {
  .grid-product-list {
    grid-template-columns: repeat(4, 1fr); /* Daha küçük ekranlarda 4 ürün */
  }
}

@media (max-width: 992px) {
  .grid-product-list {
    grid-template-columns: repeat(3, 1fr); /* Tablet ve daha küçük ekranlarda 3 ürün */
  }
}

@media (max-width: 768px) {
  .grid-product-list {
    grid-template-columns: repeat(2, 1fr); /* Mobilde 2 ürün */
  }
}

@media (max-width: 480px) {
  .grid-product-list {
    grid-template-columns: 1fr; /* Küçük ekranlarda 1 ürün */
  }
}
</style>
