<template>
    <div class="product-card">
      <!-- Ürün Görseli -->
      <NuxtLink :to="`/product/${product.id}`" class="image-wrapper">
        <img :src="product.imageUrl" :alt="product.name" />
      </NuxtLink>
  
      <!-- Ürün Bilgileri -->
      <div class="product-info">
        <h3 class="product-name">
          <NuxtLink :to="`/product/${product.id}`">{{ product.name }}</NuxtLink>
        </h3>
        <p class="product-price">{{ formattedPrice }}</p>
      </div>
  
      <!-- Eylemler -->
      <div class="actions">
        <button @click="addToCart" class="add-to-cart">Sepete Ekle</button>
        <NuxtLink :to="`/product/${product.id}`" class="details">Detaylar</NuxtLink>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from "vue";
  
  export default defineComponent({
    name: "ProductCard",
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
  }
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #fff;
    transition: box-shadow 0.3s ease;
  }
  
  .product-card:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Ürün Görseli */
  .image-wrapper img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  /* Ürün Bilgileri */
  .product-info {
    margin-bottom: 15px;
  }
  
  .product-name a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
  }
  
  .product-name a:hover {
    color: #007bff;
  }
  
  .product-price {
    font-size: 18px;
    font-weight: bold;
    color: #28a745;
  }
  
  /* Eylemler */
  .actions {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .add-to-cart {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .add-to-cart:hover {
    background-color: #0056b3;
  }
  
  .details {
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
  }
  
  .details:hover {
    text-decoration: underline;
  }
  </style>
  