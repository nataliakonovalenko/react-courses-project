import React from "react";
import "./footer.scss";
import Logo from "../Logo/Logo";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <Logo />
            </div>
        </footer>
    )
}