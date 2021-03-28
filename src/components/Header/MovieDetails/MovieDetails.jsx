import React from "react";
import "./movie-details.scss";

const MovieDetails = props => {
    const {movie} = props;

    if (!movie) {
        return null
    }

    const {poster_path, title, vote_average, release_date, runtime, overview} = movie;

    return (
        <div className="movie-details">
            <img className="movie-img" src={poster_path} alt=""/>
            <div className="movie-description">
                <h1>{title} <span className="film-rating">{vote_average}</span></h1>
                <span className="movie-info">{release_date.toFormat("y")}</span>
                <span className="movie-info">{runtime}</span>
                <p>{overview}</p>
            </div>
        </div>
    )
};

export default MovieDetails;