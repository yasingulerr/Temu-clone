<template>
  <div v-if="product" class="product-details-container">
    <!-- Ürün Görseli -->
    <div class="product-image">
      <img :src="product.image || '/default-image.png'" :alt="product.name" />
    </div>

    <!-- Ürün Bilgileri -->
    <div class="product-info">
      <h1 class="product-name">{{ product.name }}</h1>
      <p class="product-price">{{ formattedPrice(product.price) }}</p>
    </div>
  </div>
  <p v-else class="loading-message">Ürün bilgileri yükleniyor...</p>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { doc, getDoc, getFirestore } from "firebase/firestore"; // Firestore'dan veri almak için

export default defineComponent({
  name: "ProductDetails",
  setup() {
    const route = useRoute();
    const product = ref<any>(null); // Ürün verisi
    const db = getFirestore(); // Firestore bağlantısı

    // Ürün ID'yi al
    const productId = route.params.id;

    // Firestore'dan ürün bilgilerini getir
    const fetchProductById = async (id: string) => {
      try {
        const docRef = doc(db, "products", id); // "products" koleksiyonunda arama yap
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          console.error("Ürün bulunamadı.");
          return null;
        }
      } catch (error) {
        console.error("Ürün bilgisi alınırken bir hata oluştu:", error);
        return null;
      }
    };

    // Ürün bilgilerini yükle
    onMounted(async () => {
      const fetchedProduct = await fetchProductById(productId as string);
      if (fetchedProduct) {
        product.value = fetchedProduct;
      }
    });

    // Fiyatı formatlama fonksiyonu
    const formattedPrice = (price: number) =>
      new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(price);

    return {
      product,
      formattedPrice,
    };
  },
});
</script>

<style scoped>
.product-details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
}

.product-image img {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-info {
  text-align: center;
}

.product-name {
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
}

.product-price {
  font-size: 24px;
  font-weight: bold;
  color: #28a745;
}

.loading-message {
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-top: 20px;
}
</style>
