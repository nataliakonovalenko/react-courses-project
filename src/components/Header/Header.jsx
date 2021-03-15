import React, {useContext} from "react";
import "./header.scss";
import Logo from "../Logo/Logo";
import HeroImage from "../../assets/hero-img.jpg";
import SearchForm from "./SearchForm/SearchForm";
import Button from "../Button/Button";
import MovieDetails from "./MovieDetails/MovieDetails";
import ModalContext from "../../ModalContext";

const Header = (props) => {
    const {setModalToShow, setModalData} = useContext(ModalContext);

    const handleAddMovie = () => {
        setModalData({});
        setModalToShow('add');
    };

    return (
        <header className="header">
            <div className="bg-image" style={{backgroundImage: `url(${HeroImage})`}}/>
            <div className="container">
                <div className="top-header">
                    <Logo/>
                    <Button className="add-movie" title="+ Add movie" onButtonClick={handleAddMovie}/>
                </div>
                <MovieDetails/>
                {/*<div className="search-block">*/}
                {/*    <h1>Find your movie</h1>*/}
                {/*    <SearchForm/>*/}
                {/*</div>*/}
            </div>
        </header>
    )
};

export default Header;