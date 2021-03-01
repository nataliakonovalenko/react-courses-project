import React from "react";
import FooterLogo from "../../assets/netflix-logo.png";
import "./Footer.scss";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <img src={FooterLogo} alt="Netflix"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}