<template>
  <div>
    <!-- Geri Bildirim Butonu -->
    <div v-if="!isModalVisible" class="feedback-button" @click="openModal">
      <span class="icon">✏️</span> Geri Bildirim
    </div>

    <!-- Modal -->
    <div v-if="isModalVisible" class="feedback-modal">
      <div class="modal-content">
        <h3>Deneyiminizi iyileştirmek için buradayız!</h3>
        <p>Bu gün sitemize yaptığınız ziyaret hakkında ne düşünüyorsunuz?</p>
        
        <div class="buttons">
          <button @click="submitFeedback('Kötü')">Kötü</button>
          <button @click="submitFeedback('İdare eder')">İdare eder</button>
          <button @click="submitFeedback('İyi')">İyi</button>
        </div>
        
        <button class="close-modal" @click="closeModal">Kapat</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FeedBack',
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    submitFeedback(feedback: string) {
      console.log('Geri bildirim:', feedback);
      this.closeModal();
    }
  }
};
</script>

<style scoped>
/* Geri Bildirim Butonu */
.feedback-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-size: 14px;
}

.feedback-button .icon {
  font-size: 20px;
  margin-right: 5px;
}

/* Modal Stilleri */
.feedback-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}

.modal-content h3 {
  margin-bottom: 20px;
}

.buttons button {
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #f1f1f1;
}

.close-modal {
  margin-top: 20px;
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.close-modal:hover {
  background-color: #e60000;
}
</style>
