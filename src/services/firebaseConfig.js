import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL, getBytes, } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDo,c } from "firebase/firestore";


// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyB5ewQ9A98haN8Y7GIGHheje-6ywzhx8gY",
    authDomain: "jardinbotanico-ee5f9.firebaseapp.com",
    projectId: "jardinbotanico-ee5f9",
    storageBucket: "jardinbotanico-ee5f9.appspot.com",
    messagingSenderId: "386315770744",
    appId: "1:386315770744:web:e47204f7feba1fd8b7c68d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);