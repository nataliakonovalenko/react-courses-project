import React, { useEffect } from "react";
import "./movies-list.scss";
import MovieBox from "./MovieBox/MovieBox";
import { connect } from 'react-redux';
import {getMoviesList} from "../../redux/reducer";
import { bindActionCreators } from 'redux'

const MoviesList = (props) => {

    useEffect(() => {
        props.getMovies();
    }, []);

    const {moviesList, totalAmount} = props;

    return(
        <div className="movies-list">
            {moviesList.map( movie => <MovieBox key={`movie-box-${movie.id}`} movie={movie} /> ) }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        moviesList: state.moviesList
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMovies: getMoviesList
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);