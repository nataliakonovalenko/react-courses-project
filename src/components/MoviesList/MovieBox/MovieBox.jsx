import React from "react";
import PropTypes from 'prop-types';

const MoviesBox = (props) => {
    return(
        <div className={"movie-box"}>
            <img src={props.image} alt=""/>
            <div className={"movie-description"}>
                <div className={"movie-heading"}>
                    <h2>{props.title}</h2>
                    <span className={"movie-title"}>{props.genres}</span>
                </div>
                <span className={"movie-year"}>{props.date}</span>
            </div>
        </div>
    )
};

export default MoviesBox;

MoviesBox.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array,
    date: PropTypes.string,
};
