// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlKn-yplx5xNLqSBvOzAsJLe0wMQMlfrY",
    authDomain: "blog-website-56b95.firebaseapp.com",
    projectId: "blog-website-56b95",
    storageBucket: "blog-website-56b95.appspot.com",
    messagingSenderId: "342524078769",
    appId: "1:342524078769:web:c4b63f908e0c17664cd090",
    measurementId: "G-GDRBLPZSF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);