<template>
  <div class="basket-container">
    <h2>Sepetim</h2>

    <!-- Giriş Yapan Kullanıcı Bilgisi -->
    <p v-if="userEmail" class="user-info">Merhaba, {{ userEmail }}</p>
    <p v-else class="user-info">Giriş yapmadınız. Lütfen <NuxtLink to="/login">Giriş Yapın</NuxtLink>.</p>

    <!-- Ürünler Listesi -->
    <div v-if="cartItems.length > 0" class="basket-items">
      <div v-for="item in cartItems" :key="item.id" class="basket-item">
        <!-- Sol kısım: Ürün görseli -->
        <img :src="item.image" :alt="item.name" class="product-image" />

        <!-- Orta kısım: Ürün bilgileri -->
        <div class="product-details">
          <h3 class="product-name">{{ item.name }}</h3>
          <p class="product-price">{{ formattedPrice(item.price) }}</p>
          <div class="quantity-controls">
            <label>Miktar</label>
            <select v-model="item.quantity" @change="$emit('update-cart', cartItems)">
              <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>
        </div>

        <!-- Sağ kısım: Ürün kaldır -->
        <button class="remove-item" @click="$emit('remove-item', item.id)">🗑️</button>
      </div>
    </div>

    <!-- Sepet Boş Mesajı -->
    <div v-else class="empty-basket">
      <p>Sepetiniz şu anda boş.</p>
      <NuxtLink to="/" class="continue-shopping">Alışverişe Devam Et</NuxtLink>
    </div>

    <!-- Toplam Fiyat -->
    <div v-if="cartItems.length > 0" class="basket-summary">
      <p>Toplam: <strong>{{ formattedPrice(totalPrice) }}</strong></p>
      <button class="checkout-button" @click="$emit('checkout')">Ödemeye Geç</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasketComponents",
  props: {
    userEmail: { type: String as () => string | null, required: false },
    cartItems: {
      type: Array as () => Array<{ id: string; name: string; price: number; quantity: number; image: string }>,
      required: true,
    },
  },
  emits: ["update-cart", "remove-item", "checkout"],
  setup(props) {
    const totalPrice = computed(() =>
      props.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );

    const formattedPrice = (price: number) =>
      new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(price);

    return {
      totalPrice,
      formattedPrice,
    };
  },
});
</script>

<style scoped>
.basket-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.user-info {
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
}

.basket-items {
  border-top: 2px solid #ddd;
  margin-top: 20px;
}

.basket-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.product-details {
  flex: 1;
  margin-left: 20px;
}

.product-name {
  font-weight: bold;
  font-size: 16px;
}

.product-price {
  color: #28a745;
  font-weight: bold;
  margin: 5px 0;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-controls select {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.remove-item {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #ff4d4d;
}

.remove-item:hover {
  color: #e63939;
}

.basket-summary {
  text-align: right;
  margin-top: 20px;
}

.checkout-button {
  background: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.checkout-button:hover {
  background: rgb(134, 99, 33);
}
</style>
