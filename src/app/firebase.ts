// Import the functions you need from the SDKs you need
import { getApp,getApps, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgb_h4w8yXRJH-mZWVZzmei6FcZGHNbi4",
  authDomain: "giphy-search-app-5c251.firebaseapp.com",
  projectId: "giphy-search-app-5c251",
  storageBucket: "giphy-search-app-5c251.appspot.com",
  messagingSenderId: "793006064944",
  appId: "1:793006064944:web:0939d88fe3eb4d2154f4f5"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export {app, db, auth}