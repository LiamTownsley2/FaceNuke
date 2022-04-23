import React from "react";
import './styles/Post.css';

import { timeAgo } from 'short-time-ago';

class Post extends React.Component {
    render() {
        const props = this.props.data;
        return <div className="post">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div id="post-author">
                <img src="https://avatars.githubusercontent.com/u/88986614?v=4" alt="Author Avatar" />
                <p>{props.author}</p>   
            </div>
            <p><em>{timeAgo(new Date(props.timestamp))}</em></p>
        </div>
    }
}

export default Post;