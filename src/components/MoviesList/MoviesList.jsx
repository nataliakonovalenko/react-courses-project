import React from "react";
import "./MoviesList.scss";
import moviesMapped from "../../data/movies.js"
import MovieBox from "./MovieBox/MovieBox";

export default function MoviesList() {
    return(
        <div className="movies-list">
            {moviesMapped.map( movie => <MovieBox key={`movie-box-${movie.id}`} movie={movie} /> ) }
        </div>
    )
}