import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBy-SlyvBgcXNH_wwm-oruzHOAOP7JZG3U",
    authDomain: "socialsite-efe60.firebaseapp.com",
    projectId: "socialsite-efe60",
    storageBucket: "socialsite-efe60.appspot.com",
    messagingSenderId: "272571628583",
    appId: "1:272571628583:web:4ba2ee259821ff01176202",
    measurementId: "G-5VZNQVS48D"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const authentication = getAuth(app);