<template>
  <div class="basket-container">
    <h2>Sepetim</h2>

    <!-- Ürünler Listesi -->
    <div v-if="cartItems.length > 0" class="basket-items">
      <div
        v-for="(item, index) in cartItems"
        :key="item.id"
        class="basket-item"
      >
        <img :src="item.imageUrl" :alt="item.name" class="product-image" />

        <div class="product-details">
          <h3>{{ item.name }}</h3>
          <p>{{ formattedPrice(item.price) }}</p>
          <div class="quantity-controls">
            <button @click="decreaseQuantity(index)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)">+</button>
          </div>
        </div>

        <button class="remove-item" @click="removeItem(index)">Kaldır</button>
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
      <button class="checkout-button" @click="checkout">Satın Al</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";

export default defineComponent({
  name: "BasketComponents",
  setup() {
    // Sepet öğelerini tanımlıyoruz
    const cartItems = reactive([
      {
        id: 1,
        name: "Zeytinyağı",
        price: 100,
        quantity: 2,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Yeşil Zeytin",
        price: 50,
        quantity: 1,
        imageUrl: "https://via.placeholder.com/150",
      },
    ]);

    // Toplam fiyat hesaplama
    const totalPrice = computed(() => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    });

    // Fiyat formatlama
    const formattedPrice = (price: number) =>
      new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(price);

    // Miktar azaltma
    const decreaseQuantity = (index: number) => {
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
      }
    };

    // Miktar artırma
    const increaseQuantity = (index: number) => {
      cartItems[index].quantity++;
    };

    // Ürün kaldırma
    const removeItem = (index: number) => {
      cartItems.splice(index, 1);
    };

    // Ödeme işlemi
    const checkout = () => {
      alert("Satın alma işlemi başarıyla tamamlandı!");
      cartItems.splice(0, cartItems.length); // Sepeti boşalt
    };

    return {
      cartItems,
      totalPrice,
      formattedPrice,
      decreaseQuantity,
      increaseQuantity,
      removeItem,
      checkout,
    };
  },
});
</script>

<style scoped>
.basket-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.basket-items {
  margin-bottom: 20px;
}

.basket-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.product-image {
  width: 80px;
  height: 80px;
  margin-right: 15px;
  border-radius: 8px;
}

.product-details {
  flex: 1;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-controls button {
  padding: 5px 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.quantity-controls button:hover {
  background: #0056b3;
}

.remove-item {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.remove-item:hover {
  background: #e63939;
}

.empty-basket {
  text-align: center;
}

.continue-shopping {
  color: #007bff;
  text-decoration: none;
}

.continue-shopping:hover {
  text-decoration: underline;
}

.basket-summary {
  text-align: right;
}

.checkout-button {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.checkout-button:hover {
  background: #218838;
}
</style>
