<template>
  <div class="product-details">
    <h2>{{ product.name }}</h2>
    <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    <p class="product-price">{{ formattedPrice }}</p>
    <p class="product-description">{{ product.description }}</p>
    <button @click="addToCart" class="add-to-cart">Sepete Ekle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "DetailsComponents",
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  setup(props) {
    // Fiyatı formatlama
    const formattedPrice = computed(() => {
      return new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
      }).format(props.product.price);
    });

    // Sepete ekle işlevi
    const addToCart = () => {
      console.log(`${props.product.name} sepete eklendi!`);
      // Buraya Vuex/Pinia gibi bir state yönetimi ekleyebilirsin.
    };

    return {
      formattedPrice,
      addToCart,
    };
  },
});

// Ürün arayüzü tanımı (TypeScript)
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}
</script>

<style scoped>
.product-details {
  padding: 20px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
  color: #28a745;
  margin-bottom: 15px;
}

.product-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.add-to-cart {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #0056b3;
}
</style>
