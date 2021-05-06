import React from "react";
import "./header.scss";
import { bindActionCreators } from "redux";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { showModal } from "../../store/modal/action-creators";
import Search from "../../assets/search.svg";

const HeaderComponent = (props) => {
    const { pathname } = useLocation();

    const handleAddMovie = () => {
        props.showModal("add");
    };

    return (
        <header className="header">
            <div className="container">
                <Logo />
                {pathname === "/" ? <Button className="btn-success" title="+ Add movie" onButtonClick={handleAddMovie} />
                    : <Link to="/"><img src={Search} width="40" height="40" alt="search" /></Link> }
            </div>
        </header>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ showModal }, dispatch);
};

const Header = connect(null, mapDispatchToProps)(HeaderComponent);

export default Header;
