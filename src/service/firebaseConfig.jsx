// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXpYJ2Ki_ZWMu1EQ32g1_OwfsXsS0Q2k0",
  authDomain: "trippy-ff231.firebaseapp.com",
  projectId: "trippy-ff231",
  storageBucket: "trippy-ff231.appspot.com",
  messagingSenderId: "464434139663",
  appId: "1:464434139663:web:b2fc3f4373d41b81f8897a",
  measurementId: "G-5SLRG1E60F"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);