
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC52WQXzt2OXxI7m8UKHVMyA5nM39XAL08",
  authDomain: "ardent-e9b04.firebaseapp.com",
  projectId: "ardent-e9b04",
  storageBucket: "ardent-e9b04.appspot.com",
  messagingSenderId: "296117935772",
  appId: "1:296117935772:web:b1f24b53871e7830c95759",
  measurementId: "G-GBYGCP55WW"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
