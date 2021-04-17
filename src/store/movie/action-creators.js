import {
    DELETE_MOVIE,
    EDIT_MOVIE,
    FILTER_MOVIES,
    LOAD_MOVIE_LIST_SUCCESS,
    SORT_MOVIES,
    ADD_MOVIE,
    LOAD_MOVIE_DETAILS,
} from "./action-types";
import api from "../../api/api";

export const setMoviesList = (moviesList) => ({type: LOAD_MOVIE_LIST_SUCCESS, payload: { moviesList }});
export const setSortedMoviesList = (moviesList) => ({type: SORT_MOVIES, payload: { moviesList }});
export const setFilteredMoviesList = (moviesList) => ({type: FILTER_MOVIES, payload: { moviesList }});

export const getMovie = (id) => {
    return (dispatch) => {
        return api.getMovie(id).then((movieDetails) => {
            dispatch({
                type: LOAD_MOVIE_DETAILS,
                payload: {
                    movieDetails
                }
            });

            return movieDetails;
        }).catch((error) => {
            console.log(error);
        });
    }
};

export const deleteMovie = (movieId) => {
    return (dispatch) => {
        return api.deleteMovie(movieId).then((response) => {
            dispatch({
                type: DELETE_MOVIE,
                payload: {
                    movieId
                }
            });
        }).catch((error) => {
            console.log(error);
        });
    }
};

export const editMovie = (formData) => {
    return (dispatch) => {
        return api.editMovie(formData).then(() => {
            dispatch({
                type: EDIT_MOVIE,
                payload: {
                    formData
                }
            });

            return formData;
        }).catch((error) => {
            console.log(error);
        });
    }
};

export const addMovie = (formData) => {
    return (dispatch) => {
        return api.addMovie(formData).then((movie) => {
            dispatch({
                type: ADD_MOVIE,
                payload: {
                    movie
                }
            });

            return movie;
        }).catch((error) => {
            console.log(error);
        });
    }
};

export const sortMoviesList = (sortByParam, orderByParam) => {
    return (dispatch) => {
        return api.sortMovies(sortByParam, orderByParam).then((moviesData) => {
            dispatch(setSortedMoviesList(moviesData.data));
        }).catch((error) => {
            console.log(error);
        });
    }
};

export const filterMoviesList = (filter) => {
    return (dispatch) => {
        api.filterMovies(filter).then((moviesData) => {
            dispatch(setFilteredMoviesList(moviesData.data));
        }).catch((error) => {
            console.log(error);
        });
    }
};

export const searchMovies = (search, searchBy) => {
    return (dispatch) => {
        api.searchMovies(search, searchBy).then((moviesData) => {
            dispatch(setMoviesList(moviesData.data));
        }).catch((error) => {
            console.log(error);
        });
    }
};

