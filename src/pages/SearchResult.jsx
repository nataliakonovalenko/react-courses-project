import React from "react";
import TopContainer from "../components/TopContainer/TopContainer";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import MoviesList from "../components/MoviesList/MoviesList";
import {connect} from "react-redux";

const SearchResult = (props) => {
    return(
        <>
            <TopContainer />
            <FilterPanel />
            <span className="filter-title">{props.totalAmount} movies found</span>
            <MoviesList onAction={props.onAction} />
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        totalAmount: state.movie.totalAmount
    };
};

export default connect(mapStateToProps)(SearchResult);