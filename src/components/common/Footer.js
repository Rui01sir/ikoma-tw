import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ hide }) => {
    return(
        <div>
            <footer className={hide ? 'hidden' : ''}>
                <div className="footer-bar">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/img/web-logo-n.svg`} alt="nav-logo" />
                        </Link>
                    </div>
                    <ul>
                <li><Link to="/Company">COMPANY</Link></li>
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
                    <li><Link to="https://www.instagram.com/"><img src={`${process.env.PUBLIC_URL}/img/instagram_icon.svg`} alt="instagram-icon"></img></Link></li>
                    <li><a href="mailto:ikoma@ikoma-tw.com"><img src={`${process.env.PUBLIC_URL}/img/email_icon.svg`} alt="email-icon"></img></a></li>
                    <li><Link to="https://lin.ee/LM298cs"><img src={`${process.env.PUBLIC_URL}/img/line_icon.svg`} alt="facebook-icon"></img></Link></li>
                    <li><Link to="https://www.whatsapp.com/"><img src={`${process.env.PUBLIC_URL}/img/whatapp_icon.svg`} alt="whatapp-icons"></img></Link></li>
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
