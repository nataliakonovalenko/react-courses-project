import React from "react";
import AddMovieButton from "./AddMovieButton/AddMovieButton";
import "./header.scss";
import Logo from "../Logo/Logo";
import HeroImage from "../../assets/hero-img.jpg";
import SearchForm from "./SearchForm/SearchForm";

export default function Header() {
    return(
        <header className="header">
            <div className="bg-image" style={{ backgroundImage: `url(${HeroImage})` }} />
            <div className="top-header">
                <div className="container">
                    <Logo />
                    <AddMovieButton />
                </div>
            </div>
            <div className="search-block">
                <h1>Find your movie</h1>
                <SearchForm />
            </div>
        </header>
    )
}