<template>
  <div class="product-card">
    <!-- Ürün Görseli -->
    <NuxtLink :to="`/${product.id}`" class="image-wrapper">
      <img :src="product.image || '/default-image.png'" :alt="product.name" />
    </NuxtLink>

    <!-- Ürün Bilgileri -->
    <div class="product-info">
      <h3 class="product-name">
        <NuxtLink :to="`/pages/${product.id}`">{{ product.name }}</NuxtLink>
      </h3>
      <p class="product-price">{{ formattedPrice }}</p>
    </div>

    <!-- Eylemler -->
    <div class="actions">
      <button @click="addToCart" class="add-to-cart">Sepete Ekle</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import { doc, getDoc, setDoc, updateDoc, getFirestore } from "firebase/firestore";

interface BasketItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  setup(props) {
    const authStore = useAuthStore();

    const formattedPrice = computed(() => {
      return new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
      }).format(props.product.price);
    });

    const addToCart = async () => {
      const userEmail = authStore.userEmail;

      if (!userEmail) {
        alert("Sepete ürün eklemek için giriş yapmalısınız.");
        return;
      }

      try {
        const db = getFirestore();
        const docRef = doc(db, "baskets", userEmail);
        const docSnap = await getDoc(docRef);

        let basket: BasketItem[] = [];
        if (docSnap.exists()) {
          basket = docSnap.data()?.basket || [];
        } else {
          await setDoc(docRef, { basket: [] });
        }

        const existingItem = basket.find((item: BasketItem) => item.id === props.product.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          basket.push({
            id: props.product.id,
            name: props.product.name,
            price: props.product.price,
            image: props.product.image,
            quantity: 1,
          });
        }

        await updateDoc(docRef, { basket });
        alert(`${props.product.name} sepete eklendi!`);
      } catch (error) {
        console.error("Ürün sepete eklenirken hata oluştu:", error);
      }
    };

    return {
      formattedPrice,
      addToCart,
    };
  },
});

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}
</script>

<style scoped>
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  width: 250px;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Ürün Görseli */
.image-wrapper {
  width: 100%;
  height: 200px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-bottom: 1px solid #e0e0e0;
}

/* Ürün Bilgileri */
.product-info {
  padding: 10px;
}

.product-name a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
}

.product-name a:hover {
  color: #007bff;
}

.product-price {
  font-size: 20px;
  font-weight: bold;
  color: #28a745;
  margin-top: 5px;
}

/* Eylemler */
.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 100%;
}

.add-to-cart {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
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
