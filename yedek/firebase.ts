// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIS9UCv2sucqIA8hCytG-WGnDzIrG8nHY",
  authDomain: "my-nuxt-project-c8cbe.firebaseapp.com",
  projectId: "my-nuxt-project-c8cbe",
  storageBucket: "my-nuxt-project-c8cbe.firebasestorage.app",
  messagingSenderId: "884264088481",
  appId: "1:884264088481:web:d614d958348e6b95d7d1e0",
  measurementId: "G-5CGRDCS20B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);