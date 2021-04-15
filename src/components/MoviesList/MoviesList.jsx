import React, {useEffect} from "react";
import "./movies-list.scss";
import MovieBox from "./MovieBox/MovieBox";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';
import {searchMovies} from "../../store/movie/action-creators";


const MoviesList = (props) => {
    const {searchQuery} = useParams();

    useEffect(() => {
        if (searchQuery) {
            props.searchMovies(searchQuery, "title");
        }
    }, [searchQuery]);

    const {moviesList} = props;

    if (!moviesList.length) {
        return (
            <div className="movies-container">
                <h2>No movie found</h2>
            </div>
        )
    } else {
        return (
            <>
                <span className="filter-title">{moviesList.length} movies found</span>
                <div className="movies-list">
                    {moviesList.map(movie => <MovieBox key={`movie-box-${movie.id}`} movie={movie}/>)}
                </div>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        moviesList: state.movie.moviesList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchMovies: (search, searchBy) => {
            dispatch(searchMovies(search, searchBy))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);