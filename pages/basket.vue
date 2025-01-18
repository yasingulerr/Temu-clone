<template>
  <div>
    <Header />
    <BasketComponent
      :userEmail="userEmail"
      :cartItems="cartItems"
      @update-cart="updateCart"
      @remove-item="removeItem"
      @checkout="checkout"
    />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import BasketComponent from "~/components/BasketComponents.vue";
import { ref, onMounted, computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import { doc, getDoc, updateDoc, getFirestore } from "firebase/firestore";

export default {
  components: {
    Header,
    Footer,
    BasketComponent,
  },
  setup() {
    const authStore = useAuthStore();
    const userEmail = computed(() => authStore.userEmail);
    const cartItems = ref<any[]>([]);
    const db = getFirestore();

    const fetchCart = async () => {
      if (!userEmail.value) return;

      try {
        const docRef = doc(db, "baskets", userEmail.value);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          cartItems.value = docSnap.data()?.basket || [];
        }
      } catch (error) {
        console.error("Sepet alınırken hata:", error);
      }
    };

    const updateCart = async () => {
      if (!userEmail.value) return;

      try {
        const docRef = doc(db, "baskets", userEmail.value);
        await updateDoc(docRef, { basket: cartItems.value });
      } catch (error) {
        console.error("Sepet güncellenirken hata:", error);
      }
    };

    const removeItem = (id: string) => {
      cartItems.value = cartItems.value.filter((i) => i.id !== id);
      updateCart();
    };

    const checkout = () => {
      if (!userEmail.value) {
        alert("Satın alma işlemi için giriş yapmanız gerekiyor!");
        return;
      }
      alert("Satın alma işlemi başarıyla tamamlandı!");
      cartItems.value = [];
      updateCart();
    };

    onMounted(() => {
      fetchCart();
    });

    return {
      userEmail,
      cartItems,
      updateCart,
      removeItem,
      checkout,
    };
  },
};
</script>

<style scoped>
/* Gerekirse buraya sayfa için özel stiller eklenebilir */
</style>
