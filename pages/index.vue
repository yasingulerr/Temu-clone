<template>
  <div>
    <Header />
    <p></p>
    KISA SÜRELİ FIRSATLAR

    <!-- Ürünler ve ScrollProduct Component'i -->
    <ScrollProduct>
      <ProductCard 
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ScrollProduct>

    <!-- GridProductList Component'i ekledik -->
    <GridProductList :products="products" />

    <FeedBack />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ProductCard from "~/components/ProductCard.vue";
import ScrollProduct from "~/components/ScrollProduct.vue";
import FeedBack from "~/components/FeedBack.vue";
import GridProductList from "~/components/GridProductList.vue"; // GridProductList component'ini import ediyoruz.

export default {
  components: {
    Header,
    Footer,
    ProductCard,
    ScrollProduct,
    GridProductList, // GridProductList component'ini burada tanımlıyoruz
    FeedBack, 
  },

  setup() {
    const products = [
      {
        id: 1,
        name: "Kablosuz Kulaklık",
        price: 299.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Dizüstü Bilgisayar",
        price: 5999.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "Akıllı Saat",
        price: 899.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Kablosuz Kulaklık",
        price: 299.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        name: "Dizüstü Bilgisayar",
        price: 5999.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 6,
        name: "Akıllı Saat",
        price: 899.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 7,
        name: "Kablosuz Kulaklık",
        price: 299.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 8,
        name: "Dizüstü Bilgisayar",
        price: 5999.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 9,
        name: "Akıllı Saat",
        price: 899.99,
        imageUrl: "https://via.placeholder.com/150",
      },
    ];

    return { products };
  },
};
</script>

<style scoped>
/* Burada stil ekleyebilirsiniz */
</style>
