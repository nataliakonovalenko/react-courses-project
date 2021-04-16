import {
    LOAD_MOVIE_LIST_SUCCESS,
    DELETE_MOVIE,
    EDIT_MOVIE,
    SORT_MOVIES,
    FILTER_MOVIES,
    ADD_MOVIE,
    LOAD_MOVIE_DETAILS,
} from "./action-types"

const initialState = {
    moviesList: [],
    detailsLayoutMovie: null,
    movieDetails: null
};

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case LOAD_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                moviesList: payload.moviesList
            };
        case LOAD_MOVIE_DETAILS:
            return {
                ...state,
                movieDetails: payload.movieDetails
            };
        case DELETE_MOVIE:
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
            return {
                ...state,
                moviesList: state.moviesList.map(movie => movie.id === payload.formData.id ? payload.formData : movie)
            };
        case ADD_MOVIE:
            const moviesList = state.moviesList;
            moviesList.push(payload.movie.data);

            return {
                ...state,
                moviesList
            };
        case SORT_MOVIES:
            return {
                ...state,
                moviesList: payload.moviesList
            };
        case FILTER_MOVIES:
            return {
                ...state,
                moviesList: payload.moviesList
            };
        default:
            return state
    }
}