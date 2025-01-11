import { defineStore } from "pinia";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Ürün türünü tanımlıyoruz
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [] as Product[], // Ürün listesi için bir state
    loading: false, // Yüklenme durumu
    error: null as string | null, // Hata mesajı
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null; // Hata durumunu sıfırla
      console.log("fetchProducts çağrıldı"); // TEST: İşlemin başladığını kontrol etmek için
      try {
        const db = getFirestore(); // Firestore bağlantısını alıyoruz
        const productsCollection = collection(db, "products"); // "products" koleksiyonunu alıyoruz
        console.log("Firestore koleksiyon bağlantısı başarılı"); // TEST: Bağlantıyı kontrol etmek için
        const snapshot = await getDocs(productsCollection); // Koleksiyondaki belgeleri alıyoruz
        console.log("Firestore snapshot:", snapshot.docs); // TEST: Gelen belgeleri kontrol etmek için

        // Boş veri kontrolü
        if (!snapshot.docs.length) {
          this.error = "Hiç ürün bulunamadı.";
          return;
        }

        this.products = snapshot.docs.map((doc) => {
          const data = doc.data();

          // Eksik alan kontrolü
          if (!data.name || !data.price || !data.image) {
            console.warn("Eksik alanlar tespit edildi:", data);
          }

          return {
            id: doc.id,
            name: data.name || "Ürün Adı Eksik",
            price: Number(data.price) || 0,
            image: data.image || "/default-image.png", // Eksikse varsayılan görsel
          };
        });

        console.log("Ürünler başarıyla çekildi:", this.products); // TEST: Map edilmiş ürünleri kontrol etmek için
      } catch (error) {
        this.error = "Ürünler yüklenirken bir hata oluştu.";
        console.error("fetchProducts hatası:", error); // TEST: Hata çıktısını kontrol etmek için
      } finally {
        this.loading = false; // Yüklenme durumunu kapat
      }
    },
  },
});
