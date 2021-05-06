import React from "react";
import ReactDOM from "react-dom";
import "./styles/common.scss";
import { BrowserRouter } from 'react-router-dom';
import { DateTime } from "luxon";
import { loadableReady } from '@loadable/component';
import App from "./App";
import configureStore from "./store/store";

const preloadedState = window.PRELOADED_STATE;

if (preloadedState.movie && preloadedState.movie.moviesList) {
    preloadedState.movie.moviesList = preloadedState.movie.moviesList.map((movie) => {
        return {
            ...movie,
            releaseDate: DateTime.fromISO(movie.releaseDate),
        };
    });
}

const store = configureStore(preloadedState);

loadableReady(() => {
    ReactDOM.hydrate(
        <App
            Router={BrowserRouter}
            store={store}
        />,
        document.getElementById("root"),
    );
});
