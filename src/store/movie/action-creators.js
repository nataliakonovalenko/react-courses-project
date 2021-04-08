import {
    DELETE_MOVIE_LIST_SUCCESS,
    EDIT_MOVIE,
    FILTER_MOVIES,
    LOAD_MOVIE_LIST_START,
    LOAD_MOVIE_LIST_SUCCESS,
    SET_TOTAL_AMOUNT,
    SORT_MOVIES,
    ADD_MOVIE,
    LOAD_MOVIE_DETAILS
} from "./action-types";
import api from "../../api/api";

export const setMoviesList = (moviesList) => ({type: LOAD_MOVIE_LIST_SUCCESS, payload: { moviesList }});
export const setTotalAmount = (totalAmount) => ({type: SET_TOTAL_AMOUNT, payload: { totalAmount }});
export const setSortedMoviesList = (moviesList) => ({type: SORT_MOVIES, payload: { moviesList }});
export const setFilteredMoviesList = (moviesList) => ({type: FILTER_MOVIES, payload: { moviesList }});

export const getMoviesList = () => {
    return (dispatch) => {
        dispatch({
            type: LOAD_MOVIE_LIST_START
        });
        api.getMovies().then((moviesData) => {
            dispatch(setMoviesList(moviesData.data));
            dispatch(setTotalAmount(moviesData.totalAmount));
        }).catch((error) => {
            console.log(error);
        });
    }
};

export const getMovie = (id) => {
    return (dispatch) => {
        api.getMovie(`${id}`).then((movieDetails) => {
            console.log('movieDetails', movieDetails)
            dispatch({
                type: LOAD_MOVIE_DETAILS,
                payload: {
                    movieDetails
                }
            });
        }).catch((error) => {
            console.log(error);
        });
    }
};

export const deleteMovie = (movieId) => {
    return (dispatch) => {
        dispatch({
            type: "DELETE_MOVIE_LIST_START"
        });

        api.deleteMovie(`${movieId}`).then(() => {
            dispatch({
                type: DELETE_MOVIE_LIST_SUCCESS,
                payload: {
                    movieId
                }
            });
        }).catch((error) => {
            dispatch({
                type: "DELETE_MOVIE_LIST_START_ERROR",
                payload: error
            });
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
        api.sortMovies(sortByParam, orderByParam).then((moviesData) => {
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
            dispatch(setTotalAmount(moviesData.totalAmount));
        }).catch((error) => {
            console.log(error);
        });
    }
};

