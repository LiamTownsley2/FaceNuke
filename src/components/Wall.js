import React from "react";
import Post from './Post.js';
import './styles/Wall.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const posts = [
    {
        id: '1',
        title: 'Hello World',
        description: 'This is a Hello World test!',
        likes: 1,
        timestamp: new Date().toISOString(),
        author: 'Liam T.' // should be just an ID!!!!!! use it to cross reference author save in different list
    },
    {
        id: '2',
        title: 'abc',
        description: 'cba',
        likes: 0,
        timestamp: new Date().toISOString(),
        author: 'John'
    }
];

class Wall extends React.Component {
    render() {
        return <div id="wall">
            <h1>Public Wall</h1>
            <h2>You can view the posts made by members of our community.</h2>
            <div className="alert">
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <p>This section of the live site is <strong>UNMODERATED</strong>.</p>
            </div>

            <div id="post-list">
                {posts.map(post => <Post key={post.id} data={post} />)}
            </div>
        </div>
    }
}

export default Wall;