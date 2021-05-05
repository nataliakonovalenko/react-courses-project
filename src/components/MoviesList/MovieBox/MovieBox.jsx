import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import "./movie-box.scss";
import { DateTime } from "luxon";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from 'react-router-dom';
import { showModal } from "../../../store/modal/action-creators";
import MovieDropdownList from "../MovieDropdownList/MovieDropdownList";

const MovieBoxComponent = ({ movie, showModal }) => {
    const [movieDropdown, setMovieDropdown] = useState(false);
    const history = useHistory();
    const { posterPath, title, genres, releaseDate, id } = movie;

    const showDropdown = () => {
        setMovieDropdown(true);
    };

    const hideDropdown = () => {
        setMovieDropdown(false);
    };

    const handleEditAction = useCallback(() => {
        showModal("edit", { movieId: id });
    }, [movie]);

    const handleDeleteAction = useCallback(() => {
        showModal("delete", { movieId: id });
    }, [movie]);

    const handleFilmIdToHistory = () => {
        history.push(`/film/${id}`);
    };

    return (
        <div className="movie-box" role="button" tabIndex="0" onClick={handleFilmIdToHistory}>
            <img src={posterPath} width="500" height="750" alt="img description" />
            <div className="movie-description">
                <div className="movie-heading">
                    <h2>{title}</h2>
                    <span className="movie-title">{genres.join(", ")}</span>
                </div>
                <span className="movie-year">{releaseDate.toFormat("y")}</span>
            </div>
            <div className="movie-dropdown">
                <button type="button" onClick={showDropdown} className="movie-edit-icon" />
                {
                    movieDropdown === true ? (
                        <div className="movie-dropdown-wrap">
                            <MovieDropdownList
                                onEditClick={handleEditAction}
                                onDeleteClick={handleDeleteAction}
                            />
                            <button
                                className="movie-dropdown-close"
                                onClick={hideDropdown}
                            >
                                X
                            </button>
                        </div>
                    ) : null
                }
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ showModal }, dispatch);
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

export default React.memo(MovieBox);
