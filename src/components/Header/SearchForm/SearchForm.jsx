import React from "react";
import "./search-form.scss"
import Button from "../../Button/Button";

export default function SearchForm() {
    return(
        <form action="#" className="search-form">
            <input type="search" placeholder="What do you want to watch?"/>
            <Button type="submit" title="submit" />
        </form>
    )
}