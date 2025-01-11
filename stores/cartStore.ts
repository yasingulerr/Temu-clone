import { defineStore } from "pinia";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cart: [] as CartItem[], // Sepet elemanları
  }),
  actions: {
    addToCart(product: CartItem) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: number) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
    decreaseQuantity(productId: number) {
      const existingItem = this.cart.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        this.removeFromCart(productId); // Eğer miktar 1'e düşerse ürünü kaldır
      }
    },
    increaseQuantity(productId: number) {
      const existingItem = this.cart.find((item) => item.id === productId);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    clearCart() {
      this.cart = [];
    },
  },
});
