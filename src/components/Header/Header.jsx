import React from "react";
import AddMovieButton from "./AddMovieButton/AddMovieButton";
import "./Header.scss";
import HeaderLogo from "../../assets/netflix-logo.png"

export default function Header() {
    return(
        <header className={"header"}>
            <div className={"container"}>
                <div className={"logo"}>
                    <a href={"#"}>
                        <img src={HeaderLogo} alt="Netflix"/>
                    </a>
                </div>
                <AddMovieButton />
            </div>
        </header>
    )
}