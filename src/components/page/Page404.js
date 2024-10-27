import React from "react";
import { Link } from "react-router-dom";

function Page404(){
    return(
        <div>
            <div className="banner-page">
                <img src={`${process.env.PUBLIC_URL}/img/alwgk-kp3lq.webp`} alt="404page"></img>
                {/* <h1>404 ERROR</h1> */}
            </div>
            <div className="banner-404-text">
                <h3>Sorry, the page you are looking for no longer exists.</h3>
                <Link to="/" alt="back-Homepage" >HOMEPAGE<img src={`${process.env.PUBLIC_URL}/img/next-icon-b.svg`} alt="icon-next"></img></Link>
            </div>
        </div>
        );
    }

export default Page404;