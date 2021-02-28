import React from "react";
import "./MoviesList.scss";
import movies from "../../data/movies.js"
import MovieBox from "./MovieBox/MovieBox";

export default function MoviesList() {
    return(
        <div className={"movies-list"}>
            {movies.map( el => <MovieBox key={`movie-box-${el.id}`} image={el.poster_path} title={el.title} genres={el.genres} date={el.release_date} /> ) }
        </div>
    )
}