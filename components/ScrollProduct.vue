<template>
  <div class="scrollable-container">
    <!-- Sol Kaydırma Butonu -->
    <button class="scroll-button left" @click="scrollLeft">‹</button>

    <div class="product-list" ref="scrollContainer">
      <!-- Yükleniyor Mesajı -->
      <p v-if="loading" class="loading">Ürünler yükleniyor...</p>

      <!-- Hata Mesajı -->
      <p v-if="error" class="error">{{ error }}</p>

      <!-- Ürün Yok Mesajı -->
      <p v-if="!products.length && !loading && !error" class="no-products">
        Şu anda gösterilecek ürün yok.
      </p>

      <!-- Ürünler -->
      <ProductCard
        v-for="product in products"
        :key="product"
        :product="product"
      />
    </div>

    <!-- Sağ Kaydırma Butonu -->
    <button class="scroll-button right" @click="scrollRight">›</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import ProductCard from "~/components/ProductCard.vue";
import { collection, getDocs, getFirestore } from "firebase/firestore"; // Firestore işlemleri

export default defineComponent({
  name: "ScrollableProductList",
  components: { ProductCard },
  setup() {
    const scrollContainer = ref<HTMLElement | null>(null);
    const products = ref([]); // Ürün listesi
    const loading = ref(true); // Yükleniyor durumu
    const error = ref<string | null>(null); // Hata durumu

    // Ürünleri Firebase'den çek
    const fetchProducts = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "products")); // Firestore'daki "products" koleksiyonunu al
        products.value = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (err) {
        console.error("Ürünler alınırken hata oluştu:", err);
        error.value = "Ürünler yüklenirken bir hata oluştu.";
      } finally {
        loading.value = false; // Yükleniyor durumunu kapat
      }
    };

    // Sağa kaydırma işlemi
    const scrollRight = () => {
      if (scrollContainer.value) {
        scrollContainer.value.scrollLeft += 300; // 300px sağa kaydır
      }
    };

    // Sola kaydırma işlemi
    const scrollLeft = () => {
      if (scrollContainer.value) {
        scrollContainer.value.scrollLeft -= 300; // 300px sola kaydır
      }
    };

    // Bileşen yüklendiğinde ürünleri çek
    onMounted(() => {
      fetchProducts();
    });

    return {
      scrollContainer,
      scrollLeft,
      scrollRight,
      products,
      loading,
      error,
    };
  },
});
</script>

<style scoped>
.scrollable-container {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden; /* Taşan içeriği gizle */
  padding: 10px 0;
}

.product-list {
  display: flex; /* Kartları yan yana dizmek için */
  gap: 20px; /* Kartlar arasındaki boşluk */
  overflow-x: auto; /* Yatay kaydırma */
  scroll-behavior: smooth; /* Kaydırma animasyonu */
}

.product-list > * {
  flex: 0 0 auto; /* Kartların boyutunun taşmasını engeller */
  width: 250px; /* Kart genişliği */
}

.scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.scroll-button:hover {
  background-color: #0056b3;
}

.scroll-button.left {
  left: 10px;
}

.scroll-button.right {
  right: 10px;
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
