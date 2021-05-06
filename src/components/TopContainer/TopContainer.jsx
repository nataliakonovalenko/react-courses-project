import React, { useEffect } from "react";
import { connect } from "react-redux";
import loadable from '@loadable/component';
import "./top-container.scss";
import { useParams } from "react-router-dom";
import { getMovie } from "../../store/movie/action-creators";
import SearchForm from "../SearchForm/SearchForm";
import BgImage from "../../assets/hero-img.jpg";

const MovieDetails = loadable(() => import("../MovieDetails/MovieDetails"), {
    fallback: <div>Loading...</div>,
    ssr: false,
});

const TopContainer = (props) => {
    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined) {
            props.getMovieDetails(id);
        }
    }, [id]);

    return (
        <div className="top-container">
            <div className="bg-image" style={{ backgroundImage: `url(${BgImage})` }} />
            <div className="container">
                {id ? <MovieDetails movie={props.movieDetails} /> : <SearchForm />}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movieDetails: state.movie.movieDetails,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: (id) => {
            return dispatch(getMovie(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopContainer);
