import React, { useState } from "react";
import "./sort-box.scss";
import { connect } from "react-redux";
import { sortMoviesList } from "../../store/movie/action-creators";

const shortid = require("shortid");

const SortBox = (props) => {
    const selectOptions = {
        release_date: "Release Date",
        vote_average: "Rating",
    };
    const [sortParam, setSortParam] = useState(selectOptions[0]);
    const [sortOrder, setSortOrder] = useState("desc");

    const handleOptionChange = (e) => {
        const sortBy = e.target.value;
        setSortParam(sortBy);
        props.sortMovies(sortBy, sortOrder);
    };

    const handleSortOrder = () => {
        let sortingOrder = sortOrder;

        if (sortingOrder === "desc") {
            sortingOrder = "asc";
        } else {
            sortingOrder = "desc";
        }

        setSortOrder(sortingOrder);
        props.sortMovies(sortParam, sortingOrder);
    };

    return (
        <div className="sort-box">
            <span className="sort-title">Sort by</span>
            <div className="select sort-select">
                <select onChange={handleOptionChange}>
                    {Object.keys(selectOptions).map((key) => {
                        return <option key={shortid.generate()} value={key}>{selectOptions[key]}</option>;
                    })}
                </select>
                <span role="button" tabIndex="0" className={`sort-order ${sortOrder === "desc" ? "desc" : "asc"}`} onClick={handleSortOrder}>sort icon</span>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        sortMovies: (sortByParam, orderByParam) => {
            dispatch(sortMoviesList(sortByParam, orderByParam));
        },
    };
};

export default connect(null, mapDispatchToProps)(SortBox);
