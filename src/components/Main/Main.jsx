import React from "react";
import "./main.scss"
import FilterList from "../FilterList/FilterList";
import SortBox from "../SortBox/SortBox";
import MoviesList from "../MoviesList/MoviesList";
import {connect} from "react-redux";

const Main = (props) => {
    return(
        <div className="container">
            <div className="top-panel">
                <FilterList/>
                <SortBox />
            </div>
            <span className="filter-title">{props.totalAmount} movies found</span>
            <MoviesList onAction={props.onAction} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        totalAmount: state.movieReducer.totalAmount
    };
};

export default connect(mapStateToProps)(Main);