import React, {useState, useContext, useCallback} from "react";
import PropTypes from "prop-types";
import "./movie-box.scss"
import MovieDropdownList from "../MovieDropdownList/MovieDropdownList";
import MovieContext from "../../../MovieContext"
import ModalContext from "../../../ModalContext"
import { DateTime } from "luxon";

const MovieBox = (props) => {
    const [movieDropdown, setMovieDropdown] = useState(false);
    const {setModalData, setModalToShow} = useContext(ModalContext);
    const {setMovie} = useContext(MovieContext);

    const showDropdown = () => {
        setMovieDropdown(true);
    };

    const hideDropdown = () => {
        setMovieDropdown(false);
    };

    const handleEditAction = useCallback(() => {
        setModalData({movieId: props.movie.id});
        setModalToShow('edit');
    }, [props.movie]);

    const handleDeleteAction = useCallback(() => {
        setModalData({movieId: props.movie.id});
        setModalToShow('delete');
    }, [props.movie]);

    const {poster_path, title, genres, release_date} = props.movie;

    return (
        <div className="movie-box">
            <img src={poster_path} alt=""/>
            <div className="movie-description" onClick={() => {
                setMovie(props.movie);
            }}>
                <div className="movie-heading">
                    <h2>{title}</h2>
                    <span className="movie-title">{genres.join(', ')}</span>
                </div>
                <span className="movie-year">{release_date.toFormat('y')}</span>
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

export default MovieBox;

MovieBox.propTypes = {
    movie: PropTypes.exact({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
        release_date: PropTypes.instanceOf(DateTime).isRequired,
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