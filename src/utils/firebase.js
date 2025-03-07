
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGzOVAi-FTm82AtQsq-_zz7vCcPzqUiPU",
  authDomain: "netflix-gpt-43eb6.firebaseapp.com",
  projectId: "netflix-gpt-43eb6",
  storageBucket: "netflix-gpt-43eb6.firebasestorage.app",
  messagingSenderId: "989386712606",
  appId: "1:989386712606:web:fb6be45ceedcff6375f00f",
  measurementId: "G-FK3LVH0JCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);