import React from "react";
import "./search-form.scss"
import Button from "../Button/Button";

export default function SearchForm() {
    return(
        <div className="search-block">
            <h1>Find your movie</h1>
            <form action="#" className="search-form">
                <input type="search" placeholder="What do you want to watch?"/>
                <Button type="submit" title="submit" />
            </form>
        </div>
    )
}