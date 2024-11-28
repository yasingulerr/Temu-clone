<template>
    <footer class="footer">
      <div class="container">
        <!-- Üst Kısım: Bağlantılar -->
        <div class="links">
          <ul>
            <li><NuxtLink to="/about">Hakkımızda</NuxtLink></li>
            <li><NuxtLink to="/contact">İletişim</NuxtLink></li>
            <li><NuxtLink to="/help">Yardım Merkezi</NuxtLink></li>
            <li><NuxtLink to="/privacy">Gizlilik Politikası</NuxtLink></li>
            <li><NuxtLink to="/terms">Kullanım Şartları</NuxtLink></li>
          </ul>
        </div>
  
        <!-- Orta Kısım: Sosyal Medya -->
        <div class="social-media">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <img src="https://img.icons8.com/?size=100&id=118466&format=png&color=000000" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <img src="https://img.icons8.com/?size=100&id=60014&format=png&color=000000" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <img src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000" alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <img src="https://img.icons8.com/?size=100&id=98960&format=png&color=000000" alt="LinkedIn" />
          </a>
        </div>
  
        <!-- Alt Kısım: Telif Hakkı -->
        <div class="copyright">
          <p>&copy; {{ new Date().getFullYear() }} TemuClone. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  /* Footer genel stil */
  .footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    margin-top: 50px;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  /* Bağlantılar */
  .links ul {
    list-style: none;
    padding: 0;
    margin: 0 0 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .links li a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
  }
  
  .links li a:hover {
    text-decoration: underline;
  }
  
  /* Sosyal Medya */
  .social-media {
    margin-bottom: 15px;
  }
  
  .social-media a {
    margin: 0 10px;
    display: inline-block;
  }
  
  .social-media img {
    width: 24px;
    height: 24px;
    filter: brightness(0) invert(1); /* Beyaz ikonlar için */
    transition: transform 0.2s ease;
  }
  
  .social-media img:hover {
    transform: scale(1.1);
  }
  
  /* Telif Hakkı */
  .copyright p {
    font-size: 12px;
    margin: 0;
    color: #bbb;
  }
  </style>