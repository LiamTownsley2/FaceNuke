import { addDoc, collection, getDocs, limit, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { authentication, db } from './firebase-config';

// import { getAnalytics } from "firebase/analytics";
// import { useCollectionData } from "react-firebase-hooks/firestore";

// import { posts } from '../components/Wall.js';



// const analytics = getAnalytics(app);
// const users = collection(db, 'users')
const posts = collection(db, 'posts')


export const getPosts = async () => {
    const post = await getDocs(query(posts, orderBy('timestamp', 'desc'), limit(5)));
    const post_arr = [];
    post.forEach((doc) => {
        post_arr.push(doc.data());
    });
    return post_arr;
};

export const addPost = async (post) => {
    const user = authentication.currentUser;
    if (!user.isAnonymous) {
        addDoc(posts, {
            postId: user.uid + Math.floor(Math.random() * 9999999).toString(),
            uid: user.uid,
            title: post.title,
            description: post.description,
            avatarURL: post.avatarURL,
            author: post.author,
            timestamp: serverTimestamp()
        })
    }
}

export const updateData = async () => {

}