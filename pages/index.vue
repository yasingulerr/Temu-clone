<template>
  <div>
    <Header />

    <!-- İlk Banner Alanı -->
    <div class="banner">
      <p class="banner-text">En iyi seçimler</p>
    </div>

    <!-- Ürünler ve ScrollProduct Component'i -->
    <ScrollProduct />

    <!-- İkinci Banner: KISA ÖZEL SEÇİMLER -->
    <div class="special-banner">
      <h2 class="banner-title">
        ❄️ <span>KIŞA ÖZEL SEÇİMLER</span> ❄️
      </h2>
      <p class="banner-subtitle">İLGİLENEBİLECEĞİN ÜRÜNLERİ KEŞFET</p>
    </div>

    <!-- GridProductList Component'i ekledik -->
    <GridProductList />

    <FeedBack />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ScrollProduct from "~/components/ScrollProduct.vue";
import FeedBack from "~/components/FeedBack.vue";
import GridProductList from "~/components/GridProductList.vue"; // GridProductList component'ini import ediyoruz.

export default {
  components: {
    Header,
    Footer,
    ScrollProduct,
    GridProductList, // GridProductList component'ini burada tanımlıyoruz
    FeedBack,
  },
};
</script>

<style scoped>
/* İlk Banner alanı stili */
.banner {
  background-color: #87CEEB; /* Açık mavi bir arka plan rengi */
  color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Arka plan görselleri için stil */
.banner::before,
.banner::after {
  content: "";
  position: absolute;
  width: 60px;
  height: 60px;
  background-size: contain;
  background-repeat: no-repeat;
}

.banner::before {
  background-image: url("https://via.placeholder.com/60x60"); /* Sol taraf için hediye kutusu resmi */
  left: 10px;
}

.banner::after {
  background-image: url("https://via.placeholder.com/60x60"); /* Sağ taraf için kardan adam resmi */
  right: 10px;
}

.banner-text {
  z-index: 1;
  color: white;
}

/* İkinci Banner alanı stili */
.special-banner {
  text-align: center;
  padding: 20px 10px;
  margin: 0px auto; /* Üst ve alt boşluk */
  width: 90%; /* Sayfanın genişliğine uyum sağlar */
  max-width: 1200px; /* Maksimum genişlik */
}

.banner-title {
  font-size: 24px;
  color: #d32f2f; /* Kırmızı renk */
  font-weight: bold;
  margin: 0;
}

.banner-subtitle {
  font-size: 16px;
  color: #333; /* Siyah tonlarında bir metin */
  margin-top: 10px;
}
</style>
