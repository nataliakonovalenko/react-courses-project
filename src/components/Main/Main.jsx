import React from "react";
import "./Main.scss"
import FilterList from "../FilterList/FilterList";
import SortBox from "../SortBox/SortBox";
import MoviesList from "../MoviesList/MoviesList";

export default function Main() {
    return(
        <div className="container">
            <div className="top-panel">
                <FilterList/>
                <SortBox />
            </div>
            <span className="filter-title">39 movies found</span>
            <MoviesList />
        </div>
    )
}