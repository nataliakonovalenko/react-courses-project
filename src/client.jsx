import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/common.scss";
import { BrowserRouter } from 'react-router-dom';
import configureStore from "./store/store";
import { DateTime } from "luxon";
import { loadableReady } from '@loadable/component'

let preloadedState = window.PRELOADED_STATE;

if (preloadedState.movie && preloadedState.movie.moviesList) {
    preloadedState.movie.moviesList = preloadedState.movie.moviesList.map((movie) => {
        return {
            ...movie,
            releaseDate: DateTime.fromISO(movie.releaseDate)
        }
    });
}

const store = configureStore(window.PRELOADED_STATE);

loadableReady(() => {
    ReactDOM.hydrate(
        <App
            Router={BrowserRouter}
            store={store}
        />,
        document.getElementById("root")
    );
});
