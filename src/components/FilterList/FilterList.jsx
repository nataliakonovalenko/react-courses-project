import React, { useState } from "react";
import "./filter-list.scss";
import { connect } from "react-redux";
import { filterMoviesList } from "../../store/movie/action-creators";

const shortid = require("shortid");

const FilterList = (props) => {
    const filterList = ["All", "Documentary", "Comedy", "Horror", "Crime"];
    const [isActive, setActive] = useState(filterList[0]);

    const handleFilterLink = (e) => {
        e.preventDefault();
        const filterLink = e.currentTarget.getAttribute("data-filter-link");
        props.filterMovies(filterLink);
    };

    return (
        <ul className="filter-list">
            {filterList.map((filterLink) => {
                return (
                    <li key={shortid.generate()} className={isActive === filterLink ? 'active' : null} onClick={() => { setActive(filterLink); }}>
                        <a href="#" data-filter-link={filterLink} onClick={handleFilterLink}>{filterLink}</a>
                    </li>
                );
            })}
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterMovies: (filter) => {
            dispatch(filterMoviesList(filter));
        },
    };
};

export default connect(null, mapDispatchToProps)(FilterList);
