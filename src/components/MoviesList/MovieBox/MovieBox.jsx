import React from "react";
import PropTypes from 'prop-types';

const MoviesBox = (props) => {
    const {poster_path, title, genres, release_date} = props.movie;

    return(
        <div className={"movie-box"}>
            <img src={poster_path} alt=""/>
            <div className={"movie-description"}>
                <div className={"movie-heading"}>
                    <h2>{title}</h2>
                    <span className={"movie-title"}>{genres}</span>
                </div>
                <span className={"movie-year"}>{release_date.getFullYear()}</span>
            </div>
        </div>
    )
};

export default MoviesBox;

MoviesBox.propTypes = {
    movie: PropTypes.exact({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
        release_date: PropTypes.instanceOf(Date).isRequired,
        id: PropTypes.number.isRequired,
        tagline: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        vote_count: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        budget: PropTypes.number.isRequired,
        revenue: PropTypes.number.isRequired,
        runtime: PropTypes.number.isRequired,
    }),
};
