import React from "react";
import "./header.scss";
import Logo from "../Logo/Logo";
import HeroImage from "../../assets/hero-img.jpg";
import SearchForm from "./SearchForm/SearchForm";
import Button from "../Button/Button";
import MovieDetails from "./MovieDetails/MovieDetails";
import {bindActionCreators} from "redux";
import {showModal} from "../../redux/modal/action-creators";
import {connect} from "react-redux";

const HeaderComponent = (props) => {
    const handleAddMovie = () => {
        props.showModal('add');
    };

    return (
        <header className="header">
            <div className="bg-image" style={{backgroundImage: `url(${HeroImage})`}}/>
            <div className="container">
                <div className="top-header">
                    <Logo/>
                    <Button className="add-movie" title="+ Add movie" onButtonClick={handleAddMovie}/>
                </div>
                <MovieDetails movie={props.detailsLayoutMovie} />
                {/*<div className="search-block">*/}
                {/*    <h1>Find your movie</h1>*/}
                {/*    <SearchForm/>*/}
                {/*</div>*/}
            </div>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        detailsLayoutMovie: state.movieReducer.detailsLayoutMovie
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ showModal }, dispatch)
};

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

export default Header;