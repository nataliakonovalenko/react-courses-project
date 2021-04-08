import React, { useEffect } from "react";
import "./movies-list.scss";
import MovieBox from "./MovieBox/MovieBox";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import {getMoviesList} from "../../store/movie/action-creators";

const MoviesList = (props) => {
    useEffect(() => {
        props.getMovies();
    }, []);

    const {moviesList} = props;

    return(
        <div className="movies-list">
            {moviesList.map( movie => <MovieBox key={`movie-box-${movie.id}`} movie={movie} /> ) }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        moviesList: state.movie.moviesList
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMovies: getMoviesList
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);