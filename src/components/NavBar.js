import React from "react";
import './styles/NavBar.css';

class NavBar extends React.Component {
    render() {
        return <div id="hero">
            <nav>
                <h2 class="logo">Face<span>Nuke</span></h2>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
                <button type="button">Login</button>
            </nav>
        </div>
    }
}

export default NavBar;