import React from "react";
import Post from './Post.js';
import './styles/Wall.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { authentication } from "../services/firebase-config.js";


const Wall = ({ posts }) => {
    return <div id="wall">
        <h1>Public Wall</h1>
        <h2>You can view the recent posts made by members of our community.</h2>

        <div id="post-list">
            {posts.slice(0, 5).map(p => <Post key={p.postId} props={p} />)}
        </div>
    </div>
}

export default Wall;