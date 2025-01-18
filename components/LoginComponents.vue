<template>
  <div class="modal-overlay">
    <div class="modal">
      <button class="close-button" @click="$emit('close')">×</button>
      <h2 class="modal-title">{{ isLogin ? "Giriş Yap" : "Kayıt Ol" }}</h2>
      <p class="modal-subtitle">Tüm verileriniz şifrelenerek korunur</p>

      <form @submit.prevent="isLogin ? login() : register()">
        <label for="email" class="form-label">E-posta</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="E-posta adresinizi girin"
          class="form-input"
          required
        />
        <div v-if="emailError" class="error-message">{{ emailError }}</div>

        <label for="password" class="form-label">Şifre</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Şifrenizi girin"
          class="form-input"
          required
        />
        <div v-if="passwordError" class="error-message">{{ passwordError }}</div>

        <button type="submit" class="form-button">
          {{ isLogin ? "Devam Et" : "Kayıt Ol" }}
        </button>
      </form>

      <p class="switch-mode">
        {{ isLogin ? "Üye değil misiniz? " : "Hesabınız var mı? " }}
        <a href="#" @click="toggleMode">{{ isLogin ? "Kayıt Ol" : "Giriş Yap" }}</a>
      </p>

      <p class="terms">
        Devam ederek <a href="#">Kullanım Şartları</a> ve <a href="#">Gizlilik Politikası</a>'nı kabul etmiş olursunuz.
      </p>
    </div>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthStore } from "@/stores/auth"; // authStore'u dahil ediyoruz

// Firebase konfigürasyonu
const firebaseConfig = {
  apiKey: "AIzaSyAIS9UCv2sucqIA8hCytG-WGnDzIrG8nHY",
  authDomain: "my-nuxt-project-c8cbe.firebaseapp.com",
  projectId: "my-nuxt-project-c8cbe",
  storageBucket: "my-nuxt-project-c8cbe.firebasestorage.app",
  messagingSenderId: "884264088481",
  appId: "1:884264088481:web:d614d958348e6b95d7d1e0",
  measurementId: "G-5CGRDCS20B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default {
  data() {
    return {
      email: "",
      password: "",
      isLogin: true, // Giriş ve kayıt arasında geçiş için kontrol
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    async login() {
      if (!this.validateInputs()) return;

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const authStore = useAuthStore(); // Pinia store'u kullan
        authStore.setUserEmail(userCredential.user.email); // Kullanıcı email'ini sakla
        console.log("Giriş Başarılı:", userCredential.user.email);
        alert(`Hoş geldiniz, ${userCredential.user.email}`);
        this.$emit("close"); // Modalı kapat
      } catch (error) {
        console.error("Giriş Hatası:", error.message);
        this.passwordError = "Geçersiz email veya şifre!";
      }
    },
    async register() {
      if (!this.validateInputs()) return;

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log("Kayıt Başarılı:", userCredential.user.email);
        alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
        this.toggleMode(); // Kayıttan sonra giriş moduna geçiş
      } catch (error) {
        console.error("Kayıt Hatası:", error.message);
        this.emailError = "Bu email adresi zaten kullanımda!";
      }
    },
    validateInputs() {
      if (!this.email) {
        this.emailError = "Email alanı boş olamaz!";
        return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.emailError = "Geçerli bir email adresi giriniz";
        return false;
      }
      this.emailError = "";

      if (!this.password) {
        this.passwordError = "Şifre alanı boş olamaz!";
        return false;
      }
      this.passwordError = "";
      return true;
    },
    toggleMode() {
      this.isLogin = !this.isLogin;
      this.emailError = "";
      this.passwordError = "";
    },
  },
};
</script>

<style scoped>
/* Tüm CSS aynı kalabilir */
</style>


<style scoped>
/* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal content */
.modal {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  position: relative;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Close button */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Modal title and subtitle */
.modal-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.modal-subtitle {
  font-size: 14px;
  color: green;
  margin-bottom: 20px;
}

/* Form */
.form-label {
  display: block;
  text-align: left;
  font-size: 14px;
  margin-bottom: 5px;
}

.form-input {
  width: 90%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 14px;
}

.form-button {
  width: 90%;
  padding: 10px;
  background: orange;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.form-button:hover {
  background: darkorange;
}

/* Switch mode link */
.switch-mode {
  margin: 15px 0;
  font-size: 14px;
}

.switch-mode a {
  color: #007bff;
  text-decoration: none;
}

.switch-mode a:hover {
  text-decoration: underline;
}

/* Error message */
.error-message {
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 10px;
}
</style>
