import React from "react";
import './styles/NewPost.css';

class NewPost extends React.Component {
    render() {
        return <div id="newpost">
            <h1>What is on your <span>mind</span>?</h1>
            <form>
                <textarea placeholder="Tell everyone what you're thinking..."></textarea>
                <button type="submit">Post to Public Wall!</button>
            </form>
        </div>
    }
}

export default NewPost;