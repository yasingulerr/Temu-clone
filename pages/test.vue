<template>
  <div class="layout">
    <nav class="sidebar">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        @click="showComponent(index)"
        class="nav-button"
      >
        Component {{ index + 1 }}
      </button>
    </nav>

    <main class="main-content">
      <component
        v-for="(comp, index) in components"
        :is="comp"
        :key="index"
        v-show="activeComponentIndex === index"
        v-bind="getProps(comp)"
      />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Nuxt'taki components klasöründeki bileşenleri import edin
import BasketComponents from "@/components/BasketComponents.vue";
import CategoriesDropDown from "@/components/CategoriesDropDown.vue";
import FeedBack from "@/components/FeedBack.vue";
import Footer from "@/components/Footer.vue";
import GridProductList from "@/components/GridProductList.vue";
import Header from "@/components/Header.vue";
import LoginComponents from "@/components/LoginComponents.vue";
import LogoutComponents from "@/components/LogoutComponents.vue";
import ProductCard from "@/components/ProductCard.vue";
import ScrollProduct from "@/components/ScrollProduct.vue";

// Test için örnek ürün verisi
const testProducts = [
  { id: 1, name: "Zeytinyağı", price: 89.99, imageUrl: "https://via.placeholder.com/150" },
  { id: 2, name: "Yeşil Zeytin", price: 45.99, imageUrl: "https://via.placeholder.com/150" },
  { id: 3, name: "Siyah Zeytin", price: 55.99, imageUrl: "https://via.placeholder.com/150" },
  { id: 4, name: "Organik Zeytinyağı", price: 120.0, imageUrl: "https://via.placeholder.com/150" },
  { id: 5, name: "Naturel Sızma", price: 99.99, imageUrl: "https://via.placeholder.com/150" },
  { id: 6, name: "Organik Sabun", price: 120.0, imageUrl: "https://via.placeholder.com/150" },
  { id: 7, name: "Mandalina Suyu", price: 99.99, imageUrl: "https://via.placeholder.com/150" }
];

// Tek bir ürün örneği
const testProduct = testProducts[0];

// Komponentlere özel `props` sağlama fonksiyonu
const getProps = (component) => {
  if (component === ProductCard) {
    return { product: testProduct };
  } else if (component === GridProductList || component === ScrollProduct) {
    return { products: testProducts }; // Bu bileşenler için ürün listesi gönderiyoruz
  }
  return {}; // Diğer komponentler props almıyorsa boş döndür
};

// Komponentleri bir listeye ekliyoruz
const components = [
  BasketComponents,
  CategoriesDropDown,
  FeedBack,
  ProductCard,
  GridProductList,
  Header,
  Footer,
  LoginComponents,
  LogoutComponents,
  ScrollProduct
];

// Aktif komponenti takip eden bir değişken
const activeComponentIndex = ref(0);

// Hangi komponentin aktif olacağını değiştiren fonksiyon
const showComponent = (index) => {
  activeComponentIndex.value = index;
};

// Sidebar'daki butonlar
const buttons = Array.from({ length: 10 }, (_, i) => `Component ${i + 1}`);
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 20%;
  background: #f4f4f4;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.nav-button {
  margin: 5px 0;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
}

.nav-button:hover {
  background-color: #0056b3;
}

.main-content {
  flex: 1;
  padding: 20px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
