import React from "react";
import TopContainer from "../components/TopContainer/TopContainer";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import MoviesList from "../components/MoviesList/MoviesList";

const Home = (props) => {
    return(
        <>
            <TopContainer />
            <FilterPanel />
            <MoviesList onAction={props.onAction} />
        </>
    )
};

export default Home;