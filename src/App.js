import './App.css';

import { useAuthState } from "react-firebase-hooks/auth";

import React, { useCallback, useEffect } from "react";
import NavBar from './components/NavBar.js';
import NewPost from './components/NewPost.js';
import Wall from './components/Wall.js';
import Footer from './components/Footer.js';
import SignIn from './components/SignIn.js';
import SignInModal from './components/SignInModal.js';
import { authentication } from './services/firebase-config';
// import { getPosts } from './services/firebase';

import logo from './images/logo.png';
import { getPosts } from './services/firebase';

export let posts = [{
  id: '1',
  title: 'Demo Post!',
  description: 'This is a post to demonstrate where your posts will show up!',
  timestamp: new Date().toISOString(),
  author: 'Liam Townsley - System',
  postId: 'DEFAULT_POST',
  avatarURL: logo
}];

function App() {
  const [post, setPost] = React.useState(posts);
  const [displayModal, setDisplayModal] = React.useState(false);
  const [user] = useAuthState(authentication);

  const update = useCallback((newPosts) => {
    let post_arr = [];
    if (newPosts?.length > 1) {
      post_arr = [...newPosts, ...post]
    } else {
      post_arr = [newPosts, ...post]
    }
    setPost([...post_arr])
  }, [post]);

  const loadPosts = useCallback(async () => {
    const posts = await getPosts();
    update([...posts]);
  }, [update]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts])

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  }

  return (
    <div className="app">
      <SignInModal display={displayModal} toggle={toggleModal} />
      <NavBar toggle={toggleModal} logged_in={user ? true : false} />
      {user ? <NewPost onUpdate={update} toggle={toggleModal} /> : <SignIn />}
      <Wall posts={post} />
      <Footer />
    </div>
  );
}

export default App;
