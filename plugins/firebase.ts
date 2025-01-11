// Firebase SDK modüllerini içe aktar
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore için modül
import { getAnalytics } from "firebase/analytics";

// Firebase konfigürasyonun
const firebaseConfig = {
  apiKey: "AIzaSyDXHqhoZMWCDE9Sid1HPlaA3uAweywuQ2w",
  authDomain: "webprog2025.firebaseapp.com",
  projectId: "webprog2025",
  storageBucket: "webprog2025.firebasestorage.app",
  messagingSenderId: "56330018416",
  appId: "1:56330018416:web:b74bb5c9c489787cd2deb5",
  measurementId: "G-Q2P22LJG41",
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);

// Firestore ve Analytics servislerini başlat
export const db = getFirestore(app); // Firestore bağlantısı
export const analytics = getAnalytics(app); // Analytics servisi (isteğe bağlı)
