import React from "react";
import LogoImage from "../../assets/netflix-logo.png";
import "./logo.scss";

export default function Logo() {
    return (
        <div className="logo">
            <a href="#">
                <img src={LogoImage} width="150" height="85" alt="Netflix" />
            </a>
        </div>
    );
}
