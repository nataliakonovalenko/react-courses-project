import React from "react";
import "./movies-list.scss";
import moviesMapped from "../../data/movies.js"
import MovieBox from "./MovieBox/MovieBox";

const MoviesList = (props) => {
    return(
        <div className="movies-list">
            {moviesMapped.map( movie => <MovieBox key={`movie-box-${movie.id}`} movie={movie} onAction={props.onAction} /> ) }
        </div>
    )
};

export default MoviesList;