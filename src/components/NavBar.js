import React from "react";
import './styles/NavBar.css';

class NavBar extends React.Component {
    render() {
        return <div id="hero">
            <nav>
                <h2 class="logo">Face<span>Nuke</span></h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>

                </ul>
                <button type="button">Make a Post</button>
            </nav>
        </div>
    }
}

export default NavBar;