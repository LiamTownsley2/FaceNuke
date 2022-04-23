import React from "react";
import './styles/NewPost.css';

import { createPost } from '../services/firebase.js';

function handleSubmission(e) {
    console.log("clicked!")
    createPost('test123');
}

class NewPost extends React.Component {
    render() {
        return <div id="newpost">
            <h1>What is on your <span>mind</span>?</h1>
            <form onSubmit={handleSubmission}>
                <textarea placeholder="Tell everyone what you're thinking..."></textarea>
                <button type="submit">Post to Public Wall!</button>
            </form>
        </div>
    }
}

export default NewPost;