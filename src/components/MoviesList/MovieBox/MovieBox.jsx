import React, {useState, useCallback} from "react";
import PropTypes from "prop-types";
import "./movie-box.scss"
import MovieDropdownList from "../MovieDropdownList/MovieDropdownList";
import { DateTime } from "luxon";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {showModal} from "../../../store/modal/action-creators";
import {useHistory} from 'react-router-dom';

const MovieBoxComponent = (props) => {
    const [movieDropdown, setMovieDropdown] = useState(false);
    const history = useHistory();

    const showDropdown = () => {
        setMovieDropdown(true);
    };

    const hideDropdown = () => {
        setMovieDropdown(false);
    };

    const handleEditAction = useCallback(() => {
        props.showModal("edit", {movieId: props.movie.id});
    }, [props.movie]);

    const handleDeleteAction = useCallback(() => {
        props.showModal("delete", {movieId: props.movie.id});
    }, [props.movie]);

    const {posterPath, title, genres, releaseDate} = props.movie;

    return (
        <div className="movie-box" onClick={() => {
            history.push(`/film/${props.movie.id}`)
        }}>
            <img src={posterPath} alt=""/>
            <div className="movie-description">
                <div className="movie-heading">
                    <h2>{title}</h2>
                    <span className="movie-title">{genres.join(", ")}</span>
                </div>
                <span className="movie-year">{releaseDate.toFormat("y")}</span>
            </div>
            <div className="movie-dropdown">
                <button type="button" onClick={showDropdown} className="movie-edit-icon"></button>
                {
                    movieDropdown === true ? (
                        <div className="movie-dropdown-wrap">
                            <MovieDropdownList
                                onEditClick={handleEditAction}
                                onDeleteClick={handleDeleteAction} />
                            <button
                                className="movie-dropdown-close"
                                onClick={hideDropdown}
                            >X</button>
                        </div>
                    ): null
                }
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ showModal }, dispatch)
};

const MovieBox = connect(null, mapDispatchToProps)(MovieBoxComponent);

MovieBoxComponent.propTypes = {
    movie: PropTypes.exact({
        posterPath: PropTypes.string,
        title: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
        releaseDate: PropTypes.instanceOf(DateTime),
        id: PropTypes.number,
        tagline: PropTypes.string,
        voteAverage: PropTypes.number,
        voteCount: PropTypes.number,
        overview: PropTypes.string,
        budget: PropTypes.number,
        revenue: PropTypes.number,
        runtime: PropTypes.number,
    }),
};

export default MovieBox;