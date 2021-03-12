import React from "react";
import "./header.scss";
import Logo from "../Logo/Logo";
import HeroImage from "../../assets/hero-img.jpg";
import SearchForm from "./SearchForm/SearchForm";
import Button from "../Button/Button";

export default class Header extends React.Component{
    constructor( props ) {
        super( props );
    }

    handleAddMovie = () => {
        this.props.onAddMovie();
    };

    render() {
        return (
            <header className="header">
                <div className="bg-image" style={{backgroundImage: `url(${HeroImage})`}}/>
                <div className="top-header">
                    <div className="container">
                        <Logo/>
                        <Button className="add-movie" title="+ Add movie" onButtonClick={this.handleAddMovie}/>
                    </div>
                </div>
                <div className="search-block">
                    <h1>Find your movie</h1>
                    <SearchForm/>
                </div>
            </header>
        )
    }
}