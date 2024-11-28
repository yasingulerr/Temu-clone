<template>
    <div class="login-container">
      <h2>Giriş Yap</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">E-posta</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="E-posta adresinizi girin"
          />
        </div>
  
        <div class="form-group">
          <label for="password">Şifre</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Şifrenizi girin"
          />
        </div>
  
        <div class="form-group">
          <button type="submit" class="login-btn">Giriş Yap</button>
        </div>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "LoginComponent",
    setup() {
      const email = ref("");
      const password = ref("");
      const error = ref<string | null>(null);
  
      const handleSubmit = () => {
        // Basit form doğrulaması
        if (!email.value || !password.value) {
          error.value = "E-posta ve şifre gereklidir!";
          return;
        }
  
        // Burada API'ye istek gönderebiliriz
        console.log("Giriş Yapılıyor...", email.value, password.value);
  
        // Başarılı giriş simülasyonu
        setTimeout(() => {
          error.value = null;
          alert("Giriş başarılı!");
        }, 1000);
      };
  
      return {
        email,
        password,
        error,
        handleSubmit,
      };
    },
  });
  </script>
  
  <style scoped>
  .login-container {
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
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  input:focus {
    outline: none;
    border-color: #007bff;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error-message {
    color: red;
    font-size: 14px;
    text-align: center;
    margin-top: 15px;
  }
  </style>
  