// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsgzv7Bhlc_TNStCggwKZ1h6us8mMS4IQ",
  authDomain: "auth-context-tailwind.firebaseapp.com",
  projectId: "auth-context-tailwind",
  storageBucket: "auth-context-tailwind.appspot.com",
  messagingSenderId: "419875878135",
  appId: "1:419875878135:web:d5ad868b26ef17f51fcff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;