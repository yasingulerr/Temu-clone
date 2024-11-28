<template>
  <div class="logout-container">
    <h2>Oturumu Kapat</h2>
    <p>Hesabınızdan çıkış yapmak üzeresiniz. Devam etmek istiyor musunuz?</p>
    <div class="action-buttons">
      <button class="logout-btn" @click="handleLogout">Çıkış Yap</button>
      <button class="cancel-btn" @click="cancelLogout">Vazgeç</button>
    </div>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "nuxt/app";

export default defineComponent({
  name: "LogoutComponent",
  setup() {
    const message = ref<string | null>(null);
    const router = useRouter();

    const handleLogout = () => {
      // Oturumu kapatma işlemini simüle et
      message.value = "Oturum kapatılıyor...";
      
      setTimeout(() => {
        message.value = null;
        alert("Başarıyla çıkış yaptınız!");
        // Oturum kapandıktan sonra giriş sayfasına yönlendirme
        router.push("/login");
      }, 1000);
    };

    const cancelLogout = () => {
      // Çıkış işlemini iptal et
      message.value = "Çıkış işlemi iptal edildi.";
      setTimeout(() => {
        message.value = null;
      }, 2000);
    };

    return {
      message,
      handleLogout,
      cancelLogout,
    };
  },
});
</script>

<style scoped>
.logout-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

p {
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
  color: #555;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.logout-btn {
  background-color: #ff4d4d;
  color: white;
}

.logout-btn:hover {
  background-color: #e63939;
}

.cancel-btn {
  background-color: #ccc;
  color: #333;
}

.cancel-btn:hover {
  background-color: #b3b3b3;
}

.message {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: green;
}
</style>
