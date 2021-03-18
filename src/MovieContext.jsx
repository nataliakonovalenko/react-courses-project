import React from "react";

const MovieContext = React.createContext({
    movie: null,
    setMovie: () => {}
});

export default MovieContext;
