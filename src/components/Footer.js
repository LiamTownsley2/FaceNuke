import React from "react";
import './styles/Footer.css';

class Footer extends React.Component {
    render() {
        return <div id="footer">
        <footer>
            <div className="container">
                    <div>
                        <h3>Site Navigation</h3>
                        <ul>
                            <li><a href="/sitemap.html">Sitemap</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            
                        </ul>
                    </div>
                    <div>
                        <h3>About</h3>
                        <ul>
                            <li><a href="https://github.com/LiamTownsley/FaceNuke" target="_blank" rel="noreferrer">The Code</a></li>
                            <li><a href="https://github.com/LiamTownsley?tab=repositories" target="_blank" rel="noreferrer">More of my Projects</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact Me</h3>
                        <ul>
                            <li><a href="https://github.com/LiamTownsley" target="_blank" rel="noreferrer">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/liam-townsley-0a2013237/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                            <li><a href="mailto:contact@liamtownsley.me" target="_blank" rel="noreferrer">E-Mail</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="copyright">Created by Liam Townsley</p>
                    </div>
            </div>
        </footer>
    </div>
    }
}

export default Footer;