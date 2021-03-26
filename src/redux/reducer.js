import api from './../api/api';
import {
    LOAD_MOVIE_LIST_SUCCESS,
    LOAD_MOVIE_LIST_START,
    DELETE_MOVIE_LIST_SUCCESS,
    EDIT_MOVIE,
    SORT_MOVIES,
    SET_TOTAL_AMOUNT
} from "./actionTypes"

const initialState = {
    moviesList: [],
    totalAmount: null
};

export default function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case LOAD_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                moviesList: payload.moviesList
            };
        case LOAD_MOVIE_LIST_START:
            return {
                ...state
            };
        case SET_TOTAL_AMOUNT:
            return{
                ...state,
                totalAmount: payload.totalAmount
            };
        case DELETE_MOVIE_LIST_SUCCESS:
            const movieToDeleteIndex = state.moviesList.findIndex(movie => movie.id === payload.movieId);

            if (movieToDeleteIndex !== -1) {
                const moviesList = state.moviesList.slice(0);

                moviesList.splice(movieToDeleteIndex, 1);

                return {
                    ...state,
                    moviesList
                }
            }

            return {
                ...state
            };
        case EDIT_MOVIE:
            const movieToEditIndex = state.moviesList.findIndex(movie => movie.id === payload.formData.id);

            if (movieToEditIndex !== -1) {
                const currentMovie = state.moviesList[movieToEditIndex];
                let newMovieData = Object.assign( {}, currentMovie, payload.formData);
                const moviesList = state.moviesList.slice(0);

                moviesList.splice(movieToEditIndex, 1, newMovieData);

                return {
                    ...state,
                    moviesList
                }
            }

            return {
                ...state
            };
        case SORT_MOVIES:
            return {
                ...state,
                moviesList: payload.moviesList
            };
        default:
            return state
    }
}

export const setMoviesList = (moviesList) => ({type: LOAD_MOVIE_LIST_SUCCESS, payload: { moviesList }});
export const setTotalAmount = (totalAmount) => ({type: SET_TOTAL_AMOUNT, payload: { totalAmount }});
export const setSortedMoviesList = (moviesList) => ({type: SORT_MOVIES, payload: { moviesList }});

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

export const deleteMovie = (movieId) => {
    return (dispatch) => {
        dispatch({
            type: 'DELETE_MOVIE_LIST_START'
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
                type: 'DELETE_MOVIE_LIST_START_ERROR',
                payload: error
            });
        });
    }
};

export const editMovie = (formData) => {
    return (dispatch) => {
        api.editMovie(formData).then(() => {
            dispatch({
                type: EDIT_MOVIE,
                payload: {
                    formData
                }
            })
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