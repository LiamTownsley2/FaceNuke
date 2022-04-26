import React from "react";
import { authentication } from "../services/firebase-config";
import './styles/NavBar.css';
import anonymous from '../images/default.png';

const NavBar = ({logged_in, toggle}) => {
    const signOut = () => {
        if(authentication.currentUser) {
            authentication.signOut();
        }
    }
    return logged_in ? <div id="hero">
        <nav>
            <h2 className="logo">Face<span>Nuke</span></h2>
            <h1 className="subhero">Home Page</h1>
            <div id="user-logged" onClick={signOut}>
                <img
                    src={authentication.currentUser.photoURL ? authentication.currentUser.photoURL : anonymous}
                    id="user_account"
                    rel="noreferrer"
                    alt="Your Avatar"
                />
                <h2>{authentication.currentUser.displayName ? authentication.currentUser.displayName : 'Demo User'}</h2>

            </div>
        </nav>
    </div>: <div id="hero">
        <nav>
            <h2 className="logo">Face<span>Nuke</span></h2>
            <h1 className="subhero">Home Page</h1>
            <button type="button" onClick={toggle}>Login</button>
        </nav>
    </div>
}

export default NavBar;