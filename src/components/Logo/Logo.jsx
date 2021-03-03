import React from "react";
import LogoImage from "../../assets/netflix-logo.png";
import "./logo.scss"

export default function Header() {
    return(
        <div className="logo">
            <a href="#">
                <img src={LogoImage} alt="Netflix"/>
            </a>
        </div>
    )
}