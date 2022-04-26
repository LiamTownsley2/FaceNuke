import { addDoc, collection, getDocs, limit, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { authentication, db } from './firebase-config';

// import { getAnalytics } from "firebase/analytics";
// import { useCollectionData } from "react-firebase-hooks/firestore";

// import { posts } from '../components/Wall.js';



// const analytics = getAnalytics(app);
const users = collection(db, 'users')
const posts = collection(db, 'posts')


export const getPosts = async () => {
    return query(posts, orderBy('timestamp'), limit(5))
};

export const addPost = async (post) => {
    const user = authentication.currentUser;
    if (!user.isAnonymous) {
        addDoc(posts, {
            uid: user.uid,
            title: post.title,
            description: post.description,
            avatarURL: post.avatarURL,
            author: post.author,
            timestamp: serverTimestamp()
        })
    }
}