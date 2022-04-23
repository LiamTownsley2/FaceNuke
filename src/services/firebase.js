import {initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// import { useCollectionData } from "react-firebase-hooks/firestore";

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
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export const createPost = (title) => {
    const posts = db.collection('posts');
    // const query = posts.orderBy('timestamp').limit(25);

    // const [message] = useCollectionData(query)
    return posts.add({
        title: 'Title',
        description: 'Desc',
        likes: 10,
        author: '/users/2',
        timestamp: new Date().toISOString()
    });
};