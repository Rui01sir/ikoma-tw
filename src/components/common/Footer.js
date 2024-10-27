import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ hide }) => {
    return(
        <div>
            <footer className={hide ? 'hidden' : ''}>
                <div className="footer-bar">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/img/web-logo-n.webp`} alt="nav-logo" />
                        </Link>
                    </div>
                    <ul>
                <li><Link to="/Campany">COMPANY</Link></li>
                <li><Link to="/News">NEWS</Link></li>
                <li><Link to="/Product">PRODUCT</Link></li>
                <li><Link to="/Support">SUPPORT</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
                    </ul>   
                </div>
                <div className="footer-text">
            <p>Absolutely supply good quality and comfort shock absorber</p>
            <div className="footer-icon">
                <ul>
                    <li><Link to="https://www.instagram.com/"><img src={`${process.env.PUBLIC_URL}/img/instagram.webp`} alt="instagram-icon"></img></Link></li>
                    <li><a href="mailto:ikoma@ikoma-tw.com"><img src={`${process.env.PUBLIC_URL}/img/email.webp`} alt="email-icon"></img></a></li>
                    <li><Link to="https://www.facebook.com/"><img src={`${process.env.PUBLIC_URL}/img/facebook.webp`} alt="facebook-icon"></img></Link></li>
                    <li><Link to="https://www.whatsapp.com/"><img src={`${process.env.PUBLIC_URL}/img/whatapp.webp`} alt="whatapp-icons"></img></Link></li>
                </ul>
            </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-name">
            <h6>© 2024 IKOMA CO., LTD. All Rights Reserved Designed</h6>
            <p>By Blue Sky Design Studio Inc.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer