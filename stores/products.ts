import { defineStore } from "pinia";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [] as Array<{ id: string; name: string; price: number; image: string }>,
  }),
  actions: {
    async fetchProducts() {
      const db = getFirestore();
      const productsCollection = collection(db, "products");
      const productSnapshot = await getDocs(productsCollection);

      this.products = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Array<{ id: string; name: string; price: number; image: string }>;
    },
  },
});
