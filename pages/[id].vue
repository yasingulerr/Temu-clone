<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>{{ product.price }} TL</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ProductDetails',
  setup() {
    const route = useRoute();
    const product = ref(null);

    // Product ID'yi al
    const productId = route.params.id;

    // Ürün bilgilerini al (Bu kısmı API veya sabit veriyle test edebilirsiniz)
    onMounted(async () => {
      product.value = await fetchProductById(productId);
    });

    const fetchProductById = async (id: string) => {
      // Burada sabit bir ürün verisi kullanıyoruz
      return {
        name: 'Kablosuz Kulaklık',
        description: 'Yüksek kaliteli ses ve uzun pil ömrü.',
        price: 2000,
      };
    };

    return { product };
  }
});
</script>
