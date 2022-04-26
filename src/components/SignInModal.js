import React from "react";
import GoogleButton from 'react-google-button'
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInAnonymously } from "firebase/auth";

import './styles/SignInModal.css';
import { authentication } from "../services/firebase-config";

import GitHubLogo from "../images/github.svg";

const SignInModal = ({ display, toggle }) => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then(re => {
                console.log(re);
                toggle();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const signInWithGithub = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(authentication, provider)
        .then(re => {
            console.log(re);
            toggle();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const signInDemo = () => {
        signInAnonymously(authentication);
        toggle();
    }

    return display && <div id="signinmodal">
        <div id="signinmodal-child">
            <h1>Sign In!</h1>
            <p>You can sign in using your Google Acccount! We also provide a Demo Account for ease-of-access whilst testing out the site.</p>
            <div id="signin-buttons">
                <GoogleButton
                    onClick={signInWithGoogle}
                    type="dark"
                />

                <div id="github" onClick={signInWithGithub}>
                    <div id="github-child">
                        <img src={GitHubLogo} alt="GitHub Logo"></img>
                    </div>
                    <span>Sign in with Github</span>
                </div>
                <div id="demo" onClick={signInDemo}>Demo User</div>
            </div>
            <p onClick={toggle} id="nevermind-link">Nevermind, I don't want to sign in.</p>

        </div>
    </div>;
}

export default SignInModal;