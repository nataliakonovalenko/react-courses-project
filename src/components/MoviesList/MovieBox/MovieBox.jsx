import React, {useState, useCallback} from "react";
import PropTypes from "prop-types";
import "./movie-box.scss"
import MovieDropdownList from "../MovieDropdownList/MovieDropdownList";
import { DateTime } from "luxon";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {showModal} from "../../../redux/modal/action-creators";
import { openMovieDetails } from "../../../redux/movie/action-creators";

const MovieBoxComponent = (props) => {
    const [movieDropdown, setMovieDropdown] = useState(false);

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

    const {poster_path, title, genres, releaseDate} = props.movie;

    return (
        <div className="movie-box">
            <img src={poster_path} alt=""/>
            <div className="movie-description" onClick={() => {
                props.openMovieDetails(props.movie);
            }}>
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
    return bindActionCreators({ showModal, openMovieDetails }, dispatch)
};

const MovieBox = connect(null, mapDispatchToProps)(MovieBoxComponent);

MovieBoxComponent.propTypes = {
    movie: PropTypes.exact({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
        releaseDate: PropTypes.instanceOf(DateTime).isRequired,
        id: PropTypes.number.isRequired,
        tagline: PropTypes.string.isRequired,
        voteAverage: PropTypes.number.isRequired,
        voteCount: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        budget: PropTypes.number.isRequired,
        revenue: PropTypes.number.isRequired,
        runtime: PropTypes.number.isRequired,
    }),
};

export default MovieBox;