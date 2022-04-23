import React from "react";
import './styles/NavBar.css';

class NavBar extends React.Component {
    render() {
        return <div id="hero">
            <nav>
                <h2 className="logo">Face<span>Nuke</span></h2>
                <h1 className="subhero">Home Page</h1>
                {/* <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Contact Us</a></li>
                    <li><a href="#service">Report Content</a></li>
                </ul> */}
                <button type="button">Login</button>
            </nav>
        </div>
    }
}

export default NavBar;