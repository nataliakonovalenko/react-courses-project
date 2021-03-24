import React from "react";
import "./main.scss"
import FilterList from "../FilterList/FilterList";
import SortBox from "../SortBox/SortBox";
import MoviesList from "../MoviesList/MoviesList";

export default function Main(props) {
    return(
        <div className="container">
            <div className="top-panel">
                <FilterList/>
                <SortBox />
            </div>
            <MoviesList onAction={props.onAction} />
        </div>
    )
}