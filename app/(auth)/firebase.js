
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { router } from 'expo-router';

const firebaseConfig = {
  apiKey: "AIzaSyC52WQXzt2OXxI7m8UKHVMyA5nM39XAL08",
  authDomain: "ardent-e9b04.firebaseapp.com",
  projectId: "ardent-e9b04",
  storageBucket: "ardent-e9b04.appspot.com",
  messagingSenderId: "296117935772",
  appId: "1:296117935772:web:cc5879b47bb77b91c95759",
  measurementId: "G-VNRW5TKT3Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export async function signUp(email, password){
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {const user = userCredential.user})
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    console.log("New Account Created!")
    router.push('/home')

}

export async function signIn(email, password){
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {const user = userCredential.user})
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
    console.log("Successfully Logged In")
    router.push('/home')
}

export {app, auth}