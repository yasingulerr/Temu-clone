<template>
  <div>
    <Header />
    <BasketComponent />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import BasketComponent from "~/components/BasketComponents.vue";

export default {
  components: {
    Header,
    Footer,
    BasketComponent,
  },
};
</script>
