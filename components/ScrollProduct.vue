<template>
    <div
      class="scrollable-container"
      @wheel="handleWheel"
      ref="scrollContainer"
    >
      <div class="product-list">
        <slot />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "ScrollableProductList",
    setup() {
      const scrollContainer = ref<HTMLElement | null>(null);
  
      const handleWheel = (event: WheelEvent) => {
        if (!scrollContainer.value) return;
  
        // Mouse tekerleği hareketine göre kaydırma işlemi
        const scrollAmount = event.deltaY; // deltaY, dikey hareketi belirtir
        scrollContainer.value.scrollLeft += scrollAmount; // Yatayda kaydırma
  
        // İstenirse kaydırma hızını ayarlayabiliriz
        // scrollContainer.value.scrollLeft += scrollAmount * 0.5;
      };
  
      return {
        scrollContainer,
        handleWheel,
      };
    },
  });
  </script>
  
  <style scoped>
  .scrollable-container {
    overflow-x: auto; /* Yatay kaydırma */
    white-space: nowrap; /* Tek satırda kalmasını sağlar */
    padding: 10px 0;
    scrollbar-width: thin; /* Tarayıcıya özel kaydırma çubuğu genişliği */
  }
  
  .scrollable-container::-webkit-scrollbar {
    height: 8px; /* Kaydırma çubuğu yüksekliği */
  }
  
  .scrollable-container::-webkit-scrollbar-thumb {
    background: #888; /* Kaydırma çubuğu rengi */
    border-radius: 4px;
  }
  
  .scrollable-container::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  .product-list {
    display: flex; /* Kartları yan yana dizmek için */
    gap: 20px; /* Kartlar arasındaki boşluk */
  }
  
  .product-list > * {
    flex: 0 0 auto; /* Kartların boyutunun taşmasını engeller */
    width: 250px; /* Kart genişliği */
  }
  </style>
  