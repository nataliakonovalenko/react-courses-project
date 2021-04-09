import React from "react";
import TopContainer from "../components/TopContainer/TopContainer";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import "../styles/pages/home.scss";

const Home = () => {
    return(
        <>
            <TopContainer />
            <FilterPanel />
            <div className="movies-container">
                <h2>No movie found</h2>
            </div>
        </>
    )
};

export default Home;