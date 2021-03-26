import React from "react";
import "./filter-list.scss"
import {filterMoviesList} from "../../redux/reducer";
import {connect} from "react-redux";

const FilterList = (props) => {
    const filterList = ["All", "Documentary", "Comedy", "Horror", "Crime"];

    const handleFilterLink = (e) => {
        e.preventDefault();
        const filterLink = e.currentTarget.getAttribute('data-filter-link');
        props.filterMovies(filterLink);
    };

    return(
        <ul className="filter-list">
            {filterList.map((filterLink, index) => {
                return (
                    <li key={`filterLink-${index}`}>
                        <a href="" data-filter-link={filterLink} onClick={handleFilterLink}>{filterLink}</a>
                    </li>
                )
            })}
        </ul>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterMovies: (filter) => {
            dispatch(filterMoviesList(filter))
        }
    };
};

export default connect(null, mapDispatchToProps)(FilterList);