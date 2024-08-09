import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC52WQXzt2OXxI7m8UKHVMyA5nM39XAL08",
  authDomain: "ardent-e9b04.firebaseapp.com",
  projectId: "ardent-e9b04",
  storageBucket: "ardent-e9b04.appspot.com",
  messagingSenderId: "296117935772",
  appId: "1:296117935772:web:f3e7e27eb528f4b7c95759",
  measurementId: "G-1574DE04FT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);