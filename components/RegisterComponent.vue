<template>
    <div class="modal-overlay">
      <div class="modal">
        <button class="close-button" @click="$emit('close')">×</button>
        <h2 class="modal-title">Kayıt Ol</h2>
        <p class="modal-subtitle">Tüm verileriniz şifrelenerek korunur</p>
  
        <form @submit.prevent="register">
          <label for="name" class="form-label">İsim</label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="İsminizi girin"
            class="form-input"
            required
          />
  
          <label for="email" class="form-label">E-posta</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="E-posta adresinizi girin"
            class="form-input"
            required
          />
  
          <label for="password" class="form-label">Şifre</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Şifrenizi girin"
            class="form-input"
            required
          />
  
          <button type="submit" class="form-button">Kayıt Ol</button>
        </form>
  
        <p class="terms">
          Kayıt olarak <a href="#">Kullanım Şartları</a> ve <a href="#">Gizlilik Politikası</a>'nı kabul etmiş olursunuz.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        password: "",
  