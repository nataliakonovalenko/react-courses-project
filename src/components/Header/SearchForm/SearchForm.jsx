import React from "react";
import "./search-form.scss"

export default function SearchForm() {
    return(
        <form action="#" className="search-form">
            <input type="search" placeholder="What do you want to watch?"/>
            <input className="btn" type="submit"/>
        </form>
    )
}