import './App.css';

import NavBar from './components/NavBar.js';
import NewPost from './components/NewPost.js';
import Wall from './components/Wall.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="app">
      <NavBar />
      <NewPost />
      <Wall />
      <Footer />
    </div>
  );
}

export default App;
