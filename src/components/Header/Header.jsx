import React from "react";
import HeaderLogo from "./HeaderLogo";
import AddMovieButton from "./AddMovieButton/AddMovieButton";
import "./Header.scss";

export default function Header() {
    return(
        <header className={"header"}>
            <div className={"container"}>
                <HeaderLogo />
                <AddMovieButton />
            </div>
        </header>
    )
}