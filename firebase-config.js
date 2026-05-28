// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// FIX SEGURIDAD: App Check con reCAPTCHA v3 como proveedor.
// Esto verifica que las solicitudes vienen de tu dominio real, protegiendo la
// API key de abusos aunque sea visible en el código fuente del cliente.
//
// PASOS PARA ACTIVARLO:
//   1. Ve a Firebase Console → App Check → Registrar app
//   2. Selecciona reCAPTCHA v3 como proveedor
//   3. Registra tu sitio en https://www.google.com/recaptcha/admin y obtén la SITE KEY
//   4. Reemplaza 'TU_RECAPTCHA_V3_SITE_KEY' con tu clave real
//   5. En Firebase Console → App Check → Activar enforcement para Auth y Firestore
//
// MIENTRAS TANTO (sin App Check activo), restringe la API key en:
//   https://console.cloud.google.com → APIs & Services → Credentials
//   → Restricciones HTTP referrer → añade tu dominio (ej: https://english-leo.web.app/*)
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app-check.js";

const firebaseConfig = {
  apiKey: "AIzaSyD34QWMDfcenr-qtgtNFJggyKLl3ovKO70",
  authDomain: "english-leo.firebaseapp.com",
  projectId: "english-leo",
  storageBucket: "english-leo.firebasestorage.app",
  messagingSenderId: "350962866266",
  appId: "1:350962866266:web:3e582634913a29df136063",
  measurementId: "G-6CWCTG3TSF"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// App Check — comentado hasta que tengas tu site key de reCAPTCHA v3.
// Descomenta el bloque completo cuando esté lista la key:
/*
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('TU_RECAPTCHA_V3_SITE_KEY'),
  isTokenAutoRefreshEnabled: true
});
*/

export { auth, db, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, doc, setDoc, getDoc, collection, getDocs };
